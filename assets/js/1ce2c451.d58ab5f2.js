"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[8813],{88166:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>u,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"stack-and-queue/stack/basic-calculator","title":"Basic Calculator","description":"\u63cf\u8ff0","source":"@site/docs/stack-and-queue/stack/basic-calculator.md","sourceDirName":"stack-and-queue/stack","slug":"/stack-and-queue/stack/basic-calculator","permalink":"/stack-and-queue/stack/basic-calculator","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Basic Calculator"},"sidebar":"docs","previous":{"title":"Evaluate Reverse Polish Notation","permalink":"/stack-and-queue/stack/evaluate-reverse-polish-notation"},"next":{"title":"Basic Calculator II","permalink":"/stack-and-queue/stack/basic-calculator-ii"}}');var r=t(74848),s=t(28453),l=t(11470),i=t(19365);const c={title:"Basic Calculator"},u=void 0,o={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}];function h(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,r.jsx)(n.p,{children:"TODO"}),"\n",(0,r.jsx)(n.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,r.jsx)(n.p,{children:"\u5178\u578b\u7684\u6808\u7684\u9898\u76ee\uff0c\u4e0d\u8fc7\u8fd9\u9053\u9898\u5c5e\u4e8ehard\u7ea7\u522b\uff0c\u56e0\u4e3a\u5f88\u96be\u5199\u5bf9\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u8868\u8fbe\u5f0f\u4e2d\u53ea\u6709\u52a0\u51cf\uff0c\u6ca1\u6709\u4e58\u9664\uff0c\u90a3\u5c31\u4e0d\u9700\u8981\u8003\u8651\u4f18\u5148\u7ea7\uff0c\u4e8e\u662f\u8fd9\u9053\u9898\u5c31\u53d8\u7684\u7b80\u5355\u5f88\u591a\u4e86\u3002\u6211\u4eec\u9700\u8981\u4e00\u4e2a\u6808\u6765\u8f85\u52a9\u8ba1\u7b97\uff0c\u7528\u4e2a\u53d8\u91cf",(0,r.jsx)(n.code,{children:"sign"}),"\u6765\u8868\u793a\u5f53\u524d\u7684\u7b26\u53f7\uff0c\u904d\u5386\u7ed9\u5b57\u7b26\u4e32",(0,r.jsx)(n.code,{children:"s"}),"\uff0c"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5982\u679c\u9047\u5230\u4e86\u6570\u5b57\uff0c\u5c31\u7528while\u5faa\u73af\u628a\u4e4b\u540e\u7684\u6570\u5b57\u90fd\u8bfb\u8fdb\u6765\uff0c\u7136\u540e\u7528",(0,r.jsx)(n.code,{children:"sign*num"}),"\u6765\u66f4\u65b0\u7ed3\u679c",(0,r.jsx)(n.code,{children:"res"}),"\uff1b"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5982\u679c\u9047\u5230\u4e86\u52a0\u53f7\uff0c\u5219",(0,r.jsx)(n.code,{children:"sign"}),"\u8d4b\u4e3a1\uff1b"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5982\u679c\u9047\u5230\u4e86\u51cf\u53f7\uff0c\u5219",(0,r.jsx)(n.code,{children:"sign"}),"\u8d4b\u4e3a-1\uff1b"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5982\u679c\u9047\u5230\u4e86\u5de6\u62ec\u53f7\uff0c\u5219\u628a\u5f53\u524d\u7ed3\u679c",(0,r.jsx)(n.code,{children:"res"}),"\u548c\u7b26\u53f7",(0,r.jsx)(n.code,{children:"sign"}),"\u538b\u5165\u6808\uff0c",(0,r.jsx)(n.code,{children:"res"}),"\u91cd\u7f6e\u4e3a0\uff0c",(0,r.jsx)(n.code,{children:"sign"}),"\u91cd\u7f6e\u4e3a1\uff1b"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5982\u679c\u9047\u5230\u4e86\u53f3\u62ec\u53f7\uff0c\u7ed3\u679c",(0,r.jsx)(n.code,{children:"res"}),"\u4e58\u4ee5\u6808\u9876\u7684\u7b26\u53f7\uff0c\u6808\u9876\u5143\u7d20\u51fa\u6808\uff0c\u7ed3\u679c",(0,r.jsx)(n.code,{children:"res"}),"\u52a0\u4e0a\u6808\u9876\u7684\u6570\u5b57\uff0c\u6808\u9876\u5143\u7d20\u51fa\u6808\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n","\n",(0,r.jsxs)(l.A,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,r.jsx)(i.A,{value:"java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"// TODO\n"})})}),(0,r.jsx)(i.A,{value:"cpp",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"// Basic Calculator\n// Time complexity O(n), space complexity O(n)\nclass Solution {\npublic:\n    int calculate(const string& s) {\n        int res = 0, sign = 1, n = s.size();\n        stack<int> stk;\n        for (int i = 0; i < n; ++i) {\n            const char c = s[i];\n            if (isdigit(c)) {\n                int num = 0;\n                while (i < n && isdigit(s[i])) {\n                    num = 10 * num + (s[i++] - '0');\n                }\n                res += sign * num;\n                --i;\n            } else if (c == '+') {\n                sign = 1;\n            } else if (c == '-') {\n                sign = -1;\n            } else if (c == '(') {\n                stk.push(res);\n                stk.push(sign);\n                res = 0;\n                sign = 1;\n            } else if (c == ')') {\n                res *= stk.top(); stk.pop();\n                res += stk.top(); stk.pop();\n            }\n        }\n        return res;\n    }\n};\n"})})}),(0,r.jsx)(i.A,{value:"python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"# No code provided to translate. Please provide the Java code you want translated to Python.\n"})})})]}),"\n",(0,r.jsx)(n.h3,{id:"\u76f8\u5173\u9898\u76ee",children:"\u76f8\u5173\u9898\u76ee"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/stack-and-queue/stack/basic-calculator-ii",children:"Basic Calculator II"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/stack-and-queue/stack/basic-calculator-iii",children:"Basic Calculator III"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/stack-and-queue/stack/build-binary-expression-tree-from-infix-expression",children:"Build Binary Expression Tree From Infix Expression"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>l});t(96540);var a=t(34164);const r={tabItem:"tabItem_Ymn6"};var s=t(74848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,l),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>y});var a=t(96540),r=t(34164),s=t(23104),l=t(56347),i=t(205),c=t(57485),u=t(31682),o=t(70679);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const r=(0,l.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=h(e),[l,c]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[u,d]=f({queryString:t,groupId:r}),[m,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,o.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),v=(()=>{const e=u??m;return p({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{v&&c(v)}),[v]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=t(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function j(e){let{className:n,block:t,selectedValue:a,selectValue:l,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),o=e=>{const n=e.currentTarget,t=c.indexOf(n),r=i[t].value;r!==a&&(u(n),l(r))},d=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>c.push(e),onKeyDown:d,onClick:o,...s,className:(0,r.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:s}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function k(e){const n=m(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,x.jsx)(j,{...n,...e}),(0,x.jsx)(g,{...n,...e})]})}function y(e){const n=(0,b.A)();return(0,x.jsx)(k,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>i});var a=t(96540);const r={},s=a.createContext(r);function l(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);