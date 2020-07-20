---
title: serializeCookie
tags: browser,string,intermediate
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Serialize a cookie name-value pair into a Set-Cookie header string.

Use template literals and `encodeURIComponent()` to create the appropriate string.

```ts title="typescript"
const serializeCookie = (name, val) =>
  `${encodeURIComponent(name)}=${encodeURIComponent(val)}`;
```

```ts title="typescript"
serializeCookie("foo", "bar"); // 'foo=bar'
```
