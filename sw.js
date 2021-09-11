self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('redirector-cache').then((cache) => {
            return cache.addAll([
                'index.html',
                'css/style.css',
                'js/app.js',
                'js/redirect.js',
                'js/config.js'
            ])
        })
    )
})

self.addEventListener('fetch', (event) => {
    event.respondWith(caches.match(event.request).then((response) => {
        if (response !== undefined) {
            return response
        } else {
            return fetch(event.request).then((response) => {
                let responseClone = response.clone()
                caches.open('redirector-cache').then((cache) => {
                    cache.put(event.request, responseClone)
                })
                return response;
            })
        }
    }))
})