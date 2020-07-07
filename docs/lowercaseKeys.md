---
title: lowercaseKeys
tags: object,intermediate
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Creates a new object from the specified object, where all the keys are in lowercase.

Use `Object.keys()` and `Array.prototype.reduce()` to create a new object from the specified object.
Convert each key in the original object to lowercase, using `String.toLowerCase()`.

```ts
type AnyObject = { [key: string]: any };
const lowercaseKeys = (obj: AnyObject, deep = false) =>
  Object.keys(obj).reduce((acc, key) => {
    acc[key.toLowerCase()] =
      deep && typeof obj[key] === "object" ? lowercaseKeys(obj[key]) : obj[key];
    return acc;
  }, {} as AnyObject);
```

```ts
lowercaseKeys({ Name: "Adam", sUrnAME: "Smith" }); // {name: 'Adam', surname: 'Smith'};
lowercaseKeys({ Name: "Adam", adDress: { Pin: 700000 } }, true); // {name: 'Adam',  address: {pin: 700000} }
```
