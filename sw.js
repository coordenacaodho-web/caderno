// Guarda o app e os cadernos no aparelho para abrir mesmo sem internet.
// Ao publicar produtos novos, aumente a versão para os celulares atualizarem.
const VERSAO = 'caderno-v2';
const ARQUIVOS = [
  './', 'index.html', 'produtos.js', 'manifest.webmanifest',
  'img/unipreco-branco.png', 'img/unipreco-cor.png', 'img/mascote.webp', 'img/apisnutri.png', 'img/icon-192.png', 'img/icon-512.png',
  'img/alivtoss.jpg', 'pdf/alivtoss.pdf'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSAO).then(c => c.addAll(ARQUIVOS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSAO).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request).then(r => {
      if (r.ok && new URL(e.request.url).origin === location.origin) {
        const copia = r.clone(); caches.open(VERSAO).then(c => c.put(e.request, copia));
      }
      return r;
    }).catch(() => caches.match(e.request, { ignoreSearch: true }))
  );
});
