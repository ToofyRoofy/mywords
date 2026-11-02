// نسخة الكاش — غيّر الرقم مع كل تحديث كبير
const CACHE = 'mywords-v2';
// مسارات نسبية: بتشتغل سواء الموقع على /mywords/ أو على اسم الريبو في GitHub Pages
const FILES = ['./', './index.html', './mywords_data.js', './manifest.json'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => Promise.all(FILES.map(f => c.add(f).catch(() => {}))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE).map(k => caches.delete(k))
    )).then(() => self.clients.claim())
  );
});

// ملفات التطبيق: الشبكة الأول (عشان التعديلات تظهر فورًا) وبعدين الكاش لو أوفلاين.
// الخطوط وأي ملف خارجي: الكاش الأول.
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const sameOrigin = new URL(req.url).origin === self.location.origin;
  if (sameOrigin) {
    e.respondWith(
      fetch(req).then(res => {
        if (res && res.ok) {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(req, clone));
        }
        return res;
      }).catch(() => caches.match(req).then(r => r || caches.match('./index.html')))
    );
  } else {
    e.respondWith(
      caches.match(req).then(cached => cached || fetch(req).then(res => {
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(req, clone));
        return res;
      }))
    );
  }
});
