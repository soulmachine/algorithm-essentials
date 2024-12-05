"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[3556],{81296:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"greedy/best-time-to-buy-and-sell-stock-ii","title":"Best Time to Buy and Sell Stock II","description":"\u63cf\u8ff0","source":"@site/docs/greedy/best-time-to-buy-and-sell-stock-ii.md","sourceDirName":"greedy","slug":"/greedy/best-time-to-buy-and-sell-stock-ii","permalink":"/en/greedy/best-time-to-buy-and-sell-stock-ii","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Best Time to Buy and Sell Stock II"},"sidebar":"docs","previous":{"title":"Best Time to Buy and Sell Stock","permalink":"/en/greedy/best-time-to-buy-and-sell-stock"},"next":{"title":"Longest Substring Without Repeating Characters","permalink":"/en/greedy/longest-substring-without-repeating-characters"}}');var a=n(74848),l=n(28453),s=n(11470),i=n(19365);const o={title:"Best Time to Buy and Sell Stock II"},u=void 0,c={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}];function m(e){const t={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,a.jsx)(t.p,{children:"Say you have an array for which the i-th element is the price of a given stock on day i."}),"\n",(0,a.jsx)(t.p,{children:"Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times). However, you may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again)."}),"\n",(0,a.jsx)(t.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,a.jsx)(t.p,{children:"\u8d2a\u5fc3\u6cd5\uff0c\u4f4e\u8fdb\u9ad8\u51fa\uff0c\u628a\u6240\u6709\u6b63\u7684\u4ef7\u683c\u5dee\u4ef7\u76f8\u52a0\u8d77\u6765\u3002"}),"\n",(0,a.jsxs)(t.p,{children:["\u628a\u539f\u59cb\u4ef7\u683c\u5e8f\u5217\u53d8\u6210\u5dee\u5206\u5e8f\u5217\uff0c\u672c\u9898\u4e5f\u53ef\u4ee5\u505a\u662f\u6700\u5927",(0,a.jsx)(t.code,{children:"m"}),"\u5b50\u6bb5\u548c\uff0c",(0,a.jsx)(t.code,{children:"m="}),"\u6570\u7ec4\u957f\u5ea6\u3002"]}),"\n",(0,a.jsx)(t.h3,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n","\n",(0,a.jsxs)(s.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,a.jsx)(i.A,{value:"java",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:"// Best Time to Buy and Sell Stock II\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public int maxProfit(int[] prices) {\n        int sum = 0;\n        for (int i = 1; i < prices.length; i++) {\n            int diff = prices[i] - prices[i - 1];\n            if (diff > 0) sum += diff;\n        }\n        return sum;\n    }\n}\n"})})}),(0,a.jsx)(i.A,{value:"cpp",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cpp",children:"// Best Time to Buy and Sell Stock II\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    int maxProfit(vector<int> &prices) {\n        int sum = 0;\n        for (int i = 1; i < prices.size(); i++) {\n            int diff = prices[i] - prices[i - 1];\n            if (diff > 0) sum += diff;\n        }\n        return sum;\n    }\n};\n"})})})]}),"\n",(0,a.jsx)(t.h3,{id:"\u76f8\u5173\u9898\u76ee",children:"\u76f8\u5173\u9898\u76ee"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/en/greedy/best-time-to-buy-and-sell-stock",children:"Best Time to Buy and Sell Stock"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/en/dp/best-time-to-buy-and-sell-stock-iii",children:"Best Time to Buy and Sell Stock III"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var r=n(34164);const a={tabItem:"tabItem_Ymn6"};var l=n(74848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>k});var r=n(96540),a=n(34164),l=n(23104),s=n(56347),i=n(205),o=n(57485),u=n(31682),c=n(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.W6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=m(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[u,d]=p({queryString:n,groupId:a}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),v=(()=>{const e=u??f;return h({value:e,tabValues:l})?e:null})();(0,i.A)((()=>{v&&o(v)}),[v]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,l]),tabValues:l}}var b=n(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=n(74848);function g(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.a_)(),c=e=>{const t=e.currentTarget,n=o.indexOf(t),a=i[n].value;a!==r&&(u(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:d,onClick:c,...l,className:(0,a.A)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:l}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===l));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function j(e){const t=f(e);return(0,y.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,y.jsx)(g,{...t,...e}),(0,y.jsx)(x,{...t,...e})]})}function k(e){const t=(0,b.A)();return(0,y.jsx)(j,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var r=n(96540);const a={},l=r.createContext(a);function s(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);