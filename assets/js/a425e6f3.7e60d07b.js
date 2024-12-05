"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[8259],{74395:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>d});const l=JSON.parse('{"id":"linked-list/linked-list-cycle-ii","title":"Linked List Cycle II","description":"\u63cf\u8ff0","source":"@site/docs/linked-list/linked-list-cycle-ii.md","sourceDirName":"linked-list","slug":"/linked-list/linked-list-cycle-ii","permalink":"/linked-list/linked-list-cycle-ii","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Linked List Cycle II"},"sidebar":"docs","previous":{"title":"Linked List Cycle","permalink":"/linked-list/linked-list-cycle"},"next":{"title":"Middle of the Linked List","permalink":"/linked-list/middle-of-the-linked-list"}}');var s=t(74848),a=t(28453),r=t(11470),i=t(19365);const o={title:"Linked List Cycle II"},u=void 0,c={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}];function h(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,s.jsxs)(n.p,{children:["Given a linked list, return the node where the cycle begins. If there is no cycle, return ",(0,s.jsx)(n.code,{children:"null"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Follow up:\nCan you solve it without using extra space?"}),"\n",(0,s.jsx)(n.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,s.jsx)(n.p,{children:"\u7528\u5feb\u6162\u6307\u9488\uff0c\u90fd\u4ece\u8868\u5934\u51fa\u53d1\uff0c\u5f53\u5feb\u6307\u9488\u548c\u6162\u6307\u9488\u76f8\u9047\u65f6\uff0c\u6162\u6307\u9488\u8fd8\u6ca1\u6709\u8d70\u5b8c\u94fe\u8868\uff0c\u5feb\u6307\u9488\u5df2\u7ecf\u5728\u73af\u5185\u8f6c\u4e86n\u5708\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u5047\u8bbe\u73af\u7684\u957f\u5ea6\u4e3a",(0,s.jsx)(n.code,{children:"r"}),"\uff0c\u73af\u5165\u53e3\u70b9\u8ddd\u79bb\u94fe\u8868\u5934\u7684\u8ddd\u79bb\u4e3a",(0,s.jsx)(n.code,{children:"a"}),"\uff0c\u4e24\u6307\u9488\u7b2c\u4e00\u6b21\u76f8\u9047\u70b9\u8ddd\u79bb\u73af\u5165\u53e3\u4e3a",(0,s.jsx)(n.code,{children:"b"}),"\uff0c"]}),"\n",(0,s.jsxs)(n.p,{children:["\u7531\u4e8e\u5feb\u6307\u9488\u8d70\u8fc7\u7684\u8ddd\u79bb\u662f\u6162\u6307\u9488\u7684\u4e24\u500d\uff0c\u5219\u6709 ",(0,s.jsx)(n.code,{children:"a+nr+b=2*(a+b)"})," -> ",(0,s.jsx)(n.code,{children:"nr=a+b"})," -> ",(0,s.jsx)(n.code,{children:"a= nr-b"})]}),"\n",(0,s.jsx)(n.p,{children:"\u53ef\u89c1\uff0c\u5f53\u5feb\u6162\u6307\u9488\u76f8\u9047\u65f6\uff0c\u91cd\u65b0\u7528\u53cc\u6307\u9488\u7684\u6280\u5de7\uff0c\u4e0d\u8fc7\u8fd9\u65f6\u5019\u4e8c\u4e2a\u6307\u9488\u7684\u901f\u5ea6\u8981\u76f8\u540c\uff0c\u4e00\u4e2a\u4ece\u8868\u5934\u51fa\u53d1\uff0c\u4e00\u4e2a\u4ece\u76f8\u9047\u70b9\u51fa\u53d1\uff0c\u5f532\u4e2a\u6307\u9488\u76f8\u9047\u65f6\uff0c\u5b83\u4eec\u4e00\u5b9a\u4f1a\u5728\u5165\u53e3\u70b9\u76f8\u9047\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n","\n",(0,s.jsxs)(r.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"},{label:"Python",value:"python"}],children:[(0,s.jsx)(i.A,{value:"java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"// Linked List Cycle II\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\n    public ListNode detectCycle(ListNode head) {\n        ListNode slow = head, fast = head;\n        while (fast != null && fast.next != null) {\n            slow = slow.next;\n            fast = fast.next.next;\n            if (slow == fast) {\n                ListNode slow2 = head;\n\n                while (slow2 != slow) {\n                    slow2 = slow2.next;\n                    slow = slow.next;\n                }\n                return slow2;\n            }\n        }\n        return null;\n    }\n}\n"})})}),(0,s.jsx)(i.A,{value:"cpp",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"// Linked List Cycle II\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    ListNode *detectCycle(ListNode *head) {\n        ListNode *slow = head, *fast = head;\n        while (fast && fast->next) {\n            slow = slow->next;\n            fast = fast->next->next;\n            if (slow == fast) {\n                ListNode *slow2 = head;\n\n                while (slow2 != slow) {\n                    slow2 = slow2->next;\n                    slow = slow->next;\n                }\n                return slow2;\n            }\n        }\n        return nullptr;\n    }\n};\n"})})}),(0,s.jsx)(i.A,{value:"python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"# Linked List Cycle II\n# \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution:\n    def detectCycle(self, head):\n        slow, fast = head, head;\n        while fast and fast.next:\n            slow = slow.next\n            fast = fast.next.next\n            if (slow == fast):\n                slow2 = head\n\n                while slow2 != slow:\n                    slow2 = slow2.next\n                    slow = slow.next\n                return slow2\n        return None\n"})})})]}),"\n",(0,s.jsx)(n.h3,{id:"\u76f8\u5173\u9898\u76ee",children:"\u76f8\u5173\u9898\u76ee"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/linked-list/linked-list-cycle",children:"Linked List Cycle"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/linked-list/middle-of-the-linked-list",children:"Middle of the Linked List"})}),"\n"]})]})}function f(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>r});t(96540);var l=t(34164);const s={tabItem:"tabItem_Ymn6"};var a=t(74848);function r(e){let{children:n,hidden:t,className:r}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,l.A)(s.tabItem,r),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>k});var l=t(96540),s=t(34164),a=t(23104),r=t(56347),i=t(205),o=t(57485),u=t(31682),c=t(70679);function d(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,l.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:l,default:s}}=e;return{value:n,label:t,attributes:l,default:s}}))}(t);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function f(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const s=(0,r.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(a),(0,l.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,a=h(e),[r,o]=(0,l.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const l=t.find((e=>e.default))??t[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:n,tabValues:a}))),[u,d]=p({queryString:t,groupId:s}),[b,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,c.Dv)(t);return[s,(0,l.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),v=(()=>{const e=u??b;return f({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{v&&o(v)}),[v]);return{selectedValue:r,selectValue:(0,l.useCallback)((e=>{if(!f({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),x(e)}),[d,x,a]),tabValues:a}}var x=t(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=t(74848);function w(e){let{className:n,block:t,selectedValue:l,selectValue:r,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.a_)(),c=e=>{const n=e.currentTarget,t=o.indexOf(n),s=i[t].value;s!==l&&(u(n),r(s))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,ref:e=>o.push(e),onKeyDown:d,onClick:c,...a,className:(0,s.A)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":l===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:a}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===a));return e?(0,l.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=b(e);return(0,m.jsxs)("div",{className:(0,s.A)("tabs-container",v.tabList),children:[(0,m.jsx)(w,{...n,...e}),(0,m.jsx)(j,{...n,...e})]})}function k(e){const n=(0,x.A)();return(0,m.jsx)(y,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>i});var l=t(96540);const s={},a=l.createContext(s);function r(e){const n=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);