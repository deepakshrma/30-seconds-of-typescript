---
title: mask
tags: string,intermediate
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Replaces all but the last `num` of characters with the specified mask character.

Use `String.prototype.slice()` to grab the portion of the characters that will remain unmasked and use `String.padStart()` to fill the beginning of the string with the mask character up to the original length.
Omit the second argument, `num`, to keep a default of `4` characters unmasked. If `num` is negative, the unmasked characters will be at the start of the string.
Omit the third argument, `mask`, to use a default character of `'*'` for the mask.

```ts title="typescript"
const mask = (cc: number | string, num = 4, mask = "*") =>
  String(cc).slice(-num).padStart(String(cc).length, mask);
```

```ts title="typescript"
mask(1234567890); // '******7890'
mask(1234567890, 3); // '*******890'
mask(1234567890, -4, "$"); // '$$$$567890'
```
