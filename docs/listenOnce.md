---
title: listenOnce
tags: browser,event,closure,intermediate
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "listenOnce" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Adds an event listener to an element that will only run the callback the first time the event is triggered.

Use `EventTarget.addEventListener()` to add an event listener to an element, storing the reference in a variable.
Use a condition to call `fn` only the first time the listener is triggered.

```ts title="typescript"
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

```ts title="typescript"
listenOnce(
  document.getElementById('my-id),
  'click',
  () => console.log('Hello world')
); // 'Hello world' will only be logged on the first click
```
