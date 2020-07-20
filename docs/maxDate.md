---
title: maxDate
tags: date,math,beginner
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Returns the maximum of the given dates.

Use the ES6 spread syntax with `Math.max` to find the maximum date value, `new Date()` to convert it to a `Date` object.

```ts title="typescript"
const maxDate = (dates: Date[]) => new Date(Math.max(...dates.map(Number)));
```

```ts title="typescript"
const array = [
  new Date(2017, 4, 13),
  new Date(2018, 2, 12),
  new Date(2016, 0, 10),
  new Date(2016, 0, 9),
];
maxDate(array); // 2018-03-11T22:00:00.000Z
```
