---
title: memoize
tags: function,advanced
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Returns the memoized (cached) function.

Create an empty cache by instantiating a new `Map` object.
Return a function which takes a single argument to be supplied to the memoized function by first checking if the function's output for that specific input value is already cached, or store and return it if not. The `function` keyword must be used in order to allow the memoized function to have its `this` context changed if necessary.
Allow access to the `cache` by setting it as a property on the returned function.

```ts title="typescript"
const memoize = <T = any>(fn: Func<T>) => {
  const cache = new Map();
  const cached = function (this: any, val: T) {
    return cache.has(val)
      ? cache.get(val)
      : cache.set(val, fn.call(this, val)) && cache.get(val);
  };
  cached.cache = cache;
  return cached;
};
```

```ts title="typescript"
// See the `factorial` snippet.
const factorialCache = memoize(factorial);
factorialCache(6); // 720, little bit slow
factorialCache(6); // 720, slightly faster

// To get all cache
console.log(factorialCache.cache);
```
