const CACHE_NAME = 'wsp-sw';

// List of files which are store in cache.
let filesToCache = [
    '/',
    '/static/js/manifest.3f99a5abc7885278db59.js',
    '/static/js/vendor.7e2436063cfced5a94d9.js',
    '/static/js/app.b5ee9d296b357151fd03.js',
    '/static/css/app.2a12eae2dccec74ffd45fd0829f06ce9.css',
    '/static/img/paw.f526d48.jpg'
];

self.addEventListener('install', function (evt) {
    evt.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll(filesToCache);
        }).catch(function (err) {
            // Snooze errors...
            // console.error(err);
        })
    );
});

self.addEventListener('fetch', function (evt) {
    // Snooze logs...
    // console.log(event.request.url);
    evt.respondWith(
        // Firstly, send request..
        fetch(evt.request).catch(function () {
            // When request failed, return file from cache...
            return caches.match(evt.request);
        })
    );
});