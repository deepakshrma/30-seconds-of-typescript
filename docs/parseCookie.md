---
title: parseCookie
tags: browser,string,intermediate
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Parse an HTTP Cookie header string and return an object of all cookie name-value pairs.

Use `String.prototype.split(';')` to separate key-value pairs from each other.
Use `Array.prototype.map()` and `String.prototype.split('=')` to separate keys from values in each pair.
Use `Array.prototype.reduce()` and `decodeURIComponent()` to create an object with all key-value pairs.

```ts title="typescript"
const parseCookie = (str: string) =>
  str
    .split(";")
    .map((v) => v.split("="))
    .reduce((acc, v) => {
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
      return acc;
    }, {} as AnyObject<string>);
```

```ts title="typescript"
parseCookie("foo=bar; equation=E%3Dmc%5E2"); // { foo: 'bar', equation: 'E=mc^2' }
```
