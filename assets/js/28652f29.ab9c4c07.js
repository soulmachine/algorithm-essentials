"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[9153],{61063:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"stack-and-queue/stack/minimum-number-of-swaps-to-make-the-string-balanced","title":"Minimum Number of Swaps to Make the String Balanced","description":"\u63cf\u8ff0","source":"@site/docs/stack-and-queue/stack/minimum-number-of-swaps-to-make-the-string-balanced.md","sourceDirName":"stack-and-queue/stack","slug":"/stack-and-queue/stack/minimum-number-of-swaps-to-make-the-string-balanced","permalink":"/stack-and-queue/stack/minimum-number-of-swaps-to-make-the-string-balanced","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Minimum Number of Swaps to Make the String Balanced"},"sidebar":"docs","previous":{"title":"Median of Data Stream","permalink":"/stack-and-queue/stack/median-of-data-stream"},"next":{"title":"Minimum Add to Make Parentheses Valid","permalink":"/stack-and-queue/stack/minimum-add-to-make-parentheses-valid"}}');var r=t(74848),s=t(28453),l=t(11470),u=t(19365);const i={title:"Minimum Number of Swaps to Make the String Balanced"},o=void 0,c={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}];function m(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,r.jsx)(n.p,{children:"TODO"}),"\n",(0,r.jsx)(n.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,r.jsx)(n.p,{children:"\u8bbe\u7f6e\u4e00\u4e2astack\uff0c\u78b0\u5230\u5de6\u62ec\u53f7\uff0c\u5165\u6808\uff1b\u78b0\u5230\u53f3\u62ec\u53f7\u65f6\uff0c\u5982\u679c\u6808\u5927\u4e8e0\uff0c\u5f39\u51fa\u4e00\u4e2a\u5de6\u62ec\u53f7\uff0c\u5982\u679c\u6808\u4e3a\u7a7a\uff0c\u8bf4\u660e\u5f53\u524d\u53f3\u62ec\u53f7\u975e\u6cd5\u3002\u904d\u5386\u7ed3\u675f\u540e\uff0c\u67e5\u770b\u6808\u91cc\u6709\u591a\u5c11\u4e2a\u5143\u7d20\uff0c\u53d6\u5176\u4e00\u534a\uff0c\u5373\u4e3a\u6240\u9700\u8981\u7684\u4ea4\u6362\u6b21\u6570\uff0c\u5982\u679c\u6808\u91cc\u6709\u5947\u6570\u4e2a\u5de6\u62ec\u53f7\uff0c\u5219\u5411\u4e0a\u53d6\u6574\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u5b9e\u9645\u4ee3\u7801\u4e2d\uff0c\u4e0d\u9700\u8981\u771f\u7684\u521b\u5efa\u4e00\u4e2a\u6808\uff0c\u7528\u4e00\u4e2a\u6574\u6570 ",(0,r.jsx)(n.code,{children:"count"}),"\u6765\u8868\u793a\u6808\u91cc\u5de6\u62ec\u53f7\u7684\u4e2a\u6570\uff0c",(0,r.jsx)(n.code,{children:"count++"}),"\u8868\u793a\u5165\u6808, ",(0,r.jsx)(n.code,{children:"count--"}),"\u8868\u793a\u51fa\u6808\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n","\n",(0,r.jsxs)(l.A,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,r.jsx)(u.A,{value:"java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"// Minimum Number of Swaps to Make the String Balanced\n// Time complexity: O(n)\n// Space complexity: O(1)\nclass Solution {\n    public int minSwaps(String s) {\n        int count = 0;\n        for(int i = 0; i < s.length(); i++){\n            char c = s.charAt(i);\n            if(c == '['){\n                count++;\n            } else if(count > 0){\n                count--;\n            }\n        }\n\n        return (count + 1) / 2;\n    }\n}\n"})})}),(0,r.jsx)(u.A,{value:"cpp",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"// TODO\n"})})}),(0,r.jsx)(u.A,{value:"python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"# Minimum Number of Swaps to Make the String Balanced\n# Time complexity: O(n)\n# Space complexity: O(1)\nclass Solution:\n    def minSwaps(self, s: str) -> int:\n        count = 0\n        for c in s:\n            if c == '[':\n                count += 1\n            elif count > 0:\n                count -= 1\n\n        return (count + 1) // 2\n"})})})]}),"\n",(0,r.jsx)(n.h3,{id:"\u76f8\u5173\u9898\u76ee",children:"\u76f8\u5173\u9898\u76ee"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/stack-and-queue/stack/minimum-add-to-make-parentheses-valid",children:"Minimum Add to Make Parentheses Valid"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>l});t(96540);var a=t(34164);const r={tabItem:"tabItem_Ymn6"};var s=t(74848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,l),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>y});var a=t(96540),r=t(34164),s=t(23104),l=t(56347),u=t(205),i=t(57485),o=t(31682),c=t(70679);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,o.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const r=(0,l.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=m(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[o,d]=p({queryString:t,groupId:r}),[f,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,c.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),v=(()=>{const e=o??f;return h({value:e,tabValues:s})?e:null})();(0,u.A)((()=>{v&&i(v)}),[v]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=t(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function x(e){let{className:n,block:t,selectedValue:a,selectValue:l,tabValues:u}=e;const i=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.a_)(),c=e=>{const n=e.currentTarget,t=i.indexOf(n),r=u[t].value;r!==a&&(o(n),l(r))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:u.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>i.push(e),onKeyDown:d,onClick:c,...s,className:(0,r.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function k(e){let{lazy:n,children:t,selectedValue:s}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function j(e){const n=f(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...n,...e}),(0,g.jsx)(k,{...n,...e})]})}function y(e){const n=(0,b.A)();return(0,g.jsx)(j,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>u});var a=t(96540);const r={},s=a.createContext(r);function l(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function u(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);