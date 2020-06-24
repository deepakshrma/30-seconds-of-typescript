---
id: ary
sidebar_label: Ary
title: ary
tags: function,intermediate
---

Creates a function that accepts up to `n` arguments, ignoring any additional arguments.

Call the provided function, `fn`, with up to `n` arguments, using `Array.prototype.slice(0, n)` and the spread operator (`...`).

```ts
const ary = <T extends any>(fn: (...args: T[]) => any, n: number) => (
  ...args: T[]
) => fn(...args.slice(0, n));
```

```ts
const firstTwoMax = ary(Math.max, 2);
[[2, 6, 12], [6, 4, 8], [10]].map((x) => firstTwoMax(...x)); // [6, 6, 10]
```
