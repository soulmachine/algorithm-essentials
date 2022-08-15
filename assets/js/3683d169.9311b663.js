"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[196],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>v});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(t),v=a,m=d["".concat(s,".").concat(v)]||d[v]||c[v]||l;return t?n.createElement(m,o(o({ref:r},p),{},{components:t})):n.createElement(m,o({ref:r},p))}));function v(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:(e,r,t)=>{t.d(r,{Z:()=>o});var n=t(7294),a=t(6010);const l="tabItem_Ymn6";function o(e){let{children:r,hidden:t,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:t},r)}},5488:(e,r,t)=>{t.d(r,{Z:()=>v});var n=t(7462),a=t(7294),l=t(6010),o=t(2389),i=t(7392),s=t(7094),u=t(2466);const p="tabList__CuJ",c="tabItem_LNqP";function d(e){var r,t;const{lazy:o,block:d,defaultValue:v,values:m,groupId:b,className:y}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:f.map((e=>{let{props:{value:r,label:t,attributes:n}}=e;return{value:r,label:t,attributes:n}})),k=(0,i.l)(h,((e,r)=>e.value===r.value));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const T=null===v?v:null!=(r=null!=v?v:null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)?r:f[0].props.value;if(null!==T&&!h.some((e=>e.value===T)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+T+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:g,setTabGroupChoices:N}=(0,s.U)(),[O,w]=(0,a.useState)(T),E=[],{blockElementScrollPositionUntilNextRender:j}=(0,u.o5)();if(null!=b){const e=g[b];null!=e&&e!==O&&h.some((r=>r.value===e))&&w(e)}const x=e=>{const r=e.currentTarget,t=E.indexOf(r),n=h[t].value;n!==O&&(j(r),w(n),null!=b&&N(b,String(n)))},I=e=>{var r;let t=null;switch(e.key){case"ArrowRight":{var n;const r=E.indexOf(e.currentTarget)+1;t=null!=(n=E[r])?n:E[0];break}case"ArrowLeft":{var a;const r=E.indexOf(e.currentTarget)-1;t=null!=(a=E[r])?a:E[E.length-1];break}}null==(r=t)||r.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},y)},h.map((e=>{let{value:r,label:t,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:O===r?0:-1,"aria-selected":O===r,key:r,ref:e=>E.push(e),onKeyDown:I,onFocus:x,onClick:x},o,{className:(0,l.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":O===r})}),null!=t?t:r)}))),o?(0,a.cloneElement)(f.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==O})))))}function v(e){const r=(0,o.Z)();return a.createElement(d,(0,n.Z)({key:String(r)},e))}},6885:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>s,default:()=>v,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var n=t(7462),a=(t(7294),t(3905)),l=t(5488),o=t(5162);const i={title:"Binary Tree Inorder Traversal"},s=void 0,u={unversionedId:"binary-tree/traversal/binary-tree-inorder-traversal",id:"binary-tree/traversal/binary-tree-inorder-traversal",title:"Binary Tree Inorder Traversal",description:"\u63cf\u8ff0",source:"@site/docs/binary-tree/traversal/binary-tree-inorder-traversal.md",sourceDirName:"binary-tree/traversal",slug:"/binary-tree/traversal/binary-tree-inorder-traversal",permalink:"/binary-tree/traversal/binary-tree-inorder-traversal",draft:!1,editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/binary-tree/traversal/binary-tree-inorder-traversal.md",tags:[],version:"current",frontMatter:{title:"Binary Tree Inorder Traversal"},sidebar:"someSidebar",previous:{title:"Binary Tree Preorder Traversal",permalink:"/binary-tree/traversal/binary-tree-preorder-traversal"},next:{title:"Binary Tree Postorder Traversal",permalink:"/binary-tree/traversal/binary-tree-postorder-traversal"}},p={},c=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u6808",id:"\u6808",level:3},{value:"Morris \u4e2d\u5e8f\u904d\u5386",id:"morris-\u4e2d\u5e8f\u904d\u5386",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],d={toc:c};function v(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.kt)("p",null,"Given a binary tree, return the ",(0,a.kt)("strong",{parentName:"p"},"inorder")," traversal of its nodes' values."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("p",null,"Given binary tree ",(0,a.kt)("inlineCode",{parentName:"p"},"{1,#,2,3}"),","),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," 1\n  \\\n   2\n  /\n 3\n")),(0,a.kt)("p",null,"return ",(0,a.kt)("inlineCode",{parentName:"p"},"[1,3,2]"),"."),(0,a.kt)("p",null,"Note: Recursive solution is trivial, could you do it iteratively?"),(0,a.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,a.kt)("p",null,"\u7528\u6808\u6216\u8005 Morris \u904d\u5386\u3002"),(0,a.kt)("h3",{id:"\u6808"},"\u6808"),(0,a.kt)(l.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// Binary Tree Inorder Traversal\n// \u4f7f\u7528\u6808\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\n    public List<Integer> inorderTraversal(TreeNode root) {\n        ArrayList<Integer> result = new ArrayList<>();\n        Stack<TreeNode> s = new Stack<>();\n        TreeNode p = root;\n\n        while (!s.empty() || p != null) {\n            if (p != null) {\n                s.push(p);\n                p = p.left;\n            } else {\n                p = s.pop();\n                result.add(p.val);\n                p = p.right;\n            }\n        }\n        return result;\n    }\n}\n"))),(0,a.kt)(o.Z,{value:"cpp",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// Binary Tree Inorder Traversal\n// \u4f7f\u7528\u6808\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\npublic:\n    vector<int> inorderTraversal(TreeNode *root) {\n        vector<int> result;\n        stack<const TreeNode *> s;\n        const TreeNode *p = root;\n\n        while (!s.empty() || p != nullptr) {\n            if (p != nullptr) {\n                s.push(p);\n                p = p->left;\n            } else {\n                p = s.top();\n                s.pop();\n                result.push_back(p->val);\n                p = p->right;\n            }\n        }\n        return result;\n    }\n};\n")))),(0,a.kt)("h3",{id:"morris-\u4e2d\u5e8f\u904d\u5386"},"Morris \u4e2d\u5e8f\u904d\u5386"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// Binary Tree Inorder Traversal\n// Morris\u4e2d\u5e8f\u904d\u5386\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    vector<int> inorderTraversal(TreeNode *root) {\n        vector<int> result;\n        TreeNode *cur = root, *prev = nullptr;\n\n        while (cur != nullptr) {\n            if (cur->left == nullptr) {\n                result.push_back(cur->val);\n                prev = cur;\n                cur = cur->right;\n            } else {\n                /* \u67e5\u627e\u524d\u9a71 */\n                TreeNode *node = cur->left;\n                while (node->right != nullptr && node->right != cur)\n                    node = node->right;\n\n                if (node->right == nullptr) { /* \u8fd8\u6ca1\u7ebf\u7d22\u5316\uff0c\u5219\u5efa\u7acb\u7ebf\u7d22 */\n                    node->right = cur;\n                    /* prev = cur; \u4e0d\u80fd\u6709\u8fd9\u53e5\uff0ccur\u8fd8\u6ca1\u6709\u88ab\u8bbf\u95ee */\n                    cur = cur->left;\n                } else {    /* \u5df2\u7ecf\u7ebf\u7d22\u5316\uff0c\u5219\u8bbf\u95ee\u8282\u70b9\uff0c\u5e76\u5220\u9664\u7ebf\u7d22  */\n                    result.push_back(cur->val);\n                    node->right = nullptr;\n                    prev = cur;\n                    cur = cur->right;\n                }\n            }\n        }\n        return result;\n    }\n};\n")),(0,a.kt)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/binary-tree/traversal/binary-tree-preorder-traversal"},"Binary Tree Preorder Traversal")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/binary-tree/traversal/binary-tree-postorder-traversal"},"Binary Tree Postorder Traversal")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/binary-tree/traversal/recover-binary-search-tree"},"Recover Binary Search Tree"))))}v.isMDXComponent=!0}}]);