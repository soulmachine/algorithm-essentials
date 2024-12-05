"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[2920],{47584:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>u,default:()=>v,frontMatter:()=>i,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"binary-tree/traversal/binary-tree-postorder-traversal","title":"Binary Tree Postorder Traversal","description":"\u63cf\u8ff0","source":"@site/docs/binary-tree/traversal/binary-tree-postorder-traversal.md","sourceDirName":"binary-tree/traversal","slug":"/binary-tree/traversal/binary-tree-postorder-traversal","permalink":"/binary-tree/traversal/binary-tree-postorder-traversal","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Binary Tree Postorder Traversal"},"sidebar":"docs","previous":{"title":"Binary Tree Inorder Traversal","permalink":"/binary-tree/traversal/binary-tree-inorder-traversal"},"next":{"title":"Binary Tree Right Side View","permalink":"/binary-tree/traversal/binary-tree-right-side-view"}}');var a=n(74848),l=n(28453),s=n(11470),o=n(19365);const i={title:"Binary Tree Postorder Traversal"},u=void 0,c={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u6808",id:"\u6808",level:3},{value:"Morris \u540e\u5e8f\u904d\u5386",id:"morris-\u540e\u5e8f\u904d\u5386",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}];function p(e){const r={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,a.jsxs)(r.p,{children:["Given a binary tree, return the ",(0,a.jsx)(r.strong,{children:"postorder"})," traversal of its nodes' values."]}),"\n",(0,a.jsxs)(r.p,{children:["For example:\nGiven binary tree ",(0,a.jsx)(r.code,{children:"{1,#,2,3}"}),","]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{children:" 1\n  \\\n   2\n  /\n 3\n"})}),"\n",(0,a.jsxs)(r.p,{children:["return ",(0,a.jsx)(r.code,{children:"[3,2,1]"}),"."]}),"\n",(0,a.jsx)(r.p,{children:"Note: Recursive solution is trivial, could you do it iteratively?"}),"\n",(0,a.jsx)(r.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,a.jsx)(r.p,{children:"\u7528\u6808\u6216\u8005 Morris \u904d\u5386\u3002"}),"\n",(0,a.jsx)(r.h3,{id:"\u6808",children:"\u6808"}),"\n","\n",(0,a.jsxs)(s.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,a.jsx)(o.A,{value:"java",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-java",children:"// Binary Tree Postorder Traversal\n// \u4f7f\u7528\u6808\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\n    public List<Integer> postorderTraversal(TreeNode root) {\n        ArrayList<Integer> result = new ArrayList<>();\n        Stack<TreeNode> s = new Stack<>();\n        /* p\uff0c\u6b63\u5728\u8bbf\u95ee\u7684\u7ed3\u70b9\uff0cq\uff0c\u521a\u521a\u8bbf\u95ee\u8fc7\u7684\u7ed3\u70b9*/\n        TreeNode p = root;\n        TreeNode q = null;\n\n        do {\n            while (p != null) { /* \u5f80\u5de6\u4e0b\u8d70*/\n                s.push(p);\n                p = p.left;\n            }\n            q = null;\n            while (!s.empty()) {\n                p = s.pop();\n                /* \u53f3\u5b69\u5b50\u4e0d\u5b58\u5728\u6216\u5df2\u88ab\u8bbf\u95ee\uff0c\u8bbf\u95ee\u4e4b*/\n                if (p.right == q) {\n                    result.add(p.val);\n                    q = p; /* \u4fdd\u5b58\u521a\u8bbf\u95ee\u8fc7\u7684\u7ed3\u70b9*/\n                } else {\n                    /* \u5f53\u524d\u7ed3\u70b9\u4e0d\u80fd\u8bbf\u95ee\uff0c\u9700\u7b2c\u4e8c\u6b21\u8fdb\u6808*/\n                    s.push(p);\n                    /* \u5148\u5904\u7406\u53f3\u5b50\u6811*/\n                    p = p.right;\n                    break;\n                }\n            }\n        } while (!s.empty());\n\n        return result;\n    }\n}\n"})})}),(0,a.jsx)(o.A,{value:"cpp",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-cpp",children:"// Binary Tree Postorder Traversal\n// \u4f7f\u7528\u6808\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\npublic:\n    vector<int> postorderTraversal(TreeNode *root) {\n        vector<int> result;\n        stack<const TreeNode *> s;\n        /* p\uff0c\u6b63\u5728\u8bbf\u95ee\u7684\u7ed3\u70b9\uff0cq\uff0c\u521a\u521a\u8bbf\u95ee\u8fc7\u7684\u7ed3\u70b9*/\n        const TreeNode *p = root, *q = nullptr;\n\n        do {\n            while (p != nullptr) { /* \u5f80\u5de6\u4e0b\u8d70*/\n                s.push(p);\n                p = p->left;\n            }\n            q = nullptr;\n            while (!s.empty()) {\n                p = s.top();\n                s.pop();\n                /* \u53f3\u5b69\u5b50\u4e0d\u5b58\u5728\u6216\u5df2\u88ab\u8bbf\u95ee\uff0c\u8bbf\u95ee\u4e4b*/\n                if (p->right == q) {\n                    result.push_back(p->val);\n                    q = p; /* \u4fdd\u5b58\u521a\u8bbf\u95ee\u8fc7\u7684\u7ed3\u70b9*/\n                } else {\n                    /* \u5f53\u524d\u7ed3\u70b9\u4e0d\u80fd\u8bbf\u95ee\uff0c\u9700\u7b2c\u4e8c\u6b21\u8fdb\u6808*/\n                    s.push(p);\n                    /* \u5148\u5904\u7406\u53f3\u5b50\u6811*/\n                    p = p->right;\n                    break;\n                }\n            }\n        } while (!s.empty());\n\n        return result;\n    }\n};\n"})})})]}),"\n",(0,a.jsx)(r.h3,{id:"morris-\u540e\u5e8f\u904d\u5386",children:"Morris \u540e\u5e8f\u904d\u5386"}),"\n",(0,a.jsxs)(s.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,a.jsx)(o.A,{value:"java",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-java",children:"// Binary Tree Postorder Traversal\n// Morris\u540e\u5e8f\u904d\u5386\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\n    public List<Integer> postorderTraversal(TreeNode root) {\n        ArrayList<Integer> result = new ArrayList<>();\n        TreeNode dummy = new TreeNode(-1);\n        dummy.left = root;\n        TreeNode cur = dummy;\n        TreeNode prev = null;\n\n        while (cur != null) {\n            if (cur.left == null) {\n                prev = cur; /* \u5fc5\u987b\u8981\u6709 */\n                cur = cur.right;\n            } else {\n                TreeNode node = cur.left;\n                while (node.right != null && node.right != cur)\n                    node = node.right;\n\n                if (node.right == null) { /* \u8fd8\u6ca1\u7ebf\u7d22\u5316\uff0c\u5219\u5efa\u7acb\u7ebf\u7d22 */\n                    node.right = cur;\n                    prev = cur; /* \u5fc5\u987b\u8981\u6709 */\n                    cur = cur.left;\n                } else { /* \u5df2\u7ecf\u7ebf\u7d22\u5316\uff0c\u5219\u8bbf\u95ee\u8282\u70b9\uff0c\u5e76\u5220\u9664\u7ebf\u7d22  */\n                    visit_reverse(cur.left, prev, result);\n                    prev.right = null;\n                    prev = cur; /* \u5fc5\u987b\u8981\u6709 */\n                    cur = cur.right;\n                }\n            }\n        }\n        return result;\n    }\n    // \u9006\u8f6c\u8def\u5f84\n    private static void reverse(TreeNode from, TreeNode to) {\n        TreeNode x = from;\n        TreeNode y = from.right;\n        TreeNode z = null;\n        if (from == to) return;\n\n        while (x != to) {\n            z = y.right;\n            y.right = x;\n            x = y;\n            y = z;\n        }\n    }\n\n    // \u8bbf\u95ee\u9006\u8f6c\u540e\u7684\u8def\u5f84\u4e0a\u7684\u6240\u6709\u7ed3\u70b9\n    private static void visit_reverse(TreeNode from, TreeNode to,\n                                      List<Integer> result) {\n        TreeNode p = to;\n        reverse(from, to);\n\n        while (true) {\n            result.add(p.val);\n            if (p == from)\n                break;\n            p = p.right;\n        }\n\n        reverse(to, from);\n    }\n}\n"})})}),(0,a.jsx)(o.A,{value:"cpp",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-cpp",children:"// Binary Tree Postorder Traversal\n// Morris\u540e\u5e8f\u904d\u5386\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    vector<int> postorderTraversal(TreeNode *root) {\n        vector<int> result;\n        TreeNode dummy(-1);\n        TreeNode *cur, *prev = nullptr;\n        std::function < void(const TreeNode*)> visit =\n            [&result](const TreeNode *node){\n            result.push_back(node->val);\n        };\n\n        dummy.left = root;\n        cur = &dummy;\n        while (cur != nullptr) {\n            if (cur->left == nullptr) {\n                prev = cur; /* \u5fc5\u987b\u8981\u6709 */\n                cur = cur->right;\n            } else {\n                TreeNode *node = cur->left;\n                while (node->right != nullptr && node->right != cur)\n                    node = node->right;\n\n                if (node->right == nullptr) { /* \u8fd8\u6ca1\u7ebf\u7d22\u5316\uff0c\u5219\u5efa\u7acb\u7ebf\u7d22 */\n                    node->right = cur;\n                    prev = cur; /* \u5fc5\u987b\u8981\u6709 */\n                    cur = cur->left;\n                } else { /* \u5df2\u7ecf\u7ebf\u7d22\u5316\uff0c\u5219\u8bbf\u95ee\u8282\u70b9\uff0c\u5e76\u5220\u9664\u7ebf\u7d22  */\n                    visit_reverse(cur->left, prev, visit);\n                    prev->right = nullptr;\n                    prev = cur; /* \u5fc5\u987b\u8981\u6709 */\n                    cur = cur->right;\n                }\n            }\n        }\n        return result;\n    }\nprivate:\n    // \u9006\u8f6c\u8def\u5f84\n    static void reverse(TreeNode *from, TreeNode *to) {\n        TreeNode *x = from, *y = from->right, *z;\n        if (from == to) return;\n\n        while (x != to) {\n            z = y->right;\n            y->right = x;\n            x = y;\n            y = z;\n        }\n    }\n\n    // \u8bbf\u95ee\u9006\u8f6c\u540e\u7684\u8def\u5f84\u4e0a\u7684\u6240\u6709\u7ed3\u70b9\n    static void visit_reverse(TreeNode* from, TreeNode *to,\n                     std::function< void(const TreeNode*) >& visit) {\n        TreeNode *p = to;\n        reverse(from, to);\n\n        while (true) {\n            visit(p);\n            if (p == from)\n                break;\n            p = p->right;\n        }\n\n        reverse(to, from);\n    }\n};\n"})})})]}),"\n",(0,a.jsx)(r.h3,{id:"\u76f8\u5173\u9898\u76ee",children:"\u76f8\u5173\u9898\u76ee"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/binary-tree/traversal/binary-tree-preorder-traversal",children:"Binary Tree Preorder Traversal"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/binary-tree/traversal/binary-tree-inorder-traversal",children:"Binary Tree Inorder Traversal"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/binary-tree/traversal/recover-binary-search-tree",children:"Recover Binary Search Tree"})}),"\n"]})]})}function v(e={}){const{wrapper:r}={...(0,l.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},19365:(e,r,n)=>{n.d(r,{A:()=>s});n(96540);var t=n(34164);const a={tabItem:"tabItem_Ymn6"};var l=n(74848);function s(e){let{children:r,hidden:n,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,s),hidden:n,children:r})}},11470:(e,r,n)=>{n.d(r,{A:()=>j});var t=n(96540),a=n(34164),l=n(23104),s=n(56347),o=n(205),i=n(57485),u=n(31682),c=n(70679);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:r,children:n}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:n,attributes:t,default:a}}=e;return{value:r,label:n,attributes:t,default:a}}))}(n);return function(e){const r=(0,u.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function v(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function h(e){let{queryString:r=!1,groupId:n}=e;const a=(0,s.W6)(),l=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,i.aZ)(l),(0,t.useCallback)((e=>{if(!l)return;const r=new URLSearchParams(a.location.search);r.set(l,e),a.replace({...a.location,search:r.toString()})}),[l,a])]}function f(e){const{defaultValue:r,queryString:n=!1,groupId:a}=e,l=p(e),[s,i]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!v({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:l}))),[u,d]=h({queryString:n,groupId:a}),[f,m]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,l]=(0,c.Dv)(n);return[a,(0,t.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),b=(()=>{const e=u??f;return v({value:e,tabValues:l})?e:null})();(0,o.A)((()=>{b&&i(b)}),[b]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!v({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),m(e)}),[d,m,l]),tabValues:l}}var m=n(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=n(74848);function g(e){let{className:r,block:n,selectedValue:t,selectValue:s,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.a_)(),c=e=>{const r=e.currentTarget,n=i.indexOf(r),a=o[n].value;a!==t&&(u(r),s(a))},d=e=>{let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;r=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;r=i[n]??i[i.length-1];break}}r?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},r),children:o.map((e=>{let{value:r,label:n,attributes:l}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>i.push(e),onKeyDown:d,onClick:c,...l,className:(0,a.A)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":t===r}),children:n??r},r)}))})}function T(e){let{lazy:r,children:n,selectedValue:l}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=s.find((e=>e.props.value===l));return e?(0,t.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:s.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==l})))})}function x(e){const r=f(e);return(0,y.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,y.jsx)(g,{...r,...e}),(0,y.jsx)(T,{...r,...e})]})}function j(e){const r=(0,m.A)();return(0,y.jsx)(x,{...e,children:d(e.children)},String(r))}},28453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>o});var t=n(96540);const a={},l=t.createContext(a);function s(e){const r=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(l.Provider,{value:r},e.children)}}}]);