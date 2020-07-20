---
title: toPairs
tags: object,array,intermediate
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Creates an array of key-value pair arrays from an object or other iterable (object, array, string, set etc.).

Check if `Symbol.iterator` is defined and, if so, use `Array.prototype.entries()` to get an iterator for the given iterable, `Array.from()` to convert the result to an array of key-value pair arrays.
If `Symbol.iterator` is not defined for `obj`, use `Object.entries()` instead.

```ts title="typescript"
const isArrayLike = (obj: any): obj is Array<any> => {
  return (
    obj[Symbol.iterator] instanceof Function && obj.entries instanceof Function
  );
};
const toPairs = (obj: any) =>
  isArrayLike(obj) ? Array.from(obj.entries()) : Object.entries(obj);
```

```ts title="typescript"
toPairs({ a: 1, b: 2 }); // [ ['a', 1], ['b', 2] ]
toPairs([2, 4, 8]); // [ [0, 2], [1, 4], [2, 8] ]
toPairs("shy"); // [ ['0', 's'], ['1', 'h'], ['2', 'y'] ]
toPairs(new Set(["a", "b", "c", "a"])); // [ ['a', 'a'], ['b', 'b'], ['c', 'c'] ]

toPairs(undefined); //[]
toPairs(null); //[]
toPairs(true); //[]
toPairs(false); //[]
```
