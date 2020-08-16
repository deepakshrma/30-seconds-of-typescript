---
title: either
tags: function,logic,beginner
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "either" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Returns `true` if at least one function returns `true` for a given set of arguments, `false` otherwise.

Use the logical or (`||`) operator on the result of calling the two functions with the supplied `args`.

```ts title="typescript"
export const either = (f: Function, g: Function) => (...args: any[]) =>
  f(...args) || g(...args);
```

```ts title="typescript"
const isEven = (num: number) => num % 2 === 0;
const isPositive = (num: number) => num > 0;
const isPositiveOrEven = either(isPositive, isEven);

isPositiveOrEven(4); // true
isPositiveOrEven(3); // true

interface User {
  name: string;
  age: number;
}
const user1: User = {
  name: "deepak",
  age: 18,
};
const user2: User = {
  name: "Martha",
  age: 21,
};
const isDeepak = (u: User) => u.name === "deepak";
const isAdult = (minAge: number, u: User) => u.age > minAge;
```
