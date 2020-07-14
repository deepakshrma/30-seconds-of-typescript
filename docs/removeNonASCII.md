---
title: removeNonASCII
tags: string,regexp,intermediate
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Removes non-printable ASCII characters.

Use a regular expression to remove non-printable ASCII characters.

```ts
const removeNonASCII = (str) => str.replace(/[^\x20-\x7E]/g, "");
```

```ts
removeNonASCII("äÄçÇéÉêlorem-ipsumöÖÐþúÚ"); // 'lorem-ipsum'
```
