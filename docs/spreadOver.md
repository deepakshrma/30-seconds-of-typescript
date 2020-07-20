---
title: spreadOver
tags: function,intermediate
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Takes a variadic function and returns a closure that accepts an array of arguments to map to the inputs of the function.

Use closures and the spread operator (`...`) to map the array of arguments to the inputs of the function.

```ts title="typescript"
const spreadOver = (fn: Function) => (argsArr: any[]) => fn(...argsArr);
```

```ts title="typescript"
const arrayMax = spreadOver(Math.max);
arrayMax([1, 2, 3]); // 3
```
