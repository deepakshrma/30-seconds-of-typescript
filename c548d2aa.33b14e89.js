(window.webpackJsonp=window.webpackJsonp||[]).push([[312],{413:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(6),o=(n(0),n(503)),i={title:"isReadableStream",tags:"node,type,intermediate"},c={id:"isReadableStream",isDocsHomePage:!1,title:"isReadableStream",description:"Checks if the given argument is a readable stream.",source:"@site/docs/isReadableStream.md",permalink:"/docs/isReadableStream",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/isReadableStream.md"},p=[],l={rightToc:p};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Checks if the given argument is a readable stream."),Object(o.b)("p",null,"Check if the value is different from ",Object(o.b)("inlineCode",{parentName:"p"},"null"),", use ",Object(o.b)("inlineCode",{parentName:"p"},"typeof")," to check if the value is of type ",Object(o.b)("inlineCode",{parentName:"p"},"object")," and the ",Object(o.b)("inlineCode",{parentName:"p"},"pipe")," property is of type ",Object(o.b)("inlineCode",{parentName:"p"},"function"),".\nAdditionally check if the ",Object(o.b)("inlineCode",{parentName:"p"},"typeof")," the ",Object(o.b)("inlineCode",{parentName:"p"},"_read")," and ",Object(o.b)("inlineCode",{parentName:"p"},"_readableState")," properties are ",Object(o.b)("inlineCode",{parentName:"p"},"function")," and ",Object(o.b)("inlineCode",{parentName:"p"},"object")," respectively."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const isReadableStream = val =>\n  val !== null &&\n  typeof val === 'object' &&\n  typeof val.pipe === 'function' &&\n  typeof val._read === 'function' &&\n  typeof val._readableState === 'object';\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const fs = require('fs');\nisReadableStream(fs.createReadStream('test.txt')); // true\n")))}b.isMDXComponent=!0},503:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=b(n),f=r,d=u["".concat(i,".").concat(f)]||u[f]||s[f]||o;return n?a.a.createElement(d,c(c({ref:t},l),{},{components:n})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);