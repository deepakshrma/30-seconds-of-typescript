---
title: getBaseURL
tags: browser,string,url,beginner
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Returns the current URL without any parameters.

Use `String.prototype.indexOf()` to check if the given `url` has parameters, `String.prototype.slice()` to remove them if necessary.

```ts title="typescript"
const getBaseURL = (url: string) =>
  url.indexOf("?") > 0 ? url.slice(0, url.indexOf("?")) : url;
```

```ts title="typescript"
getBaseURL("http://url.com/page?name=Adam&surname=Smith"); // 'http://url.com/page'
```
