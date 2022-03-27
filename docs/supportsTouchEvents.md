---
title: supportsTouchEvents
tags: [browser, intermediate]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "supportsTouchEvents" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

Returns `true` if touch events are supported, `false` otherwise.

Check if `ontouchstart` exists in `window` or `window.DocumentTouch` is true and the current `document` is an instance of it.

```js
const supportsTouchEvents = () =>
  window &&
  ("ontouchstart" in window ||
    (window.DocumentTouch && document instanceof window.DocumentTouch));
```

```js
supportsTouchEvents(); // true
```
