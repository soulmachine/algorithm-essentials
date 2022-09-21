"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[9143],{3905:(e,a,t)=>{t.d(a,{Zo:()=>o,kt:()=>k});var n=t(7294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function m(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?m(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function r(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},m=Object.keys(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=n.createContext({}),i=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},o=function(e){var a=i(e.components);return n.createElement(l.Provider,{value:a},e.children)},N={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,m=e.originalType,l=e.parentName,o=r(e,["components","mdxType","originalType","parentName"]),c=i(t),k=s,u=c["".concat(l,".").concat(k)]||c[k]||N[k]||m;return t?n.createElement(u,p(p({ref:a},o),{},{components:t})):n.createElement(u,p({ref:a},o))}));function k(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var m=t.length,p=new Array(m);p[0]=c;var r={};for(var l in a)hasOwnProperty.call(a,l)&&(r[l]=a[l]);r.originalType=e,r.mdxType="string"==typeof e?e:s,p[1]=r;for(var i=2;i<m;i++)p[i]=t[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5162:(e,a,t)=>{t.d(a,{Z:()=>p});var n=t(7294),s=t(6010);const m="tabItem_Ymn6";function p(e){let{children:a,hidden:t,className:p}=e;return n.createElement("div",{role:"tabpanel",className:(0,s.Z)(m,p),hidden:t},a)}},5488:(e,a,t)=>{t.d(a,{Z:()=>k});var n=t(7462),s=t(7294),m=t(6010),p=t(2389),r=t(7392),l=t(7094),i=t(2466);const o="tabList__CuJ",N="tabItem_LNqP";function c(e){var a;const{lazy:t,block:p,defaultValue:c,values:k,groupId:u,className:d}=e,h=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=k??h.map((e=>{let{props:{value:a,label:t,attributes:n}}=e;return{value:a,label:t,attributes:n}})),y=(0,r.l)(g,((e,a)=>e.value===a.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===c?c:c??(null==(a=h.find((e=>e.props.default)))?void 0:a.props.value)??h[0].props.value;if(null!==f&&!g.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:v}=(0,l.U)(),[w,C]=(0,s.useState)(f),j=[],{blockElementScrollPositionUntilNextRender:x}=(0,i.o5)();if(null!=u){const e=b[u];null!=e&&e!==w&&g.some((a=>a.value===e))&&C(e)}const O=e=>{const a=e.currentTarget,t=j.indexOf(a),n=g[t].value;n!==w&&(x(a),C(n),null!=u&&v(u,String(n)))},T=e=>{var a;let t=null;switch(e.key){case"ArrowRight":{const a=j.indexOf(e.currentTarget)+1;t=j[a]??j[0];break}case"ArrowLeft":{const a=j.indexOf(e.currentTarget)-1;t=j[a]??j[j.length-1];break}}null==(a=t)||a.focus()};return s.createElement("div",{className:(0,m.Z)("tabs-container",o)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,m.Z)("tabs",{"tabs--block":p},d)},g.map((e=>{let{value:a,label:t,attributes:p}=e;return s.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===a?0:-1,"aria-selected":w===a,key:a,ref:e=>j.push(e),onKeyDown:T,onFocus:O,onClick:O},p,{className:(0,m.Z)("tabs__item",N,null==p?void 0:p.className,{"tabs__item--active":w===a})}),t??a)}))),t?(0,s.cloneElement)(h.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},h.map(((e,a)=>(0,s.cloneElement)(e,{key:a,hidden:e.props.value!==w})))))}function k(e){const a=(0,p.Z)();return s.createElement(c,(0,n.Z)({key:String(a)},e))}},4053:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>k,frontMatter:()=>r,metadata:()=>i,toc:()=>N});var n=t(7462),s=(t(7294),t(3905)),m=t(5488),p=t(5162);const r={title:"Perfect Squares"},l=void 0,i={unversionedId:"dp/knapsack-problem/perfect-squares",id:"dp/knapsack-problem/perfect-squares",title:"Perfect Squares",description:"\u95ee\u9898\u63cf\u8ff0",source:"@site/docs/dp/knapsack-problem/perfect-squares.md",sourceDirName:"dp/knapsack-problem",slug:"/dp/knapsack-problem/perfect-squares",permalink:"/en/dp/knapsack-problem/perfect-squares",draft:!1,tags:[],version:"current",frontMatter:{title:"Perfect Squares"},sidebar:"docs",previous:{title:"Coin Change II",permalink:"/en/dp/knapsack-problem/coin-change-ii"},next:{title:"Combination Sum IV",permalink:"/en/dp/knapsack-problem/combination-sum-iv"}},o={},N=[{value:"\u95ee\u9898\u63cf\u8ff0",id:"\u95ee\u9898\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}],c={toc:N};function k(e){let{components:a,...t}=e;return(0,s.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h3",{id:"\u95ee\u9898\u63cf\u8ff0"},"\u95ee\u9898\u63cf\u8ff0"),(0,s.kt)("p",null,"Given an integer ",(0,s.kt)("inlineCode",{parentName:"p"},"n"),", return the least number of perfect square numbers that sum to ",(0,s.kt)("inlineCode",{parentName:"p"},"n"),"."),(0,s.kt)("p",null,"A ",(0,s.kt)("strong",{parentName:"p"},"perfect square")," is an integer that is the square of an integer; in other words, it is the product of some integer with itself. For example, 1, 4, 9, and 16 are perfect squares while 3 and 11 are not."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 1"),":"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Input"),": n = 12",(0,s.kt)("br",{parentName:"p"}),"\n",(0,s.kt)("strong",{parentName:"p"},"Output"),": 3",(0,s.kt)("br",{parentName:"p"}),"\n",(0,s.kt)("strong",{parentName:"p"},"Explanation"),": 12 = 4 + 4 + 4")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 2"),":"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Input"),": n = 13",(0,s.kt)("br",{parentName:"p"}),"\n",(0,s.kt)("strong",{parentName:"p"},"Output"),": 2",(0,s.kt)("br",{parentName:"p"}),"\n",(0,s.kt)("strong",{parentName:"p"},"Explanation"),": 13 = 4 + 9")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Constraints"),":"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"1 <= n <= ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"0"),(0,s.kt)("mn",{parentName:"msup"},"4"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"10^4")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"0"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"4")))))))))))))),(0,s.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,s.kt)("p",null,"\u5148\u5224\u65ad\u672c\u9898\u662f\u5426\u6ee1\u8db3\u52a8\u89c4\u7684\u4e24\u4e2a\u6761\u4ef6\uff0c"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u4f8b\u5982 ",(0,s.kt)("inlineCode",{parentName:"li"},"n=12")," \u8fd9\u4e2a\u95ee\u9898\uff0c\u5b83\u7684\u6700\u4f18\u89e3\u662f",(0,s.kt)("inlineCode",{parentName:"li"},"12 = 4 + 4 + 4"),"\uff0c\u90a3\u4e48 ",(0,s.kt)("inlineCode",{parentName:"li"},"n=8")," \u8fd9\u4e2a\u5b50\u95ee\u9898\u7684\u7b54\u6848\u5c31\u662f",(0,s.kt)("inlineCode",{parentName:"li"},"n=12"),"\u7684\u7b54\u6848\u51cf1\uff0c\u53732\uff0c\u53ef\u89c1\u7236\u95ee\u9898\u7684\u6700\u4f18\u89e3\u5305\u542b\u4e86\u5b50\u95ee\u9898\u7684\u6700\u4f18\u89e3\uff0c\u56e0\u6b64\u672c\u9898\u5177\u6709\u6700\u4f18\u5b50\u7ed3\u6784\u7684\u6027\u8d28\u3002"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"n=12"),"\u4f9d\u8d56",(0,s.kt)("inlineCode",{parentName:"li"},"n=4"),"\u8fd9\u4e2a\u5b50\u95ee\u9898\uff0c",(0,s.kt)("inlineCode",{parentName:"li"},"n=8"),"\u4e5f\u4f9d\u8d56",(0,s.kt)("inlineCode",{parentName:"li"},"n=4"),"\u8fd9\u4e2a\u5b50\u95ee\u9898\uff0c\u56e0\u6b64\u672c\u9898\u5177\u6709\u91cd\u53e0\u5b50\u95ee\u9898\u7684\u6027\u8d28\u3002")),(0,s.kt)("p",null,"\u53ef\u89c1\u672c\u9898\u6ee1\u8db3\u52a8\u6001\u89c4\u5212\u7684\u4e24\u4e2a\u6761\u4ef6\uff0c\u56e0\u6b64\u53ef\u4ee5\u4f7f\u7528\u52a8\u6001\u89c4\u5212\u6765\u89e3\u51b3\u672c\u9898\u3002"),(0,s.kt)("p",null,"\u7531\u4e8e\u5e73\u65b9\u6570\u53ef\u4ee5\u4f7f\u7528\u65e0\u9650\u6b21\uff0c\u672c\u9898\u662f\u4e00\u4e2a\u5b8c\u5168\u80cc\u5305\u95ee\u9898\uff0c\u4ee4",(0,s.kt)("inlineCode",{parentName:"p"},"f(j)"),"\u8868\u793a\u51d1\u51fa\u603b\u548c",(0,s.kt)("inlineCode",{parentName:"p"},"j"),"\u6240\u9700\u8981\u7684\u5e73\u65b9\u6570\u7684\u6700\u5c11\u4e2a\u6570\uff0c\u53ef\u5f97\u52a8\u6001\u8f6c\u79fb\u65b9\u7a0b\u4e3a\uff1a"),(0,s.kt)("div",{className:"math math-display"},(0,s.kt)("span",{parentName:"div",className:"katex-display"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"f"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"j"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mrow",{parentName:"mrow"},(0,s.kt)("mo",{parentName:"mrow",fence:"true"},"{"),(0,s.kt)("mtable",{parentName:"mrow",rowspacing:"0.36em",columnalign:"left left",columnspacing:"1em"},(0,s.kt)("mtr",{parentName:"mtable"},(0,s.kt)("mtd",{parentName:"mtr"},(0,s.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,s.kt)("mn",{parentName:"mstyle"},"0"))),(0,s.kt)("mtd",{parentName:"mtr"},(0,s.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,s.kt)("mrow",{parentName:"mstyle"},(0,s.kt)("mi",{parentName:"mrow"},"j"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mn",{parentName:"mrow"},"0"))))),(0,s.kt)("mtr",{parentName:"mtable"},(0,s.kt)("mtd",{parentName:"mtr"},(0,s.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,s.kt)("mrow",{parentName:"mstyle"},(0,s.kt)("mi",{parentName:"mrow"},"min"),(0,s.kt)("mo",{parentName:"mrow"},"\u2061"),(0,s.kt)("mrow",{parentName:"mrow"},(0,s.kt)("mo",{parentName:"mrow",fence:"true"},"{"),(0,s.kt)("mi",{parentName:"mrow"},"f"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"j"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mi",{parentName:"mrow"},"f"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"j"),(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mo",{parentName:"mrow"},"\u2217"),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,s.kt)("mo",{parentName:"mrow"},"+"),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow",fence:"true"},"}"))))),(0,s.kt)("mtd",{parentName:"mtr"},(0,s.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,s.kt)("mrow",{parentName:"mstyle"},(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow"},"\u2264"),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msup"},"i"),(0,s.kt)("mn",{parentName:"msup"},"2")),(0,s.kt)("mo",{parentName:"mrow"},"\u2264"),(0,s.kt)("mi",{parentName:"mrow"},"n")))))))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"f(j)=\\begin{cases} 0 & j=0 \\\\ \\min\\left\\{f(j),f(j-i*i)+1\\right\\} & 1 \\leq i^2 \\leq n \\end{cases}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"3em",verticalAlign:"-1.25em"}}),(0,s.kt)("span",{parentName:"span",className:"minner"},(0,s.kt)("span",{parentName:"span",className:"mopen delimcenter",style:{top:"0em"}},(0,s.kt)("span",{parentName:"span",className:"delimsizing size4"},"{")),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mtable"},(0,s.kt)("span",{parentName:"span",className:"col-align-l"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.69em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.69em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.008em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"0"))),(0,s.kt)("span",{parentName:"span",style:{top:"-2.25em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.008em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mop"},"min"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"minner"},(0,s.kt)("span",{parentName:"span",className:"mopen delimcenter",style:{top:"0em"}},"{"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mclose delimcenter",style:{top:"0em"}},"}"))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.19em"}},(0,s.kt)("span",{parentName:"span"}))))),(0,s.kt)("span",{parentName:"span",className:"arraycolsep",style:{width:"1em"}}),(0,s.kt)("span",{parentName:"span",className:"col-align-l"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.69em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.69em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.008em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"0"))),(0,s.kt)("span",{parentName:"span",style:{top:"-2.25em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.008em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2264"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2264"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.19em"}},(0,s.kt)("span",{parentName:"span"}))))))),(0,s.kt)("span",{parentName:"span",className:"mclose nulldelimiter"}))))))),(0,s.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,s.kt)(m.Z,{defaultValue:"cpp",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,s.kt)(p.Z,{value:"python",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"TODO\n"))),(0,s.kt)(p.Z,{value:"java",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"TODO\n"))),(0,s.kt)(p.Z,{value:"cpp",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"// Time Complexity: O(n*sqrt(n))\n// Space Complexity: O(n)\nclass Solution {\npublic:\n    int numSquares(int n) {\n        const int N = floor((double)sqrt(n));\n        vector<int> dp(n+1, n+1);\n        dp[0] = 0; // base case\n\n        for (int i = 1; i * i <= n; ++i) {\n            for (int j = i*i; j <= n; j++) {\n                dp[j] = min(dp[j], dp[j-i*i] + 1);\n            }\n        }\n\n        return dp[n];\n    }\n};\n")))),(0,s.kt)("p",null,"\u5728\u521d\u59cb\u5316 ",(0,s.kt)("inlineCode",{parentName:"p"},"dp")," \u6570\u7ec4\u65f6\uff0c\u672c\u9898\u6c42\u7684\u662f\u6700\u5c11\u6570\u76ee\uff0c\u56e0\u6b64\u8981\u521d\u59cb\u5316\u4e3a ",(0,s.kt)("inlineCode",{parentName:"p"},"INT_MAX"),"\uff0c\u4e0d\u8fc7\u7531\u4e8e\u4ee3\u7801\u540e\u9762\u6709+1\u7684\u64cd\u4f5c\uff0c",(0,s.kt)("inlineCode",{parentName:"p"},"INT_MAX+1")," \u4f1a\u6ea2\u51fa\uff0c\u56e0\u6b64\u7528",(0,s.kt)("inlineCode",{parentName:"p"},"n+1"),"\u4ee3\u66ff",(0,s.kt)("inlineCode",{parentName:"p"},"INT_MAX"),"\u3002\u5f53\u5168\u90e8\u75281\u6765\u51d1\u51fa",(0,s.kt)("inlineCode",{parentName:"p"},"n"),"\u65f6\uff0c\u6240\u9700\u6570\u76ee\u6700\u5927\uff0c\u4e3a",(0,s.kt)("inlineCode",{parentName:"p"},"n"),", \u56e0\u6b64",(0,s.kt)("inlineCode",{parentName:"p"},"n+1"),"\u4e00\u5b9a\u662f\u4e00\u4e2a\u65e0\u6548\u7684\u5927\u6570\u3002"),(0,s.kt)("p",null,"\u672c\u9898\u7684\u539f\u5b50\u95ee\u9898(base case)\u662f\uff0c\u5f53 ",(0,s.kt)("inlineCode",{parentName:"p"},"n"),"\u4e3a\u5b8c\u5168\u5e73\u65b9\u6570\uff0c\u5219 ",(0,s.kt)("inlineCode",{parentName:"p"},"dp[n]=1"),"\u3002\u5176\u5b9e0\u4e5f\u662f\u4e2a\u5b8c\u5168\u5e73\u65b9\u6570\uff0c\u4f46\u662f\u4e00\u65e6\u7528\u5230\u4e860\uff0c\u90a3\u80af\u5b9a\u4e0d\u662f\u6700\u4f18\u89e3\uff0c\u6240\u4ee5 ",(0,s.kt)("inlineCode",{parentName:"p"},"dp[0]"),"\u521d\u59cb\u5316\u4e3a0\u800c\u4e0d\u662f1\uff0c\u662f\u4e3a\u4e86\u8ba9\u5176\u4ed6\u7684\u5b8c\u5168\u5e73\u65b9\u6570\uff0c\u4f8b\u5982 1, 4, 9\uff0c\u5728\u5185\u5c42\u5faa\u73af\u4e2d\uff0c\u6709\u673a\u4f1a\u88ab\u521d\u59cb\u5316\u4e3a1\u3002"))}k.isMDXComponent=!0}}]);