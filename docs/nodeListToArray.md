---
title: nodeListToArray
tags: browser,array,beginner
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Converts a `NodeList` to an array.

Use spread operator inside new array to convert a `NodeList` to an array.

```ts title="typescript"
const nodeListToArray = <T = any>(nodeList: Iterable<T>) => [...nodeList];
```

```ts title="typescript"
nodeListToArray(document.childNodes); // [ <!DOCTYPE html>, html ]

// array like string

const caps = (x: string) => x.toUpperCase();
nodeListToArray("caps").map(caps); // ["C", "A", "P", "S"]
```
