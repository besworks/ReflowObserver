# ReflowObserver
Observe element size changes and callback before and after layout reflow has occured.

## API
`ReflowObserver` wraps around [`ResizeObserver`](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver). It provides the same basic interface with a few subtle differences, listed below.

### Constructor Differences
`ResizeObserver` takes a callback as it's only argument.  
**`ReflowObserver`** requires two callbacks: `beforeReflow` and `afterReflow`.

`ResizeObserver` passes an `Array` of `ResizeObserverEntry` objects to it's callback.  
**`ReflowObserver`** passes a `DOMHiResTimeStamp` object to both of it's callbacks.

### Aditional `.observed` Property
Returns an array of all nodes that are being observed by this `ReflowObserver` instance.

## Usage
```javascript
import { ReflowObserver } from './ReflowObserver.js';

const observer = new ReflowObserver(
  function beforeReflow(timestamp) { console.log(timestamp, 'about to reflow', this); },
  function afterReflow(timestamp) { console.log(timestamp, 'reflow complete', this); }
);

observer.observe(doument.body);
```

A well commented example implementation is contained in this repository. Find it at `./example.html`.
