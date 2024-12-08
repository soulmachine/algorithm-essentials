"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[6230],{28434:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>c});const l=JSON.parse('{"id":"linked-list/middle-of-the-linked-list","title":"Middle of the Linked List","description":"\u63cf\u8ff0","source":"@site/docs/linked-list/middle-of-the-linked-list.md","sourceDirName":"linked-list","slug":"/linked-list/middle-of-the-linked-list","permalink":"/linked-list/middle-of-the-linked-list","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Middle of the Linked List"},"sidebar":"docs","previous":{"title":"Linked List Cycle II","permalink":"/linked-list/linked-list-cycle-ii"},"next":{"title":"Intersection of Two Linked Lists","permalink":"/linked-list/intersection-of-two-linked-lists"}}');var a=n(74848),r=n(28453),s=n(11470),i=n(19365);const o={title:"Middle of the Linked List"},u=void 0,d={},c=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}];function h(e){const t={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,a.jsx)(t.p,{children:"Given a singly linked list, return the middle node of the linked list."}),"\n",(0,a.jsx)(t.p,{children:"If there are two middle nodes, return the second middle node."}),"\n",(0,a.jsx)(t.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,a.jsx)(t.p,{children:"\u8fd9\u9898\u4e5f\u53ef\u4ee5\u7528\u5feb\u6162\u6307\u9488\u6765\u89e3\u51b3\uff0c\u5feb\u6307\u9488\u6bcf\u6b21\u8d70\u4e24\u6b65\uff0c\u6162\u6307\u9488\u6bcf\u6b21\u8d70\u4e00\u6b65\uff0c\u5f53\u5feb\u6307\u9488\u8d70\u5230\u94fe\u8868\u5c3e\u90e8\u65f6\uff0c\u6162\u6307\u9488\u6b63\u597d\u8d70\u5230\u94fe\u8868\u4e2d\u95f4\u3002"}),"\n",(0,a.jsx)(t.h3,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n","\n",(0,a.jsxs)(s.A,{defaultValue:"python",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"},{label:"Python",value:"python"}],children:[(0,a.jsx)(i.A,{value:"java",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:"// TODO\n"})})}),(0,a.jsx)(i.A,{value:"cpp",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cpp",children:"// Middle of the Linked List\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    ListNode* middleNode(ListNode* head) {\n        // \u8bbe\u7f6e\u4e24\u4e2a\u6307\u9488\uff0c\u4e00\u4e2a\u5feb\u4e00\u4e2a\u6162\n        ListNode *slow = head, *fast = head;\n        while (fast && fast->next) {\n            slow = slow->next;\n            fast = fast->next->next;\n        }\n        return slow;\n    }\n};\n"})})}),(0,a.jsx)(i.A,{value:"python",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"# Middle of the Linked List\n# \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution:\n    def middleNode(self, head):\n        slow, fast = head, head\n        while fast and fast.next:\n            slow = slow.next\n            fast = fast.next.next\n        return slow\n"})})})]}),"\n",(0,a.jsx)(t.h3,{id:"\u76f8\u5173\u9898\u76ee",children:"\u76f8\u5173\u9898\u76ee"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/linked-list/linked-list-cycle",children:"Linked List Cycle"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/linked-list/linked-list-cycle-ii",children:"Linked List Cycle II"})}),"\n"]})]})}function f(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var l=n(34164);const a={tabItem:"tabItem_Ymn6"};var r=n(74848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,l.A)(a.tabItem,s),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>y});var l=n(96540),a=n(34164),r=n(23104),s=n(56347),i=n(205),o=n(57485),u=n(31682),d=n(70679);function c(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,l.useMemo)((()=>{const e=t??function(e){return c(e).map((e=>{let{props:{value:t,label:n,attributes:l,default:a}}=e;return{value:t,label:n,attributes:l,default:a}}))}(n);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.W6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=h(e),[s,o]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const l=n.find((e=>e.default))??n[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:t,tabValues:r}))),[u,c]=p({queryString:n,groupId:a}),[m,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,d.Dv)(n);return[a,(0,l.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),b=(()=>{const e=u??m;return f({value:e,tabValues:r})?e:null})();(0,i.A)((()=>{b&&o(b)}),[b]);return{selectedValue:s,selectValue:(0,l.useCallback)((e=>{if(!f({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),v(e)}),[c,v,r]),tabValues:r}}var v=n(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(74848);function k(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.a_)(),d=e=>{const t=e.currentTarget,n=o.indexOf(t),a=i[n].value;a!==l&&(u(t),s(a))},c=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,ref:e=>o.push(e),onKeyDown:c,onClick:d,...r,className:(0,a.A)("tabs__item",b.tabItem,r?.className,{"tabs__item--active":l===t}),children:n??t},t)}))})}function g(e){let{lazy:t,children:n,selectedValue:r}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,l.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function j(e){const t=m(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,x.jsx)(k,{...t,...e}),(0,x.jsx)(g,{...t,...e})]})}function y(e){const t=(0,v.A)();return(0,x.jsx)(j,{...e,children:c(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var l=n(96540);const a={},r=l.createContext(a);function s(e){const t=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),l.createElement(r.Provider,{value:t},e.children)}}}]);