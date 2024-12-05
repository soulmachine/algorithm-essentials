"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[3731],{83326:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"search/search-in-rotated-sorted-array","title":"Search in Rotated Sorted Array","description":"\u63cf\u8ff0","source":"@site/docs/search/search-in-rotated-sorted-array.md","sourceDirName":"search","slug":"/search/search-in-rotated-sorted-array","permalink":"/search/search-in-rotated-sorted-array","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Search in Rotated Sorted Array"},"sidebar":"docs","previous":{"title":"Search Insert Position","permalink":"/search/search-insert-position"},"next":{"title":"Search in Rotated Sorted Array II","permalink":"/search/search-in-rotated-sorted-array-ii"}}');var a=t(74848),s=t(28453),i=t(11470),l=t(19365);const o={title:"Search in Rotated Sorted Array"},u=void 0,c={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}];function h(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,a.jsx)(n.p,{children:"Suppose a sorted array is rotated at some pivot unknown to you beforehand."}),"\n",(0,a.jsxs)(n.p,{children:["(i.e., ",(0,a.jsx)(n.code,{children:"0 1 2 4 5 6 7"})," might become ",(0,a.jsx)(n.code,{children:"4 5 6 7 0 1 2"}),")."]}),"\n",(0,a.jsxs)(n.p,{children:["You are given a target value to search. If found in the array return its index, otherwise return ",(0,a.jsx)(n.code,{children:"-1"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"You may assume no duplicate exists in the array."}),"\n",(0,a.jsx)(n.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,a.jsx)(n.p,{children:"\u4e00\u4e2a\u6709\u5e8f\u6570\u7ec4\u88ab\u5faa\u73af\u53f3\u79fb\uff0c\u53ea\u53ef\u80fd\u6709\u4e00\u4e0b\u4e24\u79cd\u60c5\u51b5\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"   7 \u2502\n 6   \u2502\n\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n     \u2502         5\n     \u2502       4\n     \u2502     3\n     \u2502   2\n     \u2502 1\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"         7 \u2502\n       6   \u2502\n     5     \u2502\n   4       \u2502\n 3         \u2502\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n           \u2502   2\n           \u2502 1\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u672c\u9898\u4f9d\u65e7\u53ef\u4ee5\u7528\u4e8c\u5206\u67e5\u627e\uff0c\u96be\u5ea6\u4e3b\u8981\u5728\u4e8e\u5de6\u53f3\u8fb9\u754c\u7684\u786e\u5b9a\u3002\u4ed4\u7ec6\u89c2\u5bdf\u4e0a\u9762\u4e24\u5e45\u56fe\uff0c\u6211\u4eec\u53ef\u4ee5\u5f97\u51fa\u5982\u4e0b\u7ed3\u8bba\uff1a"}),"\n",(0,a.jsxs)(n.p,{children:["\u5982\u679c",(0,a.jsx)(n.code,{children:"A[left] <= A[mid]"}),",\u90a3\u4e48",(0,a.jsx)(n.code,{children:"[left,mid]"})," \u4e00\u5b9a\u4e3a\u5355\u8c03\u9012\u589e\u5e8f\u5217\u3002"]}),"\n",(0,a.jsx)(n.h3,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n","\n",(0,a.jsxs)(i.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,a.jsx)(l.A,{value:"java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"// Search in Rotated Sorted Array\n// Time Complexity: O(log n)\uff0cSpace Complexity: O(1)\npublic class Solution {\n    public int search(int[] nums, int target) {\n        int first = 0, last = nums.length;\n        while (first != last) {\n            final int mid = first  + (last - first) / 2;\n            if (nums[mid] == target)\n                return mid;\n            if (nums[first] <= nums[mid]) {\n                if (nums[first] <= target && target < nums[mid])\n                    last = mid;\n                else\n                    first = mid + 1;\n            } else {\n                if (nums[mid] < target && target <= nums[last-1])\n                    first = mid + 1;\n                else\n                    last = mid;\n            }\n        }\n        return -1;\n    }\n};\n"})})}),(0,a.jsx)(l.A,{value:"cpp",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"// Search in Rotated Sorted Array\n// Time Complexity: O(log n)\uff0cSpace Complexity: O(1)\nclass Solution {\npublic:\n    int search(const vector<int>& nums, int target) {\n        int first = 0, last = nums.size();\n        while (first != last) {\n            const int mid = first  + (last - first) / 2;\n            if (nums[mid] == target)\n                return mid;\n            if (nums[first] <= nums[mid]) {\n                if (nums[first] <= target && target < nums[mid])\n                    last = mid;\n                else\n                    first = mid + 1;\n            } else {\n                if (nums[mid] < target && target <= nums[last-1])\n                    first = mid + 1;\n                else\n                    last = mid;\n            }\n        }\n        return -1;\n    }\n};\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"\u76f8\u5173\u9898\u76ee",children:"\u76f8\u5173\u9898\u76ee"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/search/search-in-rotated-sorted-array-ii",children:"Search in Rotated Sorted Array II"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/search/find-minimum-in-rotated-sorted-array",children:"Find Minimum in Rotated Sorted Array"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/search/find-minimum-in-rotated-sorted-array-ii",children:"Find Minimum in Rotated Sorted Array II"})}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var r=t(34164);const a={tabItem:"tabItem_Ymn6"};var s=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>S});var r=t(96540),a=t(34164),s=t(23104),i=t(56347),l=t(205),o=t(57485),u=t(31682),c=t(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function p(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=h(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[u,d]=f({queryString:t,groupId:a}),[p,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,c.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),v=(()=>{const e=u??p;return m({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{v&&o(v)}),[v]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=t(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function g(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const n=e.currentTarget,t=o.indexOf(n),a=l[t].value;a!==r&&(u(n),i(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:s}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=p(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,x.jsx)(g,{...n,...e}),(0,x.jsx)(j,{...n,...e})]})}function S(e){const n=(0,b.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var r=t(96540);const a={},s=r.createContext(a);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);