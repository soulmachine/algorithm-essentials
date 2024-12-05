"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[5832],{848:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>l,default:()=>a,frontMatter:()=>d,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"greedy/patching-array","title":"Patching Array","description":"\u63cf\u8ff0","source":"@site/docs/greedy/patching-array.md","sourceDirName":"greedy","slug":"/greedy/patching-array","permalink":"/en/greedy/patching-array","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Patching Array"},"sidebar":"docs","previous":{"title":"Longest Substring Without Repeating Characters","permalink":"/en/greedy/longest-substring-without-repeating-characters"},"next":{"title":"Task Scheduler","permalink":"/en/greedy/task-scheduler"}}');var c=s(74848),r=s(28453);const d={title:"Patching Array"},l=void 0,t={},o=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}];function h(e){const n={a:"a",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,c.jsxs)(n.p,{children:["Given a sorted positive integer array ",(0,c.jsx)(n.code,{children:"nums"})," and an integer ",(0,c.jsx)(n.code,{children:"n"}),", add/patch elements to the array such that any number in range ",(0,c.jsx)(n.code,{children:"[1, n]"})," inclusive can be formed by the sum of some elements in the array. Return the minimum number of patches required."]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Example 1"}),":"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"nums = [1, 3], n = 6"}),", return 1."]}),"\n",(0,c.jsxs)(n.p,{children:["Combinations of ",(0,c.jsx)(n.code,{children:"nums"})," are ",(0,c.jsx)(n.code,{children:"[1], [3], [1,3]"}),", which form possible sums of: ",(0,c.jsx)(n.code,{children:"1, 3, 4"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:["Now if we add/patch ",(0,c.jsx)(n.code,{children:"2"})," to nums, the combinations are: ",(0,c.jsx)(n.code,{children:"[1], [2], [3], [1,3], [2,3], [1,2,3]"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:["Possible sums are ",(0,c.jsx)(n.code,{children:"1, 2, 3, 4, 5, 6"}),", which now covers the range ",(0,c.jsx)(n.code,{children:"[1, 6]"}),"."]}),"\n",(0,c.jsx)(n.p,{children:"So we only need 1 patch."}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Example 2"}),":"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"nums = [1, 5, 10], n = 20"}),", return ",(0,c.jsx)(n.code,{children:"2"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:["The two patches can be ",(0,c.jsx)(n.code,{children:"[2, 4]"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Example 3"}),":"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"nums = [1, 2, 2], n = 5"}),",  return 0."]}),"\n",(0,c.jsx)(n.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,c.jsx)(n.p,{children:"\u9996\u5148\u53ef\u4ee5\u786e\u5b9a\u7684\u662f\uff0c"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"nums"}),"\u4e2d\u5fc5\u7136\u5305\u542b1\uff0c\u5982\u679c\u4e0d\u5305\u542b1\uff0c\u90a3\u4e48",(0,c.jsx)(n.code,{children:"[1,n]"}),"\u8fd9\u4e2a\u8303\u56f4\u4e2d\u76841\u5c31\u6ca1\u6cd5\u5b9e\u73b0"]}),"\n",(0,c.jsx)(n.li,{children:"\u5176\u6b21\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\u4e0d\u80fd\u91cd\u590d\u4f7f\u7528\uff0c\u5982\u679c\u5141\u8bb8\u91cd\u590d\u4f7f\u7528\uff0c\u90a3\u4e48\u628a1\u91cd\u590d\u591a\u6b21\uff0c\u5c31\u53ef\u4ee5\u7ec4\u6210\u4efb\u610f\u6574\u6570\u3002"}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["\u4ee4",(0,c.jsx)(n.code,{children:"miss"}),"\u4e3a",(0,c.jsx)(n.code,{children:"[0,n]"}),"\u4e2d\u7f3a\u5c11\u7684\u6700\u5c0f\u6574\u6570\uff0c\u610f\u5473\u7740\u6211\u4eec\u53ef\u4ee5\u5b9e\u73b0",(0,c.jsx)(n.code,{children:"[0,miss)"}),"\u8303\u56f4\u5185\u7684\u4efb\u610f\u6574\u6570\u3002"]}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["\u5982\u679c\u6570\u7ec4\u4e2d\u6709\u67d0\u4e2a\u6574\u6570",(0,c.jsx)(n.code,{children:"x<=miss"}),", \u90a3\u4e48\u6211\u4eec\u53ef\u4ee5\u628a",(0,c.jsx)(n.code,{children:"[0,miss)"}),"\u533a\u95f4\u7684\u6240\u6709\u6574\u6570\u52a0\u4e0a",(0,c.jsx)(n.code,{children:"x"}),"\uff0c\u533a\u95f4\u53d8\u6210\u4e86",(0,c.jsx)(n.code,{children:"[x, miss+x)"}),"\uff0c\u7531\u4e8e\u533a\u95f4",(0,c.jsx)(n.code,{children:"[0,miss)"}),"\u548c",(0,c.jsx)(n.code,{children:"[x, miss+x)"}),"\u91cd\u53e0\uff0c\u4e24\u4e2a\u533a\u95f4\u53ef\u4ee5\u65e0\u7f1d\u8fde\u63a5\u8d77\u6765\uff0c\u610f\u5473\u7740\u6211\u4eec\u53ef\u4ee5\u628a\u533a\u95f4",(0,c.jsx)(n.code,{children:"[0,miss)"}),"\u6269\u5c55\u5230",(0,c.jsx)(n.code,{children:"[0, miss+x)"}),"\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u5982\u679c\u6570\u7ec4\u4e2d\u4e0d\u5b58\u5728\u5c0f\u4e8e\u6216\u7b49\u4e8e",(0,c.jsx)(n.code,{children:"miss"}),"\u7684\u5143\u7d20\uff0c\u5219\u533a\u95f4",(0,c.jsx)(n.code,{children:"[0,miss)"}),"\u548c",(0,c.jsx)(n.code,{children:"[x, miss+x)"})," \u8131\u8282\u4e86\uff0c\u8fde\u4e0d\u8d77\u6765\u3002\u6b64\u65f6\u6211\u4eec\u9700\u8981\u6dfb\u52a0\u4e00\u4e2a\u6570\uff0c\u6700\u5927\u9650\u5ea6\u7684\u6269\u5c55\u533a\u95f4",(0,c.jsx)(n.code,{children:"[0, miss)"}),"\u3002\u90a3\u6dfb\u52a0\u54ea\u4e2a\u6570\u5462\uff1f\u5f53\u7136\u662f\u6dfb\u52a0",(0,c.jsx)(n.code,{children:"miss"}),"\u672c\u8eab\uff0c\u8fd9\u6837\u533a\u95f4",(0,c.jsx)(n.code,{children:"[0,miss)"}),"\u548c",(0,c.jsx)(n.code,{children:"[miss, miss+miss)"}),"\u6070\u597d\u53ef\u4ee5\u65e0\u7f1d\u62fc\u63a5\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u4ee4",(0,c.jsx)(n.code,{children:"nums=[1, 2, 4, 13, 43]"}),", ",(0,c.jsx)(n.code,{children:"n=100"}),"\uff0c\u6211\u4eec\u9700\u8981\u8ba9",(0,c.jsx)(n.code,{children:"[1,100]"}),"\u5185\u7684\u6570\u90fd\u80fd\u591f\u7ec4\u5408\u51fa\u6765\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u4f7f\u7528\u6570\u5b57",(0,c.jsx)(n.code,{children:"1,2,4"}),"\uff0c\u6211\u4eec\u53ef\u4ee5\u7ec4\u5408\u51fa",(0,c.jsx)(n.code,{children:"[0, 8)"}),"\u5185\u7684\u6240\u6709\u6570\uff0c\u4f46\u65e0\u6cd5\u7ec4\u5408\u51fa8\uff0c\u7531\u4e8e\u4e0b\u4e00\u4e2a\u6570\u662f13\uff0c\u6bd48\u5927\uff0c\u6839\u636e\u89c4\u52192\uff0c\u6211\u4eec\u6dfb\u52a08\uff0c\u628a\u533a\u95f4\u4ece",(0,c.jsx)(n.code,{children:"[0,8)"}),"\u6269\u5c55\u5230",(0,c.jsx)(n.code,{children:"[0,16)"}),"\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0b\u4e00\u4e2a\u6570\u662f13\uff0c\u6bd416\u5c0f\uff0c\u6839\u636e\u89c4\u52191\uff0c\u6211\u4eec\u53ef\u4ee5\u628a\u533a\u95f4\u4ece",(0,c.jsx)(n.code,{children:"[0,16)"}),"\u6269\u5c55\u5230",(0,c.jsx)(n.code,{children:"[0,29)"}),"\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0b\u4e00\u4e2a\u6570\u662f43\uff0c\u6bd429\u5927\uff0c\u6839\u636e\u89c4\u52192\uff0c\u6dfb\u52a029\uff0c\u628a\u533a\u95f4\u4ece",(0,c.jsx)(n.code,{children:"[0,29)"}),"\u6269\u5927\u5230",(0,c.jsx)(n.code,{children:"[0,58)"}),"\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u7531\u4e8e43\u6bd458\u5c0f\uff0c\u6839\u636e\u89c4\u52191\uff0c\u53ef\u4ee5\u628a\u533a\u95f4\u4ece",(0,c.jsx)(n.code,{children:"[0,58)"}),"\u6269\u5c55\u5230",(0,c.jsx)(n.code,{children:"[0,101)"}),"\uff0c\u521a\u597d\u8986\u76d6\u4e86",(0,c.jsx)(n.code,{children:"[1,100]"}),"\u5185\u7684\u6240\u6709\u6570\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u6700\u7ec8\u7ed3\u679c\u662f\u6dfb\u52a02\u4e2a\u6570\uff0c8\u548c29\uff0c\u5c31\u53ef\u4ee5\u7ec4\u5408\u51fa",(0,c.jsx)(n.code,{children:"[1,100]"}),"\u5185\u7684\u6240\u6709\u6574\u6570\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u53c2\u8003\u8d44\u6599\uff1a[",(0,c.jsx)(n.a,{href:"https://leetcode.com/discuss/82822/solution-explanation%5Durl(",children:"https://leetcode.com/discuss/82822/solution-explanation]url("}),(0,c.jsx)(n.a,{href:"https://leetcode.com/discuss/82822/solution-explanation",children:"https://leetcode.com/discuss/82822/solution-explanation"}),")"]}),"\n",(0,c.jsx)(n.h3,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-java",children:"// Patching Array\n// Time complexity: O(n), Space complexity: O(1)\npublic class Solution {\n    public int minPatches(int[] nums, int n) {\n        long miss = 1;\n        int added = 0;\n        int i = 0;\n        while (miss <= n) {\n            if (i < nums.length && nums[i] <= miss) {\n                miss += nums[i++];\n            } else {\n                miss += miss;\n                ++added;\n            }\n        }\n        return added;\n    }\n}\n"})})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>l});var i=s(96540);const c={},r=i.createContext(c);function d(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);