---
title: isBeforeDate
tags: date,beginner
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Check if a date is before another date.

Use the less than operator (`<`) to check if the first date comes before the second one.

```ts
const isBeforeDate = (dateA: Date, dateB: Date) => dateA < dateB;
```

```ts
isBeforeDate(new Date(2010, 10, 20), new Date(2010, 10, 21)); // true
```
