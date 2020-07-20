---
title: objectToQueryString
tags: object,function,intermediate
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Returns a query string generated from the key-value pairs of the given object.

Use `Array.prototype.reduce()` on `Object.entries(queryParameters)` to create the query string.
Determine the `symbol` to be either `?` or `&` based on the `length` of `queryString` and concatenate `val` to `queryString` only if it's a string.
Return the `queryString` or an empty string when the `queryParameters` are falsy.

```ts title="typescript"
const objectToQueryString = (queryParameters: AnyObject) => {
  return queryParameters
    ? Object.entries(queryParameters).reduce(
        (queryString, [key, val], index) => {
          const symbol = queryString.length === 0 ? "?" : "&";
          queryString += val ? `${symbol}${key}=${val}` : "";
          return queryString;
        },
        ""
      )
    : "";
};
```

```ts title="typescript"
objectToQueryString({ page: "1", size: "2kg", key: undefined }); // '?page=1&size=2kg'
```
