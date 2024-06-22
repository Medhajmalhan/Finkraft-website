'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/config": "cc64685a0a278971cc1695136dd8dd29",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"assets/AssetManifest.bin": "ae72a9cf6933b9de19bbb0c53127623c",
"assets/AssetManifest.bin.json": "8d2cec318711296aa6c810d3af4b7cab",
"assets/AssetManifest.json": "91b92b35ef921e399726007c09ec27f0",
"assets/assets/image.png": "a95222780eb4ec349d7f90c8a1076f0d",
"assets/assets%255Cimage.png": "a95222780eb4ec349d7f90c8a1076f0d",
"assets/assets10/image.png": "f4b2082497b9f41a7f776c6fdc2d7a48",
"assets/assets10%255Cimage.png": "f4b2082497b9f41a7f776c6fdc2d7a48",
"assets/assets11/image.png": "f74a4056568bd5ea625274fc7bf0015e",
"assets/assets11%255Cimage.png": "f74a4056568bd5ea625274fc7bf0015e",
"assets/assets12/image.png": "4ececb833f962de09f7128287a886af8",
"assets/assets12%255Cimage.png": "4ececb833f962de09f7128287a886af8",
"assets/assets13/image.png": "06619308fb85e5cdff2bed84ea751d39",
"assets/assets13%255Cimage.png": "06619308fb85e5cdff2bed84ea751d39",
"assets/assets14/image.png": "ca0bbde68b229240e47489c43c94e704",
"assets/assets14%255Cimage.png": "ca0bbde68b229240e47489c43c94e704",
"assets/assets15/image.png": "790fdb627845339fcb09e499698e6c85",
"assets/assets15%255Cimage.png": "790fdb627845339fcb09e499698e6c85",
"assets/assets16/image.png": "1be04b0f45235e7b4f1a5cbfb3909b0d",
"assets/assets16%255Cimage.png": "1be04b0f45235e7b4f1a5cbfb3909b0d",
"assets/assets17/image.png": "ea8165b672fc12c4544cedfab9fa8682",
"assets/assets17%255Cimage.png": "ea8165b672fc12c4544cedfab9fa8682",
"assets/assets18/image.png": "aea9a31bdf098f3ecfe84e28c2a932bb",
"assets/assets18%255Cimage.png": "aea9a31bdf098f3ecfe84e28c2a932bb",
"assets/assets19/image.png": "38f0dbf293f8e4078e47fc5ee61c2fef",
"assets/assets19%255Cimage.png": "38f0dbf293f8e4078e47fc5ee61c2fef",
"assets/assets2/image.png": "c504f72d7166e404c521a2a38f3de75a",
"assets/assets2%255Cimage.png": "c504f72d7166e404c521a2a38f3de75a",
"assets/assets20/image.png": "b053a2f3c44b9f151b8f5788c8cf68ff",
"assets/assets20%255Cimage.png": "b053a2f3c44b9f151b8f5788c8cf68ff",
"assets/assets21/image.png": "205fd20e1da36b5a88b62fcba068e550",
"assets/assets21%255Cimage.png": "205fd20e1da36b5a88b62fcba068e550",
"assets/assets3/image.png": "611935562b187e0e77d4578e9ec9ee1e",
"assets/assets3%255Cimage.png": "611935562b187e0e77d4578e9ec9ee1e",
"assets/assets4/image.png": "75aa34c25d6f454eaea8e8e93f7e2ea2",
"assets/assets4%255Cimage.png": "75aa34c25d6f454eaea8e8e93f7e2ea2",
"assets/assets5/image.png": "1bda754558c1cbc260a20a218114db5d",
"assets/assets5%255Cimage.png": "1bda754558c1cbc260a20a218114db5d",
"assets/assets6/image.png": "26344edc470053fed0e21d9559dbea9e",
"assets/assets6%255Cimage.png": "26344edc470053fed0e21d9559dbea9e",
"assets/assets7/image.png": "29a75e7153cba2f683894c08c06bb7bd",
"assets/assets7%255Cimage.png": "29a75e7153cba2f683894c08c06bb7bd",
"assets/assets8/image.png": "159009a6d7a6c8662cb2cd9fbca4c6d1",
"assets/assets8%255Cimage.png": "159009a6d7a6c8662cb2cd9fbca4c6d1",
"assets/assets9/image.png": "916d95bb1df3f1180fef8c9be0b98987",
"assets/assets9%255Cimage.png": "916d95bb1df3f1180fef8c9be0b98987",
"assets/FontManifest.json": "53e60880d7fdd1080cd0ec0837ab6577",
"assets/fonts/MaterialIcons-Regular.otf": "45a0860458f5a18080536002c17e9c93",
"assets/NOTICES": "ec050e5ea2f91d57f5dea4cfa4900380",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "da59c17e7cab00aaf260355b87dd8c45",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "c17d858d09fb1c596ef0adbf08872086",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "6d8ab59254a120b76bf53f167e809470",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0073ef26aa920855145b8c390afee486",
"/": "0073ef26aa920855145b8c390afee486",
"main.dart": "6559f8ca089d74b445fdad6c61df02c9",
"main.dart.js": "088e673ea626241709dcd47b5bcb63f5",
"manifest.json": "09b576fa710b66a06061caa75c24bfb1",
"styles.css": "ce4c2a577a92344fab12d8a19d611ad0",
"version.json": "617ea52030031260ae87f1d345ff25a8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
