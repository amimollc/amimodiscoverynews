// This is the service worker for Amimo Discovery PWA

// --- Cache Configuration ---
const CACHE_NAME = 'amimo-discovery-v1';
const urlsToCache = [
  '/',
  'index.html',
  'manifest.json',
  'icon-512.png',
  'icon-192.png'
  // Add your CSS, JS, etc., here
];
const OFFLINE_URL = 'offline.html'; // A custom offline page

// --- Installation & Pre-caching ---
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting()) // Activate worker immediately
  );
});

// --- Activation: Clean up old caches ---
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim()) // Take control of all clients
  );
});

// --- Fetch Event: Serve cached content or fall back to network/offline page ---
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        // Clone the request as it's a one-time-use stream
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest).then((networkResponse) => {
          // Check if we received a valid response
          if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
            return networkResponse;
          }

          // Clone the response as it's a one-time-use stream
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseToCache);
            });
          return networkResponse;
        });
      }).catch(() => {
        // If both cache and network fail, show offline page for navigation requests
        if (event.request.mode === 'navigate') {
          return caches.match(OFFLINE_URL);
        }
        // For other requests, return a generic offline response
        return new Response('You are offline. Please check your network connection.', {
          status: 503,
          statusText: 'Service Unavailable',
        });
      })
  );
});

// --- Background Sync: Retry failed actions when online ---
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-news') {
    event.waitUntil(syncNewsData());
  }
});

async function syncNewsData() {
  const cache = await caches.open('news-data');
  try {
    const response = await fetch('https://your-api.com/latest-news');
    if (response.ok) {
      await cache.put('/api/news', response);
      console.log('Background sync: News data updated successfully.');
      // You could also show a notification to inform the user of an update.
      self.registration.showNotification('Amimo Discovery', {
        body: 'News updated in the background!',
        icon: '/icon-192.png',
        badge: '/icon-192.png',
      });
    } else {
      console.error('Background sync: Failed to fetch news.');
    }
  } catch (error) {
    console.error('Background sync: An error occurred:', error);
    throw error; // Let the browser know sync failed and it should retry later
  }
}

// --- Push Notifications: Receive messages from your server ---
self.addEventListener('push', (event) => {
  let data = {
    title: 'Amimo Discovery',
    body: 'New update available for you!',
    icon: 'icon-192.png',
    url: '/'
  };
  if (event.data) {
    try {
      data = event.data.json();
    } catch (e) {
      data.body = event.data.text();
    }
  }

  const options = {
    body: data.body,
    icon: data.icon,
    badge: 'icon-192.png',
    vibrate: [200, 100, 200],
    data: { url: data.url }
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
        // If a window is already open, focus it
        for (let client of windowClients) {
          if (client.url === urlToOpen && 'focus' in client) {
            return client.focus();
          }
        }
        // If not, open a new window
        if (clients.openWindow) {
          return clients.openWindow(urlToOpen);
        }
      })
  );
});
