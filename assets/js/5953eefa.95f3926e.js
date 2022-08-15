"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[7261],{3905:(e,a,t)=>{t.d(a,{Zo:()=>i,kt:()=>k});var n=t(7294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function m(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?m(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},m=Object.keys(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=n.createContext({}),o=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},i=function(e){var a=o(e.components);return n.createElement(l.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},N=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,m=e.originalType,l=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),N=o(t),k=s,u=N["".concat(l,".").concat(k)]||N[k]||c[k]||m;return t?n.createElement(u,r(r({ref:a},i),{},{components:t})):n.createElement(u,r({ref:a},i))}));function k(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var m=t.length,r=new Array(m);r[0]=N;var p={};for(var l in a)hasOwnProperty.call(a,l)&&(p[l]=a[l]);p.originalType=e,p.mdxType="string"==typeof e?e:s,r[1]=p;for(var o=2;o<m;o++)r[o]=t[o];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}N.displayName="MDXCreateElement"},5162:(e,a,t)=>{t.d(a,{Z:()=>r});var n=t(7294),s=t(6010);const m="tabItem_Ymn6";function r(e){let{children:a,hidden:t,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,s.Z)(m,r),hidden:t},a)}},5488:(e,a,t)=>{t.d(a,{Z:()=>k});var n=t(7462),s=t(7294),m=t(6010),r=t(2389),p=t(7392),l=t(7094),o=t(2466);const i="tabList__CuJ",c="tabItem_LNqP";function N(e){var a,t;const{lazy:r,block:N,defaultValue:k,values:u,groupId:h,className:d}=e,g=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=u?u:g.map((e=>{let{props:{value:a,label:t,attributes:n}}=e;return{value:a,label:t,attributes:n}})),b=(0,p.l)(f,((e,a)=>e.value===a.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===k?k:null!=(a=null!=k?k:null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)?a:g[0].props.value;if(null!==y&&!f.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+f.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:v}=(0,l.U)(),[O,j]=(0,s.useState)(y),x=[],{blockElementScrollPositionUntilNextRender:T}=(0,o.o5)();if(null!=h){const e=w[h];null!=e&&e!==O&&f.some((a=>a.value===e))&&j(e)}const C=e=>{const a=e.currentTarget,t=x.indexOf(a),n=f[t].value;n!==O&&(T(a),j(n),null!=h&&v(h,String(n)))},R=e=>{var a;let t=null;switch(e.key){case"ArrowRight":{var n;const a=x.indexOf(e.currentTarget)+1;t=null!=(n=x[a])?n:x[0];break}case"ArrowLeft":{var s;const a=x.indexOf(e.currentTarget)-1;t=null!=(s=x[a])?s:x[x.length-1];break}}null==(a=t)||a.focus()};return s.createElement("div",{className:(0,m.Z)("tabs-container",i)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,m.Z)("tabs",{"tabs--block":N},d)},f.map((e=>{let{value:a,label:t,attributes:r}=e;return s.createElement("li",(0,n.Z)({role:"tab",tabIndex:O===a?0:-1,"aria-selected":O===a,key:a,ref:e=>x.push(e),onKeyDown:R,onFocus:C,onClick:C},r,{className:(0,m.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":O===a})}),null!=t?t:a)}))),r?(0,s.cloneElement)(g.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},g.map(((e,a)=>(0,s.cloneElement)(e,{key:a,hidden:e.props.value!==O})))))}function k(e){const a=(0,r.Z)();return s.createElement(N,(0,n.Z)({key:String(a)},e))}},819:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>l,default:()=>k,frontMatter:()=>p,metadata:()=>o,toc:()=>c});var n=t(7462),s=(t(7294),t(3905)),m=t(5488),r=t(5162);const p={title:"Ones and Zeroes"},l=void 0,o={unversionedId:"dp/knapsack-problem/ones-and-zeroes",id:"dp/knapsack-problem/ones-and-zeroes",title:"Ones and Zeroes",description:"\u63cf\u8ff0",source:"@site/docs/dp/knapsack-problem/ones-and-zeroes.md",sourceDirName:"dp/knapsack-problem",slug:"/dp/knapsack-problem/ones-and-zeroes",permalink:"/dp/knapsack-problem/ones-and-zeroes",draft:!1,editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/dp/knapsack-problem/ones-and-zeroes.md",tags:[],version:"current",frontMatter:{title:"Ones and Zeroes"},sidebar:"someSidebar",previous:{title:"Partition Equal Subset Sum",permalink:"/dp/knapsack-problem/partition-equal-subset-sum"},next:{title:"Last Stone Weight II",permalink:"/dp/knapsack-problem/last-stone-weight-ii"}},i={},c=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}],N={toc:c};function k(e){let{components:a,...t}=e;return(0,s.kt)("wrapper",(0,n.Z)({},N,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,s.kt)("p",null,"You are given an array of binary strings ",(0,s.kt)("inlineCode",{parentName:"p"},"strs")," and two integers ",(0,s.kt)("inlineCode",{parentName:"p"},"m")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"n"),"."),(0,s.kt)("p",null,"Return the size of the largest subset of ",(0,s.kt)("inlineCode",{parentName:"p"},"strs")," such that there are ",(0,s.kt)("strong",{parentName:"p"},"at most")," ",(0,s.kt)("inlineCode",{parentName:"p"},"m")," 0's and ",(0,s.kt)("inlineCode",{parentName:"p"},"n")," 1's in the subset."),(0,s.kt)("p",null,"A set ",(0,s.kt)("inlineCode",{parentName:"p"},"x")," is a subset of a set ",(0,s.kt)("inlineCode",{parentName:"p"},"y")," if all elements of ",(0,s.kt)("inlineCode",{parentName:"p"},"x")," are also elements of ",(0,s.kt)("inlineCode",{parentName:"p"},"y"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 1"),":"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Input"),": strs = ",'["10","0001","111001","1","0"]',", m = 5, n = 3",(0,s.kt)("br",{parentName:"p"}),"\n",(0,s.kt)("strong",{parentName:"p"},"Output"),": 4",(0,s.kt)("br",{parentName:"p"}),"\n",(0,s.kt)("strong",{parentName:"p"},"Explanation"),': The largest subset with at most 5 0\'s and 3 1\'s is {"10", "0001", "1", "0"}, so the answer is 4.',(0,s.kt)("br",{parentName:"p"}),"\n",'Other valid but smaller subsets include {"0001", "1"} and {"10", "1", "0"}.',(0,s.kt)("br",{parentName:"p"}),"\n",'{"111001"} is an invalid subset because it contains 4 1\'s, greater than the maximum of 3.')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 2"),":"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Input"),": strs = ",'["10","0","1"]',", m = 1, n = 1",(0,s.kt)("br",{parentName:"p"}),"\n",(0,s.kt)("strong",{parentName:"p"},"Output"),": 2",(0,s.kt)("br",{parentName:"p"}),"\n",(0,s.kt)("strong",{parentName:"p"},"Explanation"),': The largest subset is {"0", "1"}, so the answer is 2.')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Constraints"),":"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"1 <= strs.length <= 600"),(0,s.kt)("li",{parentName:"ul"},"1 <= strs","[i]",".length <= 100"),(0,s.kt)("li",{parentName:"ul"},"strs","[i]"," consists only of digits '0' and '1'."),(0,s.kt)("li",{parentName:"ul"},"1 <= m, n <= 100")),(0,s.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,s.kt)("p",null,"0-1 \u80cc\u5305\u95ee\u9898\uff0c\u6bcf\u4e2a\u5b57\u7b26\u4e32\u6709\u4e24\u79cd\u91cd\u91cf\uff0c0 \u7684\u4e2a\u6570\u548c 1 \u7684\u4e2a\u6570\uff0c\u6bcf\u4e2a\u5b57\u7b26\u4e32\u7684\u4ef7\u503c\u90fd\u662f 1\uff0c\u56e0\u6b64\u8fd9\u4e2a\u95ee\u9898\u91cc\u6709\u4e24\u4e2a\u80cc\u5305\uff0c\u4e00\u4e2a\u88c5 0\uff0c\u4e00\u4e2a\u88c5 1\uff0c\u4ef7\u503c\u5219\u662f\u80cc\u5305\u91cc\u5b57\u7b26\u4e32\u7684\u4e2a\u6570\u3002"),(0,s.kt)("p",null,"\u4ee4",(0,s.kt)("inlineCode",{parentName:"p"},"f[i][j][k]"),"\u8868\u793a\u628a\u524d",(0,s.kt)("inlineCode",{parentName:"p"},"i"),"\u4e2a\u5b57\u7b26\u4e32\u88c5\u8fdb\u5bb9\u91cf\u4e3a",(0,s.kt)("inlineCode",{parentName:"p"},"j"),"\u7684\u80cc\u5305 0 \u548c\u5bb9\u91cf\u4e3a",(0,s.kt)("inlineCode",{parentName:"p"},"k"),"\u80cc\u5305 1\uff0c\u53ef\u4ee5\u83b7\u5f97\u7684\u6700\u5927\u96c6\u5408\u7684\u5927\u5c0f\uff0c\u5219\u72b6\u6001\u8f6c\u79fb\u65b9\u7a0b\u662f\uff1a"),(0,s.kt)("p",null,(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"f"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mi",{parentName:"mrow"},"j"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mi",{parentName:"mrow"},"k"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mi",{parentName:"mrow"},"max"),(0,s.kt)("mo",{parentName:"mrow"},"\u2061"),(0,s.kt)("mrow",{parentName:"mrow"},(0,s.kt)("mo",{parentName:"mrow",fence:"true"},"{"),(0,s.kt)("mi",{parentName:"mrow"},"f"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mi",{parentName:"mrow"},"j"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mi",{parentName:"mrow"},"k"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mi",{parentName:"mrow"},"f"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mi",{parentName:"mrow"},"j"),(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msub"},"w"),(0,s.kt)("mn",{parentName:"msub"},"0")),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mi",{parentName:"mrow"},"k"),(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msub"},"w"),(0,s.kt)("mn",{parentName:"msub"},"1")),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,s.kt)("mo",{parentName:"mrow"},"+"),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow",fence:"true"},"}"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"f[i][j][k]=\\max\\left\\{f[i-1][j][k], f[i-1][j-w_0[i][k-w_1[i]]+1\\right\\}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mop"},"max"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"minner"},(0,s.kt)("span",{parentName:"span",className:"mopen delimcenter",style:{top:"0em"}},"{"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02691em"}},"w"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0269em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"0")))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,s.kt)("span",{parentName:"span"})))))),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02691em"}},"w"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0269em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"1")))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,s.kt)("span",{parentName:"span"})))))),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]]"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mclose delimcenter",style:{top:"0em"}},"}"))))))),(0,s.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,s.kt)(m.Z,{defaultValue:"java",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"python",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"# TODO\n"))),(0,s.kt)(r.Z,{value:"java",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"// Ones and Zeroes\n// 0-1 knapsack problem\n// Time Complexity: O(l*m*n), Space Complexity: O(m*n)\nclass Solution {\n    public int findMaxForm(String[] strs, int m, int n) {\n        int[][] f = new int[m+1][n+1];\n\n        int[] w0 = new int[strs.length];\n        int[] w1 = new int[strs.length];\n        for (int i = 0; i < strs.length; ++i) {\n            w0[i] = numberOfZeroes(strs[i]);\n            w1[i] = strs[i].length() - w0[i];\n        }\n\n        for (int i = 0; i < strs.length; ++i) {\n            for(int j = m; j >= w0[i]; --j)\n                for(int k = n;k >= w1[i]; --k) {\n                    f[j][k] = Math.max(f[j][k], f[j-w0[i]][k-w1[i]]+1);\n                }\n        }\n        return f[m][n];\n    }\n\n    private static int numberOfZeroes(String s) {\n        int count = 0;\n        for (char c : s.toCharArray()) {\n            if (c == '0') count++;\n        }\n        return count;\n    }\n}\n"))),(0,s.kt)(r.Z,{value:"cpp",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"// TODO\n")))))}k.isMDXComponent=!0}}]);