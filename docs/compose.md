---
title: compose
tags: function,intermediate
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "compose" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Performs right-to-left function composition.

Use `Array.prototype.reduce()` to perform right-to-left function composition.
The last (rightmost) function can accept one or more arguments; the remaining functions must be unary.

```ts title="typescript"
const compose = (...fns: Func<any>[]) =>
  fns.reduce((f, g) => (...args: any[]) => f(...castArray(g(...args))));
```

You can have look on implementation of [castArray]

```ts title="typescript"
const add5 = (x: number) => x + 5;
const multiply = (x: number, y: number) => x * y;
const multiplyAndAdd5 = compose(add5, multiply);
multiplyAndAdd5(5, 2); // 15
```

**Complex Example- Return with tuple:**

```ts title="typescript"
const multiply = (x: number, y: number) => x * y; // 5* 2 = 10
const add3 = (x: number) => [x + 3, 3]; // [10+3, 3] = [13, 3]
const add = (x: number, y: number) => x + y; // 13 + 3 = 16
const multiplyAndAdd3 = compose(add, add3, multiply);
assertEquals(multiplyAndAdd3(5, 2), 16);
```
