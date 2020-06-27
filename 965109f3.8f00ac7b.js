(window.webpackJsonp=window.webpackJsonp||[]).push([[235],{334:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return p})),t.d(r,"default",(function(){return l}));var n=t(2),o=(t(0),t(501));const a={title:"drop",tags:"array,beginner"},c={id:"drop",isDocsHomePage:!1,title:"drop",description:"Returns a new array with n elements removed from the left.",source:"@site/docs/drop.md",permalink:"/30-seconds-of-typescript/docs/drop",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/drop.md"},p=[],i={rightToc:p};function l({components:e,...r}){return Object(o.b)("wrapper",Object(n.a)({},i,r,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Returns a new array with ",Object(o.b)("inlineCode",{parentName:"p"},"n")," elements removed from the left."),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.slice()")," to remove the specified number of elements from the left."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const drop = (arr, n = 1) => arr.slice(n);\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"drop([1, 2, 3]); // [2,3]\ndrop([1, 2, 3], 2); // [3]\ndrop([1, 2, 3], 42); // []\n")))}l.isMDXComponent=!0},501:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return m}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),u=function(e){var r=o.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},s=function(e){var r=u(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},d=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=u(t),d=n,m=s["".concat(c,".").concat(d)]||s[d]||f[d]||a;return t?o.a.createElement(m,p(p({ref:r},l),{},{components:t})):o.a.createElement(m,p({ref:r},l))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,c=new Array(a);c[0]=d;var p={};for(var i in r)hasOwnProperty.call(r,i)&&(p[i]=r[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var l=2;l<a;l++)c[l]=t[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);