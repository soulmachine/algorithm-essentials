"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[4581],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),o=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=o(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=o(a),k=r,d=c["".concat(i,".").concat(k)]||c[k]||u[k]||s;return a?n.createElement(d,l(l({ref:t},m),{},{components:a})):n.createElement(d,l({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,l=new Array(s);l[0]=c;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var o=2;o<s;o++)l[o]=a[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(6010);const s="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,l),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>k});var n=a(7462),r=a(7294),s=a(6010),l=a(2389),p=a(7392),i=a(7094),o=a(2466);const m="tabList__CuJ",u="tabItem_LNqP";function c(e){var t;const{lazy:a,block:l,defaultValue:c,values:k,groupId:d,className:h}=e,N=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=k??N.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),f=(0,p.l)(b,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===c?c:c??(null==(t=N.find((e=>e.props.default)))?void 0:t.props.value)??N[0].props.value;if(null!==v&&!b.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:y}=(0,i.U)(),[w,x]=(0,r.useState)(v),O=[],{blockElementScrollPositionUntilNextRender:A}=(0,o.o5)();if(null!=d){const e=g[d];null!=e&&e!==w&&b.some((t=>t.value===e))&&x(e)}const T=e=>{const t=e.currentTarget,a=O.indexOf(t),n=b[a].value;n!==w&&(A(t),x(n),null!=d&&y(d,String(n)))},E=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;a=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;a=O[t]??O[O.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,s.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":l},h)},b.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>O.push(e),onKeyDown:E,onFocus:T,onClick:T},l,{className:(0,s.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":w===t})}),a??t)}))),a?(0,r.cloneElement)(N.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},N.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function k(e){const t=(0,l.Z)();return r.createElement(c,(0,n.Z)({key:String(t)},e))}},300:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>k,frontMatter:()=>p,metadata:()=>o,toc:()=>u});var n=a(7462),r=(a(7294),a(3905)),s=a(5488),l=a(5162);const p={title:"Task Scheduler"},i=void 0,o={unversionedId:"greedy/task-scheduler",id:"greedy/task-scheduler",title:"Task Scheduler",description:"\u63cf\u8ff0",source:"@site/docs/greedy/task-scheduler.md",sourceDirName:"greedy",slug:"/greedy/task-scheduler",permalink:"/greedy/task-scheduler",draft:!1,tags:[],version:"current",frontMatter:{title:"Task Scheduler"},sidebar:"docs",previous:{title:"Patching Array",permalink:"/greedy/patching-array"},next:{title:"\u52a8\u6001\u89c4\u5212",permalink:"/dp/"}},m={},u=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}],c={toc:u};function k(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.kt)("p",null,"Given a characters array ",(0,r.kt)("inlineCode",{parentName:"p"},"tasks"),", representing the tasks a CPU needs to do, where each letter represents a different task. Tasks could be done in any order. Each task is done in one unit of time. For each unit of time, the CPU could complete either one task or just be idle."),(0,r.kt)("p",null,"However, there is a non-negative integer ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," that represents the cooldown period between two ",(0,r.kt)("strong",{parentName:"p"},"same tasks")," (the same letter in the array), that is that there must be at least n units of time between any two same tasks."),(0,r.kt)("p",null,"Return the least number of units of times that the CPU will take to finish all the given tasks."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 1"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Input"),": tasks = ",'["A","A","A","B","B","B"]',", n = 2",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Output"),": 8",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Explanation"),":",(0,r.kt)("br",{parentName:"p"}),"\n","A -> B -> idle -> A -> B -> idle -> A -> B",(0,r.kt)("br",{parentName:"p"}),"\n","There is at least 2 units of time between any two same tasks.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 2"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Input"),": tasks = ",'["A","A","A","B","B","B"]',", n = 0",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Output"),": 6",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Explanation"),": On this case any permutation of size 6 would work since n = 0.",(0,r.kt)("br",{parentName:"p"}),"\n",'["A","A","A","B","B","B"]["A","B","A","B","A","B"]',(0,r.kt)("br",{parentName:"p"}),"\n",'["B","B","B","A","A","A"]',(0,r.kt)("br",{parentName:"p"}),"\n","...",(0,r.kt)("br",{parentName:"p"}),"\n","And so on.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 3"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Input"),": tasks = ",'["A","A","A","A","A","A","B","C","D","E","F","G"]',", n = 2",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Output"),": 16",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Explanation"),":",(0,r.kt)("br",{parentName:"p"}),"\n","One possible solution is",(0,r.kt)("br",{parentName:"p"}),"\n","A -> B -> C -> A -> D -> E -> A -> F -> G -> A -> idle -> idle -> A -> idle -> idle -> A")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Constraints"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"1 <= task.length <= ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mn",{parentName:"mrow"},"1"),(0,r.kt)("msup",{parentName:"mrow"},(0,r.kt)("mn",{parentName:"msup"},"0"),(0,r.kt)("mn",{parentName:"msup"},"4"))),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"10^4")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord"},"0"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"4"))))))))))))),(0,r.kt)("li",{parentName:"ul"},"tasks","[i]"," is upper-case English letter."),(0,r.kt)("li",{parentName:"ul"},"The integer ",(0,r.kt)("inlineCode",{parentName:"li"},"n")," is in the range ",(0,r.kt)("inlineCode",{parentName:"li"},"[0, 100]"),".")),(0,r.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,r.kt)("p",null,"\u60f3\u8981\u6700\u5c0f\u5316\u603b\u65f6\u95f4\uff0c\u5c31\u8981\u5c3d\u53ef\u80fd\u7684\u51cf\u5c0f\u7a7a\u95f2\u7684\u65f6\u95f4\u3002\u5047\u8bbe\u67d0\u4e2a\u4efb\u52a1\u51fa\u73b0\u7684\u6b21\u6570\u6700\u591a\uff0c\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"f_max"),"\u8868\u793a\uff0c\u90a3\u4e48\u7a7a\u95f2\u65f6\u95f4\u7406\u8bba\u4e0a\u6700\u5927\u503c\u5c31\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"(f_max-1) * n"),"\uff0c\u6211\u4eec\u53ef\u4ee5\u5f80\u8fd9 ",(0,r.kt)("inlineCode",{parentName:"p"},"n-1"),"\u4e2a\u7a7a\u6321\u4e2d\uff0c\u5c3d\u53ef\u80fd\u7684\u63d2\u5165\u522b\u7684\u4efb\u52a1\u3002\u6bcf\u4e00\u8f6e\u5faa\u73af\uff0c\u9009\u62e9\u9891\u7387\u6700\u9ad8\u7684\u4efb\u52a1\uff0c\u5728\u6bcf\u4e2a\u7a7a\u6321\u4e2d\u90fd\u63d2\u5165\u8be5\u4efb\u52a1\uff0c\u5e76\u628a\u8be5\u4efb\u52a1\u7684\u9891\u7387\u51cf\u6389",(0,r.kt)("inlineCode",{parentName:"p"},"f_max-1"),"\u3002\u8fd9\u662f\u5178\u578b\u7684\u8d2a\u5fc3\u7b56\u7565\u3002"),(0,r.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,r.kt)(s.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Task Scheduler\n// Time Complexity: O(n), Space Complexity: O(1)\nclass Solution {\n    public int leastInterval(char[] tasks, int n) {\n        // frequencies of the tasks\n        int[] m = new int[26];\n        for (int t : tasks) m[t - 'A']++;\n        Arrays.sort(m);\n\n        int f_max = m[25];\n        int idle_time = (f_max - 1) * n;\n\n        for (int i = 24; i >= 0 && idle_time > 0; --i) {\n            idle_time -= Math.min(f_max - 1, m[i]);\n        }\n        idle_time = Math.max(0, idle_time);\n\n        return idle_time + tasks.length;\n    }\n}\n"))),(0,r.kt)(l.Z,{value:"cpp",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// TODO\n")))))}k.isMDXComponent=!0}}]);