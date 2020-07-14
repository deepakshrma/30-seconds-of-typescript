---
title: partial
tags: function,intermediate
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Creates a function that invokes `fn` with `partials` prepended to the arguments it receives.

Use the spread operator (`...`) to prepend `partials` to the list of arguments of `fn`.

```ts
const partial = (fn: Function, ...partials: any[]) => (...args: any[]) =>
  fn(...partials, ...args);
```

```ts
const greet = (greeting, name) => greeting + " " + name + "!";
const greetHello = partial(greet, "Hello");
greetHello("John"); // 'Hello John!'
```
