---
title: 30-seconds-of-typescript [30秒的标题]
slug: /
tags: [introduction, beginner]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "30-seconds-of-typescript" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)
![ECMAScript](https://img.shields.io/badge/supports-ECMAScript-yellow.svg?style=flat-square)
![GitHub](https://img.shields.io/github/license/deepakshrma/30-seconds-of-typescript)

该存储库是众多实用程序功能的集合，可以轻松地导入和使用任何地方，类似于 Lodash。
所有文件都可以在[30-seconds-of-typescript](https://deepakshrma.github.io/30-seconds-of-typescript/docs/)

**Note:**
该存储库的灵感来自 [30-seconds-of-code](https://github.com/30-seconds/30-seconds-of-code). 所有 JavaScript 代码已转换为打字稿，因此可以用于现代 HTML | JS，Typescript 和 Deno[Github](https://github.com/deepakshrma/30-seconds-of-typescript/).

**_我正在重构代码和修复错误以及转换._**

## 安装 node.js/npm

```bash
npm i @deepakvishwakarma/ts-util
```

### 如何使用 [Typescript]

```ts title="typescript"
import { mask } from "@deepakvishwakarma/ts-util";

console.log(mask(1234567890)); // '******7890'
console.log(mask(1234567890, 3)); // '*******890'
console.log(mask(1234567890, -4, "$")); // '$$$$567890'
```

### 如何使用 [JS]

```ts title="typescript"
const { mask } = require("@deepakvishwakarma/ts-util");

console.log(mask(1234567890)); // '******7890'
console.log(mask(1234567890, 3)); // '*******890'
console.log(mask(1234567890, -4, "$")); // '$$$$567890'
```

## 安装 Snippet Extension

You can find the working plugin on `marketplace.visualstudio.com`. You can either search for `30-seconds-of-typescript` Or Install from here [imdeepak.30-seconds-of-typescript](https://marketplace.visualstudio.com/items?itemName=imdeepak.30-seconds-of-typescript)

### 搜索片段- Sample[typescript & typescriptreact]

```bash
30_delay
```

![assets/snippets.gif](https://github.com/deepakshrma/30-seconds-of-typescript/raw/master/assets/snippets.gif)

该存储库具有一个实用文件，可以将其导入 DeNo 和 Modern Ecmascript。

## 如何使用 [Deno]

```ts title="typescript"
import { all } from "https://denopkg.com/deepakshrma/30-seconds-of-typescript/util.ts";
all([{ name: "D" }, { name: "D2" }], hasName); //true
```

## 如何使用 使用 Github CDN [Modern HTML|JS]

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

### 贡献

- Docs: [/docs](https://github.com/deepakshrma/30-seconds-of-typescript/docs)
- Util: [/util.ts](https://github.com/deepakshrma/30-seconds-of-typescript/blob/master/util.ts)

#### 创建新的实用程序功能

`export here` [util.ts](https://github.com/deepakshrma/30-seconds-of-typescript/blob/master/util.ts)

**如何捆绑:** 它将是自动使用的 husky githook

### 如何使用 Deno

```bash
deno test util.test.ts
```

#### 命令 | Scripts

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
