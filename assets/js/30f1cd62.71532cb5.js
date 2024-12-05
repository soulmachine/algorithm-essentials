"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[12],{86217:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"greedy/two-city-scheduling","title":"Two City Scheduling","description":"\u63cf\u8ff0","source":"@site/docs/greedy/two-city-scheduling.md","sourceDirName":"greedy","slug":"/greedy/two-city-scheduling","permalink":"/greedy/two-city-scheduling","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Two City Scheduling"},"sidebar":"docs","previous":{"title":"Task Scheduler","permalink":"/greedy/task-scheduler"},"next":{"title":"\u52a8\u6001\u89c4\u5212","permalink":"/dp/"}}');var a=n(74848),l=n(28453),s=n(11470),u=n(19365);const i={title:"Two City Scheduling"},o=void 0,c={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}];function h(e){const t={code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,a.jsx)(t.p,{children:"TODO"}),"\n",(0,a.jsx)(t.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\u5047\u8bbe\u6240\u6709\u7684\u4eba\u90fd\u9009\u62e9\u57ce\u5e02A\uff0c \u8fd9\u65f6\u5019\u603b\u82b1\u8d39\u662f",(0,a.jsx)(t.code,{children:"sum = sum{a[i][0]}"})]}),"\n",(0,a.jsxs)(t.li,{children:["\u7136\u540e\u8981\u9009\u62e9\u4e00\u534a\u7684\u4eba\u6539\u6210B\uff0c \u8fd9\u4e2a\u65f6\u5019, \u9009\u62e9\u67d0\u4e00\u4e2a\u4eba\u5bf9",(0,a.jsx)(t.code,{children:"sum"}),"\u7684\u5f71\u54cd\u662f",(0,a.jsx)(t.code,{children:"d=a[i][1]-a[i][0]"})]}),"\n",(0,a.jsx)(t.li,{children:"\u90a3\u4e48\uff0c \u6211\u4eec\u8981\u8ba9\u7ed3\u679c\u6700\u5c0f\uff0c \u5c31\u9700\u8981\u8ba9\u8fd9\u4e2ad\u6700\u5c0f\uff0c \u90a3\u6309\u7167\u8fd9\u4e2ad\u5bf9\u6570\u7ec4\u6392\u5e8f\uff0c\u7136\u540e\u9009\u62e9\u6700\u5c0f\u7684\u4e00\u534a\u5c31\u597d"}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n","\n",(0,a.jsxs)(s.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,a.jsx)(u.A,{value:"java",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:"// Two City Scheduling\n// Time complexity: O(nlogn)\n// Space complexity: O(logn)\nclass Solution {\n    public int twoCitySchedCost(int[][] costs) {\n        // sorted by d in ascending order\n        Arrays.sort(costs, new Comparator<int[]>() {\n            public int compare(int[] a, int[] b) {\n                int v1 = a[1] - a[0];    \n                int v2 = b[1] - b[0];\n                return v1-v2;\n            }\n        });\n\n        int sum = 0;\n        for(int[] cost: costs) {\n            sum += cost[0];\n        }\n\n        for(int i = 0; i < costs.length/2; ++i) {\n            sum += costs[i][1] - costs[i][0];\n        }\n        return sum;\n    }\n}\n"})})}),(0,a.jsx)(u.A,{value:"cpp",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cpp",children:"// TODO\n"})})})]})]})}function p(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var r=n(34164);const a={tabItem:"tabItem_Ymn6"};var l=n(74848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(96540),a=n(34164),l=n(23104),s=n(56347),u=n(205),i=n(57485),o=n(31682),c=n(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,o.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.W6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=h(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[o,d]=m({queryString:n,groupId:a}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),v=(()=>{const e=o??f;return p({value:e,tabValues:l})?e:null})();(0,u.A)((()=>{v&&i(v)}),[v]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,l]),tabValues:l}}var b=n(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function y(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:u}=e;const i=[],{blockElementScrollPositionUntilNextRender:o}=(0,l.a_)(),c=e=>{const t=e.currentTarget,n=i.indexOf(t),a=u[n].value;a!==r&&(o(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:u.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...l,className:(0,a.A)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:l}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===l));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function j(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,g.jsx)(y,{...t,...e}),(0,g.jsx)(x,{...t,...e})]})}function w(e){const t=(0,b.A)();return(0,g.jsx)(j,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>u});var r=n(96540);const a={},l=r.createContext(a);function s(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function u(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);