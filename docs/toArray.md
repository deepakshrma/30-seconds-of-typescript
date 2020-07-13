---
title: toArray
tags: browser,array,beginner
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Converts a `ArrayLike` to an array.

Use spread operator inside new array to convert a `arrayLike` to an array.

```ts
const toArray = <T = any>(arrLike: Iterable<T>) => [...arrLike];
```

```ts
toArray(document.childNodes); // [ <!DOCTYPE html>, html ]

// array like string

const caps = (x: string) => x.toUpperCase();
toArray("caps").map(caps); // ["C", "A", "P", "S"]
```
