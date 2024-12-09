"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[730],{44368:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"stack-and-queue/queue/moving-average-from-data-stream","title":"Moving Average from Data Stream","description":"\u63cf\u8ff0","source":"@site/docs/stack-and-queue/queue/moving-average-from-data-stream.md","sourceDirName":"stack-and-queue/queue","slug":"/stack-and-queue/queue/moving-average-from-data-stream","permalink":"/stack-and-queue/queue/moving-average-from-data-stream","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Moving Average from Data Stream"},"sidebar":"docs","previous":{"title":"Implement Queue using Stacks","permalink":"/stack-and-queue/queue/implement-queue-using-stacks"},"next":{"title":"Sliding Window Maximum","permalink":"/stack-and-queue/queue/sliding-window-maximum"}}');var l=a(74848),i=a(28453),r=a(11470),u=a(19365);const s={title:"Moving Average from Data Stream"},o=void 0,c={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u53cc\u7aef\u961f\u5217",id:"\u53cc\u7aef\u961f\u5217",level:4},{value:"\u5faa\u73af\u961f\u5217",id:"\u5faa\u73af\u961f\u5217",level:4},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}];function p(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,l.jsx)(n.p,{children:"Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window."}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Example"}),":"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["MovingAverage m = new MovingAverage(3);",(0,l.jsx)(n.br,{}),"\n","m.next(1) = 1",(0,l.jsx)(n.br,{}),"\n","m.next(10) = (1 + 10) / 2",(0,l.jsx)(n.br,{}),"\n","m.next(3) = (1 + 10 + 3) / 3",(0,l.jsx)(n.br,{}),"\n","m.next(5) = (10 + 3 + 5) / 3"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,l.jsx)(n.p,{children:"\u53ef\u4ee5\u7528\u4e00\u4e2a\u53cc\u7aef\u961f\u5217\uff0c\u5927\u5c0f\u4e3a\u7a97\u53e3\u5927\u5c0f\uff0c\u5e76\u7528\u4e00\u4e2a\u53d8\u91cf\u5b58\u50a8\u603b\u548c\u3002\u6bcf\u6b21\u65b0\u6765\u4e00\u4e2a\u5143\u7d20\uff0c\u5c31\u63d2\u5165\u5230\u5c3e\u90e8\uff0c\u5e76\u4ece\u5934\u90e8\u5f39\u51fa\u65e7\u5143\u7d20\uff0c\u6700\u540e\u8981\u66f4\u65b0\u603b\u548c\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u7531\u4e8e\u8fd9\u4e2a\u53cc\u7aef\u961f\u5217\u7684\u5927\u5c0f\u662f\u56fa\u5b9a\u7684\uff0c\u53ef\u4ee5\u4f18\u5316\u4e3a\u4e00\u4e2a\u6570\u7ec4\uff0c\u7528\u5faa\u73af\u961f\u5217\u6765\u5b9e\u73b0\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n","\n",(0,l.jsx)(n.h4,{id:"\u53cc\u7aef\u961f\u5217",children:"\u53cc\u7aef\u961f\u5217"}),"\n",(0,l.jsxs)(r.A,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,l.jsx)(u.A,{value:"python",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"# Moving Average of Data Stream\n# Time Complexity O(1), Space Complexity O(n)\nclass MovingAverage:\n    def __init__(self, capacity: int):\n        self.capacity = capacity\n        self.queue = deque()\n        self.window_sum = 0.0\n        self.count = 0\n\n    def next(self, val: int) -> float:\n        self.count += 1\n        self.queue.append(val)\n        head = self.queue.popleft() if self.count > self.capacity else 0\n        self.window_sum = self.window_sum - head + val\n        return self.window_sum / min(self.capacity, self.count)\n"})})}),(0,l.jsx)(u.A,{value:"java",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:"// Moving Average of Data Stream\n// Time Complexity O(1), Space Complexity O(n)\nclass MovingAverage {\n  private int capacity, count = 0;\n  private double windowSum = 0.0;\n  private Deque<Integer> queue = new ArrayDeque<>();\n\n  public MovingAverage(int capacity) {\n    this.capacity = capacity;\n  }\n\n  public double next(int value) {\n    ++count;\n    queue.add(value);\n    int head = count > capacity ? queue.poll() : 0;\n    windowSum = windowSum - head + value;\n    return windowSum / Math.min(capacity, count);\n  }\n}\n"})})}),(0,l.jsx)(u.A,{value:"cpp",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cpp",children:"// Moving Average of Data Stream\n// Time Complexity O(1), Space Complexity O(n)\nclass MovingAverage {\npublic:\n    /** Initialize your data structure here. */\n    MovingAverage(int capacity) {\n        this->capacity = capacity;\n    }\n\n    double next(int val) {\n        ++count;\n        queue.push_back(val);\n        int head = count > capacity ? queue.front() : 0;\n        if (count > capacity) queue.pop_front();\n        window_sum = window_sum - head + val;\n        return window_sum / min(capacity, count);\n    }\nprivate:\n    int capacity, count = 0;\n    double window_sum = 0;\n    deque<int> queue;\n};\n"})})})]}),"\n",(0,l.jsx)(n.h4,{id:"\u5faa\u73af\u961f\u5217",children:"\u5faa\u73af\u961f\u5217"}),"\n",(0,l.jsxs)(r.A,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,l.jsx)(u.A,{value:"python",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"# Moving Average of Data Stream\n# Time Complexity O(1), Space Complexity O(n)\nclass MovingAverage:\n    def __init__(self, capacity: int):\n        self.q = [0] * capacity\n        self.capacity = capacity\n        self.head = 0\n        self.count = 0\n        self.window_sum = 0.0\n\n    def next(self, value: int) -> float:\n        tail = (self.head + self.count) % self.capacity\n        self.count += 1\n        self.window_sum = self.window_sum - self.q[tail] + value\n        self.q[tail] = value\n        return self.window_sum / min(self.capacity, self.count)\n"})})}),(0,l.jsx)(u.A,{value:"java",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:"// Moving Average of Data Stream\n// Time Complexity O(1), Space Complexity O(n)\nclass MovingAverage {  \n  private int[] q;\n  private int capacity, head, count;\n  private double windowSum = 0.0;\n\n  public MovingAverage(int capacity) {\n    q = new int[capacity];\n    this.capacity = capacity;\n    head = 0;\n    count = 0;\n  }\n\n  public double next(int value) {\n    int tail = (head + count) % capacity;\n    count++;\n    windowSum = windowSum - q[tail] + value;\n    q[tail] = value;\n    return windowSum / Math.min(capacity, count);\n  }\n}\n"})})}),(0,l.jsx)(u.A,{value:"cpp",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cpp",children:"// Moving Average of Data Stream\n// Time Complexity O(1), Space Complexity O(n)\nclass MovingAverage {\npublic:\n    MovingAverage(int size) {\n        q = new int[size];\n        std::fill_n(q, size, 0);\n        capacity = size;\n        head = 0;\n        count = 0;\n    }\n\n    double next(int value) {\n        int tail = (head + count) % capacity;\n        count++;\n        windowSum = windowSum - q[tail] + value;\n        q[tail] = value;\n        return windowSum / min(capacity, count);\n    }\nprivate:\n    int *q;\n    int capacity, head, count;\n    double windowSum = 0.0;\n};\n\n"})})})]}),"\n",(0,l.jsx)(n.h3,{id:"\u76f8\u5173\u9898\u76ee",children:"\u76f8\u5173\u9898\u76ee"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"../stack/find-median-from-data-stream",children:"Median of Data Stream"})}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(p,{...e})}):p(e)}},19365:(e,n,a)=>{a.d(n,{A:()=>r});a(96540);var t=a(34164);const l={tabItem:"tabItem_Ymn6"};var i=a(74848);function r(e){let{children:n,hidden:a,className:r}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.A)(l.tabItem,r),hidden:a,children:n})}},11470:(e,n,a)=>{a.d(n,{A:()=>j});var t=a(96540),l=a(34164),i=a(23104),r=a(56347),u=a(205),s=a(57485),o=a(31682),c=a(70679);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:l}}=e;return{value:n,label:a,attributes:t,default:l}}))}(a);return function(e){const n=(0,o.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function m(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function v(e){let{queryString:n=!1,groupId:a}=e;const l=(0,r.W6)(),i=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,s.aZ)(i),(0,t.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(l.location.search);n.set(i,e),l.replace({...l.location,search:n.toString()})}),[i,l])]}function f(e){const{defaultValue:n,queryString:a=!1,groupId:l}=e,i=p(e),[r,s]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[o,d]=v({queryString:a,groupId:l}),[f,h]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,i]=(0,c.Dv)(a);return[l,(0,t.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:l}),g=(()=>{const e=o??f;return m({value:e,tabValues:i})?e:null})();(0,u.A)((()=>{g&&s(g)}),[g]);return{selectedValue:r,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),h(e)}),[d,h,i]),tabValues:i}}var h=a(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=a(74848);function x(e){let{className:n,block:a,selectedValue:t,selectValue:r,tabValues:u}=e;const s=[],{blockElementScrollPositionUntilNextRender:o}=(0,i.a_)(),c=e=>{const n=e.currentTarget,a=s.indexOf(n),l=u[a].value;l!==t&&(o(n),r(l))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=s.indexOf(e.currentTarget)+1;n=s[a]??s[0];break}case"ArrowLeft":{const a=s.indexOf(e.currentTarget)-1;n=s[a]??s[s.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":a},n),children:u.map((e=>{let{value:n,label:a,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>s.push(e),onKeyDown:d,onClick:c,...i,className:(0,l.A)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function y(e){let{lazy:n,children:a,selectedValue:i}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===i));return e?(0,t.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function w(e){const n=f(e);return(0,b.jsxs)("div",{className:(0,l.A)("tabs-container",g.tabList),children:[(0,b.jsx)(x,{...n,...e}),(0,b.jsx)(y,{...n,...e})]})}function j(e){const n=(0,h.A)();return(0,b.jsx)(w,{...e,children:d(e.children)},String(n))}},28453:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>u});var t=a(96540);const l={},i=t.createContext(l);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function u(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);