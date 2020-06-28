---
title: hide
tags: browser,css,beginner
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

Hides all the elements specified.

Use `NodeList.prototype.forEach()` to apply `display: none` to each element specified.

```js
const hide = (...el) => [...el].forEach((e) => (e.style.display = "none"));
```

```js
hide(document.querySelectorAll("img")); // Hides all <img> elements on the page
```
