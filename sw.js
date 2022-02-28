

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('supremecacher').then(function(something) {
      return something.addAll([
        'https://project002app.github.io/oldindex.html',
        'https://project002app.github.io/index.html',
        'https://project002app.github.io/schedules.html',
        'https://project002app.github.io/calendars.html',
        'https://project002app.github.io/homestyle.css',
        'https://project002app.github.io/schedulestyle.css',
        'https://project002app.github.io/calendarstyle.css',
        'https://project002app.github.io/app.js',
        'https://project002app.github.io/favicon.ico',
        'https://project002app.github.io/project002.webmanifest'
      ]);
    })
  );
 });
 console.log('Cache is made and service worker installed');


 //Now to respond to network requests
 self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});

//The code after this is not needed



//This code will cache the app shell
  //Lists the files except the main mass image files to be cached
  /*const cacheName = 'Project 002 Cache';
  const appShellFiles = [
        'https://project002app.github.io',
        'https://project002app.github.io/index.html',
        'https://project002app.github.io/app.js',
        'https://project002app.github.io/favicon.ico',
        'https://project002app.github.io/project002.webmanifest',
        'https://project002app.github.io/style.css',
        //Now to cache the images
        //'https://project002app.github.io/img for the main/formula e.jpg',
        //'https://project002app.github.io/icons for web app/computer 16x16.png',
  ];*/
  /*Uh note: do not cache content.js file bc MDN said "You may notice we haven't cached game.js.
  This is the file that contains the data we use when displaying our games. In reality this 
  data would most likely come from an API endpoint or database and caching the data would 
  mean updating it periodically when there was network connectivity. We won't go into that 
  here, but the Periodic Background Sync API is good further reading on this topic."*/
  //https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Offline_Service_workers
  
  //console.log("appShellFiles array is made");

/*Gets the main mass image files and puts them in an array, and combines that array
with the one before this to create a thingy that will have all of the stuff to cache*/
  /*const specialholderofimage = [];
  for (let i = 0; i < content.length; i++) {
    specialholderofimage.push(`data/contentimages/${content[i].imageholder}.png`);
  }
  const contentToCache = appShellFiles;*/
//.concat(contentImages)
/*const contentToCache = appShellFiles;
//Actually does the caching and takes list of stuff to cache and caches it
  self.addEventListener('install', (e) => {
    console.log('[Service Worker] Installed');
    e.waitUntil((async () => {
      const cache = await caches.open(cacheName);
      console.log('[Service Worker] Caching all: app shell and content');
      await cache.addAll(contentToCache);
      console.log("If I read this, then the service worker is reinstalled and stuff is cached");
    })());
  });*/
  
  
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
    
