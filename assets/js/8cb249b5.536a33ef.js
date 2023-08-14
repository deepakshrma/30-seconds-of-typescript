"use strict";(self.webpackChunk_deepakvishwakarma_ts_util=self.webpackChunk_deepakvishwakarma_ts_util||[]).push([[892],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(r),f=i,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(d,a(a({ref:t},l),{},{components:r})):n.createElement(d,a({ref:t},l))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},69076:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),a=["components"],s={title:"promisify",tags:["function","promise","intermediate"],author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "promisify" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},p=void 0,c={unversionedId:"promisify",id:"promisify",title:"promisify",description:'Implementation of "promisify" in typescript, javascript and deno.',source:"@site/docs/promisify.md",sourceDirName:".",slug:"/promisify",permalink:"/30-seconds-of-typescript/docs/promisify",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/promisify.md",tags:[{label:"function",permalink:"/30-seconds-of-typescript/docs/tags/function"},{label:"promise",permalink:"/30-seconds-of-typescript/docs/tags/promise"},{label:"intermediate",permalink:"/30-seconds-of-typescript/docs/tags/intermediate"}],version:"current",frontMatter:{title:"promisify",tags:["function","promise","intermediate"],author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "promisify" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},sidebar:"someSidebar",previous:{title:"primes",permalink:"/30-seconds-of-typescript/docs/primes"},next:{title:"pull",permalink:"/30-seconds-of-typescript/docs/pull"}},l={},u=[],m={toc:u};function f(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square",alt:"TS"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-deno-green.svg?style=flat-square",alt:"Deno"})),(0,o.kt)("p",null,"Converts an asynchronous function to return a promise."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"In Node 8+, you can use ",(0,o.kt)("a",{parentName:"em",href:"https://nodejs.org/api/util.html#util_util_promisify_original"},(0,o.kt)("inlineCode",{parentName:"a"},"util.promisify")))),(0,o.kt)("p",null,"Use currying to return a function returning a ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise")," that calls the original function.\nUse the ",(0,o.kt)("inlineCode",{parentName:"p"},"...rest")," operator to pass in all the parameters."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="typescript"',title:'"typescript"'},"const promisify =\n  (func: Function) =>\n  (...args: any[]) =>\n    new Promise((resolve, reject) =>\n      func(...args, (err: Error, result: any) =>\n        err ? reject(err) : resolve(result)\n      )\n    );\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="typescript"',title:'"typescript"'},'const delay = promisify((d, cb) => setTimeout(cb, d));\ndelay(2000).then(() => console.log("Hi!")); // // Promise resolves after 2s\n')))}f.isMDXComponent=!0}}]);