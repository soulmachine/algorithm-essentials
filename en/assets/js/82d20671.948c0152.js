"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[9113],{24283:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"sorting/heap-sort/meeting-rooms-ii","title":"Meeting Rooms II","description":"\u63cf\u8ff0","source":"@site/docs/sorting/heap-sort/meeting-rooms-ii.md","sourceDirName":"sorting/heap-sort","slug":"/sorting/heap-sort/meeting-rooms-ii","permalink":"/en/sorting/heap-sort/meeting-rooms-ii","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Meeting Rooms II"},"sidebar":"docs","previous":{"title":"Maximum Gap","permalink":"/en/sorting/radix-sort/maximum-gap"},"next":{"title":"Top K Frequent Elements","permalink":"/en/sorting/heap-sort/top-k-frequent-elements"}}');var a=t(74848),s=t(28453),l=t(11470),i=t(19365);const o={title:"Meeting Rooms II"},u=void 0,c={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}];function p(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,a.jsxs)(n.p,{children:["Given an array of meeting time intervals consisting of start and end times ",(0,a.jsx)(n.code,{children:"[[s1,e1],[s2,e2],...]"})," (s",(0,a.jsx)("sub",{children:"i"})," < e",(0,a.jsx)("sub",{children:"i"}),"), find the minimum number of conference rooms required."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Example 1"}),":"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Input"}),": [[0, 30],[5, 10],[15, 20]]",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Output"}),": 2"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Example 2"}),":"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Input"}),": [[7,10],[2,4]]",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Output"}),": 1"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,a.jsxs)(n.p,{children:["\u9996\u5148\u5c06\u6570\u7ec4\u6309\u7167",(0,a.jsx)(n.code,{children:"interval"}),"\u7684\u5f00\u59cb\u65f6\u95f4\u6392\u5e8f\uff0c\u7136\u540e\u8bbe\u7f6e\u4e00\u4e2a\u5c0f\u6839\u5806\uff0c\u7528\u4e8e\u5b58\u50a8\u7684\u6b63\u5728\u4f7f\u7528\u4e2d\u7684\u4f1a\u8bae\u5ba4\uff0c\u6309\u7ed3\u675f\u65f6\u95f4\u6392\u5e8f\uff0c\u5806\u9876\u5c31\u662f\u7ed3\u675f\u65f6\u95f4\u6700\u5c0f\u7684",(0,a.jsx)(n.code,{children:"interval"}),"\u3002\u904d\u5386\u6570\u7ec4\uff0c\u628a\u4e00\u4e2a\u4e00\u4e2a\u7684",(0,a.jsx)(n.code,{children:"interval"}),"\u538b\u5165\u5806\uff0c\u6bcf\u6b21\u538b\u5165\u4e4b\u524d\uff0c\u628a\u65b0\u533a\u95f4\u4e0e\u5806\u9876\u7684\u533a\u95f4\u8fdb\u884c\u6bd4\u8f83\uff0c\u5982\u679c\u65b0\u533a\u95f4\u7684\u5f00\u59cb\u65f6\u95f4\u5927\u4e8e\u5806\u9876\u7684\u7ed3\u675f\u65f6\u95f4\uff0c\u8bf4\u660e\u5806\u9876\u7684\u4f1a\u8bae\u5ba4\u5df2\u7ecf\u7ed3\u675f\uff0c\u628a\u5b83\u5f39\u51fa\uff0c\u7136\u540e\u538b\u5165\u65b0\u533a\u95f4\u3002\u6570\u7ec4\u904d\u5386\u7ed3\u675f\u540e\uff0c\u5806\u7684\u5927\u5c0f\u5c31\u662f\u6240\u9700\u8981\u7684\u4f1a\u8bae\u5ba4\u6570\u91cf\u3002"]}),"\n","\n",(0,a.jsxs)(l.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,a.jsx)(i.A,{value:"java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"// Meeting Rooms II\n// Time Complexity: O(nlogn), Space Complexity: O(n)\nclass Solution {\n    public int minMeetingRooms(int[][] intervals) {\n        if (intervals.length == 0) return 0;\n        Arrays.sort(intervals,(int[] a, int[] b) ->a[0] - b[0]);\n\n        PriorityQueue<Integer> pq = new PriorityQueue<Integer>();\n        pq.offer(intervals[0][1]);\n\n        for (int i = 1; i < intervals.length; i++) {\n            if (intervals[i][0] >= pq.peek()) pq.poll();\n            pq.add(intervals[i][1]);\n        }\n\n        return pq.size();\n      }\n}\n"})})}),(0,a.jsx)(i.A,{value:"cpp",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"// TODO\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"\u76f8\u5173\u9898\u76ee",children:"\u76f8\u5173\u9898\u76ee"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/en/array/meeting-rooms",children:"Meeting Rooms"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>l});t(96540);var r=t(34164);const a={tabItem:"tabItem_Ymn6"};var s=t(74848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,l),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>I});var r=t(96540),a=t(34164),s=t(23104),l=t(56347),i=t(205),o=t(57485),u=t(31682),c=t(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,l.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=p(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[u,d]=m({queryString:t,groupId:a}),[f,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,c.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),v=(()=>{const e=u??f;return h({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{v&&o(v)}),[v]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=t(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function x(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const n=e.currentTarget,t=o.indexOf(n),a=i[t].value;a!==r&&(u(n),l(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:s}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=f(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...n,...e}),(0,g.jsx)(j,{...n,...e})]})}function I(e){const n=(0,b.A)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>i});var r=t(96540);const a={},s=r.createContext(a);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);