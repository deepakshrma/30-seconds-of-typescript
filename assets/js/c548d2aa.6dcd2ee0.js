"use strict";(self.webpackChunk_deepakvishwakarma_ts_util=self.webpackChunk_deepakvishwakarma_ts_util||[]).push([[8687],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},445:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],p={title:"isReadableStream",tags:["node","type","intermediate"],author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "isReadableStream" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},s=void 0,l={unversionedId:"isReadableStream",id:"isReadableStream",title:"isReadableStream",description:'Implementation of "isReadableStream" in typescript, javascript and deno.',source:"@site/docs/isReadableStream.md",sourceDirName:".",slug:"/isReadableStream",permalink:"/30-seconds-of-typescript/docs/isReadableStream",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/isReadableStream.md",tags:[{label:"node",permalink:"/30-seconds-of-typescript/docs/tags/node"},{label:"type",permalink:"/30-seconds-of-typescript/docs/tags/type"},{label:"intermediate",permalink:"/30-seconds-of-typescript/docs/tags/intermediate"}],version:"current",frontMatter:{title:"isReadableStream",tags:["node","type","intermediate"],author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "isReadableStream" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"}},c={},u=[],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/badge///TODO-blue.svg?style=flat-square",alt:"TODO"})),(0,o.kt)("p",null,"Checks if the given argument is a readable stream."),(0,o.kt)("p",null,"Check if the value is different from ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),", use ",(0,o.kt)("inlineCode",{parentName:"p"},"typeof")," to check if the value is of type ",(0,o.kt)("inlineCode",{parentName:"p"},"object")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"pipe")," property is of type ",(0,o.kt)("inlineCode",{parentName:"p"},"function"),".\nAdditionally check if the ",(0,o.kt)("inlineCode",{parentName:"p"},"typeof")," the ",(0,o.kt)("inlineCode",{parentName:"p"},"_read")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"_readableState")," properties are ",(0,o.kt)("inlineCode",{parentName:"p"},"function")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"object")," respectively."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const isReadableStream = (val) =>\n  val !== null &&\n  typeof val === "object" &&\n  typeof val.pipe === "function" &&\n  typeof val._read === "function" &&\n  typeof val._readableState === "object";\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const fs = require("fs");\nisReadableStream(fs.createReadStream("test.txt")); // true\n')))}m.isMDXComponent=!0}}]);