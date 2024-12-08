"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[2295],{97988:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>u,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"linked-list/reverse-nodes-in-k-group","title":"Reverse Nodes in k-Group","description":"\u63cf\u8ff0","source":"@site/docs/linked-list/reverse-nodes-in-k-group.md","sourceDirName":"linked-list","slug":"/linked-list/reverse-nodes-in-k-group","permalink":"/en/linked-list/reverse-nodes-in-k-group","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Reverse Nodes in k-Group"},"sidebar":"docs","previous":{"title":"Swap Nodes in Pairs","permalink":"/en/linked-list/swap-nodes-in-pairs"},"next":{"title":"Copy List with Random Pointer","permalink":"/en/linked-list/copy-list-with-random-pointer"}}');var l=r(74848),s=r(28453),i=r(11470),a=r(19365);const o={title:"Reverse Nodes in k-Group"},u=void 0,d={},c=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u9012\u5f52\u7248",id:"\u9012\u5f52\u7248",level:3},{value:"\u8fed\u4ee3\u7248",id:"\u8fed\u4ee3\u7248",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}];function p(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,l.jsx)(n.p,{children:"Given a linked list, reverse the nodes of a linked list k at a time and return its modified list."}),"\n",(0,l.jsxs)(n.p,{children:["If the number of nodes is not a multiple of ",(0,l.jsx)(n.code,{children:"k"})," then left-out nodes in the end should remain as it is."]}),"\n",(0,l.jsx)(n.p,{children:"You may not alter the values in the nodes, only nodes itself may be changed."}),"\n",(0,l.jsx)(n.p,{children:"Only constant memory is allowed."}),"\n",(0,l.jsxs)(n.p,{children:["For example,\nGiven this linked list: ",(0,l.jsx)(n.code,{children:"1->2->3->4->5"})]}),"\n",(0,l.jsxs)(n.p,{children:["For ",(0,l.jsx)(n.code,{children:"k = 2"}),", you should return: ",(0,l.jsx)(n.code,{children:"2->1->4->3->5"})]}),"\n",(0,l.jsxs)(n.p,{children:["For ",(0,l.jsx)(n.code,{children:"k = 3"}),", you should return: ",(0,l.jsx)(n.code,{children:"3->2->1->4->5"})]}),"\n",(0,l.jsx)(n.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,l.jsx)(n.p,{children:"\u65e0"}),"\n",(0,l.jsx)(n.h3,{id:"\u9012\u5f52\u7248",children:"\u9012\u5f52\u7248"}),"\n","\n",(0,l.jsxs)(i.A,{defaultValue:"python",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"},{label:"Python",value:"python"}],children:[(0,l.jsx)(a.A,{value:"java",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:"\n// Reverse Nodes in k-Group\n// \u9012\u5f52\u7248\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\n    public ListNode reverseKGroup(ListNode head, int k) {\n        if (head == null || head.next == null || k < 2)\n            return head;\n\n        ListNode next_group = head;\n        for (int i = 0; i < k; ++i) {\n            if (next_group != null)\n                next_group = next_group.next;\n            else\n                return head;\n        }\n        // next_group is the head of next group\n        // new_next_group is the new head of next group after reversion\n        ListNode new_next_group = reverseKGroup(next_group, k);\n        ListNode prev = null, cur = head;\n        while (cur != next_group) {\n            ListNode next = cur.next;\n            cur.next = prev != null ? prev : new_next_group;\n            prev = cur;\n            cur = next;\n        }\n        return prev; // prev will be the new head of this group\n    }\n}\n"})})}),(0,l.jsx)(a.A,{value:"cpp",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cpp",children:"// Reverse Nodes in k-Group\n// \u9012\u5f52\u7248\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    ListNode *reverseKGroup(ListNode *head, int k) {\n        if (head == nullptr || head->next == nullptr || k < 2)\n            return head;\n\n        ListNode *next_group = head;\n        for (int i = 0; i < k; ++i) {\n            if (next_group)\n                next_group = next_group->next;\n            else\n                return head;\n        }\n        // next_group is the head of next group\n        // new_next_group is the new head of next group after reversion\n        ListNode *new_next_group = reverseKGroup(next_group, k);\n        ListNode *prev = NULL, *cur = head;\n        while (cur != next_group) {\n            ListNode *next = cur->next;\n            cur->next = prev ? prev : new_next_group;\n            prev = cur;\n            cur = next;\n        }\n        return prev; // prev will be the new head of this group\n    }\n};\n"})})}),(0,l.jsx)(a.A,{value:"python",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"# Reverse Nodes in k-Group\n# \u9012\u5f52\u7248\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution:\n    def reverseKGroup(self, head, k):\n        if head is None or head.next is None or k < 2:\n            return head\n\n        next_group = head\n        for i in range(k):\n            if next_group:\n                next_group = next_group.next\n            else:\n                return head\n        # next_group is the head of next group\n        # new_next_group is the new head of next group after reversion\n        new_next_group = self.reverseKGroup(next_group, k)\n        prev, cur = None, head\n        while cur != next_group:\n            next = cur.next\n            cur.next = prev if prev else new_next_group\n            prev = cur\n            cur = next\n        return prev # prev will be the new head of this group\n"})})})]}),"\n",(0,l.jsx)(n.h3,{id:"\u8fed\u4ee3\u7248",children:"\u8fed\u4ee3\u7248"}),"\n",(0,l.jsxs)(i.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"},{label:"Python",value:"python"}],children:[(0,l.jsx)(a.A,{value:"java",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:"// Reverse Nodes in k-Group\n// \u8fed\u4ee3\u7248\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\n    public ListNode reverseKGroup(ListNode head, int k) {\n        if (head == null || head.next == null || k < 2) return head;\n        ListNode dummy = new ListNode(-1);\n        dummy.next = head;\n\n        for(ListNode prev = dummy, end = head; end != null; end = prev.next) {\n            for (int i = 1; i < k && end != null; i++)\n                end = end.next;\n            if (end  == null) break;  // \u4e0d\u8db3 k \u4e2a\n\n            prev = reverse(prev, prev.next, end);\n        }\n\n        return dummy.next;\n    }\n\n    // prev \u662f first \u524d\u4e00\u4e2a\u5143\u7d20, [begin, end] \u95ed\u533a\u95f4\uff0c\u4fdd\u8bc1\u4e09\u8005\u90fd\u4e0d\u4e3a null\n    // \u8fd4\u56de\u53cd\u8f6c\u540e\u7684\u5012\u6570\u7b2c1\u4e2a\u5143\u7d20\n    ListNode reverse(ListNode prev, ListNode begin, ListNode end) {\n        ListNode end_next = end.next;\n        for (ListNode p = begin, cur = p.next, next = cur.next;\n                cur != end_next;\n                p = cur, cur = next, next = next != null ? next.next : null) {\n            cur.next = p;\n        }\n        begin.next = end_next;\n        prev.next = end;\n        return begin;\n    }\n};\n"})})}),(0,l.jsx)(a.A,{value:"cpp",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cpp",children:"// Reverse Nodes in k-Group\n// \u8fed\u4ee3\u7248\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    ListNode *reverseKGroup(ListNode *head, int k) {\n        if (head == nullptr || head->next == nullptr || k < 2) return head;\n        ListNode dummy(-1);\n        dummy.next = head;\n\n        for(ListNode *prev = &dummy, *end = head; end; end = prev->next) {\n            for (int i = 1; i < k && end; i++)\n                end = end->next;\n            if (end  == nullptr) break;  // \u4e0d\u8db3 k \u4e2a\n\n            prev = reverse(prev, prev->next, end);\n        }\n\n        return dummy.next;\n    }\n\n    // prev \u662f first \u524d\u4e00\u4e2a\u5143\u7d20, [begin, end] \u95ed\u533a\u95f4\uff0c\u4fdd\u8bc1\u4e09\u8005\u90fd\u4e0d\u4e3a null\n    // \u8fd4\u56de\u53cd\u8f6c\u540e\u7684\u5012\u6570\u7b2c1\u4e2a\u5143\u7d20\n    ListNode* reverse(ListNode *prev, ListNode *begin, ListNode *end) {\n        ListNode *end_next = end->next;\n        for (ListNode *p = begin, *cur = p->next, *next = cur->next;\n                cur != end_next;\n                p = cur, cur = next, next = next ? next->next : nullptr) {\n            cur->next = p;\n        }\n        begin->next = end_next;\n        prev->next = end;\n        return begin;\n    }\n};\n"})})}),(0,l.jsx)(a.A,{value:"python",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"# Reverse Nodes in k-Group\n# \u8fed\u4ee3\u7248\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution:\n    def reverseKGroup(self, head, k):\n        if head is None or head.next is None or k < 2: return head\n        dummy = ListNode(-1, head)\n\n        prev, end = dummy, head\n        while end:\n            i = 1\n            while i < k and end:\n                end = end.next\n                i += 1\n\n            if end is None:\n                break # \u4e0d\u8db3 k \u4e2a\n\n            prev = self.reverse(prev, prev.next, end)\n\n            end = prev.next\n\n        return dummy.next\n\n    # prev \u662f first \u524d\u4e00\u4e2a\u5143\u7d20, [begin, end] \u95ed\u533a\u95f4\uff0c\u4fdd\u8bc1\u4e09\u8005\u90fd\u4e0d\u4e3a null\n    # \u8fd4\u56de\u53cd\u8f6c\u540e\u7684\u5012\u6570\u7b2c1\u4e2a\u5143\u7d20\n    def reverse(self, prev, begin, end):\n        end_next = end.next\n\n        p = begin\n        cur = p.next\n        next = cur.next\n        while cur != end_next:\n            cur.next = p\n\n            p = cur\n            cur = next\n            next = next.next if next else None\n        begin.next = end_next\n        prev.next = end\n        return begin\n"})})})]}),"\n",(0,l.jsx)(n.h3,{id:"\u76f8\u5173\u9898\u76ee",children:"\u76f8\u5173\u9898\u76ee"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/en/linked-list/swap-nodes-in-pairs",children:"Swap Nodes in Pairs"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(p,{...e})}):p(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>i});r(96540);var t=r(34164);const l={tabItem:"tabItem_Ymn6"};var s=r(74848);function i(e){let{children:n,hidden:r,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(l.tabItem,i),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>j});var t=r(96540),l=r(34164),s=r(23104),i=r(56347),a=r(205),o=r(57485),u=r(31682),d=r(70679);function c(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return c(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:l}}=e;return{value:n,label:r,attributes:t,default:l}}))}(r);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function h(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:r}=e;const l=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,o.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(l.location.search);n.set(s,e),l.replace({...l.location,search:n.toString()})}),[s,l])]}function v(e){const{defaultValue:n,queryString:r=!1,groupId:l}=e,s=p(e),[i,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[u,c]=x({queryString:r,groupId:l}),[v,f]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,s]=(0,d.Dv)(r);return[l,(0,t.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:l}),g=(()=>{const e=u??v;return h({value:e,tabValues:s})?e:null})();(0,a.A)((()=>{g&&o(g)}),[g]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),f(e)}),[c,f,s]),tabValues:s}}var f=r(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=r(74848);function b(e){let{className:n,block:r,selectedValue:t,selectValue:i,tabValues:a}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),d=e=>{const n=e.currentTarget,r=o.indexOf(n),l=a[r].value;l!==t&&(u(n),i(l))},c=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;n=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;n=o[r]??o[o.length-1];break}}n?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":r},n),children:a.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:c,onClick:d,...s,className:(0,l.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function k(e){let{lazy:n,children:r,selectedValue:s}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function N(e){const n=v(e);return(0,m.jsxs)("div",{className:(0,l.A)("tabs-container",g.tabList),children:[(0,m.jsx)(b,{...n,...e}),(0,m.jsx)(k,{...n,...e})]})}function j(e){const n=(0,f.A)();return(0,m.jsx)(N,{...e,children:c(e.children)},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>a});var t=r(96540);const l={},s=t.createContext(l);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);