---
title: formatDate
tags: function,intermediate,date
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Format date based on format staring, using regex match

```ts
const padLeft = (str: string | number, num: number = 2, fill = "0") =>
  String(str).padStart(num, fill);

const formatDate = (formatStr: string, date: Date | string) => {
  const d = new Date(date);
  const time: any = {
    YY: padLeft(d.getFullYear()).substr(2, 4),
    YYYY: padLeft(d.getFullYear()),
    MM: padLeft(d.getMonth() + 1),
    DD: padLeft(d.getDate()),
    hh: padLeft(d.getHours()),
    mm: padLeft(d.getMinutes()),
    ss: padLeft(d.getSeconds()),
    M: padLeft(d.getMilliseconds(), 3),
  };
  return formatStr.replace(
    new RegExp(`${Object.keys(time).join("|")}`, "g"),
    (subStr: string) => {
      return time[subStr] || "";
    }
  );
};
```

```ts
const date = new Date(2020, 7, 22, 22, 22, 22, 222);
formatDate("YYYY-DD-MM hh:mm:ss M", date); //"2020-22-08 22:22:22 222"

const date2 = new Date(2020, 7, 9, 9, 9, 9, 99);
formatDate("YYYY-DD-MM hh:mm:ss M", date2); // "2020-09-08 09:09:09 099"
```
