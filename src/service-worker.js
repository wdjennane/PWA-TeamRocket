/* eslint-disable no-undef */

self.__precacheManifest = [].concat(self.__precacheManifest || [])
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

workbox.routing.registerRoute(
  new RegExp(
    "https://my-json-server.typicode.com/wdjennane/PWA-teamrocket/(.*)"
  ),
  new workbox.strategies.CacheFirst({
    cacheName: "articles",
    method: "get",
    cacheableResponse: { statuses: [0, 200] },
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 30
      })
    ]
  })
)

workbox.routing.registerRoute(
  new RegExp("/img/icons/(.*)"),
  new workbox.strategies.CacheFirst({
    cacheName: "img",
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 30
      })
    ]
  })
)
