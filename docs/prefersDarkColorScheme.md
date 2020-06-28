---
title: prefersDarkColorScheme
tags: browser,intermediate
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

Returns `true` if the user color scheme preference is `dark`, `false` otherwise.

Use `window.matchMedia()` with the appropriate media query to check the user color scheme preference.

```js
const prefersDarkColorScheme = () =>
  window &&
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;
```

```js
prefersDarkColorScheme(); // true
```
