---
title: promisify
tags: function,promise,intermediate
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Converts an asynchronous function to return a promise.

_In Node 8+, you can use [`util.promisify`](https://nodejs.org/api/util.html#util_util_promisify_original)_

Use currying to return a function returning a `Promise` that calls the original function.
Use the `...rest` operator to pass in all the parameters.

```ts
const promisify = (func: Function) => (...args: any[]) =>
  new Promise((resolve, reject) =>
    func(...args, (err: Error, result: any) =>
      err ? reject(err) : resolve(result)
    )
  );
```

```ts
const delay = promisify((d, cb) => setTimeout(cb, d));
delay(2000).then(() => console.log("Hi!")); // // Promise resolves after 2s
```
