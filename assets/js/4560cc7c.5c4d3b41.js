"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[8220],{13761:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>u,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"binary-tree/traversal/symmetric-tree","title":"Symmetric Tree","description":"\u63cf\u8ff0","source":"@site/docs/binary-tree/traversal/symmetric-tree.md","sourceDirName":"binary-tree/traversal","slug":"/binary-tree/traversal/symmetric-tree","permalink":"/binary-tree/traversal/symmetric-tree","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Symmetric Tree"},"sidebar":"docs","previous":{"title":"Same Tree","permalink":"/binary-tree/traversal/same-tree"},"next":{"title":"Balanced Binary Tree","permalink":"/binary-tree/traversal/balanced-binary-tree"}}');var l=r(74848),a=r(28453),s=r(11470),i=r(19365);const u={title:"Symmetric Tree"},o=void 0,c={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u9012\u5f52\u7248",id:"\u9012\u5f52\u7248",level:3},{value:"\u8fed\u4ee3\u7248",id:"\u8fed\u4ee3\u7248",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}];function p(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,l.jsx)(n.p,{children:"Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center)."}),"\n",(0,l.jsxs)(n.p,{children:["For example, this binary tree ",(0,l.jsx)(n.code,{children:"[1,2,2,3,4,4,3]"})," is symmetric:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"    1\n   / \\\n  2   2\n / \\ / \\\n3  4 4  3\n"})}),"\n",(0,l.jsxs)(n.p,{children:["But the following ",(0,l.jsx)(n.code,{children:"[1,2,2,null,3,null,3]"})," is not:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"    1\n   / \\\n  2   2\n   \\   \\\n   3    3\n"})}),"\n",(0,l.jsx)(n.p,{children:"Note:\nBonus points if you could solve it both recursively and iteratively."}),"\n",(0,l.jsx)(n.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,l.jsx)(n.p,{children:"\u65e0"}),"\n",(0,l.jsx)(n.h3,{id:"\u9012\u5f52\u7248",children:"\u9012\u5f52\u7248"}),"\n","\n",(0,l.jsxs)(s.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,l.jsx)(i.A,{value:"java",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:"// Symmetric Tree\n// \u9012\u5f52\u7248\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(logn)\npublic class Solution {\n    public boolean isSymmetric(TreeNode root) {\n        if (root == null) return true;\n        return isSymmetric(root.left, root.right);\n    }\n    private static boolean isSymmetric(TreeNode p, TreeNode q) {\n        if (p == null && q == null) return true;   // \u7ec8\u6b62\u6761\u4ef6\n        if (p == null || q == null) return false;  // \u7ec8\u6b62\u6761\u4ef6\n        return p.val == q.val      // \u4e09\u65b9\u5408\u5e76\n                && isSymmetric(p.left, q.right)\n                && isSymmetric(p.right, q.left);\n    }\n}\n"})})}),(0,l.jsx)(i.A,{value:"cpp",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cpp",children:"// Symmetric Tree\n// \u9012\u5f52\u7248\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(logn)\nclass Solution {\npublic:\n    bool isSymmetric(TreeNode *root) {\n        if (root == nullptr) return true;\n        return isSymmetric(root->left, root->right);\n    }\n    bool isSymmetric(TreeNode *p, TreeNode *q) {\n        if (p == nullptr && q == nullptr) return true;   // \u7ec8\u6b62\u6761\u4ef6\n        if (p == nullptr || q == nullptr) return false;  // \u7ec8\u6b62\u6761\u4ef6\n        return p->val == q->val      // \u4e09\u65b9\u5408\u5e76\n                && isSymmetric(p->left, q->right)\n                && isSymmetric(p->right, q->left);\n    }\n};\n"})})})]}),"\n",(0,l.jsx)(n.h3,{id:"\u8fed\u4ee3\u7248",children:"\u8fed\u4ee3\u7248"}),"\n",(0,l.jsxs)(s.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,l.jsx)(i.A,{value:"java",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:"// Symmetric Tree\n// \u8fed\u4ee3\u7248\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(logn)\npublic class Solution {\n    public boolean isSymmetric (TreeNode root) {\n        if (root == null) return true;\n\n        Stack<TreeNode> s = new Stack<>();\n        s.push(root.left);\n        s.push(root.right);\n\n        while (!s.isEmpty()) {\n            TreeNode p = s.pop ();\n            TreeNode q = s.pop ();\n\n            if (p == null && q == null) continue;\n            if (p == null || q == null) return false;\n            if (p.val != q.val) return false;\n\n            s.push(p.left);\n            s.push(q.right);\n\n            s.push(p.right);\n            s.push(q.left);\n        }\n\n        return true;\n    }\n}\n"})})}),(0,l.jsx)(i.A,{value:"cpp",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cpp",children:"// Symmetric Tree\n// \u8fed\u4ee3\u7248\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(logn)\nclass Solution {\npublic:\n    bool isSymmetric (TreeNode* root) {\n        if (!root) return true;\n\n        stack<TreeNode*> s;\n        s.push(root->left);\n        s.push(root->right);\n\n        while (!s.empty ()) {\n            auto p = s.top (); s.pop();\n            auto q = s.top (); s.pop();\n\n            if (!p && !q) continue;\n            if (!p || !q) return false;\n            if (p->val != q->val) return false;\n\n            s.push(p->left);\n            s.push(q->right);\n\n            s.push(p->right);\n            s.push(q->left);\n        }\n\n        return true;\n    }\n};\n"})})})]}),"\n",(0,l.jsx)(n.h3,{id:"\u76f8\u5173\u9898\u76ee",children:"\u76f8\u5173\u9898\u76ee"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/binary-tree/traversal/same-tree",children:"Same Tree"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(p,{...e})}):p(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>s});r(96540);var t=r(34164);const l={tabItem:"tabItem_Ymn6"};var a=r(74848);function s(e){let{children:n,hidden:r,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.A)(l.tabItem,s),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>S});var t=r(96540),l=r(34164),a=r(23104),s=r(56347),i=r(205),u=r(57485),o=r(31682),c=r(70679);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:l}}=e;return{value:n,label:r,attributes:t,default:l}}))}(r);return function(e){const n=(0,o.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function h(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const l=(0,s.W6)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,u.aZ)(a),(0,t.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(l.location.search);n.set(a,e),l.replace({...l.location,search:n.toString()})}),[a,l])]}function f(e){const{defaultValue:n,queryString:r=!1,groupId:l}=e,a=p(e),[s,u]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:a}))),[o,d]=m({queryString:r,groupId:l}),[f,v]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,a]=(0,c.Dv)(r);return[l,(0,t.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:l}),b=(()=>{const e=o??f;return h({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{b&&u(b)}),[b]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),v(e)}),[d,v,a]),tabValues:a}}var v=r(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=r(74848);function g(e){let{className:n,block:r,selectedValue:t,selectValue:s,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:o}=(0,a.a_)(),c=e=>{const n=e.currentTarget,r=u.indexOf(n),l=i[r].value;l!==t&&(o(n),s(l))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;n=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;n=u[r]??u[u.length-1];break}}n?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":r},n),children:i.map((e=>{let{value:n,label:r,attributes:a}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>u.push(e),onKeyDown:d,onClick:c,...a,className:(0,l.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function x(e){let{lazy:n,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function j(e){const n=f(e);return(0,y.jsxs)("div",{className:(0,l.A)("tabs-container",b.tabList),children:[(0,y.jsx)(g,{...n,...e}),(0,y.jsx)(x,{...n,...e})]})}function S(e){const n=(0,v.A)();return(0,y.jsx)(j,{...e,children:d(e.children)},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>i});var t=r(96540);const l={},a=t.createContext(l);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);