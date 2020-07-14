---
title: runPromisesInSeries
tags: function,promise,intermediate
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Runs an array of promises in series.

Use `Array.prototype.reduce()` to create a promise chain, where each promise returns the next promise when resolved.

```ts
type PromisableFunc = (...args: any[]) => Promise<any>;
const runPromisesInSeries = (ps: PromisableFunc[]) =>
  ps.reduce((p, next) => p.then(next), Promise.resolve());
```

```ts
const delay = (d) => new Promise((r) => setTimeout(r, d));
runPromisesInSeries([() => delay(1000), () => delay(2000)]); // Executes each promise sequentially, taking a total of 3 seconds to complete
```
