"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[8028],{99329:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>u,default:()=>b,frontMatter:()=>i,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"binary-tree/bst/convert-sorted-array-to-binary-search-tree","title":"Convert Sorted Array to Binary Search Tree","description":"\u63cf\u8ff0","source":"@site/docs/binary-tree/bst/convert-sorted-array-to-binary-search-tree.md","sourceDirName":"binary-tree/bst","slug":"/binary-tree/bst/convert-sorted-array-to-binary-search-tree","permalink":"/en/binary-tree/bst/convert-sorted-array-to-binary-search-tree","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Convert Sorted Array to Binary Search Tree"},"sidebar":"docs","previous":{"title":"Validate Binary Search Tree","permalink":"/en/binary-tree/bst/validate-binary-search-tree"},"next":{"title":"Convert Sorted List to Binary Search Tree","permalink":"/en/binary-tree/bst/convert-sorted-list-to-binary-search-tree"}}');var a=t(74848),o=t(28453),s=t(11470),l=t(19365);const i={title:"Convert Sorted Array to Binary Search Tree"},u=void 0,c={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}];function h(e){const r={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,a.jsx)(r.p,{children:"Given an array where elements are sorted in ascending order, convert it to a height balanced BST."}),"\n",(0,a.jsx)(r.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,a.jsx)(r.p,{children:"\u4e8c\u5206\u6cd5\u3002"}),"\n",(0,a.jsx)(r.h3,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n","\n",(0,a.jsxs)(s.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,a.jsx)(l.A,{value:"java",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-java",children:"// Convert Sorted Array to Binary Search Tree\n// \u4e8c\u5206\u6cd5\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(logn)\npublic class Solution {\n    public TreeNode sortedArrayToBST (int[] nums) {\n        return sortedArrayToBST(nums, 0, nums.length);\n    }\n\n    private static TreeNode sortedArrayToBST (int[] nums, int begin, int end) {\n        int length = end - begin;\n        if (length < 1) return null;  // \u7ec8\u6b62\u6761\u4ef6\n\n        // \u4e09\u65b9\u5408\u5e76\n        int mid = begin + length / 2;\n        TreeNode root = new TreeNode (nums[mid]);\n        root.left = sortedArrayToBST(nums, begin, mid);\n        root.right = sortedArrayToBST(nums, mid + 1, end);\n\n        return root;\n    }\n}\n"})})}),(0,a.jsx)(l.A,{value:"cpp",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-cpp",children:"// Convert Sorted Array to Binary Search Tree\n// \u4e8c\u5206\u6cd5\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(logn)\nclass Solution {\npublic:\n    TreeNode* sortedArrayToBST (vector<int>& num) {\n        return sortedArrayToBST(num.begin(), num.end());\n    }\n\n    template<typename RandomAccessIterator>\n    TreeNode* sortedArrayToBST (RandomAccessIterator first,\n            RandomAccessIterator last) {\n        const auto length = distance(first, last);\n\n        if (length <= 0) return nullptr;  // \u7ec8\u6b62\u6761\u4ef6\n\n        // \u4e09\u65b9\u5408\u5e76\n        auto mid = first + length / 2;\n        TreeNode* root = new TreeNode (*mid);\n        root->left = sortedArrayToBST(first, mid);\n        root->right = sortedArrayToBST(mid + 1, last);\n\n        return root;\n    }\n};\n"})})})]}),"\n",(0,a.jsx)(r.h3,{id:"\u76f8\u5173\u9898\u76ee",children:"\u76f8\u5173\u9898\u76ee"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/en/binary-tree/bst/convert-sorted-list-to-binary-search-tree",children:"Convert Sorted List to Binary Search Tree"})}),"\n"]})]})}function b(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>s});t(96540);var n=t(34164);const a={tabItem:"tabItem_Ymn6"};var o=t(74848);function s(e){let{children:r,hidden:t,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,s),hidden:t,children:r})}},11470:(e,r,t)=>{t.d(r,{A:()=>x});var n=t(96540),a=t(34164),o=t(23104),s=t(56347),l=t(205),i=t(57485),u=t(31682),c=t(70679);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:a}}=e;return{value:r,label:t,attributes:n,default:a}}))}(t);return function(e){const r=(0,u.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function b(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:t}=e;const a=(0,s.W6)(),o=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,i.aZ)(o),(0,n.useCallback)((e=>{if(!o)return;const r=new URLSearchParams(a.location.search);r.set(o,e),a.replace({...a.location,search:r.toString()})}),[o,a])]}function p(e){const{defaultValue:r,queryString:t=!1,groupId:a}=e,o=h(e),[s,i]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!b({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:o}))),[u,d]=m({queryString:t,groupId:a}),[p,v]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,o]=(0,c.Dv)(t);return[a,(0,n.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),f=(()=>{const e=u??p;return b({value:e,tabValues:o})?e:null})();(0,l.A)((()=>{f&&i(f)}),[f]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!b({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),v(e)}),[d,v,o]),tabValues:o}}var v=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=t(74848);function g(e){let{className:r,block:t,selectedValue:n,selectValue:s,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),c=e=>{const r=e.currentTarget,t=i.indexOf(r),a=l[t].value;a!==n&&(u(r),s(a))},d=e=>{let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;r=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;r=i[t]??i[i.length-1];break}}r?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},r),children:l.map((e=>{let{value:r,label:t,attributes:o}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>i.push(e),onKeyDown:d,onClick:c,...o,className:(0,a.A)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":n===r}),children:t??r},r)}))})}function T(e){let{lazy:r,children:t,selectedValue:o}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=s.find((e=>e.props.value===o));return e?(0,n.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:s.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==o})))})}function S(e){const r=p(e);return(0,y.jsxs)("div",{className:(0,a.A)("tabs-container",f.tabList),children:[(0,y.jsx)(g,{...r,...e}),(0,y.jsx)(T,{...r,...e})]})}function x(e){const r=(0,v.A)();return(0,y.jsx)(S,{...e,children:d(e.children)},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>l});var n=t(96540);const a={},o=n.createContext(a);function s(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);