function redirector(url = [], timeout = 1000, interval = 3000) {
    const controller = new AbortController()
    const id = setTimeout(() => controller.abort(), timeout)
    let promise = new Array()
    let response = new Array(url.length).fill(false)
    let redirected = false
    url.forEach((v, i) => {
        promise.push(
            fetch(v, { mode: 'no-cors', signal: controller.signal }).then(() => {
                response[i] = true
                console.log('Connetion success: ', v)
            }).catch(() => {
                console.log('Connetion failed: ', v)
            })
        )
    })
    Promise.all(promise).finally(() => {
        const baseParm = window.location.search
        for (let i = 0; i != response.length; ++i) {
            if (response[i]) {
                redirected = true
                let targetURL = new URL(url[i])
                if (baseParm.startsWith('?to=')) {
                    targetURL = new URL(baseParm.substring(4), targetURL.href)
                }
                console.log('Redirecting to: ', targetURL.href)
                window.location.href = targetURL.href
                break
            }
        }
    }).then(() => {
        if (!redirected) {
            setTimeout(() => {
                redirector(url, timeout, interval)
            }, interval)
        }
    })
}
