(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{222:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(2),c=r(6),a=(r(0),r(502)),o={title:"compactWhitespace",tags:"string,regexp,beginner"},p={id:"compactWhitespace",isDocsHomePage:!1,title:"compactWhitespace",description:"TS",source:"@site/docs/compactWhitespace.md",permalink:"/30-seconds-of-typescript/docs/compactWhitespace",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/compactWhitespace.md",sidebar:"someSidebar",previous:{title:"compact",permalink:"/30-seconds-of-typescript/docs/compact"},next:{title:"complement",permalink:"/30-seconds-of-typescript/docs/complement"}},s=[],i={rightToc:s};function l(e){var t=e.components,r=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square",alt:"TS"})),"\n",Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"})),"\n",Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-deno-green.svg?style=flat-square",alt:"JS"}))),Object(a.b)("p",null,"Returns a string with whitespaces compacted."),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"String.prototype.replace()")," with a regular expression to replace all occurrences of 2 or more whitespace characters with a single space."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),'const compactWhitespace = (str: string) => str.replace(/\\s{2,}/g, " ");\n')),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"compactWhitespace(\"Lorem    Ipsum\"); // 'Lorem Ipsum'\ncompactWhitespace(\"Lorem \\n Ipsum\"); // 'Lorem Ipsum'\n")))}l.isMDXComponent=!0},502:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),c=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var i=c.a.createContext({}),l=function(e){var t=c.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=l(e.components);return c.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},b=c.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=l(r),b=n,f=u["".concat(o,".").concat(b)]||u[b]||m[b]||a;return r?c.a.createElement(f,p(p({ref:t},i),{},{components:r})):c.a.createElement(f,p({ref:t},i))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=b;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var i=2;i<a;i++)o[i]=r[i];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);