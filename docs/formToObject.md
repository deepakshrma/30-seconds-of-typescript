---
title: formToObject
tags: browser,object,intermediate
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "formToObject" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)

Encode a set of form elements as an `object`.

Use the `FormData` constructor to convert the HTML `form` to `FormData`, `Array.from()` to convert to an array.
Collect the object from the array, using `Array.prototype.reduce()`.

```ts title="typescript"
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

```ts title="typescript"
formToObject(document.querySelector("#form")); // { email: 'test@email.com', username: 'Test Name' }
```
