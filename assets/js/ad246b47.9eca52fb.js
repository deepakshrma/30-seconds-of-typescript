"use strict";(self.webpackChunk_deepakvishwakarma_ts_util=self.webpackChunk_deepakvishwakarma_ts_util||[]).push([[7712],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},69073:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],c={title:"checkProp",tags:["function","object","beginner"],author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "checkProp" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},s=void 0,p={unversionedId:"checkProp",id:"checkProp",title:"checkProp",description:'Implementation of "checkProp" in typescript, javascript and deno.',source:"@site/docs/checkProp.md",sourceDirName:".",slug:"/checkProp",permalink:"/30-seconds-of-typescript/docs/checkProp",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/checkProp.md",tags:[{label:"function",permalink:"/30-seconds-of-typescript/docs/tags/function"},{label:"object",permalink:"/30-seconds-of-typescript/docs/tags/object"},{label:"beginner",permalink:"/30-seconds-of-typescript/docs/tags/beginner"}],version:"current",frontMatter:{title:"checkProp",tags:["function","object","beginner"],author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "checkProp" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},sidebar:"someSidebar",previous:{title:"chainAsync",permalink:"/30-seconds-of-typescript/docs/chainAsync"},next:{title:"chunk",permalink:"/30-seconds-of-typescript/docs/chunk"}},l={},u=[],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"})),(0,a.kt)("p",null,"Given a ",(0,a.kt)("inlineCode",{parentName:"p"},"predicate")," function and a ",(0,a.kt)("inlineCode",{parentName:"p"},"prop")," string, this curried function will then take an ",(0,a.kt)("inlineCode",{parentName:"p"},"object")," to inspect by calling the property and passing it to the predicate."),(0,a.kt)("p",null,"Summon ",(0,a.kt)("inlineCode",{parentName:"p"},"prop")," on ",(0,a.kt)("inlineCode",{parentName:"p"},"obj"),", pass it to a provided ",(0,a.kt)("inlineCode",{parentName:"p"},"predicate")," function and return a masked boolean."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const checkProp = (predicate, prop) => (obj) => !!predicate(obj[prop]);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const lengthIs4 = checkProp((l) => l === 4, "length");\nlengthIs4([]); // false\nlengthIs4([1, 2, 3, 4]); // true\nlengthIs4(new Set([1, 2, 3, 4])); // false (Set uses Size, not length)\n\nconst session = { user: {} };\nconst validUserSession = checkProp((u) => u.active && !u.disabled, "user");\n\nvalidUserSession(session); // false\n\nsession.user.active = true;\nvalidUserSession(session); // true\n\nconst noLength = checkProp((l) => l === undefined, "length");\nnoLength([]); // false\nnoLength({}); // true\nnoLength(new Set()); // true\n')))}m.isMDXComponent=!0}}]);