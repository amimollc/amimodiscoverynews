// Amimo Discovery – Service Worker (Offline + Cache Optimised + Background Sync + Notifications)
const CACHE_NAME = 'amimo-discovery-v6';
const OFFLINE_PAGE = '/amimodiscoverynews/offline.html';
const STATIC_ASSETS = [
  OFFLINE_PAGE,
  '/amimodiscoverynews/index.html',
  '/amimodiscoverynews/manifest.json',
  '/amimodiscoverynews/favicon.png',
  '/amimodiscoverynews/style.css',      // add if you have a separate CSS file
  '/amimodiscoverynews/main.js'         // add your main JS file
];

// ----- Install -----
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// ----- Activate & cleanup old caches -----
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.map(key => {
        if (key !== CACHE_NAME) return caches.delete(key);
      })
    )).then(() => self.clients.claim())
  );
});

// ----- Fetch: network-first for navigation, cache-first for assets -----
self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);

  // Navigation (HTML pages) – try network, fallback to offline page
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then(response => {
          // Cache the fresh page for offline use
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(request, responseClone);
          });
          return response;
        })
        .catch(async () => {
          const cachedOffline = await caches.match(OFFLINE_PAGE);
          if (cachedOffline) return cachedOffline;
          return new Response('Offline page not available', { status: 503 });
        })
    );
    return;
  }

  // Static assets (CSS, JS, images) – cache first, network fallback
  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;
      return fetch(request).then(networkResponse => {
        // Cache only successful responses of same-origin or certain types
        if (networkResponse && networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(request, responseClone);
          });
        }
        return networkResponse;
      }).catch(() => {
        // Optional: return a tiny placeholder for images
        if (request.url.match(/\.(jpg|png|gif|svg|webp)$/)) {
          return new Response('', { status: 200, headers: { 'Content-Type': 'image/svg+xml' } });
        }
        // For other assets, simply fail (no fallback)
      });
    })
  );
});

// ============================================================
//  BACKGROUND SYNC (one‑off) – triggered manually from client
// ============================================================
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-news') {
    event.waitUntil(fetchAndProcessArticles());
  }
});

// ============================================================
//  PERIODIC BACKGROUND SYNC – runs automatically every ~hour
//  (requires permission and user engagement on the site)
// ============================================================
self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'periodic-news-sync') {
    event.waitUntil(fetchAndProcessArticles());
  }
});

// ============================================================
//  SHARED FUNCTION: fetch articles, compare with cached version,
//  and show notification if new articles are found.
// ============================================================
async function fetchAndProcessArticles() {
  const API_URL = '/amimodiscoverynews/api/latest-articles'; // Replace with your actual API endpoint
  const CACHE_KEY = '/amimodiscoverynews/api/articles';
  const cache = await caches.open('articles-cache');

  try {
    // 1. Fetch fresh data from the API
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error(`API responded with ${response.status}`);
    const freshArticles = await response.json();

    // 2. Retrieve previously cached articles (if any)
    const cachedResponse = await cache.match(CACHE_KEY);
    let oldArticles = [];
    if (cachedResponse) {
      oldArticles = await cachedResponse.json();
    }

    // 3. Detect new articles (simple: compare by ID or title)
    const newArticles = freshArticles.filter(fresh => {
      return !oldArticles.some(old => old.id === fresh.id);
    });

    // 4. If there are new articles, store the fresh list in cache
    //    and show a notification (if we have new articles)
    if (newArticles.length > 0) {
      // Store the fresh data for next comparison
      await cache.put(CACHE_KEY, new Response(JSON.stringify(freshArticles)));

      // Show a notification to the user
      const title = '📰 New articles available!';
      const body = `${newArticles.length} new article${newArticles.length > 1 ? 's' : ''} – tap to read.`;
      const icon = '/amimodiscoverynews/favicon.png';
      const url = '/amimodiscoverynews/';

      // Use the registration to show notification
      await self.registration.showNotification(title, {
        body: body,
        icon: icon,
        badge: icon,
        data: { url: url },
        vibrate: [200, 100, 200]
      });

      console.log(`[SW] Background sync: found ${newArticles.length} new articles.`);
    } else {
      console.log('[SW] Background sync: no new articles.');
    }

  } catch (error) {
    console.error('[SW] Background sync failed:', error);
    // Re-throw to let the browser know the sync failed and should be retried
    throw error;
  }
}

// ============================================================
//  PUSH NOTIFICATIONS (keep as is – already implemented)
// ============================================================
self.addEventListener('push', (event) => {
  let data = {
    title: 'Amimo Discovery',
    body: 'New content available.',
    icon: '/amimodiscoverynews/favicon.png',
    badge: '/amimodiscoverynews/favicon.png',
    url: '/amimodiscoverynews/'
  };
  if (event.data) {
    try {
      const parsed = event.data.json();
      data = { ...data, ...parsed };
    } catch {
      data.body = event.data.text();
    }
  }
  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: data.icon,
      badge: data.badge,
      data: { url: data.url }
    })
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const urlToOpen = event.notification.data?.url || '/amimodiscoverynews/';
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true })
      .then(windowClients => {
        for (let client of windowClients) {
          if (client.url === urlToOpen && 'focus' in client) return client.focus();
        }
        if (clients.openWindow) return clients.openWindow(urlToOpen);
      })
  );
});