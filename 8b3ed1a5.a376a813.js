(window.webpackJsonp=window.webpackJsonp||[]).push([[216],{315:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return a})),r.d(t,"default",(function(){return p}));var n=r(2),c=(r(0),r(501));const i={id:"createDirIfNotExistsSync",sidebar_label:"createDirIfNotExistsSync",title:"createDirIfNotExistsSync",tags:"node,beginner"},o={id:"createDirIfNotExistsSync",isDocsHomePage:!1,title:"createDirIfNotExistsSync",description:"TS",source:"@site/docs/createDirIfNotExistsSync.md",permalink:"/30-seconds-of-typescript/docs/createDirIfNotExistsSync",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/createDirIfNotExistsSync.md",sidebar_label:"createDirIfNotExistsSync",sidebar:"someSidebar",previous:{title:"createDirIfNotExists",permalink:"/30-seconds-of-typescript/docs/createDirIfNotExists"},next:{title:"createElement",permalink:"/30-seconds-of-typescript/docs/createElement"}},a=[],s={rightToc:a};function p({components:e,...t}){return Object(c.b)("wrapper",Object(n.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square",alt:"TS"})),"\n",Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-nodejs-green.svg?style=flat-square",alt:"NODE"}))),Object(c.b)("p",null,"Creates a directory, if it does not exist."),Object(c.b)("p",null,"Use ",Object(c.b)("inlineCode",{parentName:"p"},"fs.existsSync()")," to check if the directory exists, ",Object(c.b)("inlineCode",{parentName:"p"},"fs.mkdirSync()")," to create it."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),'const { mkdirSync, existsSync } = require("fs");\n\nconst createDirIfNotExistsSync = (dir: string) =>\n  !existsSync(dir) ? mkdirSync(dir) : undefined;\n')),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"createDirIfNotExistsSync(\"test\"); // creates the directory 'test', if it doesn't exist\n")))}p.isMDXComponent=!0},501:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),c=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var p=c.a.createContext({}),l=function(e){var t=c.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return c.a.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=c.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,b=u["".concat(o,".").concat(d)]||u[d]||f[d]||i;return r?c.a.createElement(b,a(a({ref:t},p),{},{components:r})):c.a.createElement(b,a({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:n,o[1]=a;for(var p=2;p<i;p++)o[p]=r[p];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);