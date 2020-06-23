(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{259:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return m}));var r=n(2),o=n(6),a=(n(0),n(503)),c={title:"getColonTimeFromDate",tags:"date,intermediate"},i={id:"getColonTimeFromDate",isDocsHomePage:!1,title:"getColonTimeFromDate",description:"Returns a string of the form HHSS from a Date object.",source:"@site/docs/getColonTimeFromDate.md",permalink:"/docs/getColonTimeFromDate",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/getColonTimeFromDate.md"},p=[],l={rightToc:p};function m(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Returns a string of the form ",Object(a.b)("inlineCode",{parentName:"p"},"HH:MM:SS")," from a ",Object(a.b)("inlineCode",{parentName:"p"},"Date")," object."),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"Date.prototype.toTimeString()")," and ",Object(a.b)("inlineCode",{parentName:"p"},"String.prototype.slice()")," to get the ",Object(a.b)("inlineCode",{parentName:"p"},"HH:MM:SS")," part of a given ",Object(a.b)("inlineCode",{parentName:"p"},"Date")," object."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const getColonTimeFromDate = date => date.toTimeString().slice(0, 8);\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'getColonTimeFromDate(new Date()); // "08:38:00"\n')))}m.isMDXComponent=!0},503:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),m=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=m(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=m(n),b=r,f=u["".concat(c,".").concat(b)]||u[b]||s[b]||a;return n?o.a.createElement(f,i(i({ref:t},l),{},{components:n})):o.a.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);