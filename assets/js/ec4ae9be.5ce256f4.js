"use strict";(self.webpackChunk_deepakvishwakarma_ts_util=self.webpackChunk_deepakvishwakarma_ts_util||[]).push([[7290],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=c(r),d=a,m=f["".concat(p,".").concat(d)]||f[d]||u[d]||i;return r?n.createElement(m,o(o({ref:t},l),{},{components:r})):n.createElement(m,o({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},85436:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],s={title:"isAfterDate",tags:["date","beginner"],author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "isAfterDate" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},p=void 0,c={unversionedId:"isAfterDate",id:"isAfterDate",title:"isAfterDate",description:'Implementation of "isAfterDate" in typescript, javascript and deno.',source:"@site/docs/isAfterDate.md",sourceDirName:".",slug:"/isAfterDate",permalink:"/30-seconds-of-typescript/docs/isAfterDate",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/isAfterDate.md",tags:[{label:"date",permalink:"/30-seconds-of-typescript/docs/tags/date"},{label:"beginner",permalink:"/30-seconds-of-typescript/docs/tags/beginner"}],version:"current",frontMatter:{title:"isAfterDate",tags:["date","beginner"],author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "isAfterDate" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},sidebar:"someSidebar",previous:{title:"isAbsoluteURL",permalink:"/30-seconds-of-typescript/docs/isAbsoluteURL"},next:{title:"isArrayLike",permalink:"/30-seconds-of-typescript/docs/isArrayLike"}},l={},u=[],f={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square",alt:"TS"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-deno-green.svg?style=flat-square",alt:"Deno"})),(0,i.kt)("p",null,"Check if a date is after another date."),(0,i.kt)("p",null,"Use the greater than operator (",(0,i.kt)("inlineCode",{parentName:"p"},">"),") to check if the first date comes after the second one."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="typescript"',title:'"typescript"'},"const isAfterDate = (dateA: Date, dateB: Date) => dateA > dateB;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="typescript"',title:'"typescript"'},"isAfterDate(new Date(2010, 10, 21), new Date(2010, 10, 20)); // true\n")))}d.isMDXComponent=!0}}]);