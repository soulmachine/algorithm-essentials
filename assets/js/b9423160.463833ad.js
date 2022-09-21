"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[1115],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,b=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return r?n.createElement(b,o(o({ref:t},c),{},{components:r})):n.createElement(b,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294),a=r(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(7462),a=r(7294),l=r(6010),o=r(2389),i=r(7392),u=r(7094),s=r(2466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:r,block:o,defaultValue:d,values:m,groupId:b,className:f}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=m??v.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),h=(0,i.l)(y,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===d?d:d??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==g&&!y.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:T}=(0,u.U)(),[E,O]=(0,a.useState)(g),w=[],{blockElementScrollPositionUntilNextRender:N}=(0,s.o5)();if(null!=b){const e=k[b];null!=e&&e!==E&&y.some((t=>t.value===e))&&O(e)}const j=e=>{const t=e.currentTarget,r=w.indexOf(t),n=y[r].value;n!==E&&(N(t),O(n),null!=b&&T(b,String(n)))},x=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;r=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;r=w[t]??w[w.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},f)},y.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>w.push(e),onKeyDown:x,onFocus:j,onClick:j},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":E===t})}),r??t)}))),r?(0,a.cloneElement)(v.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function m(e){const t=(0,o.Z)();return a.createElement(d,(0,n.Z)({key:String(t)},e))}},490:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905)),l=r(5488),o=r(5162);const i={title:"\u4e8c\u53c9\u6811"},u=void 0,s={unversionedId:"binary-tree/README",id:"binary-tree/README",title:"\u4e8c\u53c9\u6811",description:"\u672c\u7ae0\u4e3b\u8981\u8bb2\u6811\u76f8\u5173\u7684\u7b97\u6cd5\u3002",source:"@site/docs/binary-tree/README.md",sourceDirName:"binary-tree",slug:"/binary-tree/",permalink:"/binary-tree/",draft:!1,tags:[],version:"current",frontMatter:{title:"\u4e8c\u53c9\u6811"},sidebar:"docs",previous:{title:"Palindrome Linked List",permalink:"/linked-list/palindrome-linked-list"},next:{title:"\u4e8c\u53c9\u6811\u7684\u904d\u5386",permalink:"/binary-tree/traversal/"}},c={},p=[],d={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u7ae0\u4e3b\u8981\u8bb2\u6811\u76f8\u5173\u7684\u7b97\u6cd5\u3002"),(0,a.kt)("p",null,"\u672c\u4e66\u4e2d\u4e8c\u53c9\u6811\u7684\u8282\u70b9\u5b9a\u4e49\u5982\u4e0b\uff1a"),(0,a.kt)(l.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class TreeNode {\n    int val;\n    TreeNode left;\n    TreeNode right;\n    TreeNode(int x) { val = x; }\n}\n"))),(0,a.kt)(o.Z,{value:"cpp",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// \u6811\u7684\u8282\u70b9\nstruct TreeNode {\n    int val;\n    TreeNode *left;\n    TreeNode *right;\n    TreeNode(int x) : val(x), left(nullptr), right(nullptr) { }\n};\n")))),(0,a.kt)("p",null,"\u4e8c\u53c9\u6811\u662f\u4e00\u79cd\u7b80\u5355\u4f18\u7f8e\u7684\u9012\u5f52\u7684\u6570\u636e\u7ed3\u6784\uff0c\u5b83\u662f\u6700\u5bb9\u6613\u57f9\u517b\u62bd\u8c61\u601d\u7ef4\u7684\u3002\u56f4\u7ed5\u4e8c\u53c9\u6811\uff0c\u53ef\u4ee5\u7ec3\u4e60\u9012\u5f52\uff0c\u5e7f\u641c\uff0c\u6df1\u641c\uff0c\u52a8\u89c4\uff0c\u56de\u6eaf\u6cd5\u7b49\u5404\u79cd\u7b97\u6cd5\u3002\u800c\u4e14\u5927\u90e8\u5206\u7b97\u6cd5\u6280\u5de7\uff0c\u672c\u8d28\u4e0a\u90fd\u662f\u6811\u7684\u904d\u5386\u95ee\u9898\u3002"))}m.isMDXComponent=!0}}]);