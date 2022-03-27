---
title: complement
tags: [function, logic, beginner]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "complement" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Returns a function that is the logical complement of the given function, `fn`.

Use the logical not (`!`) operator on the result of calling `fn` with any supplied `args`.

```ts title="typescript"
type Func<T> = (...args: T[]) => any;
const complement =
  (fn: Func<any>) =>
  (...args: any[]) =>
    !fn(...args);
```

```ts title="typescript"
const isEven = (num: number) => num % 2 === 0;
const isOdd = complement(isEven);
isOdd(2); // false
isOdd(3); // true
```
