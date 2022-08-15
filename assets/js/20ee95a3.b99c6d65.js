"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[7282],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(n),m=l,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294),l=n(6010);const a="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,l.Z)(a,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(7462),l=n(7294),a=n(6010),i=n(2389),o=n(7392),u=n(7094),s=n(2466);const c="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,n;const{lazy:i,block:p,defaultValue:m,values:f,groupId:v,className:h}=e,b=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=f?f:b.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),g=(0,o.l)(y,((e,t)=>e.value===t.value));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===m?m:null!=(t=null!=m?m:null==(n=b.find((e=>e.props.default)))?void 0:n.props.value)?t:b[0].props.value;if(null!==k&&!y.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:x,setTabGroupChoices:N}=(0,u.U)(),[_,O]=(0,l.useState)(k),w=[],{blockElementScrollPositionUntilNextRender:L}=(0,s.o5)();if(null!=v){const e=x[v];null!=e&&e!==_&&y.some((t=>t.value===e))&&O(e)}const T=e=>{const t=e.currentTarget,n=w.indexOf(t),r=y[n].value;r!==_&&(L(t),O(r),null!=v&&N(v,String(r)))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var r;const t=w.indexOf(e.currentTarget)+1;n=null!=(r=w[t])?r:w[0];break}case"ArrowLeft":{var l;const t=w.indexOf(e.currentTarget)-1;n=null!=(l=w[t])?l:w[w.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,a.Z)("tabs-container",c)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":p},h)},y.map((e=>{let{value:t,label:n,attributes:i}=e;return l.createElement("li",(0,r.Z)({role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,key:t,ref:e=>w.push(e),onKeyDown:E,onFocus:T,onClick:T},i,{className:(0,a.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":_===t})}),null!=n?n:t)}))),i?(0,l.cloneElement)(b.filter((e=>e.props.value===_))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==_})))))}function m(e){const t=(0,i.Z)();return l.createElement(p,(0,r.Z)({key:String(t)},e))}},8136:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=n(7462),l=(n(7294),n(3905)),a=n(5488),i=n(5162);const o={title:"Partition List"},u=void 0,s={unversionedId:"linear-list/linked-list/partition-list",id:"linear-list/linked-list/partition-list",title:"Partition List",description:"\u63cf\u8ff0",source:"@site/docs/linear-list/linked-list/partition-list.md",sourceDirName:"linear-list/linked-list",slug:"/linear-list/linked-list/partition-list",permalink:"/linear-list/linked-list/partition-list",draft:!1,editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/linear-list/linked-list/partition-list.md",tags:[],version:"current",frontMatter:{title:"Partition List"},sidebar:"someSidebar",previous:{title:"Reverse Linked List II",permalink:"/linear-list/linked-list/reverse-linked-list-ii"},next:{title:"Remove Duplicates from Sorted List",permalink:"/linear-list/linked-list/remove-duplicates-from-sorted-list"}},c={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,l.kt)("p",null,"Given a linked list and a value ",(0,l.kt)("inlineCode",{parentName:"p"},"x"),", partition it such that all nodes less than ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," come before nodes greater than or equal to ",(0,l.kt)("inlineCode",{parentName:"p"},"x"),"."),(0,l.kt)("p",null,"You should preserve the original relative order of the nodes in each of the two partitions."),(0,l.kt)("p",null,"For example,\nGiven ",(0,l.kt)("inlineCode",{parentName:"p"},"1->4->3->2->5->2")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"x = 3"),", return ",(0,l.kt)("inlineCode",{parentName:"p"},"1->2->2->4->3->5"),"."),(0,l.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,l.kt)("p",null,"\u65e0"),(0,l.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,l.kt)(a.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// Partition List\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\n    public ListNode partition(ListNode head, int x) {\n        ListNode left_dummy = new ListNode(-1); // \u5934\u7ed3\u70b9\n        ListNode right_dummy = new ListNode(-1); // \u5934\u7ed3\u70b9\n\n        ListNode left_cur = left_dummy;\n        ListNode right_cur = right_dummy;\n\n        for (ListNode cur = head; cur != null; cur = cur.next) {\n            if (cur.val < x) {\n                left_cur.next = cur;\n                left_cur = cur;\n            } else {\n                right_cur.next = cur;\n                right_cur = cur;\n            }\n        }\n\n        left_cur.next = right_dummy.next;\n        right_cur.next = null;\n\n        return left_dummy.next;\n    }\n};\n"))),(0,l.kt)(i.Z,{value:"cpp",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"// Partition List\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    ListNode* partition(ListNode* head, int x) {\n        ListNode left_dummy(-1); // \u5934\u7ed3\u70b9\n        ListNode right_dummy(-1); // \u5934\u7ed3\u70b9\n\n        auto left_cur = &left_dummy;\n        auto right_cur = &right_dummy;\n\n        for (ListNode *cur = head; cur != nullptr; cur = cur->next) {\n            if (cur->val < x) {\n                left_cur->next = cur;\n                left_cur = cur;\n            } else {\n                right_cur->next = cur;\n                right_cur = cur;\n            }\n        }\n\n        left_cur->next = right_dummy.next;\n        right_cur->next = nullptr;\n\n        return left_dummy.next;\n    }\n};\n")))))}m.isMDXComponent=!0}}]);