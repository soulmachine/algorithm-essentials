"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[7291],{17730:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"dp/house-robber-iii","title":"House Robber III","description":"\u63cf\u8ff0","source":"@site/docs/dp/house-robber-iii.md","sourceDirName":"dp","slug":"/dp/house-robber-iii","permalink":"/en/dp/house-robber-iii","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"House Robber III"},"sidebar":"docs","previous":{"title":"House Robber II","permalink":"/en/dp/house-robber-ii"},"next":{"title":"Range Sum Query - Immutable","permalink":"/en/dp/range-sum-query-immutable"}}');var r=o(74848),i=o(28453);const s={title:"House Robber III"},l=void 0,d={},c=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}];function a(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,r.jsxs)(n.p,{children:["All houses in this place ",(0,r.jsx)(n.strong,{children:"forms a binary tree"}),". It will automatically contact the police if two directly-linked houses were broken into on the same night."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Example 1"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"     3\n    / \\\n   2   3\n    \\   \\\n     3   1\n"})}),"\n",(0,r.jsx)(n.p,{children:"Maximum amount of money the thief can rob = 3 + 3 + 1 = 7."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Example 2"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"     3\n    / \\\n   4   5\n  / \\   \\\n 1   3   1\n"})}),"\n",(0,r.jsx)(n.p,{children:"Maximum amount of money the thief can rob = 4 + 5 = 9."}),"\n",(0,r.jsx)(n.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,r.jsxs)(n.p,{children:["\u6811\u5f62\u52a8\u89c4\u3002\u8bbe\u72b6\u6001 ",(0,r.jsx)(n.code,{children:"f(root)"})," \u8868\u793a\u62a2\u52ab root \u4e3a\u6839\u8282\u70b9\u7684\u4e8c\u53c9\u6811\uff0croot \u53ef\u62a2\u4e5f\u53ef\u80fd\u4e0d\u62a2\uff0c\u80fd\u5f97\u5230\u7684\u6700\u5927\u91d1\u94b1\uff0c",(0,r.jsx)(n.code,{children:"g(root)"}),"\u8868\u793a\u62a2\u52ab root \u4e3a\u6839\u8282\u70b9\u7684\u4e8c\u53c9\u6811\uff0c\u4f46\u4e0d\u62a2 root\uff0c\u80fd\u5f97\u5230\u7684\u6700\u5927\u91d1\u94b1\uff0c\u5219\u72b6\u6001\u8f6c\u79fb\u65b9\u7a0b\u4e3a"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"f(root) = max{f(root.left) + f(root.right), g(root.left)+g(root.right) + root.val}"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"g(root) = f(root.left) + f(root.right)"})}),"\n",(0,r.jsx)(n.h3,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"// House Robber III\n// Time Complexity: O(n), Space Complexity: O(h)\npublic class Solution {\n    public int rob(TreeNode root) {\n        return dfs(root)[0];\n    }\n\n    private static int[] dfs(TreeNode root) {\n        int[] dp = new int[] {0, 0}; // f, g\n        if (root != null) {\n            int[] dpL = dfs(root.left);\n            int[] dpR = dfs(root.right);\n            dp[1] = dpL[0] + dpR[0];\n            dp[0] = Math.max(dp[1], dpL[1] + dpR[1] + root.val);\n        }\n        return dp;\n    }\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>l});var t=o(96540);const r={},i=t.createContext(r);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);