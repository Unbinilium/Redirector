if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js', { scope: '/' }).then((reg) => {
        if (reg.installing) {
            console.log('Service worker: installing');
        } else if (reg.waiting) {
            console.log('Service worker: installed');
        } else if (reg.active) {
            console.log('Service worker: active');
        }
    }).catch((err) => {
        console.log('Service worker: registration failed with ' + err);
    })
}

function testConnectionWrapper() {
    testConnection(testURL, testTimeout)
}

document.onreadystatechange = async () => {
    if (document.readyState === 'complete') {
        let script = document.createElement('script')
        script.src = 'config.js'
        script.setAttribute('onload', 'testConnectionWrapper();')
        document.head.appendChild(script)
    }
}
