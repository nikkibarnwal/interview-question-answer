const CACHE_NAME = "my-cache-v1";
const OFFLINE_URL = "offline.html";

// Install event – caching offline page
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.add(OFFLINE_URL))
  );
});

// Fetch event – Serve from cache when offline
self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(OFFLINE_URL))
  );
});
