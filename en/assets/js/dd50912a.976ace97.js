"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[6301],{75972:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>u,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"dual-pointers/remove-duplicates-from-sorted-array","title":"Remove Duplicates from Sorted Array","description":"\u63cf\u8ff0","source":"@site/docs/dual-pointers/remove-duplicates-from-sorted-array.md","sourceDirName":"dual-pointers","slug":"/dual-pointers/remove-duplicates-from-sorted-array","permalink":"/en/dual-pointers/remove-duplicates-from-sorted-array","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Remove Duplicates from Sorted Array"},"sidebar":"docs","previous":{"title":"\u53cc\u6307\u9488","permalink":"/en/dual-pointers/"},"next":{"title":"Remove Duplicates from Sorted Array II","permalink":"/en/dual-pointers/remove-duplicates-from-sorted-array-ii"}}');var a=t(74848),l=t(28453),s=t(11470),o=t(19365);const u={title:"Remove Duplicates from Sorted Array"},i=void 0,c={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}];function m(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,a.jsx)(n.p,{children:"Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length."}),"\n",(0,a.jsx)(n.p,{children:"Do not allocate extra space for another array, you must do this in place with constant memory."}),"\n",(0,a.jsxs)(n.p,{children:["For example, Given input array ",(0,a.jsx)(n.code,{children:"A = [1,1,2]"}),","]}),"\n",(0,a.jsxs)(n.p,{children:["Your function should return length = 2, and ",(0,a.jsx)(n.code,{children:"A"})," is now ",(0,a.jsx)(n.code,{children:"[1,2]"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,a.jsx)(n.p,{children:"\u65e0"}),"\n",(0,a.jsx)(n.h3,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n","\n",(0,a.jsxs)(s.A,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,a.jsx)(o.A,{value:"python",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"# Remove Duplicates from Sorted Array\n# Time Complexity: O(n)\uff0cSpace Complexity: O(1)\nclass Solution:\n    def removeDuplicates(self, nums: List[int]) -> int:\n        if len(nums) == 0:\n            return 0\n\n        slow = 0\n        for fast in range(len(nums)):\n            if nums[fast] != nums[slow]:\n                slow += 1\n                nums[slow] = nums[fast]\n\n        return slow + 1\n"})})}),(0,a.jsx)(o.A,{value:"java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"// Remove Duplicates from Sorted Array\n// Time Complexity: O(n)\uff0cSpace Complexity: O(1)\npublic class Solution {\n    public int removeDuplicates(int[] nums) {\n        if (nums.length == 0) return 0;\n\n        int slow = 0;\n        for (int fast = 0; fast < nums.length; fast++){\n            if (nums[fast] != nums[slow])\n                nums[++slow] = nums[fast];\n        }\n        return slow + 1;\n    }\n};\n"})})}),(0,a.jsx)(o.A,{value:"cpp",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"// Remove Duplicates from Sorted Array\n// Time Complexity: O(n)\uff0cSpace Complexity: O(1)\nclass Solution {\npublic:\n    int removeDuplicates(vector<int>& nums) {\n        if (nums.empty()) return 0;\n\n        int slow = 0;\n        for (int fast = 0; fast < nums.size(); fast++) {\n            if (nums[fast] != nums[slow]) {\n                nums[++slow] = nums[fast];\n            }\n        }\n        return slow+1;\n    }\n};\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"\u76f8\u5173\u9898\u76ee",children:"\u76f8\u5173\u9898\u76ee"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/en/dual-pointers/remove-duplicates-from-sorted-array-ii",children:"Remove Duplicates from Sorted Array II"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/en/dual-pointers/remove-element",children:"Remove Element"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/en/dual-pointers/move-zeroes",children:"Move Zeroes"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/en/linked-list/remove-duplicates-from-sorted-list",children:"Remove Duplicates from Sorted List"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var r=t(34164);const a={tabItem:"tabItem_Ymn6"};var l=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(96540),a=t(34164),l=t(23104),s=t(56347),o=t(205),u=t(57485),i=t(31682),c=t(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,i.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.W6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,u.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function h(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,l=m(e),[s,u]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[i,d]=f({queryString:t,groupId:a}),[h,v]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,c.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:a}),b=(()=>{const e=i??h;return p({value:e,tabValues:l})?e:null})();(0,o.A)((()=>{b&&u(b)}),[b]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),v(e)}),[d,v,l]),tabValues:l}}var v=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function y(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:o}=e;const u=[],{blockElementScrollPositionUntilNextRender:i}=(0,l.a_)(),c=e=>{const n=e.currentTarget,t=u.indexOf(n),a=o[t].value;a!==r&&(i(n),s(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>u.push(e),onKeyDown:d,onClick:c,...l,className:(0,a.A)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:l}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===l));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function g(e){const n=h(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,x.jsx)(y,{...n,...e}),(0,x.jsx)(j,{...n,...e})]})}function w(e){const n=(0,v.A)();return(0,x.jsx)(g,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var r=t(96540);const a={},l=r.createContext(a);function s(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);