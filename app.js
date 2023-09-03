// Register the service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
      .then(function(registration) {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch(function(error) {
        console.error('Service Worker registration failed:', error);
      });
  }
  
  // Add event listener for the 'install' event
  self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('app-cache-v1')
        .then(function(cache) {
          return cache.addAll([
            '/',
            'index.html',
            'style.css',
            'app.js',
            'logo (1).png',
            'bonus.html',
            'home.css',
            'withdraw.html',
            'pay.html',
            'index.css'
            // Add more files and assets to cache as needed
          ]);
        })
    );
  });
  
  // Add event listener for the 'fetch' event
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Return the cached response if it exists
          if (response) {
            return response;
          }
  
          // Otherwise, fetch the request from the network
          return fetch(event.request);
        })
    );
  });