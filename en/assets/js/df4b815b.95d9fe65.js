"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[6801],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),m=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=m(e.components);return a.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=m(t),d=r,y=p["".concat(u,".").concat(d)]||p[d]||c[d]||l;return t?a.createElement(y,o(o({ref:n},s),{},{components:t})):a.createElement(y,o({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=p;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var m=2;m<l;m++)o[m]=t[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(7294),r=t(6010);const l="tabItem_Ymn6";function o(e){let{children:n,hidden:t,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>d});var a=t(7462),r=t(7294),l=t(6010),o=t(2389),i=t(7392),u=t(7094),m=t(2466);const s="tabList__CuJ",c="tabItem_LNqP";function p(e){var n;const{lazy:t,block:o,defaultValue:p,values:d,groupId:y,className:v}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=d??f.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),h=(0,i.l)(b,((e,n)=>e.value===n.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===p?p:p??(null==(n=f.find((e=>e.props.default)))?void 0:n.props.value)??f[0].props.value;if(null!==g&&!b.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:j}=(0,u.U)(),[O,T]=(0,r.useState)(g),E=[],{blockElementScrollPositionUntilNextRender:x}=(0,m.o5)();if(null!=y){const e=k[y];null!=e&&e!==O&&b.some((n=>n.value===e))&&T(e)}const N=e=>{const n=e.currentTarget,t=E.indexOf(n),a=b[t].value;a!==O&&(x(n),T(a),null!=y&&j(y,String(a)))},C=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=E.indexOf(e.currentTarget)+1;t=E[n]??E[0];break}case"ArrowLeft":{const n=E.indexOf(e.currentTarget)-1;t=E[n]??E[E.length-1];break}}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},v)},b.map((e=>{let{value:n,label:t,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===n?0:-1,"aria-selected":O===n,key:n,ref:e=>E.push(e),onKeyDown:C,onFocus:N,onClick:N},o,{className:(0,l.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":O===n})}),t??n)}))),t?(0,r.cloneElement)(f.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==O})))))}function d(e){const n=(0,o.Z)();return r.createElement(p,(0,a.Z)({key:String(n)},e))}},3179:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>u,default:()=>d,frontMatter:()=>i,metadata:()=>m,toc:()=>c});var a=t(7462),r=(t(7294),t(3905)),l=t(5488),o=t(5162);const i={title:"Majority Element"},u=void 0,m={unversionedId:"array/majority-element",id:"array/majority-element",title:"Majority Element",description:"\u63cf\u8ff0",source:"@site/docs/array/majority-element.md",sourceDirName:"array",slug:"/array/majority-element",permalink:"/en/array/majority-element",draft:!1,tags:[],version:"current",frontMatter:{title:"Majority Element"},sidebar:"docs",previous:{title:"Candy",permalink:"/en/array/candy"},next:{title:"Majority Element II",permalink:"/en/array/majority-element-ii"}},s={},c=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u89e3\u6cd5 1 \u6392\u5e8f",id:"\u89e3\u6cd5-1-\u6392\u5e8f",level:4},{value:"\u89e3\u6cd5 2 Boyer-Moore Voting Algorithm",id:"\u89e3\u6cd5-2-boyer-moore-voting-algorithm",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],p={toc:c};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.kt)("p",null,"Given an array of size n, find the majority element. The majority element is the element that appears more than ",(0,r.kt)("inlineCode",{parentName:"p"},"\u230a n/2 \u230b")," times."),(0,r.kt)("p",null,"You may assume that the array is non-empty and the majority element always exist in the array."),(0,r.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,r.kt)("p",null,"\u8fd9\u9898\u6700\u7b80\u5355\u7684\u89e3\u6cd5\uff0c\u5148\u628a\u6570\u7ec4\u6392\u5e8f\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"O(nlogn)"),"\uff0c\u7136\u540e\u4ece\u5934\u5230\u5c3e\u626b\u63cf\u4e00\u904d\uff0c\u627e\u51fa\u6700\u957f\u7684\u8fde\u7eed\u5b50\u4e32\u3002"),(0,r.kt)("p",null,"\u7531\u4e8e\u8d85\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"\u230a n/2 \u230b"),"\u6b21\uff0c\u53ef\u4ee5\u5bf9\u4e0a\u9762\u7684\u65b9\u6cd5\u6539\u8fdb\u4e00\u4e0b\uff0c\u6392\u5e8f\u540e\uff0c\u4e0d\u9700\u8981\u626b\u63cf\uff0c\u76f4\u63a5\u8fd4\u56de\u4e2d\u95f4\u90a3\u4e2a\u5143\u7d20\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"nums[n/2]"),"\uff0c\u80af\u5b9a\u5c31\u662f\u7b54\u6848\u3002"),(0,r.kt)("p",null,"\u4e0a\u8ff0\u4e24\u4e2a\u65b9\u6cd5\u90fd\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"O(nlogn)"),"\u7684\uff0c\u672c\u9898\u6709\u4e00\u4e2a\u7ebf\u6027\u89e3\u6cd5\u3002\u7531\u4e8e\u8d85\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"\u230a n/2 \u230b"),"\uff0c\u53ef\u4ee5\u7528\u76f8\u62b5\u6d88\u7684\u601d\u60f3\uff0c\u51e1\u662f\u548c\u6700\u591a\u5143\u7d20\u4e0d\u76f8\u7b49\u7684\uff0c\u5c31\u62b5\u6d88\uff0c\u6700\u540e\u5269\u4e0b\u7684\u4e00\u5b9a\u5c31\u662f\u6700\u591a\u7684\u90a3\u4e2a\u5143\u7d20\u3002"),(0,r.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,r.kt)("h4",{id:"\u89e3\u6cd5-1-\u6392\u5e8f"},"\u89e3\u6cd5 1 \u6392\u5e8f"),(0,r.kt)(l.Z,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# Majority Element\n# Time Complexity: O(nlogn), Space Complexity: O(1)\nclass Solution:\n    def majorityElement(self, nums):\n        nums.sort()\n        return nums[len(nums)//2]\n"))),(0,r.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Majority Element\n// Time Complexity: O(nlogn), Space Complexity: O(1)\npublic class Solution {\n    public int majorityElement(int[] nums) {\n        Arrays.sort(nums);\n        return nums[nums.length/2];\n    }\n}\n"))),(0,r.kt)(o.Z,{value:"cpp",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// Majority Element\n// Time Complexity: O(nlogn), Space Complexity: O(1)\nclass Solution {\npublic:\n    int majorityElement(vector<int>& nums) {\n        sort(nums.begin(), nums.end());\n        return nums[nums.size()/2];\n    }\n};\n")))),(0,r.kt)("h3",{id:"\u89e3\u6cd5-2-boyer-moore-voting-algorithm"},"\u89e3\u6cd5 2 Boyer-Moore Voting Algorithm"),(0,r.kt)(l.Z,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# Majority Element\n# Time Complexity: O(nlogn), Space Complexity: O(1)\nclass Solution:\n    def majorityElement(self, nums):\n        candidate = 0\n        count = 0\n\n        for num in nums:\n            if candidate == num:\n                count += 1\n            elif count == 0:\n                candidate = num\n                count = 1\n            else:\n                count -= 1\n\n        return candidate\n"))),(0,r.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Majority Element\n// Time Complexity: O(n), Space Complexity: O(1)\npublic class Solution {\n    public int majorityElement(int[] nums) {\n        int count = 0;\n        int candidate = 0;\n\n        for (int num : nums) {\n            if (candidate == num) {\n                ++count;\n            } else if (count == 0) {\n                candidate = num;\n                count = 1;\n            } else {\n                --count;\n            }\n        }\n        return candidate;\n    }\n}\n"))),(0,r.kt)(o.Z,{value:"cpp",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// Majority Element\n// Time Complexity: O(nlogn), Space Complexity: O(1)\nclass Solution {\npublic:\n    int majorityElement(vector<int>& nums) {\n        int count = 0;\n        int candidate = 0;\n\n        for (int num : nums) {\n            if (candidate == num) {\n                ++count;\n            } else if (count == 0) {\n                candidate = num;\n                count = 1;\n            } else {\n                --count;\n            }\n        }\n        return candidate;\n    }\n};\n")))),(0,r.kt)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/en/array/majority-element-ii"},"Majority Element II"))))}d.isMDXComponent=!0}}]);