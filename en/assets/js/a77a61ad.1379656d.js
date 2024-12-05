"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[931],{58731:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>r,contentTitle:()=>m,default:()=>x,frontMatter:()=>t,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"number-theory/ugly-number-ii","title":"Ugly Number II","description":"\u63cf\u8ff0","source":"@site/docs/number-theory/ugly-number-ii.md","sourceDirName":"number-theory","slug":"/number-theory/ugly-number-ii","permalink":"/en/number-theory/ugly-number-ii","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Ugly Number II"},"sidebar":"docs","previous":{"title":"Ugly Number","permalink":"/en/number-theory/ugly-number"},"next":{"title":"Super Ugly Number","permalink":"/en/number-theory/super-ugly-number"}}');var l=a(74848),i=a(28453);const t={title:"Ugly Number II"},m=void 0,r={},c=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}];function h(s){const e={a:"a",annotation:"annotation",code:"code",h3:"h3",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msub:"msub",msup:"msup",ol:"ol",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,i.R)(),...s.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,l.jsxs)(e.p,{children:["Write a function to find the ",(0,l.jsx)(e.code,{children:"n"}),"-th ugly number."]}),"\n",(0,l.jsx)(e.p,{children:"Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. For example, 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10 ugly numbers."}),"\n",(0,l.jsx)(e.p,{children:"Note that 1 is typically treated as an ugly number."}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"Hint"}),":"]}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:["The naive approach is to call ",(0,l.jsx)(e.code,{children:"isUgly()"})," for every number until you reach the ",(0,l.jsx)(e.code,{children:"n"}),"-th one. Most numbers are not ugly. Try to focus your effort on generating only the ugly ones."]}),"\n",(0,l.jsx)(e.li,{children:"An ugly number must be multiplied by either 2, 3, or 5 from a smaller ugly number."}),"\n",(0,l.jsxs)(e.li,{children:["The key is how to maintain the order of the ugly numbers. Try a similar approach of merging from three sorted lists: ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsxs)(e.msub,{children:[(0,l.jsx)(e.mi,{children:"L"}),(0,l.jsx)(e.mn,{children:"1"})]})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"L_1"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",children:"L"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"1"})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,l.jsx)(e.span,{})})})]})})]})]})})]}),", ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsxs)(e.msub,{children:[(0,l.jsx)(e.mi,{children:"L"}),(0,l.jsx)(e.mn,{children:"2"})]})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"L_2"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",children:"L"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"2"})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,l.jsx)(e.span,{})})})]})})]})]})})]}),", and ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsxs)(e.msub,{children:[(0,l.jsx)(e.mi,{children:"L"}),(0,l.jsx)(e.mn,{children:"3"})]})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"L_3"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",children:"L"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"3"})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,l.jsx)(e.span,{})})})]})})]})]})})]}),"."]}),"\n",(0,l.jsxs)(e.li,{children:["Assume you have ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsxs)(e.msub,{children:[(0,l.jsx)(e.mi,{children:"U"}),(0,l.jsx)(e.mi,{children:"k"})]})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"U_k"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"U"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.3361em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.109em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.03148em"},children:"k"})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,l.jsx)(e.span,{})})})]})})]})]})})]}),", the ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsxs)(e.msup,{children:[(0,l.jsx)(e.mi,{children:"k"}),(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"t"}),(0,l.jsx)(e.mi,{children:"h"})]})]})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"k^{th}"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8491em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.8491em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsxs)(e.span,{className:"mord mtight",children:[(0,l.jsx)(e.span,{className:"mord mathnormal mtight",children:"t"}),(0,l.jsx)(e.span,{className:"mord mathnormal mtight",children:"h"})]})})]})})})})})]})]})})]})," ugly number. Then ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsxs)(e.msub,{children:[(0,l.jsx)(e.mi,{children:"U"}),(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"k"}),(0,l.jsx)(e.mo,{children:"+"}),(0,l.jsx)(e.mn,{children:"1"})]})]})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"U_{k+1}"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8917em",verticalAlign:"-0.2083em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"U"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.3361em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.109em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsxs)(e.span,{className:"mord mtight",children:[(0,l.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.03148em"},children:"k"}),(0,l.jsx)(e.span,{className:"mbin mtight",children:"+"}),(0,l.jsx)(e.span,{className:"mord mtight",children:"1"})]})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.2083em"},children:(0,l.jsx)(e.span,{})})})]})})]})]})})]})," must be ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"M"}),(0,l.jsx)(e.mi,{children:"i"}),(0,l.jsx)(e.mi,{children:"n"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"("}),(0,l.jsxs)(e.msub,{children:[(0,l.jsx)(e.mi,{children:"L"}),(0,l.jsx)(e.mn,{children:"1"})]}),(0,l.jsx)(e.mo,{children:"\u2217"}),(0,l.jsx)(e.mn,{children:"2"}),(0,l.jsx)(e.mo,{separator:"true",children:","}),(0,l.jsxs)(e.msub,{children:[(0,l.jsx)(e.mi,{children:"L"}),(0,l.jsx)(e.mn,{children:"2"})]}),(0,l.jsx)(e.mo,{children:"\u2217"}),(0,l.jsx)(e.mn,{children:"3"}),(0,l.jsx)(e.mo,{separator:"true",children:","}),(0,l.jsxs)(e.msub,{children:[(0,l.jsx)(e.mi,{children:"L"}),(0,l.jsx)(e.mn,{children:"3"})]}),(0,l.jsx)(e.mo,{children:"\u2217"}),(0,l.jsx)(e.mn,{children:"5"}),(0,l.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"Min(L_1 * 2, L_2 * 3, L_3 * 5)"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"M"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"in"}),(0,l.jsx)(e.span,{className:"mopen",children:"("}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",children:"L"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"1"})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,l.jsx)(e.span,{})})})]})})]}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"\u2217"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8778em",verticalAlign:"-0.1944em"}}),(0,l.jsx)(e.span,{className:"mord",children:"2"}),(0,l.jsx)(e.span,{className:"mpunct",children:","}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",children:"L"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"2"})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,l.jsx)(e.span,{})})})]})})]}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"\u2217"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8778em",verticalAlign:"-0.1944em"}}),(0,l.jsx)(e.span,{className:"mord",children:"3"}),(0,l.jsx)(e.span,{className:"mpunct",children:","}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",children:"L"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"3"})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,l.jsx)(e.span,{})})})]})})]}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"\u2217"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord",children:"5"}),(0,l.jsx)(e.span,{className:"mclose",children:")"})]})]})]}),"."]}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,l.jsx)(e.p,{children:"\u6839\u636e\u63d0\u793a\u4e2d\u7684\u4fe1\u606f\uff0c\u6211\u4eec\u77e5\u9053\u4e11\u964b\u5e8f\u5217\u53ef\u4ee5\u62c6\u5206\u6210 3 \u4e2a\u5b50\u5e8f\u5217\uff1a"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsx)(e.li,{children:"1x2, 2x2, 3x2, 4x2, 5x2, ..."}),"\n",(0,l.jsx)(e.li,{children:"1x3, 2x3, 3x3, 4x3, 5x3, ..."}),"\n",(0,l.jsx)(e.li,{children:"1x5, 2x5, 3x5, 4x5, 5x5, ..."}),"\n"]}),"\n",(0,l.jsxs)(e.p,{children:["\u6bcf\u6b21\u4ece\u4e09\u4e2a\u5217\u8868\u4e2d\u53d6\u51fa\u5f53\u524d\u6700\u5c0f\u7684\u90a3\u4e2a\u52a0\u5165\u5e8f\u5217\uff0c\u76f4\u5230\u7b2c",(0,l.jsx)(e.code,{children:"n"}),"\u4e2a\u4e3a\u6b62\u3002"]}),"\n",(0,l.jsx)(e.h3,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-java",children:"// Ugly Number II\n// Time complexity: O(n), Space complexity: O(n)\n// TODO: \u6ca1\u5fc5\u8981\u4fdd\u5b58\u6240\u6709\u7684ugly number, \u7a7a\u95f4\u53ef\u4ee5\u4f18\u5316\u5230O(1)\npublic class Solution {\n    public int nthUglyNumber(int n) {\n        final int[] nums = new int[n];\n        nums[0] = 1; // 1 is the first ugly number\n        int i2 = 0, i3 = 0, i5 = 0;\n\n        for (int i = 1; i < n; ++i) {\n            int u2 = nums[i2] * 2, u3 = nums[i3] * 3, u5 = nums[i5] * 5;\n            int ugly = Math.min(u2, Math.min(u3, u5));\n            nums[i] = ugly;\n\n            // Do NOT use if else if here, otherwise duplicated numbers may happen\n            if (ugly == u2) ++i2;\n            if (ugly == u3) ++i3;\n            if (ugly == u5) ++i5;\n\n        }\n        return nums[n - 1];\n    }\n}\n"})}),"\n",(0,l.jsx)(e.h3,{id:"\u76f8\u5173\u9898\u76ee",children:"\u76f8\u5173\u9898\u76ee"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"/en/number-theory/ugly-number",children:"Ugly Number"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"/en/number-theory/super-ugly-number",children:"Super Ugly Number"})}),"\n"]})]})}function x(s={}){const{wrapper:e}={...(0,i.R)(),...s.components};return e?(0,l.jsx)(e,{...s,children:(0,l.jsx)(h,{...s})}):h(s)}},28453:(s,e,a)=>{a.d(e,{R:()=>t,x:()=>m});var n=a(96540);const l={},i=n.createContext(l);function t(s){const e=n.useContext(i);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function m(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:t(s.components),n.createElement(i.Provider,{value:e},s.children)}}}]);