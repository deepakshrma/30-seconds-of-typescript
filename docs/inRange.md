---
title: inRange
tags: math,beginner
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Checks if the given number falls within the given range.

Use arithmetic comparison to check if the given number is in the specified range.
If the second parameter, `end`, is not specified, the range is considered to be from `0` to `start`.

```ts title="typescript"
const inRange = <T extends number | Date | string>(n: T, start: T, end?: T) => {
  if (end && start > end) [end, start] = [start, end];
  return end === undefined ? n >= 0 && n < start : n >= start && n < end;
};
```

```ts title="typescript"
inRange(3, 2, 5); // true
inRange(3, 4); // true
inRange(2, 3, 5); // false
inRange(3, 2); // false

inRange(new Date(2020, 5, 1), new Date(2020, 4, 12), new Date(2020, 6, 12)); //true
inRange(new Date(2020, 5, 12), new Date(2020, 6, 12), new Date(2020, 8, 12)); // false

assertEquals(inRange("d", "a", "h"), true);
assertEquals(inRange("d", "e", "h"), false);
```
