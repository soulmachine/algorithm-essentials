"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[5390],{3905:(a,e,t)=>{t.d(e,{Zo:()=>N,kt:()=>k});var s=t(7294);function n(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function m(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,s)}return t}function p(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){n(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function r(a,e){if(null==a)return{};var t,s,n=function(a,e){if(null==a)return{};var t,s,n={},m=Object.keys(a);for(s=0;s<m.length;s++)t=m[s],e.indexOf(t)>=0||(n[t]=a[t]);return n}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(s=0;s<m.length;s++)t=m[s],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(n[t]=a[t])}return n}var l=s.createContext({}),i=function(a){var e=s.useContext(l),t=e;return a&&(t="function"==typeof a?a(e):p(p({},e),a)),t},N=function(a){var e=i(a.components);return s.createElement(l.Provider,{value:e},a.children)},o={inlineCode:"code",wrapper:function(a){var e=a.children;return s.createElement(s.Fragment,{},e)}},c=s.forwardRef((function(a,e){var t=a.components,n=a.mdxType,m=a.originalType,l=a.parentName,N=r(a,["components","mdxType","originalType","parentName"]),c=i(t),k=n,h=c["".concat(l,".").concat(k)]||c[k]||o[k]||m;return t?s.createElement(h,p(p({ref:e},N),{},{components:t})):s.createElement(h,p({ref:e},N))}));function k(a,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof a||n){var m=t.length,p=new Array(m);p[0]=c;var r={};for(var l in e)hasOwnProperty.call(e,l)&&(r[l]=e[l]);r.originalType=a,r.mdxType="string"==typeof a?a:n,p[1]=r;for(var i=2;i<m;i++)p[i]=t[i];return s.createElement.apply(null,p)}return s.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5162:(a,e,t)=>{t.d(e,{Z:()=>p});var s=t(7294),n=t(6010);const m="tabItem_Ymn6";function p(a){let{children:e,hidden:t,className:p}=a;return s.createElement("div",{role:"tabpanel",className:(0,n.Z)(m,p),hidden:t},e)}},5488:(a,e,t)=>{t.d(e,{Z:()=>k});var s=t(7462),n=t(7294),m=t(6010),p=t(2389),r=t(7392),l=t(7094),i=t(2466);const N="tabList__CuJ",o="tabItem_LNqP";function c(a){var e;const{lazy:t,block:p,defaultValue:c,values:k,groupId:h,className:u}=a,g=n.Children.map(a.children,(a=>{if((0,n.isValidElement)(a)&&"value"in a.props)return a;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof a.type?a.type:a.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),d=k??g.map((a=>{let{props:{value:e,label:t,attributes:s}}=a;return{value:e,label:t,attributes:s}})),v=(0,r.l)(d,((a,e)=>a.value===e.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((a=>a.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===c?c:c??(null==(e=g.find((a=>a.props.default)))?void 0:e.props.value)??g[0].props.value;if(null!==y&&!d.some((a=>a.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${d.map((a=>a.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:f}=(0,l.U)(),[w,x]=(0,n.useState)(y),z=[],{blockElementScrollPositionUntilNextRender:O}=(0,i.o5)();if(null!=h){const a=b[h];null!=a&&a!==w&&d.some((e=>e.value===a))&&x(a)}const T=a=>{const e=a.currentTarget,t=z.indexOf(e),s=d[t].value;s!==w&&(O(e),x(s),null!=h&&f(h,String(s)))},R=a=>{var e;let t=null;switch(a.key){case"ArrowRight":{const e=z.indexOf(a.currentTarget)+1;t=z[e]??z[0];break}case"ArrowLeft":{const e=z.indexOf(a.currentTarget)-1;t=z[e]??z[z.length-1];break}}null==(e=t)||e.focus()};return n.createElement("div",{className:(0,m.Z)("tabs-container",N)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,m.Z)("tabs",{"tabs--block":p},u)},d.map((a=>{let{value:e,label:t,attributes:p}=a;return n.createElement("li",(0,s.Z)({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:a=>z.push(a),onKeyDown:R,onFocus:T,onClick:T},p,{className:(0,m.Z)("tabs__item",o,null==p?void 0:p.className,{"tabs__item--active":w===e})}),t??e)}))),t?(0,n.cloneElement)(g.filter((a=>a.props.value===w))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},g.map(((a,e)=>(0,n.cloneElement)(a,{key:e,hidden:a.props.value!==w})))))}function k(a){const e=(0,p.Z)();return n.createElement(c,(0,s.Z)({key:String(e)},a))}},8973:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>N,contentTitle:()=>l,default:()=>k,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var s=t(7462),n=(t(7294),t(3905)),m=t(5488),p=t(5162);const r={title:"Target Sum"},l=void 0,i={unversionedId:"dp/knapsack-problem/target-sum",id:"dp/knapsack-problem/target-sum",title:"Target Sum",description:"\u95ee\u9898\u63cf\u8ff0",source:"@site/docs/dp/knapsack-problem/target-sum.md",sourceDirName:"dp/knapsack-problem",slug:"/dp/knapsack-problem/target-sum",permalink:"/dp/knapsack-problem/target-sum",draft:!1,tags:[],version:"current",frontMatter:{title:"Target Sum"},sidebar:"docs",previous:{title:"Last Stone Weight II",permalink:"/dp/knapsack-problem/last-stone-weight-ii"},next:{title:"\u5b8c\u5168\u80cc\u5305\u95ee\u9898",permalink:"/dp/knapsack-problem/unbounded-knapsack"}},N={},o=[{value:"\u95ee\u9898\u63cf\u8ff0",id:"\u95ee\u9898\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}],c={toc:o};function k(a){let{components:e,...t}=a;return(0,n.kt)("wrapper",(0,s.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"\u95ee\u9898\u63cf\u8ff0"},"\u95ee\u9898\u63cf\u8ff0"),(0,n.kt)("p",null,"You are given an integer array ",(0,n.kt)("inlineCode",{parentName:"p"},"nums")," and an integer ",(0,n.kt)("inlineCode",{parentName:"p"},"target"),"."),(0,n.kt)("p",null,"You want to build an ",(0,n.kt)("strong",{parentName:"p"},"expression")," out of nums by adding one of the symbols ",(0,n.kt)("inlineCode",{parentName:"p"},"+")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"-")," before each integer in nums and then concatenate all the integers."),(0,n.kt)("p",null,"For example, if ",(0,n.kt)("inlineCode",{parentName:"p"},"nums = [2, 1]"),", you can add a ",(0,n.kt)("inlineCode",{parentName:"p"},"+")," before 2 and a ",(0,n.kt)("inlineCode",{parentName:"p"},"-")," before 1 and concatenate them to build the expression ",(0,n.kt)("inlineCode",{parentName:"p"},"+2-1"),"."),(0,n.kt)("p",null,"Return the number of different expressions that you can build, which evaluates to target."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example 1"),":"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Input"),": nums = ","[1,1,1,1,1]",", target = 3",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Output"),": 5",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Explanation"),": There are 5 ways to assign symbols to make the sum of nums be target 3.",(0,n.kt)("br",{parentName:"p"}),"\n","-1 + 1 + 1 + 1 + 1 = 3",(0,n.kt)("br",{parentName:"p"}),"\n","+1 - 1 + 1 + 1 + 1 = 3",(0,n.kt)("br",{parentName:"p"}),"\n","+1 + 1 - 1 + 1 + 1 = 3",(0,n.kt)("br",{parentName:"p"}),"\n","+1 + 1 + 1 - 1 + 1 = 3",(0,n.kt)("br",{parentName:"p"}),"\n","+1 + 1 + 1 + 1 - 1 = 3")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example 2"),":"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Input"),": nums = ","[1]",", target = 1",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Output"),": 1")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Constraints"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"1 <= nums.length <= 20"),(0,n.kt)("li",{parentName:"ul"},"0 <= nums","[i]"," <= 1000"),(0,n.kt)("li",{parentName:"ul"},"0 <= sum(nums","[i]",") <= 1000"),(0,n.kt)("li",{parentName:"ul"},"-1000 <= target <= 1000")),(0,n.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,n.kt)("p",null,"\u672c\u9898\u53ef\u4ee5\u8f6c\u5316\u4e3a\u4e00\u4e2a0-1\u80cc\u5305\u95ee\u9898\uff0c\u4e14\u6070\u597d\u88c5\u6ee1\u3002\u4ee4\u6bcf\u4e2a\u7269\u54c1",(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mi",{parentName:"mrow"},"i")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"i")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6595em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"))))),"\u7684\u91cd\u91cf",(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"w"),(0,n.kt)("mi",{parentName:"msub"},"i"))),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"w_i")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.5806em",verticalAlign:"-0.15em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02691em"}},"w"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0269em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"})))))))))),"\u4e3a",(0,n.kt)("inlineCode",{parentName:"p"},"nums[i]"),"\uff0c\u4ef7\u503c",(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"v"),(0,n.kt)("mi",{parentName:"msub"},"i"))),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"v_i")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.5806em",verticalAlign:"-0.15em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"v"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0359em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"})))))))))),"\u4e3a0\uff0c\u80cc\u5305\u80fd\u5bb9\u7eb3\u7684\u6700\u5927\u91cd\u91cf",(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mi",{parentName:"mrow"},"W"),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("mfrac",{parentName:"mrow"},(0,n.kt)("mn",{parentName:"mfrac"},"1"),(0,n.kt)("mn",{parentName:"mfrac"},"2")),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mo",{parentName:"msub"},"\u2211"),(0,n.kt)("mi",{parentName:"msub"},"i")),(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"w"),(0,n.kt)("mi",{parentName:"msub"},"i")),(0,n.kt)("mo",{parentName:"mrow"},"+"),(0,n.kt)("mi",{parentName:"mrow"},"t"),(0,n.kt)("mi",{parentName:"mrow"},"a"),(0,n.kt)("mi",{parentName:"mrow"},"r"),(0,n.kt)("mi",{parentName:"mrow"},"g"),(0,n.kt)("mi",{parentName:"mrow"},"e"),(0,n.kt)("mi",{parentName:"mrow"},"t"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"W=\\frac{1}{2}(\\sum_i w_i + target)")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"W"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"="),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1.1901em",verticalAlign:"-0.345em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,n.kt)("span",{parentName:"span",className:"mfrac"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8451em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.655em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"2")))),(0,n.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,n.kt)("span",{parentName:"span",style:{top:"-3.394em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"1"))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.345em"}},(0,n.kt)("span",{parentName:"span"}))))),(0,n.kt)("span",{parentName:"span",className:"mclose nulldelimiter"})),(0,n.kt)("span",{parentName:"span",className:"mopen"},"("),(0,n.kt)("span",{parentName:"span",className:"mop"},(0,n.kt)("span",{parentName:"span",className:"mop op-symbol small-op",style:{position:"relative",top:"0em"}},"\u2211"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.162em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.4003em",marginLeft:"0em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2997em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02691em"}},"w"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0269em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,n.kt)("span",{parentName:"span",className:"mclose"},")"))))),"\uff0c\u8be5\u95ee\u9898\u5c31\u53d8\u6210\uff0c\u6070\u597d\u586b\u6ee1\u80cc\u5305\u6709\u591a\u5c11\u79cd\u4e0d\u540c\u7684\u7ec4\u5408\uff1f"),(0,n.kt)("p",null,"\u7ed9\u80cc\u5305\u5185\u7684\u7269\u54c1\u8d4b\u4e88",(0,n.kt)("inlineCode",{parentName:"p"},"+"),"\u53f7\uff0c\u80cc\u5305\u5916\u7684\u7269\u54c1\u8d4b\u4e88",(0,n.kt)("inlineCode",{parentName:"p"},"-"),"\u53f7\u3002\u80cc\u5305\u88c5\u6ee1\u540e\uff0c\u80cc\u5305\u5185\u7684\u7269\u54c1\u91cd\u91cf\u4e4b\u548c\u662f",(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mfrac",{parentName:"mrow"},(0,n.kt)("mn",{parentName:"mfrac"},"1"),(0,n.kt)("mn",{parentName:"mfrac"},"2")),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mo",{parentName:"msub"},"\u2211"),(0,n.kt)("mi",{parentName:"msub"},"i")),(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"w"),(0,n.kt)("mi",{parentName:"msub"},"i")),(0,n.kt)("mo",{parentName:"mrow"},"+"),(0,n.kt)("mi",{parentName:"mrow"},"t"),(0,n.kt)("mi",{parentName:"mrow"},"a"),(0,n.kt)("mi",{parentName:"mrow"},"r"),(0,n.kt)("mi",{parentName:"mrow"},"g"),(0,n.kt)("mi",{parentName:"mrow"},"e"),(0,n.kt)("mi",{parentName:"mrow"},"t"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\frac{1}{2}(\\sum_i w_i + target)")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1.1901em",verticalAlign:"-0.345em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,n.kt)("span",{parentName:"span",className:"mfrac"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8451em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.655em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"2")))),(0,n.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,n.kt)("span",{parentName:"span",style:{top:"-3.394em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"1"))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.345em"}},(0,n.kt)("span",{parentName:"span"}))))),(0,n.kt)("span",{parentName:"span",className:"mclose nulldelimiter"})),(0,n.kt)("span",{parentName:"span",className:"mopen"},"("),(0,n.kt)("span",{parentName:"span",className:"mop"},(0,n.kt)("span",{parentName:"span",className:"mop op-symbol small-op",style:{position:"relative",top:"0em"}},"\u2211"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.162em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.4003em",marginLeft:"0em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2997em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02691em"}},"w"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0269em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,n.kt)("span",{parentName:"span",className:"mclose"},")"))))),"\uff0c\u80cc\u5305\u5916\u7684\u7269\u54c1\u91cd\u91cf\u4e4b\u548c\u662f",(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mfrac",{parentName:"mrow"},(0,n.kt)("mn",{parentName:"mfrac"},"1"),(0,n.kt)("mn",{parentName:"mfrac"},"2")),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mo",{parentName:"msub"},"\u2211"),(0,n.kt)("mi",{parentName:"msub"},"i")),(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"w"),(0,n.kt)("mi",{parentName:"msub"},"i")),(0,n.kt)("mo",{parentName:"mrow"},"\u2212"),(0,n.kt)("mi",{parentName:"mrow"},"t"),(0,n.kt)("mi",{parentName:"mrow"},"a"),(0,n.kt)("mi",{parentName:"mrow"},"r"),(0,n.kt)("mi",{parentName:"mrow"},"g"),(0,n.kt)("mi",{parentName:"mrow"},"e"),(0,n.kt)("mi",{parentName:"mrow"},"t"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\frac{1}{2}(\\sum_i w_i - target)")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1.1901em",verticalAlign:"-0.345em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,n.kt)("span",{parentName:"span",className:"mfrac"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8451em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.655em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"2")))),(0,n.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,n.kt)("span",{parentName:"span",style:{top:"-3.394em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"1"))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.345em"}},(0,n.kt)("span",{parentName:"span"}))))),(0,n.kt)("span",{parentName:"span",className:"mclose nulldelimiter"})),(0,n.kt)("span",{parentName:"span",className:"mopen"},"("),(0,n.kt)("span",{parentName:"span",className:"mop"},(0,n.kt)("span",{parentName:"span",className:"mop op-symbol small-op",style:{position:"relative",top:"0em"}},"\u2211"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.162em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.4003em",marginLeft:"0em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2997em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02691em"}},"w"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0269em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,n.kt)("span",{parentName:"span",className:"mclose"},")"))))),"\uff0c\u4e8c\u8005\u76f8\u51cf\uff0c\u521a\u597d\u662f",(0,n.kt)("inlineCode",{parentName:"p"},"target"),"\u3002"),(0,n.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,n.kt)(m.Z,{defaultValue:"cpp",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,n.kt)(p.Z,{value:"python",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"TODO\n"))),(0,n.kt)(p.Z,{value:"java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"TODO\n"))),(0,n.kt)(p.Z,{value:"cpp",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"// Target Sum\n// Time Complexity: O(N*W)\n// Space Complexity: O(W)\nclass Solution {\npublic:\n    int findTargetSumWays(vector<int>& nums, int target) {\n        const int sum = std::accumulate(nums.begin(), nums.end(), 0);\n        if ((sum+target)%2 == 1) return 0;\n        if ((sum + target) < 0) return 0;\n\n        const int W = (sum+target)/2; // knapsack capacity\n        vector<int> dp(W+1, 0);\n        dp[0] = 1; // base case\n \n        for (auto num: nums) {\n            for (int j = W; j >= num; j--) {\n                dp[j] += dp[j-num];\n            }\n        }\n\n        return dp[W];\n    }\n};\n")))))}k.isMDXComponent=!0}}]);