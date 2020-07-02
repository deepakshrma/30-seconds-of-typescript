---
title: formToObject
tags: browser,object,intermediate
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)

Encode a set of form elements as an `object`.

Use the `FormData` constructor to convert the HTML `form` to `FormData`, `Array.from()` to convert to an array.
Collect the object from the array, using `Array.prototype.reduce()`.

```ts
interface IFormData {
  new (form: any): FormData;
}

const formToObject = (form: any) => {
  const F = FormData as IFormData;
  Array.from(new F(form)).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: value,
    }),
    {}
  );
};
```

```html
<form id="form" name="form">
  <div>
    <label for="username">Enter name:</label>
    <input type="text" id="username" name="username" />
  </div>
  <div>
    <label for="email">Enter email:</label>
    <input type="text" id="email" name="email" />
  </div>
  <input type="submit" value="Submit!" />
</form>
```

```ts
formToObject(document.querySelector("#form")); // { email: 'test@email.com', username: 'Test Name' }
```
