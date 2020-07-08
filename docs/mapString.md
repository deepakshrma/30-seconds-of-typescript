---
title: mapString
tags: string,array,function,beginner
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Creates a new string with the results of calling a provided function on every character in the calling string.

Use `String.prototype.split('')` and `Array.prototype.map()` to call the provided function, `fn`, for each character in `str`.
Use `Array.prototype.join('')` to recombine the array of characters into a string.
The callback function, `fn`, takes three arguments (the current character, the index of the current character and the string `mapString` was called upon).

```ts
const mapString = (str: string, fn: MapFunc<string>) => {
  const chars = [...str];
  return chars.map((c, i) => fn(c, i, chars)).join("");
};
```

```ts
mapString("lorem ipsum", (c) => c.toUpperCase()); // 'LOREM IPSUM'
```
