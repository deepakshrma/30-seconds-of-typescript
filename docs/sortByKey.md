---
title: sortByKey
tags: string,beginner
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Sort by based on the key.

Use the spread operator (`...`), `Array.prototype.sort()` and `String.localeCompare()` to sort array of data.

```ts
enum SortByOrder {
  ASC = 1,
  DESC = -1,
}
const sortByKey = <T = any>(
  arr: T[],
  key: string,
  order: SortByOrder = SortByOrder.ASC
) => {
  return [...arr].sort(
    (s1: any, s2: any) => order * String(s1[key]).localeCompare(String(s2[key]))
  );
};
```

```ts
sortBy([{ name: "02" }, { name: "01" }], "name"); // [{ name: "01" },{ name: "02" }]
// Descending
sortBy([{ name: "02" }, { name: "01" }], "name", -1); // [{ name: "02" },{ name: "01" }]
```
