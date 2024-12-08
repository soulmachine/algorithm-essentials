"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[8324],{22307:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>f,frontMatter:()=>o,metadata:()=>a,toc:()=>m});const a=JSON.parse('{"id":"dp/maximal-rectangle","title":"Maximal Rectangle","description":"\u63cf\u8ff0","source":"@site/docs/dp/maximal-rectangle.md","sourceDirName":"dp","slug":"/dp/maximal-rectangle","permalink":"/dp/maximal-rectangle","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Maximal Rectangle"},"sidebar":"docs","previous":{"title":"Palindrome Partitioning II","permalink":"/dp/palindrome-partitioning-ii"},"next":{"title":"Maximal Square","permalink":"/dp/maximal-square"}}');var r=t(74848),l=t(28453),i=t(11470),s=t(19365);const o={title:"Maximal Rectangle"},u=void 0,c={},m=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}];function d(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,r.jsx)(n.p,{children:"Given a 2D binary matrix filled with 0's and 1's, find the largest rectangle containing all ones and return its area."}),"\n",(0,r.jsx)(n.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,r.jsx)(n.p,{children:"\u65e0"}),"\n",(0,r.jsx)(n.h3,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n","\n",(0,r.jsxs)(i.A,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,r.jsx)(s.A,{value:"java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"// Maximal Rectangle\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\npublic class Solution {\n    public int maximalRectangle(char[][] matrix) {\n        if (matrix.length == 0)  return 0;\n\n        final int m = matrix.length;\n        final int n = matrix[0].length;\n        int[] H = new int[n];\n        int[] L = new int[n];\n        int[] R = new int[n];\n        Arrays.fill(R, n);\n\n        int ret = 0;\n        for (int i = 0; i < m; ++i) {\n            int left = 0, right = n;\n            // calculate L(i, j) from left to right\n            for (int j = 0; j < n; ++j) {\n                if (matrix[i][j] == '1') {\n                    ++H[j];\n                    L[j] = Math.max(L[j], left);\n                } else {\n                    left = j+1;\n                    H[j] = 0; L[j] = 0; R[j] = n;\n                }\n            }\n            // calculate R(i, j) from right to left\n            for (int j = n-1; j >= 0; --j) {\n                if (matrix[i][j] == '1') {\n                    R[j] = Math.min(R[j], right);\n                    ret = Math.max(ret, H[j]*(R[j]-L[j]));\n                } else {\n                    right = j;\n                }\n            }\n        }\n        return ret;\n    }\n}\n"})})}),(0,r.jsx)(s.A,{value:"cpp",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"// Maximal Rectangle\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\npublic:\n    int maximalRectangle(vector<vector<char> > &matrix) {\n        if (matrix.empty())  return 0;\n\n        const int m = matrix.size();\n        const int n = matrix[0].size();\n        vector<int> H(n, 0);\n        vector<int> L(n, 0);\n        vector<int> R(n, n);\n\n        int ret = 0;\n        for (int i = 0; i < m; ++i) {\n            int left = 0, right = n;\n            // calculate L(i, j) from left to right\n            for (int j = 0; j < n; ++j) {\n                if (matrix[i][j] == '1') {\n                    ++H[j];\n                    L[j] = max(L[j], left);\n                } else {\n                    left = j+1;\n                    H[j] = 0; L[j] = 0; R[j] = n;\n                }\n            }\n            // calculate R(i, j) from right to left\n            for (int j = n-1; j >= 0; --j) {\n                if (matrix[i][j] == '1') {\n                    R[j] = min(R[j], right);\n                    ret = max(ret, H[j]*(R[j]-L[j]));\n                } else {\n                    right = j;\n                }\n            }\n        }\n        return ret;\n    }\n};\n"})})}),(0,r.jsx)(s.A,{value:"python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"# Maximal Rectangle\n# \u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution:\n    def maximalRectangle(self, matrix: list[list[str]]) -> int:\n        if not matrix:\n            return 0\n\n        m = len(matrix)\n        n = len(matrix[0])\n        H = [0] * n\n        L = [0] * n\n        R = [n] * n\n\n        ret = 0\n        for i in range(m):\n            left, right = 0, n\n            # calculate L(i, j) from left to right\n            for j in range(n):\n                if matrix[i][j] == '1':\n                    H[j] += 1\n                    L[j] = max(L[j], left)\n                else:\n                    left = j + 1\n                    H[j] = L[j] = 0\n                    R[j] = n\n\n            # calculate R(i, j) from right to left\n            for j in range(n-1, -1, -1):\n                if matrix[i][j] == '1':\n                    R[j] = min(R[j], right)\n                    ret = max(ret, H[j] * (R[j] - L[j]))\n                else:\n                    right = j\n\n        return ret\n"})})})]})]})}function f(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var a=t(34164);const r={tabItem:"tabItem_Ymn6"};var l=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>R});var a=t(96540),r=t(34164),l=t(23104),i=t(56347),s=t(205),o=t(57485),u=t(31682),c=t(70679);function m(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return m(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function f(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const r=(0,i.W6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(l),(0,a.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(r.location.search);n.set(l,e),r.replace({...r.location,search:n.toString()})}),[l,r])]}function p(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,l=d(e),[i,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:l}))),[u,m]=h({queryString:t,groupId:r}),[p,j]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,l]=(0,c.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:r}),g=(()=>{const e=u??p;return f({value:e,tabValues:l})?e:null})();(0,s.A)((()=>{g&&o(g)}),[g]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),m(e),j(e)}),[m,j,l]),tabValues:l}}var j=t(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function v(e){let{className:n,block:t,selectedValue:a,selectValue:i,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.a_)(),c=e=>{const n=e.currentTarget,t=o.indexOf(n),r=s[t].value;r!==a&&(u(n),i(r))},m=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>o.push(e),onKeyDown:m,onClick:c,...l,className:(0,r.A)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:l}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===l));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function y(e){const n=p(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,x.jsx)(v,{...n,...e}),(0,x.jsx)(b,{...n,...e})]})}function R(e){const n=(0,j.A)();return(0,x.jsx)(y,{...e,children:m(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var a=t(96540);const r={},l=a.createContext(r);function i(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);