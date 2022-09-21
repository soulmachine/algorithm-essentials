"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[9501],{3905:(a,e,t)=>{t.d(e,{Zo:()=>o,kt:()=>N});var n=t(7294);function m(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function r(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function s(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){m(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a,e){if(null==a)return{};var t,n,m=function(a,e){if(null==a)return{};var t,n,m={},r=Object.keys(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(m[t]=a[t]);return m}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(m[t]=a[t])}return m}var l=n.createContext({}),i=function(a){var e=n.useContext(l),t=e;return a&&(t="function"==typeof a?a(e):s(s({},e),a)),t},o=function(a){var e=i(a.components);return n.createElement(l.Provider,{value:e},a.children)},c={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(a,e){var t=a.components,m=a.mdxType,r=a.originalType,l=a.parentName,o=p(a,["components","mdxType","originalType","parentName"]),u=i(t),N=m,k=u["".concat(l,".").concat(N)]||u[N]||c[N]||r;return t?n.createElement(k,s(s({ref:e},o),{},{components:t})):n.createElement(k,s({ref:e},o))}));function N(a,e){var t=arguments,m=e&&e.mdxType;if("string"==typeof a||m){var r=t.length,s=new Array(r);s[0]=u;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=a,p.mdxType="string"==typeof a?a:m,s[1]=p;for(var i=2;i<r;i++)s[i]=t[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5162:(a,e,t)=>{t.d(e,{Z:()=>s});var n=t(7294),m=t(6010);const r="tabItem_Ymn6";function s(a){let{children:e,hidden:t,className:s}=a;return n.createElement("div",{role:"tabpanel",className:(0,m.Z)(r,s),hidden:t},e)}},5488:(a,e,t)=>{t.d(e,{Z:()=>N});var n=t(7462),m=t(7294),r=t(6010),s=t(2389),p=t(7392),l=t(7094),i=t(2466);const o="tabList__CuJ",c="tabItem_LNqP";function u(a){var e;const{lazy:t,block:s,defaultValue:u,values:N,groupId:k,className:h}=a,g=m.Children.map(a.children,(a=>{if((0,m.isValidElement)(a)&&"value"in a.props)return a;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof a.type?a.type:a.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),d=N??g.map((a=>{let{props:{value:e,label:t,attributes:n}}=a;return{value:e,label:t,attributes:n}})),y=(0,p.l)(d,((a,e)=>a.value===e.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((a=>a.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===u?u:u??(null==(e=g.find((a=>a.props.default)))?void 0:e.props.value)??g[0].props.value;if(null!==b&&!d.some((a=>a.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${d.map((a=>a.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:v}=(0,l.U)(),[w,x]=(0,m.useState)(b),j=[],{blockElementScrollPositionUntilNextRender:S}=(0,i.o5)();if(null!=k){const a=f[k];null!=a&&a!==w&&d.some((e=>e.value===a))&&x(a)}const O=a=>{const e=a.currentTarget,t=j.indexOf(e),n=d[t].value;n!==w&&(S(e),x(n),null!=k&&v(k,String(n)))},R=a=>{var e;let t=null;switch(a.key){case"ArrowRight":{const e=j.indexOf(a.currentTarget)+1;t=j[e]??j[0];break}case"ArrowLeft":{const e=j.indexOf(a.currentTarget)-1;t=j[e]??j[j.length-1];break}}null==(e=t)||e.focus()};return m.createElement("div",{className:(0,r.Z)("tabs-container",o)},m.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},h)},d.map((a=>{let{value:e,label:t,attributes:s}=a;return m.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:a=>j.push(a),onKeyDown:R,onFocus:O,onClick:O},s,{className:(0,r.Z)("tabs__item",c,null==s?void 0:s.className,{"tabs__item--active":w===e})}),t??e)}))),t?(0,m.cloneElement)(g.filter((a=>a.props.value===w))[0],{className:"margin-top--md"}):m.createElement("div",{className:"margin-top--md"},g.map(((a,e)=>(0,m.cloneElement)(a,{key:e,hidden:a.props.value!==w})))))}function N(a){const e=(0,s.Z)();return m.createElement(u,(0,n.Z)({key:String(e)},a))}},9928:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>N,frontMatter:()=>p,metadata:()=>i,toc:()=>c});var n=t(7462),m=(t(7294),t(3905)),r=t(5488),s=t(5162);const p={title:"Maximum Subarray"},l=void 0,i={unversionedId:"dp/maximum-subarray",id:"dp/maximum-subarray",title:"Maximum Subarray",description:"\u63cf\u8ff0",source:"@site/docs/dp/maximum-subarray.md",sourceDirName:"dp",slug:"/dp/maximum-subarray",permalink:"/en/dp/maximum-subarray",draft:!1,tags:[],version:"current",frontMatter:{title:"Maximum Subarray"},sidebar:"docs",previous:{title:"Triangle",permalink:"/en/dp/triangle"},next:{title:"Maximum Product Subarray",permalink:"/en/dp/maximum-product-subarray"}},o={},c=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u52a8\u89c4",id:"\u52a8\u89c4",level:3},{value:"\u601d\u8def 5",id:"\u601d\u8def-5",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],u={toc:c};function N(a){let{components:e,...t}=a;return(0,m.kt)("wrapper",(0,n.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,m.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,m.kt)("p",null,"Find the contiguous subarray within an array (containing at least one number) which has the largest sum."),(0,m.kt)("p",null,"For example, given the array ",(0,m.kt)("inlineCode",{parentName:"p"},"[\u22122,1,\u22123,4,\u22121,2,1,\u22125,4]"),",\nthe contiguous subarray ",(0,m.kt)("inlineCode",{parentName:"p"},"[4,\u22121,2,1]")," has the largest ",(0,m.kt)("inlineCode",{parentName:"p"},"sum = 6"),"."),(0,m.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,m.kt)("p",null,"\u6700\u5927\u8fde\u7eed\u5b50\u5e8f\u5217\u548c\uff0c\u975e\u5e38\u7ecf\u5178\u7684\u9898\u3002"),(0,m.kt)("p",null,"\u5f53\u6211\u4eec\u4ece\u5934\u5230\u5c3e\u904d\u5386\u8fd9\u4e2a\u6570\u7ec4\u7684\u65f6\u5019\uff0c\u5bf9\u4e8e\u6570\u7ec4\u91cc\u7684\u4e00\u4e2a\u6574\u6570\uff0c\u5b83\u6709\u51e0\u79cd\u9009\u62e9\u5462\uff1f\u5b83\u53ea\u6709\u4e24\u79cd\u9009\u62e9\uff1a 1\u3001\u52a0\u5165\u4e4b\u524d\u7684 SubArray\uff1b2. \u81ea\u5df1\u53e6\u8d77\u4e00\u4e2a SubArray\u3002\u90a3\u4ec0\u4e48\u65f6\u5019\u4f1a\u51fa\u73b0\u8fd9\u4e24\u79cd\u60c5\u51b5\u5462\uff1f"),(0,m.kt)("p",null,"\u5982\u679c\u4e4b\u524d SubArray \u7684\u603b\u4f53\u548c\u5927\u4e8e 0 \u7684\u8bdd\uff0c\u6211\u4eec\u8ba4\u4e3a\u5176\u5bf9\u540e\u7eed\u7ed3\u679c\u662f\u6709\u8d21\u732e\u7684\u3002\u8fd9\u79cd\u60c5\u51b5\u4e0b\u6211\u4eec\u9009\u62e9\u52a0\u5165\u4e4b\u524d\u7684 SubArray"),(0,m.kt)("p",null,"\u5982\u679c\u4e4b\u524d SubArray \u7684\u603b\u4f53\u548c\u4e3a 0 \u6216\u8005\u5c0f\u4e8e 0 \u7684\u8bdd\uff0c\u6211\u4eec\u8ba4\u4e3a\u5176\u5bf9\u540e\u7eed\u7ed3\u679c\u662f\u6ca1\u6709\u8d21\u732e\uff0c\u751a\u81f3\u662f\u6709\u5bb3\u7684\uff08\u5c0f\u4e8e 0 \u65f6\uff09\u3002\u8fd9\u79cd\u60c5\u51b5\u4e0b\u6211\u4eec\u9009\u62e9\u4ee5\u8fd9\u4e2a\u6570\u5b57\u5f00\u59cb\uff0c\u53e6\u8d77\u4e00\u4e2a SubArray\u3002"),(0,m.kt)("p",null,"\u8bbe\u72b6\u6001\u4e3a",(0,m.kt)("inlineCode",{parentName:"p"},"f[j]"),"\uff0c\u8868\u793a\u4ee5",(0,m.kt)("inlineCode",{parentName:"p"},"S[j]"),"\u7ed3\u5c3e\u7684\u6700\u5927\u8fde\u7eed\u5b50\u5e8f\u5217\u548c\uff0c\u5219\u72b6\u6001\u8f6c\u79fb\u65b9\u7a0b\u5982\u4e0b\uff1a"),(0,m.kt)("p",null,(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"f"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,m.kt)("mi",{parentName:"mrow"},"j"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mi",{parentName:"mrow"},"max"),(0,m.kt)("mo",{parentName:"mrow"},"\u2061"),(0,m.kt)("mrow",{parentName:"mrow"},(0,m.kt)("mo",{parentName:"mrow",fence:"true"},"{"),(0,m.kt)("mi",{parentName:"mrow"},"f"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,m.kt)("mi",{parentName:"mrow"},"j"),(0,m.kt)("mo",{parentName:"mrow"},"\u2212"),(0,m.kt)("mn",{parentName:"mrow"},"1"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,m.kt)("mo",{parentName:"mrow"},"+"),(0,m.kt)("mi",{parentName:"mrow"},"S"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,m.kt)("mi",{parentName:"mrow"},"j"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mi",{parentName:"mrow"},"S"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,m.kt)("mi",{parentName:"mrow"},"j"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,m.kt)("mo",{parentName:"mrow",fence:"true"},"}")),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mn",{parentName:"mrow"},"1"),(0,m.kt)("mo",{parentName:"mrow"},"\u2264"),(0,m.kt)("mi",{parentName:"mrow"},"j"),(0,m.kt)("mo",{parentName:"mrow"},"\u2264"),(0,m.kt)("mi",{parentName:"mrow"},"n")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"f[j] = \\max\\left\\{f[j-1]+S[j],S[j]\\right\\}, 1 \\leq j \\leq n")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"["),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,m.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mop"},"max"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"minner"},(0,m.kt)("span",{parentName:"span",className:"mopen delimcenter",style:{top:"0em"}},"{"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"["),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"1"),(0,m.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"S"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"["),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,m.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"S"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"["),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,m.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,m.kt)("span",{parentName:"span",className:"mclose delimcenter",style:{top:"0em"}},"}")),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"1"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"\u2264"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"\u2264"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))),(0,m.kt)("p",null,(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mi",{parentName:"mrow"},"a"),(0,m.kt)("mi",{parentName:"mrow"},"r"),(0,m.kt)("mi",{parentName:"mrow"},"g"),(0,m.kt)("mi",{parentName:"mrow"},"e"),(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mi",{parentName:"mrow"},"max"),(0,m.kt)("mo",{parentName:"mrow"},"\u2061"),(0,m.kt)("mrow",{parentName:"mrow"},(0,m.kt)("mo",{parentName:"mrow",fence:"true"},"{"),(0,m.kt)("mi",{parentName:"mrow"},"f"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,m.kt)("mi",{parentName:"mrow"},"j"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,m.kt)("mo",{parentName:"mrow",fence:"true"},"}")),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mn",{parentName:"mrow"},"1"),(0,m.kt)("mo",{parentName:"mrow"},"\u2264"),(0,m.kt)("mi",{parentName:"mrow"},"j"),(0,m.kt)("mo",{parentName:"mrow"},"\u2264"),(0,m.kt)("mi",{parentName:"mrow"},"n")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"target = \\max\\left\\{f[j]\\right\\}, 1 \\leq j \\leq n")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8095em",verticalAlign:"-0.1944em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mop"},"max"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"minner"},(0,m.kt)("span",{parentName:"span",className:"mopen delimcenter",style:{top:"0em"}},"{"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"["),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,m.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,m.kt)("span",{parentName:"span",className:"mclose delimcenter",style:{top:"0em"}},"}")),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"1"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"\u2264"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"\u2264"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))),(0,m.kt)("p",null,"\u89e3\u91ca\u5982\u4e0b\uff1a"),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},"\u60c5\u51b5\u4e00\uff0cS","[j]","\u4e0d\u72ec\u7acb\uff0c\u4e0e\u524d\u9762\u7684\u67d0\u4e9b\u6570\u7ec4\u6210\u4e00\u4e2a\u8fde\u7eed\u5b50\u5e8f\u5217\uff0c\u5219\u6700\u5927\u8fde\u7eed\u5b50\u5e8f\u5217\u548c\u4e3a",(0,m.kt)("inlineCode",{parentName:"li"},"f[j-1]+S[j]"),"\u3002"),(0,m.kt)("li",{parentName:"ul"},"\u60c5\u51b5\u4e8c\uff0cS","[j]","\u72ec\u7acb\u5212\u5206\u6210\u4e3a\u4e00\u6bb5\uff0c\u5373\u8fde\u7eed\u5b50\u5e8f\u5217\u4ec5\u5305\u542b\u4e00\u4e2a\u6570 S","[j]","\uff0c\u5219\u6700\u5927\u8fde\u7eed\u5b50\u5e8f\u5217\u548c\u4e3a",(0,m.kt)("inlineCode",{parentName:"li"},"S[j]"),"\u3002")),(0,m.kt)("p",null,"\u5176\u4ed6\u601d\u8def\uff1a"),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},"\u601d\u8def 2\uff1a\u76f4\u63a5\u5728 i \u5230 j \u4e4b\u95f4\u66b4\u529b\u679a\u4e3e\uff0c\u590d\u6742\u5ea6\u662f",(0,m.kt)("inlineCode",{parentName:"li"},"O(n^3)")),(0,m.kt)("li",{parentName:"ul"},"\u601d\u8def 3\uff1a\u5904\u7406\u540e\u679a\u4e3e\uff0c\u8fde\u7eed\u5b50\u5e8f\u5217\u7684\u548c\u7b49\u4e8e\u4e24\u4e2a\u524d\u7f00\u548c\u4e4b\u5dee\uff0c\u590d\u6742\u5ea6",(0,m.kt)("inlineCode",{parentName:"li"},"O(n^2)"),"\u3002"),(0,m.kt)("li",{parentName:"ul"},"\u601d\u8def 4\uff1a\u5206\u6cbb\u6cd5\uff0c\u628a\u5e8f\u5217\u5206\u4e3a\u4e24\u6bb5\uff0c\u5206\u522b\u6c42\u6700\u5927\u8fde\u7eed\u5b50\u5e8f\u5217\u548c\uff0c\u7136\u540e\u5f52\u5e76\uff0c\u590d\u6742\u5ea6",(0,m.kt)("inlineCode",{parentName:"li"},"O(nlog n)")),(0,m.kt)("li",{parentName:"ul"},"\u601d\u8def 5\uff1a\u628a\u601d\u8def 2",(0,m.kt)("inlineCode",{parentName:"li"},"O(n^2)"),"\u7684\u4ee3\u7801\u7a0d\u4f5c\u5904\u7406\uff0c\u5f97\u5230",(0,m.kt)("inlineCode",{parentName:"li"},"O(n)"),"\u7684\u7b97\u6cd5"),(0,m.kt)("li",{parentName:"ul"},"\u601d\u8def 6\uff1a\u5f53\u6210 M=1 \u7684\u6700\u5927 M \u5b50\u6bb5\u548c")),(0,m.kt)("h3",{id:"\u52a8\u89c4"},"\u52a8\u89c4"),(0,m.kt)(r.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,m.kt)(s.Z,{value:"java",mdxType:"TabItem"},(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-java"},"// Maximum Subarray\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public int maxSubArray(int[] nums) {\n        int maxLocal = nums[0];\n        int global = nums[0];\n        for (int i = 1; i < nums.length; ++i) {\n            maxLocal = Math.max(nums[i], nums[i] + maxLocal);\n            global = Math.max(global, maxLocal);\n        }\n        return global;\n    }\n}\n"))),(0,m.kt)(s.Z,{value:"cpp",mdxType:"TabItem"},(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-cpp"},"// Maximum Subarray\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    int maxSubArray(const vector<int>& nums) {\n        int maxLocal = nums[0];\n        int global = nums[0];\n        for (int i = 1; i < nums.size(); ++i) {\n            maxLocal = max(nums[i], nums[i] + maxLocal);\n            global = max(global, maxLocal);\n        }\n        return global;\n    }\n};\n")))),(0,m.kt)("h3",{id:"\u601d\u8def-5"},"\u601d\u8def 5"),(0,m.kt)(r.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,m.kt)(s.Z,{value:"java",mdxType:"TabItem"},(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-java"},"// Maximum Subarray\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\npublic class Solution {\n    public int maxSubArray(int[] nums) {\n        return mcss(nums, 0, nums.length);\n    }\n    // \u601d\u8def5\uff0c\u6c42\u6700\u5927\u8fde\u7eed\u5b50\u5e8f\u5217\u548c\n    private static int mcss(int[] nums, int begin, int end) {\n        final int n = end - begin;\n        int[] sum = new int[n + 1];  // \u524dn\u9879\u548c\n\n        int result = Integer.MIN_VALUE;\n        int cur_min = sum[0];\n        for (int i = 1; i <= n; i++) {\n            sum[i] = sum[i - 1] + nums[begin  + i - 1];\n        }\n        for (int i = 1; i <= n; i++) {\n            result = Math.max(result, sum[i] - cur_min);\n            cur_min = Math.min(cur_min, sum[i]);\n        }\n        return result;\n    }\n}\n"))),(0,m.kt)(s.Z,{value:"cpp",mdxType:"TabItem"},(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-cpp"},"// Maximum Subarray\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\npublic:\n    int maxSubArray(vector<int>& A) {\n        return mcss(A.begin(), A.end());\n    }\nprivate:\n    // \u601d\u8def5\uff0c\u6c42\u6700\u5927\u8fde\u7eed\u5b50\u5e8f\u5217\u548c\n    template <typename Iter>\n    static int mcss(Iter begin, Iter end) {\n        int result, cur_min;\n        const int n = distance(begin, end);\n        int *sum = new int[n + 1];  // \u524dn\u9879\u548c\n\n        sum[0] = 0;\n        result = INT_MIN;\n        cur_min = sum[0];\n        for (int i = 1; i <= n; i++) {\n            sum[i] = sum[i - 1] + *(begin  + i - 1);\n        }\n        for (int i = 1; i <= n; i++) {\n            result = max(result, sum[i] - cur_min);\n            cur_min = min(cur_min, sum[i]);\n        }\n        delete[] sum;\n        return result;\n    }\n};\n")))),(0,m.kt)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("a",{parentName:"li",href:"/en/dp/maximum-subarray"},"Maximum Subarray")),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("a",{parentName:"li",href:"/en/binary-tree/recursion/binary-tree-maximum-path-sum"},"Binary Tree Maximum Path Sum"))))}N.isMDXComponent=!0}}]);