"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[2617],{1105:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"dp/best-time-to-buy-and-sell-stock-with-cooldown","title":"Best Time to Buy and Sell Stock with Cooldown","description":"\u63cf\u8ff0","source":"@site/docs/dp/best-time-to-buy-and-sell-stock-with-cooldown.md","sourceDirName":"dp","slug":"/dp/best-time-to-buy-and-sell-stock-with-cooldown","permalink":"/dp/best-time-to-buy-and-sell-stock-with-cooldown","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Best Time to Buy and Sell Stock with Cooldown"},"sidebar":"docs","previous":{"title":"Best Time to Buy and Sell Stock IV","permalink":"/dp/best-time-to-buy-and-sell-stock-iv"},"next":{"title":"Interleaving String","permalink":"/dp/interleaving-string"}}');var t=l(74848),s=l(28453);const o={title:"Best Time to Buy and Sell Stock with Cooldown"},c=void 0,r={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801 1 O(n)\u7a7a\u95f4",id:"\u4ee3\u7801-1-on\u7a7a\u95f4",level:3},{value:"\u4ee3\u7801 2 O(1)\u7a7a\u95f4",id:"\u4ee3\u7801-2-o1\u7a7a\u95f4",level:3}];function a(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,t.jsxs)(n.p,{children:["Almost the ame as ",(0,t.jsx)(n.a,{href:"/greedy/best-time-to-buy-and-sell-stock-ii",children:"Best Time to Buy and Sell Stock II"})," but with one restriction: after you sell your stock, you cannot buy stock on next day. (ie, cooldown 1 day)."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Example"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"prices = [1, 2, 3, 0, 2]\nmaxProfit = 3\ntransactions = [buy, sell, cooldown, buy, sell]\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd9\u9898\u6bd4",(0,t.jsx)(n.a,{href:"/greedy/best-time-to-buy-and-sell-stock-ii",children:"Best Time to Buy and Sell Stock II"}),"\u591a\u4e86\u4e00\u4e2a cooldown \u7684\u6761\u4ef6\uff0c\u5c31\u53d8\u5f97\u9ebb\u70e6\u591a\u4e86\u3002\u8fd9\u9898\u662f\u4e00\u4e2a\u591a\u9636\u6bb5\u4f18\u5316\u95ee\u9898\uff0c\u9996\u5148\u8303\u56f4\u7f29\u5c0f\u5230\u5e7f\u641c\uff0c\u8d2a\u5fc3\u6216\u8005\u52a8\u89c4\u3002\u56e0\u4e3a\u6bcf\u6b65\u4e4b\u95f4\u4e92\u76f8\u7275\u8fde\uff0c\u8d2a\u5fc3\u663e\u7136\u4e0d\u884c\u3002\u5e7f\u641c\u56fa\u7136\u53ef\u4ee5\uff0c\u4e0d\u8fc7\u662f",(0,t.jsx)(n.code,{children:"O(2^n)"}),"\u590d\u6742\u5ea6\uff0c\u6240\u4ee5\u6211\u4eec\u5148\u8003\u8651\u7528\u52a8\u89c4\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5bf9\u4e8e\u6bcf\u4e00\u5929\uff0c\u6709\u4e09\u79cd\u52a8\u4f5c\uff0cbuy, sell, cooldown, sell \u548c cooldown \u53ef\u4ee5\u5408\u5e76\u6210\u4e00\u79cd\u72b6\u6001\uff0c\u56e0\u4e3a\u624b\u91cc\u6700\u7ec8\u6ca1\u6709\u80a1\u7968\u3002\u6700\u7ec8\u9700\u8981\u7684\u7ed3\u679c\u662f sell\uff0c\u5373\u624b\u91cc\u80a1\u7968\u5356\u4e86\u83b7\u5f97\u6700\u5927\u5229\u6da6\u3002\u6211\u4eec\u53ef\u4ee5\u7528\u4e24\u4e2a\u6570\u7ec4\u6765\u8bb0\u5f55\u5f53\u524d\u6301\u80a1\u548c\u672a\u6301\u80a1\u7684\u72b6\u6001\uff0c\u4ee4",(0,t.jsx)(n.code,{children:"sell[i]"})," \u8868\u793a\u7b2c i \u5929\u672a\u6301\u80a1\u65f6\uff0c\u83b7\u5f97\u7684\u6700\u5927\u5229\u6da6\uff0c",(0,t.jsx)(n.code,{children:"buy[i]"}),"\u8868\u793a\u7b2c i \u5929\u6301\u6709\u80a1\u7968\u65f6\uff0c\u83b7\u5f97\u7684\u6700\u5927\u5229\u6da6\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5bf9\u4e8e",(0,t.jsx)(n.code,{children:"sell[i]"}),"\uff0c\u6700\u5927\u5229\u6da6\u6709\u4e24\u79cd\u53ef\u80fd\uff0c\u4e00\u662f\u4eca\u5929\u6ca1\u52a8\u4f5c\u8ddf\u6628\u5929\u672a\u6301\u80a1\u72b6\u6001\u4e00\u6837\uff0c\u4e8c\u662f\u4eca\u5929\u5356\u4e86\u80a1\u7968\uff0c\u6240\u4ee5\u72b6\u6001\u8f6c\u79fb\u65b9\u7a0b\u5982\u4e0b\uff1a"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"sell[i] = max{sell[i - 1], buy[i-1] + prices[i]}"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5bf9\u4e8e",(0,t.jsx)(n.code,{children:"buy[i]"}),"\uff0c\u6700\u5927\u5229\u6da6\u6709\u4e24\u79cd\u53ef\u80fd\uff0c\u4e00\u662f\u4eca\u5929\u6ca1\u52a8\u4f5c\u8ddf\u6628\u5929\u6301\u80a1\u72b6\u6001\u4e00\u6837\uff0c\u4e8c\u662f\u524d\u5929\u5356\u4e86\u80a1\u7968\uff0c\u4eca\u5929\u4e70\u4e86\u80a1\u7968\uff0c\u56e0\u4e3a cooldown \u53ea\u80fd\u9694\u5929\u4ea4\u6613\uff0c\u6240\u4ee5\u4eca\u5929\u4e70\u80a1\u7968\u8981\u8ffd\u6eaf\u5230\u524d\u5929\u7684\u72b6\u6001\u3002\u72b6\u6001\u8f6c\u79fb\u65b9\u7a0b\u5982\u4e0b\uff1a"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"buy[i] = max{buy[i-1], sell[i-2] - prices[i]}"})}),"\n",(0,t.jsxs)(n.p,{children:["\u6700\u7ec8\u6211\u4eec\u8981\u6c42\u7684\u7ed3\u679c\u662f",(0,t.jsx)(n.code,{children:"sell[n - 1]"}),"\uff0c\u8868\u793a\u6700\u540e\u4e00\u5929\u7ed3\u675f\u65f6\uff0c\u624b\u91cc\u6ca1\u6709\u80a1\u7968\u65f6\u7684\u6700\u5927\u5229\u6da6\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd9\u4e2a\u7b97\u6cd5\u7684\u7a7a\u95f4\u590d\u6742\u5ea6\u662f",(0,t.jsx)(n.code,{children:"O(n)"}),"\uff0c\u4e0d\u8fc7\u7531\u4e8e",(0,t.jsx)(n.code,{children:"sell[i]"}),"\u4ec5\u4ec5\u4f9d\u8d56\u524d\u4e00\u9879\uff0c",(0,t.jsx)(n.code,{children:"buy[i]"}),"\u4ec5\u4ec5\u4f9d\u8d56\u524d\u4e24\u9879\uff0c\u6240\u4ee5\u53ef\u4ee5\u4f18\u5316\u5230",(0,t.jsx)(n.code,{children:"O(1)"}),"\uff0c\u5177\u4f53\u89c1\u7b2c\u4e8c\u79cd\u4ee3\u7801\u5b9e\u73b0\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"\u4ee3\u7801-1-on\u7a7a\u95f4",children:"\u4ee3\u7801 1 O(n)\u7a7a\u95f4"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"// Best Time to Buy and Sell Stock with Cooldown\n// Time Complexity: O(n), Space Complexity: O(n)\npublic class Solution {\n    public int maxProfit(int[] prices) {\n        if (prices == null || prices.length == 0) return 0;\n\n        int[] sell = new int[prices.length];\n        int[] buy = new int[prices.length];\n        sell[0] = 0;\n        buy[0] = -prices[0];\n\n        for (int i = 1; i < prices.length; ++i) {\n            sell[i] = Math.max(sell[i - 1], buy[i - 1] + prices[i]);\n            buy[i] = Math.max(buy[i - 1], (i > 1 ? sell[i - 2] : 0) - prices[i]);\n        }\n        return sell[prices.length - 1];\n    }\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u4ee3\u7801-2-o1\u7a7a\u95f4",children:"\u4ee3\u7801 2 O(1)\u7a7a\u95f4"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"// Best Time to Buy and Sell Stock with Cooldown\n// Time Complexity: O(n), Space Complexity: O(1)\npublic class Solution {\n    public int maxProfit(int[] prices) {\n        if (prices == null || prices.length == 0) return 0;\n\n        int curSell = 0;   // sell[i]\n        int prevSell = 0;  // sell[i-2]\n        int buy = -prices[0]; // buy[i]\n\n        for (int i = 1; i < prices.length; ++i) {\n            final int tmp = curSell;\n            curSell = Math.max(curSell, buy + prices[i]);\n            buy = Math.max(buy, (i > 1 ? prevSell : 0) - prices[i]);\n            prevSell = tmp;\n        }\n        return curSell;\n    }\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,n,l)=>{l.d(n,{R:()=>o,x:()=>c});var i=l(96540);const t={},s=i.createContext(t);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);