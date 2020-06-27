(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{208:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(2),a=(n(0),n(502));const o={title:"haveSameContents",tags:"array,intermediate"},c={id:"haveSameContents",isDocsHomePage:!1,title:"haveSameContents",description:"Returns true if two arrays contain the same elements regardless of order, false otherwise.",source:"@site/docs/haveSameContents.md",permalink:"/30-seconds-of-typescript/docs/haveSameContents",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/haveSameContents.md"},i=[],s={rightToc:i};function p({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Returns ",Object(a.b)("inlineCode",{parentName:"p"},"true")," if two arrays contain the same elements regardless of order, ",Object(a.b)("inlineCode",{parentName:"p"},"false")," otherwise."),Object(a.b)("p",null,"Use a ",Object(a.b)("inlineCode",{parentName:"p"},"for...of")," loop over a ",Object(a.b)("inlineCode",{parentName:"p"},"Set")," created from the values of both arrays.\nUse ",Object(a.b)("inlineCode",{parentName:"p"},"Array.prototype.filter()")," to compare the amount of occurrences of each distinct value in both arrays.\nReturn ",Object(a.b)("inlineCode",{parentName:"p"},"false")," if the counts do not match for any element, ",Object(a.b)("inlineCode",{parentName:"p"},"true")," otherwise."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const haveSameContents = (a, b) => {\n  for (const v of new Set([...a, ...b]))\n    if (a.filter(e => e === v).length !== b.filter(e => e === v).length) return false;\n  return true;\n};\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"haveSameContents([1, 2, 4], [2, 4, 1]); // true\n")))}p.isMDXComponent=!0},502:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,b=u["".concat(c,".").concat(m)]||u[m]||f[m]||o;return n?a.a.createElement(b,i(i({ref:t},p),{},{components:n})):a.a.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);