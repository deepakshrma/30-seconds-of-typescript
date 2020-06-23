(window.webpackJsonp=window.webpackJsonp||[]).push([[341],{442:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return a})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(2),o=t(6),c=(t(0),t(503)),i={title:"bindAll",tags:"object,function,intermediate"},a={id:"bindAll",isDocsHomePage:!1,title:"bindAll",description:"Binds methods of an object to the object itself, overwriting the existing method.",source:"@site/docs/bindAll.md",permalink:"/docs/bindAll",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/bindAll.md"},l=[],p={rightToc:l};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Binds methods of an object to the object itself, overwriting the existing method."),Object(c.b)("p",null,"Use ",Object(c.b)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," to return a ",Object(c.b)("inlineCode",{parentName:"p"},"function")," that uses ",Object(c.b)("inlineCode",{parentName:"p"},"Function.prototype.apply()")," to apply the given context (",Object(c.b)("inlineCode",{parentName:"p"},"obj"),") to ",Object(c.b)("inlineCode",{parentName:"p"},"fn")," for each function specified."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const bindAll = (obj, ...fns) =>\n  fns.forEach(\n    fn => (\n      (f = obj[fn]),\n      (obj[fn] = function() {\n        return f.apply(obj);\n      })\n    )\n  );\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"var view = {\n  label: 'docs',\n  click: function() {\n    console.log('clicked ' + this.label);\n  }\n};\nbindAll(view, 'click');\njQuery(element).on('click', view.click); // Logs 'clicked docs' when clicked.\n")))}u.isMDXComponent=!0},503:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),u=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},b=function(e){var n=u(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=u(t),f=r,d=b["".concat(i,".").concat(f)]||b[f]||s[f]||c;return t?o.a.createElement(d,a(a({ref:n},p),{},{components:t})):o.a.createElement(d,a({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,i=new Array(c);i[0]=f;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var p=2;p<c;p++)i[p]=t[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);