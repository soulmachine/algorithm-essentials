"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[9478],{64177:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"stack-and-queue/queue/design-circular-queue","title":"Design Circular Queue","description":"\u63cf\u8ff0","source":"@site/docs/stack-and-queue/queue/design-circular-queue.md","sourceDirName":"stack-and-queue/queue","slug":"/stack-and-queue/queue/design-circular-queue","permalink":"/en/stack-and-queue/queue/design-circular-queue","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Design Circular Queue"},"sidebar":"docs","previous":{"title":"Design Bounded Blocking Queue","permalink":"/en/stack-and-queue/queue/design-bounded-blocking-queue"},"next":{"title":"Design Hit Counter","permalink":"/en/stack-and-queue/queue/design-hit-counter"}}');var r=t(74848),u=t(28453),l=t(11470),i=t(19365);const s={title:"Design Circular Queue"},c=void 0,o={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}];function p(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,u.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,r.jsx)(n.p,{children:"TODO"}),"\n",(0,r.jsx)(n.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,r.jsx)(n.p,{children:"TODO"}),"\n",(0,r.jsx)(n.h3,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n","\n",(0,r.jsxs)(l.A,{defaultValue:"cpp",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,r.jsx)(i.A,{value:"java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"// Design Circular Queues\nclass MyCircularQueue {\n    private int[] q;\n    private int capacity, head, count;\n\n    public MyCircularQueue(int k) {\n        q = new int[k];\n        capacity = k;\n        head = 0;\n        count = 0;\n    }\n\n    public boolean enQueue(int value) {\n        if (isFull()) return false;\n        q[(head + count) % capacity] = value;\n        count += 1;\n        return true;\n    }\n\n    public boolean deQueue() {\n        if (isEmpty()) return false;\n        head = (head + 1) % capacity;\n        count -= 1;\n        return true;\n    }\n\n    public int Front() {\n        if (isEmpty()) return -1;\n        return q[head];\n    }\n\n    public int Rear() {\n        if (isEmpty()) return -1;\n        int tail = (head + count - 1) % capacity;\n        return q[tail];\n    }\n\n    public boolean isEmpty() {\n        return count == 0;\n    }\n\n    public boolean isFull() {\n        return count == capacity;\n    }\n}\n"})})}),(0,r.jsx)(i.A,{value:"cpp",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"// Design Circular Queues\nclass MyCircularQueue {\npublic:\n    MyCircularQueue(int k) {\n        q = new int[k];\n        capacity = k;\n        head = 0;\n        count = 0;\n    }\n    ~MyCircularQueue() {\n        delete[] q;\n    }\n\n    bool enQueue(int value) {\n        if (isFull()) return false;\n        q[(head + count) % capacity] = value;\n        count += 1;\n        return true;\n    }\n    \n    bool deQueue() {\n        if (isEmpty()) return false;\n        head = (head + 1) % capacity;\n        count -= 1;\n        return true;\n    }\n    \n    int Front() {\n        if (isEmpty()) return -1;\n        return q[head];\n    }\n    \n    int Rear() {\n        if (isEmpty()) return -1;\n        int tail = (head + count - 1) % capacity;\n        return q[tail];\n    }\n    \n    bool isEmpty() {\n        return count == 0;\n    }\n    \n    bool isFull() {\n        return count == capacity;\n    }\n\nprivate:\n    int *q;\n    int capacity, head, count;\n};\n"})})})]})]})}function h(e={}){const{wrapper:n}={...(0,u.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>l});t(96540);var a=t(34164);const r={tabItem:"tabItem_Ymn6"};var u=t(74848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,u.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,l),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>k});var a=t(96540),r=t(34164),u=t(23104),l=t(56347),i=t(205),s=t(57485),c=t(31682),o=t(70679);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const r=(0,l.W6)(),u=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s.aZ)(u),(0,a.useCallback)((e=>{if(!u)return;const n=new URLSearchParams(r.location.search);n.set(u,e),r.replace({...r.location,search:n.toString()})}),[u,r])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,u=p(e),[l,s]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:u}))),[c,d]=f({queryString:t,groupId:r}),[b,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,u]=(0,o.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&u.set(e)}),[t,u])]}({groupId:r}),v=(()=>{const e=c??b;return h({value:e,tabValues:u})?e:null})();(0,i.A)((()=>{v&&s(v)}),[v]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:u}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),m(e)}),[d,m,u]),tabValues:u}}var m=t(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function y(e){let{className:n,block:t,selectedValue:a,selectValue:l,tabValues:i}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,u.a_)(),o=e=>{const n=e.currentTarget,t=s.indexOf(n),r=i[t].value;r!==a&&(c(n),l(r))},d=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:u}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>s.push(e),onKeyDown:d,onClick:o,...u,className:(0,r.A)("tabs__item",v.tabItem,u?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function q(e){let{lazy:n,children:t,selectedValue:u}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===u));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==u})))})}function x(e){const n=b(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,g.jsx)(y,{...n,...e}),(0,g.jsx)(q,{...n,...e})]})}function k(e){const n=(0,m.A)();return(0,g.jsx)(x,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>i});var a=t(96540);const r={},u=a.createContext(r);function l(e){const n=a.useContext(u);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(u.Provider,{value:n},e.children)}}}]);