"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[3813],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,v=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(v,i(i({ref:t},p),{},{components:n})):a.createElement(v,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),r=n(7294),l=n(6010),i=n(2389),o=n(7392),s=n(7094),u=n(2466);const p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t;const{lazy:n,block:i,defaultValue:d,values:m,groupId:v,className:f}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=m??b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),k=(0,o.l)(h,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===d?d:d??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==y&&!h.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:N}=(0,s.U)(),[O,w]=(0,r.useState)(y),x=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=v){const e=g[v];null!=e&&e!==O&&h.some((t=>t.value===e))&&w(e)}const E=e=>{const t=e.currentTarget,n=x.indexOf(t),a=h[n].value;a!==O&&(T(t),w(a),null!=v&&N(v,String(a)))},C=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;n=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;n=x[t]??x[x.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},f)},h.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>x.push(e),onKeyDown:C,onFocus:E,onClick:E},i,{className:(0,l.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":O===t})}),n??t)}))),n?(0,r.cloneElement)(b.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function m(e){const t=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},9573:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),l=n(5488),i=n(5162);const o={title:"Rotate List"},s=void 0,u={unversionedId:"linked-list/rotate-list",id:"linked-list/rotate-list",title:"Rotate List",description:"\u63cf\u8ff0",source:"@site/docs/linked-list/rotate-list.md",sourceDirName:"linked-list",slug:"/linked-list/rotate-list",permalink:"/en/linked-list/rotate-list",draft:!1,tags:[],version:"current",frontMatter:{title:"Rotate List"},sidebar:"docs",previous:{title:"Remove Duplicates from Sorted List II",permalink:"/en/linked-list/remove-duplicates-from-sorted-list-ii"},next:{title:"Swap Nodes in Pairs",permalink:"/en/linked-list/swap-nodes-in-pairs"}},p={},c=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}],d={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.kt)("p",null,"Given a list, rotate the list to the right by ",(0,r.kt)("inlineCode",{parentName:"p"},"k")," places, where ",(0,r.kt)("inlineCode",{parentName:"p"},"k")," is non-negative."),(0,r.kt)("p",null,"For example:\nGiven ",(0,r.kt)("inlineCode",{parentName:"p"},"1->2->3->4->5->nullptr")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"k = 2"),", return ",(0,r.kt)("inlineCode",{parentName:"p"},"4->5->1->2->3->nullptr"),"."),(0,r.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,r.kt)("p",null,"\u5148\u904d\u5386\u4e00\u904d\uff0c\u5f97\u51fa\u94fe\u8868\u957f\u5ea6",(0,r.kt)("inlineCode",{parentName:"p"},"len"),"\uff0c\u6ce8\u610f",(0,r.kt)("inlineCode",{parentName:"p"},"k"),"\u53ef\u80fd\u5927\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"len"),"\uff0c\u56e0\u6b64\u4ee4",(0,r.kt)("inlineCode",{parentName:"p"},"k %= len"),"\u3002\u5c06\u5c3e\u8282\u70b9 next \u6307\u9488\u6307\u5411\u9996\u8282\u70b9\uff0c\u5f62\u6210\u4e00\u4e2a\u73af\uff0c\u63a5\u7740\u5f80\u540e\u8dd1",(0,r.kt)("inlineCode",{parentName:"p"},"len-k"),"\u6b65\uff0c\u4ece\u8fd9\u91cc\u65ad\u5f00\uff0c\u5c31\u662f\u8981\u6c42\u7684\u7ed3\u679c\u4e86\u3002"),(0,r.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,r.kt)(l.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Remove Rotate List\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\n    public ListNode rotateRight(ListNode head, int k) {\n        if (head == null || k == 0) return head;\n\n        int len = 1;\n        ListNode p = head;\n        while (p.next != null) { // \u6c42\u957f\u5ea6\n            len++;\n            p = p.next;\n        }\n        k = len - k % len;\n\n        p.next = head; // \u9996\u5c3e\u76f8\u8fde\n        for(int step = 0; step < k; step++) {\n            p = p.next;  //\u63a5\u7740\u5f80\u540e\u8dd1\n        }\n        head = p.next; // \u65b0\u7684\u9996\u8282\u70b9\n        p.next = null; // \u65ad\u5f00\u73af\n        return head;\n    }\n};\n"))),(0,r.kt)(i.Z,{value:"cpp",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// Remove Rotate List\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    ListNode *rotateRight(ListNode *head, int k) {\n        if (head == nullptr || k == 0) return head;\n\n        int len = 1;\n        ListNode* p = head;\n        while (p->next != nullptr) { // \u6c42\u957f\u5ea6\n            len++;\n            p = p->next;\n        }\n        k = len - k % len;\n\n        p->next = head; // \u9996\u5c3e\u76f8\u8fde\n        for(int step = 0; step < k; step++) {\n            p = p->next;  //\u63a5\u7740\u5f80\u540e\u8dd1\n        }\n        head = p->next; // \u65b0\u7684\u9996\u8282\u70b9\n        p->next = nullptr; // \u65ad\u5f00\u73af\n        return head;\n    }\n};\n")))))}m.isMDXComponent=!0}}]);