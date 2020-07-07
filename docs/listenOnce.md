---
title: listenOnce
tags: browser,event,closure,intermediate
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Adds an event listener to an element that will only run the callback the first time the event is triggered.

Use `EventTarget.addEventListener()` to add an event listener to an element, storing the reference in a variable.
Use a condition to call `fn` only the first time the listener is triggered.

```ts
interface IEventListener {
  addEventListener: (event: string, fn: Func) => void;
}
const listenOnce = <E extends IEventListener>(el: E, evt: string, fn: Func) => {
  let fired = false;
  el.addEventListener(evt, (e) => {
    if (!fired) fn(e);
    fired = true;
  });
};
```

```ts
listenOnce(
  document.getElementById('my-id),
  'click',
  () => console.log('Hello world')
); // 'Hello world' will only be logged on the first click
```
