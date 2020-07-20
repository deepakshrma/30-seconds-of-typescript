---
title: deepFreeze
tags: object,recursion,intermediate
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Deep freezes an object.

Use `Object.keys()` to get all the properties of the passed object, `Array.prototype.forEach()` to iterate over them.
Call `Object.freeze(obj)` recursively on all properties, checking if each one is frozen using `Object.isFrozen()` and applying `deepFreeze()` as necessary.
Finally, use `Object.freeze()` to freeze the given object.

```ts title="typescript"
const deepFreeze = (obj: any) => {
  Object.keys(obj).forEach((prop) => {
    if (typeof obj[prop] === "object" && !Object.isFrozen(obj[prop])) {
      deepFreeze(obj[prop]);
    }
  });
  return Object.freeze(obj);
};
```

```ts title="typescript"
const o = deepFreeze([1, [2, 3]]);

o[0] = 3; // not allowed, TypeError: Cannot assign to read only property '0' of object '[object Array]'
o[1][1] = 4; // not allowed as well, TypeError: Cannot assign to read only property '1' of object '[object Array]'
```
