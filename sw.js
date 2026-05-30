const CACHE_NAME = 'amimo-discovery-v4';
const OFFLINE_PAGE = '/amimodiscoverynews/offline.html';
const STATIC_ASSETS = [
  OFFLINE_PAGE,
  '/amimodiscoverynews/index.html',
  '/amimodiscoverynews/manifest.json',
  '/amimodiscoverynews/favicon.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.map(key => { if (key !== CACHE_NAME) return caches.delete(key); })
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
