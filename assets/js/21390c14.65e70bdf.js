"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[920],{99538:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>t,default:()=>p,frontMatter:()=>m,metadata:()=>n,toc:()=>r});const n=JSON.parse('{"id":"number-theory/happy-number","title":"Happy Number","description":"\u63cf\u8ff0","source":"@site/docs/number-theory/happy-number.md","sourceDirName":"number-theory","slug":"/number-theory/happy-number","permalink":"/number-theory/happy-number","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Happy Number"},"sidebar":"docs","previous":{"title":"\u6570\u8bba","permalink":"/number-theory/"},"next":{"title":"Ugly Number","permalink":"/number-theory/ugly-number"}}');var l=a(74848),i=a(28453);const m={title:"Happy Number"},t=void 0,c={},r=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}];function h(s){const e={annotation:"annotation",code:"code",h3:"h3",math:"math",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",...(0,i.R)(),...s.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,l.jsx)(e.p,{children:'Write a function to determine if a number is "happy number".'}),"\n",(0,l.jsx)(e.p,{children:"A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers."}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"Example"}),": 19 is a happy number"]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsxs)(e.msup,{children:[(0,l.jsx)(e.mn,{children:"1"}),(0,l.jsx)(e.mn,{children:"2"})]}),(0,l.jsx)(e.mo,{children:"+"}),(0,l.jsxs)(e.msup,{children:[(0,l.jsx)(e.mn,{children:"9"}),(0,l.jsx)(e.mn,{children:"2"})]}),(0,l.jsx)(e.mo,{children:"="}),(0,l.jsx)(e.mn,{children:"82"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"1^2 + 9^2 = 82"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8974em",verticalAlign:"-0.0833em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord",children:"1"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"2"})})]})})})})})]}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"+"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8141em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord",children:"9"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"2"})})]})})})})})]}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"="}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,l.jsx)(e.span,{className:"mord",children:"82"})]})]})]})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsxs)(e.msup,{children:[(0,l.jsx)(e.mn,{children:"8"}),(0,l.jsx)(e.mn,{children:"2"})]}),(0,l.jsx)(e.mo,{children:"+"}),(0,l.jsxs)(e.msup,{children:[(0,l.jsx)(e.mn,{children:"2"}),(0,l.jsx)(e.mn,{children:"2"})]}),(0,l.jsx)(e.mo,{children:"="}),(0,l.jsx)(e.mn,{children:"68"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"8^2 + 2^2 = 68"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8974em",verticalAlign:"-0.0833em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord",children:"8"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"2"})})]})})})})})]}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"+"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8141em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord",children:"2"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"2"})})]})})})})})]}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"="}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,l.jsx)(e.span,{className:"mord",children:"68"})]})]})]})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsxs)(e.msup,{children:[(0,l.jsx)(e.mn,{children:"6"}),(0,l.jsx)(e.mn,{children:"2"})]}),(0,l.jsx)(e.mo,{children:"+"}),(0,l.jsxs)(e.msup,{children:[(0,l.jsx)(e.mn,{children:"8"}),(0,l.jsx)(e.mn,{children:"2"})]}),(0,l.jsx)(e.mo,{children:"="}),(0,l.jsx)(e.mn,{children:"100"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"6^2 + 8^2 = 100"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8974em",verticalAlign:"-0.0833em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord",children:"6"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"2"})})]})})})})})]}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"+"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8141em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord",children:"8"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"2"})})]})})})})})]}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"="}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,l.jsx)(e.span,{className:"mord",children:"100"})]})]})]})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsxs)(e.msup,{children:[(0,l.jsx)(e.mn,{children:"1"}),(0,l.jsx)(e.mn,{children:"2"})]}),(0,l.jsx)(e.mo,{children:"+"}),(0,l.jsxs)(e.msup,{children:[(0,l.jsx)(e.mn,{children:"0"}),(0,l.jsx)(e.mn,{children:"2"})]}),(0,l.jsx)(e.mo,{children:"+"}),(0,l.jsxs)(e.msup,{children:[(0,l.jsx)(e.mn,{children:"0"}),(0,l.jsx)(e.mn,{children:"2"})]}),(0,l.jsx)(e.mo,{children:"="}),(0,l.jsx)(e.mn,{children:"1"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"1^2 + 0^2 + 0^2 = 1"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8974em",verticalAlign:"-0.0833em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord",children:"1"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"2"})})]})})})})})]}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"+"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8974em",verticalAlign:"-0.0833em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord",children:"0"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"2"})})]})})})})})]}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"+"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8141em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord",children:"0"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"2"})})]})})})})})]}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"="}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,l.jsx)(e.span,{className:"mord",children:"1"})]})]})]})}),"\n",(0,l.jsx)(e.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,l.jsx)(e.p,{children:"\u8fd9\u9898\u627e\u5230\u89c4\u5f8b\u540e\u5c31\u7b80\u5355\u4e86\u3002\u5982\u679c\u53f3\u8fb9\u7684\u51fa\u73b0\u4e86\u67d0\u4e2a\u91cd\u590d\u7684\u6570\uff0c\u4f46\u4e0d\u662f 1\uff0c\u8bf4\u660e\u4f1a\u65e0\u9650\u5faa\u73af\u4e0b\u53bb\uff0c\u8fd9\u4e2a\u6570\u5c31\u4e0d\u662f\u5feb\u4e50\u6570\uff0c\u5982\u679c\u662f 1\uff0c\u5219\u662f\u5feb\u4e50\u6570\u3002"}),"\n",(0,l.jsx)(e.h3,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-java",children:"// Happy Number\n// Time complexity: ?, Space complexity: ?\npublic class Solution {\n    public boolean isHappy(int n) {\n        final Set<Integer> existed = new HashSet<>();\n        while (true) {\n            int sum = 0;\n            while (n > 0) {\n                int digit = n % 10;\n                sum += digit * digit;\n                n /= 10;\n            }\n            if (existed.contains(sum)) {\n                return sum == 1;\n            } else {\n                existed.add(sum);\n                n = sum;\n            }\n        }\n    }\n}\n"})})]})}function p(s={}){const{wrapper:e}={...(0,i.R)(),...s.components};return e?(0,l.jsx)(e,{...s,children:(0,l.jsx)(h,{...s})}):h(s)}},28453:(s,e,a)=>{a.d(e,{R:()=>m,x:()=>t});var n=a(96540);const l={},i=n.createContext(l);function m(s){const e=n.useContext(i);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function t(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:m(s.components),n.createElement(i.Provider,{value:e},s.children)}}}]);