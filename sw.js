// Amimo Discovery – Service Worker (Offline + Cache Optimised)
const CACHE_NAME = 'amimo-discovery-v6';
const OFFLINE_PAGE = '/amimodiscoverynews/offline.html';
const STATIC_ASSETS = [
  OFFLINE_PAGE,
  '/amimodiscoverynews/index.html',
  '/amimodiscoverynews/manifest.json',
  '/amimodiscoverynews/favicon.png',
  '/amimodiscoverynews/style.css',
  '/amimodiscoverynews/main.js'
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

// ----- Fetch (with RSS bypass) -----
self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);

  // ⛔ Never cache RSS feeds or API proxy calls
  if (url.hostname === 'api.rss2json.com' || url.pathname.includes('/feed/')) {
    event.respondWith(fetch(request));
    return;
  }

  // Navigation – try network, fallback to offline page
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request).then(response => {
        const responseClone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(request, responseClone));
        return response;
      }).catch(async () => {
        const cachedOffline = await caches.match(OFFLINE_PAGE);
        return cachedOffline || new Response('Offline', { status: 503 });
      })
    );
    return;
  }

  // Static assets – cache‑first
  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;
      return fetch(request).then(networkResponse => {
        if (networkResponse && networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, responseClone));
        }
        return networkResponse;
      }).catch(() => {
        // Return a tiny placeholder for images
        if (request.url.match(/\.(jpg|png|gif|svg|webp)$/)) {
          return new Response('', { status: 200, headers: { 'Content-Type': 'image/svg+xml' } });
        }
      });
    })
  );
});

// ============================================================
//  BACKGROUND SYNC – simplified (remove API dependency)
// ============================================================
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-news') {
    // Instead of calling an API, you can broadcast a message to the client
    // to fetch fresh news. Or, if you have an API, replace the URL below.
    event.waitUntil(
      self.clients.matchAll().then(clients => {
        clients.forEach(client => {
          client.postMessage({ type: 'SYNC_NEWS' });
        });
      })
    );
  }
});

// Keep periodic sync as is (or disable if not used)
self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'periodic-news-sync') {
    event.waitUntil(
      self.clients.matchAll().then(clients => {
        clients.forEach(client => {
          client.postMessage({ type: 'SYNC_NEWS' });
        });
      })
    );
  }
});

// ============================================================
//  PUSH NOTIFICATIONS (unchanged)
// ============================================================
self.addEventListener('push', (event) => {
  // ... keep your existing push handler
});

self.addEventListener('notificationclick', (event) => {
  // ... keep your existing notification click handler
});