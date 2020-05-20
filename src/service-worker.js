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

self.addEventListener("push", event => {
  const pushMessage = event.data.text()

  const options = {
    body: pushMessage,
    icon: "./img/icon-152x152.png",
    tag: "vibration-sample"
  }

  event.waitUntil(self.registration.showNotification(pushMessage, options))
})

self.addEventListener("install", () => {
  self.skipWaiting()
})

// self.addEventListener("notificationclick", event => {
//   event.notification.close()

//   const promiseChain = clients.openWindow("http://127.0.0.1:8887/#/")
//   event.waitUntil(promiseChain)
// })
