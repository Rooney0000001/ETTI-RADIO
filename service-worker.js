// ETTI Radio & TV — Service Worker
// Enables the "Install App" (PWA) functionality.

self.addEventListener('install', function(event){
  self.skipWaiting();
});

self.addEventListener('activate', function(event){
  event.waitUntil(self.clients.claim());
});

// Simple pass-through fetch handler — required for the browser to consider
// this installable as an app.
self.addEventListener('fetch', function(event){
  event.respondWith(fetch(event.request).catch(function(){
    return new Response('Offline. Please reconnect to use ETTI Radio & TV.', {
      headers: { 'Content-Type': 'text/plain' }
    });
  }));
});
