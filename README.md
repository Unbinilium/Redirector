## Redirector

A service worker based URL redirector, redirect to an accessible URL form a test list with timeout, load once and redirect eveneven you're offline.

### Config

The default config is stored in `js/config`, the position upper the priority higher, with timeout unit `ms`:

```js
var testURL = [    
    'http://10.0.0.1',
    'http://example.com',
    'http://github.com',
]

var testTimeout = 1000
```

### Acknowledge

- [MDN - Using Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
