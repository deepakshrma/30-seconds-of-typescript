"use strict";(self.webpackChunk_deepakvishwakarma_ts_util=self.webpackChunk_deepakvishwakarma_ts_util||[]).push([[8727],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return f}});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=c(o),f=n,g=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return o?r.createElement(g,s(s({ref:t},p),{},{components:o})):r.createElement(g,s({ref:t},p))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,s=new Array(i);s[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:n,s[1]=a;for(var c=2;c<i;c++)s[c]=o[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},76990:function(e,t,o){o.r(t),o.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return u}});var r=o(87462),n=o(63366),i=(o(67294),o(3905)),s=["components"],a={title:"colorize",tags:["node","string","intermediate"],author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "colorize" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},l=void 0,c={unversionedId:"colorize",id:"colorize",title:"colorize",description:'Implementation of "colorize" in typescript, javascript and deno.',source:"@site/docs/colorize.md",sourceDirName:".",slug:"/colorize",permalink:"/30-seconds-of-typescript/docs/colorize",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/colorize.md",tags:[{label:"node",permalink:"/30-seconds-of-typescript/docs/tags/node"},{label:"string",permalink:"/30-seconds-of-typescript/docs/tags/string"},{label:"intermediate",permalink:"/30-seconds-of-typescript/docs/tags/intermediate"}],version:"current",frontMatter:{title:"colorize",tags:["node","string","intermediate"],author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "colorize" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},sidebar:"someSidebar",previous:{title:"collectInto",permalink:"/30-seconds-of-typescript/docs/collectInto"},next:{title:"compact",permalink:"/30-seconds-of-typescript/docs/compact"}},p={},u=[],d={toc:u};function f(e){var t=e.components,o=(0,n.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square",alt:"TS"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-nodejs-yellow.svg?style=flat-square",alt:"JS"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-deno-green.svg?style=flat-square",alt:"Deno"})),(0,i.kt)("p",null,"Add special characters to text to print in color in the console (combined with ",(0,i.kt)("inlineCode",{parentName:"p"},"console.log()"),")."),(0,i.kt)("p",null,"Use template literals and special characters to add the appropriate color code to the string output.\nFor background colors, add a special character that resets the background color at the end of the string."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="typescript"',title:'"typescript"'},'export const colorize = new (class {\n  color = (code: number, ended = false, ...messages: any[]) =>\n    `\\x1b[${code}m${messages.join(" ")}${ended ? "\\x1b[0m" : ""}`;\n  black = this.color.bind(null, 30, false);\n  red = this.color.bind(null, 31, false);\n  green = this.color.bind(null, 32, false);\n  yellow = this.color.bind(this, 33, false);\n  blue = this.color.bind(this, 34, false);\n  magenta = this.color.bind(this, 35, false);\n  cyan = this.color.bind(this, 36, false);\n  white = this.color.bind(this, 37, false);\n  bgBlack = this.color.bind(this, 40, true);\n  bgRed = this.color.bind(this, 41, true);\n  bgGreen = this.color.bind(this, 42, true);\n  bgYellow = this.color.bind(this, 43, true);\n  bgBlue = this.color.bind(this, 44, true);\n  bgMagenta = this.color.bind(this, 45, true);\n  bgCyan = this.color.bind(this, 46, true);\n  bgWhite = this.color.bind(this, 47, true);\n})();\n\nconst color = colorize;\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="typescript"',title:'"typescript"'},'console.log(color.red("foo")); // \'foo\' (red letters)\nconsole.log(color.bgBlue("foo", "bar")); // \'foo bar\' (blue background)\nconsole.log(color.bgWhite(color.yellow("foo"), color.green("foo"))); // \'foo bar\' (first\n//word in yellow letters, second word in green letters, white background for both)\n\nconsole.log(colorize.red("foo")); // \'foo\' (red letters)\nconsole.log(colorize.bgBlue("foo", "bar")); // \'foo bar\' (blue background)\nconsole.log(colorize.bgWhite(colorize.yellow("foo"), colorize.green("foo"))); // \'foo bar\' (first\n//word in yellow letters, second word in green letters, white background for both)\n')))}f.isMDXComponent=!0}}]);