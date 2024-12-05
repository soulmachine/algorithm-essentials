"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[3021],{84348:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>u,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"graph/topological-sort/course-schedule-ii","title":"Course Schedule II","description":"\u63cf\u8ff0","source":"@site/docs/graph/topological-sort/course-schedule-ii.md","sourceDirName":"graph/topological-sort","slug":"/graph/topological-sort/course-schedule-ii","permalink":"/en/graph/topological-sort/course-schedule-ii","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Course Schedule II"},"sidebar":"docs","previous":{"title":"Course Schedule","permalink":"/en/graph/topological-sort/course-schedule"},"next":{"title":"Implement strStr()","permalink":"/en/string/strstr"}}');var a=r(74848),s=r(28453),l=r(11470),i=r(19365);const u={title:"Course Schedule II"},o=void 0,c={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"BFS",id:"bfs",level:4},{value:"DFS",id:"dfs",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}];function p(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,a.jsx)(n.p,{children:"TODO"}),"\n",(0,a.jsx)(n.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,a.jsxs)(n.p,{children:["\u8fd9\u9898\u53ea\u9700\u8981\u5728\u4e0a\u4e00\u9898",(0,a.jsx)(n.a,{href:"/en/graph/topological-sort/course-schedule",children:"Course Schedule"}),"\u7684\u57fa\u7840\u4e0a\uff0c\u6536\u96c6\u7ed3\u679c\u5373\u53ef\uff0c\u5728\u5143\u7d20\u88ab\u5f39\u51fa\u961f\u5217\u7684\u65f6\u5019\uff0c\u5c06\u5176\u52a0\u5165\u7ed3\u679c\u6570\u7ec4\u4e2d\u3002"]}),"\n",(0,a.jsx)(n.h3,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n","\n",(0,a.jsx)(n.h4,{id:"bfs",children:"BFS"}),"\n",(0,a.jsxs)(l.A,{defaultValue:"cpp",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,a.jsx)(i.A,{value:"java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"// TODO\n"})})}),(0,a.jsx)(i.A,{value:"cpp",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"// Course Schedule II\n// Time complexity: O(E+V)\n// Space complexity: O(E+V)\nclass Solution {\npublic:\n    vector<int> findOrder(int numCourses, vector<vector<int>>& prerequisites) {\n        vector<vector<int>> graph(numCourses, vector<int>()); // adjacent list\n        vector<int> in(numCourses); // in degree\n        for (auto p : prerequisites) {\n            graph[p[1]].push_back(p[0]);\n            ++in[p[0]];\n        }\n        queue<int> q;\n        for (int i = 0; i < numCourses; ++i) {\n            if (in[i] == 0) q.push(i);\n        }\n\n        vector<int> result;\n        while (!q.empty()) {\n            int t = q.front(); q.pop();\n            result.push_back(t);\n            for (auto neighbor : graph[t]) {\n                --in[neighbor];\n                if (in[neighbor] == 0) q.push(neighbor);\n            }\n        }\n        if (result.size() != numCourses) result.clear();\n        return result;\n    }\n};\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"dfs",children:"DFS"}),"\n",(0,a.jsxs)(l.A,{defaultValue:"cpp",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,a.jsx)(i.A,{value:"java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"// TODO\n"})})}),(0,a.jsx)(i.A,{value:"cpp",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"// Course Schedule\n// Time complexity: O(E+V)\n// Space complexity: O(E+V)\nclass Solution {\npublic:\n    bool canFinish(int numCourses, vector<vector<int>>& prerequisites) {\n        vector<vector<int>> graph(numCourses, vector<int>()); // // adjacent list\n        vector<int> visited(numCourses); // 0, not visited; 1, visited; -1, cyclic\n        for (auto p : prerequisites) {\n            graph[p[1]].push_back(p[0]);\n        }\n        for (int i = 0; i < numCourses; ++i) {\n            if (!canFinishDFS(graph, visited, i)) return false;\n        }\n        return true;\n    }\n    bool canFinishDFS(vector<vector<int>>& graph, vector<int>& visited, int i) {\n        if (visited[i] == -1) return false;\n        if (visited[i] == 1) return true;\n        visited[i] = -1;\n        for (auto neighbor : graph[i]) {\n            if (!canFinishDFS(graph, visited, neighbor)) return false;\n        }\n        visited[i] = 1;\n        return true;\n    }\n};\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"\u76f8\u5173\u9898\u76ee",children:"\u76f8\u5173\u9898\u76ee"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/en/graph/topological-sort/course-schedule-ii",children:"Course Schedule II"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>l});r(96540);var t=r(34164);const a={tabItem:"tabItem_Ymn6"};var s=r(74848);function l(e){let{children:n,hidden:r,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,l),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>y});var t=r(96540),a=r(34164),s=r(23104),l=r(56347),i=r(205),u=r(57485),o=r(31682),c=r(70679);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}(r);return function(e){const n=(0,o.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function h(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function v(e){let{queryString:n=!1,groupId:r}=e;const a=(0,l.W6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,u.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function f(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,s=p(e),[l,u]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[o,d]=v({queryString:r,groupId:a}),[f,m]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,c.Dv)(r);return[a,(0,t.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),b=(()=>{const e=o??f;return h({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{b&&u(b)}),[b]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),m(e)}),[d,m,s]),tabValues:s}}var m=r(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(74848);function x(e){let{className:n,block:r,selectedValue:t,selectValue:l,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.a_)(),c=e=>{const n=e.currentTarget,r=u.indexOf(n),a=i[r].value;a!==t&&(o(n),l(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;n=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;n=u[r]??u[u.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},n),children:i.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>u.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function j(e){let{lazy:n,children:r,selectedValue:s}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function S(e){const n=f(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,g.jsx)(x,{...n,...e}),(0,g.jsx)(j,{...n,...e})]})}function y(e){const n=(0,m.A)();return(0,g.jsx)(S,{...e,children:d(e.children)},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>i});var t=r(96540);const a={},s=t.createContext(a);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);