---
title: isAfterDate
tags: date,beginner
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Check if a date is after another date.

Use the greater than operator (`>`) to check if the first date comes after the second one.

```ts title="typescript"
const isAfterDate = (dateA: Date, dateB: Date) => dateA > dateB;
```

```ts title="typescript"
isAfterDate(new Date(2010, 10, 21), new Date(2010, 10, 20)); // true
```
