"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[362],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>y});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(t),y=i,v=p["".concat(s,".").concat(y)]||p[y]||d[y]||a;return t?n.createElement(v,l(l({ref:r},c),{},{components:t})):n.createElement(v,l({ref:r},c))}));function y(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=p;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},590:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var n=t(7462),i=(t(7294),t(3905));const a={title:"Binary Tree Right Side View"},l=void 0,o={unversionedId:"binary-tree/traversal/binary-tree-right-side-view",id:"binary-tree/traversal/binary-tree-right-side-view",title:"Binary Tree Right Side View",description:"\u63cf\u8ff0",source:"@site/docs/binary-tree/traversal/binary-tree-right-side-view.md",sourceDirName:"binary-tree/traversal",slug:"/binary-tree/traversal/binary-tree-right-side-view",permalink:"/binary-tree/traversal/binary-tree-right-side-view",draft:!1,editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/binary-tree/traversal/binary-tree-right-side-view.md",tags:[],version:"current",frontMatter:{title:"Binary Tree Right Side View"},sidebar:"someSidebar",previous:{title:"Binary Tree Level Order Traversal II",permalink:"/binary-tree/traversal/binary-tree-level-order-traversal-ii"},next:{title:"Invert Binary Tree",permalink:"/binary-tree/traversal/invert-binary-tree"}},s={},u=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}],c={toc:u};function d(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,i.kt)("p",null,"Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom."),(0,i.kt)("p",null,"For example, given the following binary tree,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"   1            <---\n /   \\\n2     3         <---\n \\     \\\n  5     4       <---\n")),(0,i.kt)("p",null,"You should return ",(0,i.kt)("inlineCode",{parentName:"p"},"[1, 3, 4]"),"."),(0,i.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,i.kt)("p",null,"\u5c42\u6b21\u904d\u5386\u3002"),(0,i.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Binary Tree Right Side View\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\npublic class Solution {\n    public List<Integer> rightSideView(TreeNode root) {\n        List<Integer> result = new ArrayList<>();\n        Queue<TreeNode> current = new LinkedList<>();\n        Queue<TreeNode> next = new LinkedList<>();\n\n        if(root == null) {\n            return result;\n        } else {\n            current.offer(root);\n        }\n\n        while (!current.isEmpty()) {\n            ArrayList<Integer> level = new ArrayList<>(); // elments in one level\n            while (!current.isEmpty()) {\n                TreeNode node = current.poll();\n                level.add(node.val);\n                if (node.left != null) next.add(node.left);\n                if (node.right != null) next.add(node.right);\n            }\n            result.add(level.get(level.size()-1));\n            // swap\n            Queue<TreeNode> tmp = current;\n            current = next;\n            next = tmp;\n        }\n        return result;\n    }\n}\n")))}d.isMDXComponent=!0}}]);