---
title: compact
tags: array,beginner
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Removes falsy values from an array.

Use `Array.prototype.filter()` to filter out falsy values (`false`, `null`, `0`, `""`, `undefined`, and `NaN`).

```ts title="typescript"
const compact = (arr) => arr.filter(Boolean);
```

```ts title="typescript"
compact([0, 1, false, 2, "", 3, "a", Number("e") * 23, NaN, "s", 34]); // [ 1, 2, 3, 'a', 's', 34 ]
```
