"use strict";(self.webpackChunk_deepakvishwakarma_ts_util=self.webpackChunk_deepakvishwakarma_ts_util||[]).push([[8633],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(t),d=i,g=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return t?r.createElement(g,o(o({ref:n},c),{},{components:t})):r.createElement(g,o({ref:n},c))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},92976:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),o=["components"],s={title:"normalizeLineEndings",tags:["array","intermediate"],author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "normalizeLineEndings" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},p=void 0,l={unversionedId:"normalizeLineEndings",id:"normalizeLineEndings",title:"normalizeLineEndings",description:'Implementation of "normalizeLineEndings" in typescript, javascript and deno.',source:"@site/docs/normalizeLineEndings.md",sourceDirName:".",slug:"/normalizeLineEndings",permalink:"/30-seconds-of-typescript/docs/normalizeLineEndings",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/normalizeLineEndings.md",tags:[{label:"array",permalink:"/30-seconds-of-typescript/docs/tags/array"},{label:"intermediate",permalink:"/30-seconds-of-typescript/docs/tags/intermediate"}],version:"current",frontMatter:{title:"normalizeLineEndings",tags:["array","intermediate"],author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "normalizeLineEndings" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},sidebar:"someSidebar",previous:{title:"none",permalink:"/30-seconds-of-typescript/docs/none"},next:{title:"not",permalink:"/30-seconds-of-typescript/docs/not"}},c={},u=[],m={toc:u};function d(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/badge///TODO-blue.svg?style=flat-square",alt:"TODO"})),(0,a.kt)("p",null,"Normalizes line endings in a string."),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"String.prototype.replace()")," and a regular expression to match and replace line endings with the ",(0,a.kt)("inlineCode",{parentName:"p"},"normalized")," version.\nOmit the seconds argument, ",(0,a.kt)("inlineCode",{parentName:"p"},"normalized"),", to use the default value of ",(0,a.kt)("inlineCode",{parentName:"p"},"'\\r\\n'"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const normalizeLineEndings = (str, normalized = "\\r\\n") =>\n  str.replace(/\\r?\\n/g, normalized);\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'splitLines("This\\r\\nis a\\nmultiline\\nstring.\\r\\n"); // \'This\\r\\nis a\\r\\nmultiline\\r\\nstring.\\r\\n\'\nsplitLines("This\\r\\nis a\\nmultiline\\nstring.\\r\\n", "\\n"); // \'This\\nis a\\nmultiline\\nstring.\\n\'\n')))}d.isMDXComponent=!0}}]);