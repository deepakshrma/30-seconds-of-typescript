(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{158:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),i=(n(0),n(503)),o={title:"validateNumber",tags:"math,intermediate"},c={id:"validateNumber",isDocsHomePage:!1,title:"validateNumber",description:"Returns true if the given value is a number, false otherwise.",source:"@site/docs/validateNumber.md",permalink:"/docs/validateNumber",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/validateNumber.md"},u=[],p={rightToc:u};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Returns ",Object(i.b)("inlineCode",{parentName:"p"},"true")," if the given value is a number, ",Object(i.b)("inlineCode",{parentName:"p"},"false")," otherwise."),Object(i.b)("p",null,"Use ",Object(i.b)("inlineCode",{parentName:"p"},"!isNaN()")," in combination with ",Object(i.b)("inlineCode",{parentName:"p"},"parseFloat()")," to check if the argument is a number.\nUse ",Object(i.b)("inlineCode",{parentName:"p"},"isFinite()")," to check if the number is finite.\nUse ",Object(i.b)("inlineCode",{parentName:"p"},"Number()")," to check if the coercion holds."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const validateNumber = n => !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n;\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"validateNumber('10'); // true\n")))}l.isMDXComponent=!0},503:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=l(n),m=r,f=s["".concat(o,".").concat(m)]||s[m]||b[m]||i;return n?a.a.createElement(f,c(c({ref:t},p),{},{components:n})):a.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);