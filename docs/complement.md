---
id: complement
sidebar_label: complement
title: complement
tags: function,logic,beginner
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Returns a function that is the logical complement of the given function, `fn`.

Use the logical not (`!`) operator on the result of calling `fn` with any supplied `args`.

```ts
type Func<T> = (...args: T[]) => any;
const complement = (fn: Func<any>) => (...args: any[]) => !fn(...args);
```

```ts
const isEven = (num: number) => num % 2 === 0;
const isOdd = complement(isEven);
isOdd(2); // false
isOdd(3); // true
```
