importScripts('u/uv.bundle.js');
importScripts('u/uv.config.js');
importScripts('u/uv.sw.js');
const sw = new UVServiceWorker();
self.addEventListener('fetch', (event) => event.respondWith(sw.fetch(event)));
