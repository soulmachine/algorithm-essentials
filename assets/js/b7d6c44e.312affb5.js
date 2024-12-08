"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[3292],{31222:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"sorting/merge-sort/merge-two-sorted-lists","title":"Merge Two Sorted Lists","description":"\u63cf\u8ff0","source":"@site/docs/sorting/merge-sort/merge-two-sorted-lists.md","sourceDirName":"sorting/merge-sort","slug":"/sorting/merge-sort/merge-two-sorted-lists","permalink":"/sorting/merge-sort/merge-two-sorted-lists","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Merge Two Sorted Lists"},"sidebar":"docs","previous":{"title":"Merge Two Sorted Arrays","permalink":"/sorting/merge-sort/merge-two-sorted-arrays"},"next":{"title":"Merge k Sorted Lists","permalink":"/sorting/merge-sort/merge-k-sorted-lists"}}');var l=n(74848),s=n(28453),a=n(11470),o=n(19365);const i={title:"Merge Two Sorted Lists"},u=void 0,c={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}];function m(e){const t={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,l.jsx)(t.p,{children:"Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists."}),"\n",(0,l.jsx)(t.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,l.jsx)(t.p,{children:"\u65e0"}),"\n",(0,l.jsx)(t.h3,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n","\n",(0,l.jsxs)(a.A,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,l.jsx)(o.A,{value:"java",children:(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-java",children:"// Merge Two Sorted Lists\n// \u65f6\u95f4\u590d\u6742\u5ea6O(min(m,n))\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {\n        ListNode dummy = new ListNode(-1);\n        for (ListNode p = dummy; l1 != null || l2 != null; p = p.next) {\n            int val1 = l1 == null ? Integer.MAX_VALUE : l1.val;\n            int val2 = l2 == null ? Integer.MAX_VALUE : l2.val;\n            if (val1 <= val2) {\n                p.next = l1;\n                l1 = l1.next;\n            } else {\n                p.next = l2;\n                l2 = l2.next;\n            }\n        }\n        return dummy.next;\n    }\n}\n"})})}),(0,l.jsx)(o.A,{value:"cpp",children:(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-cpp",children:"// Merge Two Sorted Lists\n// \u65f6\u95f4\u590d\u6742\u5ea6O(min(m,n))\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    ListNode *mergeTwoLists(ListNode *l1, ListNode *l2) {\n        ListNode dummy(-1);\n        for (ListNode* p = &dummy; l1 != nullptr || l2 != nullptr; p = p->next) {\n            int val1 = l1 == nullptr ? INT_MAX : l1->val;\n            int val2 = l2 == nullptr ? INT_MAX : l2->val;\n            if (val1 <= val2) {\n                p->next = l1;\n                l1 = l1->next;\n            } else {\n                p->next = l2;\n                l2 = l2->next;\n            }\n        }\n        return dummy.next;\n    }\n};\n"})})}),(0,l.jsx)(o.A,{value:"python",children:(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-python",children:"# Merge Two Sorted Lists\n# Time complexity O(min(m,n)), Space complexity O(1)\nclass Solution:\n    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:\n        dummy = ListNode(-1)\n        p = dummy\n        while l1 or l2:\n            val1 = float('inf') if not l1 else l1.val\n            val2 = float('inf') if not l2 else l2.val\n            if val1 <= val2:\n                p.next = l1\n                l1 = l1.next\n            else:\n                p.next = l2\n                l2 = l2.next\n            p = p.next\n        return dummy.next\n"})})})]}),"\n",(0,l.jsx)(t.h3,{id:"\u76f8\u5173\u9898\u76ee",children:"\u76f8\u5173\u9898\u76ee"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"/sorting/merge-sort/merge-two-sorted-arrays",children:"Merge Two Sorted Arrays"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"/sorting/merge-sort/merge-k-sorted-lists",children:"Merge k Sorted Lists"})}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(m,{...e})}):m(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var r=n(34164);const l={tabItem:"tabItem_Ymn6"};var s=n(74848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,a),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>j});var r=n(96540),l=n(34164),s=n(23104),a=n(56347),o=n(205),i=n(57485),u=n(31682),c=n(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:l}}=e;return{value:t,label:n,attributes:r,default:l}}))}(n);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const l=(0,a.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(l.location.search);t.set(s,e),l.replace({...l.location,search:t.toString()})}),[s,l])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:l}=e,s=m(e),[a,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[u,d]=h({queryString:n,groupId:l}),[f,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[l,s]=(0,c.Dv)(n);return[l,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:l}),g=(()=>{const e=u??f;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{g&&i(g)}),[g]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),v(e)}),[d,v,s]),tabValues:s}}var v=n(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(74848);function x(e){let{className:t,block:n,selectedValue:r,selectValue:a,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const t=e.currentTarget,n=i.indexOf(t),l=o[n].value;l!==r&&(u(t),a(l))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...s,className:(0,l.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:s}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function w(e){const t=f(e);return(0,b.jsxs)("div",{className:(0,l.A)("tabs-container",g.tabList),children:[(0,b.jsx)(x,{...t,...e}),(0,b.jsx)(y,{...t,...e})]})}function j(e){const t=(0,v.A)();return(0,b.jsx)(w,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var r=n(96540);const l={},s=r.createContext(l);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);