---
title: getBaseURL
tags: browser,string,url,beginner
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

Returns the current URL without any parameters.

Use `String.prototype.indexOf()` to check if the given `url` has parameters, `String.prototype.slice()` to remove them if necessary.

```js
const getBaseURL = (url) =>
  url.indexOf("?") > 0 ? url.slice(0, url.indexOf("?")) : url;
```

```js
getBaseURL("http://url.com/page?name=Adam&surname=Smith"); // 'http://url.com/page'
```
