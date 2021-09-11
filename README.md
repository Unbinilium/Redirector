## Redirector

A service worker based URL redirector, redirect to an accessible URL form a test list with timeout, load once and redirect eveneven you're offline.

### Config

The default config is stored in `js/config`, the position upper the priority higher, with all time unit `ms`:

```js
var testURL = [
    'https://localhost',
    'https://google.com',
    'https://github.com'
]

var testTimeout = 1000

var testInterval = 3000
```

Please review code for more details.
