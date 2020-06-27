(window.webpackJsonp=window.webpackJsonp||[]).push([[300],{398:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return a})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(2),o=(r(0),r(501));const c={title:"cloneRegExp",tags:"type,string,regexp,intermediate"},a={id:"cloneRegExp",isDocsHomePage:!1,title:"cloneRegExp",description:"JS",source:"@site/docs/cloneRegExp.md",permalink:"/30-seconds-of-typescript/docs/cloneRegExp",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/cloneRegExp.md",sidebar:"someSidebar",previous:{title:"clampNumber",permalink:"/30-seconds-of-typescript/docs/clampNumber"},next:{title:"coalesce",permalink:"/30-seconds-of-typescript/docs/coalesce"}},p=[],i={rightToc:p};function l({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"}))),Object(o.b)("p",null,"Clones a regular expression."),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"new RegExp()"),", ",Object(o.b)("inlineCode",{parentName:"p"},"RegExp.source")," and ",Object(o.b)("inlineCode",{parentName:"p"},"RegExp.flags")," to clone the given regular expression."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const cloneRegExp = regExp => new RegExp(regExp.source, regExp.flags);\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const regExp = /lorem ipsum/gi;\nconst regExp2 = cloneRegExp(regExp); // /lorem ipsum/gi\n")))}l.isMDXComponent=!0},501:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return g}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,g=u["".concat(a,".").concat(m)]||u[m]||b[m]||c;return r?o.a.createElement(g,p(p({ref:t},l),{},{components:r})):o.a.createElement(g,p({ref:t},l))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,a[1]=p;for(var l=2;l<c;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);