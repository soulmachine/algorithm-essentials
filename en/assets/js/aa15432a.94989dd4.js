"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[9663],{31731:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"binary-tree/recursion/path-sum-ii","title":"Path Sum II","description":"\u63cf\u8ff0","source":"@site/docs/binary-tree/recursion/path-sum-ii.md","sourceDirName":"binary-tree/recursion","slug":"/binary-tree/recursion/path-sum-ii","permalink":"/en/binary-tree/recursion/path-sum-ii","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Path Sum II"},"sidebar":"docs","previous":{"title":"Path Sum","permalink":"/en/binary-tree/recursion/path-sum"},"next":{"title":"Binary Tree Maximum Path Sum","permalink":"/en/binary-tree/recursion/binary-tree-maximum-path-sum"}}');var a=r(74848),l=r(28453),u=r(11470),o=r(19365);const s={title:"Path Sum II"},i=void 0,c={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}];function p(e){const t={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,a.jsx)(t.p,{children:"Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum."}),"\n",(0,a.jsxs)(t.p,{children:["For example:\nGiven the below binary tree and ",(0,a.jsx)(t.code,{children:"sum = 22"}),","]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"          5\n         / \\\n        4   8\n       /   / \\\n      11  13  4\n     /  \\    / \\\n    7    2  5   1\n"})}),"\n",(0,a.jsx)(t.p,{children:"return"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"[\n   [5,4,11,2],\n   [5,8,4,5]\n]\n"})}),"\n",(0,a.jsx)(t.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,a.jsx)(t.p,{children:"\u8ddf\u4e0a\u4e00\u9898\u76f8\u6bd4\uff0c\u672c\u9898\u662f\u6c42\u8def\u5f84\u672c\u8eab\u3002\u4e14\u8981\u6c42\u51fa\u6240\u6709\u7ed3\u679c\uff0c\u5de6\u5b50\u6811\u6c42\u5230\u4e86\u6ee1\u610f\u7ed3\u679c\uff0c\u4e0d\u80fd return\uff0c\u8981\u63a5\u7740\u6c42\u53f3\u5b50\u6811\u3002"}),"\n",(0,a.jsx)(t.h3,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n","\n",(0,a.jsxs)(u.A,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,a.jsx)(o.A,{value:"java",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:"// Path Sum II\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(logn)\npublic class Solution {\n    public List<List<Integer>> pathSum(TreeNode root, int sum) {\n        List<List<Integer>> result = new ArrayList<>();\n        ArrayList<Integer>  cur = new ArrayList<>(); // \u4e2d\u95f4\u7ed3\u679c\n        pathSum(root, sum, cur, result);\n        return result;\n    }\n    private static void pathSum(TreeNode root, int gap, ArrayList<Integer> cur,\n                                List<List<Integer>> result) {\n        if (root == null) return;\n\n        cur.add(root.val);\n\n        if (root.left == null && root.right == null) { // leaf\n            if (gap == root.val)\n                result.add(new ArrayList<>(cur));\n        }\n        pathSum(root.left, gap - root.val, cur, result);\n        pathSum(root.right, gap - root.val, cur, result);\n\n        cur.remove(cur.size() - 1);\n    }\n}\n"})})}),(0,a.jsx)(o.A,{value:"cpp",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cpp",children:"// Path Sum II\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(logn)\nclass Solution {\npublic:\n    vector<vector<int> > pathSum(TreeNode *root, int sum) {\n        vector<vector<int> > result;\n        vector<int> cur; // \u4e2d\u95f4\u7ed3\u679c\n        pathSum(root, sum, cur, result);\n        return result;\n    }\nprivate:\n    void pathSum(TreeNode *root, int gap, vector<int> &cur,\n            vector<vector<int> > &result) {\n        if (root == nullptr) return;\n\n        cur.push_back(root->val);\n\n        if (root->left == nullptr && root->right == nullptr) { // leaf\n            if (gap == root->val)\n                result.push_back(cur);\n        }\n        pathSum(root->left, gap - root->val, cur, result);\n        pathSum(root->right, gap - root->val, cur, result);\n\n        cur.pop_back();\n    }\n};\n"})})}),(0,a.jsx)(o.A,{value:"python",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"# Path Sum II\n# \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(logn)\nclass Solution:\n    def pathSum(self, root, sum):\n        result = []\n        cur = []  # \u4e2d\u95f4\u7ed3\u679c\n        self._pathSum(root, sum, cur, result)\n        return result\n\n    def _pathSum(self, root, gap, cur, result):\n        if not root:\n            return\n\n        cur.append(root.val)\n\n        if not root.left and not root.right:  # leaf\n            if gap == root.val:\n                result.append(cur[:])\n\n        self._pathSum(root.left, gap - root.val, cur, result)\n        self._pathSum(root.right, gap - root.val, cur, result)\n\n        cur.pop()\n"})})})]}),"\n",(0,a.jsx)(t.h3,{id:"\u76f8\u5173\u9898\u76ee",children:"\u76f8\u5173\u9898\u76ee"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/en/binary-tree/recursion/path-sum",children:"Path Sum"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>u});r(96540);var n=r(34164);const a={tabItem:"tabItem_Ymn6"};var l=r(74848);function u(e){let{children:t,hidden:r,className:u}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,u),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>S});var n=r(96540),a=r(34164),l=r(23104),u=r(56347),o=r(205),s=r(57485),i=r(31682),c=r(70679);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,i.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const a=(0,u.W6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s.aZ)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,l=p(e),[u,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[i,d]=m({queryString:r,groupId:a}),[f,v]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:a}),b=(()=>{const e=i??f;return h({value:e,tabValues:l})?e:null})();(0,o.A)((()=>{b&&s(b)}),[b]);return{selectedValue:u,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),v(e)}),[d,v,l]),tabValues:l}}var v=r(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(74848);function x(e){let{className:t,block:r,selectedValue:n,selectValue:u,tabValues:o}=e;const s=[],{blockElementScrollPositionUntilNextRender:i}=(0,l.a_)(),c=e=>{const t=e.currentTarget,r=s.indexOf(t),a=o[r].value;a!==n&&(i(t),u(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=s.indexOf(e.currentTarget)+1;t=s[r]??s[0];break}case"ArrowLeft":{const r=s.indexOf(e.currentTarget)-1;t=s[r]??s[s.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:o.map((e=>{let{value:t,label:r,attributes:l}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>s.push(e),onKeyDown:d,onClick:c,...l,className:(0,a.A)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function y(e){let{lazy:t,children:r,selectedValue:l}=e;const u=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=u.find((e=>e.props.value===l));return e?(0,n.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:u.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function j(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,g.jsx)(x,{...t,...e}),(0,g.jsx)(y,{...t,...e})]})}function S(e){const t=(0,v.A)();return(0,g.jsx)(j,{...e,children:d(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>u,x:()=>o});var n=r(96540);const a={},l=n.createContext(a);function u(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:u(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);