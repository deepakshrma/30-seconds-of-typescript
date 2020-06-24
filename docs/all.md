---
id: all
sidebar_label: all
title: All
tags: array,function,beginner
---

Returns `true` if the provided predicate function returns `true` for all elements in a collection, `false` otherwise.

Use `Array.prototype.every()` to test if all elements in the collection return `true` based on `fn`.
Omit the second argument, `fn`, to use `Boolean` as a default.

```ts
const all = <T extends any>(arr: T[], fn: (t: T) => boolean = Boolean) =>
  arr.every(fn);
```

```ts
assertEquals(all([1, 2, 3, 4]), true);
assertEquals(all([2, null, 1]), false);

const hasName = (user: any) => Boolean(user.name);
assertEquals(all([{ name: "D" }, { name: "D2" }], hasName), true);
assertEquals(all([{ name: "D" }, { name: "" }], hasName), false);
```
