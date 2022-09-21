"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[2260],{3905:(e,a,t)=>{t.d(a,{Zo:()=>i,kt:()=>k});var n=t(7294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=n.createContext({}),o=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):m(m({},a),e)),t},i=function(e){var a=o(e.components);return n.createElement(l.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},N=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),N=o(t),k=s,u=N["".concat(l,".").concat(k)]||N[k]||c[k]||r;return t?n.createElement(u,m(m({ref:a},i),{},{components:t})):n.createElement(u,m({ref:a},i))}));function k(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=t.length,m=new Array(r);m[0]=N;var p={};for(var l in a)hasOwnProperty.call(a,l)&&(p[l]=a[l]);p.originalType=e,p.mdxType="string"==typeof e?e:s,m[1]=p;for(var o=2;o<r;o++)m[o]=t[o];return n.createElement.apply(null,m)}return n.createElement.apply(null,t)}N.displayName="MDXCreateElement"},5162:(e,a,t)=>{t.d(a,{Z:()=>m});var n=t(7294),s=t(6010);const r="tabItem_Ymn6";function m(e){let{children:a,hidden:t,className:m}=e;return n.createElement("div",{role:"tabpanel",className:(0,s.Z)(r,m),hidden:t},a)}},5488:(e,a,t)=>{t.d(a,{Z:()=>k});var n=t(7462),s=t(7294),r=t(6010),m=t(2389),p=t(7392),l=t(7094),o=t(2466);const i="tabList__CuJ",c="tabItem_LNqP";function N(e){var a;const{lazy:t,block:m,defaultValue:N,values:k,groupId:u,className:d}=e,h=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=k??h.map((e=>{let{props:{value:a,label:t,attributes:n}}=e;return{value:a,label:t,attributes:n}})),y=(0,p.l)(g,((e,a)=>e.value===a.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===N?N:N??(null==(a=h.find((e=>e.props.default)))?void 0:a.props.value)??h[0].props.value;if(null!==f&&!g.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:v}=(0,l.U)(),[w,j]=(0,s.useState)(f),O=[],{blockElementScrollPositionUntilNextRender:x}=(0,o.o5)();if(null!=u){const e=b[u];null!=e&&e!==w&&g.some((a=>a.value===e))&&j(e)}const T=e=>{const a=e.currentTarget,t=O.indexOf(a),n=g[t].value;n!==w&&(x(a),j(n),null!=u&&v(u,String(n)))},C=e=>{var a;let t=null;switch(e.key){case"ArrowRight":{const a=O.indexOf(e.currentTarget)+1;t=O[a]??O[0];break}case"ArrowLeft":{const a=O.indexOf(e.currentTarget)-1;t=O[a]??O[O.length-1];break}}null==(a=t)||a.focus()};return s.createElement("div",{className:(0,r.Z)("tabs-container",i)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":m},d)},g.map((e=>{let{value:a,label:t,attributes:m}=e;return s.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===a?0:-1,"aria-selected":w===a,key:a,ref:e=>O.push(e),onKeyDown:C,onFocus:T,onClick:T},m,{className:(0,r.Z)("tabs__item",c,null==m?void 0:m.className,{"tabs__item--active":w===a})}),t??a)}))),t?(0,s.cloneElement)(h.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},h.map(((e,a)=>(0,s.cloneElement)(e,{key:a,hidden:e.props.value!==w})))))}function k(e){const a=(0,m.Z)();return s.createElement(N,(0,n.Z)({key:String(a)},e))}},2348:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>l,default:()=>k,frontMatter:()=>p,metadata:()=>o,toc:()=>c});var n=t(7462),s=(t(7294),t(3905)),r=t(5488),m=t(5162);const p={title:"Coin Change II"},l=void 0,o={unversionedId:"dp/knapsack-problem/coin-change-ii",id:"dp/knapsack-problem/coin-change-ii",title:"Coin Change II",description:"\u95ee\u9898\u63cf\u8ff0",source:"@site/docs/dp/knapsack-problem/coin-change-ii.md",sourceDirName:"dp/knapsack-problem",slug:"/dp/knapsack-problem/coin-change-ii",permalink:"/dp/knapsack-problem/coin-change-ii",draft:!1,tags:[],version:"current",frontMatter:{title:"Coin Change II"},sidebar:"docs",previous:{title:"Coin Change",permalink:"/dp/knapsack-problem/coin-change"},next:{title:"Perfect Squares",permalink:"/dp/knapsack-problem/perfect-squares"}},i={},c=[{value:"\u95ee\u9898\u63cf\u8ff0",id:"\u95ee\u9898\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}],N={toc:c};function k(e){let{components:a,...t}=e;return(0,s.kt)("wrapper",(0,n.Z)({},N,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h3",{id:"\u95ee\u9898\u63cf\u8ff0"},"\u95ee\u9898\u63cf\u8ff0"),(0,s.kt)("p",null,"Given an integer array ",(0,s.kt)("inlineCode",{parentName:"p"},"coins")," representing coins of different denominations and an integer ",(0,s.kt)("inlineCode",{parentName:"p"},"amount")," representing a total amount of money."),(0,s.kt)("p",null,"Return the number of combinations that make up that amount. If that amount of money cannot be made up by any combination of the coins, return 0."),(0,s.kt)("p",null,"You may assume that you have an infinite number of each kind of coin."),(0,s.kt)("p",null,"The answer is guaranteed to fit into a signed 32-bit integer."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 1"),":"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Input"),": amount = 5, coins = ","[1,2,5]",(0,s.kt)("br",{parentName:"p"}),"\n",(0,s.kt)("strong",{parentName:"p"},"Output"),": 4",(0,s.kt)("br",{parentName:"p"}),"\n",(0,s.kt)("strong",{parentName:"p"},"Explanation"),": there are four ways to make up the amount:",(0,s.kt)("br",{parentName:"p"}),"\n","5=5",(0,s.kt)("br",{parentName:"p"}),"\n","5=2+2+1",(0,s.kt)("br",{parentName:"p"}),"\n","5=2+1+1+1",(0,s.kt)("br",{parentName:"p"}),"\n","5=1+1+1+1+1")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 2"),":"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Input"),": amount = 3, coins = ","[2]",(0,s.kt)("br",{parentName:"p"}),"\n",(0,s.kt)("strong",{parentName:"p"},"Output"),": 0",(0,s.kt)("br",{parentName:"p"}),"\n",(0,s.kt)("strong",{parentName:"p"},"Explanation"),": the amount of 3 cannot be made up just with coins of 2.")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 3"),":"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Input"),": amount = 10, coins = ","[10]",(0,s.kt)("br",{parentName:"p"}),"\n",(0,s.kt)("strong",{parentName:"p"},"Output"),": 1")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Constraints"),":"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"1 <= coins.length <= 300"),(0,s.kt)("li",{parentName:"ul"},"1 <= coins","[i]"," <= 5000"),(0,s.kt)("li",{parentName:"ul"},"Each coin is unique"),(0,s.kt)("li",{parentName:"ul"},"0 <= amount <= 5000")),(0,s.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,s.kt)("p",null,"\u672c\u9898\u4e0e",(0,s.kt)("a",{parentName:"p",href:"/dp/knapsack-problem/coin-change"},"Coin Change"),"\u5f88\u7c7b\u4f3c\uff0c\u552f\u4e00\u7684\u53d8\u5316\u662f\u672c\u9898\u8981\u6c42\u7684\u662f\u7ec4\u5408\u6570\uff0c\u800c\u4e0d\u662f\u6700\u5c0f\u7684\u786c\u5e01\u6570\u3002"),(0,s.kt)("p",null,"\u4ee4\u51fd\u6570",(0,s.kt)("inlineCode",{parentName:"p"},"f(j)"),"\u8868\u793a\u53ef\u4ee5\u51d1\u51fa\u91d1\u989d ",(0,s.kt)("inlineCode",{parentName:"p"},"j"),"\u7684\u7ec4\u5408\u6570\uff0c\u6bcf\u65b0\u589e\u4e00\u4e2a\u786c\u5e01\uff0c\u5c31\u591a\u4e86\u4e00\u6761\u5230\u8fbe",(0,s.kt)("inlineCode",{parentName:"p"},"j"),"\u7684\u8def\u5f84\uff0c\u56e0\u6b64\u72b6\u6001\u8f6c\u79fb\u65b9\u7a0b\u5982\u4e0b\uff1a"),(0,s.kt)("div",{className:"math math-display"},(0,s.kt)("span",{parentName:"div",className:"katex-display"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"f"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"j"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mrow",{parentName:"mrow"},(0,s.kt)("mo",{parentName:"mrow",fence:"true"},"{"),(0,s.kt)("mtable",{parentName:"mrow",rowspacing:"0.36em",columnalign:"left left",columnspacing:"1em"},(0,s.kt)("mtr",{parentName:"mtable"},(0,s.kt)("mtd",{parentName:"mtr"},(0,s.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,s.kt)("mn",{parentName:"mstyle"},"1"))),(0,s.kt)("mtd",{parentName:"mtr"},(0,s.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,s.kt)("mrow",{parentName:"mstyle"},(0,s.kt)("mi",{parentName:"mrow"},"j"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mn",{parentName:"mrow"},"0"))))),(0,s.kt)("mtr",{parentName:"mtable"},(0,s.kt)("mtd",{parentName:"mtr"},(0,s.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,s.kt)("mrow",{parentName:"mstyle"},(0,s.kt)("mi",{parentName:"mrow"},"f"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"j"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,s.kt)("mo",{parentName:"mrow"},"+"),(0,s.kt)("mi",{parentName:"mrow"},"f"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"j"),(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("mi",{parentName:"mrow"},"c"),(0,s.kt)("mi",{parentName:"mrow"},"o"),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")))),(0,s.kt)("mtd",{parentName:"mtr"},(0,s.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,s.kt)("mrow",{parentName:"mstyle"},(0,s.kt)("mi",{parentName:"mrow"},"c"),(0,s.kt)("mi",{parentName:"mrow"},"o"),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow"},"\u2208"),(0,s.kt)("mi",{parentName:"mrow"},"c"),(0,s.kt)("mi",{parentName:"mrow"},"o"),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mi",{parentName:"mrow"},"s")))))))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"f(j)=\\begin{cases} 1 & j=0 \\\\ f(j)+f(j-coin) & coin \\in coins \\end{cases}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"3em",verticalAlign:"-1.25em"}}),(0,s.kt)("span",{parentName:"span",className:"minner"},(0,s.kt)("span",{parentName:"span",className:"mopen delimcenter",style:{top:"0em"}},(0,s.kt)("span",{parentName:"span",className:"delimsizing size4"},"{")),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mtable"},(0,s.kt)("span",{parentName:"span",className:"col-align-l"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.69em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.69em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.008em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"1"))),(0,s.kt)("span",{parentName:"span",style:{top:"-2.25em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.008em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"co"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"in"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.19em"}},(0,s.kt)("span",{parentName:"span"}))))),(0,s.kt)("span",{parentName:"span",className:"arraycolsep",style:{width:"1em"}}),(0,s.kt)("span",{parentName:"span",className:"col-align-l"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.69em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.69em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.008em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"0"))),(0,s.kt)("span",{parentName:"span",style:{top:"-2.25em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.008em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"co"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"in"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2208"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"co"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"in"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s")))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.19em"}},(0,s.kt)("span",{parentName:"span"}))))))),(0,s.kt)("span",{parentName:"span",className:"mclose nulldelimiter"}))))))),(0,s.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,s.kt)(r.Z,{defaultValue:"cpp",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,s.kt)(m.Z,{value:"python",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"TODO\n"))),(0,s.kt)(m.Z,{value:"java",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"TODO\n"))),(0,s.kt)(m.Z,{value:"cpp",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"// Time Complexity: O(N*amount)\n// Space Complexity: O(amount)\nclass Solution {\npublic:\n    int change(int amount, vector<int>& coins) {\n        vector<int> dp(amount + 1, 0);\n        dp[0] = 1;\n        for (auto coin : coins) {\n            for (int j = coin; j <= amount; ++j) {\n                dp[j] += dp[j - coin];\n            }\n        }\n        return dp[amount];\n    }\n};\n")))))}k.isMDXComponent=!0}}]);