"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[3220],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},b=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),b=s(t),m=o,d=b["".concat(l,".").concat(m)]||b[m]||p[m]||i;return t?r.createElement(d,a(a({ref:n},c),{},{components:t})):r.createElement(d,a({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=b;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}b.displayName="MDXCreateElement"},9398:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>s});var r=t(7462),o=(t(7294),t(3905));const i={title:"House Robber II"},a=void 0,u={unversionedId:"dp/house-robber-ii",id:"dp/house-robber-ii",title:"House Robber II",description:"\u63cf\u8ff0",source:"@site/docs/dp/house-robber-ii.md",sourceDirName:"dp",slug:"/dp/house-robber-ii",permalink:"/dp/house-robber-ii",draft:!1,tags:[],version:"current",frontMatter:{title:"House Robber II"},sidebar:"docs",previous:{title:"House Robber",permalink:"/dp/house-robber"},next:{title:"House Robber III",permalink:"/dp/house-robber-iii"}},l={},s=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}],c={toc:s};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,o.kt)("p",null,"This time, all houses at this place are ",(0,o.kt)("strong",{parentName:"p"},"arranged in a circle"),"."),(0,o.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,o.kt)("p",null,'\u5982\u679c\u62a2\u52ab\u7b2c\u4e00\u5bb6\uff0c\u5219\u4e0d\u53ef\u4ee5\u62a2\u6700\u540e\u4e00\u5bb6\uff1b\u5426\u5219\uff0c\u53ef\u4ee5\u62a2\u6700\u540e\u4e00\u5bb6\u3002\u56e0\u6b64\uff0c\u8fd9\u4e2a\u95ee\u9898\u5c31\u8f6c\u5316\u6210\u4e3a\u4e86\u4e24\u8d9f\u52a8\u89c4\uff0c\u53ef\u4ee5\u590d\u7528 "House Robber" \u7684\u4ee3\u7801\u3002'),(0,o.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// House Robber II\n// Time Complexity: O(n), Space Complexity: O(1)\npublic class Solution {\n    public int rob(int[] nums) {\n        if (nums.length == 1) return nums[0];\n        return Math.max(rob1(nums, 0, nums.length - 1),\n                rob1(nums, 1, nums.length));\n    }\n\n    private static int rob1(int[] nums, int begin, int end) {\n        if (nums == null || begin >= end) return 0;\n        if ((end - begin) == 1) return nums[begin];\n\n        int even = nums[begin];\n        int odd = Math.max(nums[begin], nums[begin + 1]);\n\n        for (int i = begin + 2; i < end; ++i) {\n            if ((i-begin) % 2 == 0) {\n                even = Math.max(even + nums[i], odd);\n            } else {\n                odd = Math.max(odd + nums[i], even);\n            }\n        }\n        return Math.max(even, odd);\n    }\n}\n")))}p.isMDXComponent=!0}}]);