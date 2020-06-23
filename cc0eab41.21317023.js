(window.webpackJsonp=window.webpackJsonp||[]).push([[330],{431:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return l}));var r=t(2),o=t(6),a=(t(0),t(503)),i={title:"sortedIndexBy",tags:"array,math,function,intermediate"},c={id:"sortedIndexBy",isDocsHomePage:!1,title:"sortedIndexBy",description:"Returns the lowest index at which value should be inserted into array in order to maintain its sort order, based on a provided iterator function.",source:"@site/docs/sortedIndexBy.md",permalink:"/docs/sortedIndexBy",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/sortedIndexBy.md"},s=[],d={rightToc:s};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Returns the lowest index at which value should be inserted into array in order to maintain its sort order, based on a provided iterator function."),Object(a.b)("p",null,"Check if the array is sorted in descending order (loosely).\nUse ",Object(a.b)("inlineCode",{parentName:"p"},"Array.prototype.findIndex()")," to find the appropriate index where the element should be inserted, based on the iterator function ",Object(a.b)("inlineCode",{parentName:"p"},"fn"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const sortedIndexBy = (arr, n, fn) => {\n  const isDescending = fn(arr[0]) > fn(arr[arr.length - 1]);\n  const val = fn(n);\n  const index = arr.findIndex(el => (isDescending ? val >= fn(el) : val <= fn(el)));\n  return index === -1 ? arr.length : index;\n};\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"sortedIndexBy([{ x: 4 }, { x: 5 }], { x: 4 }, o => o.x); // 0\n")))}l.isMDXComponent=!0},503:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=o.a.createContext({}),l=function(e){var n=o.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return o.a.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(t),f=r,b=p["".concat(i,".").concat(f)]||p[f]||u[f]||a;return t?o.a.createElement(b,c(c({ref:n},d),{},{components:t})):o.a.createElement(b,c({ref:n},d))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var d=2;d<a;d++)i[d]=t[d];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);