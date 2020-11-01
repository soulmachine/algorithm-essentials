(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{137:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(7),l=(n(0),n(304)),o=n(308),i=n(309),c={title:"Symmetric Tree"},u={unversionedId:"binary-tree/traversal/symmetric-tree",id:"binary-tree/traversal/symmetric-tree",isDocsHomePage:!1,title:"Symmetric Tree",description:"\u63cf\u8ff0",source:"@site/docs/binary-tree/traversal/symmetric-tree.md",slug:"/binary-tree/traversal/symmetric-tree",permalink:"/binary-tree/traversal/symmetric-tree",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/binary-tree/traversal/symmetric-tree.md",version:"current",sidebar:"someSidebar",previous:{title:"Same Tree",permalink:"/binary-tree/traversal/same-tree"},next:{title:"Balanced Binary Tree",permalink:"/binary-tree/traversal/balanced-binary-tree"}},s=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u9012\u5f52\u7248",id:"\u9012\u5f52\u7248",children:[]},{value:"\u8fed\u4ee3\u7248",id:"\u8fed\u4ee3\u7248",children:[]},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",children:[]}],p={rightToc:s};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(l.b)("p",null,"Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center)."),Object(l.b)("p",null,"For example, this binary tree ",Object(l.b)("inlineCode",{parentName:"p"},"[1,2,2,3,4,4,3]")," is symmetric:"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"    1\n   / \\\n  2   2\n / \\ / \\\n3  4 4  3\n")),Object(l.b)("p",null,"But the following ",Object(l.b)("inlineCode",{parentName:"p"},"[1,2,2,null,3,null,3]")," is not:"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"    1\n   / \\\n  2   2\n   \\   \\\n   3    3\n")),Object(l.b)("p",null,"Note:\nBonus points if you could solve it both recursively and iteratively."),Object(l.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(l.b)("p",null,"\u65e0"),Object(l.b)("h3",{id:"\u9012\u5f52\u7248"},"\u9012\u5f52\u7248"),Object(l.b)(o.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(l.b)(i.a,{value:"java",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Symmetric Tree\n// \u9012\u5f52\u7248\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(logn)\npublic class Solution {\n    public boolean isSymmetric(TreeNode root) {\n        if (root == null) return true;\n        return isSymmetric(root.left, root.right);\n    }\n    private static boolean isSymmetric(TreeNode p, TreeNode q) {\n        if (p == null && q == null) return true;   // \u7ec8\u6b62\u6761\u4ef6\n        if (p == null || q == null) return false;  // \u7ec8\u6b62\u6761\u4ef6\n        return p.val == q.val      // \u4e09\u65b9\u5408\u5e76\n                && isSymmetric(p.left, q.right)\n                && isSymmetric(p.right, q.left);\n    }\n}\n"))),Object(l.b)(i.a,{value:"cpp",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"// Symmetric Tree\n// \u9012\u5f52\u7248\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(logn)\nclass Solution {\npublic:\n    bool isSymmetric(TreeNode *root) {\n        if (root == nullptr) return true;\n        return isSymmetric(root->left, root->right);\n    }\n    bool isSymmetric(TreeNode *p, TreeNode *q) {\n        if (p == nullptr && q == nullptr) return true;   // \u7ec8\u6b62\u6761\u4ef6\n        if (p == nullptr || q == nullptr) return false;  // \u7ec8\u6b62\u6761\u4ef6\n        return p->val == q->val      // \u4e09\u65b9\u5408\u5e76\n                && isSymmetric(p->left, q->right)\n                && isSymmetric(p->right, q->left);\n    }\n};\n")))),Object(l.b)("h3",{id:"\u8fed\u4ee3\u7248"},"\u8fed\u4ee3\u7248"),Object(l.b)(o.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(l.b)(i.a,{value:"java",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Symmetric Tree\n// \u8fed\u4ee3\u7248\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(logn)\npublic class Solution {\n    public boolean isSymmetric (TreeNode root) {\n        if (root == null) return true;\n\n        Stack<TreeNode> s = new Stack<>();\n        s.push(root.left);\n        s.push(root.right);\n\n        while (!s.isEmpty()) {\n            TreeNode p = s.pop ();\n            TreeNode q = s.pop ();\n\n            if (p == null && q == null) continue;\n            if (p == null || q == null) return false;\n            if (p.val != q.val) return false;\n\n            s.push(p.left);\n            s.push(q.right);\n\n            s.push(p.right);\n            s.push(q.left);\n        }\n\n        return true;\n    }\n}\n"))),Object(l.b)(i.a,{value:"cpp",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"// Symmetric Tree\n// \u8fed\u4ee3\u7248\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(logn)\nclass Solution {\npublic:\n    bool isSymmetric (TreeNode* root) {\n        if (!root) return true;\n\n        stack<TreeNode*> s;\n        s.push(root->left);\n        s.push(root->right);\n\n        while (!s.empty ()) {\n            auto p = s.top (); s.pop();\n            auto q = s.top (); s.pop();\n\n            if (!p && !q) continue;\n            if (!p || !q) return false;\n            if (p->val != q->val) return false;\n\n            s.push(p->left);\n            s.push(q->right);\n\n            s.push(p->right);\n            s.push(q->left);\n        }\n\n        return true;\n    }\n};\n")))),Object(l.b)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"/binary-tree/traversal/same-tree"}),"Same Tree"))))}b.isMDXComponent=!0},304:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,f=p["".concat(o,".").concat(m)]||p[m]||b[m]||l;return n?a.a.createElement(f,i(i({ref:t},u),{},{components:n})):a.a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},305:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},306:function(e,t,n){"use strict";var r=n(0);const a=Object(r.createContext)(void 0);t.a=a},307:function(e,t,n){"use strict";var r=n(0),a=n(306);t.a=function(){const e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},308:function(e,t,n){"use strict";var r=n(0),a=n.n(r),l=n(307),o=n(305),i=n(49),c=n.n(i);const u=37,s=39;t.a=function(e){const{block:t,children:n,defaultValue:i,values:p,groupId:b}=e,{tabGroupChoices:m,setTabGroupChoices:f}=Object(l.a)(),[d,y]=Object(r.useState)(i),[v,O]=Object(r.useState)(!1);if(null!=b){const e=m[b];null!=e&&e!==d&&p.some((t=>t.value===e))&&y(e)}const j=e=>{y(e),null!=b&&f(b,e)},h=[],g=e=>{e.metaKey||e.altKey||e.ctrlKey||O(!0)},T=()=>{O(!1)};return Object(r.useEffect)((()=>{window.addEventListener("keydown",g),window.addEventListener("mousedown",T)}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t})},p.map((({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":d===e,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":d===e}),style:v?{}:{outline:"none"},key:e,ref:e=>h.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case s:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case u:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(h,e.target,e),g(e)},onFocus:()=>j(e),onClick:()=>{j(e),O(!1)},onPointerDown:()=>O(!1)},t)))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((e=>e.props.value===d))[0]))}},309:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}}}]);