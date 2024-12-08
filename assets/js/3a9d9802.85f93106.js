"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[3077],{71258:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"search/search-in-rotated-sorted-array-ii","title":"Search in Rotated Sorted Array II","description":"\u63cf\u8ff0","source":"@site/docs/search/search-in-rotated-sorted-array-ii.md","sourceDirName":"search","slug":"/search/search-in-rotated-sorted-array-ii","permalink":"/search/search-in-rotated-sorted-array-ii","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Search in Rotated Sorted Array II"},"sidebar":"docs","previous":{"title":"Search in Rotated Sorted Array","permalink":"/search/search-in-rotated-sorted-array"},"next":{"title":"Search a 2D Matrix","permalink":"/search/search-a-2d-matrix"}}');var a=n(74848),s=n(28453),i=n(11470),l=n(19365);const o={title:"Search in Rotated Sorted Array II"},u=void 0,c={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}];function m(e){const t={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,a.jsxs)(t.p,{children:['Follow up for "Search in Rotated Sorted Array": What if ',(0,a.jsx)(t.strong,{children:"duplicates"})," are allowed?"]}),"\n",(0,a.jsx)(t.p,{children:"Would this affect the run-time complexity? How and why?"}),"\n",(0,a.jsx)(t.p,{children:"Write a function to determine if a given target is in the array."}),"\n",(0,a.jsx)(t.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,a.jsxs)(t.p,{children:["\u5141\u8bb8\u91cd\u590d\u5143\u7d20\uff0c\u5219\u4e0a\u4e00\u9898\u4e2d\u5982\u679c",(0,a.jsx)(t.code,{children:"A[left] <= A[mid]"}),",\u90a3\u4e48",(0,a.jsx)(t.code,{children:"[left,mid]"}),"\u4e3a\u9012\u589e\u5e8f\u5217\u7684\u5047\u8bbe\u5c31\u4e0d\u80fd\u6210\u7acb\u4e86\uff0c\u6bd4\u5982",(0,a.jsx)(t.code,{children:"[1,3,1,1,1]"}),"\u3002"]}),"\n",(0,a.jsxs)(t.p,{children:["\u65e2\u7136",(0,a.jsx)(t.code,{children:"A[left] <= A[mid]"}),"\u4e0d\u80fd\u786e\u5b9a\u9012\u589e\uff0c\u90a3\u5c31\u628a\u5b83\u62c6\u5206\u6210\u4e24\u4e2a\u6761\u4ef6\uff1a"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\u82e5",(0,a.jsx)(t.code,{children:"A[left] < A[mid]"}),"\uff0c\u5219\u533a\u95f4",(0,a.jsx)(t.code,{children:"[left,mid]"}),"\u4e00\u5b9a\u9012\u589e"]}),"\n",(0,a.jsxs)(t.li,{children:["\u82e5",(0,a.jsx)(t.code,{children:"A[left] == A[mid]"})," \u786e\u5b9a\u4e0d\u4e86\uff0c\u90a3\u5c31",(0,a.jsx)(t.code,{children:"left++"}),"\uff0c\u5f80\u4e0b\u770b\u4e00\u6b65\u5373\u53ef\u3002"]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n","\n",(0,a.jsxs)(i.A,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,a.jsx)(l.A,{value:"java",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:"// Search in Rotated Sorted Array II\n// Time Complexity: O(n)\uff0cSpace Complexity: O(1)\npublic class Solution {\n    public boolean search(int[] nums, int target) {\n        int first = 0, last = nums.length;\n        while (first != last) {\n            final int mid = first  + (last - first) / 2;\n            if (nums[mid] == target)\n                return true;\n            if (nums[first] < nums[mid]) {\n                if (nums[first] <= target && target < nums[mid])\n                    last = mid;\n                else\n                    first = mid + 1;\n            } else if (nums[first] > nums[mid]) {\n                if (nums[mid] < target && target <= nums[last-1])\n                    first = mid + 1;\n                else\n                    last = mid;\n            } else\n                //skip duplicate one\n                first++;\n        }\n        return false;\n    }\n};\n"})})}),(0,a.jsx)(l.A,{value:"cpp",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cpp",children:"// Search in Rotated Sorted Array II\n// Time Complexity: O(n)\uff0cSpace Complexity: O(1)\nclass Solution {\npublic:\n    bool search(const vector<int>& nums, int target) {\n        int first = 0, last = nums.size();\n        while (first != last) {\n            const int mid = first  + (last - first) / 2;\n            if (nums[mid] == target)\n                return true;\n            if (nums[first] < nums[mid]) {\n                if (nums[first] <= target && target < nums[mid])\n                    last = mid;\n                else\n                    first = mid + 1;\n            } else if (nums[first] > nums[mid]) {\n                if (nums[mid] < target && target <= nums[last-1])\n                    first = mid + 1;\n                else\n                    last = mid;\n            } else\n                //skip duplicate one\n                first++;\n        }\n        return false;\n    }\n};\n"})})}),(0,a.jsx)(l.A,{value:"python",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"# Search in Rotated Sorted Array II\n# Time Complexity: O(n), Space Complexity: O(1)\nclass Solution:\n    def search(self, nums: list[int], target: int) -> bool:\n        first = 0\n        last = len(nums)\n        while first != last:\n            mid = first + (last - first) // 2\n            if nums[mid] == target:\n                return True\n            if nums[first] < nums[mid]:\n                if nums[first] <= target and target < nums[mid]:\n                    last = mid\n                else:\n                    first = mid + 1\n            elif nums[first] > nums[mid]:\n                if nums[mid] < target and target <= nums[last-1]:\n                    first = mid + 1\n                else:\n                    last = mid\n            else:\n                #skip duplicate one\n                first += 1\n        return False\n"})})})]}),"\n",(0,a.jsx)(t.h3,{id:"\u76f8\u5173\u9898\u76ee",children:"\u76f8\u5173\u9898\u76ee"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/search/search-in-rotated-sorted-array",children:"Search in Rotated Sorted Array"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/search/find-minimum-in-rotated-sorted-array",children:"Find Minimum in Rotated Sorted Array"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/search/find-minimum-in-rotated-sorted-array-ii",children:"Find Minimum in Rotated Sorted Array II"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var r=n(34164);const a={tabItem:"tabItem_Ymn6"};var s=n(74848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,i),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>S});var r=n(96540),a=n(34164),s=n(23104),i=n(56347),l=n(205),o=n(57485),u=n(31682),c=n(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=m(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[u,d]=f({queryString:n,groupId:a}),[p,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),v=(()=>{const e=u??p;return h({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{v&&o(v)}),[v]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=n(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(74848);function g(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const t=e.currentTarget,n=o.indexOf(t),a=l[n].value;a!==r&&(u(t),i(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:s}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function j(e){const t=p(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,x.jsx)(g,{...t,...e}),(0,x.jsx)(y,{...t,...e})]})}function S(e){const t=(0,b.A)();return(0,x.jsx)(j,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var r=n(96540);const a={},s=r.createContext(a);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);