"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[6365],{24282:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>c,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"linked-list/lfu-cache","title":"LFU Cache","description":"\u63cf\u8ff0","source":"@site/docs/linked-list/lfu-cache.md","sourceDirName":"linked-list","slug":"/linked-list/lfu-cache","permalink":"/linked-list/lfu-cache","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"LFU Cache"},"sidebar":"docs","previous":{"title":"LRU Cache","permalink":"/linked-list/lru-cache"},"next":{"title":"First Unique Number","permalink":"/linked-list/first-unique-number"}}');var a=s(74848),l=s(28453),i=s(11470),r=s(19365);const c={title:"LFU Cache"},o=void 0,d={},u=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}];function h(e){const n={a:"a",annotation:"annotation",blockquote:"blockquote",br:"br",code:"code",h3:"h3",li:"li",math:"math",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",mtext:"mtext",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,a.jsxs)(n.p,{children:["Design and implement a data structure for ",(0,a.jsx)(n.code,{children:"Least Frequently Used (LFU)"})," cache."]}),"\n",(0,a.jsxs)(n.p,{children:["Implement the ",(0,a.jsx)(n.code,{children:"LFUCache"})," class:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"LFUCache(int capacity)"})," Initializes the object with the ",(0,a.jsx)(n.code,{children:"capacity"})," of the data structure."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"int get(int key)"})," Gets the value of the ",(0,a.jsx)(n.code,{children:"key"})," if the ",(0,a.jsx)(n.code,{children:"key"})," exists in the cache. Otherwise, returns ",(0,a.jsx)(n.code,{children:"-1"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"void put(int key, int value)"})," Sets or inserts the value if the ",(0,a.jsx)(n.code,{children:"key"})," is not already present. When the cache reaches its ",(0,a.jsx)(n.code,{children:"capacity"}),", it should invalidate the least frequently used item before inserting a new item. For this problem, when there is a tie (i.e., two or more keys with the same frequency), the ",(0,a.jsx)(n.strong,{children:"least recently"})," used ",(0,a.jsx)(n.code,{children:"key"})," would be evicted."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Notice that"})," the number of times an item is used is the number of calls to the ",(0,a.jsx)(n.code,{children:"get"})," and ",(0,a.jsx)(n.code,{children:"put"})," functions for that item since it was inserted. This number is set to zero when the item is removed."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Example 1"}),":"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Input"}),":",(0,a.jsx)(n.br,{}),"\n",'["LFUCache", "put", "put", "get", "put", "get", "get", "put", "get", "get", "get"]',(0,a.jsx)(n.br,{}),"\n","[[2], [1, 1], [2, 2], [1], [3, 3], [2], [3], [4, 4], [1], [3], [4]]",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Output"}),":",(0,a.jsx)(n.br,{}),"\n","[null, null, null, 1, null, -1, 3, null, -1, 3, 4]"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Explanation"}),":",(0,a.jsx)(n.br,{}),"\n","LFUCache lfu = new LFUCache(2);",(0,a.jsx)(n.br,{}),"\n","lfu.put(1, 1);",(0,a.jsx)(n.br,{}),"\n","lfu.put(2, 2);",(0,a.jsx)(n.br,{}),"\n","lfu.get(1); // return 1",(0,a.jsx)(n.br,{}),"\n","lfu.put(3, 3); // evicts key 2",(0,a.jsx)(n.br,{}),"\n","lfu.get(2); // return -1 (not found)",(0,a.jsx)(n.br,{}),"\n","lfu.get(3); // return 3",(0,a.jsx)(n.br,{}),"\n","lfu.put(4, 4); // evicts key 1.",(0,a.jsx)(n.br,{}),"\n","lfu.get(1); // return -1 (not found)",(0,a.jsx)(n.br,{}),"\n","lfu.get(3); // return 3",(0,a.jsx)(n.br,{}),"\n","lfu.get(4); // return 4"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Constraints"}),":"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mn,{children:"0"}),(0,a.jsx)(n.mo,{children:"\u2264"}),(0,a.jsx)(n.mtext,{children:"capacity"}),(0,a.jsx)(n.mo,{separator:"true",children:","}),(0,a.jsx)(n.mtext,{children:"key"}),(0,a.jsx)(n.mo,{separator:"true",children:","}),(0,a.jsx)(n.mtext,{children:"value"}),(0,a.jsx)(n.mo,{children:"\u2264"}),(0,a.jsx)(n.mn,{children:"1"}),(0,a.jsxs)(n.msup,{children:[(0,a.jsx)(n.mn,{children:"0"}),(0,a.jsx)(n.mn,{children:"4"})]})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"0 \\leq \\text{capacity}, \\text{key}, \\text{value} \\leq 10^4"})]})})}),(0,a.jsxs)(n.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.7804em",verticalAlign:"-0.136em"}}),(0,a.jsx)(n.span,{className:"mord",children:"0"}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(n.span,{className:"mrel",children:"\u2264"}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,a.jsx)(n.span,{className:"mord text",children:(0,a.jsx)(n.span,{className:"mord",children:"capacity"})}),(0,a.jsx)(n.span,{className:"mpunct",children:","}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(n.span,{className:"mord text",children:(0,a.jsx)(n.span,{className:"mord",children:"key"})}),(0,a.jsx)(n.span,{className:"mpunct",children:","}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(n.span,{className:"mord text",children:(0,a.jsx)(n.span,{className:"mord",children:"value"})}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(n.span,{className:"mrel",children:"\u2264"}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.8141em"}}),(0,a.jsx)(n.span,{className:"mord",children:"1"}),(0,a.jsxs)(n.span,{className:"mord",children:[(0,a.jsx)(n.span,{className:"mord",children:"0"}),(0,a.jsx)(n.span,{className:"msupsub",children:(0,a.jsx)(n.span,{className:"vlist-t",children:(0,a.jsx)(n.span,{className:"vlist-r",children:(0,a.jsx)(n.span,{className:"vlist",style:{height:"0.8141em"},children:(0,a.jsxs)(n.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,a.jsx)(n.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(n.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(n.span,{className:"mord mtight",children:"4"})})]})})})})})]})]})]})]})}),"\n",(0,a.jsxs)(n.li,{children:["At most ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mn,{children:"1"}),(0,a.jsxs)(n.msup,{children:[(0,a.jsx)(n.mn,{children:"0"}),(0,a.jsx)(n.mn,{children:"5"})]})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"10^5"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.8141em"}}),(0,a.jsx)(n.span,{className:"mord",children:"1"}),(0,a.jsxs)(n.span,{className:"mord",children:[(0,a.jsx)(n.span,{className:"mord",children:"0"}),(0,a.jsx)(n.span,{className:"msupsub",children:(0,a.jsx)(n.span,{className:"vlist-t",children:(0,a.jsx)(n.span,{className:"vlist-r",children:(0,a.jsx)(n.span,{className:"vlist",style:{height:"0.8141em"},children:(0,a.jsxs)(n.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,a.jsx)(n.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(n.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(n.span,{className:"mord mtight",children:"5"})})]})})})})})]})]})})]})," calls will be made to get and put."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Follow up"}),": Could you do both operations in ",(0,a.jsx)(n.code,{children:"O(1)"})," time complexity?"]}),"\n",(0,a.jsx)(n.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"int get(int key)"})," \u9700\u8981 O(1)\uff0c\u610f\u5473\u7740\u6211\u4eec\u9700\u8981\u4e00\u4e2a ",(0,a.jsx)(n.code,{children:"HashMap<Integer, Node> nodeMap"}),"\uff0c\u7531 key \u6307\u5411",(0,a.jsx)(n.code,{children:"Node"}),"\u8282\u70b9\uff0c\u8fd9\u4e2a\u8282\u70b9\u91cc\u5305\u542b\u5b83\u7684\u503c",(0,a.jsx)(n.code,{children:"value"}),"\u548c\u9891\u7387",(0,a.jsx)(n.code,{children:"count"}),"\u7b49\u4fe1\u606f\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:["\u5f53\u7f13\u5b58\u5230\u8fbe\u6700\u5927\u5bb9\u91cf\u65f6\uff0c\u9700\u8981\u628a\u8bbf\u95ee\u9891\u7387\u6700\u4f4e\u7684\u5143\u7d20\u5f39\u51fa\u53bb\uff0c\u56e0\u6b64\u6211\u4eec\u9700\u8981\u4e00\u4e2a\u6574\u6570\u53d8\u91cf",(0,a.jsx)(n.code,{children:"min"}),"\uff0c\u6765\u8bb0\u5f55\u6700\u5c0f\u7684\u9891\u7387\u3002\u8fd8\u9700\u8981\u4e00\u79cd O(1)\u7684\u65b9\u6cd5\uff0c\u80fd\u591f\u6839\u636e",(0,a.jsx)(n.code,{children:"min"}),"\u7684\u503c\uff0c\u627e\u5230\u5bf9\u5e94\u7684\u5143\u7d20\u5217\u8868\uff0c\u8fd9\u4e9b\u5143\u7d20\u7684\u8bbf\u95ee\u9891\u7387\u90fd\u7b49\u4e8e",(0,a.jsx)(n.code,{children:"min"}),"\uff0c\u56e0\u6b64\u6700\u4f73\u65b9\u6cd5\u662f\u7528\u4e00\u4e2a",(0,a.jsx)(n.code,{children:"HashMap<Integer, DList> countMap"}),"\uff0c\u628a\u9891\u7387\u6620\u5c04\u5230\u53cc\u5411\u94fe\u8868\u3002\u4e3a\u5565\u7528\u53cc\u5411\u94fe\u8868\uff1f\u56e0\u4e3a\u6bcf\u6b21\u8bbf\u95ee\u4e00\u4e2a",(0,a.jsx)(n.code,{children:"key"}),"\uff0c\u8fd9\u4e2a",(0,a.jsx)(n.code,{children:"key"}),"\u7684\u9891\u7387\u5c31\u4f1a\u589e 1\uff0c\u90a3\u4e48\u8fd9\u4e2a\u8282\u70b9\u9700\u8981\u4ece\u65e7\u7684\u5217\u8868\u6458\u9664\uff0c\u63d2\u5165\u5230\u65b0\u7684\u5217\u8868\uff0c\u8fd9\u79cd\u9700\u8981\u9891\u7e41\u63d2\u5165\uff0c\u5220\u9664\u7684\u573a\u666f\uff0c\u663e\u7136\u9002\u5408\u7528\u53cc\u5411\u94fe\u8868\u3002"]}),"\n",(0,a.jsx)(n.h3,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n",(0,a.jsxs)(n.p,{children:["\u672c\u9898\u6bd4 ",(0,a.jsx)(n.a,{href:"/linked-list/lru-cache",children:"LRU Cache"})," \u66f4\u590d\u6742\uff0c\u4f46\u5927\u4f53\u4e0a\u662f\u7c7b\u4f3c\u7684\u3002"]}),"\n","\n",(0,a.jsxs)(i.A,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,a.jsx)(r.A,{value:"java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"// LFU Cache\n// Two HashMap + Doubly Linked List\npublic class LFUCache {\n    int capacity, size;\n    int min; // keep track of the minimum frequency\n    Map<Integer, Node> nodeMap; // key -> Node\n    Map<Integer, DList> countMap; // count -> DList\n\n    public LFUCache(int capacity) {\n        this.capacity = capacity;\n        nodeMap = new HashMap<>();\n        countMap = new HashMap<>();\n    }\n\n    // Time Complexity: O(1)\n    public int get(int key) {\n        Node node = nodeMap.get(key);\n        if (node == null) return -1;\n        update(node);\n        return node.value;\n    }\n\n    // Time Complexity: O(1)\n    public void put(int key, int value) {\n        if (capacity == 0) return;\n        Node node;\n        if (nodeMap.containsKey(key)) {\n            node = nodeMap.get(key);\n            node.value = value;\n            update(node);\n        } else {\n            node = new Node(key, value);\n            nodeMap.put(key, node);\n            if (size == capacity) {\n                DList lastList = countMap.get(min);\n                nodeMap.remove(lastList.pollLast().key);\n                size--;\n            }\n            size++;\n            min = 1; // reset min to 1\n            DList newList = countMap.getOrDefault(node.count, new DList());\n            newList.offerFirst(node);\n            countMap.put(node.count, newList);\n        }\n    }\n\n    // Increase count in countMap\n    private void update(Node node) {\n        DList oldList = countMap.get(node.count);\n        oldList.remove(node);\n        // Make min point to another list\n        if (node.count == min && oldList.size == 0) min++;\n\n        node.count++;\n        DList newList = countMap.getOrDefault(node.count, new DList());\n        newList.offerFirst(node);\n        countMap.put(node.count, newList);\n    }\n\n    // Node of doubly linked list\n    static class Node {\n        int key, value, count;\n        Node prev, next;\n        Node(int key, int value) {\n            this.key = key;\n            this.value = value;\n            count = 1;\n        }\n    }\n\n    // Doubly linked list\n    static class DList {\n        Node head, tail;\n        int size;\n\n        DList() {\n            // head and tail are two dummy nodes\n            head = new Node(0, 0);\n            tail = new Node(0, 0);\n            head.next = tail;\n            tail.prev = head;\n        }\n\n        void offerFirst(Node node) {\n            head.next.prev = node;\n            node.next = head.next;\n            node.prev = head;\n            head.next = node;\n            size++;\n        }\n\n        // Remove a node in the middle\n        void remove(Node node) {\n            if (node == null) return;\n            node.prev.next = node.next;\n            node.next.prev = node.prev;\n            size--;\n        }\n\n        // Remove the tail node\n        Node pollLast() {\n            Node last = tail.prev;\n            remove(last);\n            return last;\n        }\n    }\n}\n"})})}),(0,a.jsx)(r.A,{value:"cpp",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"// TODO\n"})})}),(0,a.jsx)(r.A,{value:"python",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"# LFU Cache\n# Two HashMap + Doubly Linked List\nclass LFUCache:\n    def __init__(self, capacity):\n        self.capacity = capacity\n        self.size = 0\n        self.min = 0  # keep track of the minimum frequency\n        self.node_map = {}  # key -> Node\n        self.count_map = {}  # count -> DList\n\n    # Time Complexity: O(1)\n    def get(self, key):\n        if key not in self.node_map:\n            return -1\n        node = self.node_map[key]\n        self._update(node)\n        return node.value\n\n    # Time Complexity: O(1)\n    def put(self, key, value):\n        if self.capacity == 0:\n            return\n        if key in self.node_map:\n            node = self.node_map[key]\n            node.value = value\n            self._update(node)\n        else:\n            node = Node(key, value)\n            self.node_map[key] = node\n            if self.size == self.capacity:\n                last_list = self.count_map[self.min]\n                del self.node_map[last_list.poll_last().key]\n                self.size -= 1\n            self.size += 1\n            self.min = 1  # reset min to 1\n            new_list = self.count_map.get(node.count, DList())\n            new_list.offer_first(node)\n            self.count_map[node.count] = new_list\n\n    # Increase count in count_map\n    def _update(self, node):\n        old_list = self.count_map[node.count]\n        old_list.remove(node)\n        # Make min point to another list\n        if node.count == self.min and old_list.size == 0:\n            self.min += 1\n\n        node.count += 1\n        new_list = self.count_map.get(node.count, DList())\n        new_list.offer_first(node)\n        self.count_map[node.count] = new_list\n\n# Node of doubly linked list\nclass Node:\n    def __init__(self, key, value):\n        self.key = key\n        self.value = value\n        self.count = 1\n        self.prev = None\n        self.next = None\n\n# Doubly linked list\nclass DList:\n    def __init__(self):\n        # head and tail are two dummy nodes\n        self.head = Node(0, 0)\n        self.tail = Node(0, 0)\n        self.head.next = self.tail\n        self.tail.prev = self.head\n        self.size = 0\n\n    def offer_first(self, node):\n        node.next = self.head.next\n        node.prev = self.head\n        self.head.next.prev = node\n        self.head.next = node\n        self.size += 1\n\n    # Remove a node in the middle\n    def remove(self, node):\n        if not node:\n            return\n        node.prev.next = node.next\n        node.next.prev = node.prev\n        self.size -= 1\n\n    # Remove the tail node\n    def poll_last(self):\n        last = self.tail.prev\n        self.remove(last)\n        return last\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"\u76f8\u5173\u9898\u76ee",children:"\u76f8\u5173\u9898\u76ee"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/linked-list/lru-cache",children:"LRU Cache"})}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,n,s)=>{s.d(n,{A:()=>i});s(96540);var t=s(34164);const a={tabItem:"tabItem_Ymn6"};var l=s(74848);function i(e){let{children:n,hidden:s,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,i),hidden:s,children:n})}},11470:(e,n,s)=>{s.d(n,{A:()=>N});var t=s(96540),a=s(34164),l=s(23104),i=s(56347),r=s(205),c=s(57485),o=s(31682),d=s(70679);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:s}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:s,attributes:t,default:a}}=e;return{value:n,label:s,attributes:t,default:a}}))}(s);return function(e){const n=(0,o.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function m(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:s}=e;const a=(0,i.W6)(),l=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,c.aZ)(l),(0,t.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function x(e){const{defaultValue:n,queryString:s=!1,groupId:a}=e,l=h(e),[i,c]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:l}))),[o,u]=p({queryString:s,groupId:a}),[x,f]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,d.Dv)(s);return[a,(0,t.useCallback)((e=>{s&&l.set(e)}),[s,l])]}({groupId:a}),j=(()=>{const e=o??x;return m({value:e,tabValues:l})?e:null})();(0,r.A)((()=>{j&&c(j)}),[j]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),f(e)}),[u,f,l]),tabValues:l}}var f=s(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=s(74848);function y(e){let{className:n,block:s,selectedValue:t,selectValue:i,tabValues:r}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,l.a_)(),d=e=>{const n=e.currentTarget,s=c.indexOf(n),a=r[s].value;a!==t&&(o(n),i(a))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=c.indexOf(e.currentTarget)+1;n=c[s]??c[0];break}case"ArrowLeft":{const s=c.indexOf(e.currentTarget)-1;n=c[s]??c[c.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":s},n),children:r.map((e=>{let{value:n,label:s,attributes:l}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...l,className:(0,a.A)("tabs__item",j.tabItem,l?.className,{"tabs__item--active":t===n}),children:s??n},n)}))})}function g(e){let{lazy:n,children:s,selectedValue:l}=e;const i=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===l));return e?(0,t.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function b(e){const n=x(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",j.tabList),children:[(0,v.jsx)(y,{...n,...e}),(0,v.jsx)(g,{...n,...e})]})}function N(e){const n=(0,f.A)();return(0,v.jsx)(b,{...e,children:u(e.children)},String(n))}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>r});var t=s(96540);const a={},l=t.createContext(a);function i(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);