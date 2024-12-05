"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[7008],{77224:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"array/rotate-array","title":"Rotate Array","description":"\u63cf\u8ff0","source":"@site/docs/array/rotate-array.md","sourceDirName":"array","slug":"/array/rotate-array","permalink":"/array/rotate-array","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Rotate Array"},"sidebar":"docs","previous":{"title":"Majority Element II","permalink":"/array/majority-element-ii"},"next":{"title":"Contains Duplicate","permalink":"/array/contains-duplicate"}}');var s=r(74848),i=r(28453);const a={title:"Rotate Array"},o=void 0,c={},l=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u4e09\u8f6e reverse",id:"\u4e09\u8f6e-reverse",level:4}];function d(e){const n={code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,s.jsxs)(n.p,{children:["Rotate an array of ",(0,s.jsx)(n.code,{children:"n"})," elements to the right by ",(0,s.jsx)(n.code,{children:"k"})," steps."]}),"\n",(0,s.jsxs)(n.p,{children:["For example, with ",(0,s.jsx)(n.code,{children:"n = 7"})," and ",(0,s.jsx)(n.code,{children:"k = 3"}),", the array ",(0,s.jsx)(n.code,{children:"[1,2,3,4,5,6,7]"})," is rotated to ",(0,s.jsx)(n.code,{children:"[5,6,7,1,2,3,4]"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Note:\nTry to come up as many solutions as you can, there are at least 3 different ways to solve this problem."}),"\n",(0,s.jsx)(n.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,s.jsxs)(n.p,{children:["\u6700\u7b80\u5355\u7684\u65b9\u6cd5\uff0c\u5f00\u4e00\u4e2a",(0,s.jsx)(n.code,{children:"k"}),"\u957f\u7684\u6570\u7ec4\uff0c\u5148\u628a\u53f3\u8fb9",(0,s.jsx)(n.code,{children:"k"}),"\u4e2a\u5143\u7d20\u5b58\u5165\u8fd9\u4e2a\u4e34\u65f6\u6570\u7ec4\uff0c\u7136\u540e\u628a\u6570\u7ec4\u4e2d\u7684\u524d",(0,s.jsx)(n.code,{children:"n-k"}),"\u53f3\u79fb",(0,s.jsx)(n.code,{children:"k"}),"\u4f4d\uff0c\u518d\u628a\u4e34\u65f6\u6570\u7ec4\u7684",(0,s.jsx)(n.code,{children:"k"}),"\u4e2a\u5143\u7d20\u5b58\u5165\u5230\u539f\u59cb\u6570\u7ec4\u5de6\u8fb9\u3002\u65f6\u95f4\u590d\u6742\u5ea6",(0,s.jsx)(n.code,{children:"O(n)"}),"\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6",(0,s.jsx)(n.code,{children:"O(k)"}),"\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u7b2c\u4e8c\u4e2a\u7b80\u5355\u7684\u65b9\u6cd5\uff0c\u5148\u5b9e\u73b0\u4e00\u4e2a\u51fd\u6570\uff0c\u628a\u6570\u7ec4\u53f3\u79fb\u4e00\u4f4d\uff0c\u8c03\u7528\u8fd9\u4e2a\u51fd\u6570",(0,s.jsx)(n.code,{children:"k"}),"\u6b21\u5373\u53ef\u3002\u65f6\u95f4\u590d\u6742\u5ea6",(0,s.jsx)(n.code,{children:"O(n*k)"}),"\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6",(0,s.jsx)(n.code,{children:"O(1)"}),"\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u7b2c\u4e09\u4e2a\u65b9\u6cd5\uff0c\u5148\u5c06\u6570\u7ec4\u5206\u4e3a\u4e24\u6bb5\uff0c\u524d",(0,s.jsx)(n.code,{children:"n-k"}),"\u4e2a\u4e3a\u4e00\u6bb5\uff0c\u540e",(0,s.jsx)(n.code,{children:"k"}),"\u4e2a\u5143\u7d20\u4f5c\u4e3a\u7b2c\u4e8c\u6bb5\uff0c\u5c06\u7b2c\u4e00\u6bb5 reverse, \u7b2c\u4e8c\u6bb5 reverse, \u7136\u540e\u5c06\u6574\u4e2a\u6570\u7ec4 reverse, \u8fd9\u6837\u7ecf\u8fc7\u4e09\u8f6e reverse\uff0c\u5c31\u5b8c\u6210\u4e86\u5faa\u73af\u53f3\u79fb\u3002\u65f6\u95f4\u590d\u6742\u5ea6",(0,s.jsx)(n.code,{children:"O(n)"}),"\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6",(0,s.jsx)(n.code,{children:"O(1)"}),"\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n",(0,s.jsx)(n.h4,{id:"\u4e09\u8f6e-reverse",children:"\u4e09\u8f6e reverse"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"// Rotate Array\n// Time Complexity: O(n), Space Complexity: O(1)\npublic class Solution {\n    public void rotate(int[] nums, int k) {\n        k %= nums.length;\n        reverse(nums, 0, nums.length - k);\n        reverse(nums, nums.length - k, nums.length);\n        reverse(nums, 0, nums.length);\n    }\n    private static void reverse(int[] nums, int begin, int end) {\n        int left = begin;\n        int right = end - 1;\n        while (left < right) {\n            // swap\n            int tmp = nums[left];\n            nums[left] = nums[right];\n            nums[right] = tmp;\n            ++left;\n            --right;\n        }\n    }\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>o});var t=r(96540);const s={},i=t.createContext(s);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);