"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[1212],{5217:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>u,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"binary-tree/recursion/sum-root-to-leaf-numbers","title":"Sum Root to Leaf Numbers","description":"\u63cf\u8ff0","source":"@site/docs/binary-tree/recursion/sum-root-to-leaf-numbers.md","sourceDirName":"binary-tree/recursion","slug":"/binary-tree/recursion/sum-root-to-leaf-numbers","permalink":"/binary-tree/recursion/sum-root-to-leaf-numbers","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Sum Root to Leaf Numbers"},"sidebar":"docs","previous":{"title":"Populating Next Right Pointers in Each Node","permalink":"/binary-tree/recursion/populating-next-right-pointers-in-each-node"},"next":{"title":"Lowest Common Ancestor of a Binary Tree","permalink":"/binary-tree/recursion/lowest-common-ancestor-of-a-binary-tree"}}');var a=r(74848),o=r(28453),l=r(11470),s=r(19365);const u={title:"Sum Root to Leaf Numbers"},i=void 0,c={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}];function h(e){const t={code:"code",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,a.jsxs)(t.p,{children:["Given a binary tree containing digits from ",(0,a.jsx)(t.code,{children:"0-9"})," only, each root-to-leaf path could represent a number."]}),"\n",(0,a.jsxs)(t.p,{children:["An example is the root-to-leaf path ",(0,a.jsx)(t.code,{children:"1->2->3"})," which represents the number ",(0,a.jsx)(t.code,{children:"123"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"Find the total sum of all root-to-leaf numbers."}),"\n",(0,a.jsx)(t.p,{children:"For example,"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cpp",children:"    1\n   / \\\n  2   3\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The root-to-leaf path ",(0,a.jsx)(t.code,{children:"1->2"})," represents the number ",(0,a.jsx)(t.code,{children:"12"}),".\nThe root-to-leaf path ",(0,a.jsx)(t.code,{children:"1->3"})," represents the number ",(0,a.jsx)(t.code,{children:"13"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["Return the sum = ",(0,a.jsx)(t.code,{children:"12 + 13 = 25"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,a.jsx)(t.p,{children:"\u65e0"}),"\n",(0,a.jsx)(t.h3,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n","\n",(0,a.jsxs)(l.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,a.jsx)(s.A,{value:"java",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:"// Sum root to leaf numbers\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(logn)\npublic class Solution {\n    public int sumNumbers(TreeNode root) {\n        return dfs(root, 0);\n    }\n    private static int dfs(TreeNode root, int sum) {\n        if (root == null) return 0;\n        if (root.left == null && root.right == null)\n            return sum * 10 + root.val;\n\n        return dfs(root.left, sum * 10 + root.val) +\n                dfs(root.right, sum * 10 + root.val);\n    }\n}\n"})})}),(0,a.jsx)(s.A,{value:"cpp",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cpp",children:"// Sum root to leaf numbers\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(logn)\nclass Solution {\npublic:\n    int sumNumbers(TreeNode *root) {\n        return dfs(root, 0);\n    }\nprivate:\n    int dfs(TreeNode *root, int sum) {\n        if (root == nullptr) return 0;\n        if (root->left == nullptr && root->right == nullptr)\n            return sum * 10 + root->val;\n\n        return dfs(root->left, sum * 10 + root->val) +\n                dfs(root->right, sum * 10 + root->val);\n    }\n};\n"})})})]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>l});r(96540);var n=r(34164);const a={tabItem:"tabItem_Ymn6"};var o=r(74848);function l(e){let{children:t,hidden:r,className:l}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,l),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>N});var n=r(96540),a=r(34164),o=r(23104),l=r(56347),s=r(205),u=r(57485),i=r(31682),c=r(70679);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,i.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const a=(0,l.W6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u.aZ)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=h(e),[l,u]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[i,d]=m({queryString:r,groupId:a}),[f,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),v=(()=>{const e=i??f;return p({value:e,tabValues:o})?e:null})();(0,s.A)((()=>{v&&u(v)}),[v]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),b(e)}),[d,b,o]),tabValues:o}}var b=r(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(74848);function g(e){let{className:t,block:r,selectedValue:n,selectValue:l,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:i}=(0,o.a_)(),c=e=>{const t=e.currentTarget,r=u.indexOf(t),a=s[r].value;a!==n&&(i(t),l(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:s.map((e=>{let{value:t,label:r,attributes:o}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>u.push(e),onKeyDown:d,onClick:c,...o,className:(0,a.A)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function j(e){let{lazy:t,children:r,selectedValue:o}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===o));return e?(0,n.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function y(e){const t=f(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,x.jsx)(g,{...t,...e}),(0,x.jsx)(j,{...t,...e})]})}function N(e){const t=(0,b.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>s});var n=r(96540);const a={},o=n.createContext(a);function l(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);