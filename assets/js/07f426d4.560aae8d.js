"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[2604],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||l;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294),a=n(6010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(7462),a=n(7294),l=n(6010),i=n(2389),o=n(7392),s=n(7094),u=n(2466);const c="tabList__CuJ",p="tabItem_LNqP";function m(e){var t,n;const{lazy:i,block:m,defaultValue:d,values:f,groupId:b,className:y}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=f?f:v.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),k=(0,o.l)(h,((e,t)=>e.value===t.value));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const g=null===d?d:null!=(t=null!=d?d:null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)?t:v[0].props.value;if(null!==g&&!h.some((e=>e.value===g)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:O,setTabGroupChoices:T}=(0,s.U)(),[w,S]=(0,a.useState)(g),N=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=b){const e=O[b];null!=e&&e!==w&&h.some((t=>t.value===e))&&S(e)}const j=e=>{const t=e.currentTarget,n=N.indexOf(t),r=h[n].value;r!==w&&(E(t),S(r),null!=b&&T(b,String(r)))},x=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var r;const t=N.indexOf(e.currentTarget)+1;n=null!=(r=N[t])?r:N[0];break}case"ArrowLeft":{var a;const t=N.indexOf(e.currentTarget)-1;n=null!=(a=N[t])?a:N[N.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},y)},h.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>N.push(e),onKeyDown:x,onFocus:j,onClick:j},i,{className:(0,l.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),i?(0,a.cloneElement)(v.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,i.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},5693:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var r=n(7462),a=(n(7294),n(3905)),l=n(5488),i=n(5162);const o={title:"Best Time to Buy and Sell Stock"},s=void 0,u={unversionedId:"greedy/best-time-to-buy-and-sell-stock",id:"greedy/best-time-to-buy-and-sell-stock",title:"Best Time to Buy and Sell Stock",description:"\u63cf\u8ff0",source:"@site/docs/greedy/best-time-to-buy-and-sell-stock.md",sourceDirName:"greedy",slug:"/greedy/best-time-to-buy-and-sell-stock",permalink:"/greedy/best-time-to-buy-and-sell-stock",draft:!1,editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/greedy/best-time-to-buy-and-sell-stock.md",tags:[],version:"current",frontMatter:{title:"Best Time to Buy and Sell Stock"},sidebar:"someSidebar",previous:{title:"Jump Game II",permalink:"/greedy/jump-game-ii"},next:{title:"Best Time to Buy and Sell Stock II",permalink:"/greedy/best-time-to-buy-and-sell-stock-ii"}},c={},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],m={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.kt)("p",null,"Say you have an array for which the i-th element is the price of a given stock on day i."),(0,a.kt)("p",null,"If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit."),(0,a.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,a.kt)("p",null,"\u8d2a\u5fc3\u6cd5\uff0c\u5206\u522b\u627e\u5230\u4ef7\u683c\u6700\u4f4e\u548c\u6700\u9ad8\u7684\u4e00\u5929\uff0c\u4f4e\u8fdb\u9ad8\u51fa\uff0c\u6ce8\u610f\u6700\u4f4e\u7684\u4e00\u5929\u8981\u5728\u6700\u9ad8\u7684\u4e00\u5929\u4e4b\u524d\u3002"),(0,a.kt)("p",null,"\u628a\u539f\u59cb\u4ef7\u683c\u5e8f\u5217\u53d8\u6210\u5dee\u5206\u5e8f\u5217\uff0c\u672c\u9898\u4e5f\u53ef\u4ee5\u505a\u662f\u6700\u5927",(0,a.kt)("inlineCode",{parentName:"p"},"m"),"\u5b50\u6bb5\u548c\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"m=1"),"\u3002"),(0,a.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,a.kt)(l.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// Best Time to Buy and Sell Stock\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public int maxProfit(int[] prices) {\n        if (prices.length < 2) return 0;\n        int profit = 0;  // \u5dee\u4ef7\uff0c\u4e5f\u5c31\u662f\u5229\u6da6\n        int cur_min = prices[0]; // \u5f53\u524d\u6700\u5c0f\n\n        for (int i = 1; i < prices.length; i++) {\n            profit = Math.max(profit, prices[i] - cur_min);\n            cur_min = Math.min(cur_min, prices[i]);\n        }\n        return profit;\n    }\n}\n"))),(0,a.kt)(i.Z,{value:"cpp",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// Best Time to Buy and Sell Stock\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    int maxProfit(vector<int> &prices) {\n        if (prices.size() < 2) return 0;\n        int profit = 0;  // \u5dee\u4ef7\uff0c\u4e5f\u5c31\u662f\u5229\u6da6\n        int cur_min = prices[0]; // \u5f53\u524d\u6700\u5c0f\n\n        for (int i = 1; i < prices.size(); i++) {\n            profit = max(profit, prices[i] - cur_min);\n            cur_min = min(cur_min, prices[i]);\n        }\n        return profit;\n    }\n};\n")))),(0,a.kt)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/greedy/best-time-to-buy-and-sell-stock-ii"},"Best Time to Buy and Sell Stock II")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dp/best-time-to-buy-and-sell-stock-iii"},"Best Time to Buy and Sell Stock III"))))}d.isMDXComponent=!0}}]);