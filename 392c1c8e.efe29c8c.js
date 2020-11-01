(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{124:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(7),a=(n(0),n(304)),l={title:"LCA of BST"},i={unversionedId:"binary-tree/bst/lca-of-bst",id:"binary-tree/bst/lca-of-bst",isDocsHomePage:!1,title:"LCA of BST",description:"\u63cf\u8ff0",source:"@site/docs/binary-tree/bst/lca-of-bst.md",slug:"/binary-tree/bst/lca-of-bst",permalink:"/binary-tree/bst/lca-of-bst",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/binary-tree/bst/lca-of-bst.md",version:"current",sidebar:"someSidebar",previous:{title:"Convert Sorted List to Binary Search Tree",permalink:"/binary-tree/bst/convert-sorted-list-to-binary-search-tree"},next:{title:"Kth Smallest Element in a BST",permalink:"/binary-tree/bst/kth-smallest-element-in-a-bst"}},c=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u89e3\u6cd5 1 \u9012\u5f52",id:"\u89e3\u6cd5-1-\u9012\u5f52",children:[]},{value:"\u89e3\u6cd5 2 \u8fed\u4ee3",id:"\u89e3\u6cd5-2-\u8fed\u4ee3",children:[]},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",children:[]}],b={rightToc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(a.b)("p",null,"Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"      _______6______\n       /              \\\n    ___2__          ___8__\n   /      \\        /      \\\n   1      _4       7       9\n         /  \\\n         3   5\n")),Object(a.b)("p",null,"For example, the lowest common ancestor (LCA) of nodes 2 and 8 is 6. Another example is LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition."),Object(a.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(a.b)("p",null,"\u6839\u636e\u4e8c\u53c9\u641c\u7d22\u6811\u7684\u6027\u8d28\uff0c\u4e24\u4e2a\u5b50\u8282\u70b9",Object(a.b)("inlineCode",{parentName:"p"},"p"),",",Object(a.b)("inlineCode",{parentName:"p"},"q"),"\u548c\u6839\u8282\u70b9",Object(a.b)("inlineCode",{parentName:"p"},"root"),"\u7684\u5173\u7cfb\uff0c\u6709\u4ee5\u4e0b\u56db\u79cd\u60c5\u51b5\uff1a"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"\u4e24\u4e2a\u5b50\u8282\u70b9\u90fd\u5728\u6811\u7684\u5de6\u5b50\u6811\u4e0a"),Object(a.b)("li",{parentName:"ol"},"\u4e24\u4e2a\u5b50\u8282\u70b9\u90fd\u5728\u6811\u7684\u53f3\u5b50\u6811\u4e0a"),Object(a.b)("li",{parentName:"ol"},"\u4e00\u4e2a\u5b50\u8282\u70b9\u5728\u5de6\u5b50\u6811\uff0c\u4e00\u4e2a\u5b50\u8282\u70b9\u5728\u53f3\u5b50\u6811"),Object(a.b)("li",{parentName:"ol"},"\u4e00\u4e2a\u5b50\u8282\u70b9\u7684\u503c\u548c\u6839\u8282\u70b9\u7684\u503c\u76f8\u7b49")),Object(a.b)("p",null,"\u4ee5\u9898\u76ee\u4e2d\u7684\u6811\u4e3a\u4f8b\uff0c\u8282\u70b9 1 \u548c\u8282\u70b9 4 \u4e3a\u60c5\u51b5 1\uff0c\u8282\u70b9 7 \u548c\u8282\u70b9 9 \u4e3a\u60c5\u51b5 2\uff0c\u8282\u70b9 1 \u548c\u8282\u70b9 7 \u4e3a\u60c5\u51b5 3\uff0c\u8282\u70b9 2 \u548c 4 \u4e3a\u60c5\u51b5 4\u3002\n\u82e5\u4e3a\u60c5\u51b5 3 \u6216 4\uff0c\u5f53\u524d\u8282\u70b9\u5373\u4e3a\u6700\u8fd1\u516c\u5171\u7956\u5148\uff0c\u82e5\u4e3a\u60c5\u51b5 1 \u6216 2\uff0c\u5219\u8fd8\u9700\u9012\u5f52\u5230\u5de6\u6216\u53f3\u5b50\u6811\u4e0a\uff0c\u7ee7\u7eed\u8fd9\u4e2a\u8fc7\u7a0b\u3002"),Object(a.b)("p",null,"\u8be5\u7b97\u6cd5\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a",Object(a.b)("inlineCode",{parentName:"p"},"O(h)"),"\uff0c",Object(a.b)("inlineCode",{parentName:"p"},"h"),"\u4e3a\u6811\u7684\u9ad8\u5ea6\u3002"),Object(a.b)("h3",{id:"\u89e3\u6cd5-1-\u9012\u5f52"},"\u89e3\u6cd5 1 \u9012\u5f52"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// LCA of BST\n// Time Complexity: O(h), Space Complexity: O(h)\npublic class Solution {\n    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {\n        if (root == null) return null;\n\n        if (Math.max(p.val, q.val) < root.val) {\n            return lowestCommonAncestor(root.left, p, q);\n        } else if (Math.min(p.val, q.val) > root.val) {\n            return lowestCommonAncestor(root.right, p, q);\n        } else {\n            return root;\n        }\n    }\n}\n")),Object(a.b)("h3",{id:"\u89e3\u6cd5-2-\u8fed\u4ee3"},"\u89e3\u6cd5 2 \u8fed\u4ee3"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// LCA of BST\n// Time Complexity: O(h), Space Complexity: O(1)\npublic class Solution {\n    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {\n        while (root != null) {\n            if (Math.max(p.val, q.val) < root.val) {\n                root = root.left;\n            } else if (Math.min(p.val, q.val) > root.val) {\n                root = root.right;\n            } else {\n                return root;\n            }\n        }\n        return null;\n    }\n}\n")),Object(a.b)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/binary-tree/recursion/lca-of-binary-tree"}),"LCA of Binary Tree"))))}p.isMDXComponent=!0},304:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),p=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,d=s["".concat(l,".").concat(m)]||s[m]||u[m]||a;return n?o.a.createElement(d,i(i({ref:t},b),{},{components:n})):o.a.createElement(d,i({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var b=2;b<a;b++)l[b]=n[b];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);