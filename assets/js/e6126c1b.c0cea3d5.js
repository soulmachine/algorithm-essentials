"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[8947],{52419:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>h,contentTitle:()=>m,default:()=>x,frontMatter:()=>t,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"dp/knapsack-problem/coin-change","title":"Coin Change","description":"\u95ee\u9898\u63cf\u8ff0","source":"@site/docs/dp/knapsack-problem/coin-change.md","sourceDirName":"dp/knapsack-problem","slug":"/dp/knapsack-problem/coin-change","permalink":"/dp/knapsack-problem/coin-change","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Coin Change"},"sidebar":"docs","previous":{"title":"\u5b8c\u5168\u80cc\u5305\u95ee\u9898","permalink":"/dp/knapsack-problem/unbounded-knapsack"},"next":{"title":"Coin Change II","permalink":"/dp/knapsack-problem/coin-change-ii"}}');var l=n(74848),r=n(28453),i=n(11470),c=n(19365);const t={title:"Coin Change"},m=void 0,h={},d=[{value:"\u95ee\u9898\u63cf\u8ff0",id:"\u95ee\u9898\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}];function o(s){const e={annotation:"annotation",blockquote:"blockquote",br:"br",code:"code",h3:"h3",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",mstyle:"mstyle",msup:"msup",mtable:"mtable",mtd:"mtd",mtr:"mtr",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,r.R)(),...s.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h3,{id:"\u95ee\u9898\u63cf\u8ff0",children:"\u95ee\u9898\u63cf\u8ff0"}),"\n",(0,l.jsxs)(e.p,{children:["Given an integer array ",(0,l.jsx)(e.code,{children:"coins"})," representing coins of different denominations and an integer ",(0,l.jsx)(e.code,{children:"amount"})," representing a total amount of money."]}),"\n",(0,l.jsxs)(e.p,{children:["Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return ",(0,l.jsx)(e.code,{children:"-1"}),"."]}),"\n",(0,l.jsx)(e.p,{children:"You may assume that you have an infinite number of each kind of coin."}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"Example 1"}),":"]}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"Input"}),": coins = [1,2,5], amount = 11",(0,l.jsx)(e.br,{}),"\n",(0,l.jsx)(e.strong,{children:"Output"}),": 3",(0,l.jsx)(e.br,{}),"\n",(0,l.jsx)(e.strong,{children:"Explanation"}),": 11 = 5 + 5 + 1"]}),"\n"]}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"Example 2"}),":"]}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"Input"}),": coins = [2], amount = 3",(0,l.jsx)(e.br,{}),"\n",(0,l.jsx)(e.strong,{children:"Output"}),": -1"]}),"\n"]}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"Example 3"}),":"]}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"Input"}),": coins = [1], amount = 0",(0,l.jsx)(e.br,{}),"\n",(0,l.jsx)(e.strong,{children:"Output"}),": 0"]}),"\n"]}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"Constraints"}),":"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mn,{children:"1"}),(0,l.jsx)(e.mo,{children:"\u2264"}),(0,l.jsx)(e.mi,{children:"c"}),(0,l.jsx)(e.mi,{children:"o"}),(0,l.jsx)(e.mi,{children:"i"}),(0,l.jsx)(e.mi,{children:"n"}),(0,l.jsx)(e.mi,{children:"s"}),(0,l.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,l.jsx)(e.mi,{children:"l"}),(0,l.jsx)(e.mi,{children:"e"}),(0,l.jsx)(e.mi,{children:"n"}),(0,l.jsx)(e.mi,{children:"g"}),(0,l.jsx)(e.mi,{children:"t"}),(0,l.jsx)(e.mi,{children:"h"}),(0,l.jsx)(e.mo,{children:"\u2264"}),(0,l.jsx)(e.mn,{children:"12"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"1 \\leq coins.length \\leq 12"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.7804em",verticalAlign:"-0.136em"}}),(0,l.jsx)(e.span,{className:"mord",children:"1"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"\u2264"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"co"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"in"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,l.jsx)(e.span,{className:"mord",children:"."}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"h"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"\u2264"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,l.jsx)(e.span,{className:"mord",children:"12"})]})]})]})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mn,{children:"1"}),(0,l.jsx)(e.mo,{children:"\u2264"}),(0,l.jsx)(e.mi,{children:"c"}),(0,l.jsx)(e.mi,{children:"o"}),(0,l.jsx)(e.mi,{children:"i"}),(0,l.jsx)(e.mi,{children:"n"}),(0,l.jsx)(e.mi,{children:"s"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"["}),(0,l.jsx)(e.mi,{children:"i"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,l.jsx)(e.mo,{children:"\u2264"}),(0,l.jsxs)(e.msup,{children:[(0,l.jsx)(e.mn,{children:"2"}),(0,l.jsx)(e.mn,{children:"31"})]}),(0,l.jsx)(e.mo,{children:"\u2212"}),(0,l.jsx)(e.mn,{children:"1"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"1 \\leq coins[i] \\leq 2^{31} - 1"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.7804em",verticalAlign:"-0.136em"}}),(0,l.jsx)(e.span,{className:"mord",children:"1"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"\u2264"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"co"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"in"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,l.jsx)(e.span,{className:"mopen",children:"["}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,l.jsx)(e.span,{className:"mclose",children:"]"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"\u2264"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8974em",verticalAlign:"-0.0833em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord",children:"2"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"31"})})})]})})})})})]}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,l.jsx)(e.span,{className:"mord",children:"1"})]})]})]})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mn,{children:"0"}),(0,l.jsx)(e.mo,{children:"\u2264"}),(0,l.jsx)(e.mi,{children:"a"}),(0,l.jsx)(e.mi,{children:"m"}),(0,l.jsx)(e.mi,{children:"o"}),(0,l.jsx)(e.mi,{children:"u"}),(0,l.jsx)(e.mi,{children:"n"}),(0,l.jsx)(e.mi,{children:"t"}),(0,l.jsx)(e.mo,{children:"\u2264"}),(0,l.jsx)(e.mn,{children:"1"}),(0,l.jsxs)(e.msup,{children:[(0,l.jsx)(e.mn,{children:"0"}),(0,l.jsx)(e.mn,{children:"4"})]})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"0 \\leq amount \\leq 10^4"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.7804em",verticalAlign:"-0.136em"}}),(0,l.jsx)(e.span,{className:"mord",children:"0"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"\u2264"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.7719em",verticalAlign:"-0.136em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"am"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"o"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"u"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"\u2264"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8141em"}}),(0,l.jsx)(e.span,{className:"mord",children:"1"}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord",children:"0"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"4"})})]})})})})})]})]})]})]})}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,l.jsx)(e.p,{children:"\u5148\u5224\u65ad\u672c\u9898\u662f\u5426\u6ee1\u8db3\u52a8\u89c4\u7684\u4e24\u4e2a\u6761\u4ef6\uff0c\u5047\u8bbe\u786c\u5e01\u9762\u503c\u4e3a 1,2,5\uff0c\uff1a"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5982\u679c\u77e5\u9053\u4e86\u51d1\u51fa\u91d1\u989d10\u6240\u9700\u8981\u7684\u7ec4\u5408\u6570\uff0c\u90a3\u4e48\uff0c\u51d1\u51fa\u91d1\u989d11, 12, 15\u6240\u9700\u8981\u7684\u6700\u5c11\u786c\u5e01\u6570\u90fd\u53ea\u9700\u8981\u5728\u91d1\u989d10\u7684\u7b54\u6848\u4e0a\u52a01\uff0c\u56e0\u6b64\u672c\u9898\u5177\u6709\u6700\u4f18\u5b50\u7ed3\u6784\u7684\u6027\u8d28\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u91d1\u989d10\u7684\u548c\u91d1\u989d11\u90fd\u53ef\u80fd\u7528\u5230\u91d1\u989d9\u8fd9\u4e2a\u5b50\u95ee\u9898\uff0c\u56e0\u6b64\u672c\u9898\u5177\u6709\u91cd\u53e0\u5b50\u95ee\u9898\u7684\u6027\u8d28\u3002"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u53ef\u89c1\u672c\u9898\u6ee1\u8db3\u52a8\u6001\u89c4\u5212\u7684\u4e24\u4e2a\u6761\u4ef6\uff0c\u56e0\u6b64\u53ef\u4ee5\u4f7f\u7528\u52a8\u6001\u89c4\u5212\u6765\u89e3\u51b3\u672c\u9898\u3002"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\u7531\u4e8e\u6bcf\u79cd\u786c\u5e01\u7684\u6570\u91cf\u662f\u65e0\u9650\u7684\uff0c\u5f53\u53d6\u4e86\u67d0\u79cd\u786c\u5e01\u540e\uff0c\u8be5\u786c\u5e01\u7684\u6570\u91cf\u8fd8\u662f\u65e0\u9650\u4e2a\uff0c\u6ca1\u6709\u53d8\u5316\uff0c\u53d8\u5316\u7684\u4ec5\u4ec5\u662f\u76ee\u6807\u91d1\u989d\u51cf\u53bb\u8be5\u786c\u5e01\u7684\u9762\u503c\uff0c\u56e0\u6b64\u672c\u9898\u7684\u53d8\u91cf\u53ea\u6709\u4e00\u4e2a\uff0c\u5c31\u662f\u76ee\u6807\u91d1\u989d ",(0,l.jsx)(e.code,{children:"amount"}),"\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:["\u4ee4\u51fd\u6570",(0,l.jsx)(e.code,{children:"f(j)"}),"\u8868\u793a\u51d1\u51fa\u91d1\u989d ",(0,l.jsx)(e.code,{children:"j"})," \u6240\u9700\u8981\u7684\u6700\u5c11\u786c\u5e01\u6570\uff0c\u90a3\u4e48\u53ef\u77e5\u539f\u5b50\u60c5\u51b5\u4e3a ",(0,l.jsx)(e.code,{children:"f(0)=0"}),"\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:["\u6bcf\u6b21\u51b3\u7b56\u65f6\uff0c\u53ef\u4ee5\u4ece\u6240\u6709\u786c\u5e01\u4e2d\u9009\u62e9\u4e00\u679a\uff0c\u5373\u53ef\u9009\u62e9\u7684\u52a8\u4f5c\u6709",(0,l.jsx)(e.code,{children:"N"}),"\u79cd\uff0c",(0,l.jsx)(e.code,{children:"N"}),"\u662f\u786c\u5e01\u7684\u79cd\u7c7b\u6570\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u7efc\u4e0a\uff0c\u53ef\u5f97\u72b6\u6001\u8f6c\u79fb\u65b9\u7a0b\u4e3a\uff1a"}),"\n",(0,l.jsx)(e.span,{className:"katex-display",children:(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"f"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"("}),(0,l.jsx)(e.mi,{children:"j"}),(0,l.jsx)(e.mo,{stretchy:"false",children:")"}),(0,l.jsx)(e.mo,{children:"="}),(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mo,{fence:"true",children:"{"}),(0,l.jsxs)(e.mtable,{rowspacing:"0.36em",columnalign:"left left",columnspacing:"1em",children:[(0,l.jsxs)(e.mtr,{children:[(0,l.jsx)(e.mtd,{children:(0,l.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,l.jsx)(e.mn,{children:"0"})})}),(0,l.jsx)(e.mtd,{children:(0,l.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"j"}),(0,l.jsx)(e.mo,{children:"="}),(0,l.jsx)(e.mn,{children:"0"})]})})})]}),(0,l.jsxs)(e.mtr,{children:[(0,l.jsx)(e.mtd,{children:(0,l.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"min"}),(0,l.jsx)(e.mo,{children:"\u2061"}),(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mo,{fence:"true",children:"{"}),(0,l.jsx)(e.mi,{children:"f"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"("}),(0,l.jsx)(e.mi,{children:"j"}),(0,l.jsx)(e.mo,{stretchy:"false",children:")"}),(0,l.jsx)(e.mo,{separator:"true",children:","}),(0,l.jsx)(e.mi,{children:"f"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"("}),(0,l.jsx)(e.mi,{children:"j"}),(0,l.jsx)(e.mo,{children:"\u2212"}),(0,l.jsx)(e.mi,{children:"c"}),(0,l.jsx)(e.mi,{children:"o"}),(0,l.jsx)(e.mi,{children:"i"}),(0,l.jsx)(e.mi,{children:"n"}),(0,l.jsx)(e.mo,{stretchy:"false",children:")"}),(0,l.jsx)(e.mo,{children:"+"}),(0,l.jsx)(e.mn,{children:"1"}),(0,l.jsx)(e.mo,{fence:"true",children:"}"})]})]})})}),(0,l.jsx)(e.mtd,{children:(0,l.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"c"}),(0,l.jsx)(e.mi,{children:"o"}),(0,l.jsx)(e.mi,{children:"i"}),(0,l.jsx)(e.mi,{children:"n"}),(0,l.jsx)(e.mo,{children:"\u2208"}),(0,l.jsx)(e.mi,{children:"c"}),(0,l.jsx)(e.mi,{children:"o"}),(0,l.jsx)(e.mi,{children:"i"}),(0,l.jsx)(e.mi,{children:"n"}),(0,l.jsx)(e.mi,{children:"s"})]})})})]})]})]})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"f(j)=\\begin{cases}\n0 & j=0 \\\\\n\\min\\left\\{f(j),f(j-coin)+1\\right\\} & coin \\in coins\n\\end{cases}"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,l.jsx)(e.span,{className:"mopen",children:"("}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,l.jsx)(e.span,{className:"mclose",children:")"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"="}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"3em",verticalAlign:"-1.25em"}}),(0,l.jsxs)(e.span,{className:"minner",children:[(0,l.jsx)(e.span,{className:"mopen delimcenter",style:{top:"0em"},children:(0,l.jsx)(e.span,{className:"delimsizing size4",children:"{"})}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsxs)(e.span,{className:"mtable",children:[(0,l.jsx)(e.span,{className:"col-align-l",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsxs)(e.span,{className:"vlist",style:{height:"1.69em"},children:[(0,l.jsxs)(e.span,{style:{top:"-3.69em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3.008em"}}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsx)(e.span,{className:"mord",children:"0"})})]}),(0,l.jsxs)(e.span,{style:{top:"-2.25em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3.008em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mop",children:"min"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsxs)(e.span,{className:"minner",children:[(0,l.jsx)(e.span,{className:"mopen delimcenter",style:{top:"0em"},children:"{"}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,l.jsx)(e.span,{className:"mopen",children:"("}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,l.jsx)(e.span,{className:"mclose",children:")"}),(0,l.jsx)(e.span,{className:"mpunct",children:","}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,l.jsx)(e.span,{className:"mopen",children:"("}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"co"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"in"}),(0,l.jsx)(e.span,{className:"mclose",children:")"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"+"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mord",children:"1"}),(0,l.jsx)(e.span,{className:"mclose delimcenter",style:{top:"0em"},children:"}"})]})]})]})]}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"1.19em"},children:(0,l.jsx)(e.span,{})})})]})}),(0,l.jsx)(e.span,{className:"arraycolsep",style:{width:"1em"}}),(0,l.jsx)(e.span,{className:"col-align-l",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsxs)(e.span,{className:"vlist",style:{height:"1.69em"},children:[(0,l.jsxs)(e.span,{style:{top:"-3.69em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3.008em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"="}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mord",children:"0"})]})]}),(0,l.jsxs)(e.span,{style:{top:"-2.25em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3.008em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",children:"co"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"in"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"\u2208"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"co"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"in"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"s"})]})]})]}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"1.19em"},children:(0,l.jsx)(e.span,{})})})]})})]})}),(0,l.jsx)(e.span,{className:"mclose nulldelimiter"})]})]})]})]})}),"\n",(0,l.jsx)(e.h3,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n","\n",(0,l.jsxs)(i.A,{defaultValue:"cpp",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,l.jsx)(c.A,{value:"python",children:(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:"TODO\n"})})}),(0,l.jsx)(c.A,{value:"java",children:(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-java",children:"TODO\n"})})}),(0,l.jsx)(c.A,{value:"cpp",children:(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-cpp",children:"// Time Complexity: O(N*amount)\n// Space Complexity: O(amount)\nclass Solution {\npublic:\n    int coinChange(vector<int>& coins, int amount) {\n        // choose amount+1 over INT_MAX to avoid overflow\n        vector<int> dp(amount+1, amount+1);\n        dp[0] = 0; // base case\n\n        for (auto coin : coins) {\n            for (int j=coin; j <= amount; j++) {\n                dp[j] = min(dp[j], dp[j-coin] + 1);\n            }\n        }\n        return dp[amount] == amount+1 ? -1 : dp[amount];\n    }\n};\n"})})})]}),"\n",(0,l.jsxs)(e.p,{children:["\u5728\u521d\u59cb\u5316 ",(0,l.jsx)(e.code,{children:"dp"})," \u6570\u7ec4\u65f6\uff0c\u672c\u9898\u6c42\u7684\u662f\u6700\u5c11\u786c\u5e01\u6570\uff0c\u56e0\u6b64\u8981\u521d\u59cb\u5316\u4e3a ",(0,l.jsx)(e.code,{children:"INT_MAX"}),"\uff0c\u4e0d\u8fc7\u7531\u4e8e\u4ee3\u7801\u540e\u9762\u6709+1\u7684\u64cd\u4f5c\uff0c",(0,l.jsx)(e.code,{children:"INT_MAX+1"})," \u4f1a\u6ea2\u51fa\uff0c\u56e0\u6b64\u7528",(0,l.jsx)(e.code,{children:"amount+1"}),"\u4ee3\u66ff",(0,l.jsx)(e.code,{children:"INT_MAX"}),"\u3002\u5f53\u76ee\u6807\u91d1\u989d\u5168\u90e8\u662f\u7531\u9762\u503c\u4e3a1\u7684\u786c\u5e01\u51d1\u8d77\u6765\u7684\u65f6\u5019\uff0c\u6240\u9700\u786c\u5e01\u6570\u6700\u5927\uff0c\u4e3a",(0,l.jsx)(e.code,{children:"amount"}),", \u56e0\u6b64",(0,l.jsx)(e.code,{children:"amount+1"}),"\u4e00\u5b9a\u662f\u4e00\u4e2a\u65e0\u6548\u7684\u5927\u6570\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:["\u6700\u540e\u8fd4\u56de\u7684\u65f6\u5019\uff0c\u5982\u679c ",(0,l.jsx)(e.code,{children:"dp[amount]"})," \u4ecd\u7136\u662f ",(0,l.jsx)(e.code,{children:"amount+1"}),"\uff0c\u8bf4\u660e\u6ca1\u6709\u89e3\uff0c\u8fd4\u56de ",(0,l.jsx)(e.code,{children:"-1"})," \u5373\u53ef\u3002"]})]})}function x(s={}){const{wrapper:e}={...(0,r.R)(),...s.components};return e?(0,l.jsx)(e,{...s,children:(0,l.jsx)(o,{...s})}):o(s)}},19365:(s,e,n)=>{n.d(e,{A:()=>i});n(96540);var a=n(34164);const l={tabItem:"tabItem_Ymn6"};var r=n(74848);function i(s){let{children:e,hidden:n,className:i}=s;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(l.tabItem,i),hidden:n,children:e})}},11470:(s,e,n)=>{n.d(e,{A:()=>v});var a=n(96540),l=n(34164),r=n(23104),i=n(56347),c=n(205),t=n(57485),m=n(31682),h=n(70679);function d(s){return a.Children.toArray(s).filter((s=>"\n"!==s)).map((s=>{if(!s||(0,a.isValidElement)(s)&&function(s){const{props:e}=s;return!!e&&"object"==typeof e&&"value"in e}(s))return s;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof s.type?s.type:s.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function o(s){const{values:e,children:n}=s;return(0,a.useMemo)((()=>{const s=e??function(s){return d(s).map((s=>{let{props:{value:e,label:n,attributes:a,default:l}}=s;return{value:e,label:n,attributes:a,default:l}}))}(n);return function(s){const e=(0,m.XI)(s,((s,e)=>s.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((s=>s.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(s),s}),[e,n])}function x(s){let{value:e,tabValues:n}=s;return n.some((s=>s.value===e))}function p(s){let{queryString:e=!1,groupId:n}=s;const l=(0,i.W6)(),r=function(s){let{queryString:e=!1,groupId:n}=s;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:e,groupId:n});return[(0,t.aZ)(r),(0,a.useCallback)((s=>{if(!r)return;const e=new URLSearchParams(l.location.search);e.set(r,s),l.replace({...l.location,search:e.toString()})}),[r,l])]}function j(s){const{defaultValue:e,queryString:n=!1,groupId:l}=s,r=o(s),[i,t]=(0,a.useState)((()=>function(s){let{defaultValue:e,tabValues:n}=s;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!x({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((s=>s.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=n.find((s=>s.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:e,tabValues:r}))),[m,d]=p({queryString:n,groupId:l}),[j,u]=function(s){let{groupId:e}=s;const n=function(s){return s?`docusaurus.tab.${s}`:null}(e),[l,r]=(0,h.Dv)(n);return[l,(0,a.useCallback)((s=>{n&&r.set(s)}),[n,r])]}({groupId:l}),N=(()=>{const s=m??j;return x({value:s,tabValues:r})?s:null})();(0,c.A)((()=>{N&&t(N)}),[N]);return{selectedValue:i,selectValue:(0,a.useCallback)((s=>{if(!x({value:s,tabValues:r}))throw new Error(`Can't select invalid tab value=${s}`);t(s),d(s),u(s)}),[d,u,r]),tabValues:r}}var u=n(92303);const N={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function y(s){let{className:e,block:n,selectedValue:a,selectValue:i,tabValues:c}=s;const t=[],{blockElementScrollPositionUntilNextRender:m}=(0,r.a_)(),h=s=>{const e=s.currentTarget,n=t.indexOf(e),l=c[n].value;l!==a&&(m(e),i(l))},d=s=>{let e=null;switch(s.key){case"Enter":h(s);break;case"ArrowRight":{const n=t.indexOf(s.currentTarget)+1;e=t[n]??t[0];break}case"ArrowLeft":{const n=t.indexOf(s.currentTarget)-1;e=t[n]??t[t.length-1];break}}e?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},e),children:c.map((s=>{let{value:e,label:n,attributes:r}=s;return(0,g.jsx)("li",{role:"tab",tabIndex:a===e?0:-1,"aria-selected":a===e,ref:s=>t.push(s),onKeyDown:d,onClick:h,...r,className:(0,l.A)("tabs__item",N.tabItem,r?.className,{"tabs__item--active":a===e}),children:n??e},e)}))})}function f(s){let{lazy:e,children:n,selectedValue:r}=s;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const s=i.find((s=>s.props.value===r));return s?(0,a.cloneElement)(s,{className:(0,l.A)("margin-top--md",s.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((s,e)=>(0,a.cloneElement)(s,{key:e,hidden:s.props.value!==r})))})}function b(s){const e=j(s);return(0,g.jsxs)("div",{className:(0,l.A)("tabs-container",N.tabList),children:[(0,g.jsx)(y,{...e,...s}),(0,g.jsx)(f,{...e,...s})]})}function v(s){const e=(0,u.A)();return(0,g.jsx)(b,{...s,children:d(s.children)},String(e))}},28453:(s,e,n)=>{n.d(e,{R:()=>i,x:()=>c});var a=n(96540);const l={},r=a.createContext(l);function i(s){const e=a.useContext(r);return a.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function c(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:i(s.components),a.createElement(r.Provider,{value:e},s.children)}}}]);