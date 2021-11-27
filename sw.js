
  const cacheName = 'Project 002 Cache';
  
  const appShellFiles = [
        'https://projectpavanapp.github.io',
        'https://projectpavanapp.github.io/index.html',
        'https://projectpavanapp.github.io/app.js',
        'https://projectpavanapp.github.io/content.js',
        'https://projectpavanapp.github.io/favicon.ico',
        'https://projectpavanapp.github.io/project002.webmanifest',
        'https://projectpavanapp.github.io/style.css'
  ];
  console.log("appShellFiles is created and is made");


  /*const contentImages = [];
  for (let i = 0; i < content.length; i++) {
    contentImages.push(`data/img/${content[i].slug}.jpg`);
  }*/
  //removed this from the following line: ".concat(gamesImages);"
  const contentToCache = appShellFiles;
  
  self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    e.waitUntil((async () => {
      const cache = await caches.open(cacheName);
      console.log('[Service Worker] Caching all: app shell and content');
      await cache.addAll(contentToCache);
    })());
  });
  
  
  /*const appShellFiles = [
    '/pwa-examples/js13kpwa/',
    '/pwa-examples/js13kpwa/index.html',
    '/pwa-examples/js13kpwa/app.js',
    '/pwa-examples/js13kpwa/style.css',
    '/pwa-examples/js13kpwa/fonts/graduate.eot',
    '/pwa-examples/js13kpwa/fonts/graduate.ttf',
    '/pwa-examples/js13kpwa/fonts/graduate.woff',
    '/pwa-examples/js13kpwa/favicon.ico',
    '/pwa-examples/js13kpwa/img/js13kgames.png',
    '/pwa-examples/js13kpwa/img/bg.png',
    '/pwa-examples/js13kpwa/icons/icon-32.png',
    '/pwa-examples/js13kpwa/icons/icon-64.png',
    '/pwa-examples/js13kpwa/icons/icon-96.png',
    '/pwa-examples/js13kpwa/icons/icon-128.png',
    '/pwa-examples/js13kpwa/icons/icon-168.png',
    '/pwa-examples/js13kpwa/icons/icon-192.png',
    '/pwa-examples/js13kpwa/icons/icon-256.png',
    '/pwa-examples/js13kpwa/icons/icon-512.png'
  ];*/
    