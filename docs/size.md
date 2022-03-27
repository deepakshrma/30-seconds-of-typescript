---
title: size
tags: [object, array, string, intermediate]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "size" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Gets the size of an array, object or string.

Get type of `val` (`array`, `object` or `string`).
Use `length` property for arrays.
Use `length` or `size` value if available or number of keys for objects.
Use `size` of a [`Blob` object](https://developer.mozilla.org/en-US/docs/Web/API/Blob) created from `val` for strings.
Split strings into array of characters with `split('')` and return its length.

```ts title="typescript"
const size = (val: any) =>
  Array.isArray(val)
    ? val.length
    : val && typeof val === "object"
    ? val.size || val.length || Object.keys(val).length
    : typeof val === "string"
    ? new Blob([val]).size
    : 0;
```

```ts title="typescript"
size([1, 2, 3, 4, 5]); // 5
size("size"); // 4
size({ one: 1, two: 2, three: 3 }); // 3
```
