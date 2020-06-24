---
id: bifurcate
sidebar_label: bifurcate
title: Bifurcate
tags: array,intermediate
---

Splits values into two groups. If an element in `filter` is truthy, the corresponding element in the collection belongs to the first group; otherwise, it belongs to the second group.

Use `Array.prototype.reduce()` and `Array.prototype.push()` to add elements to groups, based on `filter`.

```ts
const bifurcate = <T extends any>(arr: T[], filter: boolean[]) =>
  arr.reduce(
    (acc, val, i) => {
      acc[filter[i] ? 0 : 1].push(val);
      return acc;
    },
    [[] as T[], [] as T[]]
  );
```

```ts
bifurcate(["beep", "boop", "foo", "bar"], [true, true, false, true]); // [ ['beep', 'boop', 'bar'], ['foo'] ]
```
