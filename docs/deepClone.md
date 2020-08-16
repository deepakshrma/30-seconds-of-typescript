---
title: deepClone
tags: object,recursion,intermediate
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "deepClone" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Creates a deep clone of an object.

Use recursion.
Check if the passed object is `null` and, if so, return `null`.
Use `Object.assign()` and an empty object (`{}`) to create a shallow clone of the original.
Use `Object.keys()` and `Array.prototype.forEach()` to determine which key-value pairs need to be deep cloned.

```ts title="typescript"
export const deepClone = (obj: any) => {
  if (obj === null) return null;
  let clone = { ...obj };
  Object.keys(clone).forEach(
    (key) =>
      (clone[key] =
        typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key])
  );
  return Array.isArray(obj) && obj.length
    ? (clone.length = obj.length) && Array.from(clone)
    : Array.isArray(obj)
    ? Array.from(obj)
    : clone;
};
```

```ts title="typescript"
const a = { foo: "bar", obj: { a: 1, b: 2 }, arr: [1, 2, 3] };
const b = deepClone(a); // a !== b, a.obj !== b.obj,
// a.arr[0] === b.arr[0]
```
