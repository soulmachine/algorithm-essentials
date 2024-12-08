"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[3123],{95780:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"simulation/sparse-matrix-multiplication","title":"Sparse Matrix Multiplication","description":"\u63cf\u8ff0","source":"@site/docs/simulation/sparse-matrix-multiplication.md","sourceDirName":"simulation","slug":"/simulation/sparse-matrix-multiplication","permalink":"/simulation/sparse-matrix-multiplication","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Sparse Matrix Multiplication"},"sidebar":"docs","previous":{"title":"Max Points on a Line","permalink":"/simulation/max-points-on-a-line"},"next":{"title":"Last Stone Weight","permalink":"/simulation/last-stone-weight"}}');var a=t(74848),l=t(28453),i=t(11470),s=t(19365);const o={title:"Sparse Matrix Multiplication"},u=void 0,c={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}];function p(e){const n={code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,a.jsxs)(n.p,{children:["Given two sparse matrices ",(0,a.jsx)(n.code,{children:"A"})," and ",(0,a.jsx)(n.code,{children:"B"}),", return the result of ",(0,a.jsx)(n.code,{children:"AB"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["You may assume that ",(0,a.jsx)(n.code,{children:"A"}),"'s column number is equal to ",(0,a.jsx)(n.code,{children:"B"}),"'s row number."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Example"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"A = [\n  [ 1, 0, 0],\n  [-1, 0, 3]\n]\n\nB = [\n  [ 7, 0, 0 ],\n  [ 0, 0, 0 ],\n  [ 0, 0, 1 ]\n]\n\n     |  1 0 0 |   | 7 0 0 |   |  7 0 0 |\nAB = | -1 0 3 | x | 0 0 0 | = | -7 0 3 |\n                  | 0 0 1 |\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Constraints"}),":"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"1 <= A.length, B.length <= 100"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"1 <= A[i].length, B[i].length <= 100"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"-100 <= A[i][j], B[i][j] <= 100"})}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,a.jsx)(n.p,{children:"\u65e0"}),"\n",(0,a.jsx)(n.h3,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n","\n",(0,a.jsxs)(i.A,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,a.jsx)(s.A,{value:"java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"// Sparse Matrix Multiplication\n// Time Complexity: O(m*n*p), Space Complexity: O(1)\npublic class Solution {\n    public int[][] multiply(int[][] A, int[][] B) {\n        int m = A.length, n = A[0].length, p = B[0].length;\n        int[][] C = new int[m][p];\n\n        for(int i = 0; i < m; i++) {\n            for(int k = 0; k < n; k++) {\n                if (A[i][k] != 0) {\n                    for (int j = 0; j < p; j++) {\n                        if (B[k][j] != 0) C[i][j] += A[i][k] * B[k][j];\n                    }\n                }\n            }\n        }\n        return C;\n    }\n}\n"})})}),(0,a.jsx)(s.A,{value:"cpp",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"// TODO\n"})})}),(0,a.jsx)(s.A,{value:"python",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"# Sparse Matrix Multiplication\n# Time Complexity: O(m*n*p), Space Complexity: O(1)\ndef multiply(A: list[list[int]], B: list[list[int]]) -> list[list[int]]:\n    m, n, p = len(A), len(A[0]), len(B[0])\n    C = [[0] * p for _ in range(m)]\n\n    for i in range(m):\n        for k in range(n):\n            if A[i][k] != 0:\n                for j in range(p):\n                    if B[k][j] != 0:\n                        C[i][j] += A[i][k] * B[k][j]\n    return C\n"})})})]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var r=t(34164);const a={tabItem:"tabItem_Ymn6"};var l=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>A});var r=t(96540),a=t(34164),l=t(23104),i=t(56347),s=t(205),o=t(57485),u=t(31682),c=t(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.W6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,l=p(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[u,d]=m({queryString:t,groupId:a}),[f,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,c.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:a}),b=(()=>{const e=u??f;return h({value:e,tabValues:l})?e:null})();(0,s.A)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),x(e)}),[d,x,l]),tabValues:l}}var x=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(74848);function j(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.a_)(),c=e=>{const n=e.currentTarget,t=o.indexOf(n),a=s[t].value;a!==r&&(u(n),i(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:d,onClick:c,...l,className:(0,a.A)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:l}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===l));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function y(e){const n=f(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,v.jsx)(j,{...n,...e}),(0,v.jsx)(g,{...n,...e})]})}function A(e){const n=(0,x.A)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var r=t(96540);const a={},l=r.createContext(a);function i(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);