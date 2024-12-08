"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[1722],{61473:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"array/rotate-image","title":"Rotate Image","description":"\u63cf\u8ff0","source":"@site/docs/array/rotate-image.md","sourceDirName":"array","slug":"/array/rotate-image","permalink":"/en/array/rotate-image","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Rotate Image"},"sidebar":"docs","previous":{"title":"Valid Sudoku","permalink":"/en/array/valid-sudoku"},"next":{"title":"Plus One","permalink":"/en/array/plus-one"}}');var i=t(74848),r=t(28453),l=t(11470),o=t(19365);const s={title:"Rotate Image"},u=void 0,c={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801 1",id:"\u4ee3\u7801-1",level:3},{value:"\u4ee3\u7801 2",id:"\u4ee3\u7801-2",level:3}];function p(n){const e={code:"code",h3:"h3",img:"img",p:"p",pre:"pre",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,i.jsxs)(e.p,{children:["You are given an ",(0,i.jsx)(e.code,{children:"n \xd7 n"})," 2D matrix representing an image."]}),"\n",(0,i.jsx)(e.p,{children:"Rotate the image by 90 degrees (clockwise)."}),"\n",(0,i.jsx)(e.p,{children:"Follow up:\nCould you do this in-place?"}),"\n",(0,i.jsx)(e.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,i.jsx)(e.p,{children:"\u9996\u5148\u60f3\u5230\uff0c\u7eaf\u6a21\u62df\uff0c\u4ece\u5916\u5230\u5185\u4e00\u5708\u4e00\u5708\u7684\u8f6c\uff0c\u4f46\u8fd9\u4e2a\u65b9\u6cd5\u592a\u6162\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5982\u4e0b\u56fe\uff0c\u9996\u5148\u6cbf\u7740\u526f\u5bf9\u89d2\u7ebf\u7ffb\u8f6c\u4e00\u6b21\uff0c\u7136\u540e\u6cbf\u7740\u6c34\u5e73\u4e2d\u7ebf\u7ffb\u8f6c\u4e00\u6b21\u3002"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Rotate image",src:t(11197).A+"",width:"596",height:"128"})}),"\n",(0,i.jsx)(e.p,{children:"\u6216\u8005\uff0c\u9996\u5148\u6cbf\u7740\u6c34\u5e73\u4e2d\u7ebf\u7ffb\u8f6c\u4e00\u6b21\uff0c\u7136\u540e\u6cbf\u7740\u4e3b\u5bf9\u89d2\u7ebf\u7ffb\u8f6c\u4e00\u6b21\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"\u4ee3\u7801-1",children:"\u4ee3\u7801 1"}),"\n","\n",(0,i.jsxs)(l.A,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,i.jsx)(o.A,{value:"java",children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"// Rotate Image\n// \u601d\u8def 1\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public void rotate(final int[][] matrix) {\n        final int n = matrix.length;\n\n        for (int i = 0; i < n; ++i)  // \u6cbf\u7740\u526f\u5bf9\u89d2\u7ebf\u53cd\u8f6c\n            for (int j = 0; j < n - i; ++j)\n                swap(matrix, i, j, n - 1 - j, n - 1 - i);\n\n        for (int i = 0; i < n / 2; ++i) // \u6cbf\u7740\u6c34\u5e73\u4e2d\u7ebf\u53cd\u8f6c\n            for (int j = 0; j < n; ++j)\n                swap(matrix, i, j, n - 1 - i, j);\n    }\n    private static void swap(final int[][] matrix,\n            int i, int j, int p, int q) {\n        int tmp = matrix[i][j];\n        matrix[i][j] = matrix[p][q];\n        matrix[p][q] = tmp;\n    }\n};\n"})})}),(0,i.jsx)(o.A,{value:"cpp",children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"// Rotate Image\n// \u601d\u8def 1\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    void rotate(vector<vector<int>>& matrix) {\n        const int n = matrix.size();\n\n        for (int i = 0; i < n; ++i)  // \u6cbf\u7740\u526f\u5bf9\u89d2\u7ebf\u53cd\u8f6c\n            for (int j = 0; j < n - i; ++j)\n                swap(matrix[i][j], matrix[n - 1 - j][n - 1 - i]);\n\n        for (int i = 0; i < n / 2; ++i) // \u6cbf\u7740\u6c34\u5e73\u4e2d\u7ebf\u53cd\u8f6c\n            for (int j = 0; j < n; ++j)\n                swap(matrix[i][j], matrix[n - 1 - i][j]);\n    }\n};\n"})})}),(0,i.jsx)(o.A,{value:"python",children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"# Rotate Image\n# \u601d\u8def 1\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution:\n    def rotate(self, matrix: list[list[int]]) -> None:\n        n = len(matrix)\n\n        # \u6cbf\u7740\u526f\u5bf9\u89d2\u7ebf\u53cd\u8f6c\n        for i in range(n):\n            for j in range(n - i):\n                self.swap(matrix, i, j, n - 1 - j, n - 1 - i)\n\n        # \u6cbf\u7740\u6c34\u5e73\u4e2d\u7ebf\u53cd\u8f6c\n        for i in range(n // 2):\n            for j in range(n):\n                self.swap(matrix, i, j, n - 1 - i, j)\n\n    def swap(self, matrix: list[list[int]], i: int, j: int, p: int, q: int) -> None:\n        matrix[i][j], matrix[p][q] = matrix[p][q], matrix[i][j]\n"})})})]}),"\n",(0,i.jsx)(e.h3,{id:"\u4ee3\u7801-2",children:"\u4ee3\u7801 2"}),"\n",(0,i.jsxs)(l.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,i.jsx)(o.A,{value:"java",children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"// Rotate Image\n// \u601d\u8def 2\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public void rotate(final int[][] matrix) {\n        final int n = matrix.length;\n\n        for (int i = 0; i < n / 2; ++i) // \u6cbf\u7740\u6c34\u5e73\u4e2d\u7ebf\u53cd\u8f6c\n            for (int j = 0; j < n; ++j)\n                swap(matrix, i, j, n - 1 - i, j);\n\n        for (int i = 0; i < n; ++i)  // \u6cbf\u7740\u4e3b\u5bf9\u89d2\u7ebf\u53cd\u8f6c\n            for (int j = i + 1; j < n; ++j)\n                swap(matrix, i, j, j, i);\n    }\n    private static void swap(final int[][] matrix,\n            int i, int j, int p, int q) {\n        int tmp = matrix[i][j];\n        matrix[i][j] = matrix[p][q];\n        matrix[p][q] = tmp;\n    }\n};\n"})})}),(0,i.jsx)(o.A,{value:"cpp",children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"// Rotate Image\n// \u601d\u8def 2\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    void rotate(vector<vector<int>>& matrix) {\n        const int n = matrix.size();\n\n        for (int i = 0; i < n / 2; ++i) // \u6cbf\u7740\u6c34\u5e73\u4e2d\u7ebf\u53cd\u8f6c\n            for (int j = 0; j < n; ++j)\n                swap(matrix[i][j], matrix[n - 1 - i][j]);\n\n        for (int i = 0; i < n; ++i)  // \u6cbf\u7740\u4e3b\u5bf9\u89d2\u7ebf\u53cd\u8f6c\n            for (int j = i + 1; j < n; ++j)\n                swap(matrix[i][j], matrix[j][i]);\n    }\n};\n"})})}),(0,i.jsx)(o.A,{value:"python",children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"# Rotate Image\n# \u601d\u8def 2\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution:\n    def rotate(self, matrix: list[list[int]]) -> None:\n        n = len(matrix)\n\n        # \u6cbf\u7740\u6c34\u5e73\u4e2d\u7ebf\u53cd\u8f6c\n        for i in range(n // 2):\n            for j in range(n):\n                self.swap(matrix, i, j, n - 1 - i, j)\n\n        # \u6cbf\u7740\u4e3b\u5bf9\u89d2\u7ebf\u53cd\u8f6c\n        for i in range(n):\n            for j in range(i + 1, n):\n                self.swap(matrix, i, j, j, i)\n\n    def swap(self, matrix: list[list[int]], i: int, j: int, p: int, q: int) -> None:\n        matrix[i][j], matrix[p][q] = matrix[p][q], matrix[i][j]\n"})})})]})]})}function m(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(p,{...n})}):p(n)}},19365:(n,e,t)=>{t.d(e,{A:()=>l});t(96540);var a=t(34164);const i={tabItem:"tabItem_Ymn6"};var r=t(74848);function l(n){let{children:e,hidden:t,className:l}=n;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(i.tabItem,l),hidden:t,children:e})}},11470:(n,e,t)=>{t.d(e,{A:()=>I});var a=t(96540),i=t(34164),r=t(23104),l=t(56347),o=t(205),s=t(57485),u=t(31682),c=t(70679);function d(n){return a.Children.toArray(n).filter((n=>"\n"!==n)).map((n=>{if(!n||(0,a.isValidElement)(n)&&function(n){const{props:e}=n;return!!e&&"object"==typeof e&&"value"in e}(n))return n;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof n.type?n.type:n.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(n){const{values:e,children:t}=n;return(0,a.useMemo)((()=>{const n=e??function(n){return d(n).map((n=>{let{props:{value:e,label:t,attributes:a,default:i}}=n;return{value:e,label:t,attributes:a,default:i}}))}(t);return function(n){const e=(0,u.XI)(n,((n,e)=>n.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((n=>n.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(n),n}),[e,t])}function m(n){let{value:e,tabValues:t}=n;return t.some((n=>n.value===e))}function x(n){let{queryString:e=!1,groupId:t}=n;const i=(0,l.W6)(),r=function(n){let{queryString:e=!1,groupId:t}=n;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:e,groupId:t});return[(0,s.aZ)(r),(0,a.useCallback)((n=>{if(!r)return;const e=new URLSearchParams(i.location.search);e.set(r,n),i.replace({...i.location,search:e.toString()})}),[r,i])]}function A(n){const{defaultValue:e,queryString:t=!1,groupId:i}=n,r=p(n),[l,s]=(0,a.useState)((()=>function(n){let{defaultValue:e,tabValues:t}=n;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!m({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((n=>n.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=t.find((n=>n.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:e,tabValues:r}))),[u,d]=x({queryString:t,groupId:i}),[A,h]=function(n){let{groupId:e}=n;const t=function(n){return n?`docusaurus.tab.${n}`:null}(e),[i,r]=(0,c.Dv)(t);return[i,(0,a.useCallback)((n=>{t&&r.set(n)}),[t,r])]}({groupId:i}),j=(()=>{const n=u??A;return m({value:n,tabValues:r})?n:null})();(0,o.A)((()=>{j&&s(j)}),[j]);return{selectedValue:l,selectValue:(0,a.useCallback)((n=>{if(!m({value:n,tabValues:r}))throw new Error(`Can't select invalid tab value=${n}`);s(n),d(n),h(n)}),[d,h,r]),tabValues:r}}var h=t(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(74848);function g(n){let{className:e,block:t,selectedValue:a,selectValue:l,tabValues:o}=n;const s=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.a_)(),c=n=>{const e=n.currentTarget,t=s.indexOf(e),i=o[t].value;i!==a&&(u(e),l(i))},d=n=>{let e=null;switch(n.key){case"Enter":c(n);break;case"ArrowRight":{const t=s.indexOf(n.currentTarget)+1;e=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(n.currentTarget)-1;e=s[t]??s[s.length-1];break}}e?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},e),children:o.map((n=>{let{value:e,label:t,attributes:r}=n;return(0,f.jsx)("li",{role:"tab",tabIndex:a===e?0:-1,"aria-selected":a===e,ref:n=>s.push(n),onKeyDown:d,onClick:c,...r,className:(0,i.A)("tabs__item",j.tabItem,r?.className,{"tabs__item--active":a===e}),children:t??e},e)}))})}function b(n){let{lazy:e,children:t,selectedValue:r}=n;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const n=l.find((n=>n.props.value===r));return n?(0,a.cloneElement)(n,{className:(0,i.A)("margin-top--md",n.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:l.map(((n,e)=>(0,a.cloneElement)(n,{key:e,hidden:n.props.value!==r})))})}function v(n){const e=A(n);return(0,f.jsxs)("div",{className:(0,i.A)("tabs-container",j.tabList),children:[(0,f.jsx)(g,{...e,...n}),(0,f.jsx)(b,{...e,...n})]})}function I(n){const e=(0,h.A)();return(0,f.jsx)(v,{...n,children:d(n.children)},String(e))}},11197:(n,e,t)=>{t.d(e,{A:()=>a});const a="data:image/png;base64,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"},28453:(n,e,t)=>{t.d(e,{R:()=>l,x:()=>o});var a=t(96540);const i={},r=a.createContext(i);function l(n){const e=a.useContext(r);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),a.createElement(r.Provider,{value:e},n.children)}}}]);