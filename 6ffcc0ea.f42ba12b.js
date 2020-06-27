(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{273:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(2),a=(r(0),r(501));const c={title:"curry",tags:"function,recursion,intermediate"},o={id:"curry",isDocsHomePage:!1,title:"curry",description:"JS",source:"@site/docs/curry.md",permalink:"/30-seconds-of-typescript/docs/curry",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/curry.md",sidebar:"someSidebar",previous:{title:"currentURL",permalink:"/30-seconds-of-typescript/docs/currentURL"},next:{title:"createDirIfNotExists",permalink:"/30-seconds-of-typescript/docs/createDirIfNotExists"}},i=[],s={rightToc:i};function u({components:e,...t}){return Object(a.b)("wrapper",Object(n.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"}))),Object(a.b)("p",null,"Curries a function."),Object(a.b)("p",null,"Use recursion.\nIf the number of provided arguments (",Object(a.b)("inlineCode",{parentName:"p"},"args"),") is sufficient, call the passed function ",Object(a.b)("inlineCode",{parentName:"p"},"fn"),".\nOtherwise, return a curried function ",Object(a.b)("inlineCode",{parentName:"p"},"fn")," that expects the rest of the arguments.\nIf you want to curry a function that accepts a variable number of arguments (a variadic function, e.g. ",Object(a.b)("inlineCode",{parentName:"p"},"Math.min()"),"), you can optionally pass the number of arguments to the second parameter ",Object(a.b)("inlineCode",{parentName:"p"},"arity"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const curry = (fn, arity = fn.length, ...args) =>\n  arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"curry(Math.pow)(2)(10); // 1024\ncurry(Math.min, 3)(10)(50)(2); // 2\n")))}u.isMDXComponent=!0},501:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(r),b=n,m=l["".concat(o,".").concat(b)]||l[b]||f[b]||c;return r?a.a.createElement(m,i(i({ref:t},u),{},{components:r})):a.a.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<c;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);