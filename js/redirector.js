async function redirector(urls = [], timeout = 1000, interval = 3000) {
    const baseParm = window.location.search
    const controller = new AbortController()
    const id = setTimeout(() => { controller.abort() }, timeout)
    let promises = []; urls.forEach((url, index) => {
        promises.push(new Promise((resolve, reject) => {
            fetch(url, {
                mode: 'no-cors', signal: controller.signal
            }).then(() => {
                console.log('Connection success:', url)
                resolve(url)
            }).catch((error) => {
                console.log('Connection failed:', url)
                reject(error)
            })
        }))
    })
    const responses = await Promise.allSettled(promises)
    const target = new Promise((resolve, reject) => {
        let redirected = false
        responses.forEach((response) => {
            if (!redirected && response.status === 'fulfilled') {
                redirected = true
                resolve(response.value)
            } else if(response.status === 'rejected') {
                console.log(response.reason)
            }
        })
        if (!redirected) { reject(new Error('retrying after interval '+ interval + 'ms')) }
    })
    target.then((url) => {
        let targetURL = new URL(url)
        if (baseParm.startsWith('?to=')) {
            targetURL = new URL(baseParm.substring(4), url)
        }
        console.log('Redirecting to: ', targetURL.href)
        window.location.href = targetURL.href
    }).catch((error) => {
        setTimeout(() => {
            console.log(error)
            redirector(urls, timeout, interval)
        }, interval)
    })
}
