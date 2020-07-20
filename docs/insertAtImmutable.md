---
title: insertAtImmutable
tags: array,intermediate
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Insert(Immutable) the given values at the specified index.

Use `Array.prototype.slice()` with an appropriate index and a delete count of `0`, spreading the given values to be inserted.

```ts title="typescript"
const insertAtImmutable = (arr: any[], i: number, ...v: any[]) => {
  arr.splice(i + 1, 0, ...v);
  return arr;
};
```

```ts title="typescript"
insertAtImmutable([1, 2, 3, 4], 2, 5); // [1, 2, 3, 5, 4]
insertAtImmutable([2, 10], 0, 4, 6, 8); // [2, 4, 6, 8, 10]

// Insert from behind
insertAtImmutable([4, 5], -1, 1, 2, 3); // [1, 2, 3, 4, 5]
```
