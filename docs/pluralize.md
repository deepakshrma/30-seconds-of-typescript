---
title: pluralize
tags: string,intermediate
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Returns the singular or plural form of the word based on the input number.

If `num` is either `-1` or `1`, return the singular form of the word. If `num` is any other number, return the plural form. Omit the third argument to use the default of the singular word + `s`, or supply a custom pluralized word when necessary.

```ts title="typescript"
const pluralize = (num: number, word: string, plural = word + "s") =>
  [1, -1].includes(Number(num)) ? word : plural;
```

```ts title="typescript"
pluralize(0, "apple"); // 'apples'
pluralize(1, "apple"); // 'apple'
pluralize(2, "apple"); // 'apples'
pluralize(2, "person", "people"); // 'people'
```
