"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[2056],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),k=o,f=m["".concat(p,".").concat(k)]||m[k]||u[k]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8315:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={title:"\u7b80\u4ecb"},a=void 0,l={unversionedId:"sorting/bucket-sort/README",id:"sorting/bucket-sort/README",title:"\u7b80\u4ecb",description:"\u6876\u6392\u5e8f(Bucket Sort)\u7684\u57fa\u672c\u601d\u8def\u662f\uff1a",source:"@site/docs/sorting/bucket-sort/README.md",sourceDirName:"sorting/bucket-sort",slug:"/sorting/bucket-sort/",permalink:"/en/sorting/bucket-sort/",draft:!1,tags:[],version:"current",frontMatter:{title:"\u7b80\u4ecb"},sidebar:"docs",previous:{title:"Kth Largest Element in an Array",permalink:"/en/sorting/quick-sort/kth-largest-element-in-an-array"},next:{title:"First Missing Positive",permalink:"/en/sorting/bucket-sort/first-missing-positive"}},p={},c=[],s={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6876\u6392\u5e8f"),"(Bucket Sort)\u7684\u57fa\u672c\u601d\u8def\u662f\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5c06\u5f85\u6392\u5e8f\u5143\u7d20\u5212\u5206\u5230\u4e0d\u540c\u7684\u75db\u3002\u5148\u626b\u63cf\u4e00\u904d\u5e8f\u5217\u6c42\u51fa\u6700\u5927\u503c",(0,o.kt)("inlineCode",{parentName:"li"},"maxV"),"\u548c\u6700\u5c0f\u503c",(0,o.kt)("inlineCode",{parentName:"li"},"minV"),"\uff0c\u8bbe\u6876\u7684\u4e2a\u6570\u4e3a",(0,o.kt)("inlineCode",{parentName:"li"},"k"),"\uff0c\u5219\u628a\u533a\u95f4",(0,o.kt)("inlineCode",{parentName:"li"},"[minV, maxV]"),"\u5747\u5300\u5212\u5206\u6210",(0,o.kt)("inlineCode",{parentName:"li"},"k"),"\u4e2a\u533a\u95f4\uff0c\u6bcf\u4e2a\u533a\u95f4\u5c31\u662f\u4e00\u4e2a\u6876\u3002\u5c06\u5e8f\u5217\u4e2d\u7684\u5143\u7d20\u5206\u914d\u5230\u5404\u81ea\u7684\u6876\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5bf9\u6bcf\u4e2a\u6876\u5185\u7684\u5143\u7d20\u8fdb\u884c\u6392\u5e8f\u3002\u53ef\u4ee5\u9009\u62e9\u4efb\u610f\u4e00\u79cd\u6392\u5e8f\u7b97\u6cd5\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5c06\u5404\u4e2a\u6876\u4e2d\u7684\u5143\u7d20\u5408\u5e76\u6210\u4e00\u4e2a\u5927\u7684\u6709\u5e8f\u5e8f\u5217\u3002")),(0,o.kt)("p",null,"\u5047\u8bbe\u6570\u636e\u662f\u5747\u5300\u5206\u5e03\u7684\uff0c\u5219\u6bcf\u4e2a\u6876\u7684\u5143\u7d20\u5e73\u5747\u4e2a\u6570\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"n/k"),"\u3002\u5047\u8bbe\u9009\u62e9\u7528\u5feb\u901f\u6392\u5e8f\u5bf9\u6bcf\u4e2a\u6876\u5185\u7684\u5143\u7d20\u8fdb\u884c\u6392\u5e8f\uff0c\u90a3\u4e48\u6bcf\u6b21\u6392\u5e8f\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"O(n/klog(n/k))"),"\u3002\u603b\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"O(n)+O(m)O(n/klog(n/k))"),"=",(0,o.kt)("inlineCode",{parentName:"p"},"O(n+nlog(n/k))"),"=",(0,o.kt)("inlineCode",{parentName:"p"},"O(n+nlogn-nlogk"),"\u3002\u5f53",(0,o.kt)("inlineCode",{parentName:"p"},"k"),"\u63a5\u8fd1\u4e8e",(0,o.kt)("inlineCode",{parentName:"p"},"n"),"\u65f6\uff0c\u6876\u6392\u5e8f\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u5c31\u53ef\u4ee5\u91d1\u65af\u8ba4\u4e3a\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"O(n)"),"\u7684\u3002\u5373\u6876\u8d8a\u591a\uff0c\u65f6\u95f4\u6548\u7387\u5c31\u8d8a\u9ad8\uff0c\u800c\u6876\u8d8a\u591a\uff0c\u7a7a\u95f4\u5c31\u8d8a\u5927\u3002"))}u.isMDXComponent=!0}}]);