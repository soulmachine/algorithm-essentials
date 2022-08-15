"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[8364],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(t),m=a,b=c["".concat(s,".").concat(m)]||c[m]||p[m]||l;return t?r.createElement(b,i(i({ref:n},d),{},{components:t})):r.createElement(b,i({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(7294),a=t(6010);const l="tabItem_Ymn6";function i(e){let{children:n,hidden:t,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,i),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>m});var r=t(7462),a=t(7294),l=t(6010),i=t(2389),o=t(7392),s=t(7094),u=t(2466);const d="tabList__CuJ",p="tabItem_LNqP";function c(e){var n,t;const{lazy:i,block:c,defaultValue:m,values:b,groupId:v,className:f}=e,y=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=b?b:y.map((e=>{let{props:{value:n,label:t,attributes:r}}=e;return{value:n,label:t,attributes:r}})),h=(0,o.l)(k,((e,n)=>e.value===n.value));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const N=null===m?m:null!=(n=null!=m?m:null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)?n:y[0].props.value;if(null!==N&&!k.some((e=>e.value===N)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+k.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:g}=(0,s.U)(),[O,T]=(0,a.useState)(N),x=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=v){const e=w[v];null!=e&&e!==O&&k.some((n=>n.value===e))&&T(e)}const L=e=>{const n=e.currentTarget,t=x.indexOf(n),r=k[t].value;r!==O&&(E(n),T(r),null!=v&&g(v,String(r)))},j=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{var r;const n=x.indexOf(e.currentTarget)+1;t=null!=(r=x[n])?r:x[0];break}case"ArrowLeft":{var a;const n=x.indexOf(e.currentTarget)-1;t=null!=(a=x[n])?a:x[x.length-1];break}}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",d)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},f)},k.map((e=>{let{value:n,label:t,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===n?0:-1,"aria-selected":O===n,key:n,ref:e=>x.push(e),onKeyDown:j,onFocus:L,onClick:L},i,{className:(0,l.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":O===n})}),null!=t?t:n)}))),i?(0,a.cloneElement)(y.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==O})))))}function m(e){const n=(0,i.Z)();return a.createElement(c,(0,r.Z)({key:String(n)},e))}},4661:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var r=t(7462),a=(t(7294),t(3905)),l=t(5488),i=t(5162);const o={title:"Add Two Numbers"},s=void 0,u={unversionedId:"linear-list/linked-list/add-two-numbers",id:"linear-list/linked-list/add-two-numbers",title:"Add Two Numbers",description:"\u63cf\u8ff0",source:"@site/docs/linear-list/linked-list/add-two-numbers.md",sourceDirName:"linear-list/linked-list",slug:"/linear-list/linked-list/add-two-numbers",permalink:"/linear-list/linked-list/add-two-numbers",draft:!1,editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/linear-list/linked-list/add-two-numbers.md",tags:[],version:"current",frontMatter:{title:"Add Two Numbers"},sidebar:"someSidebar",previous:{title:"Odd Even Linked List",permalink:"/linear-list/linked-list/odd-even-linked-list"},next:{title:"Add Two Numbers II",permalink:"/linear-list/linked-list/add-two-numbers-ii"}},d={},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],c={toc:p};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.kt)("p",null,"You are given two linked lists representing two non-negative numbers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list."),(0,a.kt)("p",null,"Input: ",(0,a.kt)("inlineCode",{parentName:"p"},"(2 -> 4 -> 3)")," + ",(0,a.kt)("inlineCode",{parentName:"p"},"(5 -> 6 -> 4)")),(0,a.kt)("p",null,"Output: ",(0,a.kt)("inlineCode",{parentName:"p"},"7 -> 0 -> 8")),(0,a.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,a.kt)("p",null,"\u8ddf ",(0,a.kt)("a",{parentName:"p",href:"/simulation/add-binary"},"Add Binary")," \u5f88\u7c7b\u4f3c"),(0,a.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,a.kt)(l.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// Add Two Numbers\n// \u8ddfAdd Binary \u5f88\u7c7b\u4f3c\n// \u65f6\u95f4\u590d\u6742\u5ea6O(m+n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {\n        ListNode dummy = new ListNode(-1); // \u5934\u8282\u70b9\n        int carry = 0;\n        ListNode prev = dummy;\n        for (ListNode pa = l1, pb = l2;\n             pa != null || pb != null;\n             pa = pa == null ? null : pa.next,\n             pb = pb == null ? null : pb.next,\n             prev = prev.next) {\n            final int ai = pa == null ? 0 : pa.val;\n            final int bi = pb == null ? 0 : pb.val;\n            final int value = (ai + bi + carry) % 10;\n            carry = (ai + bi + carry) / 10;\n            prev.next = new ListNode(value); // \u5c3e\u63d2\u6cd5\n        }\n        if (carry > 0)\n            prev.next = new ListNode(carry);\n        return dummy.next;\n    }\n};\n"))),(0,a.kt)(i.Z,{value:"cpp",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// Add Two Numbers\n// \u8ddfAdd Binary \u5f88\u7c7b\u4f3c\n// \u65f6\u95f4\u590d\u6742\u5ea6O(m+n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    ListNode *addTwoNumbers(ListNode *l1, ListNode *l2) {\n        ListNode dummy(-1); // \u5934\u8282\u70b9\n        int carry = 0;\n        ListNode *prev = &dummy;\n        for (ListNode *pa = l1, *pb = l2;\n             pa != nullptr || pb != nullptr;\n             pa = pa == nullptr ? nullptr : pa->next,\n             pb = pb == nullptr ? nullptr : pb->next,\n             prev = prev->next) {\n            const int ai = pa == nullptr ? 0 : pa->val;\n            const int bi = pb == nullptr ? 0 : pb->val;\n            const int value = (ai + bi + carry) % 10;\n            carry = (ai + bi + carry) / 10;\n            prev->next = new ListNode(value); // \u5c3e\u63d2\u6cd5\n        }\n        if (carry > 0)\n            prev->next = new ListNode(carry);\n        return dummy.next;\n    }\n};\n")))),(0,a.kt)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/linear-list/linked-list/add-two-numbers-ii"},"Add Two Numbers II")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/simulation/add-binary"},"Add Binary")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/simulation/add-strings"},"Add Strings"))))}m.isMDXComponent=!0}}]);