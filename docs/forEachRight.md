---
title: forEachRight
tags: array,function,intermediate
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "forEachRight" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Executes a provided function once for each array element, starting from the array's last element.

```ts title="typescript"
const forEachRight = (array: any[] = [], callback: Function) => {
  for (let index = array.length - 1; index >= 0; index--) {
    const element = array[index];
    callback(element, index, array);
  }
};
```

```ts title="typescript"
forEachRight([1, 2, 3, 4], (val) => console.log(val)); // '4', '3', '2', '1'

let count = 0;
forEachRight([1, 2, 3, 4], (val: number, index: number, arr: number[]) => {
  assertEquals(val - 1, index);
  assertEquals(4 - ++count, index);
});
```
