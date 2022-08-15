"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[3579],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=l.createContext({}),u=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return l.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?l.createElement(f,i(i({ref:t},c),{},{components:n})):l.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<a;u++)i[u]=n[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var l=n(7294),r=n(6010);const a="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return l.createElement("div",{role:"tabpanel",className:(0,r.Z)(a,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var l=n(7462),r=n(7294),a=n(6010),i=n(2389),o=n(7392),s=n(7094),u=n(2466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n;const{lazy:i,block:d,defaultValue:m,values:f,groupId:k,className:v}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=f?f:b.map((e=>{let{props:{value:t,label:n,attributes:l}}=e;return{value:t,label:n,attributes:l}})),y=(0,o.l)(h,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const g=null===m?m:null!=(t=null!=m?m:null==(n=b.find((e=>e.props.default)))?void 0:n.props.value)?t:b[0].props.value;if(null!==g&&!h.some((e=>e.value===g)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:N}=(0,s.U)(),[O,T]=(0,r.useState)(g),E=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=k){const e=w[k];null!=e&&e!==O&&h.some((t=>t.value===e))&&T(e)}const j=e=>{const t=e.currentTarget,n=E.indexOf(t),l=h[n].value;l!==O&&(x(t),T(l),null!=k&&N(k,String(l)))},L=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var l;const t=E.indexOf(e.currentTarget)+1;n=null!=(l=E[t])?l:E[0];break}case"ArrowLeft":{var r;const t=E.indexOf(e.currentTarget)-1;n=null!=(r=E[t])?r:E[E.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":d},v)},h.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,l.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>E.push(e),onKeyDown:L,onFocus:j,onClick:j},i,{className:(0,a.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(b.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function m(e){const t=(0,i.Z)();return r.createElement(d,(0,l.Z)({key:String(t)},e))}},8867:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var l=n(7462),r=(n(7294),n(3905)),a=n(5488),i=n(5162);const o={title:"Intersection of Two Linked Lists"},s=void 0,u={unversionedId:"linear-list/linked-list/intersection-of-two-linked-lists",id:"linear-list/linked-list/intersection-of-two-linked-lists",title:"Intersection of Two Linked Lists",description:"\u63cf\u8ff0",source:"@site/docs/linear-list/linked-list/intersection-of-two-linked-lists.md",sourceDirName:"linear-list/linked-list",slug:"/linear-list/linked-list/intersection-of-two-linked-lists",permalink:"/linear-list/linked-list/intersection-of-two-linked-lists",draft:!1,editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/linear-list/linked-list/intersection-of-two-linked-lists.md",tags:[],version:"current",frontMatter:{title:"Intersection of Two Linked Lists"},sidebar:"someSidebar",previous:{title:"Palindrome Linked List",permalink:"/linear-list/linked-list/palindrome-linked-list"},next:{title:"Valid Palindrome",permalink:"/string/valid-palindrome"}},c={},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,l.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.kt)("p",null,"Write a program to find the node at which the intersection of two singly linked lists begins."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 1"),":"),(0,r.kt)("img",{src:"/img/intersection-of-two-linked-lists_example_1.png",width:"60%"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Input"),": listA = ","[4,1,8,4,5]",", listB = ","[5,6,1,8,4,5]",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Output"),": The node with value = 8")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Notes"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If the two linked lists have no intersection at all, return null."),(0,r.kt)("li",{parentName:"ul"},"The linked lists must retain their original structure after the function returns."),(0,r.kt)("li",{parentName:"ul"},"You may assume there are no cycles anywhere in the entire linked structure."),(0,r.kt)("li",{parentName:"ul"},"Your code should preferably run in O(n) time and use only O(1) memory.")),(0,r.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,r.kt)("p",null,"\u6700\u81ea\u7136\u7684\u60f3\u6cd5\uff0c\u662f\u5148\u904d\u5386\u5b8c\u4e24\u4e2a\u5355\u94fe\u8868\uff0c\u5f97\u5230\u4ed6\u4eec\u7684\u957f\u5ea6",(0,r.kt)("inlineCode",{parentName:"p"},"lenA"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"lenB"),"\uff0c\u8fdb\u800c\u77e5\u9053\u4ed6\u4eec\u7684\u957f\u5ea6\u4e4b\u5dee\u3002\u7136\u540e\u518d\u6b21\u904d\u5386\u4e24\u4e2a\u5355\u94fe\u8868\uff0c\u4e0d\u8fc7\u8fd9\u6b21\uff0c\u957f\u7684\u5355\u94fe\u8868\u5148\u8d70",(0,r.kt)("inlineCode",{parentName:"p"},"|lenA-lenB|"),"\u6b65\uff0c\u7136\u540e\u4e24\u4e2a\u6307\u9488\u4e00\u8d77\u8d70\uff0c\u5f53\u4e24\u4e2a\u6307\u9488\u6307\u5411\u76f8\u540c\u7684\u8282\u70b9\uff0c\u8fd9\u4e2a\u8282\u70b9\u5c31\u662f\u76f8\u4ea4\u70b9\u3002\u8fd9\u4e2a\u7b97\u6cd5\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u662f O(m+n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6 O(1)\uff0c\u662f\u7b26\u5408\u9898\u76ee\u8981\u6c42\u7684\u3002"),(0,r.kt)("p",null,"\u4e0a\u8ff0\u601d\u8def\u904d\u5386\u4e86\u4e24\u8fb9\uff0c\u53ef\u4ee5\u4f18\u5316\u4e3a\u53ea\u904d\u5386\u4e00\u904d\u3002\u904d\u5386\u4e24\u4e2a\u5355\u94fe\u8868\uff0c\u8f83\u77ed\u7684\u90a3\u6761\u4f1a\u6700\u5148\u5230\u8fbe\u5c3e\u90e8\uff0c\u7136\u540e\u628a\u8fd9\u4e2a\u6307\u9488\u6307\u5411\u8f83\u957f\u7684\u5355\u94fe\u8868\u7684\u5934\u90e8\uff08\u8fd9\u7b49\u4ef7\u4e8e\u8ba9\u957f\u94fe\u8868\u7684\u6307\u9488\u5148\u8d70",(0,r.kt)("inlineCode",{parentName:"p"},"|lenA-lenB|"),"\u6b65\uff09\uff0c\u4e24\u4e2a\u6307\u9488\u7ee7\u7eed\u5f80\u524d\u8d70\uff0c\u5f53\u4e24\u4e2a\u6307\u9488\u6307\u5411\u76f8\u540c\u7684\u8282\u70b9\u65f6\uff0c\u8fd9\u4e2a\u6307\u9488\u5c31\u662f\u76f8\u4ea4\u70b9\u3002"),(0,r.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,r.kt)(a.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Intersection of Two Linked Lists\n// Two Pointers\n// Time Complexity: O(m+n), Space Complexity: O(1)\npublic class Solution {\n    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {\n        if(headA == null || headB == null) return null;\n\n        ListNode a = headA;\n        ListNode b = headB;\n        while( a != b) {\n            a = a == null? headB : a.next;\n            b = b == null? headA : b.next;\n        }\n\n        return a;\n    }\n}\n"))),(0,r.kt)(i.Z,{value:"cpp",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// TODO\n")))),(0,r.kt)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/linear-list/linked-list/linked-list-cycle-ii"},"Linked List Cycle II"))))}m.isMDXComponent=!0}}]);