"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[7530],{3905:(e,r,t)=>{t.d(r,{Zo:()=>v,kt:()=>d});var n=t(7294);function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,l=function(e,r){if(null==e)return{};var t,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(l[t]=e[t]);return l}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},v=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,v=i(e,["components","mdxType","originalType","parentName"]),p=u(t),d=l,f=p["".concat(s,".").concat(d)]||p[d]||c[d]||a;return t?n.createElement(f,o(o({ref:r},v),{},{components:t})):n.createElement(f,o({ref:r},v))}));function d(e,r){var t=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var a=t.length,o=new Array(a);o[0]=p;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var u=2;u<a;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5162:(e,r,t)=>{t.d(r,{Z:()=>o});var n=t(7294),l=t(6010);const a="tabItem_Ymn6";function o(e){let{children:r,hidden:t,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(a,o),hidden:t},r)}},5488:(e,r,t)=>{t.d(r,{Z:()=>d});var n=t(7462),l=t(7294),a=t(6010),o=t(2389),i=t(7392),s=t(7094),u=t(2466);const v="tabList__CuJ",c="tabItem_LNqP";function p(e){var r;const{lazy:t,block:o,defaultValue:p,values:d,groupId:f,className:b}=e,g=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),m=d??g.map((e=>{let{props:{value:r,label:t,attributes:n}}=e;return{value:r,label:t,attributes:n}})),y=(0,i.l)(m,((e,r)=>e.value===r.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===p?p:p??(null==(r=g.find((e=>e.props.default)))?void 0:r.props.value)??g[0].props.value;if(null!==h&&!m.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${m.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:T,setTabGroupChoices:k}=(0,s.U)(),[O,_]=(0,l.useState)(h),N=[],{blockElementScrollPositionUntilNextRender:w}=(0,u.o5)();if(null!=f){const e=T[f];null!=e&&e!==O&&m.some((r=>r.value===e))&&_(e)}const L=e=>{const r=e.currentTarget,t=N.indexOf(r),n=m[t].value;n!==O&&(w(r),_(n),null!=f&&k(f,String(n)))},z=e=>{var r;let t=null;switch(e.key){case"ArrowRight":{const r=N.indexOf(e.currentTarget)+1;t=N[r]??N[0];break}case"ArrowLeft":{const r=N.indexOf(e.currentTarget)-1;t=N[r]??N[N.length-1];break}}null==(r=t)||r.focus()};return l.createElement("div",{className:(0,a.Z)("tabs-container",v)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":o},b)},m.map((e=>{let{value:r,label:t,attributes:o}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:O===r?0:-1,"aria-selected":O===r,key:r,ref:e=>N.push(e),onKeyDown:z,onFocus:L,onClick:L},o,{className:(0,a.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":O===r})}),t??r)}))),t?(0,l.cloneElement)(g.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},g.map(((e,r)=>(0,l.cloneElement)(e,{key:r,hidden:e.props.value!==O})))))}function d(e){const r=(0,o.Z)();return l.createElement(p,(0,n.Z)({key:String(r)},e))}},1364:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>v,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var n=t(7462),l=(t(7294),t(3905)),a=t(5488),o=t(5162);const i={title:"Binary Tree Zigzag Level Order Traversal"},s=void 0,u={unversionedId:"binary-tree/traversal/binary-tree-zigzag-level-order-traversal",id:"binary-tree/traversal/binary-tree-zigzag-level-order-traversal",title:"Binary Tree Zigzag Level Order Traversal",description:"\u63cf\u8ff0",source:"@site/docs/binary-tree/traversal/binary-tree-zigzag-level-order-traversal.md",sourceDirName:"binary-tree/traversal",slug:"/binary-tree/traversal/binary-tree-zigzag-level-order-traversal",permalink:"/en/binary-tree/traversal/binary-tree-zigzag-level-order-traversal",draft:!1,tags:[],version:"current",frontMatter:{title:"Binary Tree Zigzag Level Order Traversal"},sidebar:"docs",previous:{title:"Binary Search Tree Iterator",permalink:"/en/binary-tree/traversal/binary-search-tree-iterator"},next:{title:"Recover Binary Search Tree",permalink:"/en/binary-tree/traversal/recover-binary-search-tree"}},v={},c=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u9012\u5f52\u7248",id:"\u9012\u5f52\u7248",level:3},{value:"\u8fed\u4ee3\u7248",id:"\u8fed\u4ee3\u7248",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],p={toc:c};function d(e){let{components:r,...t}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,l.kt)("p",null,"Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between)."),(0,l.kt)("p",null,"For example:"),(0,l.kt)("p",null,"Given binary tree ",(0,l.kt)("inlineCode",{parentName:"p"},"{3,9,20,#,#,15,7}"),","),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"    3\n   / \\\n  9  20\n    /  \\\n   15   7\n")),(0,l.kt)("p",null,"return its zigzag level order traversal as:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[\n  [3],\n  [20,9],\n  [15,7]\n]\n")),(0,l.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,l.kt)("p",null,"\u5e7f\u5ea6\u4f18\u5148\u904d\u5386\uff0c\u7528\u4e00\u4e2a bool \u8bb0\u5f55\u662f\u4ece\u5de6\u5230\u53f3\u8fd8\u662f\u4ece\u53f3\u5230\u5de6\uff0c\u6bcf\u4e00\u5c42\u7ed3\u675f\u5c31\u7ffb\u8f6c\u4e00\u4e0b\u3002"),(0,l.kt)("h3",{id:"\u9012\u5f52\u7248"},"\u9012\u5f52\u7248"),(0,l.kt)(a.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// Binary Tree Zigzag Level Order Traversal\n// \u9012\u5f52\u7248\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\npublic class Solution {\n    public List<List<Integer>> zigzagLevelOrder(TreeNode root) {\n        List<List<Integer>> result = new ArrayList<>();\n        traverse(root, 1, result, true);\n        return result;\n    }\n\n    private static void traverse(TreeNode root, int level, List<List<Integer>> result,\n                                 boolean left_to_right) {\n        if (root == null) return;\n\n        if (level > result.size())\n            result.add(new ArrayList<>());\n\n        if (left_to_right)\n            result.get(level-1).add(root.val);\n        else\n            result.get(level-1).add(0, root.val);\n\n        traverse(root.left, level+1, result, !left_to_right);\n        traverse(root.right, level+1, result, !left_to_right);\n    }\n}\n"))),(0,l.kt)(o.Z,{value:"cpp",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"// Binary Tree Zigzag Level Order Traversal\n// \u9012\u5f52\u7248\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\npublic:\n    vector<vector<int> > zigzagLevelOrder(TreeNode *root) {\n        vector<vector<int>> result;\n        traverse(root, 1, result, true);\n        return result;\n    }\n\n    void traverse(TreeNode *root, size_t level, vector<vector<int>> &result,\n            bool left_to_right) {\n        if (!root) return;\n\n        if (level > result.size())\n            result.push_back(vector<int>());\n\n        if (left_to_right)\n            result[level-1].push_back(root->val);\n        else\n            result[level-1].insert(result[level-1].begin(), root->val);\n\n        traverse(root->left, level+1, result, !left_to_right);\n        traverse(root->right, level+1, result, !left_to_right);\n    }\n};\n")))),(0,l.kt)("h3",{id:"\u8fed\u4ee3\u7248"},"\u8fed\u4ee3\u7248"),(0,l.kt)(a.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// Binary Tree Zigzag Level Order Traversal\n// \u5e7f\u5ea6\u4f18\u5148\u904d\u5386\uff0c\u7528\u4e00\u4e2abool\u8bb0\u5f55\u662f\u4ece\u5de6\u5230\u53f3\u8fd8\u662f\u4ece\u53f3\u5230\u5de6\uff0c\u6bcf\u4e00\u5c42\u7ed3\u675f\u5c31\u7ffb\u8f6c\u4e00\u4e0b\u3002\n// \u8fed\u4ee3\u7248\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\npublic class Solution {\n    public List<List<Integer>> zigzagLevelOrder(TreeNode root) {\n        List<List<Integer>> result = new ArrayList<>();\n        Queue<TreeNode> current = new LinkedList<>();\n        Queue<TreeNode> next = new LinkedList<>();\n        boolean left_to_right = true;\n\n        if(root == null) {\n            return result;\n        } else {\n            current.offer(root);\n        }\n\n        while (!current.isEmpty()) {\n            ArrayList<Integer> level = new ArrayList<>(); // elments in one level\n            while (!current.isEmpty()) {\n                TreeNode node = current.poll();\n                level.add(node.val);\n                if (node.left != null) next.offer(node.left);\n                if (node.right != null) next.offer(node.right);\n            }\n            if (!left_to_right) Collections.reverse(level);\n            result.add(level);\n            left_to_right = !left_to_right;\n            // swap\n            Queue<TreeNode> tmp = current;\n            current = next;\n            next = tmp;\n        }\n        return result;\n    }\n}\n"))),(0,l.kt)(o.Z,{value:"cpp",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"// Binary Tree Zigzag Level Order Traversal\n// \u5e7f\u5ea6\u4f18\u5148\u904d\u5386\uff0c\u7528\u4e00\u4e2abool\u8bb0\u5f55\u662f\u4ece\u5de6\u5230\u53f3\u8fd8\u662f\u4ece\u53f3\u5230\u5de6\uff0c\u6bcf\u4e00\u5c42\u7ed3\u675f\u5c31\u7ffb\u8f6c\u4e00\u4e0b\u3002\n// \u8fed\u4ee3\u7248\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\npublic:\n    vector<vector<int> > zigzagLevelOrder(TreeNode *root) {\n        vector<vector<int> > result;\n        queue<TreeNode*> current, next;\n        bool left_to_right = true;\n\n        if(root == nullptr) {\n            return result;\n        } else {\n            current.push(root);\n        }\n\n        while (!current.empty()) {\n            vector<int> level; // elments in one level\n            while (!current.empty()) {\n                TreeNode* node = current.front();\n                current.pop();\n                level.push_back(node->val);\n                if (node->left != nullptr) next.push(node->left);\n                if (node->right != nullptr) next.push(node->right);\n            }\n            if (!left_to_right) reverse(level.begin(), level.end());\n            result.push_back(level);\n            left_to_right = !left_to_right;\n            swap(next, current);\n        }\n        return result;\n    }\n};\n")))),(0,l.kt)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/en/binary-tree/traversal/binary-tree-level-order-traversal"},"Binary Tree Level Order Traversal")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/en/binary-tree/traversal/binary-tree-level-order-traversal-ii"},"Binary Tree Level Order Traversal II"))))}d.isMDXComponent=!0}}]);