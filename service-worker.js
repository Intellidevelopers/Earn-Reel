// Cache the app's essential resources
const cacheName = 'offline-app-v1';
const cacheFiles = [
    '/',
    'index.html',
    'app.js',
    'withdraw.html',
    'home.html',
    'bonus.html',
    'pay.html',
    'index.css',
    'style.css',
    'logo (1).png',
    '/assets'

];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(cacheFiles);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
