const addResourcesToCache = async (resources) => {
  const cache = await caches.open("v1");
  await cache.addAll(resources);
};

self.addEventListener("install", (event) => {
  event.waitUntil(
    addResourcesToCache([
      "/",
      "/dev/watch/6_00_0.html",
      "/dev/watch/manifest.json"
    ]),
  );
});
