"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[7515],{78950:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"binary-tree/bst/lca-of-bst","title":"LCA of BST","description":"\u63cf\u8ff0","source":"@site/docs/binary-tree/bst/lca-of-bst.md","sourceDirName":"binary-tree/bst","slug":"/binary-tree/bst/lca-of-bst","permalink":"/binary-tree/bst/lca-of-bst","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"LCA of BST"},"sidebar":"docs","previous":{"title":"Convert Sorted List to Binary Search Tree","permalink":"/binary-tree/bst/convert-sorted-list-to-binary-search-tree"},"next":{"title":"Kth Smallest Element in a BST","permalink":"/binary-tree/bst/kth-smallest-element-in-a-bst"}}');var r=t(74848),l=t(28453);const s={title:"LCA of BST"},i=void 0,a={},c=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u89e3\u6cd5 1 \u9012\u5f52",id:"\u89e3\u6cd5-1-\u9012\u5f52",level:3},{value:"\u89e3\u6cd5 2 \u8fed\u4ee3",id:"\u89e3\u6cd5-2-\u8fed\u4ee3",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}];function d(e){const n={a:"a",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,r.jsx)(n.p,{children:"Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"      _______6______\n       /              \\\n    ___2__          ___8__\n   /      \\        /      \\\n   1      _4       7       9\n         /  \\\n         3   5\n"})}),"\n",(0,r.jsx)(n.p,{children:"For example, the lowest common ancestor (LCA) of nodes 2 and 8 is 6. Another example is LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition."}),"\n",(0,r.jsx)(n.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,r.jsxs)(n.p,{children:["\u6839\u636e\u4e8c\u53c9\u641c\u7d22\u6811\u7684\u6027\u8d28\uff0c\u4e24\u4e2a\u5b50\u8282\u70b9",(0,r.jsx)(n.code,{children:"p"}),",",(0,r.jsx)(n.code,{children:"q"}),"\u548c\u6839\u8282\u70b9",(0,r.jsx)(n.code,{children:"root"}),"\u7684\u5173\u7cfb\uff0c\u6709\u4ee5\u4e0b\u56db\u79cd\u60c5\u51b5\uff1a"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u4e24\u4e2a\u5b50\u8282\u70b9\u90fd\u5728\u6811\u7684\u5de6\u5b50\u6811\u4e0a"}),"\n",(0,r.jsx)(n.li,{children:"\u4e24\u4e2a\u5b50\u8282\u70b9\u90fd\u5728\u6811\u7684\u53f3\u5b50\u6811\u4e0a"}),"\n",(0,r.jsx)(n.li,{children:"\u4e00\u4e2a\u5b50\u8282\u70b9\u5728\u5de6\u5b50\u6811\uff0c\u4e00\u4e2a\u5b50\u8282\u70b9\u5728\u53f3\u5b50\u6811"}),"\n",(0,r.jsx)(n.li,{children:"\u4e00\u4e2a\u5b50\u8282\u70b9\u7684\u503c\u548c\u6839\u8282\u70b9\u7684\u503c\u76f8\u7b49"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u4ee5\u9898\u76ee\u4e2d\u7684\u6811\u4e3a\u4f8b\uff0c\u8282\u70b9 1 \u548c\u8282\u70b9 4 \u4e3a\u60c5\u51b5 1\uff0c\u8282\u70b9 7 \u548c\u8282\u70b9 9 \u4e3a\u60c5\u51b5 2\uff0c\u8282\u70b9 1 \u548c\u8282\u70b9 7 \u4e3a\u60c5\u51b5 3\uff0c\u8282\u70b9 2 \u548c 4 \u4e3a\u60c5\u51b5 4\u3002\n\u82e5\u4e3a\u60c5\u51b5 3 \u6216 4\uff0c\u5f53\u524d\u8282\u70b9\u5373\u4e3a\u6700\u8fd1\u516c\u5171\u7956\u5148\uff0c\u82e5\u4e3a\u60c5\u51b5 1 \u6216 2\uff0c\u5219\u8fd8\u9700\u9012\u5f52\u5230\u5de6\u6216\u53f3\u5b50\u6811\u4e0a\uff0c\u7ee7\u7eed\u8fd9\u4e2a\u8fc7\u7a0b\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u8be5\u7b97\u6cd5\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a",(0,r.jsx)(n.code,{children:"O(h)"}),"\uff0c",(0,r.jsx)(n.code,{children:"h"}),"\u4e3a\u6811\u7684\u9ad8\u5ea6\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u89e3\u6cd5-1-\u9012\u5f52",children:"\u89e3\u6cd5 1 \u9012\u5f52"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"// LCA of BST\n// Time Complexity: O(h), Space Complexity: O(h)\npublic class Solution {\n    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {\n        if (root == null) return null;\n\n        if (Math.max(p.val, q.val) < root.val) {\n            return lowestCommonAncestor(root.left, p, q);\n        } else if (Math.min(p.val, q.val) > root.val) {\n            return lowestCommonAncestor(root.right, p, q);\n        } else {\n            return root;\n        }\n    }\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u89e3\u6cd5-2-\u8fed\u4ee3",children:"\u89e3\u6cd5 2 \u8fed\u4ee3"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"// LCA of BST\n// Time Complexity: O(h), Space Complexity: O(1)\npublic class Solution {\n    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {\n        while (root != null) {\n            if (Math.max(p.val, q.val) < root.val) {\n                root = root.left;\n            } else if (Math.min(p.val, q.val) > root.val) {\n                root = root.right;\n            } else {\n                return root;\n            }\n        }\n        return null;\n    }\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u76f8\u5173\u9898\u76ee",children:"\u76f8\u5173\u9898\u76ee"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/binary-tree/recursion/lowest-common-ancestor-of-a-binary-tree",children:"LCA of Binary Tree"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var o=t(96540);const r={},l=o.createContext(r);function s(e){const n=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(l.Provider,{value:n},e.children)}}}]);