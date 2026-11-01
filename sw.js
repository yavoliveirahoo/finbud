const CACHE = 'finbud-v28';
const ASSETS = ['./', './index.html', './tailwind.css', './manifest.webmanifest', './vendor/chart.umd.min.js', './vendor/lucide.min.js', './vendor/supabase.js',
  './icons/icon.svg', './icons/icon-192.png', './icons/icon-512.png', './icons/icon-maskable-512.png'];
// Só estes endereços podem ir para o cache. Dados do Supabase (saldo, compras, sessão) NUNCA são guardados.
const CACHEABLE_EXTERNAL = ['fonts.googleapis.com', 'fonts.gstatic.com'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Rede primeiro (pega atualizações do app), cache como reserva offline
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  const sameOrigin = url.origin === self.location.origin;
  if (!sameOrigin && !CACHEABLE_EXTERNAL.includes(url.hostname)) return; // Supabase e o resto: direto da rede, sem cache
  e.respondWith(
    fetch(e.request).then(res => {
      if (res && (res.ok || res.type === 'opaque')) {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
      }
      return res;
    }).catch(() => caches.match(e.request).then(r => r || (sameOrigin ? caches.match('./index.html') : Response.error())))
  );
});
