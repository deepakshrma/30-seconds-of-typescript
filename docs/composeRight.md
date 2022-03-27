---
title: composeRight
tags: [function, intermediate]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "composeRight" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Performs left-to-right function composition.

Use `Array.prototype.reduce()` to perform left-to-right function composition.
The first (leftmost) function can accept one or more arguments; the remaining functions must be unary.

```ts title="typescript"
const composeRight = (...fns) =>
  fns.reduce(
    (f, g) =>
      (...args) =>
        g(f(...args))
  );
```

```ts title="typescript"
const multiply = (x: number, y: number) => x * y;
const add5 = (x: number) => x + 5;
const multiplyAndAdd5 = compose(multiply, add5);
multiplyAndAdd5(5, 2); // 15
```

**Complex Example- Return with tuple:**

```ts title="typescript"
const multiply = (x: number, y: number) => x * y; // 5* 2 = 10
const add3 = (x: number) => [x + 3, 3]; // [10+3, 3] = [13, 3]
const add = (x: number, y: number) => x + y; // 13 + 3 = 16
const multiplyAndAdd3 = composeRight(multiply, add3, add);
assertEquals(multiplyAndAdd3(5, 2), 16);
```
