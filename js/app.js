function redirectorWrapper() {
    redirector(testURL, testTimeout)
}

function loadRedirector() {
    let script = document.createElement('script')
    script.src = 'js/config.js'
    script.setAttribute('onload', 'redirectorWrapper();')
    document.head.appendChild(script)
}

function loadServiceworker() {
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

document.onreadystatechange = async () => {
    if (document.readyState === 'complete') {
        loadServiceworker()
        loadRedirector()
    }
}
