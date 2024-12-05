"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[6952],{11134:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"bfs/tree/binary-tree-vertical-order-traversal","title":"Binary Tree Vertical Order Traversal","description":"\u63cf\u8ff0","source":"@site/docs/bfs/tree/binary-tree-vertical-order-traversal.md","sourceDirName":"bfs/tree","slug":"/bfs/tree/binary-tree-vertical-order-traversal","permalink":"/en/bfs/tree/binary-tree-vertical-order-traversal","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Binary Tree Vertical Order Traversal"},"sidebar":"docs","previous":{"title":"Binary Tree Level Order Traversal II","permalink":"/en/bfs/tree/binary-tree-level-order-traversal-ii"},"next":{"title":"Binary Tree Zigzag Level Order Traversal","permalink":"/en/bfs/tree/binary-tree-zigzag-level-order-traversal"}}');var a=t(74848),s=t(28453);const i={title:"Binary Tree Vertical Order Traversal"},l=void 0,o={},c=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}];function d(e){const r={code:"code",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,a.jsx)(r.p,{children:"TODO"}),"\n",(0,a.jsx)(r.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,a.jsxs)(r.p,{children:["\u8bbe\u6839\u8282\u70b9\u7684\u4f4d\u7f6e\u4e3a0\uff0c\u5bf9\u4e8e\u4efb\u4e00\u975e\u53f6\u5b50\u8282\u70b9\uff0c\u82e5\u5176\u4f4d\u7f6e\u4e3a",(0,a.jsx)(r.code,{children:"x"}),"\uff0c\u8bbe\u5176\u5de6\u513f\u5b50\u7684\u4f4d\u7f6e\u4e3a",(0,a.jsx)(r.code,{children:"x-1"}),"\uff0c\u53f3\u513f\u5b50\u4f4d\u7f6e\u4e3a",(0,a.jsx)(r.code,{children:"x+1"}),"\u3002\u6309\u7167\u4ee5\u4e0a\u89c4\u5219bfs\u904d\u5386\u6574\u68f5\u6811\u7edf\u8ba1\u6240\u6709\u8282\u70b9\u7684\u4f4d\u7f6e\uff0c\u7136\u540e\u6309\u4f4d\u7f6e\u4ece\u5c0f\u5230\u5927\u8f93\u51fa\u6240\u6709\u8282\u70b9\u3002"]}),"\n",(0,a.jsx)(r.h3,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-cpp",children:"// Binary Tree Vertical Order Traversal\n// Time complexity: O(nlogn)\n// Space complexity: O(n)\nclass Solution {\npublic:\n    vector<vector<int>> verticalOrder(TreeNode* root) {\n        vector<vector<int>> result;\n        if (!root) return result;\n\n        map<int, vector<int>> m;\n        queue<pair<int, TreeNode*>> q;\n        q.push({0, root});\n        while (!q.empty()) {\n            auto a = q.front(); q.pop();\n            m[a.first].push_back(a.second->val);\n            if (a.second->left) q.push({a.first - 1, a.second->left});\n            if (a.second->right) q.push({a.first + 1, a.second->right});\n        }\n        for (auto a : m) {\n            result.push_back(a.second);\n        }\n        return result;\n    }\n};\n"})})]})}function u(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>l});var n=t(96540);const a={},s=n.createContext(a);function i(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);