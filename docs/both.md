---
title: both
tags: function,logic,beginner
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Returns `true` if both functions return `true` for a given set of arguments, `false` otherwise.

Use the logical and (`&&`) operator on the result of calling the two functions with the supplied `args`.

```ts title="typescript"
type Func<T> = (...args: T[]) => any;
export const both = <T = any>(f: Func<T>, g: Func<T>) => (...args: T[]) =>
  f(...args) && g(...args);
```

```ts title="typescript"
const isEven = (num: number) => num % 2 === 0;
const isPositive = (num: number) => num > 0;
const isPositiveEven = both(isEven, isPositive);
isPositiveEven(4); // true
isPositiveEven(-2); // false
```
