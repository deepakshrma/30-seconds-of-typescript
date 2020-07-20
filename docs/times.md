---
title: times
tags: function,intermediate
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Iterates over a callback `n` times

Use `Function.call()` to call `fn` `n` times or until it returns `false`.
Omit the last argument, `context`, to use an `undefined` object (or the global object in non-strict mode).

```ts title="typescript"
const times = (n: number, fn: Function, context: any = undefined) => {
  let i = 0;
  while (fn.call(context, i) !== false && ++i < n) {}
};
```

```ts title="typescript"
var output = "";
times(5, (i) => (output += i));
console.log(output); // 01234

var output = "";
const result = times(5, (i: string) => (output += i));
assertEquals(output, "01234");
assertEquals(result, "01234");
```
