---
title: groupBy
tags: [array, object, intermediate]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "groupBy" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Groups the elements of an array based on the given function.

Use `Array.prototype.map()` to map the values of an array to a function or property name.
Use `Array.prototype.reduce()` to create an object, where the keys are produced from the mapped results.

```ts title="typescript"
type MapFunc<T = any> = (val: T, index?: number, arr?: T[]) => T;

const groupBy = <T = any>(arr: T[], fn: MapFunc<T> | string) =>
  arr.map(isString(fn) ? (val: any) => val[fn] : fn).reduce((acc, val, i) => {
    acc[val] = (acc[val] || []).concat(arr[i]);
    return acc;
  }, {});
```

```ts title="typescript"
groupBy([6.1, 4.2, 6.3], Math.floor); // {4: [4.2], 6: [6.1, 6.3]}
groupBy(["one", "two", "three"], "length"); // {3: ['one', 'two'], 5: ['three']}
```
