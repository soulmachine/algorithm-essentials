"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[3703],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=s(r),m=o,b=f["".concat(l,".").concat(m)]||f[m]||u[m]||a;return r?n.createElement(b,i(i({ref:t},p),{},{components:r})):n.createElement(b,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6069:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={title:"\u7b80\u4ecb"},i=void 0,c={unversionedId:"bfs/README",id:"bfs/README",title:"\u7b80\u4ecb",description:"\u5f53\u9898\u76ee\u770b\u4e0d\u51fa\u4efb\u4f55\u89c4\u5f8b\uff0c\u65e2\u4e0d\u80fd\u7528\u5206\u6cbb\uff0c\u8d2a\u5fc3\uff0c\u4e5f\u4e0d\u80fd\u7528\u52a8\u89c4\u65f6\uff0c\u8fd9\u65f6\u5019\u4e07\u80fd\u65b9\u6cd5\u2014\u2014\u641c\u7d22\uff0c",source:"@site/docs/bfs/README.md",sourceDirName:"bfs",slug:"/bfs/",permalink:"/bfs/",draft:!1,editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/bfs/README.md",tags:[],version:"current",frontMatter:{title:"\u7b80\u4ecb"},sidebar:"someSidebar",previous:{title:"Combinations",permalink:"/brute-force/combinations"},next:{title:"Word Ladder",permalink:"/bfs/word-ladder"}},l={},s=[],p={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5f53\u9898\u76ee\u770b\u4e0d\u51fa\u4efb\u4f55\u89c4\u5f8b\uff0c\u65e2\u4e0d\u80fd\u7528\u5206\u6cbb\uff0c\u8d2a\u5fc3\uff0c\u4e5f\u4e0d\u80fd\u7528\u52a8\u89c4\u65f6\uff0c\u8fd9\u65f6\u5019\u4e07\u80fd\u65b9\u6cd5\u2014\u2014\u641c\u7d22\uff0c\n\u5c31\u6d3e\u4e0a\u7528\u573a\u4e86\u3002\u641c\u7d22\u5206\u4e3a\u5e7f\u641c\u548c\u6df1\u641c\uff0c\u5e7f\u641c\u91cc\u9762\u53c8\u6709\u666e\u901a\u5e7f\u641c\uff0c\u53cc\u5411\u5e7f\u641c\uff0cA","*","\u641c\u7d22\u7b49\u3002\n\u6df1\u641c\u91cc\u9762\u53c8\u6709\u666e\u901a\u6df1\u641c\uff0c\u56de\u6eaf\u6cd5\u7b49\u3002"),(0,o.kt)("p",null,"\u5e7f\u641c\u548c\u6df1\u641c\u975e\u5e38\u7c7b\u4f3c\uff08\u9664\u4e86\u5728\u6269\u5c55\u8282\u70b9\u8fd9\u90e8\u5206\u4e0d\u4e00\u6837\uff09\uff0c\u4e8c\u8005\u6709\u76f8\u540c\u7684\u6846\u67b6\uff0c\u5982\u4f55\u8868\u793a\u72b6\u6001\uff1f\n\u5982\u4f55\u6269\u5c55\u72b6\u6001\uff1f\u5982\u4f55\u5224\u91cd\uff1f\u5c24\u5176\u662f\u5224\u91cd\uff0c\u89e3\u51b3\u4e86\u8fd9\u4e2a\u95ee\u9898\uff0c\u57fa\u672c\u4e0a\u6574\u4e2a\u95ee\u9898\u5c31\u89e3\u51b3\u4e86\u3002"))}u.isMDXComponent=!0}}]);