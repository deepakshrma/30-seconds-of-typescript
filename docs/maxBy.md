---
title: maxBy
tags: math,array,function,beginner
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Returns the maximum value of an array, after mapping each element to a value using the provided function.

Use `Array.prototype.map()` to map each element to the value returned by `fn`, `Math.max()` to get the maximum value.

```ts
const maxBy = <T = any>(arr: T[], fn: MapFunc<T>) =>
  Math.max(...arr.map(typeof fn === "function" ? fn : (val) => val[fn]));
```

```ts
maxBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], (o) => o.n); // 8
maxBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], "n"); // 8

const array = [
  new Date(2017, 4, 13),
  new Date(2018, 2, 12),
  new Date(2016, 0, 10),
  new Date(2016, 0, 9),
];
const timestamp = maxBy(array, (date) => date.getTime());
assertEquals(new Date(timestamp).toDateString(), "Mon Mar 12 2018");
```
