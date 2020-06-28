---
title: prefersLightColorScheme
tags: browser,intermediate
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

Returns `true` if the user color scheme preference is `light`, `false` otherwise.

Use `window.matchMedia()` with the appropriate media query to check the user color scheme preference.

```js
const prefersLightColorScheme = () =>
  window &&
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: light)").matches;
```

```js
prefersLightColorScheme(); // true
```
