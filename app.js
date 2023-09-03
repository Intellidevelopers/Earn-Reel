// Check if the browser supports Service Workers
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('service-worker.js') // Register the service worker file
        .then(function(registration) {
            console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch(function(error) {
            console.error('Service Worker registration failed:', error);
        });
}

// Your app logic goes here
