(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{171:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return a})),r.d(t,"default",(function(){return s}));var o=r(2),n=(r(0),r(501));const c={title:"smoothScroll",tags:"browser,css,intermediate"},l={id:"smoothScroll",isDocsHomePage:!1,title:"smoothScroll",description:"Smoothly scrolls the element on which it's called into the visible area of the browser window.",source:"@site/docs/smoothScroll.md",permalink:"/30-seconds-of-typescript/docs/smoothScroll",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/smoothScroll.md"},a=[],i={rightToc:a};function s({components:e,...t}){return Object(n.b)("wrapper",Object(o.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Smoothly scrolls the element on which it's called into the visible area of the browser window."),Object(n.b)("p",null,"Use ",Object(n.b)("inlineCode",{parentName:"p"},".scrollIntoView")," method to scroll the element.\nPass ",Object(n.b)("inlineCode",{parentName:"p"},"{ behavior: 'smooth' }")," to ",Object(n.b)("inlineCode",{parentName:"p"},".scrollIntoView")," so it scrolls smoothly."),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"const smoothScroll = element =>\n  document.querySelector(element).scrollIntoView({\n    behavior: 'smooth'\n  });\n")),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"smoothScroll('#fooBar'); // scrolls smoothly to the element with the id fooBar\nsmoothScroll('.fooBar'); // scrolls smoothly to the first element with a class of fooBar\n")))}s.isMDXComponent=!0},501:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var o=r(0),n=r.n(o);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},c=Object.keys(e);for(o=0;o<c.length;o++)r=c[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)r=c[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),p=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},f=n.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(r),f=o,b=u["".concat(l,".").concat(f)]||u[f]||m[f]||c;return r?n.a.createElement(b,a(a({ref:t},s),{},{components:r})):n.a.createElement(b,a({ref:t},s))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,l=new Array(c);l[0]=f;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var s=2;s<c;s++)l[s]=r[s];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);