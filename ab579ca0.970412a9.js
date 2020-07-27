(window.webpackJsonp=window.webpackJsonp||[]).push([[280],{417:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return f}));var n=r(2),a=r(9),c=(r(0),r(546)),o={title:"symmetricDifferenceBy",tags:"array,function,intermediate"},i={id:"symmetricDifferenceBy",isDocsHomePage:!1,title:"symmetricDifferenceBy",description:"JS",source:"@site/docs/symmetricDifferenceBy.md",permalink:"/30-seconds-of-typescript/docs/symmetricDifferenceBy",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/symmetricDifferenceBy.md",sidebar:"someSidebar",previous:{title:"symmetricDifference",permalink:"/30-seconds-of-typescript/docs/symmetricDifference"},next:{title:"symmetricDifferenceWith",permalink:"/30-seconds-of-typescript/docs/symmetricDifferenceWith"}},s=[],p={rightToc:s};function f(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"})),"\n",Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge///TODO-blue.svg?style=flat-square",alt:"TODO"}))),Object(c.b)("p",null,"Returns the symmetric difference between two arrays, after applying the provided function to each array element of both."),Object(c.b)("p",null,"Create a ",Object(c.b)("inlineCode",{parentName:"p"},"Set")," by applying ",Object(c.b)("inlineCode",{parentName:"p"},"fn")," to each array's elements, then use ",Object(c.b)("inlineCode",{parentName:"p"},"Array.prototype.filter()")," on each of them to only keep values not contained in the other."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const symmetricDifferenceBy = (a, b, fn) => {\n  const sA = new Set(a.map((v) => fn(v))),\n    sB = new Set(b.map((v) => fn(v)));\n  return [\n    ...a.filter((x) => !sB.has(fn(x))),\n    ...b.filter((x) => !sA.has(fn(x))),\n  ];\n};\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"symmetricDifferenceBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [ 1.2, 3.4 ]\n")))}f.isMDXComponent=!0},546:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return y}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),f=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=f(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=f(r),u=n,y=l["".concat(o,".").concat(u)]||l[u]||m[u]||c;return r?a.a.createElement(y,i(i({ref:t},p),{},{components:r})):a.a.createElement(y,i({ref:t},p))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<c;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);