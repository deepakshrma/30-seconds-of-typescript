---
title: mostFrequent
tags: array,intermediate
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Returns the most frequent element in an array.

Use `Array.prototype.reduce()` to map unique values to an object's keys, adding to existing keys every time the same value is encountered.
Use `Object.entries()` on the result in combination with `Array.prototype.reduce()` to get the most frequent value in the array.

```ts title="typescript"
const mostFrequent = <T extends string | number>(arr: T[]) =>
  Object.entries(
    arr.reduce((a: AnyObject, v: T) => {
      a[String(v)] = a[String(v)] ? a[String(v)] + 1 : 1;
      return a;
    }, {} as AnyObject)
  ).reduce((a, v) => (v[1] >= a[1] ? v : a), [-1, 0])[0];
```

```ts title="typescript"
mostFrequent(["a", "b", "a", "c", "a", "a", "b"]); // 'a'
mostFrequent(["1", "11", "2", 1, 2, "3", "1"]); // "1"
```
