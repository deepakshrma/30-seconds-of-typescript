---
id: castArray
sidebar_label: castArray
title: castArray
tags: type,array,beginner
---

Casts the provided value as an array if it's not one.

Use `Array.prototype.isArray()` to determine if `val` is an array and return it as-is or encapsulated in an array accordingly.

```ts
export const castArray = (val: any): any[] =>
  Array.isArray(val) ? val : [val];
```

```ts
castArray("foo"); // ['foo']
castArray([1]); // [1]
```
