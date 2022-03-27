---
title: isArrayLike
tags: [type, array, intermediate]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "isArrayLike" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

Checks if the provided argument is array-like (i.e. is iterable).

Check if the provided argument is not `null` and that its `Symbol.iterator` property is a function.

```js
const isArrayLike = (obj) =>
  obj != null && typeof obj[Symbol.iterator] === "function";
```

```js
isArrayLike([1, 2, 3]); // true
isArrayLike(document.querySelectorAll(".className")); // true
isArrayLike("abc"); // true
isArrayLike(null); // false
```
