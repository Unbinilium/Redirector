## Redirector

A service worker based URL redirector, redirect to an accessible URL form a test list with timeout, load once and redirect even you're offline.

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
