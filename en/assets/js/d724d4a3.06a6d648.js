"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[9766],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,f=m["".concat(i,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),r=n(7294),l=n(6010),o=n(2389),s=n(7392),i=n(7094),u=n(2466);const p="tabList__CuJ",c="tabItem_LNqP";function m(e){var t;const{lazy:n,block:o,defaultValue:m,values:d,groupId:f,className:v}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=d??y.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),k=(0,s.l)(b,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===m?m:m??(null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)??y[0].props.value;if(null!==h&&!b.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:O}=(0,i.U)(),[w,T]=(0,r.useState)(h),N=[],{blockElementScrollPositionUntilNextRender:I}=(0,u.o5)();if(null!=f){const e=g[f];null!=e&&e!==w&&b.some((t=>t.value===e))&&T(e)}const x=e=>{const t=e.currentTarget,n=N.indexOf(t),a=b[n].value;a!==w&&(I(t),T(a),null!=f&&O(f,String(a)))},j=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;n=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=N[t]??N[N.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},v)},b.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>N.push(e),onKeyDown:j,onFocus:x,onClick:x},o,{className:(0,l.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,r.cloneElement)(y.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,o.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},727:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),l=n(5488),o=n(5162);const s={title:"Intersection of Two Arrays II"},i=void 0,u={unversionedId:"array/intersection-of-two-arrays-ii",id:"array/intersection-of-two-arrays-ii",title:"Intersection of Two Arrays II",description:"\u63cf\u8ff0",source:"@site/docs/array/intersection-of-two-arrays-ii.md",sourceDirName:"array",slug:"/array/intersection-of-two-arrays-ii",permalink:"/en/array/intersection-of-two-arrays-ii",draft:!1,tags:[],version:"current",frontMatter:{title:"Intersection of Two Arrays II"},sidebar:"docs",previous:{title:"Intersection of Two Arrays",permalink:"/en/array/intersection-of-two-arrays"},next:{title:"\u5355\u94fe\u8868",permalink:"/en/linked-list/"}},p={},c=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u6392\u5e8f",id:"\u6392\u5e8f",level:4},{value:"HashMap",id:"hashmap",level:4},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],m={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.kt)("p",null,"Given two arrays, write a function to compute their intersection."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 1"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Input"),": nums1 = ","[1,2,2,1]",", nums2 = ","[2,2]",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Output"),": ","[2,2]")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 2"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Input"),": nums1 = ","[4,9,5]",", nums2 = ","[9,4,9,8,4]",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Output"),": ","[4,9]")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Each element in the result should appear as many times as it shows in both arrays."),(0,r.kt)("li",{parentName:"ul"},"The result can be in any order.")),(0,r.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,r.kt)("p",null,"\u601d\u8def\u4e00\uff0c\u53ef\u4ee5\u628a\u4e24\u4e2a\u6570\u7ec4\u6392\u5e8f\uff0c\u7136\u540e\u7528\u4e24\u4e2a\u6307\u9488\uff0c\u540c\u65f6\u904d\u5386\u4e24\u4e2a\u6570\u7ec4\uff0c\u65f6\u95f4\u590d\u6742\u5ea6 O(nlogn+mlogm)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6 O(logm + logn) \u5230 O(m+n) \u4e4b\u95f4\uff0c\u53d6\u51b3\u4e8e\u6392\u5e8f\u7b97\u6cd5\u3002"),(0,r.kt)("p",null,"\u601d\u8def\u4e8c\uff0c\u57fa\u4e8e\u8f83\u77ed\u7684\u90a3\u4e2a\u6570\u7ec4\u5efa\u7acb\u4e00\u4e2a HashMap, key \u4e3a\u6574\u6570, value \u4e3a\u51fa\u73b0\u6b21\u6570\uff0c\u7136\u540e\u904d\u5386\u53e6\u4e00\u4e2a\u6570\u7ec4, \u78b0\u5230\u4e00\u6b21\u5c31\u628a\u54c8\u5e0c\u8868\u91cc\u7684\u503c\u51cf\u4e00\uff0c\u5e76\u628a\u8be5\u6570\u52a0\u5165\u5230\u4ea4\u96c6\u4e2d\uff0c\u7b49\u4e8e 0 \u5219\u8df3\u8fc7\u3002\u65f6\u95f4\u590d\u6742\u5ea6 O(m + n))\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6 O(min(m + n))\u3002"),(0,r.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,r.kt)("h4",{id:"\u6392\u5e8f"},"\u6392\u5e8f"),(0,r.kt)(l.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Intersection of Two Arrays II\n// Sort\n// Time Complexity: O(mlogm+nlogn)\n// Space Complexity:  from O(logm+logn) to O(n+m), depending\n// on the implementation of the sorting algorithm.\nclass Solution {\n    public int[] intersect(int[] nums1, int[] nums2) {\n        Arrays.sort(nums1);\n        Arrays.sort(nums2);\n        int i = 0, j = 0, k = 0;\n        while (i < nums1.length && j < nums2.length) {\n            if (nums1[i] < nums2[j]) {\n                ++i;\n            } else if (nums1[i] > nums2[j]) {\n                ++j;\n            } else {\n                nums1[k++] = nums1[i++];\n                ++j;\n            }\n        }\n        return Arrays.copyOfRange(nums1, 0, k);\n    }\n}\n"))),(0,r.kt)(o.Z,{value:"cpp",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// TODO\n")))),(0,r.kt)("h4",{id:"hashmap"},"HashMap"),(0,r.kt)(l.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Intersection of Two Arrays II\n// HashMap\n// Time Complexity: O(m + n), Space Complexity:  O(min(m + n))\nclass Solution {\n    public int[] intersect(int[] nums1, int[] nums2) {\n        if (nums1.length > nums2.length) return intersect(nums2, nums1);\n\n        Map<Integer, Integer> m = new HashMap<>();\n        for (int x : nums1) {\n            m.merge(x, 1, Integer::sum);\n        }\n\n        int k = 0;\n        for (int x : nums2) {\n            int count = m.getOrDefault(x, 0);\n            if (count > 0) {\n                nums1[k++] = x;\n                m.put(x, count - 1);\n            }\n        }\n        return Arrays.copyOfRange(nums1, 0, k);\n    }\n}\n"))),(0,r.kt)(o.Z,{value:"cpp",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// TODO\n")))),(0,r.kt)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/en/array/intersection-of-two-arrays"},"Intersection of Two Arrays"))))}d.isMDXComponent=!0}}]);