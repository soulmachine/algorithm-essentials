"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[2134],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>p});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var m=n.createContext({}),d=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,m=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=d(r),p=i,f=s["".concat(m,".").concat(p)]||s[p]||c[p]||a;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function p(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=s;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},5412:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=r(7462),i=(r(7294),r(3905));const a={title:"Find Minimum in Rotated Sorted Array"},o=void 0,l={unversionedId:"search/find-minimum-in-rotated-sorted-array",id:"search/find-minimum-in-rotated-sorted-array",title:"Find Minimum in Rotated Sorted Array",description:"\u63cf\u8ff0",source:"@site/docs/search/find-minimum-in-rotated-sorted-array.md",sourceDirName:"search",slug:"/search/find-minimum-in-rotated-sorted-array",permalink:"/en/search/find-minimum-in-rotated-sorted-array",draft:!1,tags:[],version:"current",frontMatter:{title:"Find Minimum in Rotated Sorted Array"},sidebar:"docs",previous:{title:"Search a 2D Matrix II",permalink:"/en/search/search-a-2d-matrix-ii"},next:{title:"Find Minimum in Rotated Sorted Array II",permalink:"/en/search/find-minimum-in-rotated-sorted-array-ii"}},m={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],u={toc:d};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,i.kt)("p",null,"Suppose a sorted array is rotated at some pivot unknown to you beforehand."),(0,i.kt)("p",null,"(i.e., ",(0,i.kt)("inlineCode",{parentName:"p"},"0 1 2 4 5 6 7")," might become ",(0,i.kt)("inlineCode",{parentName:"p"},"4 5 6 7 0 1 2"),")."),(0,i.kt)("p",null,"Find the minimum element."),(0,i.kt)("p",null,"You may assume no duplicate exists in the array."),(0,i.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,i.kt)("p",null,"\u4ece\u5de6\u5411\u53f3\u626b\u63cf\uff0c\u626b\u63cf\u5230\u7684\u7b2c\u4e00\u4e2a\u9006\u5e8f\u7684\u4f4d\u7f6e\uff0c\u80af\u5b9a\u662f\u539f\u59cb\u6570\u7ec4\u4e2d\u7b2c\u4e00\u4e2a\u5143\u7d20\uff0c\u65f6\u95f4\u590d\u6742\u5ea6",(0,i.kt)("inlineCode",{parentName:"p"},"O(n)"),"\u3002"),(0,i.kt)("p",null,"\u4e0d\u8fc7\u672c\u9898\u4f9d\u65e7\u53ef\u4ee5\u7528\u4e8c\u5206\u67e5\u627e\uff0c\u6700\u5173\u952e\u7684\u662f\u8981\u5224\u65ad\u90a3\u4e2a\u201c\u65ad\u5c42\u201d\u662f\u5728\u5de6\u8fb9\u8fd8\u662f\u53f3\u8fb9\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u82e5",(0,i.kt)("inlineCode",{parentName:"li"},"A[mid] < A[right]"),"\uff0c\u5219\u533a\u95f4",(0,i.kt)("inlineCode",{parentName:"li"},"[mid,right]"),"\u4e00\u5b9a\u9012\u589e\uff0c\u65ad\u5c42\u4e00\u5b9a\u5728\u5de6\u8fb9"),(0,i.kt)("li",{parentName:"ul"},"\u82e5",(0,i.kt)("inlineCode",{parentName:"li"},"A[mid] > A[right]"),"\uff0c\u5219\u533a\u95f4",(0,i.kt)("inlineCode",{parentName:"li"},"[left,mid]"),"\u4e00\u5b9a\u9012\u589e\uff0c\u65ad\u5c42\u4e00\u5b9a\u5728\u53f3\u8fb9"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nums[mid] == nums[right]"),"\uff0c\u8fd9\u79cd\u60c5\u51b5\u4e0d\u53ef\u80fd\u53d1\u751f\uff0c\u56e0\u4e3a\u6570\u7ec4\u662f\u4e25\u683c\u5355\u8c03\u9012\u589e\u7684\uff0c\u4e0d\u5b58\u5728\u91cd\u590d\u5143\u7d20")),(0,i.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Find Minimum in Rotated Sorted Array\n// \u65f6\u95f4\u590d\u6742\u5ea6O(logn)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public int findMin(int[] nums) {\n        int left = 0;\n        int right = nums.length - 1;\n        while (left < right) {\n            int mid = left + (right - left) / 2;\n            if (nums[mid] < nums[right]) {\n                right = mid;\n            } else {\n                left = mid + 1;\n            }\n        }\n        return nums[left];\n    }\n}\n")),(0,i.kt)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/en/search/search-in-rotated-sorted-array"},"Search in Rotated Sorted Array")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/en/search/search-in-rotated-sorted-array-ii"},"Search in Rotated Sorted Array II")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/en/search/find-minimum-in-rotated-sorted-array-ii"},"Find Minimum in Rotated Sorted Array II"))))}c.isMDXComponent=!0}}]);