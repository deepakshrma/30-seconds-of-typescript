---
title: unary
tags: function,beginner
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

Creates a function that accepts up to one argument, ignoring any additional arguments.

Call the provided function, `fn`, with just the first argument given.

```js
const unary = (fn) => (val) => fn(val);
```

```js
["6", "8", "10"].map(unary(parseInt)); // [6, 8, 10]
```
