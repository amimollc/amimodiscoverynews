// Amimo Discovery – Full Service Worker (Updated with Offline Page)

const CACHE_NAME = 'amimo-discovery-v5';
const OFFLINE_PAGE = '/amimodiscoverynews/offline.html';
const STATIC_ASSETS = [
  OFFLINE_PAGE,
  '/amimodiscoverynews/index.html',
  '/amimodiscoverynews/manifest.json',
  '/amimodiscoverynews/favicon.png'
];

// ----- Install -----
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// ----- Activate & cleanup -----
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.map(key => {
        if (key !== CACHE_NAME) return caches.delete(key);
      })
    )).then(() => self.clients.claim())
  );
});

// ----- Fetch: network-first for navigation with offline fallback, cache-first for assets -----
self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);

  // For navigation (HTML pages) – try network, fallback to offline page
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then(response => {
          // Cache the fresh page for future offline use
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(request, responseClone);
          });
          return response;
        })
        .catch(async () => {
          // Offline fallback: serve the offline page from cache
          const cachedOffline = await caches.match(OFFLINE_PAGE);
          if (cachedOffline) return cachedOffline;
          // If offline page not cached yet, try to fetch it (should be cached from install)
          return caches.match(OFFLINE_PAGE) || new Response('Offline page not available', { status: 503 });
        })
    );
    return;
  }

  // For static assets (CSS, JS, images, etc.) – cache first
  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;
      return fetch(request).then(networkResponse => {
        // Cache new assets for future offline use
        if (networkResponse && networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(request, responseClone);
          });
        }
        return networkResponse;
      }).catch(() => {
        // Optional: return a default offline image or empty response for images
        if (request.url.match(/\.(jpg|png|gif|svg|webp)$/)) {
          return new Response('', { status: 200, headers: { 'Content-Type': 'image/svg+xml' } });
        }
        // For other assets, just fail silently
      });
    })
  );
});

// ----- Background Sync -----
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-news') {
    event.waitUntil(syncNewsData());
  }
});

async function syncNewsData() {
  const cache = await caches.open('news-data');
  try {
    const response = await fetch('/amimodiscoverynews/api/latest-news');
    if (response.ok) {
      await cache.put('/amimodiscoverynews/api/news', response);
      await self.registration.showNotification('Amimo Discovery', {
        body: 'News updated in background!',
        icon: '/amimodiscoverynews/favicon.png',
        badge: '/amimodiscoverynews/favicon.png'
      });
    }
  } catch (err) {
    console.error('Background sync failed', err);
  }
}

// ----- Periodic Background Sync -----
self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'periodic-news-sync') {
    event.waitUntil(periodicUpdateNews());
  }
});

async function periodicUpdateNews() {
  const cache = await caches.open('news-data');
  try {
    const response = await fetch('/amimodiscoverynews/api/latest-news');
    if (response.ok) {
      await cache.put('/amimodiscoverynews/api/news', response);
      console.log('Periodic sync completed');
    }
  } catch (err) {
    console.error('Periodic sync failed', err);
  }
}

// ----- Push Notifications -----
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
