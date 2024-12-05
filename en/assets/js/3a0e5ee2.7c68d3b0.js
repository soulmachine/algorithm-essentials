"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[2189],{48306:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>u,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"greedy/jump-game-ii","title":"Jump Game II","description":"\u63cf\u8ff0","source":"@site/docs/greedy/jump-game-ii.md","sourceDirName":"greedy","slug":"/greedy/jump-game-ii","permalink":"/en/greedy/jump-game-ii","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Jump Game II"},"sidebar":"docs","previous":{"title":"Jump Game","permalink":"/en/greedy/jump-game"},"next":{"title":"Best Time to Buy and Sell Stock","permalink":"/en/greedy/best-time-to-buy-and-sell-stock"}}');var a=t(74848),i=t(28453),l=t(11470),s=t(19365);const u={title:"Jump Game II"},o=void 0,c={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801 1",id:"\u4ee3\u7801-1",level:3},{value:"\u4ee3\u7801 2",id:"\u4ee3\u7801-2",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}];function h(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,a.jsx)(n.p,{children:"Given an array of non-negative integers, you are initially positioned at the first index of the array."}),"\n",(0,a.jsx)(n.p,{children:"Each element in the array represents your maximum jump length at that position."}),"\n",(0,a.jsx)(n.p,{children:"Your goal is to reach the last index in the minimum number of jumps."}),"\n",(0,a.jsxs)(n.p,{children:["For example:\nGiven array ",(0,a.jsx)(n.code,{children:"A = [2,3,1,1,4]"})]}),"\n",(0,a.jsx)(n.p,{children:"The minimum number of jumps to reach the last index is 2. (Jump 1 step from index 0 to 1, then 3 steps to the last index.)"}),"\n",(0,a.jsx)(n.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,a.jsx)(n.p,{children:"\u8d2a\u5fc3\u6cd5\u3002"}),"\n",(0,a.jsx)(n.h3,{id:"\u4ee3\u7801-1",children:"\u4ee3\u7801 1"}),"\n","\n",(0,a.jsxs)(l.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,a.jsx)(s.A,{value:"java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"// Jump Game II\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public int jump(int[] nums) {\n        int step = 0; // \u6700\u5c0f\u6b65\u6570\n        int left = 0;\n        int right = 0;  // [left, right]\u662f\u5f53\u524d\u80fd\u8986\u76d6\u7684\u533a\u95f4\n        if (nums.length == 1) return 0;\n\n        while (left <= right) { // \u5c1d\u8bd5\u4ece\u6bcf\u4e00\u5c42\u8df3\u6700\u8fdc\n            ++step;\n            final int old_right = right;\n            for (int i = left; i <= old_right; ++i) {\n                int new_right = i + nums[i];\n                if (new_right >= nums.length - 1) return step;\n\n                if (new_right > right) right = new_right;\n            }\n            left = old_right + 1;\n        }\n        return 0;\n    }\n}\n"})})}),(0,a.jsx)(s.A,{value:"cpp",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"// LeetCode, Jump Game II\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    int jump(const vector<int>& nums) {\n        int step = 0; // \u6700\u5c0f\u6b65\u6570\n        int left = 0;\n        int right = 0;  // [left, right]\u662f\u5f53\u524d\u80fd\u8986\u76d6\u7684\u533a\u95f4\n        if (nums.size() == 1) return 0;\n\n        while (left <= right) { // \u5c1d\u8bd5\u4ece\u6bcf\u4e00\u5c42\u8df3\u6700\u8fdc\n            ++step;\n            const int old_right = right;\n            for (int i = left; i <= old_right; ++i) {\n                int new_right = i + nums[i];\n                if (new_right >= nums.size() - 1) return step;\n\n                if (new_right > right) right = new_right;\n            }\n            left = old_right + 1;\n        }\n        return 0;\n    }\n};\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"\u4ee3\u7801-2",children:"\u4ee3\u7801 2"}),"\n",(0,a.jsxs)(l.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,a.jsx)(s.A,{value:"java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'// Jump Game II\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public int jump(int[] nums) {\n        int result = 0;\n        // the maximum distance that has been reached\n        int last = 0;\n        // the maximum distance that can be reached by using "ret+1" steps\n        int cur = 0;\n        for (int i = 0; i < nums.length; ++i) {\n            if (i > last) {\n                last = cur;\n                ++result;\n            }\n            cur = Math.max(cur, i + nums[i]);\n        }\n\n        return result;\n    }\n}\n'})})}),(0,a.jsx)(s.A,{value:"cpp",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:'// Jump Game II\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    int jump(const vector<int>& nums) {\n        int result = 0;\n        // the maximum distance that has been reached\n        int last = 0;\n        // the maximum distance that can be reached by using "ret+1" steps\n        int cur = 0;\n        for (int i = 0; i < nums.size(); ++i) {\n            if (i > last) {\n                last = cur;\n                ++result;\n            }\n            cur = max(cur, i + nums[i]);\n        }\n\n        return result;\n    }\n};\n'})})})]}),"\n",(0,a.jsx)(n.h3,{id:"\u76f8\u5173\u9898\u76ee",children:"\u76f8\u5173\u9898\u76ee"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/en/greedy/jump-game",children:"Jump Game"})}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>l});t(96540);var r=t(34164);const a={tabItem:"tabItem_Ymn6"};var i=t(74848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,l),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>I});var r=t(96540),a=t(34164),i=t(23104),l=t(56347),s=t(205),u=t(57485),o=t(31682),c=t(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,o.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const a=(0,l.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,u.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,i=h(e),[l,u]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[o,d]=p({queryString:t,groupId:a}),[f,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,c.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:a}),b=(()=>{const e=o??f;return m({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{b&&u(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),g(e)}),[d,g,i]),tabValues:i}}var g=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(74848);function x(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:o}=(0,i.a_)(),c=e=>{const n=e.currentTarget,t=u.indexOf(n),a=s[t].value;a!==r&&(o(n),l(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>u.push(e),onKeyDown:d,onClick:c,...i,className:(0,a.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:i}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function y(e){const n=f(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,v.jsx)(x,{...n,...e}),(0,v.jsx)(j,{...n,...e})]})}function I(e){const n=(0,g.A)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>s});var r=t(96540);const a={},i=r.createContext(a);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);