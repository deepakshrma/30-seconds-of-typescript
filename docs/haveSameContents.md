---
title: haveSameContents
tags: [array, intermediate]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "haveSameContents" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

Returns `true` if two arrays contain the same elements regardless of order, `false` otherwise.

Use a `for...of` loop over a `Set` created from the values of both arrays.
Use `Array.prototype.filter()` to compare the amount of occurrences of each distinct value in both arrays.
Return `false` if the counts do not match for any element, `true` otherwise.

```js
const haveSameContents = (a, b) => {
  for (const v of new Set([...a, ...b]))
    if (a.filter((e) => e === v).length !== b.filter((e) => e === v).length)
      return false;
  return true;
};
```

```js
haveSameContents([1, 2, 4], [2, 4, 1]); // true
```
