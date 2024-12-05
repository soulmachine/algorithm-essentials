"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[5608],{995:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>m,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"dp/longest-increasing-subsequence","title":"Longest Increasing Subsequence","description":"\u63cf\u8ff0","source":"@site/docs/dp/longest-increasing-subsequence.md","sourceDirName":"dp","slug":"/dp/longest-increasing-subsequence","permalink":"/en/dp/longest-increasing-subsequence","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Longest Increasing Subsequence"},"sidebar":"docs","previous":{"title":"Maximum Product Subarray","permalink":"/en/dp/maximum-product-subarray"},"next":{"title":"Russian Doll Envelopes","permalink":"/en/dp/russian-doll-envelopes"}}');var l=n(74848),r=n(28453),i=n(11470),t=n(19365);const c={title:"Longest Increasing Subsequence"},m=void 0,o={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u89e3\u6cd5 1 \u52a8\u89c4",id:"\u89e3\u6cd5-1-\u52a8\u89c4",level:3},{value:"\u89e3\u6cd5 2 Insert Position",id:"\u89e3\u6cd5-2-insert-position",level:3}];function h(e){const s={annotation:"annotation",code:"code",h3:"h3",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",mstyle:"mstyle",mtable:"mtable",mtd:"mtd",mtr:"mtr",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,l.jsx)(s.p,{children:"Given an unsorted array of integers, find the length of longest increasing subsequence."}),"\n",(0,l.jsx)(s.p,{children:"For example,"}),"\n",(0,l.jsxs)(s.p,{children:["Given ",(0,l.jsx)(s.code,{children:"[10, 9, 2, 5, 3, 7, 101, 18]"}),","]}),"\n",(0,l.jsxs)(s.p,{children:["The longest increasing subsequence is ",(0,l.jsx)(s.code,{children:"[2, 3, 7, 101]"}),", therefore the length is ",(0,l.jsx)(s.code,{children:"4"}),". Note that there may be more than one LIS combination, it is only necessary for you to return the length."]}),"\n",(0,l.jsxs)(s.p,{children:["Your algorithm should run in ",(0,l.jsx)(s.code,{children:"O(n^2)"})," complexity."]}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:"Follow up"}),": Could you improve it to O(n log n) time complexity?"]}),"\n",(0,l.jsx)(s.h3,{id:"\u89e3\u6cd5-1-\u52a8\u89c4",children:"\u89e3\u6cd5 1 \u52a8\u89c4"}),"\n",(0,l.jsx)(s.p,{children:"\u8fd9\u662f\u4e00\u4e2a\u591a\u9636\u6bb5\u51b3\u7b56\u95ee\u9898\uff0c\u6c42\u6700\u957f\uff0c\u662f\u4e00\u4e2a\u6700\u4f18\u5316\u95ee\u9898\u3002\u5148\u5224\u65ad\u5b83\u662f\u5426\u6ee1\u8db3\u52a8\u89c4\u7684\u4e24\u4e2a\u6027\u8d28\uff0c\u5bf9\u4e8e\u9898\u4e2d\u7684\u4f8b\u5b50\uff0c"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"[10, 9, 2, 5, 3, 7, 101, 18]"}),"\u7684\u7b54\u6848\uff0c\u5fc5\u7136\u5305\u542b\u5b50\u95ee\u9898 ",(0,l.jsx)(s.code,{children:"[10, 9, 2, 5, 3, 7]"})," \u7684\u7b54\u6848\uff0c\u5373\u672c\u9898\u5177\u6709\u6700\u4f18\u5b50\u7ed3\u6784\u6027\u8d28"]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"[10, 9, 2, 5, 3, 7, 101, 18]"})," \u548c ",(0,l.jsx)(s.code,{children:"[10, 9, 2, 5, 3, 7]"})," \u90fd\u4f9d\u8d56 ",(0,l.jsx)(s.code,{children:"[10, 9, 2, 5, 3]"}),"\u8fd9\u4e2a\u5b50\u95ee\u9898\uff0c\u5373\u672c\u9898\u5177\u6709\u91cd\u53e0\u5b50\u95ee\u9898\u6027\u8d28"]}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:"\u56e0\u6b64\u672c\u9898\u53ef\u4ee5\u7528\u52a8\u89c4\u6765\u89e3\u51b3\u3002"}),"\n",(0,l.jsxs)(s.p,{children:["\u6700\u91cd\u8981\u7684\u662f\u8981\u5b9a\u4e49\u51fa\u72b6\u6001\u8f6c\u79fb\u65b9\u7a0b\u3002\u4e00\u4e2a\u9012\u589e\u5b50\u5e8f\u5217\uff0c\u80af\u5b9a\u662f\u6709\u9996\u5c3e\u4e24\u4e2a\u7aef\u70b9\u7684\uff0c\u5047\u8bbe",(0,l.jsx)(s.code,{children:"f[i]"}),"\u8868\u793a\u4ee5\u7b2c",(0,l.jsx)(s.code,{children:"i"}),"\u4e2a\u5143\u7d20\u4e3a\u8d77\u70b9\u7684\u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217\uff0c\u90a3\u4e48 ",(0,l.jsx)(s.code,{children:"f[i]"}),"\u548c",(0,l.jsx)(s.code,{children:"f[j]"}),"\u4e4b\u95f4\u6ca1\u6709\u5fc5\u7136\u8054\u7cfb\uff0c\u8fd9\u4e2a\u51fd\u6570\u5b9a\u4e49\u4e0d\u597d\u7528\u3002"]}),"\n",(0,l.jsxs)(s.p,{children:["\u5047\u8bbe",(0,l.jsx)(s.code,{children:"f[j]"}),"\u8868\u793a\u4ee5\u7b2c",(0,l.jsx)(s.code,{children:"j"}),"\u4e2a\u5143\u7d20\u4e3a\u7ec8\u70b9\u7684\u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217\uff0c\u90a3\u4e48\u5982\u679c",(0,l.jsx)(s.code,{children:"i<j"}),"\u4e14",(0,l.jsx)(s.code,{children:"nums[i]<nums[j]"}),"\uff0c\u5219",(0,l.jsx)(s.code,{children:"f[i]"}),"\u4e00\u5b9a\u662f",(0,l.jsx)(s.code,{children:"f[j]"}),"\u7684\u524d\u7f00\uff0c\u8fd9\u4e2a\u51fd\u6570\u5b9a\u4e49\u80fd\u8868\u793a\u5b50\u95ee\u9898\u4e4b\u95f4\u7684\u5173\u7cfb\u3002"]}),"\n",(0,l.jsxs)(s.p,{children:["\u4ee5",(0,l.jsx)(s.code,{children:"j"}),"\u5143\u7d20\u4e3a\u7ec8\u70b9\u7684\u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217\uff0c\u957f\u5ea6\u8d77\u7801\u4e3a1\uff0c\u56e0\u4e3a\u6700\u8d77\u7801\u53ef\u4ee5\u6709\u4e00\u4e2a",(0,l.jsx)(s.code,{children:"j"}),"\u5143\u7d20\uff0c\u5355\u5143\u7d20\u5e8f\u5217\uff0c\u5c31\u662f\u672c\u9898\u7684\u539f\u5b50\u95ee\u9898\u3002"]}),"\n",(0,l.jsx)(s.p,{children:"\u7efc\u4e0a\uff0c\u53ef\u5f97\u72b6\u6001\u8f6c\u79fb\u65b9\u7a0b\u4e3a\uff1a"}),"\n",(0,l.jsx)(s.span,{className:"katex-display",children:(0,l.jsxs)(s.span,{className:"katex",children:[(0,l.jsx)(s.span,{className:"katex-mathml",children:(0,l.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,l.jsxs)(s.semantics,{children:[(0,l.jsxs)(s.mrow,{children:[(0,l.jsx)(s.mi,{children:"f"}),(0,l.jsx)(s.mo,{stretchy:"false",children:"("}),(0,l.jsx)(s.mi,{children:"j"}),(0,l.jsx)(s.mo,{stretchy:"false",children:")"}),(0,l.jsx)(s.mo,{children:"="}),(0,l.jsxs)(s.mrow,{children:[(0,l.jsx)(s.mo,{fence:"true",children:"{"}),(0,l.jsxs)(s.mtable,{rowspacing:"0.36em",columnalign:"left left",columnspacing:"1em",children:[(0,l.jsxs)(s.mtr,{children:[(0,l.jsx)(s.mtd,{children:(0,l.jsx)(s.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,l.jsx)(s.mn,{children:"1"})})}),(0,l.jsx)(s.mtd,{children:(0,l.jsx)(s.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,l.jsxs)(s.mrow,{children:[(0,l.jsx)(s.mi,{children:"j"}),(0,l.jsx)(s.mo,{children:"\u2265"}),(0,l.jsx)(s.mn,{children:"0"})]})})})]}),(0,l.jsxs)(s.mtr,{children:[(0,l.jsx)(s.mtd,{children:(0,l.jsx)(s.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,l.jsxs)(s.mrow,{children:[(0,l.jsx)(s.mi,{children:"max"}),(0,l.jsx)(s.mo,{children:"\u2061"}),(0,l.jsxs)(s.mrow,{children:[(0,l.jsx)(s.mo,{fence:"true",children:"{"}),(0,l.jsx)(s.mi,{children:"f"}),(0,l.jsx)(s.mo,{stretchy:"false",children:"("}),(0,l.jsx)(s.mi,{children:"i"}),(0,l.jsx)(s.mo,{stretchy:"false",children:")"}),(0,l.jsx)(s.mo,{fence:"true",children:"}"})]}),(0,l.jsx)(s.mo,{children:"+"}),(0,l.jsx)(s.mn,{children:"1"})]})})}),(0,l.jsx)(s.mtd,{children:(0,l.jsx)(s.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,l.jsxs)(s.mrow,{children:[(0,l.jsx)(s.mn,{children:"0"}),(0,l.jsx)(s.mo,{children:"\u2264"}),(0,l.jsx)(s.mi,{children:"i"}),(0,l.jsx)(s.mo,{children:"<"}),(0,l.jsx)(s.mi,{children:"j"}),(0,l.jsx)(s.mo,{children:"\u2227"}),(0,l.jsx)(s.mi,{children:"n"}),(0,l.jsx)(s.mi,{children:"u"}),(0,l.jsx)(s.mi,{children:"m"}),(0,l.jsx)(s.mi,{children:"s"}),(0,l.jsx)(s.mo,{stretchy:"false",children:"["}),(0,l.jsx)(s.mi,{children:"i"}),(0,l.jsx)(s.mo,{stretchy:"false",children:"]"}),(0,l.jsx)(s.mo,{children:"<"}),(0,l.jsx)(s.mi,{children:"n"}),(0,l.jsx)(s.mi,{children:"u"}),(0,l.jsx)(s.mi,{children:"m"}),(0,l.jsx)(s.mi,{children:"s"}),(0,l.jsx)(s.mo,{stretchy:"false",children:"["}),(0,l.jsx)(s.mi,{children:"j"}),(0,l.jsx)(s.mo,{stretchy:"false",children:"]"})]})})})]})]})]})]}),(0,l.jsx)(s.annotation,{encoding:"application/x-tex",children:"f(j)=\\begin{cases}\n1 & j \\geq 0\\\\\n\\max\\left\\{f(i)\\right\\}+1 & 0 \\leq i < j \\land nums[i] < nums[j]\n\\end{cases}"})]})})}),(0,l.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,l.jsx)(s.span,{className:"mopen",children:"("}),(0,l.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,l.jsx)(s.span,{className:"mclose",children:")"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(s.span,{className:"mrel",children:"="}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"3em",verticalAlign:"-1.25em"}}),(0,l.jsxs)(s.span,{className:"minner",children:[(0,l.jsx)(s.span,{className:"mopen delimcenter",style:{top:"0em"},children:(0,l.jsx)(s.span,{className:"delimsizing size4",children:"{"})}),(0,l.jsx)(s.span,{className:"mord",children:(0,l.jsxs)(s.span,{className:"mtable",children:[(0,l.jsx)(s.span,{className:"col-align-l",children:(0,l.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(s.span,{className:"vlist-r",children:[(0,l.jsxs)(s.span,{className:"vlist",style:{height:"1.69em"},children:[(0,l.jsxs)(s.span,{style:{top:"-3.69em"},children:[(0,l.jsx)(s.span,{className:"pstrut",style:{height:"3.008em"}}),(0,l.jsx)(s.span,{className:"mord",children:(0,l.jsx)(s.span,{className:"mord",children:"1"})})]}),(0,l.jsxs)(s.span,{style:{top:"-2.25em"},children:[(0,l.jsx)(s.span,{className:"pstrut",style:{height:"3.008em"}}),(0,l.jsxs)(s.span,{className:"mord",children:[(0,l.jsx)(s.span,{className:"mop",children:"max"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsxs)(s.span,{className:"minner",children:[(0,l.jsx)(s.span,{className:"mopen delimcenter",style:{top:"0em"},children:"{"}),(0,l.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,l.jsx)(s.span,{className:"mopen",children:"("}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,l.jsx)(s.span,{className:"mclose",children:")"}),(0,l.jsx)(s.span,{className:"mclose delimcenter",style:{top:"0em"},children:"}"})]}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(s.span,{className:"mbin",children:"+"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(s.span,{className:"mord",children:"1"})]})]})]}),(0,l.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(s.span,{className:"vlist-r",children:(0,l.jsx)(s.span,{className:"vlist",style:{height:"1.19em"},children:(0,l.jsx)(s.span,{})})})]})}),(0,l.jsx)(s.span,{className:"arraycolsep",style:{width:"1em"}}),(0,l.jsx)(s.span,{className:"col-align-l",children:(0,l.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(s.span,{className:"vlist-r",children:[(0,l.jsxs)(s.span,{className:"vlist",style:{height:"1.69em"},children:[(0,l.jsxs)(s.span,{style:{top:"-3.69em"},children:[(0,l.jsx)(s.span,{className:"pstrut",style:{height:"3.008em"}}),(0,l.jsxs)(s.span,{className:"mord",children:[(0,l.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(s.span,{className:"mrel",children:"\u2265"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(s.span,{className:"mord",children:"0"})]})]}),(0,l.jsxs)(s.span,{style:{top:"-2.25em"},children:[(0,l.jsx)(s.span,{className:"pstrut",style:{height:"3.008em"}}),(0,l.jsxs)(s.span,{className:"mord",children:[(0,l.jsx)(s.span,{className:"mord",children:"0"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(s.span,{className:"mrel",children:"\u2264"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(s.span,{className:"mrel",children:"<"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(s.span,{className:"mbin",children:"\u2227"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"u"}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"m"}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"s"}),(0,l.jsx)(s.span,{className:"mopen",children:"["}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,l.jsx)(s.span,{className:"mclose",children:"]"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(s.span,{className:"mrel",children:"<"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"u"}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"m"}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"s"}),(0,l.jsx)(s.span,{className:"mopen",children:"["}),(0,l.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,l.jsx)(s.span,{className:"mclose",children:"]"})]})]})]}),(0,l.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(s.span,{className:"vlist-r",children:(0,l.jsx)(s.span,{className:"vlist",style:{height:"1.19em"},children:(0,l.jsx)(s.span,{})})})]})})]})}),(0,l.jsx)(s.span,{className:"mclose nulldelimiter"})]})]})]})]})}),"\n",(0,l.jsx)(s.p,{children:"\u6709\u4e86\u72b6\u6001\u8f6c\u79fb\u65b9\u7a0b\uff0c\u4ee3\u7801\u5c31\u4e0d\u96be\u5199\u4e86\u3002"}),"\n","\n",(0,l.jsxs)(i.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,l.jsx)(t.A,{value:"java",children:(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-java",children:"// Longest Increasing Subsequence\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\npublic class Solution {\n    public int lengthOfLIS(int[] nums) {\n        if (nums == null || nums.length == 0) return 0;\n        int[] dp = new int[nums.length];\n        Arrays.fill(dp, 1); // base case\n        int global = 1;\n        for (int j = 1; j < nums.length; ++j) {\n            for (int i = 0; i < j; ++i) {\n                if (nums[i] < nums[j]) {\n                    dp[j] = Math.max(dp[j], dp[i] + 1);\n                }\n            }\n            global = Math.max(global, dp[j]);\n        }\n        return global;\n    }\n}\n"})})}),(0,l.jsx)(t.A,{value:"cpp",children:(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-cpp",children:"// Longest Increasing Subsequence\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\npublic:\n    int lengthOfLIS(vector<int>& nums) {\n        if (nums.empty()) return 0;\n        vector<int> dp(nums.size(), 1);\n        for (int j = 1; j < nums.size(); ++j) {\n            for (int i = 0; i < j; ++i) {\n                if (nums[i] < nums[j]) {\n                    dp[j] = max(dp[j], dp[i] + 1);\n                }\n            }\n        }\n        return *std::max_element(dp.begin(), dp.end());\n    }\n};\n"})})})]}),"\n",(0,l.jsx)(s.h3,{id:"\u89e3\u6cd5-2-insert-position",children:"\u89e3\u6cd5 2 Insert Position"}),"\n",(0,l.jsxs)(s.p,{children:["\u672c\u9898\u6700\u540e\u6709\u4e00\u4e2a\u8fdb\u9636\u95ee\u9898\uff0c\u80fd\u4e0d\u80fd",(0,l.jsx)(s.code,{children:"O(n log n)"})," \u89e3\u51b3\uff1f"]}),"\n",(0,l.jsx)(s.p,{children:"\u7ef4\u62a4\u4e00\u4e2a\u5355\u8c03\u9012\u589e\u5e8f\u5217\uff0c\u904d\u5386\u6570\u7ec4\uff0c\u4e8c\u5206\u67e5\u627e\u6bcf\u4e00\u4e2a\u6570\u5728\u5355\u8c03\u5e8f\u5217\u4e2d\u7684\u4f4d\u7f6e\uff0c\u7136\u540e\u66ff\u6362\u4e4b\u3002"}),"\n",(0,l.jsx)(s.p,{children:"\u8fd9\u4e2a\u7b97\u6cd5\u4e0d\u9700\u8981\u638c\u63e1\uff0c\u9762\u8bd5\u4e2d\u51e0\u4e4e\u7528\u4e0d\u5230\uff0c\u638c\u63e1\u52a8\u89c4\u89e3\u6cd5\u5c31\u591f\u4e86\u3002"}),"\n",(0,l.jsxs)(i.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,l.jsx)(t.A,{value:"java",children:(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-java",children:"// Longest Increasing Subsequence\n// \u65f6\u95f4\u590d\u6742\u5ea6O(nlogn)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\npublic class Solution {\n    public int lengthOfLIS(int[] nums) {\n        ArrayList<Integer> lis = new ArrayList<>();\n        for (int x : nums) {\n            int insertPos = lowerBound(lis, 0, lis.size(), x);\n            if (insertPos >= lis.size()) {\n                lis.add(x);\n            } else {\n                lis.set(insertPos, x);\n            }\n        }\n        return lis.size();\n    }\n    private static int lowerBound (ArrayList<Integer> A,\n                                   int first, int last, int target) {\n        while (first != last) {\n            int mid = first + (last - first) / 2;\n            if (target > A.get(mid)) first = ++mid;\n            else                 last = mid;\n        }\n\n        return first;\n    }\n}\n"})})}),(0,l.jsx)(t.A,{value:"cpp",children:(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-cpp",children:"// Longest Increasing Subsequence\n// \u65f6\u95f4\u590d\u6742\u5ea6O(nlogn)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\npublic:\n    int lengthOfLIS(vector<int>& nums) {\n        vector<int> lis;\n        for (auto x : nums) {\n            int insertPos = lower_bound(lis, 0, lis.size(), x);\n            if (insertPos >= lis.size()) {\n                lis.push_back(x);\n            } else {\n                lis[insertPos] = x;\n            }\n        }\n        return lis.size();\n    }\n    int lower_bound (const vector<int>& A, int first, int last, int target) {\n        while (first != last) {\n            int mid = first + (last - first) / 2;\n            if (target > A[mid]) first = ++mid;\n            else                 last = mid;\n        }\n\n        return first;\n    }\n};\n"})})})]})]})}function u(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},19365:(e,s,n)=>{n.d(s,{A:()=>i});n(96540);var a=n(34164);const l={tabItem:"tabItem_Ymn6"};var r=n(74848);function i(e){let{children:s,hidden:n,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(l.tabItem,i),hidden:n,children:s})}},11470:(e,s,n)=>{n.d(s,{A:()=>y});var a=n(96540),l=n(34164),r=n(23104),i=n(56347),t=n(205),c=n(57485),m=n(31682),o=n(70679);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:s,children:n}=e;return(0,a.useMemo)((()=>{const e=s??function(e){return d(e).map((e=>{let{props:{value:s,label:n,attributes:a,default:l}}=e;return{value:s,label:n,attributes:a,default:l}}))}(n);return function(e){const s=(0,m.XI)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,n])}function u(e){let{value:s,tabValues:n}=e;return n.some((e=>e.value===s))}function p(e){let{queryString:s=!1,groupId:n}=e;const l=(0,i.W6)(),r=function(e){let{queryString:s=!1,groupId:n}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:s,groupId:n});return[(0,c.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const s=new URLSearchParams(l.location.search);s.set(r,e),l.replace({...l.location,search:s.toString()})}),[r,l])]}function j(e){const{defaultValue:s,queryString:n=!1,groupId:l}=e,r=h(e),[i,c]=(0,a.useState)((()=>function(e){let{defaultValue:s,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!u({value:s,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:s,tabValues:r}))),[m,d]=p({queryString:n,groupId:l}),[j,x]=function(e){let{groupId:s}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(s),[l,r]=(0,o.Dv)(n);return[l,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:l}),g=(()=>{const e=m??j;return u({value:e,tabValues:r})?e:null})();(0,t.A)((()=>{g&&c(g)}),[g]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!u({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),x(e)}),[d,x,r]),tabValues:r}}var x=n(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(74848);function N(e){let{className:s,block:n,selectedValue:a,selectValue:i,tabValues:t}=e;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,r.a_)(),o=e=>{const s=e.currentTarget,n=c.indexOf(s),l=t[n].value;l!==a&&(m(s),i(l))},d=e=>{let s=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;s=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;s=c[n]??c[c.length-1];break}}s?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},s),children:t.map((e=>{let{value:s,label:n,attributes:r}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:a===s?0:-1,"aria-selected":a===s,ref:e=>c.push(e),onKeyDown:d,onClick:o,...r,className:(0,l.A)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":a===s}),children:n??s},s)}))})}function b(e){let{lazy:s,children:n,selectedValue:r}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(s){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,s)=>(0,a.cloneElement)(e,{key:s,hidden:e.props.value!==r})))})}function v(e){const s=j(e);return(0,f.jsxs)("div",{className:(0,l.A)("tabs-container",g.tabList),children:[(0,f.jsx)(N,{...s,...e}),(0,f.jsx)(b,{...s,...e})]})}function y(e){const s=(0,x.A)();return(0,f.jsx)(v,{...e,children:d(e.children)},String(s))}},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>t});var a=n(96540);const l={},r=a.createContext(l);function i(e){const s=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),a.createElement(r.Provider,{value:s},e.children)}}}]);