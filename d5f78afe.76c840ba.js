(window.webpackJsonp=window.webpackJsonp||[]).push([[350],{449:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(6),a=(n(0),n(503)),i={title:"yesNo",tags:"string,regexp,intermediate"},c={id:"yesNo",isDocsHomePage:!1,title:"yesNo",description:"Returns true if the string is y/yes or false if the string is n/no.",source:"@site/docs/yesNo.md",permalink:"/30-seconds-of-typescript/docs/yesNo",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/yesNo.md"},s=[],p={rightToc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Returns ",Object(a.b)("inlineCode",{parentName:"p"},"true")," if the string is ",Object(a.b)("inlineCode",{parentName:"p"},"y"),"/",Object(a.b)("inlineCode",{parentName:"p"},"yes")," or ",Object(a.b)("inlineCode",{parentName:"p"},"false")," if the string is ",Object(a.b)("inlineCode",{parentName:"p"},"n"),"/",Object(a.b)("inlineCode",{parentName:"p"},"no"),"."),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"RegExp.test()")," to check if the string evaluates to ",Object(a.b)("inlineCode",{parentName:"p"},"y/yes")," or ",Object(a.b)("inlineCode",{parentName:"p"},"n/no"),".\nOmit the second argument, ",Object(a.b)("inlineCode",{parentName:"p"},"def")," to set the default answer as ",Object(a.b)("inlineCode",{parentName:"p"},"no"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const yesNo = (val, def = false) =>\n  /^(y|yes)$/i.test(val) ? true : /^(n|no)$/i.test(val) ? false : def;\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"yesNo('Y'); // true\nyesNo('yes'); // true\nyesNo('No'); // false\nyesNo('Foo', true); // true\n")))}l.isMDXComponent=!0},503:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=r,d=u["".concat(i,".").concat(f)]||u[f]||b[f]||a;return n?o.a.createElement(d,c(c({ref:t},p),{},{components:n})):o.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);