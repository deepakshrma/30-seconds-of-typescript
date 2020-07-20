---
title: reverseString
tags: string,array,beginner
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Reverses a string.

Use the spread operator (`...`) and `Array.prototype.reverse()` to reverse the order of the characters in the string.
Combine characters to get a string using `String.prototype.join('')`.

```ts title="typescript"
const reverseString = (str) => [...str].reverse().join("");
```

```ts title="typescript"
reverseString("foobar"); // 'raboof'
```
