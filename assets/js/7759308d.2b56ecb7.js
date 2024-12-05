"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[8586],{99948:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>m,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>u});const a=JSON.parse('{"id":"divide-and-conquer/pow","title":"Pow(x,n)","description":"\u63cf\u8ff0","source":"@site/docs/divide-and-conquer/pow.md","sourceDirName":"divide-and-conquer","slug":"/divide-and-conquer/pow","permalink":"/divide-and-conquer/pow","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Pow(x,n)"},"sidebar":"docs","previous":{"title":"Combinations","permalink":"/brute-force/combinations"},"next":{"title":"Sqrt(x)","permalink":"/divide-and-conquer/sqrt"}}');var t=n(74848),r=n(28453),l=n(11470),i=n(19365);const c={title:"Pow(x,n)"},o=void 0,m={},u=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}];function d(e){const s={a:"a",annotation:"annotation",code:"code",h3:"h3",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,t.jsxs)(s.p,{children:["Implement ",(0,t.jsx)(s.code,{children:"pow(x, n)"}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,t.jsxs)(s.p,{children:["\u4e8c\u5206\u6cd5\uff0c",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsxs)(s.msup,{children:[(0,t.jsx)(s.mi,{children:"x"}),(0,t.jsx)(s.mi,{children:"n"})]}),(0,t.jsx)(s.mo,{children:"="}),(0,t.jsxs)(s.msup,{children:[(0,t.jsx)(s.mi,{children:"x"}),(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"n"}),(0,t.jsx)(s.mi,{mathvariant:"normal",children:"/"}),(0,t.jsx)(s.mn,{children:"2"})]})]}),(0,t.jsx)(s.mo,{children:"\xd7"}),(0,t.jsxs)(s.msup,{children:[(0,t.jsx)(s.mi,{children:"x"}),(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"n"}),(0,t.jsx)(s.mi,{mathvariant:"normal",children:"/"}),(0,t.jsx)(s.mn,{children:"2"})]})]}),(0,t.jsx)(s.mo,{children:"\xd7"}),(0,t.jsxs)(s.msup,{children:[(0,t.jsx)(s.mi,{children:"x"}),(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"n"}),(0,t.jsx)(s.mi,{mathvariant:"normal",children:"%"}),(0,t.jsx)(s.mn,{children:"2"})]})]})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"x^n = x^{n/2} \\times x^{n/2} \\times x^{n\\%2}"})]})})}),(0,t.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.6644em"}}),(0,t.jsxs)(s.span,{className:"mord",children:[(0,t.jsx)(s.span,{className:"mord mathnormal",children:"x"}),(0,t.jsx)(s.span,{className:"msupsub",children:(0,t.jsx)(s.span,{className:"vlist-t",children:(0,t.jsx)(s.span,{className:"vlist-r",children:(0,t.jsx)(s.span,{className:"vlist",style:{height:"0.6644em"},children:(0,t.jsxs)(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,t.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,t.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,t.jsx)(s.span,{className:"mord mathnormal mtight",children:"n"})})]})})})})})]}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,t.jsx)(s.span,{className:"mrel",children:"="}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.9713em",verticalAlign:"-0.0833em"}}),(0,t.jsxs)(s.span,{className:"mord",children:[(0,t.jsx)(s.span,{className:"mord mathnormal",children:"x"}),(0,t.jsx)(s.span,{className:"msupsub",children:(0,t.jsx)(s.span,{className:"vlist-t",children:(0,t.jsx)(s.span,{className:"vlist-r",children:(0,t.jsx)(s.span,{className:"vlist",style:{height:"0.888em"},children:(0,t.jsxs)(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,t.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,t.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,t.jsxs)(s.span,{className:"mord mtight",children:[(0,t.jsx)(s.span,{className:"mord mathnormal mtight",children:"n"}),(0,t.jsx)(s.span,{className:"mord mtight",children:"/2"})]})})]})})})})})]}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,t.jsx)(s.span,{className:"mbin",children:"\xd7"}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.9713em",verticalAlign:"-0.0833em"}}),(0,t.jsxs)(s.span,{className:"mord",children:[(0,t.jsx)(s.span,{className:"mord mathnormal",children:"x"}),(0,t.jsx)(s.span,{className:"msupsub",children:(0,t.jsx)(s.span,{className:"vlist-t",children:(0,t.jsx)(s.span,{className:"vlist-r",children:(0,t.jsx)(s.span,{className:"vlist",style:{height:"0.888em"},children:(0,t.jsxs)(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,t.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,t.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,t.jsxs)(s.span,{className:"mord mtight",children:[(0,t.jsx)(s.span,{className:"mord mathnormal mtight",children:"n"}),(0,t.jsx)(s.span,{className:"mord mtight",children:"/2"})]})})]})})})})})]}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,t.jsx)(s.span,{className:"mbin",children:"\xd7"}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.888em"}}),(0,t.jsxs)(s.span,{className:"mord",children:[(0,t.jsx)(s.span,{className:"mord mathnormal",children:"x"}),(0,t.jsx)(s.span,{className:"msupsub",children:(0,t.jsx)(s.span,{className:"vlist-t",children:(0,t.jsx)(s.span,{className:"vlist-r",children:(0,t.jsx)(s.span,{className:"vlist",style:{height:"0.888em"},children:(0,t.jsxs)(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,t.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,t.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,t.jsxs)(s.span,{className:"mord mtight",children:[(0,t.jsx)(s.span,{className:"mord mathnormal mtight",children:"n"}),(0,t.jsx)(s.span,{className:"mord mtight",children:"%2"})]})})]})})})})})]})]})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n","\n",(0,t.jsxs)(l.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,t.jsx)(i.A,{value:"java",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-java",children:"// Pow(x, n)\n// \u4e8c\u5206\u6cd5\uff0c$x^n = x^{n/2} * x^{n/2} * x^{n\\%2}$\n// \u65f6\u95f4\u590d\u6742\u5ea6O(logn)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public double myPow(double x, int n) {\n        if (n < 0) return 1.0 / power(x, -n);\n        else return power(x, n);\n    }\n    private static double power(double x, int n) {\n        if (n == 0) return 1;\n        double v = power(x, n / 2);\n        if (n % 2 == 0) return v * v;\n        else return v * v * x;\n    }\n}\n"})})}),(0,t.jsx)(i.A,{value:"cpp",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-cpp",children:"// Pow(x, n)\n// \u4e8c\u5206\u6cd5\uff0c$x^n = x^{n/2} * x^{n/2} * x^{n\\%2}$\n// \u65f6\u95f4\u590d\u6742\u5ea6O(logn)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    double myPow(double x, int n) {\n        long long N = n; // to prevent overflow\n        if (N < 0) return power(1/x, -N);\n        else return power(x, N);\n    }\nprivate:\n    double power(double x, int n) {\n        if (n == 0) return 1;\n        double v = power(x, n / 2);\n        if (n % 2 == 0) return v * v;\n        else return v * v * x;\n    }\n};\n"})})})]}),"\n",(0,t.jsx)(s.h3,{id:"\u76f8\u5173\u9898\u76ee",children:"\u76f8\u5173\u9898\u76ee"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/divide-and-conquer/sqrt",children:"Sqrt(x)"})}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},19365:(e,s,n)=>{n.d(s,{A:()=>l});n(96540);var a=n(34164);const t={tabItem:"tabItem_Ymn6"};var r=n(74848);function l(e){let{children:s,hidden:n,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(t.tabItem,l),hidden:n,children:s})}},11470:(e,s,n)=>{n.d(s,{A:()=>w});var a=n(96540),t=n(34164),r=n(23104),l=n(56347),i=n(205),c=n(57485),o=n(31682),m=n(70679);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:s,children:n}=e;return(0,a.useMemo)((()=>{const e=s??function(e){return u(e).map((e=>{let{props:{value:s,label:n,attributes:a,default:t}}=e;return{value:s,label:n,attributes:a,default:t}}))}(n);return function(e){const s=(0,o.XI)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,n])}function h(e){let{value:s,tabValues:n}=e;return n.some((e=>e.value===s))}function p(e){let{queryString:s=!1,groupId:n}=e;const t=(0,l.W6)(),r=function(e){let{queryString:s=!1,groupId:n}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:s,groupId:n});return[(0,c.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const s=new URLSearchParams(t.location.search);s.set(r,e),t.replace({...t.location,search:s.toString()})}),[r,t])]}function x(e){const{defaultValue:s,queryString:n=!1,groupId:t}=e,r=d(e),[l,c]=(0,a.useState)((()=>function(e){let{defaultValue:s,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!h({value:s,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:s,tabValues:r}))),[o,u]=p({queryString:n,groupId:t}),[x,j]=function(e){let{groupId:s}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(s),[t,r]=(0,m.Dv)(n);return[t,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:t}),v=(()=>{const e=o??x;return h({value:e,tabValues:r})?e:null})();(0,i.A)((()=>{v&&c(v)}),[v]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),j(e)}),[u,j,r]),tabValues:r}}var j=n(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function b(e){let{className:s,block:n,selectedValue:a,selectValue:l,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,r.a_)(),m=e=>{const s=e.currentTarget,n=c.indexOf(s),t=i[n].value;t!==a&&(o(s),l(t))},u=e=>{let s=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;s=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;s=c[n]??c[c.length-1];break}}s?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":n},s),children:i.map((e=>{let{value:s,label:n,attributes:r}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===s?0:-1,"aria-selected":a===s,ref:e=>c.push(e),onKeyDown:u,onClick:m,...r,className:(0,t.A)("tabs__item",v.tabItem,r?.className,{"tabs__item--active":a===s}),children:n??s},s)}))})}function f(e){let{lazy:s,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(s){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,s)=>(0,a.cloneElement)(e,{key:s,hidden:e.props.value!==r})))})}function N(e){const s=x(e);return(0,g.jsxs)("div",{className:(0,t.A)("tabs-container",v.tabList),children:[(0,g.jsx)(b,{...s,...e}),(0,g.jsx)(f,{...s,...e})]})}function w(e){const s=(0,j.A)();return(0,g.jsx)(N,{...e,children:u(e.children)},String(s))}},28453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>i});var a=n(96540);const t={},r=a.createContext(t);function l(e){const s=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),a.createElement(r.Provider,{value:s},e.children)}}}]);