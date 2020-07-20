---
title: matchesWith
tags: object,type,function,intermediate
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Compares two objects to determine if the first one contains equivalent property values to the second one, based on a provided function.

Use `Object.keys(source)` to get all the keys of the second object, then `Array.prototype.every()`, `Object.hasOwnProperty()` and the provided function to determine if all keys exist in the first object and have equivalent values.
If no function is provided, the values will be compared using the equality operator.

```ts title="typescript"
const matchesWith = (obj: AnyObject, source: AnyObject, fn: Function) =>
  Object.keys(source).every((key) =>
    obj.hasOwnProperty(key) && fn
      ? fn(obj[key], source[key], key, obj, source)
      : obj[key] == source[key]
  );
```

```ts title="typescript"
const isGreeting = (val: string) => /^h(?:i|ello)$/.test(val);
matchesWith(
  { greeting: "hello" },
  { greeting: "hi" },
  (oV: string, sV: string) => isGreeting(oV) && isGreeting(sV)
); // true
```
