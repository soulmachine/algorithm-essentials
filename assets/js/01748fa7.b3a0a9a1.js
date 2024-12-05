"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[261],{2488:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"search/search-for-a-range","title":"Search for a Range","description":"\u63cf\u8ff0","source":"@site/docs/search/search-for-a-range.md","sourceDirName":"search","slug":"/search/search-for-a-range","permalink":"/search/search-for-a-range","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Search for a Range"},"sidebar":"docs","previous":{"title":"\u57fa\u6570\u6392\u5e8f\u3001\u6876\u6392\u5e8f\u548c\u8ba1\u6570\u6392\u5e8f\u7684\u533a\u522b","permalink":"/sorting/summary"},"next":{"title":"Search Insert Position","permalink":"/search/search-insert-position"}}');var a=r(74848),s=r(28453),l=r(11470),i=r(19365);const o={title:"Search for a Range"},u=void 0,c={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u91cd\u65b0\u5b9e\u73b0 lower_bound \u548c upper_bound",id:"\u91cd\u65b0\u5b9e\u73b0-lower_bound-\u548c-upper_bound",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}];function p(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,a.jsx)(n.p,{children:"Given a sorted array of integers, find the starting and ending position of a given target value."}),"\n",(0,a.jsxs)(n.p,{children:["Your algorithm's runtime complexity must be in the order of ",(0,a.jsx)(n.code,{children:"O(log n)"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["If the target is not found in the array, return ",(0,a.jsx)(n.code,{children:"[-1, -1]"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["For example,\nGiven ",(0,a.jsx)(n.code,{children:"[5, 7, 7, 8, 8, 10]"})," and target value 8,\nreturn ",(0,a.jsx)(n.code,{children:"[3, 4]"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,a.jsx)(n.p,{children:"\u5df2\u7ecf\u6392\u597d\u4e86\u5e8f\uff0c\u7528\u4e8c\u5206\u67e5\u627e\u3002"}),"\n",(0,a.jsx)(n.h3,{id:"\u91cd\u65b0\u5b9e\u73b0-lower_bound-\u548c-upper_bound",children:"\u91cd\u65b0\u5b9e\u73b0 lower_bound \u548c upper_bound"}),"\n","\n",(0,a.jsxs)(l.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,a.jsx)(i.A,{value:"java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"// Search for a Range\n// \u91cd\u65b0\u5b9e\u73b0 lower_bound \u548c upper_bound\n// \u65f6\u95f4\u590d\u6742\u5ea6O(logn)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public int[] searchRange(int[] nums, int target) {\n        int lower = lower_bound(nums, 0, nums.length, target);\n        int upper = upper_bound(nums, 0, nums.length, target);\n\n        if (lower == nums.length || nums[lower] != target)\n            return new int[]{-1, -1};\n        else\n            return new int[]{lower, upper-1};\n    }\n\n    int lower_bound (int[] A, int first, int last, int target) {\n        while (first != last) {\n            int mid = first + (last - first) / 2;\n            if (target > A[mid]) first = ++mid;\n            else                 last = mid;\n        }\n\n        return first;\n    }\n\n    int upper_bound (int[] A, int first, int last, int target) {\n        while (first != last) {\n            int mid = first + (last - first) / 2;\n            if (target >= A[mid]) first = ++mid;  // \u4e0e lower_bound \u4ec5\u6b64\u4e0d\u540c\n            else                  last = mid;\n        }\n\n        return first;\n    }\n}\n"})})}),(0,a.jsx)(i.A,{value:"cpp",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"// Search for a Range\n// \u91cd\u65b0\u5b9e\u73b0 lower_bound \u548c upper_bound\n// \u65f6\u95f4\u590d\u6742\u5ea6O(logn)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    vector<int> searchRange (vector<int>& nums, int target) {\n        auto lower = lower_bound(nums.begin(), nums.end(), target);\n        auto uppper = upper_bound(lower, nums.end(), target);\n\n        if (lower == nums.end() || *lower != target)\n            return vector<int> { -1, -1 };\n        else\n            return vector<int> {distance(nums.begin(), lower), distance(nums.begin(), prev(uppper))};\n    }\n\n    template<typename ForwardIterator, typename T>\n    ForwardIterator lower_bound (ForwardIterator first,\n            ForwardIterator last, T value) {\n        while (first != last) {\n            auto mid = next(first, distance(first, last) / 2);\n\n            if (value > *mid) first = ++mid;\n            else              last = mid;\n        }\n\n        return first;\n    }\n\n    template<typename ForwardIterator, typename T>\n    ForwardIterator upper_bound (ForwardIterator first,\n            ForwardIterator last, T value) {\n        while (first != last) {\n            auto mid = next(first, distance (first, last) / 2);\n\n            if (value >= *mid) first = ++mid;  // \u4e0e lower_bound \u4ec5\u6b64\u4e0d\u540c\n            else               last = mid;\n        }\n\n        return first;\n    }\n};\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"\u76f8\u5173\u9898\u76ee",children:"\u76f8\u5173\u9898\u76ee"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/search/search-insert-position",children:"Search Insert Position"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>l});r(96540);var t=r(34164);const a={tabItem:"tabItem_Ymn6"};var s=r(74848);function l(e){let{children:n,hidden:r,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,l),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>y});var t=r(96540),a=r(34164),s=r(23104),l=r(56347),i=r(205),o=r(57485),u=r(31682),c=r(70679);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}(r);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function h(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:r}=e;const a=(0,l.W6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,o.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function m(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,s=p(e),[l,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[u,d]=f({queryString:r,groupId:a}),[m,b]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,c.Dv)(r);return[a,(0,t.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),v=(()=>{const e=u??m;return h({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{v&&o(v)}),[v]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=r(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(74848);function w(e){let{className:n,block:r,selectedValue:t,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const n=e.currentTarget,r=o.indexOf(n),a=i[r].value;a!==t&&(u(n),l(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;n=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;n=o[r]??o[o.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},n),children:i.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function x(e){let{lazy:n,children:r,selectedValue:s}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function j(e){const n=m(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,g.jsx)(w,{...n,...e}),(0,g.jsx)(x,{...n,...e})]})}function y(e){const n=(0,b.A)();return(0,g.jsx)(j,{...e,children:d(e.children)},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>i});var t=r(96540);const a={},s=t.createContext(a);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);