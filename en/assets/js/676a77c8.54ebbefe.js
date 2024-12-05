"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[338],{78037:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"dp/best-time-to-buy-and-sell-stock-iv","title":"Best Time to Buy and Sell Stock IV","description":"\u63cf\u8ff0","source":"@site/docs/dp/best-time-to-buy-and-sell-stock-iv.md","sourceDirName":"dp","slug":"/dp/best-time-to-buy-and-sell-stock-iv","permalink":"/en/dp/best-time-to-buy-and-sell-stock-iv","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Best Time to Buy and Sell Stock IV"},"sidebar":"docs","previous":{"title":"Best Time to Buy and Sell Stock III","permalink":"/en/dp/best-time-to-buy-and-sell-stock-iii"},"next":{"title":"Best Time to Buy and Sell Stock with Cooldown","permalink":"/en/dp/best-time-to-buy-and-sell-stock-with-cooldown"}}');var l=i(74848),o=i(28453);const s={title:"Best Time to Buy and Sell Stock IV"},c=void 0,r={},a=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u89e3\u6cd51",id:"\u89e3\u6cd51",level:3},{value:"\u89e3\u6cd52 \u6700\u957fm\u6bb5\u5b50\u6bb5\u548c",id:"\u89e3\u6cd52-\u6700\u957fm\u6bb5\u5b50\u6bb5\u548c",level:3}];function d(e){const n={code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,l.jsxs)(n.p,{children:["Say you have an array for which the i-th element is the price of a given stock on day ",(0,l.jsx)(n.code,{children:"i"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["Design an algorithm to find the maximum profit. You may complete at most ",(0,l.jsx)(n.code,{children:"k"})," transactions."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Note"}),":\nYou may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again)."]}),"\n",(0,l.jsx)(n.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,l.jsxs)(n.p,{children:["\u8bbe\u4e24\u4e2a\u72b6\u6001\uff0c",(0,l.jsx)(n.code,{children:"global[i][j]"})," \u8868\u793ai\u5929\u524d\u6700\u591a\u53ef\u4ee5\u8fdb\u884cj\u6b21\u4ea4\u6613\u7684\u6700\u5927\u5229\u6da6\uff0c",(0,l.jsx)(n.code,{children:"local[i][j]"}),"\u8868\u793ai\u5929\u524d\u6700\u591a\u53ef\u4ee5\u8fdb\u884cj\u6b21\u4ea4\u6613\uff0c\u4e14\u5728\u7b2ci\u5929\u8fdb\u884c\u4e86\u7b2cj\u6b21\u4ea4\u6613\u7684\u6700\u5927\u5229\u6da6\u3002\u72b6\u6001\u8f6c\u79fb\u65b9\u7a0b\u5982\u4e0b\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"local[i][j] = max(global[i-1][j-1] + max(diff,0), local[i-1][j]+diff)\nglobal[i][j] = max(local[i][j], global[i-1][j])\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u5173\u4e8e",(0,l.jsx)(n.code,{children:"global"}),"\u7684\u72b6\u6001\u8f6c\u79fb\u65b9\u7a0b\u6bd4\u8f83\u7b80\u5355\uff0c\u4e0d\u65ad\u5730\u548c\u5df2\u7ecf\u8ba1\u7b97\u51fa\u7684local\u8fdb\u884c\u6bd4\u8f83\uff0c\u628a\u5927\u7684\u4fdd\u5b58\u5728global\u4e2d\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u5173\u4e8e",(0,l.jsx)(n.code,{children:"local"}),"\u7684\u72b6\u6001\u8f6c\u79fb\u65b9\u7a0b\uff0c\u53d6\u4e0b\u9762\u4e8c\u8005\u4e2d\u8f83\u5927\u7684\u4e00\u4e2a\uff1a"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u5168\u5c40\u524d",(0,l.jsx)(n.code,{children:"i-1"}),"\u5929\u8fdb\u884c\u4e86",(0,l.jsx)(n.code,{children:"j-1"}),"\u6b21\u4ea4\u6613\uff0c\u7136\u540e\u7136\u540e\u52a0\u4e0a\u4eca\u5929\u7684\u4ea4\u6613\u4ea7\u751f\u7684\u5229\u6da6\uff08\u5982\u679c\u8d5a\u94b1\u5c31\u4ea4\u6613\uff0c\u4e0d\u8d5a\u94b1\u5c31\u4e0d\u4ea4\u6613\uff0c\u4ec0\u4e48\u4e5f\u4e0d\u53d1\u751f\uff0c\u5229\u6da6\u662f0\uff09"]}),"\n",(0,l.jsxs)(n.li,{children:["\u5c40\u90e8\u524d",(0,l.jsx)(n.code,{children:"i-1"}),"\u5929\u8fdb\u884c\u4e86",(0,l.jsx)(n.code,{children:"j"}),"\u6b21\u4ea4\u6613\uff0c\u7136\u540e\u52a0\u4e0a\u4eca\u5929\u7684\u5dee\u4ef7\uff08",(0,l.jsx)(n.code,{children:"local[i-1][j]"}),"\u662f\u7b2c",(0,l.jsx)(n.code,{children:"i-1"}),"\u5929\u5356\u51fa\u7684\u4ea4\u6613\uff0c\u5b83\u52a0\u4e0adiff\u540e\u53d8\u6210\u7b2c",(0,l.jsx)(n.code,{children:"i"}),"\u5929\u5356\u51fa\uff0c\u5e76\u4e0d\u4f1a\u589e\u52a0\u4ea4\u6613\u6b21\u6570\u3002\u65e0\u8bba",(0,l.jsx)(n.code,{children:"diff"}),"\u662f\u6b63\u8fd8\u662f\u8d1f\u90fd\u8981\u52a0\u4e0a\uff0c\u5426\u5219\u5c31\u4e0d\u6ee1\u8db3",(0,l.jsx)(n.code,{children:"local[i][j]"}),"\u5fc5\u987b\u5728\u6700\u540e\u4e00\u5929\u5356\u51fa\u7684\u6761\u4ef6\u4e86\uff09"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u6ce8\u610f\uff0c\u5f53",(0,l.jsx)(n.code,{children:"k"}),'\u5927\u4e8e\u6570\u7ec4\u7684\u5927\u5c0f\u65f6\uff0c\u4e0a\u8ff0\u7b97\u6cd5\u5c06\u53d8\u5f97\u4f4e\u6548\uff0c\u6b64\u65f6\u53ef\u4ee5\u6539\u4e3a\u4e0d\u9650\u4ea4\u6613\u6b21\u6570\u7684\u65b9\u5f0f\u89e3\u51b3\uff0c\u5373\u7b49\u4ef7\u4e8e "Best Time to Buy and Sell Stock II"\u3002']}),"\n",(0,l.jsx)(n.h3,{id:"\u89e3\u6cd51",children:"\u89e3\u6cd51"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:"// Best Time to Buy and Sell Stock IV\n// Time Complexity: O(nk), Space Complexity: O(nk)\npublic class Solution {\n    public int maxProfit(final int k, final int[] prices) {\n        if (prices.length < 2 || k < 1) return 0;\n        if (k >= prices.length) return maxProfit(prices);\n\n        final int[][] local = new int[prices.length][k + 1];\n        final int[][] global = new int[prices.length][k + 1];\n\n        for (int i = 1; i < prices.length; i++) {\n            final int diff = prices[i] - prices[i - 1];\n            for (int j = 1; j < k+1; j++) {\n                local[i][j] = Math.max(\n                        global[i - 1][j - 1] + Math.max(diff, 0),\n                        local[i - 1][j] + diff);\n                global[i][j] = Math.max(global[i - 1][j], local[i][j]);\n            }\n        }\n\n        return global[prices.length - 1][k];\n    }\n\n    // Best Time to Buy and Sell Stock II\n    public static int maxProfit(final int[] prices) {\n        int sum = 0;\n        for (int i = 1; i < prices.length; i++) {\n            int diff = prices[i] - prices[i - 1];\n            if (diff > 0) sum += diff;\n        }\n        return sum;\n    }\n}\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u89e3\u6cd52-\u6700\u957fm\u6bb5\u5b50\u6bb5\u548c",children:"\u89e3\u6cd52 \u6700\u957fm\u6bb5\u5b50\u6bb5\u548c"})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>c});var t=i(96540);const l={},o=t.createContext(l);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);