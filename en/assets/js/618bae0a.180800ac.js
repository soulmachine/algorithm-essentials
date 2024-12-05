"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[9529],{82424:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"dp/house-robber","title":"House Robber","description":"\u63cf\u8ff0","source":"@site/docs/dp/house-robber.md","sourceDirName":"dp","slug":"/dp/house-robber","permalink":"/en/dp/house-robber","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"House Robber"},"sidebar":"docs","previous":{"title":"Dungeon Game","permalink":"/en/dp/dungeon-game"},"next":{"title":"House Robber II","permalink":"/en/dp/house-robber-ii"}}');var i=t(74848),o=t(28453);const r={title:"House Robber"},l=void 0,a={},c=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u89e3\u6cd5 1",id:"\u89e3\u6cd5-1",level:3},{value:"\u89e3\u6cd5 2",id:"\u89e3\u6cd5-2",level:3}];function u(n){const e={code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,i.jsxs)(e.p,{children:["You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and ",(0,i.jsx)(e.strong,{children:"it will automatically contact the police if two adjacent houses were broken into on the same night"}),"."]}),"\n",(0,i.jsxs)(e.p,{children:["Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight ",(0,i.jsx)(e.strong,{children:"without alerting the police"}),"."]}),"\n",(0,i.jsx)(e.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,i.jsx)(e.p,{children:"\u8fd9\u662f\u4e00\u4e2a\u591a\u9636\u6bb5\u6700\u4f18\u5316\u95ee\u9898\uff0c\u4e14\u8981\u8d70\u5230\u6700\u5e95\u90e8\u624d\u80fd\u77e5\u9053\u7b54\u6848\uff0c\u56e0\u6b64\u5e7f\u641c\u6392\u9664\uff0c\u53ea\u5269\u4e0b\u8d2a\u5fc3\u548c\u52a8\u89c4\u3002\u8d2a\u5fc3\u660e\u663e\u8981\u6392\u9664\uff0c\u53ea\u5269\u4e0b\u52a8\u89c4\u3002"}),"\n",(0,i.jsxs)(e.p,{children:["\u8bbe\u72b6\u6001 ",(0,i.jsx)(e.code,{children:"f[i]"})," \u4e3a\u5230\u4f4d\u7f6e",(0,i.jsx)(e.code,{children:"i"}),"\u65f6\u80fd\u62a2\u5230\u7684\u91d1\u94b1\u6700\u5927\u548c\uff0c\u90a3\u4e48\u72b6\u6001\u8f6c\u79fb\u65b9\u7a0b\u5982\u4e0b\uff1a"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.code,{children:"f[i]=max(f[i-1], f[i-2] + nums[i])"})}),"\n",(0,i.jsxs)(e.p,{children:["\u5176\u542b\u4e49\u662f\uff0c\u5982\u679c\u4e0d\u9009\u62e9",(0,i.jsx)(e.code,{children:"i"}),"\uff0c\u5219\u62a2\u5230\u7684\u94b1\u662f",(0,i.jsx)(e.code,{children:"f[i-1]"}),"\uff0c\u5982\u679c\u9009\u62e9",(0,i.jsx)(e.code,{children:"i"}),"\uff0c\u5219\u80fd\u62a2\u5230\u7684\u94b1\u662f",(0,i.jsx)(e.code,{children:"f[i-2] + nums[i]"}),"\u3002"]}),"\n",(0,i.jsx)(e.h3,{id:"\u89e3\u6cd5-1",children:"\u89e3\u6cd5 1"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"// House Robber\n// Time Complexity: O(n), Space Complexity: O(n)\npublic class Solution {\n    public int rob(int[] nums) {\n        if (nums == null || nums.length == 0) return 0;\n        if (nums.length == 1) return nums[0];\n\n        int[] f = new int[nums.length];\n        f[0] = nums[0];\n        f[1] = Math.max(nums[0], nums[1]);\n\n        for (int i = 2; i < nums.length; ++i) {\n            f[i] = Math.max(f[i-1], f[i-2] + nums[i]);\n        }\n        return f[nums.length - 1];\n    }\n}\n"})}),"\n",(0,i.jsx)(e.h3,{id:"\u89e3\u6cd5-2",children:"\u89e3\u6cd5 2"}),"\n",(0,i.jsxs)(e.p,{children:["\u5728\u72b6\u6001\u8f6c\u79fb\u65b9\u7a0b\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u53d1\u73b0 ",(0,i.jsx)(e.code,{children:"f[i]"}),"\u4ec5\u4ec5\u4f9d\u8d56\u524d\u4e24\u9879\uff0c\u56e0\u6b64\u7528\u4e24\u4e2a\u6574\u6570\u53d8\u91cf\u5373\u53ef\u4ee3\u66ff\u4e00\u4f4d\u6570\u7ec4\uff0c\u5c06\u7a7a\u95f4\u590d\u6742\u5ea6\u964d\u4e3a",(0,i.jsx)(e.code,{children:"O(1)"}),"\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"// House Robber\n// Time Complexity: O(n), Space Complexity: O(1)\npublic class Solution {\n    public int rob(int[] nums) {\n        if (nums == null || nums.length == 0) return 0;\n        if (nums.length == 1) return nums[0];\n\n        int even = nums[0];\n        int odd = Math.max(nums[0], nums[1]);\n\n        for (int i = 2; i < nums.length; ++i) {\n            if (i % 2 == 0) {\n                even = Math.max(even + nums[i], odd);\n            } else {\n                odd = Math.max(odd + nums[i], even);\n            }\n        }\n        return Math.max(even, odd);\n    }\n}\n"})})]})}function d(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>l});var s=t(96540);const i={},o=s.createContext(i);function r(n){const e=s.useContext(o);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),s.createElement(o.Provider,{value:e},n.children)}}}]);