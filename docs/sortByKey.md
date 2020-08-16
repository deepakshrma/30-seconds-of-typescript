---
title: sortByKey
tags: string,beginner
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "sortByKey" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Sort by based on the key.

Use the spread operator (`...`), `Array.prototype.sort()` and `String.localeCompare()` to sort array of data.

```ts title="typescript"
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

```ts title="typescript"
sortBy([{ name: "02" }, { name: "01" }], "name"); // [{ name: "01" },{ name: "02" }]
// Descending
sortBy([{ name: "02" }, { name: "01" }], "name", -1); // [{ name: "02" },{ name: "01" }]
```
