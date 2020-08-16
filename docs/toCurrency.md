---
title: toCurrency
tags: math,string,intermediate
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "toCurrency" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

Take a number and return specified currency formatting.

Use `Intl.NumberFormat` to enable country / currency sensitive formatting.

```ts title="typescript"
const toCurrency = (n: number, curr: string, LanguageFormat: string = "") =>
  Intl.NumberFormat(LanguageFormat, {
    style: "currency",
    currency: curr,
  }).format(n);
```

```ts title="typescript"
toCurrency(123456.789, "EUR"); // €123,456.79  | currency: Euro | currencyLangFormat: Local
toCurrency(123456.789, "USD", "en-us"); // $123,456.79  | currency: US Dollar | currencyLangFormat: English (United States)
toCurrency(123456.789, "USD", "fa"); // ۱۲۳٬۴۵۶٫۷۹ ؜$ | currency: US Dollar | currencyLangFormat: Farsi
toCurrency(322342436423.2435, "JPY"); // ¥322,342,436,423 | currency: Japanese Yen | currencyLangFormat: Local
toCurrency(322342436423.2435, "JPY", "fi"); // 322 342 436 423 ¥ | currency: Japanese Yen | currencyLangFormat: Finnish
```
