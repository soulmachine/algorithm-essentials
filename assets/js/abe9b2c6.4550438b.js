"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[3133],{3905:(a,e,t)=>{t.d(e,{Zo:()=>N,kt:()=>k});var n=t(7294);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function m(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function p(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function r(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},m=Object.keys(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var l=n.createContext({}),i=function(a){var e=n.useContext(l),t=e;return a&&(t="function"==typeof a?a(e):p(p({},e),a)),t},N=function(a){var e=i(a.components);return n.createElement(l.Provider,{value:e},a.children)},o={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(a,e){var t=a.components,s=a.mdxType,m=a.originalType,l=a.parentName,N=r(a,["components","mdxType","originalType","parentName"]),c=i(t),k=s,u=c["".concat(l,".").concat(k)]||c[k]||o[k]||m;return t?n.createElement(u,p(p({ref:e},N),{},{components:t})):n.createElement(u,p({ref:e},N))}));function k(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var m=t.length,p=new Array(m);p[0]=c;var r={};for(var l in e)hasOwnProperty.call(e,l)&&(r[l]=e[l]);r.originalType=a,r.mdxType="string"==typeof a?a:s,p[1]=r;for(var i=2;i<m;i++)p[i]=t[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5162:(a,e,t)=>{t.d(e,{Z:()=>p});var n=t(7294),s=t(6010);const m="tabItem_Ymn6";function p(a){let{children:e,hidden:t,className:p}=a;return n.createElement("div",{role:"tabpanel",className:(0,s.Z)(m,p),hidden:t},e)}},5488:(a,e,t)=>{t.d(e,{Z:()=>k});var n=t(7462),s=t(7294),m=t(6010),p=t(2389),r=t(7392),l=t(7094),i=t(2466);const N="tabList__CuJ",o="tabItem_LNqP";function c(a){var e;const{lazy:t,block:p,defaultValue:c,values:k,groupId:u,className:h}=a,g=s.Children.map(a.children,(a=>{if((0,s.isValidElement)(a)&&"value"in a.props)return a;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof a.type?a.type:a.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),d=k??g.map((a=>{let{props:{value:e,label:t,attributes:n}}=a;return{value:e,label:t,attributes:n}})),b=(0,r.l)(d,((a,e)=>a.value===e.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((a=>a.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===c?c:c??(null==(e=g.find((a=>a.props.default)))?void 0:e.props.value)??g[0].props.value;if(null!==y&&!d.some((a=>a.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${d.map((a=>a.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:w}=(0,l.U)(),[f,x]=(0,s.useState)(y),j=[],{blockElementScrollPositionUntilNextRender:O}=(0,i.o5)();if(null!=u){const a=v[u];null!=a&&a!==f&&d.some((e=>e.value===a))&&x(a)}const R=a=>{const e=a.currentTarget,t=j.indexOf(e),n=d[t].value;n!==f&&(O(e),x(n),null!=u&&w(u,String(n)))},E=a=>{var e;let t=null;switch(a.key){case"ArrowRight":{const e=j.indexOf(a.currentTarget)+1;t=j[e]??j[0];break}case"ArrowLeft":{const e=j.indexOf(a.currentTarget)-1;t=j[e]??j[j.length-1];break}}null==(e=t)||e.focus()};return s.createElement("div",{className:(0,m.Z)("tabs-container",N)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,m.Z)("tabs",{"tabs--block":p},h)},d.map((a=>{let{value:e,label:t,attributes:p}=a;return s.createElement("li",(0,n.Z)({role:"tab",tabIndex:f===e?0:-1,"aria-selected":f===e,key:e,ref:a=>j.push(a),onKeyDown:E,onFocus:R,onClick:R},p,{className:(0,m.Z)("tabs__item",o,null==p?void 0:p.className,{"tabs__item--active":f===e})}),t??e)}))),t?(0,s.cloneElement)(g.filter((a=>a.props.value===f))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},g.map(((a,e)=>(0,s.cloneElement)(a,{key:e,hidden:a.props.value!==f})))))}function k(a){const e=(0,p.Z)();return s.createElement(c,(0,n.Z)({key:String(e)},a))}},1679:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>N,contentTitle:()=>l,default:()=>k,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var n=t(7462),s=(t(7294),t(3905)),m=t(5488),p=t(5162);const r={title:"Partition Equal Subset Sum"},l=void 0,i={unversionedId:"dp/knapsack-problem/partition-equal-subset-sum",id:"dp/knapsack-problem/partition-equal-subset-sum",title:"Partition Equal Subset Sum",description:"\u63cf\u8ff0",source:"@site/docs/dp/knapsack-problem/partition-equal-subset-sum.md",sourceDirName:"dp/knapsack-problem",slug:"/dp/knapsack-problem/partition-equal-subset-sum",permalink:"/dp/knapsack-problem/partition-equal-subset-sum",draft:!1,tags:[],version:"current",frontMatter:{title:"Partition Equal Subset Sum"},sidebar:"docs",previous:{title:"0-1\u80cc\u5305\u95ee\u9898",permalink:"/dp/knapsack-problem/zero-one-knapsack"},next:{title:"Ones and Zeroes",permalink:"/dp/knapsack-problem/ones-and-zeroes"}},N={},o=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],c={toc:o};function k(a){let{components:e,...t}=a;return(0,s.kt)("wrapper",(0,n.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,s.kt)("p",null,"Given a ",(0,s.kt)("strong",{parentName:"p"},"non-empty")," array nums containing ",(0,s.kt)("strong",{parentName:"p"},"only positive integers"),", find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 1"),":"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Input"),": nums = ","[1,5,11,5]"," > ",(0,s.kt)("strong",{parentName:"p"},"Output"),": true\n",(0,s.kt)("strong",{parentName:"p"},"Explanation"),": The array can be partitioned as ","[1, 5, 5]"," and ","[11]",".")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 2"),":"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Input"),": nums = ","[1,2,3,5]"," > ",(0,s.kt)("strong",{parentName:"p"},"Output"),": false\n",(0,s.kt)("strong",{parentName:"p"},"Explanation"),": The array cannot be partitioned into equal sum subsets.")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Constraints"),":"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"1 <= nums.length <= 200"),(0,s.kt)("li",{parentName:"ul"},"1 <= nums","[i]"," <= 100")),(0,s.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,s.kt)("p",null,"\u672c\u9898\u662f\u4e00\u4e2a0-1\u80cc\u5305\uff0c\u4e14\u80cc\u5305\u6070\u597d\u88c5\u6ee1\u7684\u95ee\u9898\u3002\u4ee4\u6bcf\u4e2a\u7269\u54c1",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"i")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"i")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6595em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"))))),"\u7684\u91cd\u91cf",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msub"},"w"),(0,s.kt)("mi",{parentName:"msub"},"i"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"w_i")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.5806em",verticalAlign:"-0.15em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02691em"}},"w"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0269em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i")))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,s.kt)("span",{parentName:"span"})))))))))),"\u4e3a ",(0,s.kt)("inlineCode",{parentName:"p"},"nums[i]"),"\uff0c\u4ef7\u503c",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msub"},"v"),(0,s.kt)("mi",{parentName:"msub"},"i"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"v_i")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.5806em",verticalAlign:"-0.15em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"v"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0359em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i")))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,s.kt)("span",{parentName:"span"})))))))))),"\u4e3a 0\uff0c\u80cc\u5305\u80fd\u5bb9\u7eb3\u7684\u6700\u5927\u91cd\u91cf",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"W"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mfrac",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"mfrac"},"1"),(0,s.kt)("mn",{parentName:"mfrac"},"2")),(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mo",{parentName:"msub"},"\u2211"),(0,s.kt)("mi",{parentName:"msub"},"i")),(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msub"},"w"),(0,s.kt)("mi",{parentName:"msub"},"i"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"W=\\frac{1}{2}\\sum_i w_i")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"W"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.1901em",verticalAlign:"-0.345em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,s.kt)("span",{parentName:"span",className:"mfrac"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8451em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.655em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"2")))),(0,s.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,s.kt)("span",{parentName:"span",style:{top:"-3.394em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"1"))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.345em"}},(0,s.kt)("span",{parentName:"span"}))))),(0,s.kt)("span",{parentName:"span",className:"mclose nulldelimiter"})),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mop"},(0,s.kt)("span",{parentName:"span",className:"mop op-symbol small-op",style:{position:"relative",top:"0em"}},"\u2211"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.162em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.4003em",marginLeft:"0em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i")))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2997em"}},(0,s.kt)("span",{parentName:"span"})))))),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02691em"}},"w"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0269em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i")))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,s.kt)("span",{parentName:"span"})))))))))),"\uff0c\u8be5\u95ee\u9898\u5c31\u53d8\u6210\uff0c\u9009\u62e9\u82e5\u5e72\u7269\u54c1\uff0c\u80fd\u5426\u6070\u597d\u586b\u6ee1\u80cc\u5305\uff1f"),(0,s.kt)("p",null,"\u4ee4 ",(0,s.kt)("inlineCode",{parentName:"p"},"f(i, j)"),"\u8868\u793a\u524d ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"i")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"i")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6595em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i")))))," \u4e2a\u7269\u54c1\u80fd\u5426\u586b\u6ee1\u5bb9\u91cf\u4e3a ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"j")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"j")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j")))))," \u7684\u80cc\u5305\uff0c\u5219\u72b6\u6001\u8f6c\u79fb\u65b9\u7a0b\u4e3a:"),(0,s.kt)("p",null,(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"f"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mi",{parentName:"mrow"},"j"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mi",{parentName:"mrow"},"f"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mi",{parentName:"mrow"},"j"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,s.kt)("mo",{parentName:"mrow"},"\u2228"),(0,s.kt)("mi",{parentName:"mrow"},"f"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mi",{parentName:"mrow"},"j"),(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msub"},"w"),(0,s.kt)("mi",{parentName:"msub"},"i")),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"f(i,j) = f(i-1,j) \\lor f(i-1, j-w_i)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2228"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02691em"}},"w"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0269em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i")))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,s.kt)("span",{parentName:"span"})))))),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,s.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,s.kt)(m.Z,{defaultValue:"cpp",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,s.kt)(p.Z,{value:"python",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"# TODO\n"))),(0,s.kt)(p.Z,{value:"java",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"// Partition Equal Subset Sum\n// 0-1 knapsack problem\n// Time Complexity: O(n*W), Space Complexity: O(W)\nclass Solution {\n    public boolean canPartition(int[] nums) {\n        int sum = 0;\n        for(int i : nums) sum += i;\n        if(sum % 2 != 0) return false;\n\n        int[] w = nums; // weight array\n        int W = sum / 2; // maximum weight capacity of knapsack\n\n        boolean[] dp = new boolean[W + 1];\n        dp[0] = true; // initialize\n\n        for(int i = 0; i < nums.length; i++) {\n            for(int j = W; j >= w[i]; --j) {\n                dp[j] = dp[j] || dp[j-w[i]];\n            }\n        }\n        return dp[W];\n    }\n}\n"))),(0,s.kt)(p.Z,{value:"cpp",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"// Partition Equal Subset Sum\n// 0-1 knapsack problem\n// Time Complexity: O(n*W), Space Complexity: O(W)\nclass Solution {\npublic:\n    bool canPartition(vector<int>& nums) {\n        int sum = 0;\n        for(int i : nums) sum += i;\n        if(sum % 2 != 0) return false;\n\n        const vector<int>& w = nums; // weight array\n        int W = sum / 2; // maximum weight capacity of knapsack\n\n        vector<bool> dp(W + 1);\n        dp[0] = true; // base case\n\n        for(int i = 0; i < nums.size(); i++) {\n            for(int j = W; j >= w[i]; --j) {\n                dp[j] = dp[j] || dp[j-w[i]];\n            }\n        }\n        return dp[W];\n    }\n};\n")))),(0,s.kt)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/dp/knapsack-problem/last-stone-weight-ii"},"Last Stone Weight II"))))}k.isMDXComponent=!0}}]);