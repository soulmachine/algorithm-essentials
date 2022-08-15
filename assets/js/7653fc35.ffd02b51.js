"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[2068],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var l=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,l,i=function(e,t){if(null==e)return{};var n,l,i={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=l.createContext({}),s=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return l.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,y=d["".concat(p,".").concat(m)]||d[m]||u[m]||r;return n?l.createElement(y,o(o({ref:t},c),{},{components:n})):l.createElement(y,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var s=2;s<r;s++)o[s]=n[s];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6402:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>s});var l=n(7462),i=(n(7294),n(3905));const r={title:"Best Time to Buy and Sell Stock with Cooldown"},o=void 0,a={unversionedId:"dp/best-time-to-buy-and-sell-stock-with-cooldown",id:"dp/best-time-to-buy-and-sell-stock-with-cooldown",title:"Best Time to Buy and Sell Stock with Cooldown",description:"\u63cf\u8ff0",source:"@site/docs/dp/best-time-to-buy-and-sell-stock-with-cooldown.md",sourceDirName:"dp",slug:"/dp/best-time-to-buy-and-sell-stock-with-cooldown",permalink:"/dp/best-time-to-buy-and-sell-stock-with-cooldown",draft:!1,editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/dp/best-time-to-buy-and-sell-stock-with-cooldown.md",tags:[],version:"current",frontMatter:{title:"Best Time to Buy and Sell Stock with Cooldown"},sidebar:"someSidebar",previous:{title:"Best Time to Buy and Sell Stock IV",permalink:"/dp/best-time-to-buy-and-sell-stock-iv"},next:{title:"Interleaving String",permalink:"/dp/interleaving-string"}},p={},s=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801 1 O(n)\u7a7a\u95f4",id:"\u4ee3\u7801-1-on\u7a7a\u95f4",level:3},{value:"\u4ee3\u7801 2 O(1)\u7a7a\u95f4",id:"\u4ee3\u7801-2-o1\u7a7a\u95f4",level:3}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,l.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,i.kt)("p",null,"Almost the ame as ",(0,i.kt)("a",{parentName:"p",href:"/greedy/best-time-to-buy-and-sell-stock-ii"},"Best Time to Buy and Sell Stock II")," but with one restriction: after you sell your stock, you cannot buy stock on next day. (ie, cooldown 1 day)."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"prices = [1, 2, 3, 0, 2]\nmaxProfit = 3\ntransactions = [buy, sell, cooldown, buy, sell]\n")),(0,i.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,i.kt)("p",null,"\u8fd9\u9898\u6bd4",(0,i.kt)("a",{parentName:"p",href:"/greedy/best-time-to-buy-and-sell-stock-ii"},"Best Time to Buy and Sell Stock II"),"\u591a\u4e86\u4e00\u4e2a cooldown \u7684\u6761\u4ef6\uff0c\u5c31\u53d8\u5f97\u9ebb\u70e6\u591a\u4e86\u3002\u8fd9\u9898\u662f\u4e00\u4e2a\u591a\u9636\u6bb5\u4f18\u5316\u95ee\u9898\uff0c\u9996\u5148\u8303\u56f4\u7f29\u5c0f\u5230\u5e7f\u641c\uff0c\u8d2a\u5fc3\u6216\u8005\u52a8\u89c4\u3002\u56e0\u4e3a\u6bcf\u6b65\u4e4b\u95f4\u4e92\u76f8\u7275\u8fde\uff0c\u8d2a\u5fc3\u663e\u7136\u4e0d\u884c\u3002\u5e7f\u641c\u56fa\u7136\u53ef\u4ee5\uff0c\u4e0d\u8fc7\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"O(2^n)"),"\u590d\u6742\u5ea6\uff0c\u6240\u4ee5\u6211\u4eec\u5148\u8003\u8651\u7528\u52a8\u89c4\u3002"),(0,i.kt)("p",null,"\u5bf9\u4e8e\u6bcf\u4e00\u5929\uff0c\u6709\u4e09\u79cd\u52a8\u4f5c\uff0cbuy, sell, cooldown, sell \u548c cooldown \u53ef\u4ee5\u5408\u5e76\u6210\u4e00\u79cd\u72b6\u6001\uff0c\u56e0\u4e3a\u624b\u91cc\u6700\u7ec8\u6ca1\u6709\u80a1\u7968\u3002\u6700\u7ec8\u9700\u8981\u7684\u7ed3\u679c\u662f sell\uff0c\u5373\u624b\u91cc\u80a1\u7968\u5356\u4e86\u83b7\u5f97\u6700\u5927\u5229\u6da6\u3002\u6211\u4eec\u53ef\u4ee5\u7528\u4e24\u4e2a\u6570\u7ec4\u6765\u8bb0\u5f55\u5f53\u524d\u6301\u80a1\u548c\u672a\u6301\u80a1\u7684\u72b6\u6001\uff0c\u4ee4",(0,i.kt)("inlineCode",{parentName:"p"},"sell[i]")," \u8868\u793a\u7b2c i \u5929\u672a\u6301\u80a1\u65f6\uff0c\u83b7\u5f97\u7684\u6700\u5927\u5229\u6da6\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"buy[i]"),"\u8868\u793a\u7b2c i \u5929\u6301\u6709\u80a1\u7968\u65f6\uff0c\u83b7\u5f97\u7684\u6700\u5927\u5229\u6da6\u3002"),(0,i.kt)("p",null,"\u5bf9\u4e8e",(0,i.kt)("inlineCode",{parentName:"p"},"sell[i]"),"\uff0c\u6700\u5927\u5229\u6da6\u6709\u4e24\u79cd\u53ef\u80fd\uff0c\u4e00\u662f\u4eca\u5929\u6ca1\u52a8\u4f5c\u8ddf\u6628\u5929\u672a\u6301\u80a1\u72b6\u6001\u4e00\u6837\uff0c\u4e8c\u662f\u4eca\u5929\u5356\u4e86\u80a1\u7968\uff0c\u6240\u4ee5\u72b6\u6001\u8f6c\u79fb\u65b9\u7a0b\u5982\u4e0b\uff1a"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"sell[i] = max{sell[i - 1], buy[i-1] + prices[i]}")),(0,i.kt)("p",null,"\u5bf9\u4e8e",(0,i.kt)("inlineCode",{parentName:"p"},"buy[i]"),"\uff0c\u6700\u5927\u5229\u6da6\u6709\u4e24\u79cd\u53ef\u80fd\uff0c\u4e00\u662f\u4eca\u5929\u6ca1\u52a8\u4f5c\u8ddf\u6628\u5929\u6301\u80a1\u72b6\u6001\u4e00\u6837\uff0c\u4e8c\u662f\u524d\u5929\u5356\u4e86\u80a1\u7968\uff0c\u4eca\u5929\u4e70\u4e86\u80a1\u7968\uff0c\u56e0\u4e3a cooldown \u53ea\u80fd\u9694\u5929\u4ea4\u6613\uff0c\u6240\u4ee5\u4eca\u5929\u4e70\u80a1\u7968\u8981\u8ffd\u6eaf\u5230\u524d\u5929\u7684\u72b6\u6001\u3002\u72b6\u6001\u8f6c\u79fb\u65b9\u7a0b\u5982\u4e0b\uff1a"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"buy[i] = max{buy[i-1], sell[i-2] - prices[i]}")),(0,i.kt)("p",null,"\u6700\u7ec8\u6211\u4eec\u8981\u6c42\u7684\u7ed3\u679c\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"sell[n - 1]"),"\uff0c\u8868\u793a\u6700\u540e\u4e00\u5929\u7ed3\u675f\u65f6\uff0c\u624b\u91cc\u6ca1\u6709\u80a1\u7968\u65f6\u7684\u6700\u5927\u5229\u6da6\u3002"),(0,i.kt)("p",null,"\u8fd9\u4e2a\u7b97\u6cd5\u7684\u7a7a\u95f4\u590d\u6742\u5ea6\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"O(n)"),"\uff0c\u4e0d\u8fc7\u7531\u4e8e",(0,i.kt)("inlineCode",{parentName:"p"},"sell[i]"),"\u4ec5\u4ec5\u4f9d\u8d56\u524d\u4e00\u9879\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"buy[i]"),"\u4ec5\u4ec5\u4f9d\u8d56\u524d\u4e24\u9879\uff0c\u6240\u4ee5\u53ef\u4ee5\u4f18\u5316\u5230",(0,i.kt)("inlineCode",{parentName:"p"},"O(1)"),"\uff0c\u5177\u4f53\u89c1\u7b2c\u4e8c\u79cd\u4ee3\u7801\u5b9e\u73b0\u3002"),(0,i.kt)("h3",{id:"\u4ee3\u7801-1-on\u7a7a\u95f4"},"\u4ee3\u7801 1 O(n)\u7a7a\u95f4"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Best Time to Buy and Sell Stock with Cooldown\n// Time Complexity: O(n), Space Complexity: O(n)\npublic class Solution {\n    public int maxProfit(int[] prices) {\n        if (prices == null || prices.length == 0) return 0;\n\n        int[] sell = new int[prices.length];\n        int[] buy = new int[prices.length];\n        sell[0] = 0;\n        buy[0] = -prices[0];\n\n        for (int i = 1; i < prices.length; ++i) {\n            sell[i] = Math.max(sell[i - 1], buy[i - 1] + prices[i]);\n            buy[i] = Math.max(buy[i - 1], (i > 1 ? sell[i - 2] : 0) - prices[i]);\n        }\n        return sell[prices.length - 1];\n    }\n}\n")),(0,i.kt)("h3",{id:"\u4ee3\u7801-2-o1\u7a7a\u95f4"},"\u4ee3\u7801 2 O(1)\u7a7a\u95f4"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Best Time to Buy and Sell Stock with Cooldown\n// Time Complexity: O(n), Space Complexity: O(1)\npublic class Solution {\n    public int maxProfit(int[] prices) {\n        if (prices == null || prices.length == 0) return 0;\n\n        int curSell = 0;   // sell[i]\n        int prevSell = 0;  // sell[i-2]\n        int buy = -prices[0]; // buy[i]\n\n        for (int i = 1; i < prices.length; ++i) {\n            final int tmp = curSell;\n            curSell = Math.max(curSell, buy + prices[i]);\n            buy = Math.max(buy, (i > 1 ? prevSell : 0) - prices[i]);\n            prevSell = tmp;\n        }\n        return curSell;\n    }\n}\n")))}u.isMDXComponent=!0}}]);