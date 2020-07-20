---
title: takeRightWhile
tags: array,function,intermediate
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Removes elements from the end of an array until the passed function returns `true`. Returns the removed elements.

Loop through the array, using a `Array.prototype.reduceRight()` and accumulating elements while the function returns falsy value.

```ts title="typescript"
const takeRightWhile = (arr: any[], func: Predicate) =>
  arr.reduceRight((acc, el) => (func(el) ? acc : [el].concat(acc)), []);
```

```ts title="typescript"
takeRightWhile([1, 2, 3, 4], (n) => n < 3); // [3, 4]
```
