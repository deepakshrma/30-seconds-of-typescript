---
title: pickBy
tags: [object, array, function, intermediate]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "pickBy" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Creates an object composed of the properties the given function returns truthy for. The function is invoked with two arguments: (value, key).

Use `Object.entries(obj)` and `Object.fromEntries(obj)` to convert the object to a list of properties and convert back.
Use `Array.prototype.filter()`to remove the keys for which `fn` returns a falsy value.

```ts title="typescript"
const pickBy = (
    o: Record<string, any>,
    fn: (value: any) => Boolean = (x) => x,
) => Object.fromEntries(Object.entries(o).filter(([, v]) => fn(v)))
```

```ts title="typescript"
pickBy({ a: 1, b: "2", c: 3 }, (x) => typeof x === "number"); // { 'a': 1, 'c': 3 }
```
