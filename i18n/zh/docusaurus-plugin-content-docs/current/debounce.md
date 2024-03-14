---
title: debounce [调试]
tags: [function, intermediate]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "debounce" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

创建一个拒绝的函数，延迟调用提供的功能，直到自上次调用以来至少已经过去了。

每次调用拒绝功能时，都会清除当前待处理的超时 `clearTimeout()` 并使用 `setTimeout()` 创建一个新的超时，延迟调用该功能至少 `ms` 毫秒已经过去了。 使用 `Function.prototype.apply()` 应用 `this` 该功能的上下文并提供必要的参数。
省略第二个论点， `ms`, 将超时设置为默认值为0 ms。

```ts title="typescript"
const debounce = (fn: Function, ms = 300) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};
```

```ts title="typescript"
window.addEventListener(
  "resize",
  debounce(() => {
    console.log(window.innerWidth);
    console.log(window.innerHeight);
  }, 250)
); // Will log the window dimensions at most every 250ms

let counter = 0;
const updateState = () => {
  counter++;
};
const debouncedUpdate = debounce(updateState);
debouncedUpdate(); // counter == 1
debouncedUpdate(); // counter == 1
await delay(300); // counter == 1
assertEquals(counter, 1);
debouncedUpdate(); // counter == 2
await delay(300); // counter == 2
assertEquals(counter, 2);
```
