---
title: show
tags: browser,css,beginner
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

Shows all the elements specified.

Use the spread operator (`...`) and `Array.prototype.forEach()` to clear the `display` property for each element specified.

```js
const show = (...el) => [...el].forEach((e) => (e.style.display = ""));
```

```js
show(...document.querySelectorAll("img")); // Shows all <img> elements on the page
```
