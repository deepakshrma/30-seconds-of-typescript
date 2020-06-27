(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{304:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return f}));var r=n(2),a=(n(0),n(501));const o={title:"difference",tags:"array,math,beginner"},c={id:"difference",isDocsHomePage:!1,title:"difference",description:"Returns the difference between two arrays.",source:"@site/docs/difference.md",permalink:"/30-seconds-of-typescript/docs/difference",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/difference.md"},i=[],p={rightToc:i};function f({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Returns the difference between two arrays."),Object(a.b)("p",null,"Create a ",Object(a.b)("inlineCode",{parentName:"p"},"Set")," from ",Object(a.b)("inlineCode",{parentName:"p"},"b"),", then use ",Object(a.b)("inlineCode",{parentName:"p"},"Array.prototype.filter()")," on ",Object(a.b)("inlineCode",{parentName:"p"},"a")," to only keep values not contained in ",Object(a.b)("inlineCode",{parentName:"p"},"b"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const difference = (a, b) => {\n  const s = new Set(b);\n  return a.filter(x => !s.has(x));\n};\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"difference([1, 2, 3], [1, 2, 4]); // [3]\n")))}f.isMDXComponent=!0},501:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var f=a.a.createContext({}),u=function(e){var t=a.a.useContext(f),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return a.a.createElement(f.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,f=p(e,["components","mdxType","originalType","parentName"]),l=u(n),b=r,d=l["".concat(c,".").concat(b)]||l[b]||s[b]||o;return n?a.a.createElement(d,i(i({ref:t},f),{},{components:n})):a.a.createElement(d,i({ref:t},f))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var f=2;f<o;f++)c[f]=n[f];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);