---
title: countBy
tags: array,object,intermediate
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "countBy" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Groups the elements of an array based on the given function and returns the count of elements in each group.

Use `Array.prototype.map()` to map the values of an array to a function or property name.
Use `Array.prototype.reduce()` to create an object, where the keys are produced from the mapped results.

```ts title="typescript"
export const countBy = <T = any>(arr: T[], fn: Func<T> | string) => {
  const mapper = typeof fn === "function" ? fn : (val: any) => val[fn];
  return arr.reduce((acc, val) => {
    const value = mapper(val);
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {} as any);
};
```

```ts title="typescript"
countBy([6.1, 4.2, 6.3], Math.floor); // {4: 1, 6: 2}
countBy(["one", "two", "three"], "length"); // {3: 2, 5: 1}

countBy([{ name: "Deepak" }, { name: "Deepak2" }, { name: "Deepak" }], "name"); // { Deepak: 2, Deepak2: 1 }
countBy(
  [{ name: "Deepak" }, { name: "Deepak2" }, { name: "Deepak" }],
  (user: any) => user.name
); // { Deepak: 2, Deepak2: 1 }
```
