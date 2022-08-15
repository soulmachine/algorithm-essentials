"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[2613],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=l,k=m["".concat(o,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),l=n(6010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),l=n(7294),r=n(6010),i=n(2389),s=n(7392),o=n(7094),p=n(2466);const c="tabList__CuJ",u="tabItem_LNqP";function m(e){var t,n;const{lazy:i,block:m,defaultValue:d,values:k,groupId:f,className:h}=e,v=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=k?k:v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,s.l)(N,((e,t)=>e.value===t.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===d?d:null!=(t=null!=d?d:null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)?t:v[0].props.value;if(null!==y&&!N.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+N.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:g}=(0,o.U)(),[x,C]=(0,l.useState)(y),L=[],{blockElementScrollPositionUntilNextRender:O}=(0,p.o5)();if(null!=f){const e=w[f];null!=e&&e!==x&&N.some((t=>t.value===e))&&C(e)}const T=e=>{const t=e.currentTarget,n=L.indexOf(t),a=N[n].value;a!==x&&(O(t),C(a),null!=f&&g(f,String(a)))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=L.indexOf(e.currentTarget)+1;n=null!=(a=L[t])?a:L[0];break}case"ArrowLeft":{var l;const t=L.indexOf(e.currentTarget)-1;n=null!=(l=L[t])?l:L[L.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",c)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":m},h)},N.map((e=>{let{value:t,label:n,attributes:i}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>L.push(e),onKeyDown:E,onFocus:T,onClick:T},i,{className:(0,r.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),i?(0,l.cloneElement)(v.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function d(e){const t=(0,i.Z)();return l.createElement(m,(0,a.Z)({key:String(t)},e))}},9795:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var a=n(7462),l=(n(7294),n(3905)),r=n(5488),i=n(5162);const s={title:"Linked List Cycle II"},o=void 0,p={unversionedId:"linear-list/linked-list/linked-list-cycle-ii",id:"linear-list/linked-list/linked-list-cycle-ii",title:"Linked List Cycle II",description:"\u63cf\u8ff0",source:"@site/docs/linear-list/linked-list/linked-list-cycle-ii.md",sourceDirName:"linear-list/linked-list",slug:"/linear-list/linked-list/linked-list-cycle-ii",permalink:"/linear-list/linked-list/linked-list-cycle-ii",draft:!1,editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/linear-list/linked-list/linked-list-cycle-ii.md",tags:[],version:"current",frontMatter:{title:"Linked List Cycle II"},sidebar:"someSidebar",previous:{title:"Linked List Cycle",permalink:"/linear-list/linked-list/linked-list-cycle"},next:{title:"Reorder List",permalink:"/linear-list/linked-list/reorder-list"}},c={},u=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],m={toc:u};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,l.kt)("p",null,"Given a linked list, return the node where the cycle begins. If there is no cycle, return ",(0,l.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,l.kt)("p",null,"Follow up:\nCan you solve it without using extra space?"),(0,l.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,l.kt)("p",null,"\u5f53 fast \u4e0e slow \u76f8\u9047\u65f6\uff0cslow \u80af\u5b9a\u6ca1\u6709\u904d\u5386\u5b8c\u94fe\u8868\uff0c\u800c fast \u5df2\u7ecf\u5728\u73af\u5185\u5faa\u73af\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"n"),"\u5708(",(0,l.kt)("span",{parentName:"p",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mn",{parentName:"mrow"},"1"),(0,l.kt)("mo",{parentName:"mrow"},"\u2264"),(0,l.kt)("mi",{parentName:"mrow"},"n")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1 \\leq n")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7804em",verticalAlign:"-0.136em"}}),(0,l.kt)("span",{parentName:"span",className:"mord"},"1"),(0,l.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.kt)("span",{parentName:"span",className:"mrel"},"\u2264"),(0,l.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"))))),")\u3002\u5047\u8bbe slow \u8d70\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"s"),"\u6b65\uff0c\u5219 fast \u8d70\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"2s"),"\u6b65\uff08fast \u6b65\u6570\u8fd8\u7b49\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"s"),"\u52a0\u4e0a\u5728\u73af\u4e0a\u591a\u8f6c\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"n"),"\u5708\uff09\uff0c\u8bbe\u73af\u957f\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"r"),"\uff0c\u5219\uff1a"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"2s = s + nr")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"s = nr")),(0,l.kt)("p",null,"\u8bbe\u6574\u4e2a\u94fe\u8868\u957f",(0,l.kt)("inlineCode",{parentName:"p"},"L"),"\uff0c\u73af\u5165\u53e3\u70b9\u4e0e\u76f8\u9047\u70b9\u8ddd\u79bb\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"a"),"\uff0c\u8d77\u70b9\u5230\u73af\u5165\u53e3\u70b9\u7684\u8ddd\u79bb\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"x"),"\uff0c\u5219"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"x + a = nr = (n \u2013 1)r +r = (n-1)r + L - x")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"x = (n-1)r + (L \u2013 x \u2013 a)")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"L \u2013 x \u2013 a"),"\u4e3a\u76f8\u9047\u70b9\u5230\u73af\u5165\u53e3\u70b9\u7684\u8ddd\u79bb\uff0c\u7531\u6b64\u53ef\u77e5\uff0c\u4ece\u94fe\u8868\u5934\u5230\u73af\u5165\u53e3\u70b9\u7b49\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"n-1"),"\u5708\u5185\u73af+\u76f8\u9047\u70b9\u5230\u73af\u5165\u53e3\u70b9\uff0c\u4e8e\u662f\u6211\u4eec\u53ef\u4ee5\u4ece",(0,l.kt)("inlineCode",{parentName:"p"},"head"),"\u5f00\u59cb\u53e6\u8bbe\u4e00\u4e2a\u6307\u9488",(0,l.kt)("inlineCode",{parentName:"p"},"slow2"),"\uff0c\u4e24\u4e2a\u6162\u6307\u9488\u6bcf\u6b21\u524d\u8fdb\u4e00\u6b65\uff0c\u5b83\u4fe9\u4e00\u5b9a\u4f1a\u5728\u73af\u5165\u53e3\u70b9\u76f8\u9047\u3002"),(0,l.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,l.kt)(r.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// Linked List Cycle II\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\n    public ListNode detectCycle(ListNode head) {\n        ListNode slow = head, fast = head;\n        while (fast != null && fast.next != null) {\n            slow = slow.next;\n            fast = fast.next.next;\n            if (slow == fast) {\n                ListNode slow2 = head;\n\n                while (slow2 != slow) {\n                    slow2 = slow2.next;\n                    slow = slow.next;\n                }\n                return slow2;\n            }\n        }\n        return null;\n    }\n}\n"))),(0,l.kt)(i.Z,{value:"cpp",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"// Linked List Cycle II\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    ListNode *detectCycle(ListNode *head) {\n        ListNode *slow = head, *fast = head;\n        while (fast && fast->next) {\n            slow = slow->next;\n            fast = fast->next->next;\n            if (slow == fast) {\n                ListNode *slow2 = head;\n\n                while (slow2 != slow) {\n                    slow2 = slow2->next;\n                    slow = slow->next;\n                }\n                return slow2;\n            }\n        }\n        return nullptr;\n    }\n};\n")))),(0,l.kt)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/linear-list/linked-list/linked-list-cycle"},"Linked List Cycle")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/linear-list/linked-list/intersection-of-two-linked-lists"},"Intersection of Two Linked Lists"))))}d.isMDXComponent=!0}}]);