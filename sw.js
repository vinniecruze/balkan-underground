const CACHE = 'bu-pwa-v2';
const CORE = ['./', './index.html', './styles.css', './app.js', './config.js', './manifest.webmanifest', './assets/bu-icon.gif'];
self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    for (const url of CORE) {
      try { await cache.add(url); } catch (e) { console.warn('Cache skip:', url, e); }
    }
    await self.skipWaiting();
  })());
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key.startsWith('bu-') && key !== CACHE).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;
  event.respondWith((async () => {
    try {
      const fresh = await fetch(event.request);
      if (fresh.ok) {
        const cache = await caches.open(CACHE);
        cache.put(event.request, fresh.clone());
      }
      return fresh;
    } catch (error) {
      return (await caches.match(event.request)) || Response.error();
    }
  })());
});
