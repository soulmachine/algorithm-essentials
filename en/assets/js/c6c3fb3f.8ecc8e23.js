"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[2653],{37855:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>u,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"glacier/consecutive-numbers-sum","title":"Consecutive Numbers Sum","description":"\u63cf\u8ff0","source":"@site/docs/glacier/consecutive-numbers-sum.md","sourceDirName":"glacier","slug":"/glacier/consecutive-numbers-sum","permalink":"/en/glacier/consecutive-numbers-sum","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Consecutive Numbers Sum"},"sidebar":"docs","previous":{"title":"\u51b7\u5bab","permalink":"/en/glacier/"},"next":{"title":"\u6700\u5e38\u7528\u7684\u6570\u636e\u7ed3\u6784","permalink":"/en/data-structures"}}');var a=s(74848),r=s(28453),l=s(11470),i=s(19365);const c={title:"Consecutive Numbers Sum"},u=void 0,o={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}];function m(e){const n={a:"a",annotation:"annotation",blockquote:"blockquote",br:"br",code:"code",h3:"h3",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,a.jsxs)(n.p,{children:["Given an integer ",(0,a.jsx)(n.code,{children:"n"}),", return the number of ways you can write n as the sum of consecutive positive integers."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Input"}),": n = 5",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Output"}),": 2",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Explanation"}),": 5 = 2 + 3"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Input"}),": n = 9",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Output"}),": 3",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Explanation"}),": 9 = 4 + 5 = 2 + 3 + 4"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example 3:"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Input"}),": n = 15",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Output"}),": 4",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Explanation"}),": 15 = 8 + 7 = 4 + 5 + 6 = 1 + 2 + 3 + 4 + 5"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mn,{children:"1"}),(0,a.jsx)(n.mo,{children:"\u2264"}),(0,a.jsx)(n.mi,{children:"n"}),(0,a.jsx)(n.mo,{children:"\u2264"}),(0,a.jsx)(n.mn,{children:"1"}),(0,a.jsxs)(n.msup,{children:[(0,a.jsx)(n.mn,{children:"0"}),(0,a.jsx)(n.mn,{children:"9"})]})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"1 \\leq n \\leq 10^9"})]})})}),(0,a.jsxs)(n.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.7804em",verticalAlign:"-0.136em"}}),(0,a.jsx)(n.span,{className:"mord",children:"1"}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(n.span,{className:"mrel",children:"\u2264"}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.7719em",verticalAlign:"-0.136em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(n.span,{className:"mrel",children:"\u2264"}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.8141em"}}),(0,a.jsx)(n.span,{className:"mord",children:"1"}),(0,a.jsxs)(n.span,{className:"mord",children:[(0,a.jsx)(n.span,{className:"mord",children:"0"}),(0,a.jsx)(n.span,{className:"msupsub",children:(0,a.jsx)(n.span,{className:"vlist-t",children:(0,a.jsx)(n.span,{className:"vlist-r",children:(0,a.jsx)(n.span,{className:"vlist",style:{height:"0.8141em"},children:(0,a.jsxs)(n.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,a.jsx)(n.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(n.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(n.span,{className:"mord mtight",children:"9"})})]})})})})})]})]})]})]})}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://blog.csdn.net/qq_46105170/article/details/119196729",children:"https://blog.csdn.net/qq_46105170/article/details/119196729"})}),"\n",(0,a.jsx)(n.h3,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n","\n",(0,a.jsxs)(l.A,{defaultValue:"java",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,a.jsx)(i.A,{value:"python",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"# TODO\n"})})}),(0,a.jsx)(i.A,{value:"java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"// Consecutive Numbers Sum\n// Time complexity: O(sqrt(n))\n// Space complexity: O(1)\npublic class Solution {\n    public int consecutiveNumbersSum(int n) {\n        int result = 0;\n        for (int k = 1; k * k + k <= 2 * n; k++) {\n            if ((n - k * (k - 1) / 2) % k == 0) {\n                result++;\n            }\n        }\n        \n        return result;\n    }\n}\n"})})}),(0,a.jsx)(i.A,{value:"cpp",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"// TODO\n"})})})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},19365:(e,n,s)=>{s.d(n,{A:()=>l});s(96540);var t=s(34164);const a={tabItem:"tabItem_Ymn6"};var r=s(74848);function l(e){let{children:n,hidden:s,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,l),hidden:s,children:n})}},11470:(e,n,s)=>{s.d(n,{A:()=>y});var t=s(96540),a=s(34164),r=s(23104),l=s(56347),i=s(205),c=s(57485),u=s(31682),o=s(70679);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:s}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:s,attributes:t,default:a}}=e;return{value:n,label:s,attributes:t,default:a}}))}(s);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function h(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:s}=e;const a=(0,l.W6)(),r=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,c.aZ)(r),(0,t.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})}),[r,a])]}function x(e){const{defaultValue:n,queryString:s=!1,groupId:a}=e,r=m(e),[l,c]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:r}))),[u,d]=p({queryString:s,groupId:a}),[x,j]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,r]=(0,o.Dv)(s);return[a,(0,t.useCallback)((e=>{s&&r.set(e)}),[s,r])]}({groupId:a}),b=(()=>{const e=u??x;return h({value:e,tabValues:r})?e:null})();(0,i.A)((()=>{b&&c(b)}),[b]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),j(e)}),[d,j,r]),tabValues:r}}var j=s(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=s(74848);function v(e){let{className:n,block:s,selectedValue:t,selectValue:l,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.a_)(),o=e=>{const n=e.currentTarget,s=c.indexOf(n),a=i[s].value;a!==t&&(u(n),l(a))},d=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const s=c.indexOf(e.currentTarget)+1;n=c[s]??c[0];break}case"ArrowLeft":{const s=c.indexOf(e.currentTarget)-1;n=c[s]??c[c.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":s},n),children:i.map((e=>{let{value:n,label:s,attributes:r}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>c.push(e),onKeyDown:d,onClick:o,...r,className:(0,a.A)("tabs__item",b.tabItem,r?.className,{"tabs__item--active":t===n}),children:s??n},n)}))})}function f(e){let{lazy:n,children:s,selectedValue:r}=e;const l=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function N(e){const n=x(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,g.jsx)(v,{...n,...e}),(0,g.jsx)(f,{...n,...e})]})}function y(e){const n=(0,j.A)();return(0,g.jsx)(N,{...e,children:d(e.children)},String(n))}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>i});var t=s(96540);const a={},r=t.createContext(a);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);