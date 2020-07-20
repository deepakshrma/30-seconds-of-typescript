---
title: hide
tags: browser,css,beginner
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)

Hides all the elements specified.

Use `NodeList.prototype.forEach()` to apply `display: none` to each element specified.

```ts title="typescript"
const hide = <T extends HTMLElement>(...el: T[]) =>
  [...el].forEach((e) => (e.style.display = "none"));
```

```ts title="typescript"
hide(document.querySelectorAll("img")); // Hides all <img> elements on the page
```
