"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[1900],{33338:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"bfs/tree/binary-tree-level-order-traversal","title":"Binary Tree Level Order Traversal","description":"\u63cf\u8ff0","source":"@site/docs/bfs/tree/binary-tree-level-order-traversal.md","sourceDirName":"bfs/tree","slug":"/bfs/tree/binary-tree-level-order-traversal","permalink":"/en/bfs/tree/binary-tree-level-order-traversal","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Binary Tree Level Order Traversal"},"sidebar":"docs","previous":{"title":"\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22","permalink":"/en/bfs/"},"next":{"title":"Binary Tree Level Order Traversal II","permalink":"/en/bfs/tree/binary-tree-level-order-traversal-ii"}}');var l=n(74848),a=n(28453),s=n(11470),o=n(19365);const i={title:"Binary Tree Level Order Traversal"},u=void 0,c={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u8fed\u4ee3\u7248",id:"\u8fed\u4ee3\u7248",level:3},{value:"\u9012\u5f52\u7248",id:"\u9012\u5f52\u7248",level:4},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}];function v(e){const r={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,l.jsx)(r.p,{children:"Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level)."}),"\n",(0,l.jsxs)(r.p,{children:["For example:\nGiven binary tree ",(0,l.jsx)(r.code,{children:"{3,9,20,#,#,15,7}"}),","]}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{children:"    3\n   / \\\n  9  20\n    /  \\\n   15   7\n"})}),"\n",(0,l.jsx)(r.p,{children:"return its level order traversal as:"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{children:"[\n  [3],\n  [9,20],\n  [15,7]\n]\n"})}),"\n",(0,l.jsx)(r.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,l.jsx)(r.p,{children:"\u4ece\u9898\u76ee\u6240\u6c42\u7684\u76ee\u6807\u6765\u770b\uff0c\u6beb\u65e0\u7591\u95ee\u7528\u5e7f\u641c\u3002"}),"\n",(0,l.jsx)(r.h3,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n",(0,l.jsx)(r.h3,{id:"\u8fed\u4ee3\u7248",children:"\u8fed\u4ee3\u7248"}),"\n","\n",(0,l.jsxs)(s.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,l.jsx)(o.A,{value:"java",children:(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-java",children:"// Binary Tree Level Order Traversal\n// \u8fed\u4ee3\u7248\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public List<List<Integer>> levelOrder(TreeNode root) {\n        List<List<Integer>> result = new ArrayList<>();\n        Queue<TreeNode> current = new LinkedList<>();\n        Queue<TreeNode> next = new LinkedList<>();\n\n        if(root != null) {\n            current.offer(root);\n        }\n\n        while (!current.isEmpty()) {\n            ArrayList<Integer> level = new ArrayList<>(); // elments in one level\n            while (!current.isEmpty()) {\n                TreeNode node = current.poll();\n                level.add(node.val);\n                if (node.left != null) next.add(node.left);\n                if (node.right != null) next.add(node.right);\n            }\n            result.add(level);\n            // swap\n            Queue<TreeNode> tmp = current;\n            current = next;\n            next = tmp;\n        }\n        return result;\n    }\n}\n"})})}),(0,l.jsx)(o.A,{value:"cpp",children:(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-cpp",children:"// Binary Tree Level Order Traversal\n// \u8fed\u4ee3\u7248\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    vector<vector<int> > levelOrder(TreeNode *root) {\n        vector<vector<int> > result;\n        queue<TreeNode*> current, next;\n\n        if(root != nullptr) {\n            current.push(root);\n        }\n\n        while (!current.empty()) {\n            vector<int> level; // elments in one level\n            while (!current.empty()) {\n                TreeNode* node = current.front();\n                current.pop();\n                level.push_back(node->val);\n                if (node->left != nullptr) next.push(node->left);\n                if (node->right != nullptr) next.push(node->right);\n            }\n            result.push_back(level);\n            swap(next, current);\n        }\n        return result;\n    }\n};\n"})})})]}),"\n",(0,l.jsx)(r.h4,{id:"\u9012\u5f52\u7248",children:"\u9012\u5f52\u7248"}),"\n",(0,l.jsxs)(s.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,l.jsx)(o.A,{value:"java",children:(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-java",children:"// Binary Tree Level Order Traversal\n// \u9012\u5f52\u7248\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\npublic class Solution {\n    public List<List<Integer>> levelOrder(TreeNode root) {\n        List<List<Integer>> result = new ArrayList<>();\n        traverse(root, 1, result);\n        return result;\n    }\n\n    void traverse(TreeNode root, int level,\n                  List<List<Integer>> result) {\n        if (root == null) return;\n\n        if (level > result.size())\n            result.add(new ArrayList<>());\n\n        result.get(level-1).add(root.val);\n        traverse(root.left, level+1, result);\n        traverse(root.right, level+1, result);\n    }\n}\n"})})}),(0,l.jsx)(o.A,{value:"cpp",children:(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-cpp",children:"// Binary Tree Level Order Traversal\n// \u9012\u5f52\u7248\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\npublic:\n    vector<vector<int> > levelOrder(TreeNode *root) {\n        vector<vector<int>> result;\n        traverse(root, 1, result);\n        return result;\n    }\n\n    void traverse(TreeNode *root, size_t level, vector<vector<int>> &result) {\n        if (!root) return;\n\n        if (level > result.size())\n            result.push_back(vector<int>());\n\n        result[level-1].push_back(root->val);\n        traverse(root->left, level+1, result);\n        traverse(root->right, level+1, result);\n    }\n};\n"})})})]}),"\n",(0,l.jsx)(r.h3,{id:"\u76f8\u5173\u9898\u76ee",children:"\u76f8\u5173\u9898\u76ee"}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.a,{href:"/en/bfs/tree/binary-tree-level-order-traversal-ii",children:"Binary Tree Level Order Traversal II"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.a,{href:"/en/bfs/tree/binary-tree-zigzag-level-order-traversal",children:"Binary Tree Zigzag Level Order Traversal"})}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,l.jsx)(r,{...e,children:(0,l.jsx)(v,{...e})}):v(e)}},19365:(e,r,n)=>{n.d(r,{A:()=>s});n(96540);var t=n(34164);const l={tabItem:"tabItem_Ymn6"};var a=n(74848);function s(e){let{children:r,hidden:n,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.A)(l.tabItem,s),hidden:n,children:r})}},11470:(e,r,n)=>{n.d(r,{A:()=>T});var t=n(96540),l=n(34164),a=n(23104),s=n(56347),o=n(205),i=n(57485),u=n(31682),c=n(70679);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function v(e){const{values:r,children:n}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:n,attributes:t,default:l}}=e;return{value:r,label:n,attributes:t,default:l}}))}(n);return function(e){const r=(0,u.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function h(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function p(e){let{queryString:r=!1,groupId:n}=e;const l=(0,s.W6)(),a=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,i.aZ)(a),(0,t.useCallback)((e=>{if(!a)return;const r=new URLSearchParams(l.location.search);r.set(a,e),l.replace({...l.location,search:r.toString()})}),[a,l])]}function f(e){const{defaultValue:r,queryString:n=!1,groupId:l}=e,a=v(e),[s,i]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:a}))),[u,d]=p({queryString:n,groupId:l}),[f,b]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[l,a]=(0,c.Dv)(n);return[l,(0,t.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:l}),m=(()=>{const e=u??f;return h({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{m&&i(m)}),[m]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,a]),tabValues:a}}var b=n(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(74848);function g(e){let{className:r,block:n,selectedValue:t,selectValue:s,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.a_)(),c=e=>{const r=e.currentTarget,n=i.indexOf(r),l=o[n].value;l!==t&&(u(r),s(l))},d=e=>{let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;r=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;r=i[n]??i[i.length-1];break}}r?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},r),children:o.map((e=>{let{value:r,label:n,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>i.push(e),onKeyDown:d,onClick:c,...a,className:(0,l.A)("tabs__item",m.tabItem,a?.className,{"tabs__item--active":t===r}),children:n??r},r)}))})}function j(e){let{lazy:r,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=s.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==a})))})}function y(e){const r=f(e);return(0,x.jsxs)("div",{className:(0,l.A)("tabs-container",m.tabList),children:[(0,x.jsx)(g,{...r,...e}),(0,x.jsx)(j,{...r,...e})]})}function T(e){const r=(0,b.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(r))}},28453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>o});var t=n(96540);const l={},a=t.createContext(l);function s(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);