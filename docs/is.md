---
title: is
tags: type,array,regexp,beginner
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "is" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Checks if the provided value is of the specified type `String name or Class itself`.

Ensure the value is not `undefined` or `null` using `Array.prototype.includes()`, and compare the `constructor` property on the value with `type` to check if the provided value is of the specified `type`.

```ts title="typescript"
type ConstructorType<T = any> = new (...args: any[]) => T;
export const is = (type: ConstructorType | string, val: any) =>
  ![, null].includes(val) &&
  (isString(type) ? val.constructor.name === type : val.constructor === type);
```

```ts title="typescript"
is(Array, [1]); // true
is(ArrayBuffer, new ArrayBuffer()); // true
is(Map, new Map()); // true
is(RegExp, /./g); // true
is(Set, new Set()); // true
is(WeakMap, new WeakMap()); // true
is(WeakSet, new WeakSet()); // true
is(String, ""); // true
is(String, new String("")); // true
is(Number, 1); // true
is(Number, new Number(1)); // true
is(Boolean, true); // true
is(Boolean, new Boolean(true)); // true

// With string name

is("Array", [1]); // true
is("ArrayBuffer", new ArrayBuffer(0)); // true
is("Map", new Map()); // true
is("RegExp", /./g); // true
is("Set", new Set()); // true
is("WeakMap", new WeakMap()); // true
is("WeakSet", new WeakSet()); // true
is("String", ""); // true
is("String", new String("")); // true
is("Number", 1); // true
is("Number", new Number(1)); // true
is("Boolean", true); // true
is("Boolean", new Boolean(true)); // true
```
