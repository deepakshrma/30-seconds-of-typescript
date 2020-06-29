---
title: deepGet
tags: object,intermediate
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Returns the target value in a nested JSON object, based on the `keys` array.

Compare the keys you want in the nested JSON object as an `Array`.
Use `Array.prototype.reduce()` to get value from nested JSON object one by one.
If the key exists in object, return target value, otherwise, return `null`.

```ts
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

```ts
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
