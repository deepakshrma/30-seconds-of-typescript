---
title: union
tags: array,math,beginner
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Returns every element that exists in any of the two arrays once.

Create a `Set` with all values of `a` and `b` and convert to an array.

```ts title="typescript"
const union = (a: any[], b: any[]) => Array.from(new Set([...a, ...b]));
```

```ts title="typescript"
union([1, 2, 3], [4, 3, 2]); // [1, 2, 3, 4]
```
