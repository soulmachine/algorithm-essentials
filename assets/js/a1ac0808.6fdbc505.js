"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[697],{53905:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>d,metadata:()=>a,toc:()=>u});const a=JSON.parse('{"id":"linked-list/lru-cache","title":"LRU Cache","description":"\u63cf\u8ff0","source":"@site/docs/linked-list/lru-cache.md","sourceDirName":"linked-list","slug":"/linked-list/lru-cache","permalink":"/linked-list/lru-cache","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"LRU Cache"},"sidebar":"docs","previous":{"title":"Reorder List","permalink":"/linked-list/reorder-list"},"next":{"title":"LFU Cache","permalink":"/linked-list/lfu-cache"}}');var i=t(74848),l=t(28453),r=t(11470),s=t(19365);const d={title:"LRU Cache"},o=void 0,c={},u=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}];function h(e){const n={a:"a",code:"code",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,i.jsx)(n.p,{children:"Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and set."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"get(key)"})," - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"set(key, value)"})," - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item."]}),"\n",(0,i.jsx)(n.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,i.jsx)(n.p,{children:"\u4e3a\u4e86\u4f7f\u67e5\u627e\u3001\u63d2\u5165\u548c\u5220\u9664\u90fd\u6709\u8f83\u9ad8\u7684\u6027\u80fd\uff0c\u8fd9\u9898\u7684\u5173\u952e\u662f\u8981\u4f7f\u7528\u4e00\u4e2a\u53cc\u5411\u94fe\u8868\u548c\u4e00\u4e2a HashMap\uff0c\u56e0\u4e3a\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["HashMap \u4fdd\u5b58\u6bcf\u4e2a\u8282\u70b9\u7684\u5730\u5740\uff0c\u53ef\u4ee5\u57fa\u672c\u4fdd\u8bc1\u5728",(0,i.jsx)(n.code,{children:"O(1)"}),"\u65f6\u95f4\u5185\u67e5\u627e\u8282\u70b9"]}),"\n",(0,i.jsxs)(n.li,{children:["\u53cc\u5411\u94fe\u8868\u80fd\u540e\u5728",(0,i.jsx)(n.code,{children:"O(1)"}),"\u65f6\u95f4\u5185\u6dfb\u52a0\u548c\u5220\u9664\u8282\u70b9\uff0c\u5355\u94fe\u8868\u5219\u4e0d\u884c"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u5177\u4f53\u5b9e\u73b0\u7ec6\u8282\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u8d8a\u9760\u8fd1\u94fe\u8868\u5934\u90e8\uff0c\u8868\u793a\u8282\u70b9\u4e0a\u6b21\u8bbf\u95ee\u8ddd\u79bb\u73b0\u5728\u65f6\u95f4\u6700\u77ed\uff0c\u5c3e\u90e8\u7684\u8282\u70b9\u8868\u793a\u6700\u8fd1\u8bbf\u95ee\u6700\u5c11"}),"\n",(0,i.jsx)(n.li,{children:"\u8bbf\u95ee\u8282\u70b9\u65f6\uff0c\u5982\u679c\u8282\u70b9\u5b58\u5728\uff0c\u628a\u8be5\u8282\u70b9\u4ea4\u6362\u5230\u94fe\u8868\u5934\u90e8\uff0c\u540c\u65f6\u66f4\u65b0 hash \u8868\u4e2d\u8be5\u8282\u70b9\u7684\u5730\u5740"}),"\n",(0,i.jsx)(n.li,{children:"\u63d2\u5165\u8282\u70b9\u65f6\uff0c\u5982\u679c cache \u7684 size \u8fbe\u5230\u4e86\u4e0a\u9650 capacity\uff0c\u5219\u5220\u9664\u5c3e\u90e8\u8282\u70b9\uff0c\u540c\u65f6\u8981\u5728 hash \u8868\u4e2d\u5220\u9664\u5bf9\u5e94\u7684\u9879\uff1b\u65b0\u8282\u70b9\u63d2\u5165\u94fe\u8868\u5934\u90e8"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"LRU Cche",src:t(56852).A+"",width:"650",height:"296"})}),"\n",(0,i.jsx)(n.h3,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n",(0,i.jsxs)(n.p,{children:["C++\u7684",(0,i.jsx)(n.code,{children:"std::list"})," \u5c31\u662f\u4e2a\u53cc\u5411\u94fe\u8868\uff0c\u4e14\u5b83\u6709\u4e2a ",(0,i.jsx)(n.code,{children:"splice()"}),"\u65b9\u6cd5\uff0c",(0,i.jsx)(n.code,{children:"O(1)"}),"\u65f6\u95f4\uff0c\u975e\u5e38\u597d\u7528\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["Java \u4e2d\u4e5f\u6709\u53cc\u5411\u94fe\u8868",(0,i.jsx)(n.code,{children:"LinkedList"}),", \u4f46\u662f ",(0,i.jsx)(n.code,{children:"LinkedList"})," \u5c01\u88c5\u7684\u592a\u6df1\uff0c\u6ca1\u6709\u80fd\u5728",(0,i.jsx)(n.code,{children:"O(1)"}),"\u65f6\u95f4\u5185\u5220\u9664\u4e2d\u95f4\u67d0\u4e2a\u5143\u7d20\u7684 API(C++\u7684",(0,i.jsx)(n.code,{children:"list"}),"\u6709\u4e2a",(0,i.jsx)(n.code,{children:"splice()"}),", O(1), \u6240\u4ee5\u672c\u9898 C++\u53ef\u4ee5\u653e\u5fc3\u4f7f\u7528",(0,i.jsx)(n.code,{children:"splice()"}),")\uff0c\u4e8e\u662f\u6211\u4eec\u53ea\u80fd\u81ea\u5df1\u5b9e\u73b0\u4e00\u4e2a\u53cc\u5411\u94fe\u8868\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u672c\u9898\u6709\u7684\u4eba\u76f4\u63a5\u7528 ",(0,i.jsx)(n.code,{children:"LinkedHashMap"})," \uff0c\u4ee3\u7801\u66f4\u77ed\uff0c\u4f46\u8fd9\u662f\u4e00\u79cd\u5077\u61d2\u505a\u6cd5\uff0c\u9762\u8bd5\u5b98\u4e00\u5b9a\u4f1a\u8ba9\u4f60\u81ea\u5df1\u91cd\u65b0\u5b9e\u73b0\u3002"]}),"\n","\n",(0,i.jsxs)(r.A,{defaultValue:"python",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"},{label:"Python",value:"python"}],children:[(0,i.jsx)(s.A,{value:"java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"// LRU Cache\n// HashMap + Doubly Linked List\npublic class LRUCache {\n    private int capacity;\n    private Map<Integer, DLinkedNode> m;\n    private DLinkedList list;\n\n    public LRUCache(int capacity) {\n        this.capacity = capacity;\n        m = new HashMap<>();\n        list = new DLinkedList();\n    }\n\n    // Time Complexity: O(1)\n    public int get(int key) {\n        if (!m.containsKey(key)) return -1;\n        DLinkedNode node = m.get(key);\n        update(node);\n        return node.value;\n    }\n\n    // Time Complexity: O(1)\n    public void put(int key, int value) {\n        if (m.containsKey(key)){\n            DLinkedNode node = m.get(key);\n            node.value = value;\n            update(node);\n        } else {\n            DLinkedNode node = new DLinkedNode(key, value);\n            if (m.size() >= capacity){\n                DLinkedNode last = list.peekLast();\n                m.remove(last.key);\n                list.remove(last);\n            }\n\n            list.offerFirst(node);\n            m.put(key, node);\n        }\n    }\n\n    private void update(DLinkedNode node) {\n        list.remove(node);\n        list.offerFirst(node);\n    }\n\n\n    // Node of doubly linked list\n    static class DLinkedNode {\n        int key, value;\n        DLinkedNode prev, next;\n\n        DLinkedNode(int key, int value) {\n            this.key = key;\n            this.value = value;\n        }\n    }\n\n    // Doubly linked list\n    static class DLinkedList {\n        DLinkedNode head, tail;\n        int size;\n\n        DLinkedList() {\n            // head and tail are two dummy nodes\n            head = new DLinkedNode(0, 0);\n            tail = new DLinkedNode(0, 0);\n            head.next = tail;\n            tail.prev = head;\n        }\n\n        // Add a new node at head\n        void offerFirst(DLinkedNode node) {\n            head.next.prev = node;\n            node.next = head.next;\n            node.prev = head;\n            head.next = node;\n            size++;\n        }\n\n        // Remove a node in the middle\n        void remove(DLinkedNode node) {\n            if (node == null) return;\n            node.prev.next = node.next;\n            node.next.prev = node.prev;\n            size--;\n        }\n\n        DLinkedNode peekLast() {\n            return tail.prev;\n        }\n    }\n}\n"})})}),(0,i.jsx)(s.A,{value:"cpp",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"// LRU Cache\nclass LRUCache{\nprivate:\n    // Node of doubly linked list\n    class DLinkedNode {\n    public:\n        int key, value;\n        DLinkedNode *prev=nullptr, *next=nullptr;\n\n        DLinkedNode(int key, int value) {\n            this->key = key;\n            this->value = value;\n        }\n    };\n\n    // Doubly linked list\n    class DLinkedList {\n    public:\n        DLinkedList() {\n            // head and tail are two dummy nodes\n            head = new DLinkedNode(0, 0);\n            tail = new DLinkedNode(0, 0);\n            head->next = tail;\n            tail->prev = head;\n        }\n\n        // Add a new node at head\n        void offerFirst(DLinkedNode *node) {\n            head->next->prev = node;\n            node->next = head->next;\n            node->prev = head;\n            head->next = node;\n            size++;\n        }\n\n        // Remove a node in the middle\n        void remove(DLinkedNode *node) {\n            if (node == nullptr) return;\n            node->prev->next = node->next;\n            node->next->prev = node->prev;\n            size--;\n        }\n\n        DLinkedNode* peekLast() {\n            return tail->prev;\n        }\n    private:\n        DLinkedNode *head, *tail;\n        int size;\n    };\n\npublic:\n    LRUCache(int capacity) {\n        this->capacity = capacity;\n    }\n\n    // Time Complexity: O(1)\n    int get(int key) {\n        if (m.find(key) == m.end()) return -1;\n        DLinkedNode *node = m[key];\n        update(node);\n        return node->value;\n    }\n\n    // Time Complexity: O(1)\n    void put(int key, int value) {\n        if (m.find(key) != m.end()){\n            DLinkedNode *node = m[key];\n            node->value = value;\n            update(node);\n        } else {\n            DLinkedNode *node = new DLinkedNode(key, value);\n            if (m.size() >= capacity){\n                DLinkedNode *last = list.peekLast();\n                m.erase(last->key);\n                list.remove(last);\n            }\n\n            list.offerFirst(node);\n            m[key] = node;\n        }\n    }\n\n    void update(DLinkedNode *node) {\n        list.remove(node);\n        list.offerFirst(node);\n    }\nprivate:\n    int capacity = 0;\n    unordered_map<int, DLinkedNode*> m;\n    DLinkedList list;\n};\n"})})}),(0,i.jsx)(s.A,{value:"python",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"# LRU Cache\n# OrderedDict\nclass LRUCache:\n    def __init__(self, capacity):\n        self.capacity = capacity\n        self.cache = OrderedDict()\n\n    #  Time Complexity: O(1)\n    def get(self, key):\n        if key in self.cache:\n            value = self.cache.pop(key)\n            self.cache[key] = value\n            return value\n        else: return -1\n\n    #  Time Complexity: O(1)\n    def put(self, key, value):\n        if key in self.cache:\n            self.cache.pop(key)\n        self.cache[key] = value\n        if len(self.cache) > self.capacity:\n            self.cache.popitem(last=False)\n"})})})]}),"\n",(0,i.jsx)(n.h3,{id:"\u76f8\u5173\u9898\u76ee",children:"\u76f8\u5173\u9898\u76ee"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/linked-list/lfu-cache",children:"LFU Cache"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>r});t(96540);var a=t(34164);const i={tabItem:"tabItem_Ymn6"};var l=t(74848);function r(e){let{children:n,hidden:t,className:r}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.A)(i.tabItem,r),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>j});var a=t(96540),i=t(34164),l=t(23104),r=t(56347),s=t(205),d=t(57485),o=t(31682),c=t(70679);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:i}}=e;return{value:n,label:t,attributes:a,default:i}}))}(t);return function(e){const n=(0,o.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function v(e){let{queryString:n=!1,groupId:t}=e;const i=(0,r.W6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,d.aZ)(l),(0,a.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(i.location.search);n.set(l,e),i.replace({...i.location,search:n.toString()})}),[l,i])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,l=h(e),[r,d]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:l}))),[o,u]=v({queryString:t,groupId:i}),[f,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,l]=(0,c.Dv)(t);return[i,(0,a.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:i}),k=(()=>{const e=o??f;return p({value:e,tabValues:l})?e:null})();(0,s.A)((()=>{k&&d(k)}),[k]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),m(e)}),[u,m,l]),tabValues:l}}var m=t(92303);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=t(74848);function x(e){let{className:n,block:t,selectedValue:a,selectValue:r,tabValues:s}=e;const d=[],{blockElementScrollPositionUntilNextRender:o}=(0,l.a_)(),c=e=>{const n=e.currentTarget,t=d.indexOf(n),i=s[t].value;i!==a&&(o(n),r(i))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1];break}}n?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>d.push(e),onKeyDown:u,onClick:c,...l,className:(0,i.A)("tabs__item",k.tabItem,l?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:l}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===l));return e?(0,a.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function L(e){const n=f(e);return(0,y.jsxs)("div",{className:(0,i.A)("tabs-container",k.tabList),children:[(0,y.jsx)(x,{...n,...e}),(0,y.jsx)(b,{...n,...e})]})}function j(e){const n=(0,m.A)();return(0,y.jsx)(L,{...e,children:u(e.children)},String(n))}},56852:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/lru-cache-a6cb2698b18906d4a2ed6420c128a689.png"},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var a=t(96540);const i={},l=a.createContext(i);function r(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);