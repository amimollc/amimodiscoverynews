// -------------------------------------------------------------------
// Amimo Discovery – Complete Service Worker
// Features: Offline fallback, cache-first assets, background sync,
//           periodic background sync, push notifications.
// All icon references use 'favicon.png' to avoid missing file errors.
// -------------------------------------------------------------------

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

// --- Cache names & offline page ------------------------------------
const CACHE_NAME = 'amimo-discovery-v3';
const OFFLINE_PAGE = 'offline.html';
const STATIC_ASSETS = [
  'offline.html',
  'index.html',
  'manifest.json',
  'favicon.png'           // main icon – ensures notifications have a valid image
];

// --- Workbox navigation preload (if supported) --------------------
if (workbox.navigationPreload.isSupported()) {
  workbox.navigationPreload.enable();
}

// --- Install: cache offline page + static assets ------------------
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.add(OFFLINE_PAGE).then(() => cache.addAll(STATIC_ASSETS));
    }).then(() => self.skipWaiting())
  );
});

// --- Activate: clean up old caches and take control --------------
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME && name !== 'pwabuilder-page') {
            console.log('Deleting old cache:', name);
            return caches.delete(name);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// --- Fetch: navigation fallback + cache-first for others ---------
self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      (async () => {
        try {
          const preloadResp = await event.preloadResponse;
          if (preloadResp) return preloadResp;
          const networkResp = await fetch(event.request);
          return networkResp;
        } catch (error) {
          const cache = await caches.open(CACHE_NAME);
          const cachedFallback = await cache.match(OFFLINE_PAGE);
          return cachedFallback;
        }
      })()
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;
      return fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
        }
        return networkResponse;
      }).catch(() => {
        // For missing images/requests, return a simple offline response (no broken icon)
        if (event.request.destination === 'image') {
          return new Response(null, { status: 204, statusText: 'No Content' });
        }
        return new Response('You are offline. Content not available.', {
          status: 503,
          statusText: 'Service Unavailable'
        });
      });
    })
  );
});

// ===================== BACKGROUND SYNC ============================
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-news') {
    event.waitUntil(syncNewsData());
  }
});

async function syncNewsData() {
  const cache = await caches.open('news-data');
  try {
    const response = await fetch('api/latest-news'); // Replace with your API
    if (response.ok) {
      await cache.put('api/news', response);
      console.log('Background sync: news updated');
      self.registration.showNotification('Amimo Discovery', {
        body: 'News updated in background!',
        icon: 'favicon.png',      // uses favicon – safe and exists
        badge: 'favicon.png'
      });
    }
  } catch (error) {
    console.error('Background sync failed', error);
    throw error;
  }
}

// ===================== PERIODIC BACKGROUND SYNC ===================
self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'periodic-news-sync') {
    event.waitUntil(periodicUpdateNews());
  }
});

async function periodicUpdateNews() {
  const cache = await caches.open('news-data');
  try {
    const response = await fetch('api/latest-news');
    if (response.ok) {
      await cache.put('api/news', response);
      console.log('Periodic sync: news updated in background');
      // Optionally show a silent notification (but periodic sync should be subtle)
    }
  } catch (error) {
    console.error('Periodic sync failed', error);
  }
}

// ===================== PUSH NOTIFICATIONS =========================
self.addEventListener('push', (event) => {
  let data = {
    title: 'Amimo Discovery',
    body: 'New content available.',
    icon: 'favicon.png',       // fallback to favicon
    badge: 'favicon.png',
    url: '/'
  };
  if (event.data) {
    try {
      const parsed = event.data.json();
      data = { ...data, ...parsed };
    } catch (e) {
      data.body = event.data.text();
    }
  }

  const options = {
    body: data.body,
    icon: data.icon || 'favicon.png',
    badge: data.badge || 'favicon.png',
    vibrate: [200, 100, 200],
    data: { url: data.url || '/' }
  };

  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const urlToOpen = event.notification.data?.url || '/';
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true })
      .then((windowClients) => {
        for (let client of windowClients) {
          if (client.url === urlToOpen && 'focus' in client) return client.focus();
        }
        if (clients.openWindow) return clients.openWindow(urlToOpen);
      })
  );
});
