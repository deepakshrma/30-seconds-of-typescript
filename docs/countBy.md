---
title: countBy
tags: array,object,intermediate
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Groups the elements of an array based on the given function and returns the count of elements in each group.

Use `Array.prototype.map()` to map the values of an array to a function or property name.
Use `Array.prototype.reduce()` to create an object, where the keys are produced from the mapped results.

```ts
export const countBy = <T extends any>(arr: T[], fn: Func<T> | string) => {
  const mapper = typeof fn === "function" ? fn : (val: any) => val[fn];
  return arr.reduce((acc, val) => {
    const value = mapper(val);
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {} as any);
};
```

```ts
countBy([6.1, 4.2, 6.3], Math.floor); // {4: 1, 6: 2}
countBy(["one", "two", "three"], "length"); // {3: 2, 5: 1}

countBy([{ name: "Deepak" }, { name: "Deepak2" }, { name: "Deepak" }], "name"); // { Deepak: 2, Deepak2: 1 }
countBy(
  [{ name: "Deepak" }, { name: "Deepak2" }, { name: "Deepak" }],
  (user: any) => user.name
); // { Deepak: 2, Deepak2: 1 }
```
