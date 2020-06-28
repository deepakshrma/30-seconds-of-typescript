---
title: sortCharactersInString
tags: string,beginner
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

Alphabetically sorts the characters in a string.

Use the spread operator (`...`), `Array.prototype.sort()` and `String.localeCompare()` to sort the characters in `str`, recombine using `String.prototype.join('')`.

```js
const sortCharactersInString = (str) =>
  [...str].sort((a, b) => a.localeCompare(b)).join("");
```

```js
sortCharactersInString("cabbage"); // 'aabbceg'
```
