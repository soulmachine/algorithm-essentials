"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[1863],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return t?n.createElement(b,l(l({ref:r},c),{},{components:t})):n.createElement(b,l({ref:r},c))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=p;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5162:(e,r,t)=>{t.d(r,{Z:()=>l});var n=t(7294),a=t(6010);const o="tabItem_Ymn6";function l(e){let{children:r,hidden:t,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:t},r)}},5488:(e,r,t)=>{t.d(r,{Z:()=>m});var n=t(7462),a=t(7294),o=t(6010),l=t(2389),i=t(7392),s=t(7094),u=t(2466);const c="tabList__CuJ",d="tabItem_LNqP";function p(e){var r;const{lazy:t,block:l,defaultValue:p,values:m,groupId:b,className:y}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??v.map((e=>{let{props:{value:r,label:t,attributes:n}}=e;return{value:r,label:t,attributes:n}})),h=(0,i.l)(f,((e,r)=>e.value===r.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const T=null===p?p:p??(null==(r=v.find((e=>e.props.default)))?void 0:r.props.value)??v[0].props.value;if(null!==T&&!f.some((e=>e.value===T)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${T}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:k}=(0,s.U)(),[S,O]=(0,a.useState)(T),w=[],{blockElementScrollPositionUntilNextRender:N}=(0,u.o5)();if(null!=b){const e=g[b];null!=e&&e!==S&&f.some((r=>r.value===e))&&O(e)}const E=e=>{const r=e.currentTarget,t=w.indexOf(r),n=f[t].value;n!==S&&(N(r),O(n),null!=b&&k(b,String(n)))},j=e=>{var r;let t=null;switch(e.key){case"ArrowRight":{const r=w.indexOf(e.currentTarget)+1;t=w[r]??w[0];break}case"ArrowLeft":{const r=w.indexOf(e.currentTarget)-1;t=w[r]??w[w.length-1];break}}null==(r=t)||r.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},y)},f.map((e=>{let{value:r,label:t,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:S===r?0:-1,"aria-selected":S===r,key:r,ref:e=>w.push(e),onKeyDown:j,onFocus:E,onClick:E},l,{className:(0,o.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":S===r})}),t??r)}))),t?(0,a.cloneElement)(v.filter((e=>e.props.value===S))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==S})))))}function m(e){const r=(0,l.Z)();return a.createElement(p,(0,n.Z)({key:String(r)},e))}},1080:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var n=t(7462),a=(t(7294),t(3905)),o=t(5488),l=t(5162);const i={title:"Convert Sorted Array to Binary Search Tree"},s=void 0,u={unversionedId:"binary-tree/bst/convert-sorted-array-to-binary-search-tree",id:"binary-tree/bst/convert-sorted-array-to-binary-search-tree",title:"Convert Sorted Array to Binary Search Tree",description:"\u63cf\u8ff0",source:"@site/docs/binary-tree/bst/convert-sorted-array-to-binary-search-tree.md",sourceDirName:"binary-tree/bst",slug:"/binary-tree/bst/convert-sorted-array-to-binary-search-tree",permalink:"/binary-tree/bst/convert-sorted-array-to-binary-search-tree",draft:!1,tags:[],version:"current",frontMatter:{title:"Convert Sorted Array to Binary Search Tree"},sidebar:"docs",previous:{title:"Validate Binary Search Tree",permalink:"/binary-tree/bst/validate-binary-search-tree"},next:{title:"Convert Sorted List to Binary Search Tree",permalink:"/binary-tree/bst/convert-sorted-list-to-binary-search-tree"}},c={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],p={toc:d};function m(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.kt)("p",null,"Given an array where elements are sorted in ascending order, convert it to a height balanced BST."),(0,a.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,a.kt)("p",null,"\u4e8c\u5206\u6cd5\u3002"),(0,a.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,a.kt)(o.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// Convert Sorted Array to Binary Search Tree\n// \u4e8c\u5206\u6cd5\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(logn)\npublic class Solution {\n    public TreeNode sortedArrayToBST (int[] nums) {\n        return sortedArrayToBST(nums, 0, nums.length);\n    }\n\n    private static TreeNode sortedArrayToBST (int[] nums, int begin, int end) {\n        int length = end - begin;\n        if (length < 1) return null;  // \u7ec8\u6b62\u6761\u4ef6\n\n        // \u4e09\u65b9\u5408\u5e76\n        int mid = begin + length / 2;\n        TreeNode root = new TreeNode (nums[mid]);\n        root.left = sortedArrayToBST(nums, begin, mid);\n        root.right = sortedArrayToBST(nums, mid + 1, end);\n\n        return root;\n    }\n}\n"))),(0,a.kt)(l.Z,{value:"cpp",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// Convert Sorted Array to Binary Search Tree\n// \u4e8c\u5206\u6cd5\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(logn)\nclass Solution {\npublic:\n    TreeNode* sortedArrayToBST (vector<int>& num) {\n        return sortedArrayToBST(num.begin(), num.end());\n    }\n\n    template<typename RandomAccessIterator>\n    TreeNode* sortedArrayToBST (RandomAccessIterator first,\n            RandomAccessIterator last) {\n        const auto length = distance(first, last);\n\n        if (length <= 0) return nullptr;  // \u7ec8\u6b62\u6761\u4ef6\n\n        // \u4e09\u65b9\u5408\u5e76\n        auto mid = first + length / 2;\n        TreeNode* root = new TreeNode (*mid);\n        root->left = sortedArrayToBST(first, mid);\n        root->right = sortedArrayToBST(mid + 1, last);\n\n        return root;\n    }\n};\n")))),(0,a.kt)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/binary-tree/bst/convert-sorted-list-to-binary-search-tree"},"Convert Sorted List to Binary Search Tree"))))}m.isMDXComponent=!0}}]);