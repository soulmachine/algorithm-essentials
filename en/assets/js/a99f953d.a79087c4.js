"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[7851],{79486:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"graph/ufs/number-of-islands","title":"Number of Islands","description":"\u63cf\u8ff0","source":"@site/docs/graph/ufs/number-of-islands.md","sourceDirName":"graph/ufs","slug":"/graph/ufs/number-of-islands","permalink":"/en/graph/ufs/number-of-islands","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Number of Islands"},"sidebar":"docs","previous":{"title":"Number of Provinces","permalink":"/en/graph/ufs/number-of-provinces"},"next":{"title":"Most Stones Removed with Same Row or Column","permalink":"/en/graph/ufs/most-stones-removed-with-same-row-or-column"}}');var a=r(74848),i=r(28453),s=r(11470),l=r(19365);const o={title:"Number of Islands"},u=void 0,c={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"DFS",id:"dfs",level:4},{value:"\u5e76\u67e5\u96c6",id:"\u5e76\u67e5\u96c6",level:4},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}];function p(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,a.jsx)(n.p,{children:"TODO"}),"\n",(0,a.jsx)(n.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,a.jsx)(n.p,{children:"\u8fd9\u91cc\u7528\u66b4\u529b\u7684\u65b9\u6cd5\u53ef\u4ee5\u89e3\u51b3\uff0cDFS\u548cBFS\u90fd\u53ef\u4ee5\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u7a0d\u5fae\u4f18\u5316\u4e00\u70b9\u7684\u65b9\u6cd5\uff0c\u5c31\u662f\u5e76\u67e5\u96c6\u3002"}),"\n",(0,a.jsx)(n.h3,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n",(0,a.jsx)(n.h4,{id:"dfs",children:"DFS"}),"\n","\n",(0,a.jsxs)(s.A,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,a.jsx)(l.A,{value:"java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"// TODO\n"})})}),(0,a.jsx)(l.A,{value:"cpp",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"// Number of Islands\n// Time complexity: O(MN)\n// Space complexity: O(MN)\nclass Solution {\n private:\n  void dfs(vector<vector<char> >& grid, int i, int j) {\n    const int M = grid.size(), N = grid[0].size();\n    if (i < 0 || i >= M | j < 0 || j >= N || grid[i][j] == '0') return;\n\n    grid[i][j] = '0';\n    dfs(grid, i - 1, j); // down\n    dfs(grid, i + 1, j); // up\n    dfs(grid, i, j - 1); // left\n    dfs(grid, i, j + 1); // right\n  }\n\n public:\n  int numIslands(vector<vector<char>>& grid) {\n    const int M = grid.size(), N = grid[0].size();\n\n    int num_islands = 0;\n    for (int i = 0; i < M; ++i) {\n      for (int j = 0; j < N; ++j) {\n        if (grid[i][j] == '1') {\n          ++num_islands;\n          dfs(grid, i, j);\n        }\n      }\n    }\n\n    return num_islands;\n  }\n};\n"})})}),(0,a.jsx)(l.A,{value:"python",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"# No code to translate - only a TODO comment\n"})})})]}),"\n",(0,a.jsx)(n.h4,{id:"\u5e76\u67e5\u96c6",children:"\u5e76\u67e5\u96c6"}),"\n",(0,a.jsxs)(s.A,{defaultValue:"cpp",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,a.jsx)(l.A,{value:"java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"// TODO\n"})})}),(0,a.jsx)(l.A,{value:"cpp",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"class DSU {\n public:\n  DSU(const vector<vector<char>>& grid) {\n    const int M = grid.size(), N = grid[0].size();\n    p = vector<int>(M * N, -1);\n    rank = vector<int>(M * N, 0);\n    for (int i = 0; i < M; i++) {\n      for (int j = 0; j < N; j++) {\n        const int x = i * N + j;\n        if (grid[i][j] == '1') {\n          p[x] = x;\n          rank[x] = 1;\n        }\n      }\n    }\n  }\n\n  int find(int x) {\n    while (p[x] != x) {\n      p[x] = p[p[x]];  // path compression\n      x = p[x];\n    }\n    return x;\n  }\n\n  // return the number of reduced components\n  int merge(int x, int y) {\n    int px = find(x);\n    int py = find(y);\n    if (px == py) return 0;\n\n    if (rank[px] < rank[py]) {\n      p[px] = py;\n    } else if (rank[px] > rank[py]) {\n      p[py] = px;\n    } else {\n      p[px] = py;\n      rank[px] += 1;\n    }\n    return 1;\n  }\n\n private:\n  vector<int> p;\n  vector<int> rank;\n};\n\n// Number of Islands\n// Time complexity: O(MN * log*MN)\n// Space complexity: O(MN)\nclass Solution {\n public:\n  int numIslands(vector<vector<char>>& grid) {\n    const int M = grid.size(), N = grid[0].size();\n    const int dirs[][4] = {\n        {-1, 0}, {1, 0}, {0, -1}, {0, 1}};  // up, down, left, right\n\n    DSU dsu(grid);\n    int num_islands = 0;\n    for (int i = 0; i < M; ++i) {\n      for (int j = 0; j < N; ++j) {\n        if (grid[i][j] == '1') {\n          ++num_islands;\n          for (const auto& dir : dirs) {\n            int new_i = i + dir[0];\n            int new_j = j + dir[1];\n            if (0 <= new_i && new_i < M && 0 <= new_j && new_j < N &&\n                grid[new_i][new_j] == '1') {\n              num_islands -= dsu.merge(i * N + j, new_i * N + new_j);\n            }\n          }\n        }\n      }\n    }\n\n    return num_islands;\n  }\n};\n"})})}),(0,a.jsx)(l.A,{value:"python",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"# Nothing to translate since the Java code only shows a TODO comment\n\n# TODO\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"\u76f8\u5173\u9898\u76ee",children:"\u76f8\u5173\u9898\u76ee"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/en/graph/ufs/number-of-provinces",children:"Number of Provinces"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>s});r(96540);var t=r(34164);const a={tabItem:"tabItem_Ymn6"};var i=r(74848);function s(e){let{children:n,hidden:r,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,s),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>N});var t=r(96540),a=r(34164),i=r(23104),s=r(56347),l=r(205),o=r(57485),u=r(31682),c=r(70679);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}(r);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function h(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:r}=e;const a=(0,s.W6)(),i=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,o.aZ)(i),(0,t.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function m(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,i=p(e),[s,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[u,d]=f({queryString:r,groupId:a}),[m,v]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,c.Dv)(r);return[a,(0,t.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:a}),b=(()=>{const e=u??m;return h({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{b&&o(b)}),[b]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),v(e)}),[d,v,i]),tabValues:i}}var v=r(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(74848);function j(e){let{className:n,block:r,selectedValue:t,selectValue:s,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.a_)(),c=e=>{const n=e.currentTarget,r=o.indexOf(n),a=l[r].value;a!==t&&(u(n),s(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;n=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;n=o[r]??o[o.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:d,onClick:c,...i,className:(0,a.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function x(e){let{lazy:n,children:r,selectedValue:i}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===i));return e?(0,t.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function y(e){const n=m(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,g.jsx)(j,{...n,...e}),(0,g.jsx)(x,{...n,...e})]})}function N(e){const n=(0,v.A)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>l});var t=r(96540);const a={},i=t.createContext(a);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);