---
title: partialRight
tags: function,intermediate
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Creates a function that invokes `fn` with `partials` appended to the arguments it receives.

Use the spread operator (`...`) to append `partials` to the list of arguments of `fn`.

```ts title="typescript"
const partialRight = (fn: Function, ...partials: any[]) => (...args: any[]) =>
  fn(...args, ...partials);
```

```ts title="typescript"
const greet = (greeting, name) => greeting + " " + name + "!";
const greetJohn = partialRight(greet, "John");
greetJohn("Hello"); // 'Hello John!'
```
