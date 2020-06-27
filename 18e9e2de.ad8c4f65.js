(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{142:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return a})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return u}));var r=t(2),o=(t(0),t(502));const c={title:"once",tags:"function,intermediate"},a={id:"once",isDocsHomePage:!1,title:"once",description:"Ensures a function is called only once.",source:"@site/docs/once.md",permalink:"/30-seconds-of-typescript/docs/once",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/once.md"},i=[],l={rightToc:i};function u({components:e,...n}){return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Ensures a function is called only once."),Object(o.b)("p",null,"Utilizing a closure, use a flag, ",Object(o.b)("inlineCode",{parentName:"p"},"called"),", and set it to ",Object(o.b)("inlineCode",{parentName:"p"},"true")," once the function is called for the first time, preventing it from being called again. In order to allow the function to have its ",Object(o.b)("inlineCode",{parentName:"p"},"this")," context changed (such as in an event listener), the ",Object(o.b)("inlineCode",{parentName:"p"},"function")," keyword must be used, and the supplied function must have the context applied.\nAllow the function to be supplied with an arbitrary number of arguments using the rest/spread (",Object(o.b)("inlineCode",{parentName:"p"},"..."),") operator."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const once = fn => {\n  let called = false;\n  return function(...args) {\n    if (called) return;\n    called = true;\n    return fn.apply(this, args);\n  };\n};\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const startApp = function(event) {\n  console.log(this, event); // document.body, MouseEvent\n};\ndocument.body.addEventListener('click', once(startApp)); // only runs `startApp` once upon click\n")))}u.isMDXComponent=!0},502:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),p=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(t),d=r,b=s["".concat(a,".").concat(d)]||s[d]||f[d]||c;return t?o.a.createElement(b,i(i({ref:n},u),{},{components:t})):o.a.createElement(b,i({ref:n},u))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,a=new Array(c);a[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var u=2;u<c;u++)a[u]=t[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);