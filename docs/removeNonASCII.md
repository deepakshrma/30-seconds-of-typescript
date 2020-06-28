---
title: removeNonASCII
tags: string,regexp,intermediate
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

Removes non-printable ASCII characters.

Use a regular expression to remove non-printable ASCII characters.

```js
const removeNonASCII = (str) => str.replace(/[^\x20-\x7E]/g, "");
```

```js
removeNonASCII("äÄçÇéÉêlorem-ipsumöÖÐþúÚ"); // 'lorem-ipsum'
```
