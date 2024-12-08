"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[6104],{40476:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"stack-and-queue/queue/design-hit-counter","title":"Design Hit Counter","description":"\u63cf\u8ff0","source":"@site/docs/stack-and-queue/queue/design-hit-counter.md","sourceDirName":"stack-and-queue/queue","slug":"/stack-and-queue/queue/design-hit-counter","permalink":"/en/stack-and-queue/queue/design-hit-counter","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Design Hit Counter"},"sidebar":"docs","previous":{"title":"Design Circular Queue","permalink":"/en/stack-and-queue/queue/design-circular-queue"},"next":{"title":"\u6392\u5e8f","permalink":"/en/category/\u6392\u5e8f"}}');var a=t(74848),s=t(28453),r=t(11470),u=t(19365);const l={title:"Design Hit Counter"},o=void 0,c={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u961f\u5217",id:"\u961f\u5217",level:4},{value:"\u5faa\u73af\u961f\u5217",id:"\u5faa\u73af\u961f\u5217",level:4}];function p(e){const n={code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,a.jsx)(n.p,{children:"TODO"}),"\n",(0,a.jsx)(n.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,a.jsx)(n.p,{children:"TODO"}),"\n",(0,a.jsx)(n.h3,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n","\n",(0,a.jsx)(n.h4,{id:"\u961f\u5217",children:"\u961f\u5217"}),"\n",(0,a.jsx)(n.p,{children:"\u6bcf\u6765\u4e00\u4e2atimestamp\u5c31\u5165\u961f\u5217\uff0c\u67e5\u8be2\u7684\u65f6\u5019\uff0c\u628a5\u5206\u949f\u4e4b\u524d\u7684\u65f6\u95f4\u6233\u5168\u90e8\u5220\u6389\uff0c\u961f\u5217\u7684\u5927\u5c0f\u5c31\u662f\u6700\u8fd15\u5206\u949f\u7684\u70b9\u51fb\u6570\u3002"}),"\n",(0,a.jsxs)(r.A,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,a.jsx)(u.A,{value:"java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"// Design Hit Counter \npublic class HitCounter {\n\n    private Queue<Integer> queue;\n\n    public HitCounter() {\n        queue = new LinkedList<>();\n    }\n\n    // O(1)\n    public void hit(int timestamp) {\n        queue.offer(timestamp);\n    }\n\n    // O(n)\n    public int getHits(int timestamp) {\n        while (!queue.isEmpty() && queue.peek() <= timestamp - 300) {\n            queue.poll();\n        }\n\n        return queue.size();\n    }\n}\n"})})}),(0,a.jsx)(u.A,{value:"cpp",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"// Design Hit Counter\nclass HitCounter {\npublic:\n    HitCounter() {}\n\n    // O(1)\n    void hit(int timestamp) {\n        q.push(timestamp);\n    }\n\n    // O(n)\n    int getHits(int timestamp) {\n        while(!q.empty() && q.front() <= timestamp-300) {\n            q.pop();\n        }\n        return q.size();\n    }\n\nprivate:\n    queue<int> q;\n};\n"})})}),(0,a.jsx)(u.A,{value:"python",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"# Design Hit Counter\nfrom collections import deque\n\nclass HitCounter:\n    def __init__(self):\n        self.queue = deque()\n\n    # O(1)\n    def hit(self, timestamp: int) -> None:\n        self.queue.append(timestamp)\n\n    # O(n)\n    def getHits(self, timestamp: int) -> int:\n        while self.queue and self.queue[0] <= timestamp - 300:\n            self.queue.popleft()\n\n        return len(self.queue)\n"})})})]}),"\n",(0,a.jsx)(n.h4,{id:"\u5faa\u73af\u961f\u5217",children:"\u5faa\u73af\u961f\u5217"}),"\n",(0,a.jsx)(n.p,{children:"\u672c\u9898\u53ea\u9700\u8981\u4fdd\u5b585\u5206\u949f\u4e4b\u5185\u7684\u4fe1\u606f\uff0c\u53ef\u4ee5\u7528\u4e00\u4e2a\u56fa\u5b9a\u957f\u5ea6\u4e3a300\u7684\u6570\u7ec4\u6765\u4fdd\u5b58\u6bcf\u79d2\u7684\u8ba1\u6570\u5668\uff0c\u6bcf\u6b21\u70b9\u51fb\u4e00\u4e0b\uff0c\u5c31\u628a\u65f6\u95f4\u6233\u5bf9300\u53d6\u6a21\uff0c\u628a\u8be5\u4f4d\u7f6e\u7684\u8ba1\u6570\u5668\u589e\u4e00\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u4e0d\u8fc7\u6b64\u5904\u6709\u4e2a\u95ee\u9898\uff0c5\u5206\u949f\u4e4b\u540e\uff0c\u6765\u4e86\u4e00\u4e2a\u70b9\u51fb\u4e8b\u4ef6\uff0c\u8be5\u65f6\u95f4\u6233\u5bf9\u5e94\u7684\u4f4d\u7f6e\uff0c\u4e0d\u5e94\u8be5\u7ee7\u7eed\u589e\u4e00\uff0c\u800c\u662f\u5e94\u8be5\u91cd\u7f6e\u4e3a1\u3002\u5982\u4f55\u533a\u5206\u65b0\u65e72\u4e2a\u65f6\u95f4\u6233\u5462\uff1f\u53ef\u4ee5\u518d\u5f00\u4e00\u4e2a\u56fa\u5b9a\u957f\u5ea6\u4e3a300\u7684\u6570\u7ec4\u6765\u4fdd\u5b58\u65f6\u95f4\u6233\uff0c\u6bcf\u6b21\u6765\u4e00\u4e2a\u70b9\u51fb\u4e8b\u4ef6\uff0c\u628a\u65f6\u95f4\u6233\u5bf9300\u53d6\u4f59\uff0c\u7136\u540e\u770b\u6b64\u4f4d\u7f6e\u4e2d\u7684\u65f6\u95f4\u6233\u662f\u5426\u4e0e\u5f53\u524d\u65f6\u95f4\u6233\u76f8\u540c\uff0c\u5982\u679c\u76f8\u540c\uff0c\u5219\u628a\u8ba1\u6570\u5668\u589e\u4e00\uff0c\u5982\u679c\u4e0d\u540c\uff0c\u8bf4\u660e5\u5206\u949f\u5df2\u8fc7\uff0c\u628a\u8ba1\u6570\u5668\u91cd\u7f6e\u4e3a1\u3002"}),"\n",(0,a.jsxs)(r.A,{defaultValue:"cpp",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,a.jsx)(u.A,{value:"java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"// Design Hit Counter \npublic class HitCounter {\n    private static int N = 300; // time window\n    private int[] ts = new int[N];\n    private int[] hits = new int[N];\n\n    public HitCounter() {}\n\n    // O(1)\n    public void hit(int timestamp) {\n        int idx = timestamp % N;\n        if (ts[idx] != timestamp) {\n            ts[idx] = timestamp;\n            hits[idx] = 1;\n        } else {\n            ++hits[idx];\n        }\n    }\n\n    // O(1)\n    public int getHits(int timestamp) {\n        int count = 0;\n        for (int i = 0; i < N; ++i) {\n            if (timestamp - ts[i] < N) {\n                count += hits[i];\n            }\n        }\n        return count;\n    }\n}\n"})})}),(0,a.jsx)(u.A,{value:"cpp",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"// Design Hit Counter\nclass HitCounter {\npublic:\n    HitCounter() {}\n\n    // O(1)\n    void hit(int timestamp) {\n        int idx = timestamp % N;\n        if (ts[idx] != timestamp) {\n            ts[idx] = timestamp;\n            hits[idx] = 1;\n        } else {\n            ++hits[idx];\n        }\n    }\n\n    // O(1)\n    int getHits(int timestamp) {\n        int count = 0;\n        for (int i = 0; i < N; ++i) {\n            if (timestamp - ts[i] < N) {\n                count += hits[i];\n            }\n        }\n        return count;\n    }\n\nprivate:\n    const int N = 300; // time window\n    vector<int> ts = vector<int>(N);\n    vector<int> hits = vector<int>(N);\n};\n"})})}),(0,a.jsx)(u.A,{value:"python",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"# Design Hit Counter\nclass HitCounter:\n    _N = 300  # time window\n\n    def __init__(self):\n        self.ts = [0] * self._N\n        self.hits = [0] * self._N\n\n    # O(1)\n    def hit(self, timestamp: int) -> None:\n        idx = timestamp % self._N\n        if self.ts[idx] != timestamp:\n            self.ts[idx] = timestamp\n            self.hits[idx] = 1\n        else:\n            self.hits[idx] += 1\n\n    # O(1)\n    def getHits(self, timestamp: int) -> int:\n        count = 0\n        for i in range(self._N):\n            if timestamp - self.ts[i] < self._N:\n                count += self.hits[i]\n        return count\n"})})})]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>r});t(96540);var i=t(34164);const a={tabItem:"tabItem_Ymn6"};var s=t(74848);function r(e){let{children:n,hidden:t,className:r}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.A)(a.tabItem,r),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>N});var i=t(96540),a=t(34164),s=t(23104),r=t(56347),u=t(205),l=t(57485),o=t(31682),c=t(70679);function d(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:a}}=e;return{value:n,label:t,attributes:i,default:a}}))}(t);return function(e){const n=(0,o.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const a=(0,r.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(s),(0,i.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=p(e),[r,l]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:s}))),[o,d]=h({queryString:t,groupId:a}),[f,v]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,c.Dv)(t);return[a,(0,i.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),b=(()=>{const e=o??f;return m({value:e,tabValues:s})?e:null})();(0,u.A)((()=>{b&&l(b)}),[b]);return{selectedValue:r,selectValue:(0,i.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),v(e)}),[d,v,s]),tabValues:s}}var v=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function x(e){let{className:n,block:t,selectedValue:i,selectValue:r,tabValues:u}=e;const l=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.a_)(),c=e=>{const n=e.currentTarget,t=l.indexOf(n),a=u[t].value;a!==i&&(o(n),r(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:u.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>l.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:s}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===s));return e?(0,i.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function q(e){const n=f(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,g.jsx)(x,{...n,...e}),(0,g.jsx)(j,{...n,...e})]})}function N(e){const n=(0,v.A)();return(0,g.jsx)(q,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>u});var i=t(96540);const a={},s=i.createContext(a);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function u(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);