"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[4832],{96060:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>o,contentTitle:()=>m,default:()=>p,frontMatter:()=>c,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"dp/best-time-to-buy-and-sell-stock-iii","title":"Best Time to Buy and Sell Stock III","description":"\u63cf\u8ff0","source":"@site/docs/dp/best-time-to-buy-and-sell-stock-iii.md","sourceDirName":"dp","slug":"/dp/best-time-to-buy-and-sell-stock-iii","permalink":"/dp/best-time-to-buy-and-sell-stock-iii","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Best Time to Buy and Sell Stock III"},"sidebar":"docs","previous":{"title":"Maximal Square","permalink":"/dp/maximal-square"},"next":{"title":"Best Time to Buy and Sell Stock IV","permalink":"/dp/best-time-to-buy-and-sell-stock-iv"}}');var l=a(74848),t=a(28453),i=a(11470),r=a(19365);const c={title:"Best Time to Buy and Sell Stock III"},m=void 0,o={},h=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}];function d(e){const s={a:"a",annotation:"annotation",code:"code",h3:"h3",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",ul:"ul",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,l.jsx)(s.p,{children:"Say you have an array for which the i-th element is the price of a given stock on day i."}),"\n",(0,l.jsx)(s.p,{children:"Design an algorithm to find the maximum profit. You may complete at most two transactions."}),"\n",(0,l.jsx)(s.p,{children:"Note: You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again)."}),"\n",(0,l.jsx)(s.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,l.jsxs)(s.p,{children:["\u8bbe\u72b6\u6001",(0,l.jsx)(s.code,{children:"f(i)"}),"\uff0c\u8868\u793a\u533a\u95f4",(0,l.jsxs)(s.span,{className:"katex",children:[(0,l.jsx)(s.span,{className:"katex-mathml",children:(0,l.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(s.semantics,{children:[(0,l.jsxs)(s.mrow,{children:[(0,l.jsx)(s.mo,{stretchy:"false",children:"["}),(0,l.jsx)(s.mn,{children:"0"}),(0,l.jsx)(s.mo,{separator:"true",children:","}),(0,l.jsx)(s.mi,{children:"i"}),(0,l.jsx)(s.mo,{stretchy:"false",children:"]"}),(0,l.jsx)(s.mo,{stretchy:"false",children:"("}),(0,l.jsx)(s.mn,{children:"0"}),(0,l.jsx)(s.mo,{children:"\u2264"}),(0,l.jsx)(s.mi,{children:"i"}),(0,l.jsx)(s.mo,{children:"\u2264"}),(0,l.jsx)(s.mi,{children:"n"}),(0,l.jsx)(s.mo,{children:"\u2212"}),(0,l.jsx)(s.mn,{children:"1"}),(0,l.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,l.jsx)(s.annotation,{encoding:"application/x-tex",children:"[0,i](0 \\leq i \\leq n-1)"})]})})}),(0,l.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(s.span,{className:"mopen",children:"["}),(0,l.jsx)(s.span,{className:"mord",children:"0"}),(0,l.jsx)(s.span,{className:"mpunct",children:","}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,l.jsx)(s.span,{className:"mclose",children:"]"}),(0,l.jsx)(s.span,{className:"mopen",children:"("}),(0,l.jsx)(s.span,{className:"mord",children:"0"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(s.span,{className:"mrel",children:"\u2264"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"0.7955em",verticalAlign:"-0.136em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(s.span,{className:"mrel",children:"\u2264"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(s.span,{className:"mbin",children:"\u2212"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(s.span,{className:"mord",children:"1"}),(0,l.jsx)(s.span,{className:"mclose",children:")"})]})]})]}),"\u7684\u6700\u5927\u5229\u6da6\uff0c\u72b6\u6001",(0,l.jsx)(s.code,{children:"g(i)"}),"\uff0c\u8868\u793a\u533a\u95f4",(0,l.jsxs)(s.span,{className:"katex",children:[(0,l.jsx)(s.span,{className:"katex-mathml",children:(0,l.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(s.semantics,{children:[(0,l.jsxs)(s.mrow,{children:[(0,l.jsx)(s.mo,{stretchy:"false",children:"["}),(0,l.jsx)(s.mi,{children:"i"}),(0,l.jsx)(s.mo,{separator:"true",children:","}),(0,l.jsx)(s.mi,{children:"n"}),(0,l.jsx)(s.mo,{children:"\u2212"}),(0,l.jsx)(s.mn,{children:"1"}),(0,l.jsx)(s.mo,{stretchy:"false",children:"]"}),(0,l.jsx)(s.mo,{stretchy:"false",children:"("}),(0,l.jsx)(s.mn,{children:"0"}),(0,l.jsx)(s.mo,{children:"\u2264"}),(0,l.jsx)(s.mi,{children:"i"}),(0,l.jsx)(s.mo,{children:"\u2264"}),(0,l.jsx)(s.mi,{children:"n"}),(0,l.jsx)(s.mo,{children:"\u2212"}),(0,l.jsx)(s.mn,{children:"1"}),(0,l.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,l.jsx)(s.annotation,{encoding:"application/x-tex",children:"[i, n-1](0 \\leq i \\leq n-1)"})]})})}),(0,l.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(s.span,{className:"mopen",children:"["}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,l.jsx)(s.span,{className:"mpunct",children:","}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(s.span,{className:"mbin",children:"\u2212"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(s.span,{className:"mord",children:"1"}),(0,l.jsx)(s.span,{className:"mclose",children:"]"}),(0,l.jsx)(s.span,{className:"mopen",children:"("}),(0,l.jsx)(s.span,{className:"mord",children:"0"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(s.span,{className:"mrel",children:"\u2264"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"0.7955em",verticalAlign:"-0.136em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(s.span,{className:"mrel",children:"\u2264"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(s.span,{className:"mbin",children:"\u2212"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(s.span,{className:"mord",children:"1"}),(0,l.jsx)(s.span,{className:"mclose",children:")"})]})]})]}),"\u7684\u6700\u5927\u5229\u6da6\uff0c\u5219\u6700\u7ec8\u7b54\u6848\u4e3a",(0,l.jsxs)(s.span,{className:"katex",children:[(0,l.jsx)(s.span,{className:"katex-mathml",children:(0,l.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(s.semantics,{children:[(0,l.jsxs)(s.mrow,{children:[(0,l.jsx)(s.mi,{children:"max"}),(0,l.jsx)(s.mo,{children:"\u2061"}),(0,l.jsxs)(s.mrow,{children:[(0,l.jsx)(s.mo,{fence:"true",children:"{"}),(0,l.jsx)(s.mi,{children:"f"}),(0,l.jsx)(s.mo,{stretchy:"false",children:"("}),(0,l.jsx)(s.mi,{children:"i"}),(0,l.jsx)(s.mo,{stretchy:"false",children:")"}),(0,l.jsx)(s.mo,{children:"+"}),(0,l.jsx)(s.mi,{children:"g"}),(0,l.jsx)(s.mo,{stretchy:"false",children:"("}),(0,l.jsx)(s.mi,{children:"i"}),(0,l.jsx)(s.mo,{stretchy:"false",children:")"}),(0,l.jsx)(s.mo,{fence:"true",children:"}"})]}),(0,l.jsx)(s.mo,{separator:"true",children:","}),(0,l.jsx)(s.mn,{children:"0"}),(0,l.jsx)(s.mo,{children:"\u2264"}),(0,l.jsx)(s.mi,{children:"i"}),(0,l.jsx)(s.mo,{children:"\u2264"}),(0,l.jsx)(s.mi,{children:"n"}),(0,l.jsx)(s.mo,{children:"\u2212"}),(0,l.jsx)(s.mn,{children:"1"})]}),(0,l.jsx)(s.annotation,{encoding:"application/x-tex",children:"\\max\\left\\{f(i)+g(i)\\right\\},0 \\leq i \\leq n-1"})]})})}),(0,l.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(s.span,{className:"mop",children:"max"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsxs)(s.span,{className:"minner",children:[(0,l.jsx)(s.span,{className:"mopen delimcenter",style:{top:"0em"},children:"{"}),(0,l.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,l.jsx)(s.span,{className:"mopen",children:"("}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,l.jsx)(s.span,{className:"mclose",children:")"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(s.span,{className:"mbin",children:"+"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,l.jsx)(s.span,{className:"mopen",children:"("}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,l.jsx)(s.span,{className:"mclose",children:")"}),(0,l.jsx)(s.span,{className:"mclose delimcenter",style:{top:"0em"},children:"}"})]}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(s.span,{className:"mpunct",children:","}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(s.span,{className:"mord",children:"0"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(s.span,{className:"mrel",children:"\u2264"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"0.7955em",verticalAlign:"-0.136em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(s.span,{className:"mrel",children:"\u2264"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(s.span,{className:"mbin",children:"\u2212"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,l.jsx)(s.span,{className:"mord",children:"1"})]})]})]}),"\u3002"]}),"\n",(0,l.jsx)(s.p,{children:"\u5141\u8bb8\u5728\u4e00\u5929\u5185\u4e70\u8fdb\u53c8\u5356\u51fa\uff0c\u76f8\u5f53\u4e8e\u4e0d\u4ea4\u6613\uff0c\u56e0\u4e3a\u9898\u76ee\u7684\u89c4\u5b9a\u662f\u6700\u591a\u4e24\u6b21\uff0c\u800c\u4e0d\u662f\u4e00\u5b9a\u8981\u4e24\u6b21\u3002"}),"\n",(0,l.jsxs)(s.p,{children:["\u5c06\u539f\u6570\u7ec4\u53d8\u6210\u5dee\u5206\u6570\u7ec4\uff0c\u672c\u9898\u4e5f\u53ef\u4ee5\u770b\u505a\u662f\u6700\u5927",(0,l.jsx)(s.code,{children:"m"}),"\u5b50\u6bb5\u548c\uff0c",(0,l.jsx)(s.code,{children:"m=2"}),"\uff0c\u53c2\u8003\u4ee3\u7801\uff1a",(0,l.jsx)(s.a,{href:"https://gist.github.com/soulmachine/5906637",children:"https://gist.github.com/soulmachine/5906637"})]}),"\n",(0,l.jsx)(s.h3,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n","\n",(0,l.jsxs)(i.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,l.jsx)(r.A,{value:"java",children:(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-java",children:"// Best Time to Buy and Sell Stock III\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\npublic class Solution {\n    public int maxProfit(int[] prices) {\n        if (prices.length < 2) return 0;\n\n        final int n = prices.length;\n        int[] f = new int[n];\n        int[] g = new int[n];\n\n        for (int i = 1, valley = prices[0]; i < n; ++i) {\n            valley = Math.min(valley, prices[i]);\n            f[i] = Math.max(f[i - 1], prices[i] - valley);\n        }\n\n        for (int i = n - 2, peak = prices[n - 1]; i >= 0; --i) {\n            peak = Math.max(peak, prices[i]);\n            g[i] = Math.max(g[i], peak - prices[i]);\n        }\n\n        int max_profit = 0;\n        for (int i = 0; i < n; ++i)\n            max_profit = Math.max(max_profit, f[i] + g[i]);\n\n        return max_profit;\n    }\n}\n"})})}),(0,l.jsx)(r.A,{value:"cpp",children:(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-cpp",children:"// Best Time to Buy and Sell Stock III\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\npublic:\n    int maxProfit(vector<int>& prices) {\n        if (prices.size() < 2) return 0;\n\n        const int n = prices.size();\n        vector<int> f(n, 0);\n        vector<int> g(n, 0);\n\n        for (int i = 1, valley = prices[0]; i < n; ++i) {\n            valley = min(valley, prices[i]);\n            f[i] = max(f[i - 1], prices[i] - valley);\n        }\n\n        for (int i = n - 2, peak = prices[n - 1]; i >= 0; --i) {\n            peak = max(peak, prices[i]);\n            g[i] = max(g[i], peak - prices[i]);\n        }\n\n        int max_profit = 0;\n        for (int i = 0; i < n; ++i)\n            max_profit = max(max_profit, f[i] + g[i]);\n\n        return max_profit;\n    }\n};\n"})})})]}),"\n",(0,l.jsx)(s.h3,{id:"\u76f8\u5173\u9898\u76ee",children:"\u76f8\u5173\u9898\u76ee"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.a,{href:"/greedy/best-time-to-buy-and-sell-stock",children:"Best Time to Buy and Sell Stock"})}),"\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.a,{href:"/greedy/best-time-to-buy-and-sell-stock-ii",children:"Best Time to Buy and Sell Stock II"})}),"\n"]})]})}function p(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},19365:(e,s,a)=>{a.d(s,{A:()=>i});a(96540);var n=a(34164);const l={tabItem:"tabItem_Ymn6"};var t=a(74848);function i(e){let{children:s,hidden:a,className:i}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,n.A)(l.tabItem,i),hidden:a,children:s})}},11470:(e,s,a)=>{a.d(s,{A:()=>v});var n=a(96540),l=a(34164),t=a(23104),i=a(56347),r=a(205),c=a(57485),m=a(31682),o=a(70679);function h(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:s,children:a}=e;return(0,n.useMemo)((()=>{const e=s??function(e){return h(e).map((e=>{let{props:{value:s,label:a,attributes:n,default:l}}=e;return{value:s,label:a,attributes:n,default:l}}))}(a);return function(e){const s=(0,m.XI)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,a])}function p(e){let{value:s,tabValues:a}=e;return a.some((e=>e.value===s))}function u(e){let{queryString:s=!1,groupId:a}=e;const l=(0,i.W6)(),t=function(e){let{queryString:s=!1,groupId:a}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:s,groupId:a});return[(0,c.aZ)(t),(0,n.useCallback)((e=>{if(!t)return;const s=new URLSearchParams(l.location.search);s.set(t,e),l.replace({...l.location,search:s.toString()})}),[t,l])]}function x(e){const{defaultValue:s,queryString:a=!1,groupId:l}=e,t=d(e),[i,c]=(0,n.useState)((()=>function(e){let{defaultValue:s,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!p({value:s,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:s,tabValues:t}))),[m,h]=u({queryString:a,groupId:l}),[x,j]=function(e){let{groupId:s}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(s),[l,t]=(0,o.Dv)(a);return[l,(0,n.useCallback)((e=>{a&&t.set(e)}),[a,t])]}({groupId:l}),g=(()=>{const e=m??x;return p({value:e,tabValues:t})?e:null})();(0,r.A)((()=>{g&&c(g)}),[g]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),j(e)}),[h,j,t]),tabValues:t}}var j=a(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var N=a(74848);function f(e){let{className:s,block:a,selectedValue:n,selectValue:i,tabValues:r}=e;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,t.a_)(),o=e=>{const s=e.currentTarget,a=c.indexOf(s),l=r[a].value;l!==n&&(m(s),i(l))},h=e=>{let s=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;s=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;s=c[a]??c[c.length-1];break}}s?.focus()};return(0,N.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":a},s),children:r.map((e=>{let{value:s,label:a,attributes:t}=e;return(0,N.jsx)("li",{role:"tab",tabIndex:n===s?0:-1,"aria-selected":n===s,ref:e=>c.push(e),onKeyDown:h,onClick:o,...t,className:(0,l.A)("tabs__item",g.tabItem,t?.className,{"tabs__item--active":n===s}),children:a??s},s)}))})}function y(e){let{lazy:s,children:a,selectedValue:t}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(s){const e=i.find((e=>e.props.value===t));return e?(0,n.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,N.jsx)("div",{className:"margin-top--md",children:i.map(((e,s)=>(0,n.cloneElement)(e,{key:s,hidden:e.props.value!==t})))})}function b(e){const s=x(e);return(0,N.jsxs)("div",{className:(0,l.A)("tabs-container",g.tabList),children:[(0,N.jsx)(f,{...s,...e}),(0,N.jsx)(y,{...s,...e})]})}function v(e){const s=(0,j.A)();return(0,N.jsx)(b,{...e,children:h(e.children)},String(s))}},28453:(e,s,a)=>{a.d(s,{R:()=>i,x:()=>r});var n=a(96540);const l={},t=n.createContext(l);function i(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);