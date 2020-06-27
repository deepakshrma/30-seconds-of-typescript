(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{240:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(2),a=(n(0),n(501));const o={title:"getImages",tags:"browser,beginner"},i={id:"getImages",isDocsHomePage:!1,title:"getImages",description:"Fetches all images from within an element and puts them into an array",source:"@site/docs/getImages.md",permalink:"/30-seconds-of-typescript/docs/getImages",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/getImages.md"},c=[],p={rightToc:c};function l({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Fetches all images from within an element and puts them into an array"),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"Element.prototype.getElementsByTagName()")," to fetch all ",Object(a.b)("inlineCode",{parentName:"p"},"<img>")," elements inside the provided element, ",Object(a.b)("inlineCode",{parentName:"p"},"Array.prototype.map()")," to map every ",Object(a.b)("inlineCode",{parentName:"p"},"src")," attribute of their respective ",Object(a.b)("inlineCode",{parentName:"p"},"<img>")," element, then create a ",Object(a.b)("inlineCode",{parentName:"p"},"Set")," to eliminate duplicates and return the array."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const getImages = (el, includeDuplicates = false) => {\n  const images = [...el.getElementsByTagName('img')].map(img => img.getAttribute('src'));\n  return includeDuplicates ? images : [...new Set(images)];\n};\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"getImages(document, true); // ['image1.jpg', 'image2.png', 'image1.png', '...']\ngetImages(document, false); // ['image1.jpg', 'image2.png', '...']\n")))}l.isMDXComponent=!0},501:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},g=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=s(n),g=r,b=m["".concat(i,".").concat(g)]||m[g]||u[g]||o;return n?a.a.createElement(b,c(c({ref:t},l),{},{components:n})):a.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"}}]);