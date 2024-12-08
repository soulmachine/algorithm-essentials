"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[7238],{70561:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"dp/maximum-subarray-sum-with-one-deletion","title":"Maximum Sum Circular Subarray","description":"\u63cf\u8ff0","source":"@site/docs/dp/maximum-subarray-sum-with-one-deletion.md","sourceDirName":"dp","slug":"/dp/maximum-subarray-sum-with-one-deletion","permalink":"/dp/maximum-subarray-sum-with-one-deletion","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Maximum Sum Circular Subarray"},"sidebar":"docs","previous":{"title":"Maximum Sum Circular Subarray","permalink":"/dp/maximum-sum-circular-subarray"},"next":{"title":"Maximum Product Subarray","permalink":"/dp/maximum-product-subarray"}}');var t=n(74848),l=n(28453),u=n(11470),i=n(19365);const s={title:"Maximum Sum Circular Subarray"},o=void 0,c={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}];function m(e){const r={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,t.jsx)(r.p,{children:"TODO"}),"\n",(0,t.jsx)(r.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,t.jsxs)(r.p,{children:["\u4ee4\u4e8c\u7ef4\u6570\u7ec4 ",(0,t.jsx)(r.code,{children:"dp[i][0/1]"}),", ",(0,t.jsx)(r.code,{children:"dp[i][0]"}),"\u8868\u793a\u4ee5",(0,t.jsx)(r.code,{children:"nums[i]"}),"\u7ed3\u5c3e\u7684\u6700\u5927\u8fde\u7eed\u5b50\u6570\u7ec4\u548c\uff0c",(0,t.jsx)(r.code,{children:"dp[i][1]"}),"\u5220\u9664",(0,t.jsx)(r.code,{children:"nums[i]"}),"\u6700\u5927\u8fde\u7eed\u5b50\u6570\u7ec4\u548c\u3002"]}),"\n",(0,t.jsx)(r.h3,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n","\n",(0,t.jsxs)(u.A,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,t.jsx)(i.A,{value:"java",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-java",children:"class Solution {\n    public int maximumSum(int[] arr) {\n        int n = arr.length;\n        if (n == 1) {\n            return arr[0];\n        }\n        int[][] dp = new int[n][2];\n        dp[0][1] = 0;\n        dp[0][0] = arr[0];\n        int res = Integer.MIN_VALUE;\n        for (int i = 1; i < n; i++) {\n            dp[i][0] = Math.max(dp[i - 1][0] + arr[i], arr[i]);\n            dp[i][1] = Math.max(dp[i - 1][0], dp[i - 1][1] + arr[i]);\n            res = Math.max(res, Math.max(dp[i][0], dp[i][1]));\n        }\n        return res;\n    }\n}\n"})})}),(0,t.jsx)(i.A,{value:"cpp",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-cpp",children:"// TODO\n"})})}),(0,t.jsx)(i.A,{value:"python",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"class Solution:\n    def maximumSum(self, arr: List[int]) -> int:\n        n = len(arr)\n        if n == 1:\n            return arr[0]\n        dp = [[0] * 2 for _ in range(n)]\n        dp[0][1] = 0\n        dp[0][0] = arr[0]\n        res = float('-inf')\n        for i in range(1, n):\n            dp[i][0] = max(dp[i - 1][0] + arr[i], arr[i])\n            dp[i][1] = max(dp[i - 1][0], dp[i - 1][1] + arr[i])\n            res = max(res, max(dp[i][0], dp[i][1]))\n        return res\n"})})})]}),"\n",(0,t.jsx)(r.h3,{id:"\u76f8\u5173\u9898\u76ee",children:"\u76f8\u5173\u9898\u76ee"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/dp/maximum-subarray",children:"Maximum Subarray"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/dp/maximum-sum-circular-subarray",children:"Maximum Sum Circular Subarray"})}),"\n"]})]})}function p(e={}){const{wrapper:r}={...(0,l.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},19365:(e,r,n)=>{n.d(r,{A:()=>u});n(96540);var a=n(34164);const t={tabItem:"tabItem_Ymn6"};var l=n(74848);function u(e){let{children:r,hidden:n,className:u}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.A)(t.tabItem,u),hidden:n,children:r})}},11470:(e,r,n)=>{n.d(r,{A:()=>S});var a=n(96540),t=n(34164),l=n(23104),u=n(56347),i=n(205),s=n(57485),o=n(31682),c=n(70679);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:r,children:n}=e;return(0,a.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:n,attributes:a,default:t}}=e;return{value:r,label:n,attributes:a,default:t}}))}(n);return function(e){const r=(0,o.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function p(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function h(e){let{queryString:r=!1,groupId:n}=e;const t=(0,u.W6)(),l=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,s.aZ)(l),(0,a.useCallback)((e=>{if(!l)return;const r=new URLSearchParams(t.location.search);r.set(l,e),t.replace({...t.location,search:r.toString()})}),[l,t])]}function f(e){const{defaultValue:r,queryString:n=!1,groupId:t}=e,l=m(e),[u,s]=(0,a.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:r,tabValues:l}))),[o,d]=h({queryString:n,groupId:t}),[f,b]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[t,l]=(0,c.Dv)(n);return[t,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:t}),x=(()=>{const e=o??f;return p({value:e,tabValues:l})?e:null})();(0,i.A)((()=>{x&&s(x)}),[x]);return{selectedValue:u,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),b(e)}),[d,b,l]),tabValues:l}}var b=n(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(74848);function y(e){let{className:r,block:n,selectedValue:a,selectValue:u,tabValues:i}=e;const s=[],{blockElementScrollPositionUntilNextRender:o}=(0,l.a_)(),c=e=>{const r=e.currentTarget,n=s.indexOf(r),t=i[n].value;t!==a&&(o(r),u(t))},d=e=>{let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;r=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;r=s[n]??s[s.length-1];break}}r?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":n},r),children:i.map((e=>{let{value:r,label:n,attributes:l}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===r?0:-1,"aria-selected":a===r,ref:e=>s.push(e),onKeyDown:d,onClick:c,...l,className:(0,t.A)("tabs__item",x.tabItem,l?.className,{"tabs__item--active":a===r}),children:n??r},r)}))})}function g(e){let{lazy:r,children:n,selectedValue:l}=e;const u=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=u.find((e=>e.props.value===l));return e?(0,a.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:u.map(((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==l})))})}function j(e){const r=f(e);return(0,v.jsxs)("div",{className:(0,t.A)("tabs-container",x.tabList),children:[(0,v.jsx)(y,{...r,...e}),(0,v.jsx)(g,{...r,...e})]})}function S(e){const r=(0,b.A)();return(0,v.jsx)(j,{...e,children:d(e.children)},String(r))}},28453:(e,r,n)=>{n.d(r,{R:()=>u,x:()=>i});var a=n(96540);const t={},l=a.createContext(t);function u(e){const r=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:u(e.components),a.createElement(l.Provider,{value:r},e.children)}}}]);