---
title: deepGet
tags: object,intermediate
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "deepGet" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Returns the target value in a nested JSON object, based on the `keys` array.

Compare the keys you want in the nested JSON object as an `Array`.
Use `Array.prototype.reduce()` to get value from nested JSON object one by one.
If the key exists in object, return target value, otherwise, return `null`.

```ts title="typescript"
// Guard
function isString<T = any>(str: string | T): str is string {
  return typeof str === "string";
}

const deepGet = (
  obj: any,
  keys: string | (string | number)[],
  delimiter = "."
) => {
  if (isString(keys)) {
    keys = keys.split(delimiter);
  }
  return keys.reduce((xs, x) => (xs && xs[x] ? xs[x] : null), obj);
};
```

```ts title="typescript"
let index = 2;
const data = {
  foo: {
    foz: [1, 2, 3],
    bar: {
      baz: ["a", "b", "c"],
    },
  },
};
deepGet(data, ["foo", "foz", index]); // 3
deepGet(data, ["foo", "bar", "baz", 8, "foz"]); //undefined
deepGet(data, "foo.foz.2"); // 3
deepGet(data, "foo->foz->2", null, "->"); //3
deepGet(data, "foo.bar.baz.8.foz", null); //null
```
