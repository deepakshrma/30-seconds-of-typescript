---
title: deepFreeze
tags: [object, recursion, intermediate]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "deepFreeze" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Deep freezes an object.

Use `Object.keys()` to get all the properties of the passed object, `Array.prototype.forEach()` to iterate over them.
Call `Object.freeze(obj)` recursively on all properties, checking if each one is frozen using `Object.isFrozen()` and applying `deepFreeze()` as necessary.
Finally, use `Object.freeze()` to freeze the given object.

```ts title="typescript"
const deepFreeze = <T extends object>(obj: T) => {
  Object.keys(obj).forEach((prop) => {
    if (
      typeof obj[prop as keyof T] === 'object' &&
      !Object.isFrozen(obj[prop as keyof T])
    ) {
      deepFreeze(obj[prop as keyof T]);
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
