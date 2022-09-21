"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[9333],{3905:(e,r,t)=>{t.d(r,{Zo:()=>v,kt:()=>d});var n=t(7294);function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,l=function(e,r){if(null==e)return{};var t,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(l[t]=e[t]);return l}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},v=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,v=i(e,["components","mdxType","originalType","parentName"]),p=u(t),d=l,m=p["".concat(s,".").concat(d)]||p[d]||c[d]||a;return t?n.createElement(m,o(o({ref:r},v),{},{components:t})):n.createElement(m,o({ref:r},v))}));function d(e,r){var t=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var a=t.length,o=new Array(a);o[0]=p;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var u=2;u<a;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5162:(e,r,t)=>{t.d(r,{Z:()=>o});var n=t(7294),l=t(6010);const a="tabItem_Ymn6";function o(e){let{children:r,hidden:t,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(a,o),hidden:t},r)}},5488:(e,r,t)=>{t.d(r,{Z:()=>d});var n=t(7462),l=t(7294),a=t(6010),o=t(2389),i=t(7392),s=t(7094),u=t(2466);const v="tabList__CuJ",c="tabItem_LNqP";function p(e){var r;const{lazy:t,block:o,defaultValue:p,values:d,groupId:m,className:b}=e,f=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=d??f.map((e=>{let{props:{value:r,label:t,attributes:n}}=e;return{value:r,label:t,attributes:n}})),h=(0,i.l)(y,((e,r)=>e.value===r.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const T=null===p?p:p??(null==(r=f.find((e=>e.props.default)))?void 0:r.props.value)??f[0].props.value;if(null!==T&&!y.some((e=>e.value===T)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${T}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:k}=(0,s.U)(),[O,N]=(0,l.useState)(T),w=[],{blockElementScrollPositionUntilNextRender:L}=(0,u.o5)();if(null!=m){const e=g[m];null!=e&&e!==O&&y.some((r=>r.value===e))&&N(e)}const I=e=>{const r=e.currentTarget,t=w.indexOf(r),n=y[t].value;n!==O&&(L(r),N(n),null!=m&&k(m,String(n)))},x=e=>{var r;let t=null;switch(e.key){case"ArrowRight":{const r=w.indexOf(e.currentTarget)+1;t=w[r]??w[0];break}case"ArrowLeft":{const r=w.indexOf(e.currentTarget)-1;t=w[r]??w[w.length-1];break}}null==(r=t)||r.focus()};return l.createElement("div",{className:(0,a.Z)("tabs-container",v)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":o},b)},y.map((e=>{let{value:r,label:t,attributes:o}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:O===r?0:-1,"aria-selected":O===r,key:r,ref:e=>w.push(e),onKeyDown:x,onFocus:I,onClick:I},o,{className:(0,a.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":O===r})}),t??r)}))),t?(0,l.cloneElement)(f.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},f.map(((e,r)=>(0,l.cloneElement)(e,{key:r,hidden:e.props.value!==O})))))}function d(e){const r=(0,o.Z)();return l.createElement(p,(0,n.Z)({key:String(r)},e))}},8187:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>v,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var n=t(7462),l=(t(7294),t(3905)),a=t(5488),o=t(5162);const i={title:"Binary Tree Level Order Traversal II"},s=void 0,u={unversionedId:"binary-tree/traversal/binary-tree-level-order-traversal-ii",id:"binary-tree/traversal/binary-tree-level-order-traversal-ii",title:"Binary Tree Level Order Traversal II",description:"\u63cf\u8ff0",source:"@site/docs/binary-tree/traversal/binary-tree-level-order-traversal-ii.md",sourceDirName:"binary-tree/traversal",slug:"/binary-tree/traversal/binary-tree-level-order-traversal-ii",permalink:"/binary-tree/traversal/binary-tree-level-order-traversal-ii",draft:!1,tags:[],version:"current",frontMatter:{title:"Binary Tree Level Order Traversal II"},sidebar:"docs",previous:{title:"Binary Tree Level Order Traversal",permalink:"/binary-tree/traversal/binary-tree-level-order-traversal"},next:{title:"Binary Tree Right Side View",permalink:"/binary-tree/traversal/binary-tree-right-side-view"}},v={},c=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u9012\u5f52\u7248",id:"\u9012\u5f52\u7248",level:3},{value:"\u8fed\u4ee3\u7248",id:"\u8fed\u4ee3\u7248",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],p={toc:c};function d(e){let{components:r,...t}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,l.kt)("p",null,"Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root)."),(0,l.kt)("p",null,"For example:\nGiven binary tree ",(0,l.kt)("inlineCode",{parentName:"p"},"{3,9,20,#,#,15,7}"),","),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"    3\n   / \\\n  9  20\n    /  \\\n   15   7\n")),(0,l.kt)("p",null,"return its bottom-up level order traversal as:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[\n  [15,7]\n  [9,20],\n  [3],\n]\n")),(0,l.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,l.kt)("p",null,"\u5728\u4e0a\u4e00\u9898 ",(0,l.kt)("a",{parentName:"p",href:"/binary-tree/traversal/binary-tree-level-order-traversal"},"Binary Tree Level Order Traversal")," \u7684\u57fa\u7840\u4e0a\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"reverse()"),"\u4e00\u4e0b\u5373\u53ef\u3002"),(0,l.kt)("h3",{id:"\u9012\u5f52\u7248"},"\u9012\u5f52\u7248"),(0,l.kt)(a.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// Binary Tree Level Order Traversal II\n// \u9012\u5f52\u7248\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\npublic class Solution {\n    public List<List<Integer>> levelOrderBottom(TreeNode root) {\n        List<List<Integer>> result = new ArrayList<>();\n        traverse(root, 1, result);\n        Collections.reverse(result);\n        return result;\n    }\n\n    void traverse(TreeNode root, int level,\n                  List<List<Integer>> result) {\n        if (root == null) return;\n\n        if (level > result.size())\n            result.add(new ArrayList<>());\n\n        result.get(level-1).add(root.val);\n        traverse(root.left, level+1, result);\n        traverse(root.right, level+1, result);\n    }\n}\n"))),(0,l.kt)(o.Z,{value:"cpp",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"// Binary Tree Level Order Traversal II\n// \u9012\u5f52\u7248\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\npublic:\n    vector<vector<int> > levelOrderBottom(TreeNode *root) {\n        vector<vector<int>> result;\n        traverse(root, 1, result);\n        std::reverse(result.begin(), result.end()); // \u6bd4\u4e0a\u4e00\u9898\u591a\u6b64\u4e00\u884c\n        return result;\n    }\n\n    void traverse(TreeNode *root, size_t level, vector<vector<int>> &result) {\n        if (!root) return;\n\n        if (level > result.size())\n            result.push_back(vector<int>());\n\n        result[level-1].push_back(root->val);\n        traverse(root->left, level+1, result);\n        traverse(root->right, level+1, result);\n    }\n};\n")))),(0,l.kt)("h3",{id:"\u8fed\u4ee3\u7248"},"\u8fed\u4ee3\u7248"),(0,l.kt)(a.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// Binary Tree Level Order Traversal II\n// \u8fed\u4ee3\u7248\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public List<List<Integer>> levelOrderBottom(TreeNode root) {\n        List<List<Integer>> result = new ArrayList<>();\n        Queue<TreeNode> current = new LinkedList<>();\n        Queue<TreeNode> next = new LinkedList<>();\n\n        if(root == null) {\n            return result;\n        } else {\n            current.offer(root);\n        }\n\n        while (!current.isEmpty()) {\n            ArrayList<Integer> level = new ArrayList<>(); // elments in one level\n            while (!current.isEmpty()) {\n                TreeNode node = current.poll();\n                level.add(node.val);\n                if (node.left != null) next.add(node.left);\n                if (node.right != null) next.add(node.right);\n            }\n            result.add(level);\n            // swap\n            Queue<TreeNode> tmp = current;\n            current = next;\n            next = tmp;\n        }\n        Collections.reverse(result);\n        return result;\n    }\n}\n"))),(0,l.kt)(o.Z,{value:"cpp",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"// Binary Tree Level Order Traversal II\n// \u8fed\u4ee3\u7248\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    vector<vector<int> > levelOrderBottom(TreeNode *root) {\n        vector<vector<int> > result;\n        if(root == nullptr) return result;\n\n        queue<TreeNode*> current, next;\n        vector<int> level; // elments in level level\n\n        current.push(root);\n        while (!current.empty()) {\n            while (!current.empty()) {\n                TreeNode* node = current.front();\n                current.pop();\n                level.push_back(node->val);\n                if (node->left != nullptr) next.push(node->left);\n                if (node->right != nullptr) next.push(node->right);\n            }\n            result.push_back(level);\n            level.clear();\n            swap(next, current);\n        }\n        reverse(result.begin(), result.end()); // \u6bd4\u4e0a\u4e00\u9898\u591a\u6b64\u4e00\u884c\n        return result;\n    }\n};\n")))),(0,l.kt)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/binary-tree/traversal/binary-tree-level-order-traversal"},"Binary Tree Level Order Traversal")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/binary-tree/traversal/binary-tree-zigzag-level-order-traversal"},"Binary Tree Zigzag Level Order Traversal"))))}d.isMDXComponent=!0}}]);