---
title: get
tags: object,intermediate
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "get" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Retrieve a set of properties indicated by the given selectors from an object.

Use `Array.prototype.map()` for each selector, `String.prototype.replace()` to replace square brackets with dots, `String.prototype.split('.')` to split each selector, `Array.prototype.filter()` to remove empty values and `Array.prototype.reduce()` to get the value indicated by it.

### Get

```ts title="typescript"
export const get = (
  from: any,
  selector: string,
  defaultValue: any = undefined
) =>
  selector
    .replace(/\[([^\[\]]*)\]/g, ".$1.")
    .split(".")
    .filter((t) => t !== "")
    .reduce((prev, cur) => prev && prev[cur], from) || defaultValue;
```

### GetAll

```ts title="typescript"
export const getAll = (from: any, ...selectors: string[]) =>
  [...selectors].map((s) => get(from, s));
```

```ts title="typescript"
const obj = {
  selector: { to: { val: "val to select" } },
  target: [1, 2, { a: "test" }],
};

get(obj, "selector.to.val"); //"val to select"
get(obj, "selector.to1.val", null); // null
get(obj, "selector.to1.val"); // undefined
getAll(obj, "selector.to.val", "target[0]", "target[2].a"); // ['val to select', 1, 'test']
```
