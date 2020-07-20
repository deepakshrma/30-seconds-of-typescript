---
title: unary
tags: function,beginner
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Creates a function that accepts up to one argument, ignoring any additional arguments.

Call the provided function, `fn`, with just the first argument given.

```ts title="typescript"
const unary = (fn: Function) => (val: any) => fn(val);
```

```ts title="typescript"
["6", "8", "10"].map(unary(parseInt)); // [6, 8, 10]
```
