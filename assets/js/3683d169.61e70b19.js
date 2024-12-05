"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[1241],{41657:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"binary-tree/traversal/binary-tree-inorder-traversal","title":"Binary Tree Inorder Traversal","description":"\u63cf\u8ff0","source":"@site/docs/binary-tree/traversal/binary-tree-inorder-traversal.md","sourceDirName":"binary-tree/traversal","slug":"/binary-tree/traversal/binary-tree-inorder-traversal","permalink":"/binary-tree/traversal/binary-tree-inorder-traversal","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Binary Tree Inorder Traversal"},"sidebar":"docs","previous":{"title":"Binary Tree Preorder Traversal","permalink":"/binary-tree/traversal/binary-tree-preorder-traversal"},"next":{"title":"Binary Tree Postorder Traversal","permalink":"/binary-tree/traversal/binary-tree-postorder-traversal"}}');var a=n(74848),l=n(28453),s=n(11470),i=n(19365);const o={title:"Binary Tree Inorder Traversal"},u=void 0,c={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u6808",id:"\u6808",level:3},{value:"Morris \u4e2d\u5e8f\u904d\u5386",id:"morris-\u4e2d\u5e8f\u904d\u5386",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}];function p(e){const r={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,a.jsxs)(r.p,{children:["Given a binary tree, return the ",(0,a.jsx)(r.strong,{children:"inorder"})," traversal of its nodes' values."]}),"\n",(0,a.jsx)(r.p,{children:"For example:"}),"\n",(0,a.jsxs)(r.p,{children:["Given binary tree ",(0,a.jsx)(r.code,{children:"{1,#,2,3}"}),","]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{children:" 1\n  \\\n   2\n  /\n 3\n"})}),"\n",(0,a.jsxs)(r.p,{children:["return ",(0,a.jsx)(r.code,{children:"[1,3,2]"}),"."]}),"\n",(0,a.jsx)(r.p,{children:"Note: Recursive solution is trivial, could you do it iteratively?"}),"\n",(0,a.jsx)(r.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,a.jsx)(r.p,{children:"\u7528\u6808\u6216\u8005 Morris \u904d\u5386\u3002"}),"\n",(0,a.jsx)(r.h3,{id:"\u6808",children:"\u6808"}),"\n","\n",(0,a.jsxs)(s.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,a.jsx)(i.A,{value:"java",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-java",children:"// Binary Tree Inorder Traversal\n// \u4f7f\u7528\u6808\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\n    public List<Integer> inorderTraversal(TreeNode root) {\n        ArrayList<Integer> result = new ArrayList<>();\n        Stack<TreeNode> s = new Stack<>();\n        TreeNode p = root;\n\n        while (!s.empty() || p != null) {\n            if (p != null) {\n                s.push(p);\n                p = p.left;\n            } else {\n                p = s.pop();\n                result.add(p.val);\n                p = p.right;\n            }\n        }\n        return result;\n    }\n}\n"})})}),(0,a.jsx)(i.A,{value:"cpp",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-cpp",children:"// Binary Tree Inorder Traversal\n// \u4f7f\u7528\u6808\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\npublic:\n    vector<int> inorderTraversal(TreeNode *root) {\n        vector<int> result;\n        stack<const TreeNode *> s;\n        const TreeNode *p = root;\n\n        while (!s.empty() || p != nullptr) {\n            if (p != nullptr) {\n                s.push(p);\n                p = p->left;\n            } else {\n                p = s.top();\n                s.pop();\n                result.push_back(p->val);\n                p = p->right;\n            }\n        }\n        return result;\n    }\n};\n"})})})]}),"\n",(0,a.jsx)(r.h3,{id:"morris-\u4e2d\u5e8f\u904d\u5386",children:"Morris \u4e2d\u5e8f\u904d\u5386"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-cpp",children:"// Binary Tree Inorder Traversal\n// Morris\u4e2d\u5e8f\u904d\u5386\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    vector<int> inorderTraversal(TreeNode *root) {\n        vector<int> result;\n        TreeNode *cur = root, *prev = nullptr;\n\n        while (cur != nullptr) {\n            if (cur->left == nullptr) {\n                result.push_back(cur->val);\n                prev = cur;\n                cur = cur->right;\n            } else {\n                /* \u67e5\u627e\u524d\u9a71 */\n                TreeNode *node = cur->left;\n                while (node->right != nullptr && node->right != cur)\n                    node = node->right;\n\n                if (node->right == nullptr) { /* \u8fd8\u6ca1\u7ebf\u7d22\u5316\uff0c\u5219\u5efa\u7acb\u7ebf\u7d22 */\n                    node->right = cur;\n                    /* prev = cur; \u4e0d\u80fd\u6709\u8fd9\u53e5\uff0ccur\u8fd8\u6ca1\u6709\u88ab\u8bbf\u95ee */\n                    cur = cur->left;\n                } else {    /* \u5df2\u7ecf\u7ebf\u7d22\u5316\uff0c\u5219\u8bbf\u95ee\u8282\u70b9\uff0c\u5e76\u5220\u9664\u7ebf\u7d22  */\n                    result.push_back(cur->val);\n                    node->right = nullptr;\n                    prev = cur;\n                    cur = cur->right;\n                }\n            }\n        }\n        return result;\n    }\n};\n"})}),"\n",(0,a.jsx)(r.h3,{id:"\u76f8\u5173\u9898\u76ee",children:"\u76f8\u5173\u9898\u76ee"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/binary-tree/traversal/binary-tree-preorder-traversal",children:"Binary Tree Preorder Traversal"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/binary-tree/traversal/binary-tree-postorder-traversal",children:"Binary Tree Postorder Traversal"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/binary-tree/traversal/recover-binary-search-tree",children:"Recover Binary Search Tree"})}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,l.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},19365:(e,r,n)=>{n.d(r,{A:()=>s});n(96540);var t=n(34164);const a={tabItem:"tabItem_Ymn6"};var l=n(74848);function s(e){let{children:r,hidden:n,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,s),hidden:n,children:r})}},11470:(e,r,n)=>{n.d(r,{A:()=>T});var t=n(96540),a=n(34164),l=n(23104),s=n(56347),i=n(205),o=n(57485),u=n(31682),c=n(70679);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:r,children:n}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:n,attributes:t,default:a}}=e;return{value:r,label:n,attributes:t,default:a}}))}(n);return function(e){const r=(0,u.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function h(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function v(e){let{queryString:r=!1,groupId:n}=e;const a=(0,s.W6)(),l=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,o.aZ)(l),(0,t.useCallback)((e=>{if(!l)return;const r=new URLSearchParams(a.location.search);r.set(l,e),a.replace({...a.location,search:r.toString()})}),[l,a])]}function b(e){const{defaultValue:r,queryString:n=!1,groupId:a}=e,l=p(e),[s,o]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:l}))),[u,d]=v({queryString:n,groupId:a}),[b,f]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,l]=(0,c.Dv)(n);return[a,(0,t.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),m=(()=>{const e=u??b;return h({value:e,tabValues:l})?e:null})();(0,i.A)((()=>{m&&o(m)}),[m]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),f(e)}),[d,f,l]),tabValues:l}}var f=n(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=n(74848);function x(e){let{className:r,block:n,selectedValue:t,selectValue:s,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.a_)(),c=e=>{const r=e.currentTarget,n=o.indexOf(r),a=i[n].value;a!==t&&(u(r),s(a))},d=e=>{let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;r=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;r=o[n]??o[o.length-1];break}}r?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},r),children:i.map((e=>{let{value:r,label:n,attributes:l}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>o.push(e),onKeyDown:d,onClick:c,...l,className:(0,a.A)("tabs__item",m.tabItem,l?.className,{"tabs__item--active":t===r}),children:n??r},r)}))})}function g(e){let{lazy:r,children:n,selectedValue:l}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=s.find((e=>e.props.value===l));return e?(0,t.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:s.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==l})))})}function j(e){const r=b(e);return(0,y.jsxs)("div",{className:(0,a.A)("tabs-container",m.tabList),children:[(0,y.jsx)(x,{...r,...e}),(0,y.jsx)(g,{...r,...e})]})}function T(e){const r=(0,f.A)();return(0,y.jsx)(j,{...e,children:d(e.children)},String(r))}},28453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>i});var t=n(96540);const a={},l=t.createContext(a);function s(e){const r=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(l.Provider,{value:r},e.children)}}}]);