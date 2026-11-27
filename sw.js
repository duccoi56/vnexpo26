const CACHE_NAME = 'vn-defence-expo-2026-v7';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.webmanifest',
  './assets/css/styles.css',
  './assets/js/app.js',
  './assets/vendor/tailwindcss-3.4.17.min.js',
  './assets/vendor/lucide-0.460.0.min.js',
  './assets/images/logo-expo.png',
  './assets/images/hero-banner.jpg',
  './assets/images/emblem-left.png',
  './assets/images/emblem-right.png',
  './assets/images/apple-touch-icon.png',
  './assets/images/icon-192.png',
  './assets/images/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS_TO_CACHE)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Stale-While-Revalidate for instant offline boot + silent background updates when online
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const isNav = event.request.mode === 'navigate';
  event.respondWith(
    caches.match(event.request).then(cached => {
      const networkFetch = fetch(event.request)
        .then(response => {
          if (response && response.status === 200 && response.type === 'basic') {
            const copy = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
          }
          return response;
        })
        .catch(() => {
          if (cached) return cached;
          return isNav ? caches.match('./index.html') : new Response('', { status: 503, statusText: 'Offline' });
        });
      return cached || networkFetch;
    })
  );
});
