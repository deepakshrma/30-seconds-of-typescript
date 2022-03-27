---
title: map
tags: [array, function, beginner]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "map" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Creates a new map with the results of calling a provided function on every value in the calling function.

Use `Array.isArray()` to detect array, else destructure array like data(string).
Use `Array.prototype.map()` to map array of data.

```ts title="typescript"
const map = <T = any>(array: Iterable<T>, fn: MapFunc<T>) => {
  const chars = Array.isArray(array) ? array : [...array];
  return chars.map((c, i) => fn(c, i, chars));
};
```

```ts title="typescript"
// map array of chars
map("lorem ipsum", (c) => c.toUpperCase()).join("")) // "LOREM IPSUM"

// map array of numbers
map([1, 2, 3, 4], (c) => c * c)); // [1, 4, 9, 16]
```
