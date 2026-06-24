// ================================================================
//  Amimo Discovery – Service Worker (Offline + Cache)
// ================================================================

const CACHE_NAME = 'amimo-shell-v2';
const OFFLINE_PAGE = '/amimodiscoverynews/offline.html';

// Static assets to cache (critical for offline)
const STATIC_ASSETS = [
  '/amimodiscoverynews/',
  '/amimodiscoverynews/index.html',
  '/amimodiscoverynews/style.css',
  '/amimodiscoverynews/main.js',
  '/amimodiscoverynews/manifest.json',
  '/amimodiscoverynews/icon-512.png',
  '/amimodiscoverynews/offline.html',  // create this file
  // Add any other static files (e.g., category.js, pages.css, etc.)
];

// ----- Install: cache static assets -----
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        // Add all static assets
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        // Skip waiting so the new service worker activates immediately
        // (but we won't claim clients until reload)
        return self.skipWaiting();
      })
  );
});

// ----- Activate: clean old caches, but do NOT claim clients -----
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    })
    // ⚠️ We DO NOT call clients.claim() here.
    // This means the service worker won't control the page until the next reload.
    // First‑time visitors will see the live network version.
  );
});

// ----- Fetch: network‑first for navigation, cache‑first for static assets -----
self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);

  // ----- 1. Never cache RSS/API calls -----
  if (url.hostname === 'api.rss2json.com' || url.pathname.includes('/feed/')) {
    event.respondWith(fetch(request));
    return;
  }

  // ----- 2. Navigation (HTML pages) – network‑first, fallback to offline page -----
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
          // Offline – show the offline page
          const cachedOffline = await caches.match(OFFLINE_PAGE);
          if (cachedOffline) return cachedOffline;
          // Fallback: a simple offline message
          return new Response('You are offline. Please check your connection.', {
            status: 503,
            headers: { 'Content-Type': 'text/plain' }
          });
        })
    );
    return;
  }

  // ----- 3. Static assets (CSS, JS, icons, manifest) – cache‑first -----
  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;
      // If not in cache, fetch from network and cache for next time
      return fetch(request).then(networkResponse => {
        if (networkResponse && networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(request, responseClone);
          });
        }
        return networkResponse;
      }).catch(() => {
        // For images, return a tiny placeholder if offline
        if (request.url.match(/\.(jpg|png|gif|svg|webp)$/)) {
          return new Response('', { status: 200, headers: { 'Content-Type': 'image/svg+xml' } });
        }
        // For other assets, fail gracefully
      });
    })
  );
});

// ============================================================
//  Optional: Push notifications & background sync (keep as is)
// ============================================================
// ... (keep your existing push and sync handlers if you have them)