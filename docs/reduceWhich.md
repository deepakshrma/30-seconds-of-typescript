---
title: reduceWhich
tags: [array, function, intermediate]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "reduceWhich" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Returns the minimum/maximum value of an array, after applying the provided function to set comparing rule.

Use `Array.prototype.reduce()` in combination with the `comparator` function to get the appropriate element in the array.
You can omit the second parameter, `comparator`, to use the default one that returns the minimum element in the array.

```ts title="typescript"
const reduceWhich = <T extends number | string | AnyObject = number>(
  arr: T[],
  comparator: Function = (a: number, b: number) => (a - b) as number
) => arr.reduce((a: T, b: T) => (comparator(a, b) >= 0 ? b : a));
```

```ts title="typescript"
reduceWhich([1, 3, 2]); // 1
reduceWhich([1, 3, 2], (a, b) => b - a); // 3
reduceWhich(
  [
    { name: "Tom", age: 12 },
    { name: "Jack", age: 18 },
    { name: "Lucy", age: 9 },
  ],
  (a, b) => a.age - b.age
); // {name: "Lucy", age: 9}
```
