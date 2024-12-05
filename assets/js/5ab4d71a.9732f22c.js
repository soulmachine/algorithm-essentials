"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[3078],{60140:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"simulation/spiral-matrix-ii","title":"Spiral Matrix II","description":"\u63cf\u8ff0","source":"@site/docs/simulation/spiral-matrix-ii.md","sourceDirName":"simulation","slug":"/simulation/spiral-matrix-ii","permalink":"/simulation/spiral-matrix-ii","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Spiral Matrix II"},"sidebar":"docs","previous":{"title":"Spiral Matrix","permalink":"/simulation/spiral-matrix"},"next":{"title":"ZigZag Conversion","permalink":"/simulation/zigzag-conversion"}}');var i=t(74848),a=t(28453),l=t(11470),s=t(19365);const u={title:"Spiral Matrix II"},o=void 0,c={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801 1",id:"\u4ee3\u7801-1",level:3},{value:"\u4ee3\u7801 2",id:"\u4ee3\u7801-2",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}];function m(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,i.jsxs)(n.p,{children:["Given an integer ",(0,i.jsx)(n.code,{children:"n"}),", generate a square matrix filled with elements from 1 to ",(0,i.jsx)(n.code,{children:"n^2"})," in spiral order."]}),"\n",(0,i.jsxs)(n.p,{children:["For example,\nGiven ",(0,i.jsx)(n.code,{children:"n = 3"}),","]}),"\n",(0,i.jsx)(n.p,{children:"You should return the following matrix:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"[\n [ 1, 2, 3 ],\n [ 8, 9, 4 ],\n [ 7, 6, 5 ]\n]\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,i.jsx)(n.p,{children:"\u8fd9\u9898\u6bd4\u4e0a\u4e00\u9898\u8981\u7b80\u5355\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u4ee3\u7801-1",children:"\u4ee3\u7801 1"}),"\n","\n",(0,i.jsxs)(l.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,i.jsx)(s.A,{value:"java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"// Spiral Matrix II\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n^2)\npublic class Solution {\n    public int[][] generateMatrix(int n) {\n        int[][] matrix = new int[n][n];\n        int begin = 0, end = n - 1;\n        int num = 1;\n\n        while (begin < end) {\n            for (int j = begin; j < end; ++j) matrix[begin][j] = num++;\n            for (int i = begin; i < end; ++i) matrix[i][end] = num++;\n            for (int j = end; j > begin; --j) matrix[end][j] = num++;\n            for (int i = end; i > begin; --i) matrix[i][begin] = num++;\n            ++begin;\n            --end;\n        }\n\n        if (begin == end) matrix[begin][begin] = num;\n\n        return matrix;\n    }\n}\n"})})}),(0,i.jsx)(s.A,{value:"cpp",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"// Spiral Matrix II\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n^2)\nclass Solution {\npublic:\n    vector<vector<int> > generateMatrix(int n) {\n        vector<vector<int> > matrix(n, vector<int>(n));\n        int begin = 0, end = n - 1;\n        int num = 1;\n\n        while (begin < end) {\n            for (int j = begin; j < end; ++j) matrix[begin][j] = num++;\n            for (int i = begin; i < end; ++i) matrix[i][end] = num++;\n            for (int j = end; j > begin; --j) matrix[end][j] = num++;\n            for (int i = end; i > begin; --i) matrix[i][begin] = num++;\n            ++begin;\n            --end;\n        }\n\n        if (begin == end) matrix[begin][begin] = num;\n\n        return matrix;\n    }\n};\n"})})})]}),"\n",(0,i.jsx)(n.h3,{id:"\u4ee3\u7801-2",children:"\u4ee3\u7801 2"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"// LeetCode, Spiral Matrix II\n// @author \u9f9a\u9646\u5b89 (http://weibo.com/luangong)\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n^2)\nclass Solution {\npublic:\n    vector<vector<int> > generateMatrix(int n) {\n        vector< vector<int> > matrix(n, vector<int>(n));\n        if (n == 0) return matrix;\n        int beginX = 0, endX = n - 1;\n        int beginY = 0, endY = n - 1;\n        int num = 1;\n        while (true) {\n            for (int j = beginX; j <= endX; ++j) matrix[beginY][j] = num++;\n            if (++beginY > endY) break;\n\n            for (int i = beginY; i <= endY; ++i) matrix[i][endX] = num++;\n            if (beginX > --endX) break;\n\n            for (int j = endX; j >= beginX; --j) matrix[endY][j] = num++;\n            if (beginY > --endY) break;\n\n            for (int i = endY; i >= beginY; --i) matrix[i][beginX] = num++;\n            if (++beginX > endX) break;\n        }\n        return matrix;\n    }\n};\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u76f8\u5173\u9898\u76ee",children:"\u76f8\u5173\u9898\u76ee"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/simulation/spiral-matrix",children:"Spiral Matrix"})}),"\n"]})]})}function b(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>l});t(96540);var r=t(34164);const i={tabItem:"tabItem_Ymn6"};var a=t(74848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,l),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(96540),i=t(34164),a=t(23104),l=t(56347),s=t(205),u=t(57485),o=t(31682),c=t(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:i}}=e;return{value:n,label:t,attributes:r,default:i}}))}(t);return function(e){const n=(0,o.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function b(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const i=(0,l.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,u.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(i.location.search);n.set(a,e),i.replace({...i.location,search:n.toString()})}),[a,i])]}function h(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,a=m(e),[l,u]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!b({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[o,d]=p({queryString:t,groupId:i}),[h,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,a]=(0,c.Dv)(t);return[i,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:i}),x=(()=>{const e=o??h;return b({value:e,tabValues:a})?e:null})();(0,s.A)((()=>{x&&u(x)}),[x]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!b({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),f(e)}),[d,f,a]),tabValues:a}}var f=t(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function v(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:o}=(0,a.a_)(),c=e=>{const n=e.currentTarget,t=u.indexOf(n),i=s[t].value;i!==r&&(o(n),l(i))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>u.push(e),onKeyDown:d,onClick:c,...a,className:(0,i.A)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:a}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function I(e){const n=h(e);return(0,g.jsxs)("div",{className:(0,i.A)("tabs-container",x.tabList),children:[(0,g.jsx)(v,{...n,...e}),(0,g.jsx)(j,{...n,...e})]})}function w(e){const n=(0,f.A)();return(0,g.jsx)(I,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>s});var r=t(96540);const i={},a=r.createContext(i);function l(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);