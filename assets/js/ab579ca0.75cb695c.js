"use strict";(self.webpackChunk_deepakvishwakarma_ts_util=self.webpackChunk_deepakvishwakarma_ts_util||[]).push([[1336],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return u}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),l=p(r),u=a,y=l["".concat(s,".").concat(u)]||l[u]||f[u]||i;return r?n.createElement(y,o(o({ref:t},m),{},{components:r})):n.createElement(y,o({ref:t},m))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=l;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},40714:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return f}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],c={title:"symmetricDifferenceBy",tags:["array","function","intermediate"],author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "symmetricDifferenceBy" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},s=void 0,p={unversionedId:"symmetricDifferenceBy",id:"symmetricDifferenceBy",title:"symmetricDifferenceBy",description:'Implementation of "symmetricDifferenceBy" in typescript, javascript and deno.',source:"@site/docs/symmetricDifferenceBy.md",sourceDirName:".",slug:"/symmetricDifferenceBy",permalink:"/30-seconds-of-typescript/docs/symmetricDifferenceBy",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/symmetricDifferenceBy.md",tags:[{label:"array",permalink:"/30-seconds-of-typescript/docs/tags/array"},{label:"function",permalink:"/30-seconds-of-typescript/docs/tags/function"},{label:"intermediate",permalink:"/30-seconds-of-typescript/docs/tags/intermediate"}],version:"current",frontMatter:{title:"symmetricDifferenceBy",tags:["array","function","intermediate"],author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "symmetricDifferenceBy" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},sidebar:"someSidebar",previous:{title:"symmetricDifference",permalink:"/30-seconds-of-typescript/docs/symmetricDifference"},next:{title:"symmetricDifferenceWith",permalink:"/30-seconds-of-typescript/docs/symmetricDifferenceWith"}},m={},f=[],l={toc:f};function u(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/badge///TODO-blue.svg?style=flat-square",alt:"TODO"})),(0,i.kt)("p",null,"Returns the symmetric difference between two arrays, after applying the provided function to each array element of both."),(0,i.kt)("p",null,"Create a ",(0,i.kt)("inlineCode",{parentName:"p"},"Set")," by applying ",(0,i.kt)("inlineCode",{parentName:"p"},"fn")," to each array's elements, then use ",(0,i.kt)("inlineCode",{parentName:"p"},"Array.prototype.filter()")," on each of them to only keep values not contained in the other."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const symmetricDifferenceBy = (a, b, fn) => {\n  const sA = new Set(a.map((v) => fn(v))),\n    sB = new Set(b.map((v) => fn(v)));\n  return [\n    ...a.filter((x) => !sB.has(fn(x))),\n    ...b.filter((x) => !sA.has(fn(x))),\n  ];\n};\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"symmetricDifferenceBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [ 1.2, 3.4 ]\n")))}u.isMDXComponent=!0}}]);