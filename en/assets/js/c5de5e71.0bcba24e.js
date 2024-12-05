"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[6964],{95677:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>o,contentTitle:()=>m,default:()=>u,frontMatter:()=>c,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"dp/longest-arithmetic-subsequence","title":"Longest Arithmetic Subsequence","description":"\u63cf\u8ff0","source":"@site/docs/dp/longest-arithmetic-subsequence.md","sourceDirName":"dp","slug":"/dp/longest-arithmetic-subsequence","permalink":"/en/dp/longest-arithmetic-subsequence","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Longest Arithmetic Subsequence"},"sidebar":"docs","previous":{"title":"Longest String Chain","permalink":"/en/dp/longest-string-chain"},"next":{"title":"Perfect Squares","permalink":"/en/dp/perfect-squares"}}');var l=a(74848),t=a(28453),r=a(11470),i=a(19365);const c={title:"Longest Arithmetic Subsequence"},m=void 0,o={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}];function h(e){const s={annotation:"annotation",code:"code",h3:"h3",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",mstyle:"mstyle",mtable:"mtable",mtd:"mtd",mtr:"mtr",p:"p",pre:"pre",semantics:"semantics",span:"span",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,l.jsx)(s.p,{children:"TODO"}),"\n",(0,l.jsx)(s.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,l.jsxs)(s.p,{children:["\u4ee4 ",(0,l.jsx)(s.code,{children:"f(i, d)"}),"\u8868\u793a\u4ee5",(0,l.jsx)(s.code,{children:"nums[i]"}),"\u7ed3\u5c3e\u7684\u5dee\u503c\u4e3a",(0,l.jsx)(s.code,{children:"d"}),"\u7684\u6700\u957f\u7b49\u5dee\u6570\u5217\u7684\u957f\u5ea6\uff0c\u5219\u72b6\u6001\u8f6c\u79fb\u65b9\u7a0b\u4e3a"]}),"\n",(0,l.jsx)(s.span,{className:"katex-display",children:(0,l.jsxs)(s.span,{className:"katex",children:[(0,l.jsx)(s.span,{className:"katex-mathml",children:(0,l.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,l.jsxs)(s.semantics,{children:[(0,l.jsxs)(s.mrow,{children:[(0,l.jsx)(s.mi,{children:"f"}),(0,l.jsx)(s.mo,{stretchy:"false",children:"("}),(0,l.jsx)(s.mi,{children:"i"}),(0,l.jsx)(s.mo,{separator:"true",children:","}),(0,l.jsx)(s.mi,{children:"d"}),(0,l.jsx)(s.mo,{stretchy:"false",children:")"}),(0,l.jsx)(s.mo,{children:"="}),(0,l.jsxs)(s.mrow,{children:[(0,l.jsx)(s.mo,{fence:"true",children:"{"}),(0,l.jsxs)(s.mtable,{rowspacing:"0.36em",columnalign:"left left",columnspacing:"1em",children:[(0,l.jsxs)(s.mtr,{children:[(0,l.jsx)(s.mtd,{children:(0,l.jsx)(s.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,l.jsx)(s.mn,{children:"1"})})}),(0,l.jsx)(s.mtd,{children:(0,l.jsx)(s.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,l.jsxs)(s.mrow,{children:[(0,l.jsx)(s.mi,{children:"d"}),(0,l.jsx)(s.mo,{children:"="}),(0,l.jsx)(s.mn,{children:"0"})]})})})]}),(0,l.jsxs)(s.mtr,{children:[(0,l.jsx)(s.mtd,{children:(0,l.jsx)(s.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,l.jsxs)(s.mrow,{children:[(0,l.jsx)(s.mi,{children:"max"}),(0,l.jsx)(s.mo,{children:"\u2061"}),(0,l.jsxs)(s.mrow,{children:[(0,l.jsx)(s.mo,{fence:"true",children:"{"}),(0,l.jsx)(s.mi,{children:"f"}),(0,l.jsx)(s.mo,{stretchy:"false",children:"("}),(0,l.jsx)(s.mi,{children:"j"}),(0,l.jsx)(s.mo,{separator:"true",children:","}),(0,l.jsx)(s.mi,{children:"d"}),(0,l.jsx)(s.mo,{stretchy:"false",children:")"}),(0,l.jsx)(s.mo,{children:"+"}),(0,l.jsx)(s.mn,{children:"1"}),(0,l.jsx)(s.mo,{fence:"true",children:"}"})]})]})})}),(0,l.jsx)(s.mtd,{children:(0,l.jsx)(s.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,l.jsxs)(s.mrow,{children:[(0,l.jsx)(s.mn,{children:"0"}),(0,l.jsx)(s.mo,{children:"<"}),(0,l.jsx)(s.mo,{children:"="}),(0,l.jsx)(s.mi,{children:"j"}),(0,l.jsx)(s.mo,{children:"<"}),(0,l.jsx)(s.mi,{children:"i"})]})})})]})]})]})]}),(0,l.jsx)(s.annotation,{encoding:"application/x-tex",children:"f(i,d)=\\begin{cases}\n1 & d=0 \\\\\n\\max\\left\\{f(j, d)+1\\right\\} & 0 <= j < i\n\\end{cases}"})]})})}),(0,l.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,l.jsx)(s.span,{className:"mopen",children:"("}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,l.jsx)(s.span,{className:"mpunct",children:","}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"d"}),(0,l.jsx)(s.span,{className:"mclose",children:")"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(s.span,{className:"mrel",children:"="}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"3em",verticalAlign:"-1.25em"}}),(0,l.jsxs)(s.span,{className:"minner",children:[(0,l.jsx)(s.span,{className:"mopen delimcenter",style:{top:"0em"},children:(0,l.jsx)(s.span,{className:"delimsizing size4",children:"{"})}),(0,l.jsx)(s.span,{className:"mord",children:(0,l.jsxs)(s.span,{className:"mtable",children:[(0,l.jsx)(s.span,{className:"col-align-l",children:(0,l.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(s.span,{className:"vlist-r",children:[(0,l.jsxs)(s.span,{className:"vlist",style:{height:"1.69em"},children:[(0,l.jsxs)(s.span,{style:{top:"-3.69em"},children:[(0,l.jsx)(s.span,{className:"pstrut",style:{height:"3.008em"}}),(0,l.jsx)(s.span,{className:"mord",children:(0,l.jsx)(s.span,{className:"mord",children:"1"})})]}),(0,l.jsxs)(s.span,{style:{top:"-2.25em"},children:[(0,l.jsx)(s.span,{className:"pstrut",style:{height:"3.008em"}}),(0,l.jsxs)(s.span,{className:"mord",children:[(0,l.jsx)(s.span,{className:"mop",children:"max"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsxs)(s.span,{className:"minner",children:[(0,l.jsx)(s.span,{className:"mopen delimcenter",style:{top:"0em"},children:"{"}),(0,l.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,l.jsx)(s.span,{className:"mopen",children:"("}),(0,l.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,l.jsx)(s.span,{className:"mpunct",children:","}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"d"}),(0,l.jsx)(s.span,{className:"mclose",children:")"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(s.span,{className:"mbin",children:"+"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(s.span,{className:"mord",children:"1"}),(0,l.jsx)(s.span,{className:"mclose delimcenter",style:{top:"0em"},children:"}"})]})]})]})]}),(0,l.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(s.span,{className:"vlist-r",children:(0,l.jsx)(s.span,{className:"vlist",style:{height:"1.19em"},children:(0,l.jsx)(s.span,{})})})]})}),(0,l.jsx)(s.span,{className:"arraycolsep",style:{width:"1em"}}),(0,l.jsx)(s.span,{className:"col-align-l",children:(0,l.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(s.span,{className:"vlist-r",children:[(0,l.jsxs)(s.span,{className:"vlist",style:{height:"1.69em"},children:[(0,l.jsxs)(s.span,{style:{top:"-3.69em"},children:[(0,l.jsx)(s.span,{className:"pstrut",style:{height:"3.008em"}}),(0,l.jsxs)(s.span,{className:"mord",children:[(0,l.jsx)(s.span,{className:"mord mathnormal",children:"d"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(s.span,{className:"mrel",children:"="}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(s.span,{className:"mord",children:"0"})]})]}),(0,l.jsxs)(s.span,{style:{top:"-2.25em"},children:[(0,l.jsx)(s.span,{className:"pstrut",style:{height:"3.008em"}}),(0,l.jsxs)(s.span,{className:"mord",children:[(0,l.jsx)(s.span,{className:"mord",children:"0"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(s.span,{className:"mrel",children:"<="}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(s.span,{className:"mrel",children:"<"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"i"})]})]})]}),(0,l.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(s.span,{className:"vlist-r",children:(0,l.jsx)(s.span,{className:"vlist",style:{height:"1.19em"},children:(0,l.jsx)(s.span,{})})})]})})]})}),(0,l.jsx)(s.span,{className:"mclose nulldelimiter"})]})]})]})]})}),"\n",(0,l.jsxs)(s.p,{children:["\u5728\u5b9e\u73b0\u4ee3\u7801\u65f6\u8981\u6ce8\u610f\uff0c\u7531\u4e8e\u7b49\u5dee\u6570\u5217\u7684\u5dee\u503c\u6709\u53ef\u80fd\u662f\u8d1f\u6570\uff0c\u800c\u6570\u7ec4\u7684\u4e0b\u6807\u4e0d\u80fd\u662f\u8d1f\u6570\uff0c\u6240\u4ee5\u9700\u8981\u5904\u7406\u4e00\u4e0b\uff0c\u9898\u76ee\u9650\u5b9a\u4e86\u6570\u5b57\u8303\u56f4\u4e3a0\u5230 500 \u4e4b\u95f4\uff0c\u6240\u4ee5\u5dee\u503c\u7684\u8303\u56f4\u5c31\u662f -500 \u5230 500\uff0c\u53ef\u4ee5\u7ed9\u5dee\u503c\u52a0\u4e0a\u4e2a500\uff0c\u8fd9\u6837\u5dee\u503c\u8303\u56f4\u5c31\u662f 0 \u5230 1000 \u4e86\uff0c\u4e8c\u7ef4 dp \u6570\u7ec4\u7684\u5927\u5c0f\u4e3a ",(0,l.jsx)(s.code,{children:"n * 1001"}),"\u3002"]}),"\n",(0,l.jsx)(s.h3,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n","\n",(0,l.jsxs)(r.A,{defaultValue:"cpp",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,l.jsx)(i.A,{value:"java",children:(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-java",children:"// TODO\n"})})}),(0,l.jsx)(i.A,{value:"cpp",children:(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-cpp",children:"// Longest Arithmetic Subsequence\n// Time complexity: O(N^2)\n// Space complexity: O(1001*N)\nclass Solution {\npublic:\n    int longestArithSeqLength(vector<int>& nums) {\n        const int MAX_DIFF = 500;\n        const int N = nums.size();\n        int result = 0;\n        vector<vector<int>> dp(N, vector<int>(2 * MAX_DIFF +1, 1));\n        for (int i = 0; i < N; ++i) {\n            for (int j = 0; j < i; ++j) {\n                int diff = nums[i] - nums[j] + MAX_DIFF;\n                dp[i][diff] = dp[j][diff] + 1;\n                result = max(result, dp[i][diff]);\n            }\n        }\n        return result;\n    }\n};\n"})})})]})]})}function u(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},19365:(e,s,a)=>{a.d(s,{A:()=>r});a(96540);var n=a(34164);const l={tabItem:"tabItem_Ymn6"};var t=a(74848);function r(e){let{children:s,hidden:a,className:r}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,n.A)(l.tabItem,r),hidden:a,children:s})}},11470:(e,s,a)=>{a.d(s,{A:()=>y});var n=a(96540),l=a(34164),t=a(23104),r=a(56347),i=a(205),c=a(57485),m=a(31682),o=a(70679);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:s,children:a}=e;return(0,n.useMemo)((()=>{const e=s??function(e){return d(e).map((e=>{let{props:{value:s,label:a,attributes:n,default:l}}=e;return{value:s,label:a,attributes:n,default:l}}))}(a);return function(e){const s=(0,m.XI)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,a])}function u(e){let{value:s,tabValues:a}=e;return a.some((e=>e.value===s))}function p(e){let{queryString:s=!1,groupId:a}=e;const l=(0,r.W6)(),t=function(e){let{queryString:s=!1,groupId:a}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:s,groupId:a});return[(0,c.aZ)(t),(0,n.useCallback)((e=>{if(!t)return;const s=new URLSearchParams(l.location.search);s.set(t,e),l.replace({...l.location,search:s.toString()})}),[t,l])]}function x(e){const{defaultValue:s,queryString:a=!1,groupId:l}=e,t=h(e),[r,c]=(0,n.useState)((()=>function(e){let{defaultValue:s,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!u({value:s,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:s,tabValues:t}))),[m,d]=p({queryString:a,groupId:l}),[x,j]=function(e){let{groupId:s}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(s),[l,t]=(0,o.Dv)(a);return[l,(0,n.useCallback)((e=>{a&&t.set(e)}),[a,t])]}({groupId:l}),f=(()=>{const e=m??x;return u({value:e,tabValues:t})?e:null})();(0,i.A)((()=>{f&&c(f)}),[f]);return{selectedValue:r,selectValue:(0,n.useCallback)((e=>{if(!u({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),j(e)}),[d,j,t]),tabValues:t}}var j=a(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=a(74848);function N(e){let{className:s,block:a,selectedValue:n,selectValue:r,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,t.a_)(),o=e=>{const s=e.currentTarget,a=c.indexOf(s),l=i[a].value;l!==n&&(m(s),r(l))},d=e=>{let s=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;s=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;s=c[a]??c[c.length-1];break}}s?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":a},s),children:i.map((e=>{let{value:s,label:a,attributes:t}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===s?0:-1,"aria-selected":n===s,ref:e=>c.push(e),onKeyDown:d,onClick:o,...t,className:(0,l.A)("tabs__item",f.tabItem,t?.className,{"tabs__item--active":n===s}),children:a??s},s)}))})}function v(e){let{lazy:s,children:a,selectedValue:t}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(s){const e=r.find((e=>e.props.value===t));return e?(0,n.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:r.map(((e,s)=>(0,n.cloneElement)(e,{key:s,hidden:e.props.value!==t})))})}function b(e){const s=x(e);return(0,g.jsxs)("div",{className:(0,l.A)("tabs-container",f.tabList),children:[(0,g.jsx)(N,{...s,...e}),(0,g.jsx)(v,{...s,...e})]})}function y(e){const s=(0,j.A)();return(0,g.jsx)(b,{...e,children:d(e.children)},String(s))}},28453:(e,s,a)=>{a.d(s,{R:()=>r,x:()=>i});var n=a(96540);const l={},t=n.createContext(l);function r(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);