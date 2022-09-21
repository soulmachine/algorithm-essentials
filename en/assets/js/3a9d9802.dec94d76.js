"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[9983],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>p});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(r),p=a,f=m["".concat(s,".").concat(p)]||m[p]||d[p]||i;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(7294),a=r(6010);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,l),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(7462),a=r(7294),i=r(6010),l=r(2389),o=r(7392),s=r(7094),u=r(2466);const c="tabList__CuJ",d="tabItem_LNqP";function m(e){var t;const{lazy:r,block:l,defaultValue:m,values:p,groupId:f,className:h}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=p??v.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),b=(0,o.l)(y,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===m?m:m??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==k&&!y.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:N}=(0,s.U)(),[O,w]=(0,a.useState)(k),S=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=f){const e=g[f];null!=e&&e!==O&&y.some((t=>t.value===e))&&w(e)}const x=e=>{const t=e.currentTarget,r=S.indexOf(t),n=y[r].value;n!==O&&(T(t),w(n),null!=f&&N(f,String(n)))},C=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{const t=S.indexOf(e.currentTarget)+1;r=S[t]??S[0];break}case"ArrowLeft":{const t=S.indexOf(e.currentTarget)-1;r=S[t]??S[S.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":l},h)},y.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>S.push(e),onKeyDown:C,onFocus:x,onClick:x},l,{className:(0,i.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":O===t})}),r??t)}))),r?(0,a.cloneElement)(v.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function p(e){const t=(0,l.Z)();return a.createElement(m,(0,n.Z)({key:String(t)},e))}},9214:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var n=r(7462),a=(r(7294),r(3905)),i=r(5488),l=r(5162);const o={title:"Search in Rotated Sorted Array II"},s=void 0,u={unversionedId:"search/search-in-rotated-sorted-array-ii",id:"search/search-in-rotated-sorted-array-ii",title:"Search in Rotated Sorted Array II",description:"\u63cf\u8ff0",source:"@site/docs/search/search-in-rotated-sorted-array-ii.md",sourceDirName:"search",slug:"/search/search-in-rotated-sorted-array-ii",permalink:"/en/search/search-in-rotated-sorted-array-ii",draft:!1,tags:[],version:"current",frontMatter:{title:"Search in Rotated Sorted Array II"},sidebar:"docs",previous:{title:"Search in Rotated Sorted Array",permalink:"/en/search/search-in-rotated-sorted-array"},next:{title:"Search a 2D Matrix",permalink:"/en/search/search-a-2d-matrix"}},c={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],m={toc:d};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.kt)("p",null,'Follow up for "Search in Rotated Sorted Array": What if ',(0,a.kt)("strong",{parentName:"p"},"duplicates")," are allowed?"),(0,a.kt)("p",null,"Would this affect the run-time complexity? How and why?"),(0,a.kt)("p",null,"Write a function to determine if a given target is in the array."),(0,a.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,a.kt)("p",null,"\u5141\u8bb8\u91cd\u590d\u5143\u7d20\uff0c\u5219\u4e0a\u4e00\u9898\u4e2d\u5982\u679c",(0,a.kt)("inlineCode",{parentName:"p"},"A[left] <= A[mid]"),",\u90a3\u4e48",(0,a.kt)("inlineCode",{parentName:"p"},"[left,mid]"),"\u4e3a\u9012\u589e\u5e8f\u5217\u7684\u5047\u8bbe\u5c31\u4e0d\u80fd\u6210\u7acb\u4e86\uff0c\u6bd4\u5982",(0,a.kt)("inlineCode",{parentName:"p"},"[1,3,1,1,1]"),"\u3002"),(0,a.kt)("p",null,"\u65e2\u7136",(0,a.kt)("inlineCode",{parentName:"p"},"A[left] <= A[mid]"),"\u4e0d\u80fd\u786e\u5b9a\u9012\u589e\uff0c\u90a3\u5c31\u628a\u5b83\u62c6\u5206\u6210\u4e24\u4e2a\u6761\u4ef6\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u82e5",(0,a.kt)("inlineCode",{parentName:"li"},"A[left] < A[mid]"),"\uff0c\u5219\u533a\u95f4",(0,a.kt)("inlineCode",{parentName:"li"},"[left,mid]"),"\u4e00\u5b9a\u9012\u589e"),(0,a.kt)("li",{parentName:"ul"},"\u82e5",(0,a.kt)("inlineCode",{parentName:"li"},"A[left] == A[mid]")," \u786e\u5b9a\u4e0d\u4e86\uff0c\u90a3\u5c31",(0,a.kt)("inlineCode",{parentName:"li"},"left++"),"\uff0c\u5f80\u4e0b\u770b\u4e00\u6b65\u5373\u53ef\u3002")),(0,a.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,a.kt)(i.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// Search in Rotated Sorted Array II\n// Time Complexity: O(n)\uff0cSpace Complexity: O(1)\npublic class Solution {\n    public boolean search(int[] nums, int target) {\n        int first = 0, last = nums.length;\n        while (first != last) {\n            final int mid = first  + (last - first) / 2;\n            if (nums[mid] == target)\n                return true;\n            if (nums[first] < nums[mid]) {\n                if (nums[first] <= target && target < nums[mid])\n                    last = mid;\n                else\n                    first = mid + 1;\n            } else if (nums[first] > nums[mid]) {\n                if (nums[mid] < target && target <= nums[last-1])\n                    first = mid + 1;\n                else\n                    last = mid;\n            } else\n                //skip duplicate one\n                first++;\n        }\n        return false;\n    }\n};\n"))),(0,a.kt)(l.Z,{value:"cpp",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// Search in Rotated Sorted Array II\n// Time Complexity: O(n)\uff0cSpace Complexity: O(1)\nclass Solution {\npublic:\n    bool search(const vector<int>& nums, int target) {\n        int first = 0, last = nums.size();\n        while (first != last) {\n            const int mid = first  + (last - first) / 2;\n            if (nums[mid] == target)\n                return true;\n            if (nums[first] < nums[mid]) {\n                if (nums[first] <= target && target < nums[mid])\n                    last = mid;\n                else\n                    first = mid + 1;\n            } else if (nums[first] > nums[mid]) {\n                if (nums[mid] < target && target <= nums[last-1])\n                    first = mid + 1;\n                else\n                    last = mid;\n            } else\n                //skip duplicate one\n                first++;\n        }\n        return false;\n    }\n};\n")))),(0,a.kt)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/en/search/search-in-rotated-sorted-array"},"Search in Rotated Sorted Array")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/en/search/find-minimum-in-rotated-sorted-array"},"Find Minimum in Rotated Sorted Array")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/en/search/find-minimum-in-rotated-sorted-array-ii"},"Find Minimum in Rotated Sorted Array II"))))}p.isMDXComponent=!0}}]);