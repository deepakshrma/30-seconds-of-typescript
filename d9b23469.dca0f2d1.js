(window.webpackJsonp=window.webpackJsonp||[]).push([[353],{452:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return p})),t.d(r,"default",(function(){return u}));var n=t(2),a=(t(0),t(501));const o={title:"unzip",tags:"array,intermediate"},c={id:"unzip",isDocsHomePage:!1,title:"unzip",description:"Creates an array of arrays, ungrouping the elements in an array produced by zip.",source:"@site/docs/unzip.md",permalink:"/30-seconds-of-typescript/docs/unzip",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/unzip.md"},p=[],i={rightToc:p};function u({components:e,...r}){return Object(a.b)("wrapper",Object(n.a)({},i,r,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Creates an array of arrays, ungrouping the elements in an array produced by ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/js/s/zip"}),"zip"),"."),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"Math.max.apply()")," to get the longest subarray in the array, ",Object(a.b)("inlineCode",{parentName:"p"},"Array.prototype.map()")," to make each element an array.\nUse ",Object(a.b)("inlineCode",{parentName:"p"},"Array.prototype.reduce()")," and ",Object(a.b)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," to map grouped values to individual arrays."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const unzip = arr =>\n  arr.reduce(\n    (acc, val) => (val.forEach((v, i) => acc[i].push(v)), acc),\n    Array.from({\n      length: Math.max(...arr.map(x => x.length))\n    }).map(x => [])\n  );\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"unzip([['a', 1, true], ['b', 2, false]]); // [['a', 'b'], [1, 2], [true, false]]\nunzip([['a', 1, true], ['b', 2]]); // [['a', 'b'], [1, 2], [true]]\n")))}u.isMDXComponent=!0},501:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return m}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),l=function(e){var r=a.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},s=function(e){var r=l(e.components);return a.a.createElement(u.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},f=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=l(t),f=n,m=s["".concat(c,".").concat(f)]||s[f]||b[f]||o;return t?a.a.createElement(m,p(p({ref:r},u),{},{components:t})):a.a.createElement(m,p({ref:r},u))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=f;var p={};for(var i in r)hasOwnProperty.call(r,i)&&(p[i]=r[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var u=2;u<o;u++)c[u]=t[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);