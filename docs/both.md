---
id: both
sidebar_label: both
title: Both
tags: function,logic,beginner
---

Returns `true` if both functions return `true` for a given set of arguments, `false` otherwise.

Use the logical and (`&&`) operator on the result of calling the two functions with the supplied `args`.

```ts
type Func<T> = (...args: T[]) => any;
export const both = <T extends any>(f: Func<T>, g: Func<T>) => (...args: T[]) =>
  f(...args) && g(...args);
```

```ts
const isEven = (num: number) => num % 2 === 0;
const isPositive = (num: number) => num > 0;
const isPositiveEven = both(isEven, isPositive);
isPositiveEven(4); // true
isPositiveEven(-2); // false
```
