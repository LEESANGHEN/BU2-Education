/* 설치형(PWA) 앱으로 인식되기 위한 최소 서비스 워커.
   캐시를 쓰지 않고 항상 네트워크에서 받는다 — GitHub Pages에 새 버전이 올라가면
   앱을 다시 설치하지 않아도 바로 반영되고, 오래된 파일이 남는 문제도 없다. */
self.addEventListener('install',function(){self.skipWaiting();});
self.addEventListener('activate',function(e){e.waitUntil(self.clients.claim());});
self.addEventListener('fetch',function(e){e.respondWith(fetch(e.request));});
