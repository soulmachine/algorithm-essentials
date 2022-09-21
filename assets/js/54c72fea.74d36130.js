"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[3151],{3905:(a,e,t)=>{t.d(e,{Zo:()=>N,kt:()=>k});var n=t(7294);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function m(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function p(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function r(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},m=Object.keys(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var l=n.createContext({}),i=function(a){var e=n.useContext(l),t=e;return a&&(t="function"==typeof a?a(e):p(p({},e),a)),t},N=function(a){var e=i(a.components);return n.createElement(l.Provider,{value:e},a.children)},c={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},o=n.forwardRef((function(a,e){var t=a.components,s=a.mdxType,m=a.originalType,l=a.parentName,N=r(a,["components","mdxType","originalType","parentName"]),o=i(t),k=s,u=o["".concat(l,".").concat(k)]||o[k]||c[k]||m;return t?n.createElement(u,p(p({ref:e},N),{},{components:t})):n.createElement(u,p({ref:e},N))}));function k(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var m=t.length,p=new Array(m);p[0]=o;var r={};for(var l in e)hasOwnProperty.call(e,l)&&(r[l]=e[l]);r.originalType=a,r.mdxType="string"==typeof a?a:s,p[1]=r;for(var i=2;i<m;i++)p[i]=t[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}o.displayName="MDXCreateElement"},5162:(a,e,t)=>{t.d(e,{Z:()=>p});var n=t(7294),s=t(6010);const m="tabItem_Ymn6";function p(a){let{children:e,hidden:t,className:p}=a;return n.createElement("div",{role:"tabpanel",className:(0,s.Z)(m,p),hidden:t},e)}},5488:(a,e,t)=>{t.d(e,{Z:()=>k});var n=t(7462),s=t(7294),m=t(6010),p=t(2389),r=t(7392),l=t(7094),i=t(2466);const N="tabList__CuJ",c="tabItem_LNqP";function o(a){var e;const{lazy:t,block:p,defaultValue:o,values:k,groupId:u,className:h}=a,g=s.Children.map(a.children,(a=>{if((0,s.isValidElement)(a)&&"value"in a.props)return a;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof a.type?a.type:a.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),d=k??g.map((a=>{let{props:{value:e,label:t,attributes:n}}=a;return{value:e,label:t,attributes:n}})),y=(0,r.l)(d,((a,e)=>a.value===e.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((a=>a.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===o?o:o??(null==(e=g.find((a=>a.props.default)))?void 0:e.props.value)??g[0].props.value;if(null!==v&&!d.some((a=>a.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${d.map((a=>a.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:b}=(0,l.U)(),[x,w]=(0,s.useState)(v),z=[],{blockElementScrollPositionUntilNextRender:M}=(0,i.o5)();if(null!=u){const a=f[u];null!=a&&a!==x&&d.some((e=>e.value===a))&&w(a)}const C=a=>{const e=a.currentTarget,t=z.indexOf(e),n=d[t].value;n!==x&&(M(e),w(n),null!=u&&b(u,String(n)))},O=a=>{var e;let t=null;switch(a.key){case"ArrowRight":{const e=z.indexOf(a.currentTarget)+1;t=z[e]??z[0];break}case"ArrowLeft":{const e=z.indexOf(a.currentTarget)-1;t=z[e]??z[z.length-1];break}}null==(e=t)||e.focus()};return s.createElement("div",{className:(0,m.Z)("tabs-container",N)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,m.Z)("tabs",{"tabs--block":p},h)},d.map((a=>{let{value:e,label:t,attributes:p}=a;return s.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:a=>z.push(a),onKeyDown:O,onFocus:C,onClick:C},p,{className:(0,m.Z)("tabs__item",c,null==p?void 0:p.className,{"tabs__item--active":x===e})}),t??e)}))),t?(0,s.cloneElement)(g.filter((a=>a.props.value===x))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},g.map(((a,e)=>(0,s.cloneElement)(a,{key:e,hidden:a.props.value!==x})))))}function k(a){const e=(0,p.Z)();return s.createElement(o,(0,n.Z)({key:String(e)},a))}},2479:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>N,contentTitle:()=>l,default:()=>k,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=t(7462),s=(t(7294),t(3905)),m=t(5488),p=t(5162);const r={title:"4Sum II"},l=void 0,i={unversionedId:"array/4sum-ii",id:"array/4sum-ii",title:"4Sum II",description:"\u63cf\u8ff0",source:"@site/docs/array/4sum-ii.md",sourceDirName:"array",slug:"/array/4sum-ii",permalink:"/array/4sum-ii",draft:!1,tags:[],version:"current",frontMatter:{title:"4Sum II"},sidebar:"docs",previous:{title:"2Sum",permalink:"/array/2sum"},next:{title:"Next Permutation",permalink:"/array/next-permutation"}},N={},c=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],o={toc:c};function k(a){let{components:e,...t}=a;return(0,s.kt)("wrapper",(0,n.Z)({},o,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,s.kt)("p",null,"Given four lists A, B, C, D of integer values, compute how many tuples ",(0,s.kt)("inlineCode",{parentName:"p"},"(i, j, k, l)")," there are such that ",(0,s.kt)("inlineCode",{parentName:"p"},"A[i] + B[j] + C[k] + D[l]")," is zero."),(0,s.kt)("p",null,"To make problem a bit easier, all A, B, C, D have same length of N where 0 \u2264 N \u2264 500. All integers are in the range of ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"2"),(0,s.kt)("mn",{parentName:"msup"},"28"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"-2^{28}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8974em",verticalAlign:"-0.0833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"28")))))))))))))," to ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"2"),(0,s.kt)("mn",{parentName:"msup"},"28"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2^{28}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"28")))))))))))))," - 1 and the result is guaranteed to be at most ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"2"),(0,s.kt)("mn",{parentName:"msup"},"31"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2^{31}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"31")))))))))))))," - 1."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example"),":"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Input"),":",(0,s.kt)("br",{parentName:"p"}),"\n","A = ","[ 1, 2]",(0,s.kt)("br",{parentName:"p"}),"\n","B = ","[-2,-1]",(0,s.kt)("br",{parentName:"p"}),"\n","C = ","[-1, 2]",(0,s.kt)("br",{parentName:"p"}),"\n","D = ","[ 0, 2]"),(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Output"),":",(0,s.kt)("br",{parentName:"p"}),"\n","2"),(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Explanation"),":",(0,s.kt)("br",{parentName:"p"}),"\n","The two tuples are:"),(0,s.kt)("ol",{parentName:"blockquote"},(0,s.kt)("li",{parentName:"ol"},"(0, 0, 0, 1) -> A","[0]"," + B","[0]"," + C","[0]"," + D","[1]"," = 1 + (-2) + (-1) + 2 = 0"),(0,s.kt)("li",{parentName:"ol"},"(1, 1, 0, 0) -> A","[1]"," + B","[1]"," + C","[0]"," + D","[0]"," = 2 + (-1) + (-1) + 0 = 0"))),(0,s.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"4 \u5c42\u5faa\u73af\u66b4\u529b\u641c\u7d22\uff0c\u65f6\u95f4\u590d\u6742\u5ea6 O(",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msup"},"n"),(0,s.kt)("mn",{parentName:"msup"},"4"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n^4")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"4")))))))))))),")\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6 O(1)."),(0,s.kt)("li",{parentName:"ol"},"\u7528\u4e00\u4e2a HashMap \u7f13\u5b58\u6570\u7ec4 A+B\uff0c\u53e6\u4e00\u4e2a HashMap \u7f13\u5b58 C+D\uff0ckey \u4e3a\u548c\uff0cvalue \u4e3a\u548c\u51fa\u73b0\u7684\u6b21\u6570\uff0c\u7136\u540e\u7528 2 \u5c42\u5faa\u73af\uff0c\u904d\u5386\u4e24\u4e2a HashMap\uff0c\u7edf\u8ba1\u548c\u4e3a 0 \u7684\u6b21\u6570\u3002\u8be5\u65b9\u6cd5\u65f6\u95f4\u590d\u6742\u5ea6 O(",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msup"},"n"),(0,s.kt)("mn",{parentName:"msup"},"2"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n^2")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))))))),")\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6 O(",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msup"},"n"),(0,s.kt)("mn",{parentName:"msup"},"2"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n^2")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))))))),")\uff0c\u7528\u7a7a\u95f4\u6362\u53d6\u4e86\u65f6\u95f4\u3002"),(0,s.kt)("li",{parentName:"ol"},"\u63a8\u5e7f\u5230 k \u4e2a\u6570\u7ec4\uff0c\u4e5f\u53ef\u4ee5\u7528\u4e0a\u8ff0\u65b9\u6cd5\uff0c\u7528\u4e00\u4e2a HashMap \u7f13\u5b58\u524d",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mfrac",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"mfrac"},"k"),(0,s.kt)("mn",{parentName:"mfrac"},"2"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\frac{k}{2}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.2251em",verticalAlign:"-0.345em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,s.kt)("span",{parentName:"span",className:"mfrac"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8801em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.655em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"2")))),(0,s.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,s.kt)("span",{parentName:"span",style:{top:"-3.394em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.03148em"}},"k"))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.345em"}},(0,s.kt)("span",{parentName:"span"}))))),(0,s.kt)("span",{parentName:"span",className:"mclose nulldelimiter"})))))),"\u4e2a\u6570\u7ec4\u7684\u548c\uff0c\u53e6\u4e00\u4e2a HashMap \u7f13\u5b58\u540e",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mfrac",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"mfrac"},"k"),(0,s.kt)("mn",{parentName:"mfrac"},"2"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\frac{k}{2}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.2251em",verticalAlign:"-0.345em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,s.kt)("span",{parentName:"span",className:"mfrac"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8801em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.655em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"2")))),(0,s.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,s.kt)("span",{parentName:"span",style:{top:"-3.394em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.03148em"}},"k"))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.345em"}},(0,s.kt)("span",{parentName:"span"}))))),(0,s.kt)("span",{parentName:"span",className:"mclose nulldelimiter"})))))),"\u4e2a\u6570\u7ec4\u7684\u548c\uff0c\u7136\u540e\u904d\u5386\u4e24\u4e2a HashMap\uff0c\u7edf\u8ba1\u548c\u4e3a 0 \u7684\u6b21\u6570\u3002\u65f6\u95f4\u590d\u6742\u5ea6 O(",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msup"},"n"),(0,s.kt)("mfrac",{parentName:"msup"},(0,s.kt)("mi",{parentName:"mfrac"},"k"),(0,s.kt)("mn",{parentName:"mfrac"},"2")))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n^{\\frac{k}{2}}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.979em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.979em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.363em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mopen nulldelimiter sizing reset-size3 size6"}),(0,s.kt)("span",{parentName:"span",className:"mfrac"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.88em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.656em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size3 size1 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"2")))),(0,s.kt)("span",{parentName:"span",style:{top:"-3.2255em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"frac-line mtight",style:{borderBottomWidth:"0.049em"}})),(0,s.kt)("span",{parentName:"span",style:{top:"-3.384em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size3 size1 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.03148em"}},"k"))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.344em"}},(0,s.kt)("span",{parentName:"span"}))))),(0,s.kt)("span",{parentName:"span",className:"mclose nulldelimiter sizing reset-size3 size6"})))))))))))))),")\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6 O(",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msup"},"n"),(0,s.kt)("mfrac",{parentName:"msup"},(0,s.kt)("mi",{parentName:"mfrac"},"k"),(0,s.kt)("mn",{parentName:"mfrac"},"2")))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n^{\\frac{k}{2}}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.979em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.979em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.363em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mopen nulldelimiter sizing reset-size3 size6"}),(0,s.kt)("span",{parentName:"span",className:"mfrac"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.88em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.656em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size3 size1 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"2")))),(0,s.kt)("span",{parentName:"span",style:{top:"-3.2255em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"frac-line mtight",style:{borderBottomWidth:"0.049em"}})),(0,s.kt)("span",{parentName:"span",style:{top:"-3.384em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size3 size1 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.03148em"}},"k"))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.344em"}},(0,s.kt)("span",{parentName:"span"}))))),(0,s.kt)("span",{parentName:"span",className:"mclose nulldelimiter sizing reset-size3 size6"})))))))))))))),")\u3002")),(0,s.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,s.kt)(m.Z,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,s.kt)(p.Z,{value:"python",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"# 4Sum II\n# HashMap\u7f13\u5b58\u548c\u51fa\u73b0\u7684\u6b21\u6570\n# Time Complexity: O(n^2)\uff0cSpace Complexity: O(n^2)\nfrom collections import Counter\nfrom itertools import product\nclass Solution:\n    def fourSumCount(self, A: List[int], B: List[int], C: List[int], D: List[int]) -> int:\n        AB = Counter(a+b for a, b in product(A, B))\n        CD = Counter(c+d for c, d in product(C, D))\n        count = 0\n        for num in AB:\n            if -num in CD:\n                count += AB[num] * CD[-num]\n        return count\n"))),(0,s.kt)(p.Z,{value:"java",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"// 4Sum II\n// HashMap\u7f13\u5b58\u548c\u51fa\u73b0\u7684\u6b21\u6570\n// Time Complexity: O(n^2)\uff0cSpace Complexity: O(n^2)\nclass Solution {\n    public int fourSumCount(int[] A, int[] B, int[] C, int[] D) {\n        Map<Integer, Integer> ab = makeSum(A, B);\n        Map<Integer, Integer> cd = makeSum(C, D);\n        int count = 0;\n        for (Map.Entry<Integer, Integer> entry : ab.entrySet()) {\n            if (cd.containsKey(-entry.getKey())) {\n                count += entry.getValue() * cd.get(-entry.getKey());\n            }\n        }\n        return count;\n    }\n    public Map<Integer, Integer> makeSum(int[] nums1, int[] nums2) {\n        Map<Integer, Integer> m = new HashMap<>();\n        for (int x : nums1) {\n            for (int y : nums2) {\n                int sum = x+y;\n                m.merge(sum, 1, Integer::sum);\n            }\n        }\n        return m;\n    }\n}\n"))),(0,s.kt)(p.Z,{value:"cpp",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"// 4Sum II\n// HashMap\u7f13\u5b58\u548c\u51fa\u73b0\u7684\u6b21\u6570\n// Time Complexity: O(n^2)\uff0cSpace Complexity: O(n^2)\nclass Solution {\npublic:\n    int fourSumCount(vector<int>& A, vector<int>& B, vector<int>& C, vector<int>& D) {\n        unordered_map<int, int> ab = makeSum(A, B);\n        unordered_map<int, int> cd = makeSum(C, D);\n        int count = 0;\n        for (std::pair<int, int> entry : ab) {\n            if (cd.count(-entry.first)) {\n                count += entry.second * cd[-entry.first];\n            }\n        }\n        return count;\n    }\n    unordered_map<int, int> makeSum(const vector<int>& nums1, const vector<int>& nums2) {\n        unordered_map<int, int> m;\n        for (int x : nums1) {\n            for (int y : nums2) {\n                m[x+y]++;\n            }\n        }\n        return m;\n    }\n};\n")))),(0,s.kt)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/array/2sum"},"2Sum")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/array/2sum-ii"},"2Sum II")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/array/3sum"},"3Sum")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/array/3sum-closest"},"3Sum Closest")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/array/4sum"},"4Sum"))))}k.isMDXComponent=!0}}]);