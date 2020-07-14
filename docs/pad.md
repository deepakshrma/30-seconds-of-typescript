---
title: pad
tags: string,beginner
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Pads a string on both sides with the specified character, if it's shorter than the specified length.

Use `String.prototype.padStart()` and `String.prototype.padEnd()` to pad both sides of the given string.
Omit the third argument, `char`, to use the whitespace character as the default padding character.

```ts
const pad = (str: string, length: number, char = " ") =>
  str.padStart((str.length + length) / 2, char).padEnd(length, char);
```

```js
pad("cat", 8); // '  cat   '
pad(String(42), 6, "0"); // '004200'
pad("foobar", 3); // 'foobar'
```
