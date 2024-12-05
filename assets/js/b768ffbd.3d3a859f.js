"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[8742],{22428:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>r,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>n,toc:()=>m});const n=JSON.parse('{"id":"dp/knapsack-problem/README","title":"\u80cc\u5305\u95ee\u9898","description":"\u80cc\u5305\u95ee\u9898(Knapsack problem)\uff1a\u6709$N$\u79cd\u7269\u54c1\uff0c\u7b2c$i$\u79cd\u7269\u54c1\u7684\u91cd\u91cf\u4e3a$wi$\uff0c\u4ef7\u503c\u4e3a$v_i$\uff0c\u80cc\u5305\u80fd\u627f\u53d7\u7684\u6700\u5927\u91cd\u91cf\u4e3a$W$\u3002\u5c06\u54ea\u4e9b\u7269\u54c1\u88c5\u5165\u80cc\u5305\uff0c\u53ef\u4f7f\u8fd9\u4e9b\u7269\u54c1\u7684\u603b\u91cd\u91cf\u4e0d\u8d85\u8fc7\u80cc\u5305\u5bb9\u91cf\uff0c\u4e14\u4ef7\u503c\u603b\u548c\u6700\u5927\uff1f","source":"@site/docs/dp/knapsack-problem/README.md","sourceDirName":"dp/knapsack-problem","slug":"/dp/knapsack-problem/","permalink":"/dp/knapsack-problem/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u80cc\u5305\u95ee\u9898"},"sidebar":"docs","previous":{"title":"\u52a8\u6001\u89c4\u5212","permalink":"/dp/"},"next":{"title":"0-1\u80cc\u5305\u95ee\u9898","permalink":"/dp/knapsack-problem/zero-one-knapsack"}}');var t=a(74848),i=a(28453);const l={title:"\u80cc\u5305\u95ee\u9898"},c=void 0,r={},m=[];function h(s){const e={a:"a",annotation:"annotation",li:"li",math:"math",mi:"mi",mrow:"mrow",msub:"msub",ol:"ol",p:"p",semantics:"semantics",span:"span",...(0,i.R)(),...s.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:["\u80cc\u5305\u95ee\u9898(",(0,t.jsx)(e.a,{href:"https://en.wikipedia.org/wiki/Knapsack_problem",children:"Knapsack problem"}),")\uff1a\u6709",(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsx)(e.mrow,{children:(0,t.jsx)(e.mi,{children:"N"})}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"N"})]})})}),(0,t.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,t.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"})]})})]}),"\u79cd\u7269\u54c1\uff0c\u7b2c",(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsx)(e.mrow,{children:(0,t.jsx)(e.mi,{children:"i"})}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,t.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.6595em"}}),(0,t.jsx)(e.span,{className:"mord mathnormal",children:"i"})]})})]}),"\u79cd\u7269\u54c1\u7684\u91cd\u91cf\u4e3a",(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsx)(e.mrow,{children:(0,t.jsxs)(e.msub,{children:[(0,t.jsx)(e.mi,{children:"w"}),(0,t.jsx)(e.mi,{children:"i"})]})}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"w_i"})]})})}),(0,t.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.5806em",verticalAlign:"-0.15em"}}),(0,t.jsxs)(e.span,{className:"mord",children:[(0,t.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02691em"},children:"w"}),(0,t.jsx)(e.span,{className:"msupsub",children:(0,t.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,t.jsxs)(e.span,{className:"vlist-r",children:[(0,t.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,t.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0269em",marginRight:"0.05em"},children:[(0,t.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,t.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,t.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"})})]})}),(0,t.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,t.jsx)(e.span,{className:"vlist-r",children:(0,t.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,t.jsx)(e.span,{})})})]})})]})]})})]}),"\uff0c\u4ef7\u503c\u4e3a",(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsx)(e.mrow,{children:(0,t.jsxs)(e.msub,{children:[(0,t.jsx)(e.mi,{children:"v"}),(0,t.jsx)(e.mi,{children:"i"})]})}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"v_i"})]})})}),(0,t.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.5806em",verticalAlign:"-0.15em"}}),(0,t.jsxs)(e.span,{className:"mord",children:[(0,t.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"v"}),(0,t.jsx)(e.span,{className:"msupsub",children:(0,t.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,t.jsxs)(e.span,{className:"vlist-r",children:[(0,t.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,t.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0359em",marginRight:"0.05em"},children:[(0,t.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,t.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,t.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"})})]})}),(0,t.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,t.jsx)(e.span,{className:"vlist-r",children:(0,t.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,t.jsx)(e.span,{})})})]})})]})]})})]}),"\uff0c\u80cc\u5305\u80fd\u627f\u53d7\u7684\u6700\u5927\u91cd\u91cf\u4e3a",(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsx)(e.mrow,{children:(0,t.jsx)(e.mi,{children:"W"})}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"W"})]})})}),(0,t.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,t.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"W"})]})})]}),"\u3002\u5c06\u54ea\u4e9b\u7269\u54c1\u88c5\u5165\u80cc\u5305\uff0c\u53ef\u4f7f\u8fd9\u4e9b\u7269\u54c1\u7684\u603b\u91cd\u91cf\u4e0d\u8d85\u8fc7\u80cc\u5305\u5bb9\u91cf\uff0c\u4e14\u4ef7\u503c\u603b\u548c\u6700\u5927\uff1f"]}),"\n",(0,t.jsx)(e.p,{children:"\u80cc\u5305\u95ee\u9898\u6709\u5f88\u591a\u53d8\u79cd\uff0c\u5e38\u89c1\u7684\u662f\u4ee5\u4e0b\u4e09\u79cd\uff08\u5176\u4ed6\u53d8\u79cd\u5728\u9762\u8bd5\u4e2d\u51e0\u4e4e\u4e0d\u4f1a\u95ee\uff0c\u90fd\u662f\u7ade\u8d5b\u7ea7\u522b\u7684\u4e86\uff09\uff1a"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"0-1 \u80cc\u5305\u95ee\u9898(0-1 knapsack problem)\u3002\u6bcf\u79cd\u7269\u54c1\u53ea\u6709\u4e00\u4e2a\u3002"}),"\n",(0,t.jsx)(e.li,{children:"\u5b8c\u5168\u80cc\u5305\u95ee\u9898(UKP, unbounded knapsack problem)\u3002\u6bcf\u79cd\u7269\u54c1\u90fd\u6709\u65e0\u9650\u4e2a\u3002"}),"\n",(0,t.jsx)(e.li,{children:"\u591a\u91cd\u80cc\u5305\u95ee\u9898(BKP, bounded knapsack problem)\u3002\u6bcf\u79cd\u7269\u54c1\u6709\u82e5\u5e72\u591a\u4e2a\u3002"}),"\n"]}),"\n",(0,t.jsxs)(e.p,{children:["\u80cc\u5305\u95ee\u9898\u6700\u7ecf\u5178\u7684\u8d44\u6599\u5f53\u7136\u662f",(0,t.jsx)(e.a,{href:"https://github.com/tianyicui/pack",children:"\u80cc\u5305\u95ee\u9898\u4e5d\u8bb2"}),"\uff0c\u8fd9\u662f\u5d14\u5929\u7ffc\u5927\u795e\u65e9\u5e74\u5199\u7684\u4e00\u4e2a\u6587\u6863\uff0c\u4f46\u662f\u8bfb\u8d77\u6765\u6709\u70b9\u8d39\u52b2\uff0c\u672c\u8282\u6211\u5c3d\u53ef\u80fd\u7528\u7b80\u5355\u6613\u61c2\u7684\u65b9\u5f0f\u6765\u8bb2\u89e3\u80cc\u5305\u95ee\u9898\u3002"]})]})}function d(s={}){const{wrapper:e}={...(0,i.R)(),...s.components};return e?(0,t.jsx)(e,{...s,children:(0,t.jsx)(h,{...s})}):h(s)}},28453:(s,e,a)=>{a.d(e,{R:()=>l,x:()=>c});var n=a(96540);const t={},i=n.createContext(t);function l(s){const e=n.useContext(i);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function c(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(t):s.components||t:l(s.components),n.createElement(i.Provider,{value:e},s.children)}}}]);