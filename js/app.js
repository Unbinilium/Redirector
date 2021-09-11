function redirectorWrapper() {
    redirector(testURL, testTimeout)
}

function loadRedirector() {
    let script = document.createElement('script')
    script.src = 'js/config.js'
    script.setAttribute('onload', 'testConnectionWrapper();')
    document.head.appendChild(script)
}

function loadServiceworker() {
    if (document.readyState === 'complete') {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('js/sw.js', { scope: '/' }).then((reg) => {
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
}

document.onreadystatechange = async () => {
    loadServiceworker()
    loadRedirector()
}
