---
id: aperture
sidebar_label: Aperture
title: aperture
tags: array,intermediate
---

Returns an array of `n`-tuples of consecutive elements.

Use `Array.prototype.slice()` and `Array.prototype.map()` to create an array of appropriate length and populate it with `n`-tuples of consecutive elements from `arr`.
If `n` is greater than the length of `arr`, return an empty array.

```ts
const aperture = <T extends any>(n: number, arr: T[]) =>
  n >= arr.length
    ? []
    : arr.slice(n - 1).map((v, i) => [...arr.slice(i, i + n - 1), v]);
```

```ts
aperture(2, [1, 2, 3, 4]); // [[1, 2], [2, 3], [3, 4]]
aperture(3, [1, 2, 3, 4]); // [[1, 2, 3], [2, 3, 4]]
aperture(5, [1, 2, 3, 4]); // [1, 2, 3, 4]
```
