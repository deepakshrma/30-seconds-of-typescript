(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{127:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return p}));var n=r(2),a=(r(0),r(501));const o={title:"without",tags:"array,beginner"},c={id:"without",isDocsHomePage:!1,title:"without",description:"Filters out the elements of an array, that have one of the specified values.",source:"@site/docs/without.md",permalink:"/30-seconds-of-typescript/docs/without",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/without.md"},i=[],u={rightToc:i};function p({components:e,...t}){return Object(a.b)("wrapper",Object(n.a)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Filters out the elements of an array, that have one of the specified values."),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"Array.prototype.filter()")," to create an array excluding(using ",Object(a.b)("inlineCode",{parentName:"p"},"!Array.includes()"),") all given values."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const without = (arr, ...args) => arr.filter(v => !args.includes(v));\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"without([2, 1, 2, 3], 1, 2); // [3]\n")))}p.isMDXComponent=!0},501:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=l(r),b=n,d=s["".concat(c,".").concat(b)]||s[b]||f[b]||o;return r?a.a.createElement(d,i(i({ref:t},p),{},{components:r})):a.a.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=b;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);