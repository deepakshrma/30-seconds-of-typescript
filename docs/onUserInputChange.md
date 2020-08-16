---
title: onUserInputChange
tags: browser,event,advanced
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "onUserInputChange" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

Run the callback whenever the user input type changes (`mouse` or `touch`). Useful for enabling/disabling code depending on the input device. This process is dynamic and works with hybrid devices (e.g. touchscreen laptops).

Use two event listeners. Assume `mouse` input initially and bind a `touchstart` event listener to the document.
On `touchstart`, add a `mousemove` event listener to listen for two consecutive `mousemove` events firing within 20ms, using `performance.now()`.
Run the callback with the input type as an argument in either of these situations.

```js
const onUserInputChange = (callback) => {
  let type = "mouse",
    lastTime = 0;
  const mousemoveHandler = () => {
    const now = performance.now();
    if (now - lastTime < 20)
      (type = "mouse"),
        callback(type),
        document.removeEventListener("mousemove", mousemoveHandler);
    lastTime = now;
  };
  document.addEventListener("touchstart", () => {
    if (type === "touch") return;
    (type = "touch"),
      callback(type),
      document.addEventListener("mousemove", mousemoveHandler);
  });
};
```

```js
onUserInputChange((type) => {
  console.log("The user is now using", type, "as an input method.");
});
```
