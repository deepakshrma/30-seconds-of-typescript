---
title: unzip
tags: array,intermediate
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Creates an array of arrays, ungrouping the elements in an array produced by [zip](/js/s/zip).

Use `Math.max.apply()` to get the longest subarray in the array, `Array.prototype.map()` to make each element an array.
Use `Array.prototype.reduce()` and `Array.prototype.forEach()` to map grouped values to individual arrays.

```ts title="typescript"
const unzip = (arr: any[], size = 0) => {
  return arr.reduce(
    (acc, val) => (val.forEach((v: any, i: number) => acc[i].push(v)), acc),
    Array.from({
      length: size || Math.max(...arr.map((x) => x.length)),
    }).map(() => [])
  );
};
```

```ts title="typescript"
unzip([
  ["a", 1, true],
  ["b", 2, false],
]); // [['a', 'b'], [1, 2], [true, false]]
unzip([
  ["a", 1, true],
  ["b", 2],
]); // [['a', 'b'], [1, 2], [true]]
unzip(
  [
    ["a", 1, true],
    ["b", 2, false],
  ],
  3
); // [ ["a", "b"], [1, 2], [true, false], ]
```
