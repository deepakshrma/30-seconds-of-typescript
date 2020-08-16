---
title: bind
tags: function,object,intermediate
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "bind" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Creates a function that invokes `fn` with a given context, optionally adding any additional supplied parameters to the beginning of the arguments.

Return a `function` that uses `Function.prototype.apply()` to apply the given `context` to `fn`.
Use `Array.prototype.concat()` to prepend any additional supplied parameters to the arguments.

```ts title="typescript"
export const bind = <T = any>(
  fn: (...args: any[]) => any,
  context: T,
  ...boundArgs: any[]
) => (...args: any[]) => fn.apply(context, [...boundArgs, ...args]);
```

**TS:** You need to bind `this` type

```ts title="typescript"
const freddy = { user: "fred" };
function greet(this: typeof freddy, greeting: string, punctuation: string) {
  return greeting + " " + this.user + punctuation;
}
const freddyBound = bind(greet, freddy);
console.log(freddyBound("hi", "!")); // 'hi fred!'
```

**JS Version:**

```js
function greet(greeting, punctuation) {
  return greeting + " " + this.user + punctuation;
}
const freddy = { user: "fred" };
const freddyBound = bind(greet, freddy);
console.log(freddyBound("hi", "!")); // 'hi fred!'
```
