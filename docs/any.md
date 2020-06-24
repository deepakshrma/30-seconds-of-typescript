---
id: any
sidebar_label: any|some
title: Any
tags: array,function,beginner
---

Returns `true` if the provided predicate function returns `true` for at least one element in a collection, `false` otherwise.

Use `Array.prototype.some()` to test if any elements in the collection return `true` based on `fn`.
Omit the second argument, `fn`, to use `Boolean` as a default.

```ts
const any = <T extends any>(arr: T[], fn: (t: T) => boolean = Boolean) =>
  arr.some(fn);
```

```ts
any([0, 1, 2, 0], (x) => x >= 2); // true
any([0, 0, 1, 0]); // true
```
