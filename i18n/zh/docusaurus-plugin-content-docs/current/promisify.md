---
title: promisify [承诺]
tags: [function, promise, intermediate]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "promisify" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

转换异步功能以返回承诺。

_In Node 8+, you can use [`util.promisify`](https://nodejs.org/api/util.html#util_util_promisify_original)_

使用 currying 返回函数返回 `Promise` 该调用原始功能。
使用 `...rest` 运算符传递所有参数。

```ts title="typescript"
const promisify =
  (func: Function) =>
  (...args: any[]) =>
    new Promise((resolve, reject) =>
      func(...args, (err: Error, result: any) =>
        err ? reject(err) : resolve(result)
      )
    );
```

```ts title="typescript"
const delay = promisify((d, cb) => setTimeout(cb, d));
delay(2000).then(() => console.log("Hi!")); // // Promise resolves after 2s
```
