const CACHE='bu-pwa-v1-2';
const CORE=['./','./index.html','./styles.css','./app.js','./manifest.webmanifest','./assets/bu-icon.png','./assets/bu-icon.gif','./assets/bg-city-car.jpg','./assets/bg-auth.jpg','./assets/bg-news.jpg'];
self.addEventListener('install',e=>e.waitUntil((async()=>{const c=await caches.open(CACHE);await c.addAll(CORE);await self.skipWaiting();})()));
self.addEventListener('activate',e=>e.waitUntil((async()=>{for(const k of await caches.keys()){if(k.startsWith('bu-pwa-')&&k!==CACHE)await caches.delete(k);}await self.clients.claim();})()));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;const u=new URL(e.request.url);if(u.origin!==self.location.origin)return;e.respondWith((async()=>{const cached=await caches.match(e.request);if(cached)return cached;try{const r=await fetch(e.request);if(r.ok){const c=await caches.open(CACHE);c.put(e.request,r.clone());}return r;}catch{return cached||Response.error();}})());});
