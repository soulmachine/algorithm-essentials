"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[1063],{3905:(e,a,n)=>{n.d(a,{Zo:()=>m,kt:()=>d});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function u(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=t.createContext({}),s=function(e){var a=t.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):u(u({},a),e)),n},m=function(e){var a=s(e.components);return t.createElement(i.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},p=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,b=p["".concat(i,".").concat(d)]||p[d]||c[d]||l;return n?t.createElement(b,u(u({ref:a},m),{},{components:n})):t.createElement(b,u({ref:a},m))}));function d(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,u=new Array(l);u[0]=p;var o={};for(var i in a)hasOwnProperty.call(a,i)&&(o[i]=a[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,u[1]=o;for(var s=2;s<l;s++)u[s]=n[s];return t.createElement.apply(null,u)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,a,n)=>{n.d(a,{Z:()=>u});var t=n(7294),r=n(6010);const l="tabItem_Ymn6";function u(e){let{children:a,hidden:n,className:u}=e;return t.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,u),hidden:n},a)}},5488:(e,a,n)=>{n.d(a,{Z:()=>d});var t=n(7462),r=n(7294),l=n(6010),u=n(2389),o=n(7392),i=n(7094),s=n(2466);const m="tabList__CuJ",c="tabItem_LNqP";function p(e){var a;const{lazy:n,block:u,defaultValue:p,values:d,groupId:b,className:v}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=d??f.map((e=>{let{props:{value:a,label:n,attributes:t}}=e;return{value:a,label:n,attributes:t}})),h=(0,o.l)(y,((e,a)=>e.value===a.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===p?p:p??(null==(a=f.find((e=>e.props.default)))?void 0:a.props.value)??f[0].props.value;if(null!==g&&!y.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:x,setTabGroupChoices:k}=(0,i.U)(),[O,w]=(0,r.useState)(g),T=[],{blockElementScrollPositionUntilNextRender:N}=(0,s.o5)();if(null!=b){const e=x[b];null!=e&&e!==O&&y.some((a=>a.value===e))&&w(e)}const E=e=>{const a=e.currentTarget,n=T.indexOf(a),t=y[n].value;t!==O&&(N(a),w(t),null!=b&&k(b,String(t)))},L=e=>{var a;let n=null;switch(e.key){case"ArrowRight":{const a=T.indexOf(e.currentTarget)+1;n=T[a]??T[0];break}case"ArrowLeft":{const a=T.indexOf(e.currentTarget)-1;n=T[a]??T[T.length-1];break}}null==(a=n)||a.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":u},v)},y.map((e=>{let{value:a,label:n,attributes:u}=e;return r.createElement("li",(0,t.Z)({role:"tab",tabIndex:O===a?0:-1,"aria-selected":O===a,key:a,ref:e=>T.push(e),onKeyDown:L,onFocus:E,onClick:E},u,{className:(0,l.Z)("tabs__item",c,null==u?void 0:u.className,{"tabs__item--active":O===a})}),n??a)}))),n?(0,r.cloneElement)(f.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==O})))))}function d(e){const a=(0,u.Z)();return r.createElement(p,(0,t.Z)({key:String(a)},e))}},2173:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>m,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var t=n(7462),r=(n(7294),n(3905)),l=n(5488),u=n(5162);const o={title:"Maximum Product Subarray"},i=void 0,s={unversionedId:"dp/maximum-product-subarray",id:"dp/maximum-product-subarray",title:"Maximum Product Subarray",description:"\u63cf\u8ff0",source:"@site/docs/dp/maximum-product-subarray.md",sourceDirName:"dp",slug:"/dp/maximum-product-subarray",permalink:"/en/dp/maximum-product-subarray",draft:!1,tags:[],version:"current",frontMatter:{title:"Maximum Product Subarray"},sidebar:"docs",previous:{title:"Maximum Subarray",permalink:"/en/dp/maximum-subarray"},next:{title:"Longest Increasing Subsequence",permalink:"/en/dp/longest-increasing-subsequence"}},m={},c=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u52a8\u89c4",id:"\u52a8\u89c4",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],p={toc:c};function d(e){let{components:a,...n}=e;return(0,r.kt)("wrapper",(0,t.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.kt)("p",null,"Find the contiguous subarray within an array (containing at least one number) which has the largest product."),(0,r.kt)("p",null,"For example, given the array ",(0,r.kt)("inlineCode",{parentName:"p"},"[2,3,-2,4]"),",\nthe contiguous subarray ",(0,r.kt)("inlineCode",{parentName:"p"},"[2,3]")," has the largest product = ",(0,r.kt)("inlineCode",{parentName:"p"},"6"),"."),(0,r.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,r.kt)("p",null,"\u8fd9\u9898\u8ddf\u201c\u6700\u5927\u8fde\u7eed\u5b50\u5e8f\u5217\u548c\u201d\u975e\u5e38\u7c7b\u4f3c\uff0c\u53ea\u4e0d\u8fc7\u53d8\u6210\u4e86\u201c\u6700\u5927\u8fde\u7eed\u5b50\u5e8f\u5217\u79ef\u201d\uff0c\u6240\u4ee5\u89e3\u51b3\u601d\u8def\u4e5f\u5f88\u7c7b\u4f3c\u3002"),(0,r.kt)("p",null,"\u4ec5\u4ec5\u6709\u4e00\u4e2a\u5c0f\u7ec6\u8282\u9700\u8981\u6ce8\u610f\uff0c\u5c31\u662f\u8d1f\u8d1f\u5f97\u6b63\uff0c\u4e24\u4e2a\u8d1f\u6570\u7684\u4e58\u79ef\u662f\u6b63\u6570\uff0c\u56e0\u6b64\u6211\u4eec\u4e0d\u4ec5\u8981\u8ddf\u8e2a\u6700\u5927\u503c\uff0c\u8fd8\u8981\u8ddf\u8e2a\u6700\u5c0f\u503c\u3002"),(0,r.kt)("h3",{id:"\u52a8\u89c4"},"\u52a8\u89c4"),(0,r.kt)(l.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// maximum-product-subarray\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public int maxProduct(int[] nums) {\n        int maxLocal = nums[0];\n        int minLocal = nums[0];\n        int global = nums[0];\n\n        for(int i = 1; i < nums.length; i++){\n            int temp = maxLocal;\n            maxLocal = Math.max(Math.max(nums[i] * maxLocal, nums[i]), nums[i] * minLocal);\n            minLocal = Math.min(Math.min(nums[i] * temp, nums[i]), nums[i] * minLocal);\n            global = Math.max(global, maxLocal);\n        }\n        return global;\n    }\n}\n"))),(0,r.kt)(u.Z,{value:"cpp",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// maximum-product-subarray\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    int maxProduct(vector<int>& nums) {\n        int maxLocal = nums[0];\n        int minLocal = nums[0];\n        int global = nums[0];\n\n        for(int i = 1; i < nums.size(); i++){\n            int temp = maxLocal;\n            maxLocal = max(max(nums[i] * maxLocal, nums[i]), nums[i] * minLocal);\n            minLocal = min(min(nums[i] * temp, nums[i]), nums[i] * minLocal);\n            global = max(global, maxLocal);\n        }\n        return global;\n    }\n};\n")))),(0,r.kt)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/en/dp/maximum-subarray"},"Maximum Subarray")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/en/binary-tree/recursion/binary-tree-maximum-path-sum"},"Binary Tree Maximum Path Sum"))))}d.isMDXComponent=!0}}]);