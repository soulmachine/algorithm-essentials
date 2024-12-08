"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[4135],{53878:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>u});const a=JSON.parse('{"id":"graph/clone-graph","title":"Clone Graph","description":"\u63cf\u8ff0","source":"@site/docs/graph/clone-graph.md","sourceDirName":"graph","slug":"/graph/clone-graph","permalink":"/graph/clone-graph","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Clone Graph"},"sidebar":"docs","previous":{"title":"\u56fe","permalink":"/graph/"},"next":{"title":"Graph Valid Tree","permalink":"/graph/graph-valid-tree"}}');var o=r(74848),t=r(28453),d=r(11470),i=r(19365);const l={title:"Clone Graph"},s=void 0,c={},u=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"DFS",id:"dfs",level:3},{value:"BFS",id:"bfs",level:3}];function p(e){const n={code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,o.jsxs)(n.p,{children:["Clone an undirected graph. Each node in the graph contains a ",(0,o.jsx)(n.code,{children:"label"})," and a list of its ",(0,o.jsx)(n.code,{children:"neighbours"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"OJ's undirected graph serialization:\nNodes are labeled uniquely."}),"\n",(0,o.jsxs)(n.p,{children:["We use ",(0,o.jsx)(n.code,{children:"#"})," as a separator for each node, and ",(0,o.jsx)(n.code,{children:","})," as a separator for node label and each neighbour of the node.\nAs an example, consider the serialized graph ",(0,o.jsx)(n.code,{children:"{0,1,2#1,2#2,2}"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["The graph has a total of three nodes, and therefore contains three parts as separated by ",(0,o.jsx)(n.code,{children:"#"}),"."]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"First node is labeled as 0. Connect node 0 to both nodes 1 and 2."}),"\n",(0,o.jsx)(n.li,{children:"Second node is labeled as 1. Connect node 1 to node 2."}),"\n",(0,o.jsx)(n.li,{children:"Third node is labeled as 2. Connect node 2 to node 2 (itself), thus forming a self-cycle."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Visually, the graph looks like the following:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"       1\n      / \\\n     /   \\\n    0 --- 2\n         / \\\n         \\_/\n"})}),"\n",(0,o.jsx)(n.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,o.jsx)(n.p,{children:"\u5e7f\u5ea6\u4f18\u5148\u904d\u5386\u6216\u6df1\u5ea6\u4f18\u5148\u904d\u5386\u90fd\u53ef\u4ee5\u3002"}),"\n",(0,o.jsx)(n.h3,{id:"dfs",children:"DFS"}),"\n","\n",(0,o.jsxs)(d.A,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,o.jsx)(i.A,{value:"java",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"// Clone Graph\n// DFS\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\npublic class Solution {\n    public UndirectedGraphNode cloneGraph(UndirectedGraphNode node) {\n        if(node == null) return null;\n        // key is original node\uff0cvalue is copied node\n        HashMap<UndirectedGraphNode, UndirectedGraphNode> visited = new HashMap<>();\n        clone(node, visited);\n        return visited.get(node);\n    }\n    // DFS\n    private static UndirectedGraphNode clone(UndirectedGraphNode node,\n                                              HashMap<UndirectedGraphNode,\n                                                      UndirectedGraphNode> visited) {\n        // a copy already exists\n        if (visited.containsKey(node)) return visited.get(node);\n\n        UndirectedGraphNode new_node = new UndirectedGraphNode(node.label);\n        visited.put(node, new_node);\n        for (UndirectedGraphNode nbr : node.neighbors)\n            new_node.neighbors.add(clone(nbr, visited));\n        return new_node;\n    }\n}\n"})})}),(0,o.jsx)(i.A,{value:"cpp",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"// Clone Graph\n// DFS\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\npublic:\n    UndirectedGraphNode *cloneGraph(const UndirectedGraphNode *node) {\n        if(node == nullptr) return nullptr;\n        // key is original node\uff0cvalue is copied node\n        unordered_map<const UndirectedGraphNode *,\n                            UndirectedGraphNode *> visited;\n        clone(node, visited);\n        return visited[node];\n    }\nprivate:\n    // DFS\n    static UndirectedGraphNode* clone(const UndirectedGraphNode *node,\n            unordered_map<const UndirectedGraphNode *,\n            UndirectedGraphNode *> &visited) {\n        // a copy already exists\n        if (visited.find(node) != visited.end()) return visited[node];\n\n        UndirectedGraphNode *new_node = new UndirectedGraphNode(node->label);\n        visited[node] = new_node;\n        for (auto nbr : node->neighbors)\n            new_node->neighbors.push_back(clone(nbr, visited));\n        return new_node;\n    }\n};\n"})})}),(0,o.jsx)(i.A,{value:"python",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"# Clone Graph\n# DFS, time complexity O(n), space complexity O(n)\nclass Solution:\n    def cloneGraph(self, node: 'UndirectedGraphNode') -> 'UndirectedGraphNode':\n        if not node:\n            return None\n        # key is original node, value is copied node\n        visited = {}\n        return self.clone(node, visited)\n\n    # DFS\n    def clone(self, node: 'UndirectedGraphNode', visited: dict) -> 'UndirectedGraphNode':\n        # a copy already exists\n        if node in visited:\n            return visited[node]\n\n        new_node = UndirectedGraphNode(node.label)\n        visited[node] = new_node\n        for nbr in node.neighbors:\n            new_node.neighbors.append(self.clone(nbr, visited))\n        return new_node\n"})})})]}),"\n",(0,o.jsx)(n.h3,{id:"bfs",children:"BFS"}),"\n",(0,o.jsxs)(d.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,o.jsx)(i.A,{value:"java",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"// Clone Graph\n// BFS\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\npublic class Solution {\n    public UndirectedGraphNode cloneGraph(UndirectedGraphNode node) {\n        if (node == null) return null;\n        // key is original node\uff0cvalue is copied node\n        HashMap<UndirectedGraphNode,UndirectedGraphNode> visited = new HashMap<>();\n        // each node in queue is already copied itself\n        // but neighbors are not copied yet\n        Queue<UndirectedGraphNode> q = new LinkedList<>();\n        q.offer(node);\n        visited.put(node, new UndirectedGraphNode(node.label));\n        while (!q.isEmpty()) {\n            UndirectedGraphNode cur = q.poll();\n            for (UndirectedGraphNode nbr : cur.neighbors) {\n                // a copy already exists\n                if (visited.containsKey(nbr)) {\n                    visited.get(cur).neighbors.add(visited.get(nbr));\n                } else {\n                    UndirectedGraphNode new_node =\n                            new UndirectedGraphNode(nbr.label);\n                    visited.put(nbr, new_node);\n                    visited.get(cur).neighbors.add(new_node);\n                    q.offer(nbr);\n                }\n            }\n        }\n        return visited.get(node);\n    }\n}\n"})})}),(0,o.jsx)(i.A,{value:"cpp",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"// Clone Graph\n// BFS\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\npublic:\n    UndirectedGraphNode *cloneGraph(const UndirectedGraphNode *node) {\n        if (node == nullptr) return nullptr;\n        // key is original node\uff0cvalue is copied node\n        unordered_map<const UndirectedGraphNode *,\n                            UndirectedGraphNode *> copied;\n        // each node in queue is already copied itself\n        // but neighbors are not copied yet\n        queue<const UndirectedGraphNode *> q;\n        q.push(node);\n        copied[node] = new UndirectedGraphNode(node->label);\n        while (!q.empty()) {\n            const UndirectedGraphNode *cur = q.front();\n            q.pop();\n            for (auto nbr : cur->neighbors) {\n                // a copy already exists\n                if (copied.find(nbr) != copied.end()) {\n                    copied[cur]->neighbors.push_back(copied[nbr]);\n                } else {\n                    UndirectedGraphNode *new_node =\n                            new UndirectedGraphNode(nbr->label);\n                    copied[nbr] = new_node;\n                    copied[cur]->neighbors.push_back(new_node);\n                    q.push(nbr);\n                }\n            }\n        }\n        return copied[node];\n    }\n};\n"})})}),(0,o.jsx)(i.A,{value:"python",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"# Clone Graph\n# BFS\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nfrom collections import deque\n\nclass Solution:\n    def cloneGraph(self, node: 'Node') -> 'Node':\n        if not node:\n            return None\n        # key is original node\uff0cvalue is copied node\n        visited = {}\n        # each node in queue is already copied itself\n        # but neighbors are not copied yet\n        q = deque()\n        q.append(node)\n        visited[node] = Node(node.val)\n        while q:\n            cur = q.popleft()\n            for nbr in cur.neighbors:\n                # a copy already exists\n                if nbr in visited:\n                    visited[cur].neighbors.append(visited[nbr])\n                else:\n                    new_node = Node(nbr.val)\n                    visited[nbr] = new_node\n                    visited[cur].neighbors.append(new_node)\n                    q.append(nbr)\n        return visited[node]\n"})})})]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>d});r(96540);var a=r(34164);const o={tabItem:"tabItem_Ymn6"};var t=r(74848);function d(e){let{children:n,hidden:r,className:d}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,a.A)(o.tabItem,d),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>j});var a=r(96540),o=r(34164),t=r(23104),d=r(56347),i=r(205),l=r(57485),s=r(31682),c=r(70679);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:r}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:a,default:o}}=e;return{value:n,label:r,attributes:a,default:o}}))}(r);return function(e){const n=(0,s.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function h(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:r}=e;const o=(0,d.W6)(),t=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,l.aZ)(t),(0,a.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(o.location.search);n.set(t,e),o.replace({...o.location,search:n.toString()})}),[t,o])]}function v(e){const{defaultValue:n,queryString:r=!1,groupId:o}=e,t=p(e),[d,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:t}))),[s,u]=b({queryString:r,groupId:o}),[v,f]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,t]=(0,c.Dv)(r);return[o,(0,a.useCallback)((e=>{r&&t.set(e)}),[r,t])]}({groupId:o}),g=(()=>{const e=s??v;return h({value:e,tabValues:t})?e:null})();(0,i.A)((()=>{g&&l(g)}),[g]);return{selectedValue:d,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,t]),tabValues:t}}var f=r(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=r(74848);function x(e){let{className:n,block:r,selectedValue:a,selectValue:d,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:s}=(0,t.a_)(),c=e=>{const n=e.currentTarget,r=l.indexOf(n),o=i[r].value;o!==a&&(s(n),d(o))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;n=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;n=l[r]??l[l.length-1];break}}n?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":r},n),children:i.map((e=>{let{value:n,label:r,attributes:t}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:u,onClick:c,...t,className:(0,o.A)("tabs__item",g.tabItem,t?.className,{"tabs__item--active":a===n}),children:r??n},n)}))})}function N(e){let{lazy:n,children:r,selectedValue:t}=e;const d=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=d.find((e=>e.props.value===t));return e?(0,a.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:d.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function y(e){const n=v(e);return(0,m.jsxs)("div",{className:(0,o.A)("tabs-container",g.tabList),children:[(0,m.jsx)(x,{...n,...e}),(0,m.jsx)(N,{...n,...e})]})}function j(e){const n=(0,f.A)();return(0,m.jsx)(y,{...e,children:u(e.children)},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>i});var a=r(96540);const o={},t=a.createContext(o);function d(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);