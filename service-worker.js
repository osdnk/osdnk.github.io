"use strict";var precacheConfig=[["/index.html","0ceccae07b34cc7c7b83b94baeb5ff4a"],["/static/css/main.1b206193.css","e6c609c78f08de604afa933c94cbeef5"],["/static/js/main.fd57ae33.js","6dd8874cc7fde9e5e132cbcc535509ba"],["/static/media/cmunbi.521ed56c.svg","521ed56c15d31eebae3528cb0d9c00d1"],["/static/media/cmunbi.b2129d3f.woff","b2129d3f84bbb07a0bb239b7e8786b6c"],["/static/media/cmunbi.c4ddc260.eot","c4ddc26008bde89012e7086cfb5f0c4e"],["/static/media/cmunbi.cd9c0404.ttf","cd9c0404b3cd1dc863a5940ca609c8f4"],["/static/media/cmunbx.92c9c84e.woff","92c9c84ec46a48e2a12f53da17bccfa9"],["/static/media/cmunbx.971a7f18.ttf","971a7f1818098f6fd3bb91b08be096df"],["/static/media/cmunbx.a21c0bb9.eot","a21c0bb98f1abf3a9f1c357d356bdf2f"],["/static/media/cmunbx.bb14863a.svg","bb14863adf327892bf0faae61e9edd7c"],["/static/media/cmunrm.01643be9.ttf","01643be9fa75a4523c77ac348b242aed"],["/static/media/cmunrm.5927a6b6.svg","5927a6b6ea06bac45318dbb90d22a16b"],["/static/media/cmunrm.6650fdd9.woff","6650fdd903e5b977127fa41271967936"],["/static/media/cmunrm.b4fe3836.eot","b4fe38363085ff48a1c85a6fe6635c89"],["/static/media/cmunti.0e8efcc4.woff","0e8efcc4012194aa0f3356810a115423"],["/static/media/cmunti.32fb6a65.svg","32fb6a652e779a54c71c6c27b2a05ad4"],["/static/media/cmunti.86153f09.ttf","86153f0958ae90bf30249dcb98d04a7d"],["/static/media/cmunti.dcc46602.eot","dcc46602102b3762bbbaad9b4a00590b"],["/static/media/facebook.1475c49f.svg","1475c49f3b75cab2c1149640d1fe0633"],["/static/media/github.f0913d95.svg","f0913d95f7e2921800549313c0ba4a4a"],["/static/media/instagram.3f614de7.svg","3f614de75e3ad612cd9598e959198d87"],["/static/media/linkedin.237af903.svg","237af9035a2587ea6f41c4a482823393"],["/static/media/mail.a71eb909.svg","a71eb9097c044423578d55392fedbde9"],["/static/media/me-prof.f6516278.jpg","f651627816c7dae26ff5b81468b99e0a"],["/static/media/meanddoge.736e13c2.jpg","736e13c234be152946455db13e320781"],["/static/media/meandtree.30f98cc9.jpg","30f98cc900fba8088cc688bc34d14230"],["/static/media/strava.75b454d8.svg","75b454d89810d2377cc902a8b7e20c2e"],["/static/media/twitter.acb53cb5.svg","acb53cb5f4244a9f97ed891ae5f6b34c"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),e=urlsToCacheKeys.has(a));var n="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});