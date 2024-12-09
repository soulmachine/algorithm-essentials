"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[8586],{99948:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>m,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>u});const a=JSON.parse('{"id":"divide-and-conquer/pow","title":"Pow(x,n)","description":"\u63cf\u8ff0","source":"@site/docs/divide-and-conquer/pow.md","sourceDirName":"divide-and-conquer","slug":"/divide-and-conquer/pow","permalink":"/en/divide-and-conquer/pow","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Pow(x,n)"},"sidebar":"docs","previous":{"title":"Letter Combinations of a Phone Number","permalink":"/en/brute-force/letter-combinations-of-a-phone-number"},"next":{"title":"Sqrt(x)","permalink":"/en/divide-and-conquer/sqrt"}}');var t=s(74848),r=s(28453),l=s(11470),i=s(19365);const c={title:"Pow(x,n)"},o=void 0,m={},u=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}];function d(e){const n={a:"a",annotation:"annotation",code:"code",h3:"h3",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,t.jsxs)(n.p,{children:["Implement ",(0,t.jsx)(n.code,{children:"pow(x, n)"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,t.jsxs)(n.p,{children:["\u4e8c\u5206\u6cd5\uff0c",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsxs)(n.mrow,{children:[(0,t.jsxs)(n.msup,{children:[(0,t.jsx)(n.mi,{children:"x"}),(0,t.jsx)(n.mi,{children:"n"})]}),(0,t.jsx)(n.mo,{children:"="}),(0,t.jsxs)(n.msup,{children:[(0,t.jsx)(n.mi,{children:"x"}),(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mi,{children:"n"}),(0,t.jsx)(n.mi,{mathvariant:"normal",children:"/"}),(0,t.jsx)(n.mn,{children:"2"})]})]}),(0,t.jsx)(n.mo,{children:"\xd7"}),(0,t.jsxs)(n.msup,{children:[(0,t.jsx)(n.mi,{children:"x"}),(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mi,{children:"n"}),(0,t.jsx)(n.mi,{mathvariant:"normal",children:"/"}),(0,t.jsx)(n.mn,{children:"2"})]})]}),(0,t.jsx)(n.mo,{children:"\xd7"}),(0,t.jsxs)(n.msup,{children:[(0,t.jsx)(n.mi,{children:"x"}),(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mi,{children:"n"}),(0,t.jsx)(n.mi,{mathvariant:"normal",children:"%"}),(0,t.jsx)(n.mn,{children:"2"})]})]})]}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"x^n = x^{n/2} \\times x^{n/2} \\times x^{n\\%2}"})]})})}),(0,t.jsxs)(n.span,{className:"katex-html","aria-hidden":"true",children:[(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.6644em"}}),(0,t.jsxs)(n.span,{className:"mord",children:[(0,t.jsx)(n.span,{className:"mord mathnormal",children:"x"}),(0,t.jsx)(n.span,{className:"msupsub",children:(0,t.jsx)(n.span,{className:"vlist-t",children:(0,t.jsx)(n.span,{className:"vlist-r",children:(0,t.jsx)(n.span,{className:"vlist",style:{height:"0.6644em"},children:(0,t.jsxs)(n.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,t.jsx)(n.span,{className:"pstrut",style:{height:"2.7em"}}),(0,t.jsx)(n.span,{className:"sizing reset-size6 size3 mtight",children:(0,t.jsx)(n.span,{className:"mord mathnormal mtight",children:"n"})})]})})})})})]}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,t.jsx)(n.span,{className:"mrel",children:"="}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.9713em",verticalAlign:"-0.0833em"}}),(0,t.jsxs)(n.span,{className:"mord",children:[(0,t.jsx)(n.span,{className:"mord mathnormal",children:"x"}),(0,t.jsx)(n.span,{className:"msupsub",children:(0,t.jsx)(n.span,{className:"vlist-t",children:(0,t.jsx)(n.span,{className:"vlist-r",children:(0,t.jsx)(n.span,{className:"vlist",style:{height:"0.888em"},children:(0,t.jsxs)(n.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,t.jsx)(n.span,{className:"pstrut",style:{height:"2.7em"}}),(0,t.jsx)(n.span,{className:"sizing reset-size6 size3 mtight",children:(0,t.jsxs)(n.span,{className:"mord mtight",children:[(0,t.jsx)(n.span,{className:"mord mathnormal mtight",children:"n"}),(0,t.jsx)(n.span,{className:"mord mtight",children:"/2"})]})})]})})})})})]}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,t.jsx)(n.span,{className:"mbin",children:"\xd7"}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.9713em",verticalAlign:"-0.0833em"}}),(0,t.jsxs)(n.span,{className:"mord",children:[(0,t.jsx)(n.span,{className:"mord mathnormal",children:"x"}),(0,t.jsx)(n.span,{className:"msupsub",children:(0,t.jsx)(n.span,{className:"vlist-t",children:(0,t.jsx)(n.span,{className:"vlist-r",children:(0,t.jsx)(n.span,{className:"vlist",style:{height:"0.888em"},children:(0,t.jsxs)(n.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,t.jsx)(n.span,{className:"pstrut",style:{height:"2.7em"}}),(0,t.jsx)(n.span,{className:"sizing reset-size6 size3 mtight",children:(0,t.jsxs)(n.span,{className:"mord mtight",children:[(0,t.jsx)(n.span,{className:"mord mathnormal mtight",children:"n"}),(0,t.jsx)(n.span,{className:"mord mtight",children:"/2"})]})})]})})})})})]}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,t.jsx)(n.span,{className:"mbin",children:"\xd7"}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.888em"}}),(0,t.jsxs)(n.span,{className:"mord",children:[(0,t.jsx)(n.span,{className:"mord mathnormal",children:"x"}),(0,t.jsx)(n.span,{className:"msupsub",children:(0,t.jsx)(n.span,{className:"vlist-t",children:(0,t.jsx)(n.span,{className:"vlist-r",children:(0,t.jsx)(n.span,{className:"vlist",style:{height:"0.888em"},children:(0,t.jsxs)(n.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,t.jsx)(n.span,{className:"pstrut",style:{height:"2.7em"}}),(0,t.jsx)(n.span,{className:"sizing reset-size6 size3 mtight",children:(0,t.jsxs)(n.span,{className:"mord mtight",children:[(0,t.jsx)(n.span,{className:"mord mathnormal mtight",children:"n"}),(0,t.jsx)(n.span,{className:"mord mtight",children:"%2"})]})})]})})})})})]})]})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n","\n",(0,t.jsxs)(l.A,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,t.jsx)(i.A,{value:"java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"// Pow(x, n)\n// \u4e8c\u5206\u6cd5\uff0c$x^n = x^{n/2} * x^{n/2} * x^{n\\%2}$\n// \u65f6\u95f4\u590d\u6742\u5ea6O(logn)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public double myPow(double x, int n) {\n        if (n < 0) return 1.0 / power(x, -n);\n        else return power(x, n);\n    }\n    private static double power(double x, int n) {\n        if (n == 0) return 1;\n        double v = power(x, n / 2);\n        if (n % 2 == 0) return v * v;\n        else return v * v * x;\n    }\n}\n"})})}),(0,t.jsx)(i.A,{value:"cpp",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"// Pow(x, n)\n// \u4e8c\u5206\u6cd5\uff0c$x^n = x^{n/2} * x^{n/2} * x^{n\\%2}$\n// \u65f6\u95f4\u590d\u6742\u5ea6O(logn)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    double myPow(double x, int n) {\n        long long N = n; // to prevent overflow\n        if (N < 0) return power(1/x, -N);\n        else return power(x, N);\n    }\nprivate:\n    double power(double x, int n) {\n        if (n == 0) return 1;\n        double v = power(x, n / 2);\n        if (n % 2 == 0) return v * v;\n        else return v * v * x;\n    }\n};\n"})})}),(0,t.jsx)(i.A,{value:"python",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"# Pow(x, n)\n# \u4e8c\u5206\u6cd5\uff0c$x^n = x^{n/2} * x^{n/2} * x^{n\\%2}$\n# \u65f6\u95f4\u590d\u6742\u5ea6O(logn)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution:\n    def myPow(self, x: float, n: int) -> float:\n        if n < 0:\n            return 1.0 / self.power(x, -n)\n        else:\n            return self.power(x, n)\n\n    def power(self, x: float, n: int) -> float:\n        if n == 0:\n            return 1\n        v = self.power(x, n // 2)\n        if n % 2 == 0:\n            return v * v\n        else:\n            return v * v * x\n"})})})]}),"\n",(0,t.jsx)(n.h3,{id:"\u76f8\u5173\u9898\u76ee",children:"\u76f8\u5173\u9898\u76ee"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/en/divide-and-conquer/sqrt",children:"Sqrt(x)"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},19365:(e,n,s)=>{s.d(n,{A:()=>l});s(96540);var a=s(34164);const t={tabItem:"tabItem_Ymn6"};var r=s(74848);function l(e){let{children:n,hidden:s,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(t.tabItem,l),hidden:s,children:n})}},11470:(e,n,s)=>{s.d(n,{A:()=>w});var a=s(96540),t=s(34164),r=s(23104),l=s(56347),i=s(205),c=s(57485),o=s(31682),m=s(70679);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:n,children:s}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:s,attributes:a,default:t}}=e;return{value:n,label:s,attributes:a,default:t}}))}(s);return function(e){const n=(0,o.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function h(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:s}=e;const t=(0,l.W6)(),r=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,c.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(t.location.search);n.set(r,e),t.replace({...t.location,search:n.toString()})}),[r,t])]}function x(e){const{defaultValue:n,queryString:s=!1,groupId:t}=e,r=d(e),[l,c]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=s.find((e=>e.default))??s[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[o,u]=p({queryString:s,groupId:t}),[x,j]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,r]=(0,m.Dv)(s);return[t,(0,a.useCallback)((e=>{s&&r.set(e)}),[s,r])]}({groupId:t}),v=(()=>{const e=o??x;return h({value:e,tabValues:r})?e:null})();(0,i.A)((()=>{v&&c(v)}),[v]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),j(e)}),[u,j,r]),tabValues:r}}var j=s(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=s(74848);function g(e){let{className:n,block:s,selectedValue:a,selectValue:l,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,r.a_)(),m=e=>{const n=e.currentTarget,s=c.indexOf(n),t=i[s].value;t!==a&&(o(n),l(t))},u=e=>{let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const s=c.indexOf(e.currentTarget)+1;n=c[s]??c[0];break}case"ArrowLeft":{const s=c.indexOf(e.currentTarget)-1;n=c[s]??c[c.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":s},n),children:i.map((e=>{let{value:n,label:s,attributes:r}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>c.push(e),onKeyDown:u,onClick:m,...r,className:(0,t.A)("tabs__item",v.tabItem,r?.className,{"tabs__item--active":a===n}),children:s??n},n)}))})}function b(e){let{lazy:n,children:s,selectedValue:r}=e;const l=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function N(e){const n=x(e);return(0,f.jsxs)("div",{className:(0,t.A)("tabs-container",v.tabList),children:[(0,f.jsx)(g,{...n,...e}),(0,f.jsx)(b,{...n,...e})]})}function w(e){const n=(0,j.A)();return(0,f.jsx)(N,{...e,children:u(e.children)},String(n))}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>i});var a=s(96540);const t={},r=a.createContext(t);function l(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);