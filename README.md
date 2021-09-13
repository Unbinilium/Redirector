## Redirector

A service worker based URL redirector, redirect to an accessible URL form a test list with timeout, load once and redirect even you're offline.

### Example

Assuming there're some URLs in a target list for testing, you can use the following URL to visit redirector and then redirect to the accessible URL in the list:

```
https://redirector.test
```

Also, you can have the additional parameters in the redirector URL started with `?to=` to pass the additional parameters to the target URL:

```
https://redirector.test/?to=/target/path/?with=query&params
```

### Config

The default config is stored in `js/config`:

```js
var testURL = [
    'https://localhost',
    'https://google.com',
    'https://github.com'
]

var testTimeout = 1000

var testInterval = 3000
```

The `URL` position upper the priority higher, the default time unit for timeout and interval is `ms`.
