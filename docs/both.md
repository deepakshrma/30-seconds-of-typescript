---
title: both
tags: function,logic,beginner
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "both" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

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
