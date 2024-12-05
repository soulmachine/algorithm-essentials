"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[6076],{74781:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>c,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"greedy/task-scheduler","title":"Task Scheduler","description":"\u63cf\u8ff0","source":"@site/docs/greedy/task-scheduler.md","sourceDirName":"greedy","slug":"/greedy/task-scheduler","permalink":"/en/greedy/task-scheduler","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Task Scheduler"},"sidebar":"docs","previous":{"title":"Patching Array","permalink":"/en/greedy/patching-array"},"next":{"title":"Two City Scheduling","permalink":"/en/greedy/two-city-scheduling"}}');var a=s(74848),r=s(28453),l=s(11470),i=s(19365);const c={title:"Task Scheduler"},o=void 0,u={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}];function h(e){const n={annotation:"annotation",blockquote:"blockquote",br:"br",code:"code",h3:"h3",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,a.jsxs)(n.p,{children:["Given a characters array ",(0,a.jsx)(n.code,{children:"tasks"}),", representing the tasks a CPU needs to do, where each letter represents a different task. Tasks could be done in any order. Each task is done in one unit of time. For each unit of time, the CPU could complete either one task or just be idle."]}),"\n",(0,a.jsxs)(n.p,{children:["However, there is a non-negative integer ",(0,a.jsx)(n.code,{children:"n"})," that represents the cooldown period between two ",(0,a.jsx)(n.strong,{children:"same tasks"})," (the same letter in the array), that is that there must be at least n units of time between any two same tasks."]}),"\n",(0,a.jsx)(n.p,{children:"Return the least number of units of times that the CPU will take to finish all the given tasks."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Example 1"}),":"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Input"}),': tasks = ["A","A","A","B","B","B"], n = 2',(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Output"}),": 8",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Explanation"}),":",(0,a.jsx)(n.br,{}),"\n","A -> B -> idle -> A -> B -> idle -> A -> B",(0,a.jsx)(n.br,{}),"\n","There is at least 2 units of time between any two same tasks."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Example 2"}),":"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Input"}),': tasks = ["A","A","A","B","B","B"], n = 0',(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Output"}),": 6",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Explanation"}),": On this case any permutation of size 6 would work since n = 0.",(0,a.jsx)(n.br,{}),"\n",'["A","A","A","B","B","B"]',(0,a.jsx)(n.br,{}),"\n",'["A","B","A","B","A","B"]',(0,a.jsx)(n.br,{}),"\n",'["B","B","B","A","A","A"]',(0,a.jsx)(n.br,{}),"\n","...",(0,a.jsx)(n.br,{}),"\n","And so on."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Example 3"}),":"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Input"}),': tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"], n = 2',(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Output"}),": 16",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Explanation"}),":",(0,a.jsx)(n.br,{}),"\n","One possible solution is",(0,a.jsx)(n.br,{}),"\n","A -> B -> C -> A -> D -> E -> A -> F -> G -> A -> idle -> idle -> A -> idle -> idle -> A"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Constraints"}),":"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mn,{children:"1"}),(0,a.jsx)(n.mo,{children:"\u2264"}),(0,a.jsx)(n.mi,{children:"t"}),(0,a.jsx)(n.mi,{children:"a"}),(0,a.jsx)(n.mi,{children:"s"}),(0,a.jsx)(n.mi,{children:"k"}),(0,a.jsx)(n.mi,{mathvariant:"normal",children:"."}),(0,a.jsx)(n.mi,{children:"l"}),(0,a.jsx)(n.mi,{children:"e"}),(0,a.jsx)(n.mi,{children:"n"}),(0,a.jsx)(n.mi,{children:"g"}),(0,a.jsx)(n.mi,{children:"t"}),(0,a.jsx)(n.mi,{children:"h"}),(0,a.jsx)(n.mo,{children:"\u2264"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"1 \\leq task.length \\leq "})]})})}),(0,a.jsxs)(n.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.7804em",verticalAlign:"-0.136em"}}),(0,a.jsx)(n.span,{className:"mord",children:"1"}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(n.span,{className:"mrel",children:"\u2264"}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"t"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"a"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"s"}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,a.jsx)(n.span,{className:"mord",children:"."}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"e"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"t"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"h"}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(n.span,{className:"mrel",children:"\u2264"})]})]})]}),"10^4$"]}),"\n",(0,a.jsx)(n.li,{children:"tasks[i] is upper-case English letter."}),"\n",(0,a.jsxs)(n.li,{children:["The integer ",(0,a.jsx)(n.code,{children:"n"})," is in the range ",(0,a.jsx)(n.code,{children:"[0, 100]"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,a.jsxs)(n.p,{children:["\u60f3\u8981\u6700\u5c0f\u5316\u603b\u65f6\u95f4\uff0c\u5c31\u8981\u5c3d\u53ef\u80fd\u7684\u51cf\u5c0f\u7a7a\u95f2\u7684\u65f6\u95f4\u3002\u5047\u8bbe\u67d0\u4e2a\u4efb\u52a1\u51fa\u73b0\u7684\u6b21\u6570\u6700\u591a\uff0c\u7528",(0,a.jsx)(n.code,{children:"f_max"}),"\u8868\u793a\uff0c\u90a3\u4e48\u7a7a\u95f2\u65f6\u95f4\u7406\u8bba\u4e0a\u6700\u5927\u503c\u5c31\u662f ",(0,a.jsx)(n.code,{children:"(f_max-1) * n"}),"\uff0c\u6211\u4eec\u53ef\u4ee5\u5f80\u8fd9 ",(0,a.jsx)(n.code,{children:"n-1"}),"\u4e2a\u7a7a\u6321\u4e2d\uff0c\u5c3d\u53ef\u80fd\u7684\u63d2\u5165\u522b\u7684\u4efb\u52a1\u3002\u6bcf\u4e00\u8f6e\u5faa\u73af\uff0c\u9009\u62e9\u9891\u7387\u6700\u9ad8\u7684\u4efb\u52a1\uff0c\u5728\u6bcf\u4e2a\u7a7a\u6321\u4e2d\u90fd\u63d2\u5165\u8be5\u4efb\u52a1\uff0c\u5e76\u628a\u8be5\u4efb\u52a1\u7684\u9891\u7387\u51cf\u6389",(0,a.jsx)(n.code,{children:"f_max-1"}),"\u3002\u8fd9\u662f\u5178\u578b\u7684\u8d2a\u5fc3\u7b56\u7565\u3002"]}),"\n",(0,a.jsx)(n.h3,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n","\n",(0,a.jsxs)(l.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,a.jsx)(i.A,{value:"java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"// Task Scheduler\n// Time Complexity: O(n), Space Complexity: O(1)\nclass Solution {\n    public int leastInterval(char[] tasks, int n) {\n        // frequencies of the tasks\n        int[] m = new int[26];\n        for (int t : tasks) m[t - 'A']++;\n        Arrays.sort(m);\n\n        int f_max = m[25];\n        int idle_time = (f_max - 1) * n;\n\n        for (int i = 24; i >= 0 && idle_time > 0; --i) {\n            idle_time -= Math.min(f_max - 1, m[i]);\n        }\n        idle_time = Math.max(0, idle_time);\n\n        return idle_time + tasks.length;\n    }\n}\n"})})}),(0,a.jsx)(i.A,{value:"cpp",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"// TODO\n"})})})]})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,n,s)=>{s.d(n,{A:()=>l});s(96540);var t=s(34164);const a={tabItem:"tabItem_Ymn6"};var r=s(74848);function l(e){let{children:n,hidden:s,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,l),hidden:s,children:n})}},11470:(e,n,s)=>{s.d(n,{A:()=>y});var t=s(96540),a=s(34164),r=s(23104),l=s(56347),i=s(205),c=s(57485),o=s(31682),u=s(70679);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:s}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:s,attributes:t,default:a}}=e;return{value:n,label:s,attributes:t,default:a}}))}(s);return function(e){const n=(0,o.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function m(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:s}=e;const a=(0,l.W6)(),r=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,c.aZ)(r),(0,t.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})}),[r,a])]}function p(e){const{defaultValue:n,queryString:s=!1,groupId:a}=e,r=h(e),[l,c]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:r}))),[o,d]=x({queryString:s,groupId:a}),[p,j]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,r]=(0,u.Dv)(s);return[a,(0,t.useCallback)((e=>{s&&r.set(e)}),[s,r])]}({groupId:a}),b=(()=>{const e=o??p;return m({value:e,tabValues:r})?e:null})();(0,i.A)((()=>{b&&c(b)}),[b]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),j(e)}),[d,j,r]),tabValues:r}}var j=s(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=s(74848);function g(e){let{className:n,block:s,selectedValue:t,selectValue:l,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,r.a_)(),u=e=>{const n=e.currentTarget,s=c.indexOf(n),a=i[s].value;a!==t&&(o(n),l(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const s=c.indexOf(e.currentTarget)+1;n=c[s]??c[0];break}case"ArrowLeft":{const s=c.indexOf(e.currentTarget)-1;n=c[s]??c[c.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":s},n),children:i.map((e=>{let{value:n,label:s,attributes:r}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>c.push(e),onKeyDown:d,onClick:u,...r,className:(0,a.A)("tabs__item",b.tabItem,r?.className,{"tabs__item--active":t===n}),children:s??n},n)}))})}function v(e){let{lazy:n,children:s,selectedValue:r}=e;const l=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function k(e){const n=p(e);return(0,f.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,f.jsx)(g,{...n,...e}),(0,f.jsx)(v,{...n,...e})]})}function y(e){const n=(0,j.A)();return(0,f.jsx)(k,{...e,children:d(e.children)},String(n))}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>i});var t=s(96540);const a={},r=t.createContext(a);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);