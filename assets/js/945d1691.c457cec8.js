"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[9508],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,y=c["".concat(p,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5956:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={title:"Rotate Array"},o=void 0,l={unversionedId:"array/rotate-array",id:"array/rotate-array",title:"Rotate Array",description:"\u63cf\u8ff0",source:"@site/docs/array/rotate-array.md",sourceDirName:"array",slug:"/array/rotate-array",permalink:"/array/rotate-array",draft:!1,tags:[],version:"current",frontMatter:{title:"Rotate Array"},sidebar:"docs",previous:{title:"Majority Element II",permalink:"/array/majority-element-ii"},next:{title:"Contains Duplicate",permalink:"/array/contains-duplicate"}},p={},s=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u4e09\u8f6e reverse",id:"\u4e09\u8f6e-reverse",level:4}],u={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.kt)("p",null,"Rotate an array of ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," elements to the right by ",(0,a.kt)("inlineCode",{parentName:"p"},"k")," steps."),(0,a.kt)("p",null,"For example, with ",(0,a.kt)("inlineCode",{parentName:"p"},"n = 7")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"k = 3"),", the array ",(0,a.kt)("inlineCode",{parentName:"p"},"[1,2,3,4,5,6,7]")," is rotated to ",(0,a.kt)("inlineCode",{parentName:"p"},"[5,6,7,1,2,3,4]"),"."),(0,a.kt)("p",null,"Note:\nTry to come up as many solutions as you can, there are at least 3 different ways to solve this problem."),(0,a.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,a.kt)("p",null,"\u6700\u7b80\u5355\u7684\u65b9\u6cd5\uff0c\u5f00\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"k"),"\u957f\u7684\u6570\u7ec4\uff0c\u5148\u628a\u53f3\u8fb9",(0,a.kt)("inlineCode",{parentName:"p"},"k"),"\u4e2a\u5143\u7d20\u5b58\u5165\u8fd9\u4e2a\u4e34\u65f6\u6570\u7ec4\uff0c\u7136\u540e\u628a\u6570\u7ec4\u4e2d\u7684\u524d",(0,a.kt)("inlineCode",{parentName:"p"},"n-k"),"\u53f3\u79fb",(0,a.kt)("inlineCode",{parentName:"p"},"k"),"\u4f4d\uff0c\u518d\u628a\u4e34\u65f6\u6570\u7ec4\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"k"),"\u4e2a\u5143\u7d20\u5b58\u5165\u5230\u539f\u59cb\u6570\u7ec4\u5de6\u8fb9\u3002\u65f6\u95f4\u590d\u6742\u5ea6",(0,a.kt)("inlineCode",{parentName:"p"},"O(n)"),"\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6",(0,a.kt)("inlineCode",{parentName:"p"},"O(k)"),"\u3002"),(0,a.kt)("p",null,"\u7b2c\u4e8c\u4e2a\u7b80\u5355\u7684\u65b9\u6cd5\uff0c\u5148\u5b9e\u73b0\u4e00\u4e2a\u51fd\u6570\uff0c\u628a\u6570\u7ec4\u53f3\u79fb\u4e00\u4f4d\uff0c\u8c03\u7528\u8fd9\u4e2a\u51fd\u6570",(0,a.kt)("inlineCode",{parentName:"p"},"k"),"\u6b21\u5373\u53ef\u3002\u65f6\u95f4\u590d\u6742\u5ea6",(0,a.kt)("inlineCode",{parentName:"p"},"O(n*k)"),"\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6",(0,a.kt)("inlineCode",{parentName:"p"},"O(1)"),"\u3002"),(0,a.kt)("p",null,"\u7b2c\u4e09\u4e2a\u65b9\u6cd5\uff0c\u5148\u5c06\u6570\u7ec4\u5206\u4e3a\u4e24\u6bb5\uff0c\u524d",(0,a.kt)("inlineCode",{parentName:"p"},"n-k"),"\u4e2a\u4e3a\u4e00\u6bb5\uff0c\u540e",(0,a.kt)("inlineCode",{parentName:"p"},"k"),"\u4e2a\u5143\u7d20\u4f5c\u4e3a\u7b2c\u4e8c\u6bb5\uff0c\u5c06\u7b2c\u4e00\u6bb5 reverse, \u7b2c\u4e8c\u6bb5 reverse, \u7136\u540e\u5c06\u6574\u4e2a\u6570\u7ec4 reverse, \u8fd9\u6837\u7ecf\u8fc7\u4e09\u8f6e reverse\uff0c\u5c31\u5b8c\u6210\u4e86\u5faa\u73af\u53f3\u79fb\u3002\u65f6\u95f4\u590d\u6742\u5ea6",(0,a.kt)("inlineCode",{parentName:"p"},"O(n)"),"\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6",(0,a.kt)("inlineCode",{parentName:"p"},"O(1)"),"\u3002"),(0,a.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,a.kt)("h4",{id:"\u4e09\u8f6e-reverse"},"\u4e09\u8f6e reverse"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// Rotate Array\n// Time Complexity: O(n), Space Complexity: O(1)\npublic class Solution {\n    public void rotate(int[] nums, int k) {\n        k %= nums.length;\n        reverse(nums, 0, nums.length - k);\n        reverse(nums, nums.length - k, nums.length);\n        reverse(nums, 0, nums.length);\n    }\n    private static void reverse(int[] nums, int begin, int end) {\n        int left = begin;\n        int right = end - 1;\n        while (left < right) {\n            // swap\n            int tmp = nums[left];\n            nums[left] = nums[right];\n            nums[right] = tmp;\n            ++left;\n            --right;\n        }\n    }\n}\n")))}m.isMDXComponent=!0}}]);