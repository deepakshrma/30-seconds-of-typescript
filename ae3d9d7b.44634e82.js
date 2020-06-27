(window.webpackJsonp=window.webpackJsonp||[]).push([[284],{383:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return l}));var r=n(2),a=(n(0),n(501));const o={title:"unionBy",tags:"array,function,intermediate"},c={id:"unionBy",isDocsHomePage:!1,title:"unionBy",description:"Returns every element that exists in any of the two arrays once, after applying the provided function to each array element of both.",source:"@site/docs/unionBy.md",permalink:"/30-seconds-of-typescript/docs/unionBy",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/unionBy.md"},i=[],p={rightToc:i};function l({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Returns every element that exists in any of the two arrays once, after applying the provided function to each array element of both."),Object(a.b)("p",null,"Create a ",Object(a.b)("inlineCode",{parentName:"p"},"Set")," by applying all ",Object(a.b)("inlineCode",{parentName:"p"},"fn")," to all values of ",Object(a.b)("inlineCode",{parentName:"p"},"a"),".\nCreate a ",Object(a.b)("inlineCode",{parentName:"p"},"Set")," from ",Object(a.b)("inlineCode",{parentName:"p"},"a")," and all elements in ",Object(a.b)("inlineCode",{parentName:"p"},"b")," whose value, after applying ",Object(a.b)("inlineCode",{parentName:"p"},"fn")," does not match a value in the previously created set.\nReturn the last set converted to an array."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const unionBy = (a, b, fn) => {\n  const s = new Set(a.map(fn));\n  return Array.from(new Set([...a, ...b.filter(x => !s.has(fn(x)))]));\n};\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"unionBy([2.1], [1.2, 2.3], Math.floor); // [2.1, 1.2]\n")))}l.isMDXComponent=!0},501:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return y}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(n),b=r,y=s["".concat(c,".").concat(b)]||s[b]||f[b]||o;return n?a.a.createElement(y,i(i({ref:t},l),{},{components:n})):a.a.createElement(y,i({ref:t},l))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);