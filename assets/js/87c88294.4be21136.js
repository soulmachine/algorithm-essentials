"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[1940],{30363:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"linked-list/copy-list-with-random-pointer","title":"Copy List with Random Pointer","description":"\u63cf\u8ff0","source":"@site/docs/linked-list/copy-list-with-random-pointer.md","sourceDirName":"linked-list","slug":"/linked-list/copy-list-with-random-pointer","permalink":"/linked-list/copy-list-with-random-pointer","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Copy List with Random Pointer"},"sidebar":"docs","previous":{"title":"Reverse Nodes in k-Group","permalink":"/linked-list/reverse-nodes-in-k-group"},"next":{"title":"Reorder List","permalink":"/linked-list/reorder-list"}}');var a=t(74848),o=t(28453),u=t(11470),l=t(19365);const s={title:"Copy List with Random Pointer"},i=void 0,c={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}];function m(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,a.jsx)(n.p,{children:"A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null."}),"\n",(0,a.jsx)(n.p,{children:"Return a deep copy of the list."}),"\n",(0,a.jsx)(n.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,a.jsx)(n.p,{children:"\u65e0"}),"\n",(0,a.jsx)(n.h3,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n","\n",(0,a.jsxs)(u.A,{defaultValue:"python",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"},{label:"Python",value:"python"}],children:[(0,a.jsx)(l.A,{value:"java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"// Copy List with Random Pointer\n// \u4e24\u904d\u626b\u63cf\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\n    public RandomListNode copyRandomList(RandomListNode head) {\n        for (RandomListNode cur = head; cur != null; ) {\n            RandomListNode node = new RandomListNode(cur.label);\n            node.next = cur.next;\n            cur.next = node;\n            cur = node.next;\n        }\n\n        for (RandomListNode cur = head; cur != null; ) {\n            if (cur.random != null)\n                cur.next.random = cur.random.next;\n            cur = cur.next.next;\n        }\n\n        // \u5206\u62c6\u4e24\u4e2a\u5355\u94fe\u8868\n        RandomListNode dummy = new RandomListNode(-1);\n        for (RandomListNode cur = head, new_cur = dummy;\n                cur != null; ) {\n            new_cur.next = cur.next;\n            new_cur = new_cur.next;\n            cur.next = cur.next.next;\n            cur = cur.next;\n        }\n        return dummy.next;\n    }\n};\n"})})}),(0,a.jsx)(l.A,{value:"cpp",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"// Copy List with Random Pointer\n// \u4e24\u904d\u626b\u63cf\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    RandomListNode *copyRandomList(RandomListNode *head) {\n        for (RandomListNode* cur = head; cur != nullptr; ) {\n            RandomListNode* node = new RandomListNode(cur->label);\n            node->next = cur->next;\n            cur->next = node;\n            cur = node->next;\n        }\n\n        for (RandomListNode* cur = head; cur != nullptr; ) {\n            if (cur->random != NULL)\n                cur->next->random = cur->random->next;\n            cur = cur->next->next;\n        }\n\n        // \u5206\u62c6\u4e24\u4e2a\u5355\u94fe\u8868\n        RandomListNode dummy(-1);\n        for (RandomListNode* cur = head, *new_cur = &dummy;\n                cur != nullptr; ) {\n            new_cur->next = cur->next;\n            new_cur = new_cur->next;\n            cur->next = cur->next->next;\n            cur = cur->next;\n        }\n        return dummy.next;\n    }\n};\n"})})}),(0,a.jsx)(l.A,{value:"python",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"# Copy List with Random Pointer\n# \u4e24\u904d\u626b\u63cf\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution:\n    def copyRandomList(self, head):\n        cur = head\n        while cur:\n            node = RandomListNode(cur.val)\n            node.next = cur.next\n            cur.next = node\n            cur = node.next\n\n        cur = head\n        while cur:\n            if cur.random:\n                cur.next.random = cur.random.next\n            cur = cur.next.next\n\n        # \u5206\u62c6\u4e24\u4e2a\u5355\u94fe\u8868\n        dummy = RandomListNode(-1)\n        cur = head\n        new_cur = dummy\n        while cur:\n            new_cur.next = cur.next\n            new_cur = new_cur.next\n            cur.next = cur.next.next\n            cur = cur.next\n        return dummy.next\n\nclass RandomListNode:\n    def __init__(self, x, next=None, random=None):\n        self.val = x\n        self.next = next\n        self.random = random\n"})})})]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>u});t(96540);var r=t(34164);const a={tabItem:"tabItem_Ymn6"};var o=t(74848);function u(e){let{children:n,hidden:t,className:u}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,u),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>N});var r=t(96540),a=t(34164),o=t(23104),u=t(56347),l=t(205),s=t(57485),i=t(31682),c=t(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,i.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const a=(0,u.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(a.location.search);n.set(o,e),a.replace({...a.location,search:n.toString()})}),[o,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,o=m(e),[u,s]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[i,d]=p({queryString:t,groupId:a}),[f,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,o]=(0,c.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),b=(()=>{const e=i??f;return h({value:e,tabValues:o})?e:null})();(0,l.A)((()=>{b&&s(b)}),[b]);return{selectedValue:u,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),x(e)}),[d,x,o]),tabValues:o}}var x=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(74848);function y(e){let{className:n,block:t,selectedValue:r,selectValue:u,tabValues:l}=e;const s=[],{blockElementScrollPositionUntilNextRender:i}=(0,o.a_)(),c=e=>{const n=e.currentTarget,t=s.indexOf(n),a=l[t].value;a!==r&&(i(n),u(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>s.push(e),onKeyDown:d,onClick:c,...o,className:(0,a.A)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function w(e){let{lazy:n,children:t,selectedValue:o}=e;const u=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=u.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:u.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function g(e){const n=f(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,v.jsx)(y,{...n,...e}),(0,v.jsx)(w,{...n,...e})]})}function N(e){const n=(0,x.A)();return(0,v.jsx)(g,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>u,x:()=>l});var r=t(96540);const a={},o=r.createContext(a);function u(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:u(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);