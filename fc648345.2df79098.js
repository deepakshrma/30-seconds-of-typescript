(window.webpackJsonp=window.webpackJsonp||[]).push([[397],{496:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),o=(n(0),n(503)),c={title:"differenceBy",tags:"array,function,intermediate"},i={id:"differenceBy",isDocsHomePage:!1,title:"differenceBy",description:"Returns the difference between two arrays, after applying the provided function to each array element of both.",source:"@site/docs/differenceBy.md",permalink:"/30-seconds-of-typescript/docs/differenceBy",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/differenceBy.md"},p=[],f={rightToc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},f,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Returns the difference between two arrays, after applying the provided function to each array element of both."),Object(o.b)("p",null,"Create a ",Object(o.b)("inlineCode",{parentName:"p"},"Set")," by applying ",Object(o.b)("inlineCode",{parentName:"p"},"fn")," to each element in ",Object(o.b)("inlineCode",{parentName:"p"},"b"),", then use ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.map()")," to apply ",Object(o.b)("inlineCode",{parentName:"p"},"fn")," to each element in ",Object(o.b)("inlineCode",{parentName:"p"},"a"),", then ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.filter()")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const differenceBy = (a, b, fn) => {\n  const s = new Set(b.map(fn));\n  return a.map(fn).filter(el => !s.has(el));\n};\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [1]\ndifferenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], v => v.x); // [2]\n")))}l.isMDXComponent=!0},503:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var f=a.a.createContext({}),l=function(e){var t=a.a.useContext(f),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(f.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,f=p(e,["components","mdxType","originalType","parentName"]),u=l(n),s=r,d=u["".concat(c,".").concat(s)]||u[s]||b[s]||o;return n?a.a.createElement(d,i(i({ref:t},f),{},{components:n})):a.a.createElement(d,i({ref:t},f))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var f=2;f<o;f++)c[f]=n[f];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);