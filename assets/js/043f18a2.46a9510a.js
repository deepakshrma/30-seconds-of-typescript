"use strict";(self.webpackChunk_deepakvishwakarma_ts_util=self.webpackChunk_deepakvishwakarma_ts_util||[]).push([[9229],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},64238:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={title:"includesAny",tags:["array","beginner"],author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "includesAny" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},c=void 0,p={unversionedId:"includesAny",id:"includesAny",title:"includesAny",description:'Implementation of "includesAny" in typescript, javascript and deno.',source:"@site/docs/includesAny.md",sourceDirName:".",slug:"/includesAny",permalink:"/30-seconds-of-typescript/docs/includesAny",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/includesAny.md",tags:[{label:"array",permalink:"/30-seconds-of-typescript/docs/tags/array"},{label:"beginner",permalink:"/30-seconds-of-typescript/docs/tags/beginner"}],version:"current",frontMatter:{title:"includesAny",tags:["array","beginner"],author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "includesAny" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},sidebar:"someSidebar",previous:{title:"includesAll",permalink:"/30-seconds-of-typescript/docs/includesAll"},next:{title:"indentString",permalink:"/30-seconds-of-typescript/docs/indentString"}},l={},u=[],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/badge///TODO-blue.svg?style=flat-square",alt:"TODO"})),(0,i.kt)("p",null,"Returns ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," if at least one element of values is included in arr , ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"Array.prototype.some()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Array.prototype.includes()")," to check if at least one element of ",(0,i.kt)("inlineCode",{parentName:"p"},"values")," is included in ",(0,i.kt)("inlineCode",{parentName:"p"},"arr"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const includesAny = (arr, values) => values.some((v) => arr.includes(v));\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"includesAny([1, 2, 3, 4], [2, 9]); // true\nincludesAny([1, 2, 3, 4], [8, 9]); // false\n")))}m.isMDXComponent=!0}}]);