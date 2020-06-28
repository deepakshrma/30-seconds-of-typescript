---
title: escapeRegExp
tags: string,regexp,intermediate
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

Escapes a string to use in a regular expression.

Use `String.prototype.replace()` to escape special characters.

```js
const escapeRegExp = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
```

```js
escapeRegExp("(test)"); // \\(test\\)
```
