
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('xo-cache').then(cache => {
      return cache.addAll([
        'xo.html',
        'click.mp3',
        'win.mp3',
        'icon.png'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
