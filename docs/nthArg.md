---
title: nthArg
tags: function,beginner
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Creates a function that gets the argument at index `n`. If `n` is negative, the nth argument from the end is returned.

Use `Array.prototype.slice()` to get the desired argument at index `n`.

```ts title="typescript"
const nthArg = (n: number) => (...args: any[]) => args.slice(n)[0];
```

```ts title="typescript"
const third = nthArg(2);
third(1, 2, 3); // 3
third(1, 2); // undefined
const last = nthArg(-1);
last(1, 2, 3, 4, 5); // 5
```
