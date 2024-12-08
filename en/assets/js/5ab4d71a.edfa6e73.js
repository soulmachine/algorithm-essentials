"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[3078],{60140:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>b,frontMatter:()=>o,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"simulation/spiral-matrix-ii","title":"Spiral Matrix II","description":"\u63cf\u8ff0","source":"@site/docs/simulation/spiral-matrix-ii.md","sourceDirName":"simulation","slug":"/simulation/spiral-matrix-ii","permalink":"/en/simulation/spiral-matrix-ii","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Spiral Matrix II"},"sidebar":"docs","previous":{"title":"Spiral Matrix","permalink":"/en/simulation/spiral-matrix"},"next":{"title":"ZigZag Conversion","permalink":"/en/simulation/zigzag-conversion"}}');var r=i(74848),a=i(28453),l=i(11470),u=i(19365);const o={title:"Spiral Matrix II"},s=void 0,c={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801 1",id:"\u4ee3\u7801-1",level:3},{value:"\u4ee3\u7801 2",id:"\u4ee3\u7801-2",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}];function m(n){const e={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,r.jsxs)(e.p,{children:["Given an integer ",(0,r.jsx)(e.code,{children:"n"}),", generate a square matrix filled with elements from 1 to ",(0,r.jsx)(e.code,{children:"n^2"})," in spiral order."]}),"\n",(0,r.jsxs)(e.p,{children:["For example,\nGiven ",(0,r.jsx)(e.code,{children:"n = 3"}),","]}),"\n",(0,r.jsx)(e.p,{children:"You should return the following matrix:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"[\n [ 1, 2, 3 ],\n [ 8, 9, 4 ],\n [ 7, 6, 5 ]\n]\n"})}),"\n",(0,r.jsx)(e.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,r.jsx)(e.p,{children:"\u8fd9\u9898\u6bd4\u4e0a\u4e00\u9898\u8981\u7b80\u5355\u3002"}),"\n",(0,r.jsx)(e.h3,{id:"\u4ee3\u7801-1",children:"\u4ee3\u7801 1"}),"\n","\n",(0,r.jsxs)(l.A,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,r.jsx)(u.A,{value:"java",children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:"// Spiral Matrix II\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n^2)\npublic class Solution {\n    public int[][] generateMatrix(int n) {\n        int[][] matrix = new int[n][n];\n        int begin = 0, end = n - 1;\n        int num = 1;\n\n        while (begin < end) {\n            for (int j = begin; j < end; ++j) matrix[begin][j] = num++;\n            for (int i = begin; i < end; ++i) matrix[i][end] = num++;\n            for (int j = end; j > begin; --j) matrix[end][j] = num++;\n            for (int i = end; i > begin; --i) matrix[i][begin] = num++;\n            ++begin;\n            --end;\n        }\n\n        if (begin == end) matrix[begin][begin] = num;\n\n        return matrix;\n    }\n}\n"})})}),(0,r.jsx)(u.A,{value:"cpp",children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:"// Spiral Matrix II\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n^2)\nclass Solution {\npublic:\n    vector<vector<int> > generateMatrix(int n) {\n        vector<vector<int> > matrix(n, vector<int>(n));\n        int begin = 0, end = n - 1;\n        int num = 1;\n\n        while (begin < end) {\n            for (int j = begin; j < end; ++j) matrix[begin][j] = num++;\n            for (int i = begin; i < end; ++i) matrix[i][end] = num++;\n            for (int j = end; j > begin; --j) matrix[end][j] = num++;\n            for (int i = end; i > begin; --i) matrix[i][begin] = num++;\n            ++begin;\n            --end;\n        }\n\n        if (begin == end) matrix[begin][begin] = num;\n\n        return matrix;\n    }\n};\n"})})}),(0,r.jsx)(u.A,{value:"python",children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"# Spiral Matrix II\n# \u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n^2)\ndef generateMatrix(n):\n    matrix = [[0] * n for _ in range(n)]\n    begin = 0\n    end = n - 1\n    num = 1\n\n    while begin < end:\n        for j in range(begin, end): matrix[begin][j] = num; num += 1\n        for i in range(begin, end): matrix[i][end] = num; num += 1\n        for j in range(end, begin, -1): matrix[end][j] = num; num += 1\n        for i in range(end, begin, -1): matrix[i][begin] = num; num += 1\n        begin += 1\n        end -= 1\n\n    if begin == end:\n        matrix[begin][begin] = num\n\n    return matrix\n"})})})]}),"\n",(0,r.jsx)(e.h3,{id:"\u4ee3\u7801-2",children:"\u4ee3\u7801 2"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:"// LeetCode, Spiral Matrix II\n// @author \u9f9a\u9646\u5b89 (http://weibo.com/luangong)\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n^2)\nclass Solution {\npublic:\n    vector<vector<int> > generateMatrix(int n) {\n        vector< vector<int> > matrix(n, vector<int>(n));\n        if (n == 0) return matrix;\n        int beginX = 0, endX = n - 1;\n        int beginY = 0, endY = n - 1;\n        int num = 1;\n        while (true) {\n            for (int j = beginX; j <= endX; ++j) matrix[beginY][j] = num++;\n            if (++beginY > endY) break;\n\n            for (int i = beginY; i <= endY; ++i) matrix[i][endX] = num++;\n            if (beginX > --endX) break;\n\n            for (int j = endX; j >= beginX; --j) matrix[endY][j] = num++;\n            if (beginY > --endY) break;\n\n            for (int i = endY; i >= beginY; --i) matrix[i][beginX] = num++;\n            if (++beginX > endX) break;\n        }\n        return matrix;\n    }\n};\n"})}),"\n",(0,r.jsx)(e.h3,{id:"\u76f8\u5173\u9898\u76ee",children:"\u76f8\u5173\u9898\u76ee"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"/en/simulation/spiral-matrix",children:"Spiral Matrix"})}),"\n"]})]})}function b(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(m,{...n})}):m(n)}},19365:(n,e,i)=>{i.d(e,{A:()=>l});i(96540);var t=i(34164);const r={tabItem:"tabItem_Ymn6"};var a=i(74848);function l(n){let{children:e,hidden:i,className:l}=n;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,l),hidden:i,children:e})}},11470:(n,e,i)=>{i.d(e,{A:()=>w});var t=i(96540),r=i(34164),a=i(23104),l=i(56347),u=i(205),o=i(57485),s=i(31682),c=i(70679);function d(n){return t.Children.toArray(n).filter((n=>"\n"!==n)).map((n=>{if(!n||(0,t.isValidElement)(n)&&function(n){const{props:e}=n;return!!e&&"object"==typeof e&&"value"in e}(n))return n;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof n.type?n.type:n.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(n){const{values:e,children:i}=n;return(0,t.useMemo)((()=>{const n=e??function(n){return d(n).map((n=>{let{props:{value:e,label:i,attributes:t,default:r}}=n;return{value:e,label:i,attributes:t,default:r}}))}(i);return function(n){const e=(0,s.XI)(n,((n,e)=>n.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((n=>n.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(n),n}),[e,i])}function b(n){let{value:e,tabValues:i}=n;return i.some((n=>n.value===e))}function p(n){let{queryString:e=!1,groupId:i}=n;const r=(0,l.W6)(),a=function(n){let{queryString:e=!1,groupId:i}=n;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:e,groupId:i});return[(0,o.aZ)(a),(0,t.useCallback)((n=>{if(!a)return;const e=new URLSearchParams(r.location.search);e.set(a,n),r.replace({...r.location,search:e.toString()})}),[a,r])]}function h(n){const{defaultValue:e,queryString:i=!1,groupId:r}=n,a=m(n),[l,o]=(0,t.useState)((()=>function(n){let{defaultValue:e,tabValues:i}=n;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!b({value:e,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${i.map((n=>n.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const t=i.find((n=>n.default))??i[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:e,tabValues:a}))),[s,d]=p({queryString:i,groupId:r}),[h,g]=function(n){let{groupId:e}=n;const i=function(n){return n?`docusaurus.tab.${n}`:null}(e),[r,a]=(0,c.Dv)(i);return[r,(0,t.useCallback)((n=>{i&&a.set(n)}),[i,a])]}({groupId:r}),f=(()=>{const n=s??h;return b({value:n,tabValues:a})?n:null})();(0,u.A)((()=>{f&&o(f)}),[f]);return{selectedValue:l,selectValue:(0,t.useCallback)((n=>{if(!b({value:n,tabValues:a}))throw new Error(`Can't select invalid tab value=${n}`);o(n),d(n),g(n)}),[d,g,a]),tabValues:a}}var g=i(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=i(74848);function v(n){let{className:e,block:i,selectedValue:t,selectValue:l,tabValues:u}=n;const o=[],{blockElementScrollPositionUntilNextRender:s}=(0,a.a_)(),c=n=>{const e=n.currentTarget,i=o.indexOf(e),r=u[i].value;r!==t&&(s(e),l(r))},d=n=>{let e=null;switch(n.key){case"Enter":c(n);break;case"ArrowRight":{const i=o.indexOf(n.currentTarget)+1;e=o[i]??o[0];break}case"ArrowLeft":{const i=o.indexOf(n.currentTarget)-1;e=o[i]??o[o.length-1];break}}e?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":i},e),children:u.map((n=>{let{value:e,label:i,attributes:a}=n;return(0,x.jsx)("li",{role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,ref:n=>o.push(n),onKeyDown:d,onClick:c,...a,className:(0,r.A)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":t===e}),children:i??e},e)}))})}function j(n){let{lazy:e,children:i,selectedValue:a}=n;const l=(Array.isArray(i)?i:[i]).filter(Boolean);if(e){const n=l.find((n=>n.props.value===a));return n?(0,t.cloneElement)(n,{className:(0,r.A)("margin-top--md",n.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:l.map(((n,e)=>(0,t.cloneElement)(n,{key:e,hidden:n.props.value!==a})))})}function I(n){const e=h(n);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,x.jsx)(v,{...e,...n}),(0,x.jsx)(j,{...e,...n})]})}function w(n){const e=(0,g.A)();return(0,x.jsx)(I,{...n,children:d(n.children)},String(e))}},28453:(n,e,i)=>{i.d(e,{R:()=>l,x:()=>u});var t=i(96540);const r={},a=t.createContext(r);function l(n){const e=t.useContext(a);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function u(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),t.createElement(a.Provider,{value:e},n.children)}}}]);