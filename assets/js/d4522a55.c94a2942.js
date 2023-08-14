"use strict";(self.webpackChunk_deepakvishwakarma_ts_util=self.webpackChunk_deepakvishwakarma_ts_util||[]).push([[4876],{3905:function(t,e,n){n.d(e,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var p=r.createContext({}),c=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},l=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,p=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:e},l),{},{components:n})):r.createElement(f,i({ref:e},l))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=t,s.mdxType="string"==typeof t?t:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},38583:function(t,e,n){n.r(e),n.d(e,{assets:function(){return l},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={title:"not",tags:["math","logic","beginner"],author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "not" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},p=void 0,c={unversionedId:"not",id:"not",title:"not",description:'Implementation of "not" in typescript, javascript and deno.',source:"@site/docs/not.md",sourceDirName:".",slug:"/not",permalink:"/30-seconds-of-typescript/docs/not",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/not.md",tags:[{label:"math",permalink:"/30-seconds-of-typescript/docs/tags/math"},{label:"logic",permalink:"/30-seconds-of-typescript/docs/tags/logic"},{label:"beginner",permalink:"/30-seconds-of-typescript/docs/tags/beginner"}],version:"current",frontMatter:{title:"not",tags:["math","logic","beginner"],author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "not" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},sidebar:"someSidebar",previous:{title:"normalizeLineEndings",permalink:"/30-seconds-of-typescript/docs/normalizeLineEndings"},next:{title:"nthArg",permalink:"/30-seconds-of-typescript/docs/nthArg"}},l={},u=[],m={toc:u};function d(t){var e=t.components,n=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square",alt:"TS"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-deno-green.svg?style=flat-square",alt:"Deno"})),(0,a.kt)("p",null,"Returns the logical inverse of the given value."),(0,a.kt)("p",null,"Use the logical not (",(0,a.kt)("inlineCode",{parentName:"p"},"!"),") operator to return the inverse of the given value."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="typescript"',title:'"typescript"'},"const not = (a: any) => !a;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="typescript"',title:'"typescript"'},"not(true); // false\nnot(false); // true\n")))}d.isMDXComponent=!0}}]);