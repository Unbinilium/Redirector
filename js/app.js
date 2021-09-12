const loadRedirector = () => {
    let script = document.createElement('script')
    script.src = 'js/config.js'
    script.setAttribute('onload', 'redirector(testURL, testTimeout, testInterval)')
    document.head.appendChild(script)
}

const loadServiceWorker = () => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js', { scope: '/Redirector' }).then((reg) => {
            if (reg.installing) {
                console.log('Service worker: installing')
            } else if (reg.waiting) {
                console.log('Service worker: installed')
            } else if (reg.active) {
                console.log('Service worker: active')
            }
        }).catch((err) => {
            console.log('Service worker: registration failed with ' + err)
        })
    }
}

document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        loadServiceWorker()
        loadRedirector()
    }
}
