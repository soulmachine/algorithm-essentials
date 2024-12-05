"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[252],{83747:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"sorting/bucket-sort/first-missing-positive","title":"First Missing Positive","description":"\u63cf\u8ff0","source":"@site/docs/sorting/bucket-sort/first-missing-positive.md","sourceDirName":"sorting/bucket-sort","slug":"/sorting/bucket-sort/first-missing-positive","permalink":"/en/sorting/bucket-sort/first-missing-positive","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"First Missing Positive"},"sidebar":"docs","previous":{"title":"\u7b80\u4ecb","permalink":"/en/sorting/bucket-sort/"},"next":{"title":"\u7b80\u4ecb","permalink":"/en/sorting/counting-sort/"}}');var i=t(74848),s=t(28453),a=t(11470),l=t(19365);const o={title:"First Missing Positive"},u=void 0,c={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}];function p(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,i.jsx)(n.p,{children:"Given an unsorted integer array, find the first missing positive integer."}),"\n",(0,i.jsxs)(n.p,{children:["For example,\nGiven ",(0,i.jsx)(n.code,{children:"[1,2,0]"})," return ",(0,i.jsx)(n.code,{children:"3"}),",\nand ",(0,i.jsx)(n.code,{children:"[3,4,-1,1]"})," return ",(0,i.jsx)(n.code,{children:"2"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Your algorithm should run in ",(0,i.jsx)(n.code,{children:"O(n)"})," time and uses constant space."]}),"\n",(0,i.jsx)(n.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,i.jsxs)(n.p,{children:["\u672c\u8d28\u4e0a\u662f\u6876\u6392\u5e8f(bucket sort)\uff0c\u6bcf\u5f53 ",(0,i.jsx)(n.code,{children:"A[i]!= i+1"})," \u7684\u65f6\u5019\uff0c\u5c06",(0,i.jsx)(n.code,{children:"A[i]"}),"\u4e0e",(0,i.jsx)(n.code,{children:"A[A[i]-1]"}),"\u4ea4\u6362\uff0c\u76f4\u5230\u65e0\u6cd5\u4ea4\u6362\u4e3a\u6b62\uff0c\u7ec8\u6b62\u6761\u4ef6\u662f ",(0,i.jsx)(n.code,{children:"A[i]== A[A[i]-1]"}),"\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n","\n",(0,i.jsxs)(a.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,i.jsx)(l.A,{value:"java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"// First Missing Positive\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public int firstMissingPositive(int[] nums) {\n        bucket_sort(nums);\n\n        for (int i = 0; i < nums.length; ++i)\n            if (nums[i] != (i + 1))\n                return i + 1;\n        return nums.length + 1;\n    }\n    private static void bucket_sort(int[] A) {\n        final int n = A.length;\n        for (int i = 0; i < n; i++) {\n            while (A[i] != i + 1) {\n                if (A[i] < 1 || A[i] > n || A[i] == A[A[i] - 1])\n                    break;\n                // swap\n                int tmp = A[i];\n                A[i] = A[tmp - 1];\n                A[tmp - 1] = tmp;\n            }\n        }\n    }\n}\n"})})}),(0,i.jsx)(l.A,{value:"cpp",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"// First Missing Positive\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    int firstMissingPositive(vector<int>& nums) {\n        bucket_sort(nums);\n\n        for (int i = 0; i < nums.size(); ++i)\n            if (nums[i] != (i + 1))\n                return i + 1;\n        return nums.size() + 1;\n    }\nprivate:\n    static void bucket_sort(vector<int>& A) {\n        const int n = A.size();\n        for (int i = 0; i < n; i++) {\n            while (A[i] != i + 1) {\n                if (A[i] <= 0 || A[i] > n || A[i] == A[A[i] - 1])\n                    break;\n                swap(A[i], A[A[i] - 1]);\n            }\n        }\n    }\n};\n"})})})]}),"\n",(0,i.jsx)(n.h3,{id:"\u76f8\u5173\u9898\u76ee",children:"\u76f8\u5173\u9898\u76ee"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/en/sorting/quick-sort/sort-colors",children:"Sort Colors"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>a});t(96540);var r=t(34164);const i={tabItem:"tabItem_Ymn6"};var s=t(74848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,a),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>k});var r=t(96540),i=t(34164),s=t(23104),a=t(56347),l=t(205),o=t(57485),u=t(31682),c=t(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:i}}=e;return{value:n,label:t,attributes:r,default:i}}))}(t);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const i=(0,a.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(i.location.search);n.set(s,e),i.replace({...i.location,search:n.toString()})}),[s,i])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,s=p(e),[a,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[u,d]=f({queryString:t,groupId:i}),[m,v]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,s]=(0,c.Dv)(t);return[i,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:i}),b=(()=>{const e=u??m;return h({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{b&&o(b)}),[b]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),v(e)}),[d,v,s]),tabValues:s}}var v=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function x(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const n=e.currentTarget,t=o.indexOf(n),i=l[t].value;i!==r&&(u(n),a(i))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:d,onClick:c,...s,className:(0,i.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function A(e){let{lazy:n,children:t,selectedValue:s}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function j(e){const n=m(e);return(0,g.jsxs)("div",{className:(0,i.A)("tabs-container",b.tabList),children:[(0,g.jsx)(x,{...n,...e}),(0,g.jsx)(A,{...n,...e})]})}function k(e){const n=(0,v.A)();return(0,g.jsx)(j,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var r=t(96540);const i={},s=r.createContext(i);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);