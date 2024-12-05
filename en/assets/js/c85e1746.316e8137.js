"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[4698],{93860:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"array/next-permutation","title":"Next Permutation","description":"\u63cf\u8ff0","source":"@site/docs/array/next-permutation.md","sourceDirName":"array","slug":"/array/next-permutation","permalink":"/en/array/next-permutation","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Next Permutation"},"sidebar":"docs","previous":{"title":"4Sum II","permalink":"/en/array/4sum-ii"},"next":{"title":"Permutation Sequence","permalink":"/en/array/permutation-sequence"}}');var a=t(74848),i=t(28453),s=t(11470),u=t(19365);const l={title:"Next Permutation"},o=void 0,c={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}];function m(e){const n={a:"a",code:"code",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,a.jsx)(n.p,{children:"Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers."}),"\n",(0,a.jsx)(n.p,{children:"If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order)."}),"\n",(0,a.jsx)(n.p,{children:"The replacement must be in-place, do not allocate extra memory."}),"\n",(0,a.jsx)(n.p,{children:"Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"1,2,3 \u2192 1,3,2\n3,2,1 \u2192 1,2,3\n1,1,5 \u2192 1,5,1\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,a.jsxs)(n.p,{children:["\u7b97\u6cd5\u8fc7\u7a0b\u5982\u4e0b\u56fe\u6240\u793a\uff08\u6765\u81ea",(0,a.jsx)(n.a,{href:"http://fisherlei.blogspot.com/2012/12/leetcode-next-permutation.html",children:"http://fisherlei.blogspot.com/2012/12/leetcode-next-permutation.html"}),"\uff09\u3002"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"\u4e0b\u4e00\u4e2a\u6392\u5217\u7b97\u6cd5\u6d41\u7a0b",src:t(91596).A+"",width:"951",height:"730"})}),"\n",(0,a.jsx)(n.h3,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n","\n",(0,a.jsxs)(s.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,a.jsx)(u.A,{value:"java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"// Next Permutation\n// Time Complexity: O(n), Space Complexity: O(1)\npublic class Solution {\n    public void nextPermutation(int[] nums) {\n        nextPermutation(nums, 0, nums.length);\n    }\n    private static boolean nextPermutation(int[] nums, int begin, int end) {\n        // From right to left, find the first digit(partitionNumber)\n        // which violates the increase trend\n        int p = end - 2;\n        while (p > -1 && nums[p] >= nums[p + 1]) --p;\n\n        // If not found, which means current sequence is already the largest\n        // permutation, then rearrange to the first permutation and return false\n        if(p == -1) {\n            reverse(nums, begin, end);\n            return false;\n        }\n\n        // From right to left, find the first digit which is greater\n        // than the partition number, call it changeNumber\n        int c = end - 1;\n        while (c > 0 && nums[c] <= nums[p]) --c;\n\n        // Swap the partitionNumber and changeNumber\n        swap(nums, p, c);\n        // Reverse all the digits on the right of partitionNumber\n        reverse(nums, p+1, end);\n        return true;\n    }\n    private static void swap(int[] nums, int i, int j) {\n        int tmp = nums[i];\n        nums[i] = nums[j];\n        nums[j] = tmp;\n    }\n    private static void reverse(int[] nums, int begin, int end) {\n        end--;\n        while (begin < end) {\n            swap(nums, begin++, end--);\n        }\n    }\n};\n"})})}),(0,a.jsx)(u.A,{value:"cpp",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"// Next Permutation\n// Time Complexity: O(n), Space Complexity: O(1)\nclass Solution {\npublic:\n    void nextPermutation(vector<int> &nums) {\n        next_permutation(nums, 0, nums.size());\n    }\nprivate:\n    bool next_permutation(vector<int> &nums, int begin, int end) {\n        // From right to left, find the first digit(partitionNumber)\n        // which violates the increase trend\n        int p = end - 2;\n        while (p > -1 && nums[p] >= nums[p + 1]) --p;\n\n        // If not found, which means current sequence is already the largest\n        // permutation, then rearrange to the first permutation and return false\n        if(p == -1) {\n            reverse(&nums[begin], &nums[end]);\n            return false;\n        }\n\n        // From right to left, find the first digit which is greater\n        // than the partition number, call it changeNumber\n        int c = end - 1;\n        while (c > 0 && nums[c] <= nums[p]) --c;\n\n        // Swap the partitionNumber and changeNumber\n        swap(nums[p], nums[c]);\n        // Reverse all the digits on the right of partitionNumber\n        reverse(&nums[p+1], &nums[end]);\n        return true;\n    }\n};\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"\u76f8\u5173\u9898\u76ee",children:"\u76f8\u5173\u9898\u76ee"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/en/array/permutation-sequence",children:"Permutation Sequence"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/en/brute-force/permutations",children:"Permutations"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/en/brute-force/permutations-ii",children:"Permutations II"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/en/brute-force/combinations",children:"Combinations"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var r=t(34164);const a={tabItem:"tabItem_Ymn6"};var i=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>y});var r=t(96540),a=t(34164),i=t(23104),s=t(56347),u=t(205),l=t(57485),o=t(31682),c=t(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,o.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,i=m(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[o,d]=p({queryString:t,groupId:a}),[f,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,c.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:a}),v=(()=>{const e=o??f;return h({value:e,tabValues:i})?e:null})();(0,u.A)((()=>{v&&l(v)}),[v]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,i]),tabValues:i}}var b=t(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function x(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:u}=e;const l=[],{blockElementScrollPositionUntilNextRender:o}=(0,i.a_)(),c=e=>{const n=e.currentTarget,t=l.indexOf(n),a=u[t].value;a!==r&&(o(n),s(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:u.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:d,onClick:c,...i,className:(0,a.A)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:i}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function w(e){const n=f(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...n,...e}),(0,g.jsx)(j,{...n,...e})]})}function y(e){const n=(0,b.A)();return(0,g.jsx)(w,{...e,children:d(e.children)},String(n))}},91596:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/next-permutation-24f8a843d6d28d13b07893f1791ca165.png"},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>u});var r=t(96540);const a={},i=r.createContext(a);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function u(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);