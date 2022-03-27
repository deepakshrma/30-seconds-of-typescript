---
title: objectFromPairs
tags: [object, array, beginner]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "objectFromPairs" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

Creates an object from the given key-value pairs.

Use `Array.prototype.reduce()` to create and combine key-value pairs.

```js
const objectFromPairs = (arr) =>
  arr.reduce((a, [key, val]) => ((a[key] = val), a), {});
```

```js
objectFromPairs([
  ["a", 1],
  ["b", 2],
]); // {a: 1, b: 2}
```
