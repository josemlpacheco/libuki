// eslint-disable-next-line no-undef
importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js"
);

// eslint-disable-next-line no-undef
workbox.precaching.precacheAndRoute(["App.js"]);
// eslint-disable-next-line no-undef
workbox.routing.registerRoute(
  new RegExp("\\.*"),
  // eslint-disable-next-line no-undef
  new workbox.strategies.CacheFirst({
    cacheName: "CacheHTML",
  })
);
