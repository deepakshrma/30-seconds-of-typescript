---
title: sortBy
tags: string,beginner
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Sort by based on the key or function.

Use the spread operator (`...`), `Array.prototype.sort()` and `String.localeCompare()` to sort array of data. If `$fn`, not given it will sort by string compare.

```ts
type SortByFunc<T> = (s1: T, s2: T) => number;
enum SortByOrder {
  ASC = 1,
  DESC = -1,
}
const sortBy = <T = any>(
  arr: T[],
  $fn: SortByFunc<T> = (s1: any, s2: any) =>
    order * String(s1).localeCompare(String(s2)),
  order: SortByOrder = SortByOrder.ASC
) => {
  let fn = $fn;
  return [...arr].sort(fn);
};
```

```js
sortBy([1, 2, 4, 3, 4, -1]); // [-1, 1, 2, 3, 4, 4]
sortBy(["Test", "test"]); // ["Test", "test"]

// Descending
sortBy([1, 2, 4, 3, 4, -1], undefined, -1); // [4, 4, 3, 2, 1, -1]

sortBy([{ name: "02" }, { name: "01" }], (s1: any, s2: any) =>
  s1.name.localeCompare(s2.name)
); //[{ name: "01" }, { name: "02" }]
// Descending
sortBy(
  [{ name: "02" }, { name: "01" }],
  (s1: any, s2: any) => -1 * s1.name.localeCompare(s2.name)
); //[{ name: "02" }, { name: "01" }]
```
