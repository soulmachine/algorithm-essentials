"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[3767],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),f=i,d=m["".concat(p,".").concat(f)]||m[f]||s[f]||o;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7372:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const o={title:"\u7b80\u4ecb"},a=void 0,l={unversionedId:"sorting/counting-sort/README",id:"sorting/counting-sort/README",title:"\u7b80\u4ecb",description:"\u8ba1\u6570\u6392\u5e8f(Counting Sort)\u662f\u4e00\u79cdO(n)\u7684\u6392\u5e8f\u7b97\u6cd5\uff0c\u5176\u601d\u8def\u662f\u5f00\u4e00\u4e2a\u957f\u5ea6\u4e3amaxValue-minValue+1\u7684\u6570\u7ec4\uff0c\u7136\u540e",source:"@site/docs/sorting/counting-sort/README.md",sourceDirName:"sorting/counting-sort",slug:"/sorting/counting-sort/",permalink:"/sorting/counting-sort/",draft:!1,tags:[],version:"current",frontMatter:{title:"\u7b80\u4ecb"},sidebar:"docs",previous:{title:"First Missing Positive",permalink:"/sorting/bucket-sort/first-missing-positive"},next:{title:"H-Index",permalink:"/sorting/counting-sort/h-index"}},p={},c=[],u={toc:c};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u8ba1\u6570\u6392\u5e8f"),"(Counting Sort)\u662f\u4e00\u79cdO(n)\u7684\u6392\u5e8f\u7b97\u6cd5\uff0c\u5176\u601d\u8def\u662f\u5f00\u4e00\u4e2a\u957f\u5ea6\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"maxValue-minValue+1"),"\u7684\u6570\u7ec4\uff0c\u7136\u540e"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5206\u914d\u3002\u626b\u63cf\u4e00\u904d\u539f\u59cb\u6570\u7ec4\uff0c\u4ee5\u5f53\u524d\u503c-",(0,i.kt)("inlineCode",{parentName:"li"},"minValue"),"\u4f5c\u4e3a\u4e0b\u6807\uff0c\u5c06\u8be5\u4e0b\u6807\u7684\u8ba1\u6570\u5668\u589e1\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u6536\u96c6\u3002\u626b\u63cf\u4e00\u904d\u8ba1\u6570\u5668\u6570\u7ec4\uff0c\u6309\u987a\u5e8f\u628a\u503c\u6536\u96c6\u8d77\u6765\u3002")),(0,i.kt)("p",null,"\u4e3e\u4e2a\u4f8b\u5b50\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"nums=[2, 1, 3, 1, 5]"),", \u9996\u5148\u626b\u63cf\u4e00\u904d\u83b7\u53d6\u6700\u5c0f\u503c\u548c\u6700\u5927\u503c\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"maxValue=5"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"minValue=1"),"\uff0c\u4e8e\u662f\u5f00\u4e00\u4e2a\u957f\u5ea6\u4e3a5\u7684\u8ba1\u6570\u5668\u6570\u7ec4",(0,i.kt)("inlineCode",{parentName:"p"},"counter"),"\uff0c"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5206\u914d\u3002\u7edf\u8ba1\u6bcf\u4e2a\u5143\u7d20\u51fa\u73b0\u7684\u9891\u7387\uff0c\u5f97\u5230",(0,i.kt)("inlineCode",{parentName:"li"},"counter=[2, 1, 1, 0, 1]"),"\uff0c\u4f8b\u5982",(0,i.kt)("inlineCode",{parentName:"li"},"counter[0]"),"\u8868\u793a\u503c",(0,i.kt)("inlineCode",{parentName:"li"},"0+minValue=1"),"\u51fa\u73b0\u4e862\u6b21\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u6536\u96c6\u3002",(0,i.kt)("inlineCode",{parentName:"li"},"counter[0]=2"),"\u8868\u793a",(0,i.kt)("inlineCode",{parentName:"li"},"1"),"\u51fa\u73b0\u4e86\u4e24\u6b21\uff0c\u90a3\u5c31\u5411\u539f\u59cb\u6570\u7ec4\u5199\u5165\u4e24\u4e2a1\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"counter[1]=1"),"\u8868\u793a",(0,i.kt)("inlineCode",{parentName:"li"},"2"),"\u51fa\u73b0\u4e861\u6b21\uff0c\u90a3\u5c31\u5411\u539f\u59cb\u6570\u7ec4\u5199\u5165\u4e00\u4e2a2\uff0c\u4f9d\u6b21\u7c7b\u63a8\uff0c\u6700\u7ec8\u539f\u59cb\u6570\u7ec4\u53d8\u4e3a",(0,i.kt)("inlineCode",{parentName:"li"},"[1,1,2,3,5]"),"\uff0c\u6392\u5e8f\u597d\u4e86\u3002")),(0,i.kt)("p",null,"\u8ba1\u6570\u6392\u5e8f\u672c\u8d28\u4e0a\u662f\u4e00\u79cd\u7279\u6b8a\u7684\u6876\u6392\u5e8f\uff0c\u5f53\u6876\u7684\u4e2a\u6570\u6700\u5927\u7684\u65f6\u5019\uff0c\u5c31\u662f\u8ba1\u6570\u6392\u5e8f\u3002"))}s.isMDXComponent=!0}}]);