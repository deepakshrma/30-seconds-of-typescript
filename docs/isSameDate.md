---
title: isSameDate
tags: date,beginner
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Check if a date is the same as another date.

Use `Date.prototype.toISOString()` and strict equality checking (`===`) to check if the first date is the same as the second one.

```ts title="typescript"
const isSameDate = (dateA: Date, dateB: Date) =>
  dateA.toISOString() === dateB.toISOString();
```

```ts title="typescript"
isSameDate(new Date(2010, 10, 20), new Date(2010, 10, 20)); // true
```
