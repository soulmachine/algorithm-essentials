"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[2962],{77441:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"dp/decode-ways","title":"Decode Ways","description":"\u63cf\u8ff0","source":"@site/docs/dp/decode-ways.md","sourceDirName":"dp","slug":"/dp/decode-ways","permalink":"/en/dp/decode-ways","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Decode Ways"},"sidebar":"docs","previous":{"title":"Edit Distance","permalink":"/en/dp/edit-distance"},"next":{"title":"Distinct Subsequences","permalink":"/en/dp/distinct-subsequences"}}');var a=t(74848),s=t(28453),i=t(11470),l=t(19365);const c={title:"Decode Ways"},o=void 0,u={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}];function p(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,a.jsxs)(n.p,{children:["A message containing letters from ",(0,a.jsx)(n.code,{children:"A-Z"})," is being encoded to numbers using the following mapping:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"'A' -> 1\n'B' -> 2\n...\n'Z' -> 26\n"})}),"\n",(0,a.jsx)(n.p,{children:"Given an encoded message containing digits, determine the total number of ways to decode it."}),"\n",(0,a.jsxs)(n.p,{children:["For example,\nGiven encoded message ",(0,a.jsx)(n.code,{children:'"12"'}),", it could be decoded as ",(0,a.jsx)(n.code,{children:'"AB"'})," (1 2) or ",(0,a.jsx)(n.code,{children:'"L"'})," (12)."]}),"\n",(0,a.jsxs)(n.p,{children:["The number of ways decoding ",(0,a.jsx)(n.code,{children:'"12"'})," is 2."]}),"\n",(0,a.jsx)(n.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,a.jsxs)(n.p,{children:["\u8ddf\u7b2c???\u8282",(0,a.jsx)(n.a,{href:"/en/dp/climbing-stairs",children:"Climbing Stairs"}),"\u5f88\u7c7b\u4f3c\uff0c\u4e0d\u8fc7\u591a\u52a0\u4e00\u4e9b\u5224\u65ad\u903b\u8f91\u3002"]}),"\n",(0,a.jsx)(n.h3,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n","\n",(0,a.jsxs)(i.A,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,a.jsx)(l.A,{value:"java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"// Decode Ways\n// \u52a8\u89c4\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public int numDecodings(String s) {\n        if (s.isEmpty() || s.charAt(0) == '0') return 0;\n\n        int prev = 0;\n        int cur = 1;\n        // \u957f\u5ea6\u4e3an\u7684\u5b57\u7b26\u4e32\uff0c\u6709 n+1\u4e2a\u9636\u68af\n        for (int i = 1; i <= s.length(); ++i) {\n            if (s.charAt(i-1) == '0') cur = 0;\n\n            if (i < 2 || !(s.charAt(i - 2) == '1' ||\n                    (s.charAt(i - 2) == '2' && s.charAt(i - 1) <= '6')))\n                prev = 0;\n\n            int tmp = cur;\n            cur = prev + cur;\n            prev = tmp;\n        }\n        return cur;\n    }\n}\n"})})}),(0,a.jsx)(l.A,{value:"cpp",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"// Decode Ways\n// \u52a8\u89c4\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    int numDecodings(const string &s) {\n        if (s.empty() || s[0] == '0') return 0;\n\n        int prev = 0;\n        int cur = 1;\n        // \u957f\u5ea6\u4e3an\u7684\u5b57\u7b26\u4e32\uff0c\u6709 n+1\u4e2a\u9636\u68af\n        for (size_t i = 1; i <= s.size(); ++i) {\n            if (s[i-1] == '0') cur = 0;\n\n            if (i < 2 || !(s[i - 2] == '1' ||\n                     (s[i - 2] == '2' && s[i - 1] <= '6')))\n                prev = 0;\n\n            int tmp = cur;\n            cur = prev + cur;\n            prev = tmp;\n        }\n        return cur;\n    }\n};\n"})})}),(0,a.jsx)(l.A,{value:"python",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"# Decode Ways\n# Dynamic programming, time complexity O(n), space complexity O(1)\nclass Solution:\n    def numDecodings(self, s: str) -> int:\n        if not s or s[0] == '0':\n            return 0\n\n        prev = 0\n        cur = 1\n        # For a string of length n, there are n+1 steps\n        for i in range(1, len(s) + 1):\n            if s[i-1] == '0':\n                cur = 0\n\n            if i < 2 or not (s[i-2] == '1' or\n                    (s[i-2] == '2' and s[i-1] <= '6')):\n                prev = 0\n\n            tmp = cur\n            cur = prev + cur\n            prev = tmp\n\n        return cur\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"\u76f8\u5173\u9898\u76ee",children:"\u76f8\u5173\u9898\u76ee"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/en/dp/climbing-stairs",children:"Climbing Stairs"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var r=t(34164);const a={tabItem:"tabItem_Ymn6"};var s=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(96540),a=t(34164),s=t(23104),i=t(56347),l=t(205),c=t(57485),o=t(31682),u=t(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,o.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=p(e),[i,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[o,d]=m({queryString:t,groupId:a}),[f,v]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,u.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),b=(()=>{const e=o??f;return h({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{b&&c(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),v(e)}),[d,v,s]),tabValues:s}}var v=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function x(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.a_)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),a=l[t].value;a!==r&&(o(n),i(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:s}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function j(e){const n=f(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,g.jsx)(x,{...n,...e}),(0,g.jsx)(y,{...n,...e})]})}function w(e){const n=(0,v.A)();return(0,g.jsx)(j,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var r=t(96540);const a={},s=r.createContext(a);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);