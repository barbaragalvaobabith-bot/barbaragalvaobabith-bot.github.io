// O planner mudou para /meu-planner/. Este arquivo desliga o app antigo da raiz do site.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => /^meu-planner-v\d+$/.test(k)).map(k => caches.delete(k))))
      .then(() => self.registration.unregister())
  );
});
