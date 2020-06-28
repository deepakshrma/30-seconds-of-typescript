---
title: pullAtValue
tags: array,advanced
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

Mutates the original array to filter out the values specified. Returns the removed elements.

Use `Array.prototype.filter()` and `Array.prototype.includes()` to pull out the values that are not needed.
Use `Array.prototype.length = 0` to mutate the passed in an array by resetting it's length to zero and `Array.prototype.push()` to re-populate it with only the pulled values.
Use `Array.prototype.push()` to keep track of pulled values

```js
const pullAtValue = (arr, pullArr) => {
  let removed = [],
    pushToRemove = arr.forEach((v, i) =>
      pullArr.includes(v) ? removed.push(v) : v
    ),
    mutateTo = arr.filter((v, i) => !pullArr.includes(v));
  arr.length = 0;
  mutateTo.forEach((v) => arr.push(v));
  return removed;
};
```

```js
let myArray = ["a", "b", "c", "d"];
let pulled = pullAtValue(myArray, ["b", "d"]); // myArray = [ 'a', 'c' ] , pulled = [ 'b', 'd' ]
```
