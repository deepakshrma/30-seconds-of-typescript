(window.webpackJsonp=window.webpackJsonp||[]).push([[234],{305:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),a=(r(0),r(479)),i={title:"serializeForm",tags:"browser,string,intermediate",author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "serializeForm" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},c={unversionedId:"serializeForm",id:"serializeForm",isDocsHomePage:!1,title:"serializeForm",description:'Implementation of "serializeForm" in typescript, javascript and deno.',source:"@site/docs/serializeForm.md",slug:"/serializeForm",permalink:"/30-seconds-of-typescript/docs/serializeForm",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/serializeForm.md",version:"current",sidebar:"someSidebar",previous:{title:"serializeCookie",permalink:"/30-seconds-of-typescript/docs/serializeCookie"},next:{title:"setStyle",permalink:"/30-seconds-of-typescript/docs/setStyle"}},s=[],p={toc:s};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"}),"\n",Object(a.b)("img",{parentName:"p",src:"https://img.shields.io/badge///TODO-blue.svg?style=flat-square",alt:"TODO"})),Object(a.b)("p",null,"Encode a set of form elements as a query string."),Object(a.b)("p",null,"Use the ",Object(a.b)("inlineCode",{parentName:"p"},"FormData")," constructor to convert the HTML ",Object(a.b)("inlineCode",{parentName:"p"},"form")," to ",Object(a.b)("inlineCode",{parentName:"p"},"FormData"),", ",Object(a.b)("inlineCode",{parentName:"p"},"Array.from()")," to convert to an array, passing a map function as the second argument.\nUse ",Object(a.b)("inlineCode",{parentName:"p"},"Array.prototype.map()")," and ",Object(a.b)("inlineCode",{parentName:"p"},"window.encodeURIComponent()")," to encode each field's value.\nUse ",Object(a.b)("inlineCode",{parentName:"p"},"Array.prototype.join()")," with appropriate arguments to produce an appropriate query string."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'const serializeForm = (form) =>\n  Array.from(new FormData(form), (field) =>\n    field.map(encodeURIComponent).join("=")\n  ).join("&");\n')),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'serializeForm(document.querySelector("#form")); // email=test%40email.com&name=Test%20Name\n')))}l.isMDXComponent=!0},479:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},m=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),d=n,b=m["".concat(i,".").concat(d)]||m[d]||u[d]||a;return r?o.a.createElement(b,c(c({ref:t},p),{},{components:r})):o.a.createElement(b,c({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);