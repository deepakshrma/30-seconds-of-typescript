---
title: negate
tags: function,beginner
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

Negates a predicate function.

Take a predicate function and apply the not operator (`!`) to it with its arguments.

```js
const negate = (func) => (...args) => !func(...args);
```

```js
[1, 2, 3, 4, 5, 6].filter(negate((n) => n % 2 === 0)); // [ 1, 3, 5 ]
```
