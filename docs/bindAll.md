---
title: bindAll
tags: object,function,intermediate
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Binds methods of an object to the object itself, overwriting the existing method.

Use `Array.prototype.forEach()` to return a `function` that uses `Function.prototype.apply()` to apply the given context (`obj`) to `fn` for each function specified.

```ts
export const bindAll = (obj: any, ...fns: string[]) =>
  fns.forEach((key: string) => {
    if (typeof obj[key] === "function") {
      const f = obj[key];
      obj[key] = function (...args: any[]) {
        return f.apply(obj, args);
      };
    }
  });
```

```ts
class User {
  #name = "Test";
  getName() {
    return this.#name;
  }
}
const user = new User();
bindAll(user, "getName");

const getName = user.getName;
assertEquals(getName(), "Test");

// JS
var view = {
  label: "docs",
  click: function () {
    console.log("clicked " + this.label);
  },
};
bindAll(view, "click");
jQuery(element).on("click", view.click); // Logs 'clicked docs' when clicked.
```

_React:_

```ts
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    bindAll(this, "handleClick", "handleMove");
  }

  handleClick() {
    // code
  }
  handleMove() {
    // code
  }
  render() {
    // code
  }
}
```
