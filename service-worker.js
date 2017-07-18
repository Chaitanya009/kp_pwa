var cacheName = 'weatherPWA-v1';
var filesToCache = [
  '/',
  '/index.html',
  '/news.html',
  '/hospitals.html',
  '/clinics.html',
  '/pharmacies.html',
  '/css/clinicdetail.css',
  '/css/hospitals.css',
  '/css/register.css',
  '/css/style.css',
  '/css/csslib/bootstrap.min.css',
  '/lib/ionic/css/ionic.css',
  '/js/angular.min.js',
  '/js/app.js',
  '/js/controller.js',
  '/js/jquery.js',
  '/js/bootstrap.min.js',
  '/js/angular-route.js',
  '/js/angular-lazy-img.js',
  '/lib/angular-animate/angular-animate.min.js'


];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
});

self.addEventListener('fetch', function(e) {
  console.log('[ServiceWorker] Fetch', e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
