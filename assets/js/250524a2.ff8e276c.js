"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[5231],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>y});var n=t(7294);function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,l=function(e,r){if(null==e)return{};var t,n,l={},u=Object.keys(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||(l[t]=e[t]);return l}(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=n.createContext({}),c=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},m=function(e){var r=c(e.components);return n.createElement(i.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,l=e.mdxType,u=e.originalType,i=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),s=c(t),y=l,b=s["".concat(i,".").concat(y)]||s[y]||p[y]||u;return t?n.createElement(b,o(o({ref:r},m),{},{components:t})):n.createElement(b,o({ref:r},m))}));function y(e,r){var t=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var u=t.length,o=new Array(u);o[0]=s;var a={};for(var i in r)hasOwnProperty.call(r,i)&&(a[i]=r[i]);a.originalType=e,a.mdxType="string"==typeof e?e:l,o[1]=a;for(var c=2;c<u;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},4942:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>u,metadata:()=>a,toc:()=>c});var n=t(7462),l=(t(7294),t(3905));const u={title:"Ugly Number"},o=void 0,a={unversionedId:"number-theory/ugly-number",id:"number-theory/ugly-number",title:"Ugly Number",description:"\u63cf\u8ff0",source:"@site/docs/number-theory/ugly-number.md",sourceDirName:"number-theory",slug:"/number-theory/ugly-number",permalink:"/number-theory/ugly-number",draft:!1,tags:[],version:"current",frontMatter:{title:"Ugly Number"},sidebar:"docs",previous:{title:"Happy Number",permalink:"/number-theory/happy-number"},next:{title:"Ugly Number II",permalink:"/number-theory/ugly-number-ii"}},i={},c=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],m={toc:c};function p(e){let{components:r,...t}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,l.kt)("p",null,"Write a function to check whether a given number is an ugly number."),(0,l.kt)("p",null,"Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. For example, 6, 8 are ugly while 14 is not ugly since it includes another prime factor 7."),(0,l.kt)("p",null,"Note that 1 is typically treated as an ugly number."),(0,l.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,l.kt)("p",null,"\u601d\u8def\u5f88\u7b80\u5355\uff0c\u628a",(0,l.kt)("inlineCode",{parentName:"p"},"n"),"\u91cc\u9762\u7684 2,3,5 \u5168\u90e8\u6d88\u6389\uff0c\u770b\u6700\u540e\u80fd\u4e0d\u80fd\u5269\u4e0b 1\u3002"),(0,l.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// Ugly Number\n// Time complexity: O(logn), Space complexity: O(1)\npublic class Solution {\n    public boolean isUgly(int num) {\n        if (num == 0) return false;\n        while (num % 2 == 0) num /= 2;\n        while (num % 3 == 0) num /= 3;\n        while (num % 5 == 0) num /= 5;\n        return num == 1;\n    }\n}\n")),(0,l.kt)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/number-theory/ugly-number-ii"},"Ugly Number II"))))}p.isMDXComponent=!0}}]);