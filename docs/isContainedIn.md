---
title: isContainedIn
tags: [array, intermediate]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "isContainedIn" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

Returns `true` if the elements of the first array are contained in the second one regardless of order, `false` otherwise.

Use a `for...of` loop over a `Set` created from the first array.
Use `Array.prototype.some()` to check if all distinct values are contained in the second array, use `Array.prototype.filter()` to compare the number of occurrences of each distinct value in both arrays.
Return `false` if the count of any element is greater in the first array than the second one, `true` otherwise.

```js
const isContainedIn = (a, b) => {
  for (const v of new Set(a)) {
    if (
      !b.some((e) => e === v) ||
      a.filter((e) => e === v).length > b.filter((e) => e === v).length
    )
      return false;
  }
  return true;
};
```

```js
isContainedIn([1, 4], [2, 4, 1]); // true
```
