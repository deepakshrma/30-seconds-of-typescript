---
title: off
tags: [browser, event, intermediate]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "off" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

Removes an event listener from an element.

Use `EventTarget.removeEventListener()` to remove an event listener from an element.
Omit the fourth argument `opts` to use `false` or specify it based on the options used when the event listener was added.

```js
const off = (el, evt, fn, opts = false) =>
  el.removeEventListener(evt, fn, opts);
```

```js
const fn = () => console.log("!");
document.body.addEventListener("click", fn);
off(document.body, "click", fn); // no longer logs '!' upon clicking on the page
```
