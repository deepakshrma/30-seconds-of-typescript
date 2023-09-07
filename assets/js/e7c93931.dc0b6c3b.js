"use strict";(self.webpackChunk_deepakvishwakarma_ts_util=self.webpackChunk_deepakvishwakarma_ts_util||[]).push([[154],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return y}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=c(n),y=o,d=m["".concat(p,".").concat(y)]||m[y]||u[y]||a;return n?r.createElement(d,s(s({ref:t},l),{},{components:n})):r.createElement(d,s({ref:t},l))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68744:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return y},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),s=["components"],i={title:"sortBy",tags:["string","beginner"],author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "sortBy" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},p=void 0,c={unversionedId:"sortBy",id:"sortBy",title:"sortBy",description:'Implementation of "sortBy" in typescript, javascript and deno.',source:"@site/docs/sortBy.md",sourceDirName:".",slug:"/sortBy",permalink:"/30-seconds-of-typescript/docs/sortBy",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/sortBy.md",tags:[{label:"string",permalink:"/30-seconds-of-typescript/docs/tags/string"},{label:"beginner",permalink:"/30-seconds-of-typescript/docs/tags/beginner"}],version:"current",frontMatter:{title:"sortBy",tags:["string","beginner"],author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "sortBy" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},sidebar:"someSidebar",previous:{title:"smoothScroll",permalink:"/30-seconds-of-typescript/docs/smoothScroll"},next:{title:"sortByKey",permalink:"/30-seconds-of-typescript/docs/sortByKey"}},l={},u=[],m={toc:u};function y(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square",alt:"TS"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-deno-green.svg?style=flat-square",alt:"Deno"})),(0,a.kt)("p",null,"Sort by based on the key or function."),(0,a.kt)("p",null,"Use the spread operator (",(0,a.kt)("inlineCode",{parentName:"p"},"..."),"), ",(0,a.kt)("inlineCode",{parentName:"p"},"Array.prototype.sort()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"String.localeCompare()")," to sort array of data. If ",(0,a.kt)("inlineCode",{parentName:"p"},"$fn"),", not given it will sort by string compare."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="typescript"',title:'"typescript"'},"type SortByFunc<T> = (s1: T, s2: T) => number;\nenum SortByOrder {\n  ASC = 1,\n  DESC = -1,\n}\nconst sortBy = <T = any>(\n  arr: T[],\n  $fn: SortByFunc<T> = (s1: any, s2: any) =>\n    order * String(s1).localeCompare(String(s2)),\n  order: SortByOrder = SortByOrder.ASC\n) => {\n  let fn = $fn;\n  return [...arr].sort(fn);\n};\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="typescript"',title:'"typescript"'},'sortBy([1, 2, 4, 3, 4, -1]); // [-1, 1, 2, 3, 4, 4]\nsortBy(["Test", "test"]); // ["Test", "test"]\n\n// Descending\nsortBy([1, 2, 4, 3, 4, -1], undefined, -1); // [4, 4, 3, 2, 1, -1]\n\nsortBy([{ name: "02" }, { name: "01" }], (s1: any, s2: any) =>\n  s1.name.localeCompare(s2.name)\n); //[{ name: "01" }, { name: "02" }]\n// Descending\nsortBy(\n  [{ name: "02" }, { name: "01" }],\n  (s1: any, s2: any) => -1 * s1.name.localeCompare(s2.name)\n); //[{ name: "02" }, { name: "01" }]\n')))}y.isMDXComponent=!0}}]);