"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[666],{47985:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"graph/ufs/number-of-connected-components-in-an-undirected-graph","title":"Number of Connected Components in an Undirected Graph","description":"\u63cf\u8ff0","source":"@site/docs/graph/ufs/number-of-connected-components-in-an-undirected-graph.md","sourceDirName":"graph/ufs","slug":"/graph/ufs/number-of-connected-components-in-an-undirected-graph","permalink":"/graph/ufs/number-of-connected-components-in-an-undirected-graph","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Number of Connected Components in an Undirected Graph"},"sidebar":"docs","previous":{"title":"\u5e76\u67e5\u96c6","permalink":"/graph/ufs/"},"next":{"title":"Number of Provinces","permalink":"/graph/ufs/number-of-provinces"}}');var a=t(74848),s=t(28453),i=t(11470),l=t(19365);const o={title:"Number of Connected Components in an Undirected Graph"},u=void 0,c={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u6df1\u641c",id:"\u6df1\u641c",level:4},{value:"\u5e76\u67e5\u96c6",id:"\u5e76\u67e5\u96c6",level:4},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}];function p(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,a.jsx)(n.p,{children:"TODO"}),"\n",(0,a.jsx)(n.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,a.jsx)(n.p,{children:"TODO"}),"\n",(0,a.jsx)(n.h3,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n",(0,a.jsx)(n.h4,{id:"\u6df1\u641c",children:"\u6df1\u641c"}),"\n","\n",(0,a.jsxs)(i.A,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,a.jsx)(l.A,{value:"java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"// TODO\n"})})}),(0,a.jsx)(l.A,{value:"cpp",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"// Number of Connected Components in an Undirected Graph\n// Time complexity: O(E+V)\n// Space complexity: O(E+V)\nclass Solution {\npublic:\n    int countComponents(int n, vector<vector<int>>& edges) {\n        if (n == 0) return 0;\n      \n        int components = 0;\n        vector<bool> visited(n, false);\n        vector<int> adjList[n];\n    \n        for (int i = 0; i < edges.size(); i++) {\n            adjList[edges[i][0]].push_back(edges[i][1]);\n            adjList[edges[i][1]].push_back(edges[i][0]);\n        }\n\n        for (int i = 0; i < n; i++) {\n            if (!visited[i]) {\n                components++;\n                dfs(adjList, visited, i);\n            }\n        }\n        return components;\n    }\n\nprivate:\n    void dfs(const vector<int> adjList[], vector<bool> &visited, int src) {\n        visited[src] = true;\n        \n        for (int neighbor : adjList[src]) {\n            if (!visited[neighbor]) {\n                dfs(adjList, visited, neighbor);\n            }\n        }\n    }\n};\n"})})}),(0,a.jsx)(l.A,{value:"python",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"# Empty stub since input only contains a comment\n# TODO\n"})})})]}),"\n",(0,a.jsx)(n.h4,{id:"\u5e76\u67e5\u96c6",children:"\u5e76\u67e5\u96c6"}),"\n",(0,a.jsxs)(i.A,{defaultValue:"cpp",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,a.jsx)(l.A,{value:"java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"// TODO\n"})})}),(0,a.jsx)(l.A,{value:"cpp",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"class DSU {\n// Plese copy from https://algorithm-essentials.soulmachine.me/graph/ufs/#union-by-rank\n};\n\n// Number of Connected Components in an Undirected Graph\n// Time complexity: O(E*log*V)\n// Space complexity: O(V)\nclass Solution {\npublic:\n    int countComponents(int n, vector<vector<int>>& edges) {\n        const int E = edges.size();\n        DSU dsu(n);\n\n        int components = n;\n        for (int i = 0; i < E; i++) {\n            components -= dsu.merge(edges[i][0], edges[i][1]);\n        }\n        return components;\n    }\n};\n"})})}),(0,a.jsx)(l.A,{value:"python",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"# Since the input is just a single line TODO comment, here's the translation\n# TODO\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"\u76f8\u5173\u9898\u76ee",children:"\u76f8\u5173\u9898\u76ee"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/graph/ufs/number-of-provinces",children:"Number of Provinces"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var r=t(34164);const a={tabItem:"tabItem_Ymn6"};var s=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>N});var r=t(96540),a=t(34164),s=t(23104),i=t(56347),l=t(205),o=t(57485),u=t(31682),c=t(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=p(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[u,d]=m({queryString:t,groupId:a}),[f,v]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,c.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),b=(()=>{const e=u??f;return h({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),v(e)}),[d,v,s]),tabValues:s}}var v=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function j(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const n=e.currentTarget,t=o.indexOf(n),a=l[t].value;a!==r&&(u(n),i(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:s}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=f(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,g.jsx)(j,{...n,...e}),(0,g.jsx)(x,{...n,...e})]})}function N(e){const n=(0,v.A)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var r=t(96540);const a={},s=r.createContext(a);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);