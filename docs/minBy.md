---
title: minBy
tags: math,array,function,beginner
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

Returns the minimum value of an array, after mapping each element to a value using the provided function.

Use `Array.prototype.map()` to map each element to the value returned by `fn`, `Math.min()` to get the minimum value.

```ts title="typescript"
export const minBy = <T = any>(arr: T[], fn: MapFunc<T> | string) =>
  Math.min(...arr.map(isString(fn) ? (val: any) => val[fn] : fn));
```

```ts title="typescript"
minBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], (o) => o.n); // 2
minBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], "n"); // 2
```
