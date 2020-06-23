(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{173:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),c=(n(0),n(503)),o={title:"vectorAngle",tags:"math,beginner"},i={id:"vectorAngle",isDocsHomePage:!1,title:"vectorAngle",description:"Returns the angle (theta) between two vectors.",source:"@site/docs/vectorAngle.md",permalink:"/docs/vectorAngle",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/vectorAngle.md"},l=[],p={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Returns the angle (theta) between two vectors."),Object(c.b)("p",null,"Use ",Object(c.b)("inlineCode",{parentName:"p"},"Array.prototype.reduce()"),", ",Object(c.b)("inlineCode",{parentName:"p"},"Math.pow()")," and ",Object(c.b)("inlineCode",{parentName:"p"},"Math.sqrt()")," to calculate the magnitude of each vector and the scalar product of the two vectors.\nUse ",Object(c.b)("inlineCode",{parentName:"p"},"Math.acos()")," to calculate the arccos and get the theta value."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const vectorAngle = (x, y) => {\n  let mX = Math.sqrt(x.reduce((acc, n) => acc + Math.pow(n, 2), 0));\n  let mY = Math.sqrt(y.reduce((acc, n) => acc + Math.pow(n, 2), 0));\n  return Math.acos(x.reduce((acc, n, i) => acc + n * y[i], 0) / (mX * mY));\n};\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"vectorAngle([3, 4], [4, 3]); // 0.283794109208328\n")))}u.isMDXComponent=!0},503:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),f=r,d=s["".concat(o,".").concat(f)]||s[f]||b[f]||c;return n?a.a.createElement(d,i(i({ref:t},p),{},{components:n})):a.a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<c;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);