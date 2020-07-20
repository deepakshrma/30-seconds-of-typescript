---
title: getURLParameters
tags: browser,string,url,intermediate
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Returns an object containing the parameters of the current URL.

Use `String.prototype.match()` with an appropriate regular expression to get all key-value pairs, `Array.prototype.reduce()` to map and combine them into a single object.
Pass `location.search` as the argument to apply to the current `url`.

```ts title="typescript"
type URLParamValue = { [key: string]: string | string[] };

const getURLParameters = (url: string) => {
  return (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce((a, v) => {
    const [key, value] = v.split("=");
    if (a[key]) {
      a[key] = ((typeof a[key] === "string"
        ? [a[key]]
        : a[key]) as string[]).concat(value);
    } else {
      a[key] = value;
    }
    return a;
  }, {} as URLParamValue);
};
```

```ts title="typescript"
getURLParameters("http://url.com/page?name=Adam&surname=Smith"); // {name: 'Adam', surname: 'Smith'}
getURLParameters("google.com"); // {}
getURLParameters("http://url.com/page?name=Adam&surname=Smith&surname=Sm"); // { name: "Adam", surname: ["Smith", "Sm"] }
getURLParameters(
  "http://url.com/page?name=Adam&surname=Smith&surname=Sm&surname=Tm"
); //    { name: "Adam", surname: ["Smith", "Sm", "Tm"] }
```
