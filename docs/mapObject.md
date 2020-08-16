---
title: mapObject
tags: array,object,intermediate
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "mapObject" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Maps the values of an array to an object using a function, where the key-value pairs consist of the original value as the key and the result of the function as the value.

Use `Array.prototype.reduce()` to apply `fn` to each element in `arr` and combine the results into an object.
Use `el` as the key for each property and the result of `fn` as the value.

```ts title="typescript"
const mapObject = <T = any>(arr: T[], fn: MapFunc<T>) =>
  arr.reduce((acc, el, i) => {
    acc[el] = fn(el, i, arr);
    return acc;
  }, {} as any);
```

```ts title="typescript"
mapObject([1, 2, 3], (a) => a * a); // { 1: 1, 2: 4, 3: 9 }
```
