"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[6351],{96828:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>s,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"binary-tree/construction/construct-binary-tree-from-preorder-and-inorder-traversal","title":"Construct Binary Tree from Preorder and Inorder Traversal","description":"\u63cf\u8ff0","source":"@site/docs/binary-tree/construction/construct-binary-tree-from-preorder-and-inorder-traversal.md","sourceDirName":"binary-tree/construction","slug":"/binary-tree/construction/construct-binary-tree-from-preorder-and-inorder-traversal","permalink":"/binary-tree/construction/construct-binary-tree-from-preorder-and-inorder-traversal","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Construct Binary Tree from Preorder and Inorder Traversal"},"sidebar":"docs","previous":{"title":"Populating Next Right Pointers in Each Node II","permalink":"/binary-tree/traversal/populating-next-right-pointers-in-each-node-ii"},"next":{"title":"Construct Binary Tree from Inorder and Postorder Traversal","permalink":"/binary-tree/construction/construct-binary-tree-from-inorder-and-postorder-traversal"}}');var o=n(74848),i=n(28453),a=n(11470),l=n(19365);const s={title:"Construct Binary Tree from Preorder and Inorder Traversal"},u=void 0,d={},c=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}];function f(e){const r={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,o.jsx)(r.p,{children:"Given preorder and inorder traversal of a tree, construct the binary tree."}),"\n",(0,o.jsx)(r.p,{children:"Note:\nYou may assume that duplicates do not exist in the tree."}),"\n",(0,o.jsx)(r.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,o.jsx)(r.p,{children:"\u65e0"}),"\n",(0,o.jsx)(r.h3,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n","\n",(0,o.jsxs)(a.A,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,o.jsx)(l.A,{value:"java",children:(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-java",children:"// Construct Binary Tree from Preorder and Inorder Traversal\n// \u9012\u5f52\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(\\logn)\npublic class Solution {\n    public TreeNode buildTree(int[] preorder, int[] inorder) {\n        return buildTree(preorder, 0, preorder.length,\n                inorder, 0, inorder.length);\n    }\n\n    TreeNode buildTree(int[] preorder, int begin1, int end1,\n                       int[] inorder, int begin2, int end2) {\n        if (begin1 == end1) return null;\n        if (begin2 == end2) return null;\n\n        TreeNode root = new TreeNode(preorder[begin1]);\n\n        int inRootPos = find(inorder, begin2, end2, preorder[begin1]);\n        int leftSize = inRootPos - begin2;\n\n        root.left = buildTree(preorder, begin1 + 1, begin1 + leftSize + 1,\n                inorder, begin2, begin2 + leftSize);\n        root.right = buildTree(preorder, begin1 + leftSize + 1, end1,\n                inorder, inRootPos + 1, end2);\n\n        return root;\n    }\n    private static int find(int[] array, int begin, int end, int val) {\n        for (int i = begin; i < end; ++i) {\n            if (array[i] == val) return i;\n        }\n        return -1;\n    }\n}\n"})})}),(0,o.jsx)(l.A,{value:"cpp",children:(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-cpp",children:"// Construct Binary Tree from Preorder and Inorder Traversal\n// \u9012\u5f52\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(\\logn)\nclass Solution {\npublic:\n    TreeNode* buildTree(vector<int>& preorder, vector<int>& inorder) {\n        return buildTree(begin(preorder), end(preorder),\n                begin(inorder), end(inorder));\n    }\n\n    template<typename InputIterator>\n    TreeNode* buildTree(InputIterator pre_first, InputIterator pre_last,\n            InputIterator in_first, InputIterator in_last) {\n        if (pre_first == pre_last) return nullptr;\n        if (in_first == in_last) return nullptr;\n\n        auto root = new TreeNode(*pre_first);\n\n        auto inRootPos = find(in_first, in_last, *pre_first);\n        auto leftSize = distance(in_first, inRootPos);\n\n        root->left = buildTree(next(pre_first), next(pre_first,\n                leftSize + 1), in_first, next(in_first, leftSize));\n        root->right = buildTree(next(pre_first, leftSize + 1), pre_last,\n                next(inRootPos), in_last);\n\n        return root;\n    }\n};\n"})})}),(0,o.jsx)(l.A,{value:"python",children:(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-python",children:"# Construct Binary Tree from Preorder and Inorder Traversal\n# \u9012\u5f52\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(\\logn)\nclass Solution:\n    def buildTree(self, preorder, inorder):\n        return self._build_tree(preorder, 0, len(preorder),\n                             inorder, 0, len(inorder))\n\n    def _build_tree(self, preorder, begin1, end1,\n                   inorder, begin2, end2):\n        if begin1 == end1:\n            return None\n        if begin2 == end2:\n            return None\n\n        root = TreeNode(preorder[begin1])\n\n        inRootPos = self._find(inorder, begin2, end2, preorder[begin1])\n        leftSize = inRootPos - begin2\n\n        root.left = self._build_tree(preorder, begin1 + 1, begin1 + leftSize + 1,\n                                  inorder, begin2, begin2 + leftSize)\n        root.right = self._build_tree(preorder, begin1 + leftSize + 1, end1,\n                                   inorder, inRootPos + 1, end2)\n\n        return root\n\n    def _find(self, array, begin, end, val):\n        for i in range(begin, end):\n            if array[i] == val:\n                return i\n        return -1\n"})})})]}),"\n",(0,o.jsx)(r.h3,{id:"\u76f8\u5173\u9898\u76ee",children:"\u76f8\u5173\u9898\u76ee"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.a,{href:"/binary-tree/construction/construct-binary-tree-from-inorder-and-postorder-traversal",children:"Construct Binary Tree from Inorder and Postorder Traversal"})}),"\n"]})]})}function p(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(f,{...e})}):f(e)}},19365:(e,r,n)=>{n.d(r,{A:()=>a});n(96540);var t=n(34164);const o={tabItem:"tabItem_Ymn6"};var i=n(74848);function a(e){let{children:r,hidden:n,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.A)(o.tabItem,a),hidden:n,children:r})}},11470:(e,r,n)=>{n.d(r,{A:()=>_});var t=n(96540),o=n(34164),i=n(23104),a=n(56347),l=n(205),s=n(57485),u=n(31682),d=n(70679);function c(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function f(e){const{values:r,children:n}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return c(e).map((e=>{let{props:{value:r,label:n,attributes:t,default:o}}=e;return{value:r,label:n,attributes:t,default:o}}))}(n);return function(e){const r=(0,u.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function p(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function b(e){let{queryString:r=!1,groupId:n}=e;const o=(0,a.W6)(),i=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,s.aZ)(i),(0,t.useCallback)((e=>{if(!i)return;const r=new URLSearchParams(o.location.search);r.set(i,e),o.replace({...o.location,search:r.toString()})}),[i,o])]}function h(e){const{defaultValue:r,queryString:n=!1,groupId:o}=e,i=f(e),[a,s]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:i}))),[u,c]=b({queryString:n,groupId:o}),[h,v]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[o,i]=(0,d.Dv)(n);return[o,(0,t.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:o}),m=(()=>{const e=u??h;return p({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{m&&s(m)}),[m]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),v(e)}),[c,v,i]),tabValues:i}}var v=n(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function y(e){let{className:r,block:n,selectedValue:t,selectValue:a,tabValues:l}=e;const s=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.a_)(),d=e=>{const r=e.currentTarget,n=s.indexOf(r),o=l[n].value;o!==t&&(u(r),a(o))},c=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;r=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;r=s[n]??s[s.length-1];break}}r?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},r),children:l.map((e=>{let{value:r,label:n,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>s.push(e),onKeyDown:c,onClick:d,...i,className:(0,o.A)("tabs__item",m.tabItem,i?.className,{"tabs__item--active":t===r}),children:n??r},r)}))})}function x(e){let{lazy:r,children:n,selectedValue:i}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=a.find((e=>e.props.value===i));return e?(0,t.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==i})))})}function T(e){const r=h(e);return(0,g.jsxs)("div",{className:(0,o.A)("tabs-container",m.tabList),children:[(0,g.jsx)(y,{...r,...e}),(0,g.jsx)(x,{...r,...e})]})}function _(e){const r=(0,v.A)();return(0,g.jsx)(T,{...e,children:c(e.children)},String(r))}},28453:(e,r,n)=>{n.d(r,{R:()=>a,x:()=>l});var t=n(96540);const o={},i=t.createContext(o);function a(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);