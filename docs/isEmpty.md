---
title: isEmpty
tags: type,array,object,string,beginner
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Returns true if the a value is an empty object, collection, has no enumerable properties or is any type that is not considered a collection.

Check if the provided value is `null` or if its `length` is equal to `0`.

```ts title="typescript"
const isEmpty = (val: any) => val == null || !(Object.keys(val) || val).length;
```

```ts title="typescript"
isEmpty([]); // true
isEmpty({}); // true
isEmpty(""); // true
isEmpty([1, 2]); // false
isEmpty({ a: 1, b: 2 }); // false
isEmpty("text"); // false
isEmpty(123); // true - type is not considered a collection
isEmpty(true); // true - type is not considered a collection
```
