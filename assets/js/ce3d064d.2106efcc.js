"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[8110],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=a.createContext({}),s=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(o.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(t),d=l,v=p["".concat(o,".").concat(d)]||p[d]||m[d]||i;return t?a.createElement(v,r(r({ref:n},c),{},{components:t})):a.createElement(v,r({ref:n},c))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,r=new Array(i);r[0]=p;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=e,u.mdxType="string"==typeof e?e:l,r[1]=u;for(var s=2;s<i;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(7294),l=t(6010);const i="tabItem_Ymn6";function r(e){let{children:n,hidden:t,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(i,r),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>d});var a=t(7462),l=t(7294),i=t(6010),r=t(2389),u=t(7392),o=t(7094),s=t(2466);const c="tabList__CuJ",m="tabItem_LNqP";function p(e){var n,t;const{lazy:r,block:p,defaultValue:d,values:v,groupId:f,className:g}=e,h=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=v?v:h.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),w=(0,u.l)(b,((e,n)=>e.value===n.value));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===d?d:null!=(n=null!=d?d:null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)?n:h[0].props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:k,setTabGroupChoices:x}=(0,o.U)(),[q,z]=(0,l.useState)(y),O=[],{blockElementScrollPositionUntilNextRender:T}=(0,s.o5)();if(null!=f){const e=k[f];null!=e&&e!==q&&b.some((n=>n.value===e))&&z(e)}const _=e=>{const n=e.currentTarget,t=O.indexOf(n),a=b[t].value;a!==q&&(T(n),z(a),null!=f&&x(f,String(a)))},N=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{var a;const n=O.indexOf(e.currentTarget)+1;t=null!=(a=O[n])?a:O[0];break}case"ArrowLeft":{var l;const n=O.indexOf(e.currentTarget)-1;t=null!=(l=O[n])?l:O[O.length-1];break}}null==(n=t)||n.focus()};return l.createElement("div",{className:(0,i.Z)("tabs-container",c)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},g)},b.map((e=>{let{value:n,label:t,attributes:r}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:q===n?0:-1,"aria-selected":q===n,key:n,ref:e=>O.push(e),onKeyDown:N,onFocus:_,onClick:_},r,{className:(0,i.Z)("tabs__item",m,null==r?void 0:r.className,{"tabs__item--active":q===n})}),null!=t?t:n)}))),r?(0,l.cloneElement)(h.filter((e=>e.props.value===q))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},h.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==q})))))}function d(e){const n=(0,r.Z)();return l.createElement(p,(0,a.Z)({key:String(n)},e))}},571:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>u,metadata:()=>s,toc:()=>m});var a=t(7462),l=(t(7294),t(3905)),i=t(5488),r=t(5162);const u={title:"Moving Average of Data Stream"},o=void 0,s={unversionedId:"stack-and-queue/queue/moving-average-of-data-stream",id:"stack-and-queue/queue/moving-average-of-data-stream",title:"Moving Average of Data Stream",description:"\u63cf\u8ff0",source:"@site/docs/stack-and-queue/queue/moving-average-of-data-stream.md",sourceDirName:"stack-and-queue/queue",slug:"/stack-and-queue/queue/moving-average-of-data-stream",permalink:"/stack-and-queue/queue/moving-average-of-data-stream",draft:!1,editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/stack-and-queue/queue/moving-average-of-data-stream.md",tags:[],version:"current",frontMatter:{title:"Moving Average of Data Stream"},sidebar:"someSidebar",previous:{title:"Implement Queue using Stacks",permalink:"/stack-and-queue/queue/implement-queue-using-stacks"},next:{title:"Sliding Window Maximum",permalink:"/stack-and-queue/queue/sliding-window-maximum"}},c={},m=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u53cc\u7aef\u961f\u5217",id:"\u53cc\u7aef\u961f\u5217",level:4},{value:"\u5faa\u73af\u961f\u5217",id:"\u5faa\u73af\u961f\u5217",level:4},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],p={toc:m};function d(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,l.kt)("p",null,"Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),":"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"MovingAverage m = new MovingAverage(3);",(0,l.kt)("br",{parentName:"p"}),"\n","m.next(1) = 1",(0,l.kt)("br",{parentName:"p"}),"\n","m.next(10) = (1 + 10) / 2",(0,l.kt)("br",{parentName:"p"}),"\n","m.next(3) = (1 + 10 + 3) / 3",(0,l.kt)("br",{parentName:"p"}),"\n","m.next(5) = (10 + 3 + 5) / 3")),(0,l.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,l.kt)("p",null,"\u53ef\u4ee5\u7528\u4e00\u4e2a\u53cc\u7aef\u961f\u5217\uff0c\u5927\u5c0f\u4e3a\u7a97\u53e3\u5927\u5c0f\uff0c\u5e76\u7528\u4e00\u4e2a\u53d8\u91cf\u5b58\u50a8\u603b\u548c\u3002\u6bcf\u6b21\u65b0\u6765\u4e00\u4e2a\u5143\u7d20\uff0c\u5c31\u63d2\u5165\u5230\u5c3e\u90e8\uff0c\u5e76\u4ece\u5934\u90e8\u5f39\u51fa\u65e7\u5143\u7d20\uff0c\u6700\u540e\u8981\u66f4\u65b0\u603b\u548c\u3002"),(0,l.kt)("p",null,"\u7531\u4e8e\u8fd9\u4e2a\u53cc\u7aef\u961f\u5217\u7684\u5927\u5c0f\u662f\u56fa\u5b9a\u7684\uff0c\u53ef\u4ee5\u4f18\u5316\u4e3a\u4e00\u4e2a\u6570\u7ec4\uff0c\u7528\u5faa\u73af\u961f\u5217\u6765\u5b9e\u73b0\u3002"),(0,l.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,l.kt)("h4",{id:"\u53cc\u7aef\u961f\u5217"},"\u53cc\u7aef\u961f\u5217"),(0,l.kt)(i.Z,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# Moving Average of Data Stream\n# Time Complexity O(1), Space Complexity O(n)\nclass MovingAverage:\n    def __init__(self, size: int):\n        self.size = size\n        self.queue = deque()\n        self.window_sum = 0.0\n        self.count = 0\n\n    def next(self, val: int) -> float:\n        self.count += 1\n        self.queue.append(val)\n        head = self.queue.popleft() if self.count > self.size else 0\n        self.window_sum = self.window_sum - head + val\n        return self.window_sum / min(self.size, self.count)\n"))),(0,l.kt)(r.Z,{value:"java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// Moving Average of Data Stream\n// Time Complexity O(1), Space Complexity O(n)\nclass MovingAverage {\n  private int size, count = 0;\n  private double windowSum = 0.0;\n  private Deque<Integer> queue = new ArrayDeque<>();\n\n  public MovingAverage(int size) {\n    this.size = size;\n  }\n\n  public double next(int val) {\n    ++count;\n    queue.add(val);\n    int head = count > size ? queue.poll() : 0;\n    windowSum = windowSum - head + val;\n    return windowSum / Math.min(size, count);\n  }\n}\n"))),(0,l.kt)(r.Z,{value:"cpp",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"// Moving Average of Data Stream\n// Time Complexity O(1), Space Complexity O(n)\nclass MovingAverage {\npublic:\n    /** Initialize your data structure here. */\n    MovingAverage(int size) {\n        this->size = size;\n    }\n\n    double next(int val) {\n        ++count;\n        queue.push_back(val);\n        int head = count > size ? queue.front() : 0;\n        if (count > size) queue.pop_front();\n        window_sum = window_sum - head + val;\n        return window_sum / min(size, count);\n    }\nprivate:\n    int size, count = 0;\n    double window_sum = 0;\n    deque<int> queue;\n};\n")))),(0,l.kt)("h4",{id:"\u5faa\u73af\u961f\u5217"},"\u5faa\u73af\u961f\u5217"),(0,l.kt)(i.Z,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# Moving Average of Data Stream\n# Time Complexity O(1), Space Complexity O(n)\nclass MovingAverage:\n    def __init__(self, size: int):\n        self.size = size\n        self.queue = [0] * size\n        self.tail = 0\n        self.window_sum = 0.0\n        self.count = 0\n\n    def next(self, val: int) -> float:\n        self.count += 1\n        head_index = (self.tail + 1) % self.size\n        self.window_sum = self.window_sum - self.queue[head_index] + val\n        # move forward for one step\n        self.tail = (self.tail + 1) % self.size\n        self.queue[self.tail] = val\n        return self.window_sum / min(self.size, self.count)\n"))),(0,l.kt)(r.Z,{value:"java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// Moving Average of Data Stream\n// Time Complexity O(1), Space Complexity O(n)\nclass MovingAverage {\n  private int size, count = 0, tail = 0;\n  private double windowSum = 0.0;\n  private int[] queue;\n\n  public MovingAverage(int size) {\n    this.size = size;\n    this.queue = new int[size];\n  }\n\n  public double next(int val) {\n    ++this.count;\n    int headIndex = (this.tail + 1) % this.size;\n    this.windowSum = this.windowSum - this.queue[headIndex] + val;\n    // move forward for one step\n    this.tail = (this.tail + 1) % size;\n    this.queue[this.tail] = val;\n    return this.windowSum / Math.min(this.size, this.count);\n  }\n}\n"))),(0,l.kt)(r.Z,{value:"cpp",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"// Moving Average of Data Stream\n// Time Complexity O(1), Space Complexity O(n)\nclass MovingAverage {\npublic:\n    MovingAverage(int size) {\n        this->size = size;\n        this->queue = vector<int>(size);\n    }\n\n    double next(int val) {\n        ++count;\n        int head_index = (tail + 1) % size;\n        window_sum = window_sum - queue[head_index] + val;\n        // move forward for one step\n        tail = (tail + 1) % size;\n        queue[tail] = val;\n        return window_sum / min(size, count);\n    }\nprivate:\n    int size, count = 0, tail = 0;\n    double window_sum = 0;\n    vector<int> queue;\n};\n\n")))),(0,l.kt)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../stack/median-of-data-stream"},"Median of Data Stream"))))}d.isMDXComponent=!0}}]);