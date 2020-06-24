---
id: average
sidebar_label: Average
title: average
tags: math,array,beginner
---

Returns the average of two or more numbers.

Use `Array.prototype.reduce()` to add each value to an accumulator, initialized with a value of `0`, divide by the `length` of the array.

```ts
const average = <T extends number>(...nums: number[]) =>
  nums.reduce((acc, val) => acc + val, 0) / nums.length;
```

```ts
average(...[1, 2, 3, 4]); // 2.5
average(1, 2, 3); // 2
```
