"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[3200],{62640:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>o,contentTitle:()=>m,default:()=>p,frontMatter:()=>c,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"dp/palindrome-partitioning-ii","title":"Palindrome Partitioning II","description":"\u63cf\u8ff0","source":"@site/docs/dp/palindrome-partitioning-ii.md","sourceDirName":"dp","slug":"/dp/palindrome-partitioning-ii","permalink":"/en/dp/palindrome-partitioning-ii","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Palindrome Partitioning II"},"sidebar":"docs","previous":{"title":"Russian Doll Envelopes","permalink":"/en/dp/russian-doll-envelopes"},"next":{"title":"Maximal Rectangle","permalink":"/en/dp/maximal-rectangle"}}');var l=a(74848),i=a(28453),r=a(11470),t=a(19365);const c={title:"Palindrome Partitioning II"},m=void 0,o={},h=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}];function d(e){const s={a:"a",annotation:"annotation",code:"code",h3:"h3",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",ul:"ul",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,l.jsx)(s.p,{children:"Given a string s, partition s such that every substring of the partition is a palindrome."}),"\n",(0,l.jsx)(s.p,{children:"Return the minimum cuts needed for a palindrome partitioning of s."}),"\n",(0,l.jsxs)(s.p,{children:["For example, given ",(0,l.jsx)(s.code,{children:'s = "aab"'}),","]}),"\n",(0,l.jsxs)(s.p,{children:["Return 1 since the palindrome partitioning ",(0,l.jsx)(s.code,{children:'["aa","b"]'})," could be produced using 1 cut."]}),"\n",(0,l.jsx)(s.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,l.jsxs)(s.p,{children:["\u5b9a\u4e49\u72b6\u6001",(0,l.jsx)(s.code,{children:"f(i,j)"}),"\u8868\u793a\u533a\u95f4",(0,l.jsx)(s.code,{children:"[i,j]"}),"\u4e4b\u95f4\u6700\u5c0f\u7684 cut \u6570\uff0c\u5219\u72b6\u6001\u8f6c\u79fb\u65b9\u7a0b\u4e3a"]}),"\n",(0,l.jsx)(s.span,{className:"katex-display",children:(0,l.jsxs)(s.span,{className:"katex",children:[(0,l.jsx)(s.span,{className:"katex-mathml",children:(0,l.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,l.jsxs)(s.semantics,{children:[(0,l.jsxs)(s.mrow,{children:[(0,l.jsx)(s.mi,{children:"f"}),(0,l.jsx)(s.mo,{stretchy:"false",children:"("}),(0,l.jsx)(s.mi,{children:"i"}),(0,l.jsx)(s.mo,{separator:"true",children:","}),(0,l.jsx)(s.mi,{children:"j"}),(0,l.jsx)(s.mo,{stretchy:"false",children:")"}),(0,l.jsx)(s.mo,{children:"="}),(0,l.jsx)(s.mi,{children:"min"}),(0,l.jsx)(s.mo,{children:"\u2061"}),(0,l.jsxs)(s.mrow,{children:[(0,l.jsx)(s.mo,{fence:"true",children:"{"}),(0,l.jsx)(s.mi,{children:"f"}),(0,l.jsx)(s.mo,{stretchy:"false",children:"("}),(0,l.jsx)(s.mi,{children:"i"}),(0,l.jsx)(s.mo,{separator:"true",children:","}),(0,l.jsx)(s.mi,{children:"k"}),(0,l.jsx)(s.mo,{stretchy:"false",children:")"}),(0,l.jsx)(s.mo,{children:"+"}),(0,l.jsx)(s.mi,{children:"f"}),(0,l.jsx)(s.mo,{stretchy:"false",children:"("}),(0,l.jsx)(s.mi,{children:"k"}),(0,l.jsx)(s.mo,{children:"+"}),(0,l.jsx)(s.mn,{children:"1"}),(0,l.jsx)(s.mo,{separator:"true",children:","}),(0,l.jsx)(s.mi,{children:"j"}),(0,l.jsx)(s.mo,{stretchy:"false",children:")"}),(0,l.jsx)(s.mo,{fence:"true",children:"}"})]}),(0,l.jsx)(s.mo,{separator:"true",children:","}),(0,l.jsx)(s.mi,{children:"i"}),(0,l.jsx)(s.mo,{children:"\u2264"}),(0,l.jsx)(s.mi,{children:"k"}),(0,l.jsx)(s.mo,{children:"\u2264"}),(0,l.jsx)(s.mi,{children:"j"}),(0,l.jsx)(s.mo,{separator:"true",children:","}),(0,l.jsx)(s.mn,{children:"0"}),(0,l.jsx)(s.mo,{children:"\u2264"}),(0,l.jsx)(s.mi,{children:"i"}),(0,l.jsx)(s.mo,{children:"\u2264"}),(0,l.jsx)(s.mi,{children:"j"}),(0,l.jsx)(s.mo,{children:"<"}),(0,l.jsx)(s.mi,{children:"n"})]}),(0,l.jsx)(s.annotation,{encoding:"application/x-tex",children:"f(i,j)=\\min\\left\\{f(i,k)+f(k+1,j)\\right\\}, i \\leq k \\leq j, 0 \\leq i \\leq j<n"})]})})}),(0,l.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,l.jsx)(s.span,{className:"mopen",children:"("}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,l.jsx)(s.span,{className:"mpunct",children:","}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,l.jsx)(s.span,{className:"mclose",children:")"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(s.span,{className:"mrel",children:"="}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(s.span,{className:"mop",children:"min"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsxs)(s.span,{className:"minner",children:[(0,l.jsx)(s.span,{className:"mopen delimcenter",style:{top:"0em"},children:"{"}),(0,l.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,l.jsx)(s.span,{className:"mopen",children:"("}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,l.jsx)(s.span,{className:"mpunct",children:","}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,l.jsx)(s.span,{className:"mclose",children:")"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(s.span,{className:"mbin",children:"+"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,l.jsx)(s.span,{className:"mopen",children:"("}),(0,l.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(s.span,{className:"mbin",children:"+"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(s.span,{className:"mord",children:"1"}),(0,l.jsx)(s.span,{className:"mpunct",children:","}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,l.jsx)(s.span,{className:"mclose",children:")"}),(0,l.jsx)(s.span,{className:"mclose delimcenter",style:{top:"0em"},children:"}"})]}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(s.span,{className:"mpunct",children:","}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(s.span,{className:"mrel",children:"\u2264"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"0.8304em",verticalAlign:"-0.136em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(s.span,{className:"mrel",children:"\u2264"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,l.jsx)(s.span,{className:"mpunct",children:","}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(s.span,{className:"mord",children:"0"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(s.span,{className:"mrel",children:"\u2264"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"0.7955em",verticalAlign:"-0.136em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(s.span,{className:"mrel",children:"\u2264"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(s.span,{className:"mrel",children:"<"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"n"})]})]})]})}),"\n",(0,l.jsx)(s.p,{children:"\u8fd9\u662f\u4e00\u4e2a\u4e8c\u7ef4\u51fd\u6570\uff0c\u5b9e\u9645\u5199\u4ee3\u7801\u6bd4\u8f83\u9ebb\u70e6\u3002"}),"\n",(0,l.jsxs)(s.p,{children:["\u6240\u4ee5\u8981\u8f6c\u6362\u6210\u4e00\u7ef4 DP\u3002\u5982\u679c\u6bcf\u6b21\uff0c\u4ece i \u5f80\u53f3\u626b\u63cf\uff0c\u6bcf\u627e\u5230\u4e00\u4e2a\u56de\u6587\u5c31\u7b97\u4e00\u6b21 DP \u7684\u8bdd\uff0c\u5c31\u53ef\u4ee5\u8f6c\u6362\u4e3a",(0,l.jsx)(s.code,{children:"f(i)=\u533a\u95f4[i, n-1]\u4e4b\u95f4\u6700\u5c0f\u7684cut\u6570"}),"\uff0cn \u4e3a\u5b57\u7b26\u4e32\u957f\u5ea6\uff0c\u5219\u72b6\u6001\u8f6c\u79fb\u65b9\u7a0b\u4e3a"]}),"\n",(0,l.jsx)(s.span,{className:"katex-display",children:(0,l.jsxs)(s.span,{className:"katex",children:[(0,l.jsx)(s.span,{className:"katex-mathml",children:(0,l.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,l.jsxs)(s.semantics,{children:[(0,l.jsxs)(s.mrow,{children:[(0,l.jsx)(s.mi,{children:"f"}),(0,l.jsx)(s.mo,{stretchy:"false",children:"("}),(0,l.jsx)(s.mi,{children:"i"}),(0,l.jsx)(s.mo,{stretchy:"false",children:")"}),(0,l.jsx)(s.mo,{children:"="}),(0,l.jsx)(s.mi,{children:"min"}),(0,l.jsx)(s.mo,{children:"\u2061"}),(0,l.jsxs)(s.mrow,{children:[(0,l.jsx)(s.mo,{fence:"true",children:"{"}),(0,l.jsx)(s.mi,{children:"f"}),(0,l.jsx)(s.mo,{stretchy:"false",children:"("}),(0,l.jsx)(s.mi,{children:"j"}),(0,l.jsx)(s.mo,{children:"+"}),(0,l.jsx)(s.mn,{children:"1"}),(0,l.jsx)(s.mo,{stretchy:"false",children:")"}),(0,l.jsx)(s.mo,{children:"+"}),(0,l.jsx)(s.mn,{children:"1"}),(0,l.jsx)(s.mo,{fence:"true",children:"}"})]}),(0,l.jsx)(s.mo,{separator:"true",children:","}),(0,l.jsx)(s.mi,{children:"i"}),(0,l.jsx)(s.mo,{children:"\u2264"}),(0,l.jsx)(s.mi,{children:"j"}),(0,l.jsx)(s.mo,{children:"<"}),(0,l.jsx)(s.mi,{children:"n"})]}),(0,l.jsx)(s.annotation,{encoding:"application/x-tex",children:"f(i)=\\min\\left\\{f(j+1)+1\\right\\}, i \\leq j<n"})]})})}),(0,l.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,l.jsx)(s.span,{className:"mopen",children:"("}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,l.jsx)(s.span,{className:"mclose",children:")"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(s.span,{className:"mrel",children:"="}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(s.span,{className:"mop",children:"min"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsxs)(s.span,{className:"minner",children:[(0,l.jsx)(s.span,{className:"mopen delimcenter",style:{top:"0em"},children:"{"}),(0,l.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,l.jsx)(s.span,{className:"mopen",children:"("}),(0,l.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(s.span,{className:"mbin",children:"+"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(s.span,{className:"mord",children:"1"}),(0,l.jsx)(s.span,{className:"mclose",children:")"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(s.span,{className:"mbin",children:"+"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(s.span,{className:"mord",children:"1"}),(0,l.jsx)(s.span,{className:"mclose delimcenter",style:{top:"0em"},children:"}"})]}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(s.span,{className:"mpunct",children:","}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(s.span,{className:"mrel",children:"\u2264"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(s.span,{className:"mrel",children:"<"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"n"})]})]})]})}),"\n",(0,l.jsxs)(s.p,{children:["\u4e00\u4e2a\u95ee\u9898\u51fa\u73b0\u4e86\uff0c\u5c31\u662f\u5982\u4f55\u5224\u65ad",(0,l.jsx)(s.code,{children:"[i,j]"}),"\u662f\u5426\u662f\u56de\u6587\uff1f\u6bcf\u6b21\u90fd\u4ece i \u5230 j \u6bd4\u8f83\u4e00\u904d\uff1f\u592a\u6d6a\u8d39\u4e86\uff0c\u8fd9\u91cc\u4e5f\u662f\u4e00\u4e2a DP \u95ee\u9898\u3002"]}),"\n",(0,l.jsxs)(s.p,{children:["\u5b9a\u4e49\u72b6\u6001 ",(0,l.jsx)(s.code,{children:"P[i][j] = true if [i,j]\u4e3a\u56de\u6587"}),"\uff0c\u90a3\u4e48"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{children:"P[i][j] = str[i] == str[j] && P[i+1][j-1]\n"})}),"\n",(0,l.jsx)(s.h3,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n","\n",(0,l.jsxs)(r.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,l.jsx)(t.A,{value:"java",children:(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-java",children:"// Palindrome Partitioning II\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n^2)\npublic class Solution {\n    public int minCut(String s) {\n        final int n = s.length();\n        int[] f = new int[n+1];\n        boolean[][] p = new boolean[n][n];\n        //the worst case is cutting by each char\n        for (int i = 0; i <= n; i++)\n            f[i] = n - 1 - i; // \u6700\u540e\u4e00\u4e2af[n]=-1\n        for (int i = n - 1; i >= 0; i--) {\n            for (int j = i; j < n; j++) {\n                if (s.charAt(i) == s.charAt(j) &&\n                        (j - i < 2 || p[i + 1][j - 1])) {\n                    p[i][j] = true;\n                    f[i] = Math.min(f[i], f[j + 1] + 1);\n                }\n            }\n        }\n        return f[0];\n    }\n}\n"})})}),(0,l.jsx)(t.A,{value:"cpp",children:(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-cpp",children:"// Palindrome Partitioning II\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n^2)\nclass Solution {\npublic:\n    int minCut(const string& s) {\n        const int n = s.size();\n        int f[n+1];\n        bool p[n][n];\n        fill_n(&p[0][0], n * n, false);\n        //the worst case is cutting by each char\n        for (int i = 0; i <= n; i++)\n            f[i] = n - 1 - i; // \u6700\u540e\u4e00\u4e2af[n]=-1\n        for (int i = n - 1; i >= 0; i--) {\n            for (int j = i; j < n; j++) {\n                if (s[i] == s[j] && (j - i < 2 || p[i + 1][j - 1])) {\n                    p[i][j] = true;\n                    f[i] = min(f[i], f[j + 1] + 1);\n                }\n            }\n        }\n        return f[0];\n    }\n};\n"})})})]}),"\n",(0,l.jsx)(s.h3,{id:"\u76f8\u5173\u9898\u76ee",children:"\u76f8\u5173\u9898\u76ee"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.a,{href:"/en/dfs/palindrome-partitioning",children:"Palindrome Partitioning"})}),"\n"]})]})}function p(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},19365:(e,s,a)=>{a.d(s,{A:()=>r});a(96540);var n=a(34164);const l={tabItem:"tabItem_Ymn6"};var i=a(74848);function r(e){let{children:s,hidden:a,className:r}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(l.tabItem,r),hidden:a,children:s})}},11470:(e,s,a)=>{a.d(s,{A:()=>v});var n=a(96540),l=a(34164),i=a(23104),r=a(56347),t=a(205),c=a(57485),m=a(31682),o=a(70679);function h(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:s,children:a}=e;return(0,n.useMemo)((()=>{const e=s??function(e){return h(e).map((e=>{let{props:{value:s,label:a,attributes:n,default:l}}=e;return{value:s,label:a,attributes:n,default:l}}))}(a);return function(e){const s=(0,m.XI)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,a])}function p(e){let{value:s,tabValues:a}=e;return a.some((e=>e.value===s))}function j(e){let{queryString:s=!1,groupId:a}=e;const l=(0,r.W6)(),i=function(e){let{queryString:s=!1,groupId:a}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:s,groupId:a});return[(0,c.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const s=new URLSearchParams(l.location.search);s.set(i,e),l.replace({...l.location,search:s.toString()})}),[i,l])]}function x(e){const{defaultValue:s,queryString:a=!1,groupId:l}=e,i=d(e),[r,c]=(0,n.useState)((()=>function(e){let{defaultValue:s,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!p({value:s,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:s,tabValues:i}))),[m,h]=j({queryString:a,groupId:l}),[x,u]=function(e){let{groupId:s}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(s),[l,i]=(0,o.Dv)(a);return[l,(0,n.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:l}),g=(()=>{const e=m??x;return p({value:e,tabValues:i})?e:null})();(0,t.A)((()=>{g&&c(g)}),[g]);return{selectedValue:r,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),u(e)}),[h,u,i]),tabValues:i}}var u=a(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var N=a(74848);function f(e){let{className:s,block:a,selectedValue:n,selectValue:r,tabValues:t}=e;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.a_)(),o=e=>{const s=e.currentTarget,a=c.indexOf(s),l=t[a].value;l!==n&&(m(s),r(l))},h=e=>{let s=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;s=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;s=c[a]??c[c.length-1];break}}s?.focus()};return(0,N.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":a},s),children:t.map((e=>{let{value:s,label:a,attributes:i}=e;return(0,N.jsx)("li",{role:"tab",tabIndex:n===s?0:-1,"aria-selected":n===s,ref:e=>c.push(e),onKeyDown:h,onClick:o,...i,className:(0,l.A)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":n===s}),children:a??s},s)}))})}function y(e){let{lazy:s,children:a,selectedValue:i}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(s){const e=r.find((e=>e.props.value===i));return e?(0,n.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,N.jsx)("div",{className:"margin-top--md",children:r.map(((e,s)=>(0,n.cloneElement)(e,{key:s,hidden:e.props.value!==i})))})}function b(e){const s=x(e);return(0,N.jsxs)("div",{className:(0,l.A)("tabs-container",g.tabList),children:[(0,N.jsx)(f,{...s,...e}),(0,N.jsx)(y,{...s,...e})]})}function v(e){const s=(0,u.A)();return(0,N.jsx)(b,{...e,children:h(e.children)},String(s))}},28453:(e,s,a)=>{a.d(s,{R:()=>r,x:()=>t});var n=a(96540);const l={},i=n.createContext(l);function r(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);