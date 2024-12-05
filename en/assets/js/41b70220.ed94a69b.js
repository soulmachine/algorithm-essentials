"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[1067],{50228:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>m});const s=JSON.parse('{"id":"dual-pointers/3sum-closest","title":"3Sum Closest","description":"\u63cf\u8ff0","source":"@site/docs/dual-pointers/3sum-closest.md","sourceDirName":"dual-pointers","slug":"/dual-pointers/3sum-closest","permalink":"/en/dual-pointers/3sum-closest","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"3Sum Closest"},"sidebar":"docs","previous":{"title":"3Sum","permalink":"/en/dual-pointers/3sum"},"next":{"title":"3Sum Smaller","permalink":"/en/dual-pointers/3sum-smaller"}}');var a=t(74848),r=t(28453),l=t(11470),i=t(19365);const o={title:"3Sum Closest"},u=void 0,c={},m=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}];function h(e){const n={a:"a",annotation:"annotation",code:"code",h3:"h3",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,a.jsxs)(n.p,{children:["Given an array ",(0,a.jsx)(n.code,{children:"S"})," of ",(0,a.jsx)(n.code,{children:"n"})," integers, find three integers in ",(0,a.jsx)(n.code,{children:"S"})," such that the sum is closest to a given number, target. Return the sum of the three integers. You may assume that each input would have exactly one solution."]}),"\n",(0,a.jsxs)(n.p,{children:["For example, given array ",(0,a.jsx)(n.code,{children:"S = {-1 2 1 -4}"}),", and ",(0,a.jsx)(n.code,{children:"target = 1"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["The sum that is closest to the target is 2. (",(0,a.jsx)(n.code,{children:"-1 + 2 + 1 = 2"}),")."]}),"\n",(0,a.jsx)(n.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,a.jsxs)(n.p,{children:["\u5148\u6392\u5e8f\uff0c\u7136\u540e\u53cc\u6307\u9488\u5de6\u53f3\u5939\u903c\uff0c\u590d\u6742\u5ea6 ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"O"}),(0,a.jsx)(n.mo,{stretchy:"false",children:"("}),(0,a.jsxs)(n.msup,{children:[(0,a.jsx)(n.mi,{children:"n"}),(0,a.jsx)(n.mn,{children:"2"})]}),(0,a.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(n^2)"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(n.span,{className:"mopen",children:"("}),(0,a.jsxs)(n.span,{className:"mord",children:[(0,a.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(n.span,{className:"msupsub",children:(0,a.jsx)(n.span,{className:"vlist-t",children:(0,a.jsx)(n.span,{className:"vlist-r",children:(0,a.jsx)(n.span,{className:"vlist",style:{height:"0.8141em"},children:(0,a.jsxs)(n.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,a.jsx)(n.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(n.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(n.span,{className:"mord mtight",children:"2"})})]})})})})})]}),(0,a.jsx)(n.span,{className:"mclose",children:")"})]})})]}),"\u3002"]}),"\n",(0,a.jsx)(n.h3,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n","\n",(0,a.jsxs)(l.A,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,a.jsx)(i.A,{value:"python",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"# 3Sum Closest\n# \u5148\u6392\u5e8f\uff0c\u7136\u540e\u53cc\u6307\u9488\u5de6\u53f3\u5939\u903c\n# Time Complexity: O(n^2)\n# Space Complexity: from O(logn) to O(n), depending on the\n# implementation of the sorting algorithm\nclass Solution:\n    def threeSumClosest(self, nums: List[int], target: int) -> int:\n        diff = float('inf')\n        nums.sort()\n        for i in range(len(nums)):\n            low, high = i + 1, len(nums) - 1\n            while low < high:\n                sum = nums[i] + nums[low] + nums[high]\n                if abs(target - sum) < abs(diff):\n                    diff = target - sum\n                if sum < target:\n                    low += 1\n                else:\n                    high -= 1\n        return target - diff\n"})})}),(0,a.jsx)(i.A,{value:"java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"// 3Sum Closest\n// \u5148\u6392\u5e8f\uff0c\u7136\u540e\u53cc\u6307\u9488\u5de6\u53f3\u5939\u903c\n// Time Complexity: O(n^2)\n// Space Complexity: from O(logn) to O(n), depending on the\n// implementation of the sorting algorithm\npublic class Solution {\n    public int threeSumClosest(int[] nums, int target) {\n        int diff = Integer.MAX_VALUE;\n        Arrays.sort(nums);\n        for (int i = 0; i < nums.length; ++i) {\n            int low = i + 1, high = nums.length - 1; // two pointers\n            while(low < high) {\n                int sum = nums[i] + nums[low] + nums[high];\n                if (Math.abs(sum - target) < Math.abs(diff))\n                    diff = target - sum;\n\n                if (sum < target) ++low;\n                else              --high;\n            }\n        }\n        return target - diff;\n    }\n}\n"})})}),(0,a.jsx)(i.A,{value:"cpp",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"// 3Sum Closest\n// \u5148\u6392\u5e8f\uff0c\u7136\u540e\u53cc\u6307\u9488\u5de6\u53f3\u5939\u903c\n// Time Complexity: O(n^2)\n// Space Complexity: from O(logn) to O(n), depending on the\n// implementation of the sorting algorithm\nclass Solution {\npublic:\n    int threeSumClosest(vector<int>& nums, int target) {\n        int diff = INT_MAX;\n        sort(nums.begin(), nums.end());\n        for (int i = 0; i < nums.size(); ++i) {\n            int low = i + 1, high = nums.size() - 1; // two pointers\n            while(low < high) {\n                int sum = nums[i] + nums[low] + nums[high];\n                if (abs(sum - target) < abs(diff))\n                    diff = target - sum;\n\n                if (sum < target) ++low;\n                else              --high;\n            }\n        }\n        return target - diff;\n    }\n};\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"\u76f8\u5173\u9898\u76ee",children:"\u76f8\u5173\u9898\u76ee"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/en/array/2sum",children:"2Sum"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/en/dual-pointers/2sum-ii",children:"2Sum II"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/en/dual-pointers/3sum",children:"3Sum"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/en/dual-pointers/4sum",children:"4Sum"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/en/array/4sum-ii",children:"4Sum II"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>l});t(96540);var s=t(34164);const a={tabItem:"tabItem_Ymn6"};var r=t(74848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)(a.tabItem,l),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var s=t(96540),a=t(34164),r=t(23104),l=t(56347),i=t(205),o=t(57485),u=t(31682),c=t(70679);function m(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return m(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:a}}=e;return{value:n,label:t,attributes:s,default:a}}))}(t);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function d(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const a=(0,l.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(r),(0,s.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})}),[r,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,r=h(e),[l,o]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:r}))),[u,m]=p({queryString:t,groupId:a}),[f,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,r]=(0,c.Dv)(t);return[a,(0,s.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:a}),x=(()=>{const e=u??f;return d({value:e,tabValues:r})?e:null})();(0,i.A)((()=>{x&&o(x)}),[x]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!d({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),m(e),g(e)}),[m,g,r]),tabValues:r}}var g=t(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(74848);function j(e){let{className:n,block:t,selectedValue:s,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.a_)(),c=e=>{const n=e.currentTarget,t=o.indexOf(n),a=i[t].value;a!==s&&(u(n),l(a))},m=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>o.push(e),onKeyDown:m,onClick:c,...r,className:(0,a.A)("tabs__item",x.tabItem,r?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:r}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=f(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,b.jsx)(j,{...n,...e}),(0,b.jsx)(v,{...n,...e})]})}function w(e){const n=(0,g.A)();return(0,b.jsx)(y,{...e,children:m(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>i});var s=t(96540);const a={},r=s.createContext(a);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);