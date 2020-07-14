---
title: pipeAsyncFunctions
tags: function,promise,intermediate
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Performs left-to-right function composition for asynchronous functions.

Use `Array.prototype.reduce()` and the spread operator (`...`) to perform function composition using `Promise.then()`.
The functions can return a combination of normal values, `Promise`s or be `async`, returning through `await`.
All functions must accept a single argument.

```ts
type PromiseReturn = (v: any) => Promise<any>;
const pipeAsyncFunctions = (...fns: PromiseReturn[]) => (arg: any) =>
  fns.reduce((p, f) => p.then(f), Promise.resolve(arg) as PromiseLike<any>);
```

```ts
const sum = pipeAsyncFunctions(
  (x) => x + 1,
  (x) => new Promise((resolve) => setTimeout(() => resolve(x + 2), 1000)),
  (x) => x + 3,
  async (x) => (await x) + 4
);
(async () => {
  console.log(await sum(5)); // 15 (after one second)
})();
```
