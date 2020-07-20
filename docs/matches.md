---
title: matches
tags: object,type,intermediate
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Compares two objects to determine if the first one contains equivalent property values to the second one.

Use `Object.keys(source)` to get all the keys of the second object, then `Array.prototype.every()`, `Object.hasOwnProperty()` and strict comparison to determine if all keys exist in the first object and have the same values.

```ts title="typescript"
const matches = (obj: AnyObject, source: AnyObject) =>
  Object.keys(source).every(
    (key) => obj.hasOwnProperty(key) && obj[key] === source[key]
  );
```

```ts title="typescript"
matches({ age: 25, hair: "long", beard: true }, { hair: "long", beard: true }); // true
matches({ hair: "long", beard: true }, { age: 25, hair: "long", beard: true }); // false
```
