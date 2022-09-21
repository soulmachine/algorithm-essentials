"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[2431],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),b=a,f=p["".concat(s,".").concat(b)]||p[b]||d[b]||l;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294),a=r(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(7462),a=r(7294),l=r(6010),o=r(2389),i=r(7392),s=r(7094),u=r(2466);const c="tabList__CuJ",d="tabItem_LNqP";function p(e){var t;const{lazy:r,block:o,defaultValue:p,values:b,groupId:f,className:m}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=b??v.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),y=(0,i.l)(h,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===p?p:p??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==g&&!h.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:T,setTabGroupChoices:k}=(0,s.U)(),[O,w]=(0,a.useState)(g),E=[],{blockElementScrollPositionUntilNextRender:N}=(0,u.o5)();if(null!=f){const e=T[f];null!=e&&e!==O&&h.some((t=>t.value===e))&&w(e)}const j=e=>{const t=e.currentTarget,r=E.indexOf(t),n=h[r].value;n!==O&&(N(t),w(n),null!=f&&k(f,String(n)))},x=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;r=E[t]??E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;r=E[t]??E[E.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},m)},h.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>E.push(e),onKeyDown:x,onFocus:j,onClick:j},o,{className:(0,l.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":O===t})}),r??t)}))),r?(0,a.cloneElement)(v.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function b(e){const t=(0,o.Z)();return a.createElement(p,(0,n.Z)({key:String(t)},e))}},1426:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>b,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var n=r(7462),a=(r(7294),r(3905)),l=r(5488),o=r(5162);const i={title:"Balanced Binary Tree"},s=void 0,u={unversionedId:"binary-tree/traversal/balanced-binary-tree",id:"binary-tree/traversal/balanced-binary-tree",title:"Balanced Binary Tree",description:"\u63cf\u8ff0",source:"@site/docs/binary-tree/traversal/balanced-binary-tree.md",sourceDirName:"binary-tree/traversal",slug:"/binary-tree/traversal/balanced-binary-tree",permalink:"/en/binary-tree/traversal/balanced-binary-tree",draft:!1,tags:[],version:"current",frontMatter:{title:"Balanced Binary Tree"},sidebar:"docs",previous:{title:"Symmetric Tree",permalink:"/en/binary-tree/traversal/symmetric-tree"},next:{title:"Flatten Binary Tree to Linked List",permalink:"/en/binary-tree/traversal/flatten-binary-tree-to-linked-list"}},c={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}],p={toc:d};function b(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.kt)("p",null,"Given a binary tree, determine if it is height-balanced."),(0,a.kt)("p",null,"For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1."),(0,a.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,a.kt)("p",null,"\u65e0"),(0,a.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,a.kt)(l.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// Balanced Binary Tree\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(logn)\npublic class Solution {\n    public boolean isBalanced (TreeNode root) {\n        return balancedHeight (root) >= 0;\n    }\n\n    /**\n     * Returns the height of `root` if `root` is a balanced tree,\n     * otherwise, returns `-1`.\n     */\n    private static int balancedHeight (TreeNode root) {\n        if (root == null) return 0;  // \u7ec8\u6b62\u6761\u4ef6\n\n        int left = balancedHeight (root.left);\n        int right = balancedHeight (root.right);\n\n        if (left < 0 || right < 0 || Math.abs(left - right) > 1) return -1;  // \u526a\u679d\n\n        return Math.max(left, right) + 1; // \u4e09\u65b9\u5408\u5e76\n    }\n}\n"))),(0,a.kt)(o.Z,{value:"cpp",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// Balanced Binary Tree\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(logn)\nclass Solution {\npublic:\n    bool isBalanced (TreeNode* root) {\n        return balancedHeight (root) >= 0;\n    }\n\n    /**\n     * Returns the height of `root` if `root` is a balanced tree,\n     * otherwise, returns `-1`.\n     */\n    int balancedHeight (TreeNode* root) {\n        if (root == nullptr) return 0;  // \u7ec8\u6b62\u6761\u4ef6\n\n        int left = balancedHeight (root->left);\n        int right = balancedHeight (root->right);\n\n        if (left < 0 || right < 0 || abs(left - right) > 1) return -1;  // \u526a\u679d\n\n        return max(left, right) + 1; // \u4e09\u65b9\u5408\u5e76\n    }\n};\n")))))}b.isMDXComponent=!0}}]);