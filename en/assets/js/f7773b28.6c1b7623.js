"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[6394],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=u(n),c=l,f=m["".concat(s,".").concat(c)]||m[c]||p[c]||a;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294),l=n(6010);const a="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,l.Z)(a,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(7462),l=n(7294),a=n(6010),o=n(2389),i=n(7392),s=n(7094),u=n(2466);const d="tabList__CuJ",p="tabItem_LNqP";function m(e){var t;const{lazy:n,block:o,defaultValue:m,values:c,groupId:f,className:v}=e,h=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=c??h.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),b=(0,i.l)(k,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===m?m:m??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==y&&!k.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:g}=(0,s.U)(),[x,w]=(0,l.useState)(y),O=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=f){const e=N[f];null!=e&&e!==x&&k.some((t=>t.value===e))&&w(e)}const T=e=>{const t=e.currentTarget,n=O.indexOf(t),r=k[n].value;r!==x&&(E(t),w(r),null!=f&&g(f,String(r)))},C=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;n=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;n=O[t]??O[O.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,a.Z)("tabs-container",d)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":o},v)},k.map((e=>{let{value:t,label:n,attributes:o}=e;return l.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>O.push(e),onKeyDown:C,onFocus:T,onClick:T},o,{className:(0,a.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":x===t})}),n??t)}))),n?(0,l.cloneElement)(h.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function c(e){const t=(0,o.Z)();return l.createElement(m,(0,r.Z)({key:String(t)},e))}},1477:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var r=n(7462),l=(n(7294),n(3905)),a=n(5488),o=n(5162);const i={title:"Remove Nth Node From End of List"},s=void 0,u={unversionedId:"linked-list/remove-nth-node-from-end-of-list",id:"linked-list/remove-nth-node-from-end-of-list",title:"Remove Nth Node From End of List",description:"\u63cf\u8ff0",source:"@site/docs/linked-list/remove-nth-node-from-end-of-list.md",sourceDirName:"linked-list",slug:"/linked-list/remove-nth-node-from-end-of-list",permalink:"/en/linked-list/remove-nth-node-from-end-of-list",draft:!1,tags:[],version:"current",frontMatter:{title:"Remove Nth Node From End of List"},sidebar:"docs",previous:{title:"Intersection of Two Linked Lists",permalink:"/en/linked-list/intersection-of-two-linked-lists"},next:{title:"Reverse Linked List",permalink:"/en/linked-list/reverse-linked-list"}},d={},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],m={toc:p};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,l.kt)("p",null,"Given a linked list, remove the ",(0,l.kt)("inlineCode",{parentName:"p"},"n"),"-th node from the end of list and return its head."),(0,l.kt)("p",null,"For example, Given linked list: ",(0,l.kt)("inlineCode",{parentName:"p"},"1->2->3->4->5"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"n")," = 2."),(0,l.kt)("p",null,"After removing the second node from the end, the linked list becomes ",(0,l.kt)("inlineCode",{parentName:"p"},"1->2->3->5"),"."),(0,l.kt)("p",null,"Note:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Given ",(0,l.kt)("inlineCode",{parentName:"li"},"n")," will always be valid."),(0,l.kt)("li",{parentName:"ul"},"Try to do this in one pass.")),(0,l.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,l.kt)("p",null,"\u8bbe\u4e24\u4e2a\u6307\u9488",(0,l.kt)("inlineCode",{parentName:"p"},"p"),",",(0,l.kt)("inlineCode",{parentName:"p"},"q"),"\uff0c\u8ba9",(0,l.kt)("inlineCode",{parentName:"p"},"q"),"\u5148\u8d70",(0,l.kt)("inlineCode",{parentName:"p"},"n"),"\u6b65\uff0c\u7136\u540e",(0,l.kt)("inlineCode",{parentName:"p"},"p"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"q"),"\u4e00\u8d77\u8d70\uff0c\u76f4\u5230",(0,l.kt)("inlineCode",{parentName:"p"},"q"),"\u8d70\u5230\u5c3e\u8282\u70b9\uff0c\u5220\u9664",(0,l.kt)("inlineCode",{parentName:"p"},"p->next"),"\u5373\u53ef\u3002"),(0,l.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,l.kt)(a.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// Remove Nth Node From End of List\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\n    public ListNode removeNthFromEnd(ListNode head, int n) {\n        ListNode dummy = new ListNode(-1);\n        dummy.next = head;\n        ListNode p = dummy, q = dummy;\n\n        for (int i = 0; i < n; i++)  // q\u5148\u8d70n\u6b65\n            q = q.next;\n\n        while(q.next != null) { // \u4e00\u8d77\u8d70\n            p = p.next;\n            q = q.next;\n        }\n        p.next = p.next.next;\n        return dummy.next;\n    }\n}\n"))),(0,l.kt)(o.Z,{value:"cpp",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"// Remove Nth Node From End of List\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    ListNode *removeNthFromEnd(ListNode *head, int n) {\n        ListNode dummy{-1, head};\n        ListNode *p = &dummy, *q = &dummy;\n\n        for (int i = 0; i < n; i++)  // q\u5148\u8d70n\u6b65\n            q = q->next;\n\n        while(q->next != nullptr) { // \u4e00\u8d77\u8d70\n            p = p->next;\n            q = q->next;\n        }\n        ListNode *tmp = p->next;\n        p->next = p->next->next;\n        delete tmp;\n        return dummy.next;\n    }\n};\n")))),(0,l.kt)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/en/linked-list/intersection-of-two-linked-lists"},"Intersection of Two Linked Lists"))))}c.isMDXComponent=!0}}]);