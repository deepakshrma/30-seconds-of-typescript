---
title: isString
tags: type,string,beginner
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Checks if the given argument is a string. Only works for string primitives.

Use `typeof` to check if a value is classified as a string primitive.
Guard Function to check string type

```ts title="typescript"
const isString = <T = any>(str: string | T): str is string => {
  return typeof str === "string";
};
```

```ts title="typescript"
isString("10"); // true
```
