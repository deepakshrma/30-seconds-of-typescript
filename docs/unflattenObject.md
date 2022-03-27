---
title: unflattenObject
tags: [object, advanced]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "unflattenObject" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

Unflatten an object with the paths for keys.

Use `Object.keys(obj)` combined with `Array.prototype.reduce()` to convert flattened path node to a leaf node.
If the value of a key contains a dot delimiter (`.`), use `Array.prototype.split('.')`, string transformations and `JSON.parse()` to create an object, then `Object.assign()` to create the leaf node.
Otherwise, add the appropriate key-value pair to the accumulator object.

```js
const unflattenObject = (obj) =>
  Object.keys(obj).reduce((acc, k) => {
    if (k.indexOf(".") !== -1) {
      const keys = k.split(".");
      Object.assign(
        acc,
        JSON.parse(
          "{" +
            keys
              .map((v, i) => (i !== keys.length - 1 ? `"${v}":{` : `"${v}":`))
              .join("") +
            obj[k] +
            "}".repeat(keys.length)
        )
      );
    } else acc[k] = obj[k];
    return acc;
  }, {});
```

```js
unflattenObject({ "a.b.c": 1, d: 1 }); // { a: { b: { c: 1 } }, d: 1 }
```
