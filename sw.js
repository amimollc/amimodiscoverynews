// Amimo Discovery – Service Worker (Offline + Cache Optimised)
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

// ----- Push Notifications (optional, keep if you use them) -----
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