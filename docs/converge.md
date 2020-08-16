---
title: converge
tags: function,intermediate
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "converge" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)

Accepts a converging function and a list of branching functions and returns a function that applies each branching function to the arguments and the results of the branching functions are passed as arguments to the converging function.

Use `Array.prototype.map()` and `Function.prototype.apply()` to apply each function to the given arguments.
Use the spread operator (`...`) to call `coverger` with the results of all other functions.

```js
const converge = (converger, fns) => (...args) =>
  converger(...fns.map((fn) => fn.apply(null, args)));
```

```js
const average = converge((a, b) => a / b, [
  (arr) => arr.reduce((a, v) => a + v, 0),
  (arr) => arr.length,
]);
average([1, 2, 3, 4, 5, 6, 7]); // 4
```
