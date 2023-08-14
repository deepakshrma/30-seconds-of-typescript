"use strict";(self.webpackChunk_deepakvishwakarma_ts_util=self.webpackChunk_deepakvishwakarma_ts_util||[]).push([[8896],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},41995:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),s=["components"],o={title:"mask",tags:["string","intermediate"],author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "mask" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},p=void 0,c={unversionedId:"mask",id:"mask",title:"mask",description:'Implementation of "mask" in typescript, javascript and deno.',source:"@site/docs/mask.md",sourceDirName:".",slug:"/mask",permalink:"/30-seconds-of-typescript/docs/mask",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/mask.md",tags:[{label:"string",permalink:"/30-seconds-of-typescript/docs/tags/string"},{label:"intermediate",permalink:"/30-seconds-of-typescript/docs/tags/intermediate"}],version:"current",frontMatter:{title:"mask",tags:["string","intermediate"],author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "mask" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},sidebar:"someSidebar",previous:{title:"mapValues",permalink:"/30-seconds-of-typescript/docs/mapValues"},next:{title:"matches",permalink:"/30-seconds-of-typescript/docs/matches"}},l={},m=[],u={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square",alt:"TS"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-deno-green.svg?style=flat-square",alt:"Deno"})),(0,i.kt)("p",null,"Replaces all but the last ",(0,i.kt)("inlineCode",{parentName:"p"},"num")," of characters with the specified mask character."),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"String.prototype.slice()")," to grab the portion of the characters that will remain unmasked and use ",(0,i.kt)("inlineCode",{parentName:"p"},"String.padStart()")," to fill the beginning of the string with the mask character up to the original length.\nOmit the second argument, ",(0,i.kt)("inlineCode",{parentName:"p"},"num"),", to keep a default of ",(0,i.kt)("inlineCode",{parentName:"p"},"4")," characters unmasked. If ",(0,i.kt)("inlineCode",{parentName:"p"},"num")," is negative, the unmasked characters will be at the start of the string.\nOmit the third argument, ",(0,i.kt)("inlineCode",{parentName:"p"},"mask"),", to use a default character of ",(0,i.kt)("inlineCode",{parentName:"p"},"'*'")," for the mask."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="typescript"',title:'"typescript"'},'const mask = (cc: number | string, num = 4, mask = "*") =>\n  String(cc).slice(-num).padStart(String(cc).length, mask);\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="typescript"',title:'"typescript"'},"mask(1234567890); // '******7890'\nmask(1234567890, 3); // '*******890'\nmask(1234567890, -4, \"$\"); // '$$$$567890'\n")))}d.isMDXComponent=!0}}]);