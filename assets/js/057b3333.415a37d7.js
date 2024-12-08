"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[9133],{18365:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>u,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>d});const l=JSON.parse('{"id":"data-structures","title":"\u6700\u5e38\u7528\u7684\u6570\u636e\u7ed3\u6784","description":"\u5b9a\u957f\u6570\u7ec4","source":"@site/docs/data-structures.md","sourceDirName":".","slug":"/data-structures","permalink":"/data-structures","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u6700\u5e38\u7528\u7684\u6570\u636e\u7ed3\u6784"},"sidebar":"docs","previous":{"title":"Consecutive Numbers Sum","permalink":"/glacier/consecutive-numbers-sum"},"next":{"title":"Java\u96c6\u5408\u6846\u67b6\u5c42\u6b21\u7ed3\u6784\u56fe","permalink":"/java-collection"}}');var t=n(74848),s=n(28453),r=n(11470),i=n(19365);const c={title:"\u6700\u5e38\u7528\u7684\u6570\u636e\u7ed3\u6784"},u=void 0,o={},d=[{value:"\u5b9a\u957f\u6570\u7ec4",id:"\u5b9a\u957f\u6570\u7ec4",level:3},{value:"\u52a8\u6001\u6570\u7ec4",id:"\u52a8\u6001\u6570\u7ec4",level:3},{value:"\u53cc\u5411\u94fe\u8868",id:"\u53cc\u5411\u94fe\u8868",level:3},{value:"\u6808",id:"\u6808",level:3},{value:"\u961f\u5217",id:"\u961f\u5217",level:3},{value:"\u53cc\u7aef\u961f\u5217",id:"\u53cc\u7aef\u961f\u5217",level:3},{value:"\u4f18\u5148\u961f\u5217\uff08\u5806\uff09",id:"\u4f18\u5148\u961f\u5217\u5806",level:3},{value:"HashMap",id:"hashmap",level:3},{value:"HashSet",id:"hashset",level:3}];function p(e){const a={code:"code",h3:"h3",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h3,{id:"\u5b9a\u957f\u6570\u7ec4",children:"\u5b9a\u957f\u6570\u7ec4"}),"\n",(0,t.jsxs)(r.A,{defaultValue:"python",groupId:"data-structures",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,t.jsx)(i.A,{value:"python",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:"arr = [0] * 10\n"})})}),(0,t.jsx)(i.A,{value:"java",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:"int[] arr = new int[10];\n"})})}),(0,t.jsx)(i.A,{value:"cpp",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-cpp",children:"vector<int> arr(10);\n"})})})]}),"\n",(0,t.jsx)(a.h3,{id:"\u52a8\u6001\u6570\u7ec4",children:"\u52a8\u6001\u6570\u7ec4"}),"\n",(0,t.jsxs)(r.A,{defaultValue:"python",groupId:"data-structures",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,t.jsx)(i.A,{value:"python",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:"l = []\n# Add a new element at tail\nl.append(1)\n"})})}),(0,t.jsx)(i.A,{value:"java",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:"List<Integer> l = new ArrayList<>();\n// Add a new element at tail\nl.add(1);\n"})})}),(0,t.jsx)(i.A,{value:"cpp",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-cpp",children:"vector<int> l;\n// Add a new element at tail\nl.push_back(1);\n"})})})]}),"\n",(0,t.jsx)(a.h3,{id:"\u53cc\u5411\u94fe\u8868",children:"\u53cc\u5411\u94fe\u8868"}),"\n",(0,t.jsxs)(r.A,{defaultValue:"java",groupId:"data-structures",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,t.jsx)(i.A,{value:"java",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:"// LinkedList is actually a doubly-linked list, to mimic singly linked list, always operate at head\nLinkedList<Integer> l = new LinkedList<>();\n// insert at head, time complexity O(1)\nl.offerFirst(7)\n// access head, time complexity O(1)\nl.peekFirst()\n// remove head, time complexity O(1)\nl.pollFirst()\n"})})}),(0,t.jsx)(i.A,{value:"cpp",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-cpp",children:"// std::list uses std::deque by default, to mimic singly linked list, always operate at head\nlist<int> l;\n// insert at head, time complexity O(1)\nl.push_front(7);\n// access head, time complexity O(1)\nl.front();\n// remove head, time complexity O(1)\nl.pop_front();\n"})})}),(0,t.jsx)(i.A,{value:"python",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:"# deque allows O(1) operation at both head and tail. Only use appendleft/popleft to mimic singly-linked list\nfrom collections import deque\n\n# create a new singly linked list\nl = deque()\n# insert at head, time complexity O(1)\nl.appendleft(7)\n# access head, time complexity O(1)\nl[0] if len(l) > 0 else None\n# remove head, time complexity O(1)\nl.popleft() if len(l) > 0 else None\n"})})})]}),"\n",(0,t.jsx)(a.h3,{id:"\u6808",children:"\u6808"}),"\n",(0,t.jsxs)(r.A,{defaultValue:"python",groupId:"data-structures",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,t.jsx)(i.A,{value:"python",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:"# To mimic stack, always operate at tail\ns = deque()\ns.append(7)\ns[-1]\ns.pop()\n"})})}),(0,t.jsx)(i.A,{value:"java",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:"Stack<Integer> s = new Stack<>();\ns.push(7)\ns.peek();\ns.pop()\ns.empty()\n"})})}),(0,t.jsx)(i.A,{value:"cpp",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-cpp",children:"stack<int>  s;\ns.push(7)\ns.top();\ns.pop()\n"})})})]}),"\n",(0,t.jsx)(a.h3,{id:"\u961f\u5217",children:"\u961f\u5217"}),"\n",(0,t.jsxs)(r.A,{defaultValue:"python",groupId:"data-structures",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,t.jsx)(i.A,{value:"python",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:"# To mimic a FIFO queue, push at tail, pop at head\nq = deque()\nq.append(7)\nq[0]\nq.popleft()\nlen(q) == 0\n"})})}),(0,t.jsx)(i.A,{value:"java",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:"Queue<Integer> q = new LinkedList<>();\nq.offer(7);\nq.peek();\nq.poll();\nq.isEmpty();\n"})})}),(0,t.jsx)(i.A,{value:"cpp",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-cpp",children:"queue<int> q;\ns.push_back(7)\ns.front();\ns.pop();\ns.empty()\n"})})})]}),"\n",(0,t.jsx)(a.h3,{id:"\u53cc\u7aef\u961f\u5217",children:"\u53cc\u7aef\u961f\u5217"}),"\n",(0,t.jsxs)(r.A,{defaultValue:"python",groupId:"data-structures",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,t.jsx)(i.A,{value:"python",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:"q = deque()\n# insert at tail, time complexity O(1)\nq.push(7)\n# access tail, time complexity O(1)\nq[-1]\n# remove tail, time complexity O(1)\nq.pop()\n# insert at head, time complexity O(1)\nq.pushleft(7)\n# access head, time complexity O(1)\nq[0]\n# remove head, time complexity O(1)\nq.popleft()\n"})})}),(0,t.jsx)(i.A,{value:"java",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:"Deque<Integer> q = new ArrayDeque<>();\n// insert at tail, time complexity O(1)\nq.offerLast(7)\n// access tail, time complexity O(1)\nq.peekLast()\n// remove tail, time complexity O(1)\nq.pollLast()\n// insert at head, time complexity O(1)\nq.offerFirst(7)\n// access head, time complexity O(1)\nq.peekFirst()\n// remove head, time complexity O(1)\nq.pollFirst()\n"})})}),(0,t.jsx)(i.A,{value:"cpp",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-cpp",children:"deque<int> q;\n// insert at tail, time complexity O(1)\nq.push_back(7)\n// access tail, time complexity O(1)\nq.back()\n// remove tail, time complexity O(1)\nq.pop_back()\n// insert at head, time complexity O(1)\nq.push_front(7)\n// access head, time complexity O(1)\nq.front()\n// remove head, time complexity O(1)\nq.pop_front()\n"})})})]}),"\n",(0,t.jsx)(a.h3,{id:"\u4f18\u5148\u961f\u5217\u5806",children:"\u4f18\u5148\u961f\u5217\uff08\u5806\uff09"}),"\n",(0,t.jsxs)(r.A,{defaultValue:"python",groupId:"data-structures",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,t.jsx)(i.A,{value:"python",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:"# min heap by default\npq = []\nheapq.heappush(pq, 7)\npq[0]\nheapq.heappop(pq)\nlen(pq) == 0\n"})})}),(0,t.jsx)(i.A,{value:"java",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:"// min heap by default\nPriorityQueue<Integer> pq = new PriorityQueue<>();\npq.offer(7);\npq.peek();\npq.poll();\npq.isEmpty();\n"})})}),(0,t.jsx)(i.A,{value:"cpp",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-cpp",children:"// max heap by default\npriority_queue<int> pq;\npq.push(7)\npq.top();\npq.pop();\npq.empty()\n"})})})]}),"\n",(0,t.jsx)(a.h3,{id:"hashmap",children:"HashMap"}),"\n",(0,t.jsxs)(r.A,{defaultValue:"python",groupId:"data-structures",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,t.jsx)(i.A,{value:"python",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:"m = {}\n"})})}),(0,t.jsx)(i.A,{value:"java",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:"Map<String, Integer> m = new HashMap<>();\n"})})}),(0,t.jsx)(i.A,{value:"cpp",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-cpp",children:"unordered_map<string, int> m;\n"})})})]}),"\n",(0,t.jsx)(a.h3,{id:"hashset",children:"HashSet"}),"\n",(0,t.jsxs)(r.A,{defaultValue:"python",groupId:"data-structures",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,t.jsx)(i.A,{value:"python",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:"s = set()\n"})})}),(0,t.jsx)(i.A,{value:"java",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:"Set<Integer> m = new HashSet<>();\n"})})}),(0,t.jsx)(i.A,{value:"cpp",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-cpp",children:"unordered_set<int> s;\n"})})})]})]})}function h(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},19365:(e,a,n)=>{n.d(a,{A:()=>r});n(96540);var l=n(34164);const t={tabItem:"tabItem_Ymn6"};var s=n(74848);function r(e){let{children:a,hidden:n,className:r}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,l.A)(t.tabItem,r),hidden:n,children:a})}},11470:(e,a,n)=>{n.d(a,{A:()=>q});var l=n(96540),t=n(34164),s=n(23104),r=n(56347),i=n(205),c=n(57485),u=n(31682),o=n(70679);function d(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:a,children:n}=e;return(0,l.useMemo)((()=>{const e=a??function(e){return d(e).map((e=>{let{props:{value:a,label:n,attributes:l,default:t}}=e;return{value:a,label:n,attributes:l,default:t}}))}(n);return function(e){const a=(0,u.XI)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function h(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function m(e){let{queryString:a=!1,groupId:n}=e;const t=(0,r.W6)(),s=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,c.aZ)(s),(0,l.useCallback)((e=>{if(!s)return;const a=new URLSearchParams(t.location.search);a.set(s,e),t.replace({...t.location,search:a.toString()})}),[s,t])]}function v(e){const{defaultValue:a,queryString:n=!1,groupId:t}=e,s=p(e),[r,c]=(0,l.useState)((()=>function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const l=n.find((e=>e.default))??n[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:a,tabValues:s}))),[u,d]=m({queryString:n,groupId:t}),[v,x]=function(e){let{groupId:a}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(a),[t,s]=(0,o.Dv)(n);return[t,(0,l.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:t}),j=(()=>{const e=u??v;return h({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{j&&c(j)}),[j]);return{selectedValue:r,selectValue:(0,l.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),x(e)}),[d,x,s]),tabValues:s}}var x=n(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=n(74848);function f(e){let{className:a,block:n,selectedValue:l,selectValue:r,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),o=e=>{const a=e.currentTarget,n=c.indexOf(a),t=i[n].value;t!==l&&(u(a),r(t))},d=e=>{let a=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;a=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;a=c[n]??c[c.length-1];break}}a?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":n},a),children:i.map((e=>{let{value:a,label:n,attributes:s}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:l===a?0:-1,"aria-selected":l===a,ref:e=>c.push(e),onKeyDown:d,onClick:o,...s,className:(0,t.A)("tabs__item",j.tabItem,s?.className,{"tabs__item--active":l===a}),children:n??a},a)}))})}function g(e){let{lazy:a,children:n,selectedValue:s}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){const e=r.find((e=>e.props.value===s));return e?(0,l.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:r.map(((e,a)=>(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==s})))})}function b(e){const a=v(e);return(0,y.jsxs)("div",{className:(0,t.A)("tabs-container",j.tabList),children:[(0,y.jsx)(f,{...a,...e}),(0,y.jsx)(g,{...a,...e})]})}function q(e){const a=(0,x.A)();return(0,y.jsx)(b,{...e,children:d(e.children)},String(a))}},28453:(e,a,n)=>{n.d(a,{R:()=>r,x:()=>i});var l=n(96540);const t={},s=l.createContext(t);function r(e){const a=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),l.createElement(s.Provider,{value:a},e.children)}}}]);