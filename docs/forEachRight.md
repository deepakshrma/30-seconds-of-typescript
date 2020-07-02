---
title: forEachRight
tags: array,function,intermediate
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Executes a provided function once for each array element, starting from the array's last element.

```ts
const forEachRight = (array: any[] = [], callback: Function) => {
  for (let index = array.length - 1; index >= 0; index--) {
    const element = array[index];
    callback(element, index, array);
  }
};
```

```ts
forEachRight([1, 2, 3, 4], (val) => console.log(val)); // '4', '3', '2', '1'

let count = 0;
forEachRight([1, 2, 3, 4], (val: number, index: number, arr: number[]) => {
  assertEquals(val - 1, index);
  assertEquals(4 - ++count, index);
});
```
