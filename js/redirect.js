function redirector(url = [], timeout = 1000) {
    const controller = new AbortController()
    const id = setTimeout(() => controller.abort(), timeout)
    let promise = []
    let response = new Array(url.length).fill(false)
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
        for (let i = 0; i != response.length; ++i) {
            if (response[i]) {
                console.log('Redirecting to: ', url[i])
                window.location.href = url[i]
                break
            }
        }
    })
}
