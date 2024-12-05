"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[5749],{79735:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"binary-tree/recursion/populating-next-right-pointers-in-each-node","title":"Populating Next Right Pointers in Each Node","description":"\u63cf\u8ff0","source":"@site/docs/binary-tree/recursion/populating-next-right-pointers-in-each-node.md","sourceDirName":"binary-tree/recursion","slug":"/binary-tree/recursion/populating-next-right-pointers-in-each-node","permalink":"/binary-tree/recursion/populating-next-right-pointers-in-each-node","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Populating Next Right Pointers in Each Node"},"sidebar":"docs","previous":{"title":"Binary Tree Maximum Path Sum","permalink":"/binary-tree/recursion/binary-tree-maximum-path-sum"},"next":{"title":"Sum Root to Leaf Numbers","permalink":"/binary-tree/recursion/sum-root-to-leaf-numbers"}}');var a=t(74848),i=t(28453),l=t(11470),o=t(19365);const s={title:"Populating Next Right Pointers in Each Node"},u=void 0,c={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}];function h(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,a.jsx)(n.p,{children:"Given a binary tree"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"struct TreeLinkNode {\n   int val;\n   TreeLinkNode *left, *right, *next;\n   TreeLinkNode(int x) : val(x), left(NULL), right(NULL), next(NULL) {}\n};\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to ",(0,a.jsx)(n.code,{children:"NULL"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Initially, all next pointers are set to ",(0,a.jsx)(n.code,{children:"NULL"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Note:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"You may only use constant extra space."}),"\n",(0,a.jsx)(n.li,{children:"You may assume that it is a perfect binary tree (ie, all leaves are at the same level, and every parent has two children)."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"For example,"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"         1\n       /  \\\n      2    3\n     / \\  / \\\n    4  5  6  7\n"})}),"\n",(0,a.jsx)(n.p,{children:"After calling your function, the tree should look like:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"         1 -> NULL\n       /  \\\n      2 -> 3 -> NULL\n     / \\  / \\\n    4->5->6->7 -> NULL\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,a.jsx)(n.p,{children:"\u65e0"}),"\n",(0,a.jsx)(n.h3,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n","\n",(0,a.jsxs)(l.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,a.jsx)(o.A,{value:"java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"// Populating Next Right Pointers in Each Node\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(logn)\npublic class Solution {\n    public void connect(TreeLinkNode root) {\n        connect(root, null);\n    }\n    private static void connect(TreeLinkNode root, TreeLinkNode sibling) {\n        if (root == null) return;\n        else root.next = sibling;\n\n        connect(root.left, root.right);\n        if (sibling != null) connect(root.right, sibling.left);\n        else connect(root.right, null);\n    }\n}\n"})})}),(0,a.jsx)(o.A,{value:"cpp",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"// Populating Next Right Pointers in Each Node\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(logn)\nclass Solution {\npublic:\n    void connect(TreeLinkNode *root) {\n        connect(root, NULL);\n    }\nprivate:\n    void connect(TreeLinkNode *root, TreeLinkNode *sibling) {\n        if (root == nullptr)\n            return;\n        else\n            root->next = sibling;\n\n        connect(root->left, root->right);\n        if (sibling)\n            connect(root->right, sibling->left);\n        else\n            connect(root->right, nullptr);\n    }\n};\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"\u76f8\u5173\u9898\u76ee",children:"\u76f8\u5173\u9898\u76ee"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/binary-tree/traversal/populating-next-right-pointers-in-each-node-ii",children:"Populating Next Right Pointers in Each Node II"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>l});t(96540);var r=t(34164);const a={tabItem:"tabItem_Ymn6"};var i=t(74848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,l),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>y});var r=t(96540),a=t(34164),i=t(23104),l=t(56347),o=t(205),s=t(57485),u=t(31682),c=t(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const a=(0,l.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,i=h(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[u,d]=f({queryString:t,groupId:a}),[b,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,c.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:a}),g=(()=>{const e=u??b;return p({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{g&&s(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),m(e)}),[d,m,i]),tabValues:i}}var m=t(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function v(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:o}=e;const s=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.a_)(),c=e=>{const n=e.currentTarget,t=s.indexOf(n),a=o[t].value;a!==r&&(u(n),l(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>s.push(e),onKeyDown:d,onClick:c,...i,className:(0,a.A)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:i}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function N(e){const n=b(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,x.jsx)(v,{...n,...e}),(0,x.jsx)(j,{...n,...e})]})}function y(e){const n=(0,m.A)();return(0,x.jsx)(N,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var r=t(96540);const a={},i=r.createContext(a);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);