(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{103:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return u}));var r=t(2),a=t(6),o=(t(0),t(503)),c={title:"chunkIntoN",tags:"array,intermediate"},i={id:"chunkIntoN",isDocsHomePage:!1,title:"chunkIntoN",description:"Chunks an array into n smaller arrays.",source:"@site/docs/chunkIntoN.md",permalink:"/docs/chunkIntoN",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/chunkIntoN.md"},p=[],l={rightToc:p};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Chunks an array into ",Object(o.b)("inlineCode",{parentName:"p"},"n")," smaller arrays."),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"Math.ceil()")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.length")," to get the size of each chunk.\nUse ",Object(o.b)("inlineCode",{parentName:"p"},"Array.from()")," to create a new array of size ",Object(o.b)("inlineCode",{parentName:"p"},"n"),".\nUse ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.slice()")," to map each element of the new array to a chunk the length of ",Object(o.b)("inlineCode",{parentName:"p"},"size"),".\nIf the original array can't be split evenly, the final chunk will contain the remaining elements."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const chunkIntoN = (arr, n) => {\n  const size = Math.ceil(arr.length / n);\n  return Array.from({ length: n }, (v, i) =>\n    arr.slice(i * size, i * size + size)\n  );\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"chunkIntoN([1, 2, 3, 4, 5, 6, 7], 4); // [[1,2], [3,4], [5,6], [7]]\n")))}u.isMDXComponent=!0},503:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(t),f=r,m=s["".concat(c,".").concat(f)]||s[f]||b[f]||o;return t?a.a.createElement(m,i(i({ref:n},l),{},{components:t})):a.a.createElement(m,i({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=f;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);