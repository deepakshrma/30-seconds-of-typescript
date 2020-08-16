---
title: getType
tags: type,beginner
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "getType" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Returns the native type of a value.

Return `'undefined'` or `'null'` if the value is `undefined` or `null`.
Otherwise, use `Object.prototype.constructor.name` to get the name of the constructor.

```ts title="typescript"
const getType = (v: any) =>
  v === undefined
    ? "undefined"
    : v === null
    ? "null"
    : v.constructor.name.toLowerCase();
```

```ts title="typescript"
getType(new Set([1, 2, 3])); // 'set'
getType(null); // 'null'
getType(Deno), "object";
```
