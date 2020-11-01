(window.webpackJsonp=window.webpackJsonp||[]).push([[218],{280:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return u}));var r=t(2),a=t(7),o=(t(0),t(304)),i=t(308),d=t(309),c={title:"Clone Graph"},l={unversionedId:"graph/clone-graph",id:"graph/clone-graph",isDocsHomePage:!1,title:"Clone Graph",description:"\u63cf\u8ff0",source:"@site/docs/graph/clone-graph.md",slug:"/graph/clone-graph",permalink:"/graph/clone-graph",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/graph/clone-graph.md",version:"current",sidebar:"someSidebar",previous:{title:"\u56fe\u8282\u70b9\u5b9a\u4e49",permalink:"/graph/README"},next:{title:"Reverse Bits",permalink:"/bitwise-operations/reverse-bits"}},s=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"DFS",id:"dfs",children:[]},{value:"BFS",id:"bfs",children:[]}],p={rightToc:s};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(o.b)("p",null,"Clone an undirected graph. Each node in the graph contains a ",Object(o.b)("inlineCode",{parentName:"p"},"label")," and a list of its ",Object(o.b)("inlineCode",{parentName:"p"},"neighbours"),"."),Object(o.b)("p",null,"OJ's undirected graph serialization:\nNodes are labeled uniquely."),Object(o.b)("p",null,"We use ",Object(o.b)("inlineCode",{parentName:"p"},"#")," as a separator for each node, and ",Object(o.b)("inlineCode",{parentName:"p"},",")," as a separator for node label and each neighbour of the node.\nAs an example, consider the serialized graph ",Object(o.b)("inlineCode",{parentName:"p"},"{0,1,2#1,2#2,2}"),"."),Object(o.b)("p",null,"The graph has a total of three nodes, and therefore contains three parts as separated by ",Object(o.b)("inlineCode",{parentName:"p"},"#"),"."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"First node is labeled as 0. Connect node 0 to both nodes 1 and 2."),Object(o.b)("li",{parentName:"ol"},"Second node is labeled as 1. Connect node 1 to node 2."),Object(o.b)("li",{parentName:"ol"},"Third node is labeled as 2. Connect node 2 to node 2 (itself), thus forming a self-cycle.")),Object(o.b)("p",null,"Visually, the graph looks like the following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"       1\n      / \\\n     /   \\\n    0 --- 2\n         / \\\n         \\_/\n")),Object(o.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(o.b)("p",null,"\u5e7f\u5ea6\u4f18\u5148\u904d\u5386\u6216\u6df1\u5ea6\u4f18\u5148\u904d\u5386\u90fd\u53ef\u4ee5\u3002"),Object(o.b)("h3",{id:"dfs"},"DFS"),Object(o.b)(i.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(o.b)(d.a,{value:"java",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Clone Graph\n// DFS\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\npublic class Solution {\n    public UndirectedGraphNode cloneGraph(UndirectedGraphNode node) {\n        if(node == null) return null;\n        // key is original node\uff0cvalue is copied node\n        HashMap<UndirectedGraphNode, UndirectedGraphNode> visited = new HashMap<>();\n        clone(node, visited);\n        return visited.get(node);\n    }\n    // DFS\n    private static UndirectedGraphNode clone(UndirectedGraphNode node,\n                                              HashMap<UndirectedGraphNode,\n                                                      UndirectedGraphNode> visited) {\n        // a copy already exists\n        if (visited.containsKey(node)) return visited.get(node);\n\n        UndirectedGraphNode new_node = new UndirectedGraphNode(node.label);\n        visited.put(node, new_node);\n        for (UndirectedGraphNode nbr : node.neighbors)\n            new_node.neighbors.add(clone(nbr, visited));\n        return new_node;\n    }\n}\n"))),Object(o.b)(d.a,{value:"cpp",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"// Clone Graph\n// DFS\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\npublic:\n    UndirectedGraphNode *cloneGraph(const UndirectedGraphNode *node) {\n        if(node == nullptr) return nullptr;\n        // key is original node\uff0cvalue is copied node\n        unordered_map<const UndirectedGraphNode *,\n                            UndirectedGraphNode *> visited;\n        clone(node, visited);\n        return visited[node];\n    }\nprivate:\n    // DFS\n    static UndirectedGraphNode* clone(const UndirectedGraphNode *node,\n            unordered_map<const UndirectedGraphNode *,\n            UndirectedGraphNode *> &visited) {\n        // a copy already exists\n        if (visited.find(node) != visited.end()) return visited[node];\n\n        UndirectedGraphNode *new_node = new UndirectedGraphNode(node->label);\n        visited[node] = new_node;\n        for (auto nbr : node->neighbors)\n            new_node->neighbors.push_back(clone(nbr, visited));\n        return new_node;\n    }\n};\n")))),Object(o.b)("h3",{id:"bfs"},"BFS"),Object(o.b)(i.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(o.b)(d.a,{value:"java",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Clone Graph\n// BFS\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\npublic class Solution {\n    public UndirectedGraphNode cloneGraph(UndirectedGraphNode node) {\n        if (node == null) return null;\n        // key is original node\uff0cvalue is copied node\n        HashMap<UndirectedGraphNode,UndirectedGraphNode> visited = new HashMap<>();\n        // each node in queue is already copied itself\n        // but neighbors are not copied yet\n        Queue<UndirectedGraphNode> q = new LinkedList<>();\n        q.offer(node);\n        visited.put(node, new UndirectedGraphNode(node.label));\n        while (!q.isEmpty()) {\n            UndirectedGraphNode cur = q.poll();\n            for (UndirectedGraphNode nbr : cur.neighbors) {\n                // a copy already exists\n                if (visited.containsKey(nbr)) {\n                    visited.get(cur).neighbors.add(visited.get(nbr));\n                } else {\n                    UndirectedGraphNode new_node =\n                            new UndirectedGraphNode(nbr.label);\n                    visited.put(nbr, new_node);\n                    visited.get(cur).neighbors.add(new_node);\n                    q.offer(nbr);\n                }\n            }\n        }\n        return visited.get(node);\n    }\n}\n"))),Object(o.b)(d.a,{value:"cpp",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"// Clone Graph\n// BFS\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\npublic:\n    UndirectedGraphNode *cloneGraph(const UndirectedGraphNode *node) {\n        if (node == nullptr) return nullptr;\n        // key is original node\uff0cvalue is copied node\n        unordered_map<const UndirectedGraphNode *,\n                            UndirectedGraphNode *> copied;\n        // each node in queue is already copied itself\n        // but neighbors are not copied yet\n        queue<const UndirectedGraphNode *> q;\n        q.push(node);\n        copied[node] = new UndirectedGraphNode(node->label);\n        while (!q.empty()) {\n            const UndirectedGraphNode *cur = q.front();\n            q.pop();\n            for (auto nbr : cur->neighbors) {\n                // a copy already exists\n                if (copied.find(nbr) != copied.end()) {\n                    copied[cur]->neighbors.push_back(copied[nbr]);\n                } else {\n                    UndirectedGraphNode *new_node =\n                            new UndirectedGraphNode(nbr->label);\n                    copied[nbr] = new_node;\n                    copied[cur]->neighbors.push_back(new_node);\n                    q.push(nbr);\n                }\n            }\n        }\n        return copied[node];\n    }\n};\n")))))}u.isMDXComponent=!0},304:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return h}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),s=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},p=function(e){var n=s(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(t),b=r,h=p["".concat(i,".").concat(b)]||p[b]||u[b]||o;return t?a.a.createElement(h,d(d({ref:n},l),{},{components:t})):a.a.createElement(h,d({ref:n},l))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=b;var d={};for(var c in n)hasOwnProperty.call(n,c)&&(d[c]=n[c]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},305:function(e,n,t){"use strict";function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}n.a=function(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}},306:function(e,n,t){"use strict";var r=t(0);const a=Object(r.createContext)(void 0);n.a=a},307:function(e,n,t){"use strict";var r=t(0),a=t(306);n.a=function(){const e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},308:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(307),i=t(305),d=t(49),c=t.n(d);const l=37,s=39;n.a=function(e){const{block:n,children:t,defaultValue:d,values:p,groupId:u}=e,{tabGroupChoices:b,setTabGroupChoices:h}=Object(o.a)(),[f,v]=Object(r.useState)(d),[m,O]=Object(r.useState)(!1);if(null!=u){const e=b[u];null!=e&&e!==f&&p.some((n=>n.value===e))&&v(e)}const g=e=>{v(e),null!=u&&h(u,e)},y=[],j=e=>{e.metaKey||e.altKey||e.ctrlKey||O(!0)},N=()=>{O(!1)};return Object(r.useEffect)((()=>{window.addEventListener("keydown",j),window.addEventListener("mousedown",N)}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n})},p.map((({value:e,label:n})=>a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===e,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":f===e}),style:m?{}:{outline:"none"},key:e,ref:e=>y.push(e),onKeyDown:e=>{((e,n,t)=>{switch(t.keyCode){case s:((e,n)=>{const t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()})(e,n);break;case l:((e,n)=>{const t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()})(e,n)}})(y,e.target,e),j(e)},onFocus:()=>g(e),onClick:()=>{g(e),O(!1)},onPointerDown:()=>O(!1)},n)))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(t).filter((e=>e.props.value===f))[0]))}},309:function(e,n,t){"use strict";var r=t(0),a=t.n(r);n.a=function(e){return a.a.createElement("div",null,e.children)}}}]);