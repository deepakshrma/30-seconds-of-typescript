---
title: insertAfter
tags: browser,beginner
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

Inserts an HTML string after the end of the specified element.

Use `el.insertAdjacentHTML()` with a position of `'afterend'` to parse `htmlString` and insert it after the end of `el`.

```js
const insertAfter = (el, htmlString) =>
  el.insertAdjacentHTML("afterend", htmlString);
```

```js
insertAfter(document.getElementById("myId"), "<p>after</p>");
// <div id="myId">...</div> <p>after</p>
```
