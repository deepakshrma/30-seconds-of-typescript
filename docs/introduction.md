---
title: 30-seconds-of-typescript
tags: introduction, beginner
---

This repo is highly inspired by [30-seconds-of-code](https://github.com/30-seconds/30-seconds-of-code). I am converting all JS to Typescript so that it can be used for Typescript, Modern HTML|JS and Deno. [Github](https://github.com/deepakshrma/30-seconds-of-typescript/)

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![GitHub](https://img.shields.io/github/license/deepakshrma/30-seconds-of-typescript)

It has multiple utility function like `lodash` can be used and anywhere with simply importing.

:::note
I am refactoring code and fixing bug along with conversion.
:::

## How to use [Deno]

```ts
import { all } from "https://denopkg.com/deepakshrma/30-seconds-of-typescript/util.ts";
all([{ name: "D" }, { name: "D2" }], hasName); //true
```

## How to modern HTML|JS(Using Github CDN)

```html
<script type="module">
  // Use any Github CDN
  import * as util from "https://cdn.jsdelivr.net/gh/deepakshrma/30-seconds-of-typescript/util.js";
  const el = util.createElement(
    `<div class="container"><p>Hello! This is created using createElement!! </p></div>`
  );
  document.body.appendChild(el);
</script>
```

## Install VS Code Extension

Search for `30-seconds-of-typescript` Or Install here [https://marketplace.visualstudio.com/items?itemName=imdeepak.30-seconds-of-typescript](https://marketplace.visualstudio.com/items?itemName=imdeepak.30-seconds-of-typescript)

### Search for snippet- Sample

```bash
30_delay
```

![assets/snippets.gif](https://github.com/deepakshrma/30-seconds-of-typescript/raw/master/assets/snippets.gif)

## How to test using Deno

```bash
deno test util.test.ts
```

### Contribution

- Docs: [/docs](/docs)
- Util: [/util.ts](/util.ts)

#### Create New utility function

`export here` [util.ts](https://github.com/deepakshrma/30-seconds-of-typescript/blob/master/util.ts)

:::note **How to bundle**
**It will be auto using husky githook**
:::

#### Commands

**1. Generate Snippets:**

```bash
npm run code-gen
```

**2. Generate Extension:**

```bash
npm run extension
```

**3. Install Extension Locally:**

```bash
code --install-extension *.vsix
```

This website is build using docusaurus.
