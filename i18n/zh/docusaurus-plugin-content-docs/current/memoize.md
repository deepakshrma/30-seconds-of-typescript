---
title: memoize [回忆]
tags: [function, advanced]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "memoize" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

返回回忆（缓存）功能。

通过实例化新的 `Map` 对象来创建一个空的缓存。
返回一个函数，该函数首先检查该函数的特定输入值的输出是否已被缓存，或者存储并返回，该函数是否已提供给了记忆的函数。必须使用 `function` 关键字，以便在必要时更改记忆的函数 `this` 上下文''。
通过将其设置为返回函数上的属性，允许访问 `cache`。

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
