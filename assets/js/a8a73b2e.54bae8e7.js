"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[4732],{58861:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>m,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"array/two-sum","title":"2Sum","description":"\u63cf\u8ff0","source":"@site/docs/array/two-sum.md","sourceDirName":"array","slug":"/array/two-sum","permalink":"/array/two-sum","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"2Sum"},"sidebar":"docs","previous":{"title":"Longest Consecutive Sequence","permalink":"/dual-pointers/longest-consecutive-sequence"},"next":{"title":"4Sum II","permalink":"/array/4sum-ii"}}');var a=s(74848),l=s(28453),r=s(11470),i=s(19365);const c={title:"2Sum"},o=void 0,m={},u=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"HashMap + \u4e24\u6b21\u904d\u5386",id:"hashmap--\u4e24\u6b21\u904d\u5386",level:4},{value:"HashMap + \u5355\u6b21\u904d\u5386",id:"hashmap--\u5355\u6b21\u904d\u5386",level:4},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}];function h(e){const n={a:"a",annotation:"annotation",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,a.jsx)(n.p,{children:"Given an array of integers, find two numbers such that they add up to a specific target number."}),"\n",(0,a.jsx)(n.p,{children:"The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Input"}),": nums = [2,7,11,15], target = 9"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Output"}),": [0,1]"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Input"}),": nums = [3,2,4], target = 6"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Output"}),": [1,2]"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example 3:"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Input"}),": nums = [3,3], target = 6"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Output"}),": [0,1]"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"2 \\leq nums.length \\leq 10^5"}),"\n",(0,a.jsx)(n.li,{children:"-10^9 \\leq nums[i] \\leq 10^9"}),"\n",(0,a.jsx)(n.li,{children:"-10^9 \\leq target  $\\leq 10^9"}),"\n",(0,a.jsx)(n.li,{children:"Only one valid answer exists."}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,a.jsxs)(n.p,{children:["\u65b9\u6cd5 1\uff1a\u66b4\u529b\uff0c\u590d\u6742\u5ea6",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"O"}),(0,a.jsx)(n.mo,{stretchy:"false",children:"("}),(0,a.jsxs)(n.msup,{children:[(0,a.jsx)(n.mi,{children:"n"}),(0,a.jsx)(n.mn,{children:"2"})]}),(0,a.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(n^2)"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(n.span,{className:"mopen",children:"("}),(0,a.jsxs)(n.span,{className:"mord",children:[(0,a.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(n.span,{className:"msupsub",children:(0,a.jsx)(n.span,{className:"vlist-t",children:(0,a.jsx)(n.span,{className:"vlist-r",children:(0,a.jsx)(n.span,{className:"vlist",style:{height:"0.8141em"},children:(0,a.jsxs)(n.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,a.jsx)(n.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(n.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(n.span,{className:"mord mtight",children:"2"})})]})})})})})]}),(0,a.jsx)(n.span,{className:"mclose",children:")"})]})})]}),"\uff0c\u4f1a\u8d85\u65f6"]}),"\n",(0,a.jsxs)(n.p,{children:["\u65b9\u6cd5 2\uff1ahash\u3002\u7528\u4e00\u4e2a\u54c8\u5e0c\u8868\uff0c\u5b58\u50a8\u6bcf\u4e2a\u6570\u5bf9\u5e94\u7684\u4e0b\u6807\uff0c\u590d\u6742\u5ea6",(0,a.jsx)(n.code,{children:"O(n)"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["\u65b9\u6cd5 3\uff1a\u5148\u6392\u5e8f\uff0c\u7136\u540e\u5de6\u53f3\u5939\u903c\uff0c\u6392\u5e8f",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"O"}),(0,a.jsx)(n.mo,{stretchy:"false",children:"("}),(0,a.jsx)(n.mi,{children:"n"}),(0,a.jsx)(n.mi,{children:"log"}),(0,a.jsx)(n.mo,{children:"\u2061"}),(0,a.jsx)(n.mi,{children:"n"}),(0,a.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(n\\log n)"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(n.span,{className:"mopen",children:"("}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsxs)(n.span,{className:"mop",children:["lo",(0,a.jsx)(n.span,{style:{marginRight:"0.01389em"},children:"g"})]}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(n.span,{className:"mclose",children:")"})]})})]}),"\uff0c\u5de6\u53f3\u5939\u903c",(0,a.jsx)(n.code,{children:"O(n)"}),"\uff0c\u6700\u7ec8",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"O"}),(0,a.jsx)(n.mo,{stretchy:"false",children:"("}),(0,a.jsx)(n.mi,{children:"n"}),(0,a.jsx)(n.mi,{children:"log"}),(0,a.jsx)(n.mo,{children:"\u2061"}),(0,a.jsx)(n.mi,{children:"n"}),(0,a.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(n\\log n)"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(n.span,{className:"mopen",children:"("}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsxs)(n.span,{className:"mop",children:["lo",(0,a.jsx)(n.span,{style:{marginRight:"0.01389em"},children:"g"})]}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(n.span,{className:"mclose",children:")"})]})})]}),"\u3002\u4f46\u662f\u6ce8\u610f\uff0c\u8fd9\u9898\u9700\u8981\u8fd4\u56de\u7684\u662f\u4e0b\u6807\uff0c\u800c\u4e0d\u662f\u6570\u5b57\u672c\u8eab\uff0c\u56e0\u6b64\u8fd9\u4e2a\u65b9\u6cd5\u884c\u4e0d\u901a\u3002"]}),"\n",(0,a.jsx)(n.h3,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n","\n",(0,a.jsx)(n.h4,{id:"hashmap--\u4e24\u6b21\u904d\u5386",children:"HashMap + \u4e24\u6b21\u904d\u5386"}),"\n",(0,a.jsxs)(r.A,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,a.jsx)(i.A,{value:"python",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"# Two Sum\n# \u65b9\u6cd52\uff1aHashMap + \u4e24\u6b21\u904d\u5386\u3002\u7528\u4e00\u4e2a\u54c8\u5e0c\u8868\uff0c\u5b58\u50a8\u6bcf\u4e2a\u6570\u5bf9\u5e94\u7684\u4e0b\u6807\n# Time Complexity: O(n)\uff0cSpace Complexity: O(n)\nclass Solution:\n    def twoSum(self, nums: List[int], target: int) -> List[int]:\n        m = {num: i for i, num in enumerate(nums)}\n\n        for i, num in enumerate(nums):\n            complement = m.get(target - num)\n            if complement is not None and complement > i:\n                return [i, complement]\n\n        return None\n"})})}),(0,a.jsx)(i.A,{value:"java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"// Two Sum\n// \u65b9\u6cd52\uff1aHashMap + \u4e24\u6b21\u904d\u5386\u3002\u7528\u4e00\u4e2a\u54c8\u5e0c\u8868\uff0c\u5b58\u50a8\u6bcf\u4e2a\u6570\u5bf9\u5e94\u7684\u4e0b\u6807\n// Time Complexity: O(n)\uff0cSpace Complexity: O(n)\npublic class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        Map<Integer, Integer> m = new HashMap<>();\n        for (int i = 0; i < nums.length; i++) {\n            m.put(nums[i], i);\n        }\n        for (int i = 0; i < nums.length; i++) {\n            final Integer complement = m.get(target-nums[i]);\n            if (complement != null && complement > i) {\n                return new int[]{i, complement};\n            }\n        }\n        return null;\n    }\n};\n"})})}),(0,a.jsx)(i.A,{value:"cpp",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"// Two Sum\n// \u65b9\u6cd52\uff1aHashMap + \u4e24\u6b21\u904d\u5386\u3002\u7528\u4e00\u4e2a\u54c8\u5e0c\u8868\uff0c\u5b58\u50a8\u6bcf\u4e2a\u6570\u5bf9\u5e94\u7684\u4e0b\u6807\n// Time Complexity: O(n)\uff0cSpace Complexity: O(n)\nclass Solution {\npublic:\n    vector<int> twoSum(vector<int>& nums, int target) {\n        unordered_map<int, int> m;\n        for (int i = 0; i < nums.size(); i++) {\n            m[nums[i]] = i;\n        }\n        for (int i = 0; i < nums.size(); i++) {\n            auto complement = m.find(target - nums[i]);\n            if (complement != m.end() && complement->second > i) {\n                return {i, complement->second};\n            }\n        }\n        return {-1, -1};\n    }\n};\n"})})})]}),"\n",(0,a.jsx)(n.h4,{id:"hashmap--\u5355\u6b21\u904d\u5386",children:"HashMap + \u5355\u6b21\u904d\u5386"}),"\n",(0,a.jsx)(n.p,{children:"\u4e0a\u9762\u7684\u65b9\u6cd5\u53ef\u4ee5\u4f18\u5316\u4e00\u4e0b\uff0c\u53ea\u9700\u8981\u4e00\u6b21\u904d\u5386\u3002"}),"\n",(0,a.jsxs)(r.A,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,a.jsx)(i.A,{value:"python",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"# Two Sum\n# \u65b9\u6cd52\uff1aHashMap + \u5355\u6b21\u904d\u5386\u3002\u7528\u4e00\u4e2a\u54c8\u5e0c\u8868\uff0c\u5b58\u50a8\u6bcf\u4e2a\u6570\u5bf9\u5e94\u7684\u4e0b\u6807\n# Time Complexity: O(n)\uff0cSpace Complexity: O(n)\nclass Solution:\n    def twoSum(self, nums: List[int], target: int) -> List[int]:\n        m = {}\n        for i, num in enumerate(nums):\n            complement = m.get(target - num)\n            if complement is not None:\n                return [i, complement]\n            m[num] = i\n        return None\n"})})}),(0,a.jsx)(i.A,{value:"java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"// Two Sum\n// \u65b9\u6cd52\uff1aHashMap + \u5355\u6b21\u904d\u5386\u3002\u7528\u4e00\u4e2a\u54c8\u5e0c\u8868\uff0c\u5b58\u50a8\u6bcf\u4e2a\u6570\u5bf9\u5e94\u7684\u4e0b\u6807\n// Time Complexity: O(n)\uff0cSpace Complexity: O(n)\npublic class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        Map<Integer, Integer> m = new HashMap<>();\n        for (int i = 0; i < nums.length; i++) {\n            final Integer complement = m.get(target-nums[i]);\n            if (complement != null) {\n                return new int[]{i, complement};\n            }\n            m.put(nums[i], i);\n        }\n        return new int[]{-1, -1};\n    }\n};\n"})})}),(0,a.jsx)(i.A,{value:"cpp",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"// Two Sum\n// \u65b9\u6cd52\uff1aHashMap + \u5355\u6b21\u904d\u5386\u3002\u7528\u4e00\u4e2a\u54c8\u5e0c\u8868\uff0c\u5b58\u50a8\u6bcf\u4e2a\u6570\u5bf9\u5e94\u7684\u4e0b\u6807\n// Time Complexity: O(n)\uff0cSpace Complexity: O(n)\nclass Solution {\npublic:\n    vector<int> twoSum(vector<int>& nums, int target) {\n        unordered_map<int, int> m;\n        for (int i = 0; i < nums.size(); i++) {\n            auto complement = m.find(target - nums[i]);\n            if (complement != m.end()) {\n                return {i, complement->second};\n            }\n            m[nums[i]] = i;\n        }\n        return {-1, -1};\n    }\n};\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"\u76f8\u5173\u9898\u76ee",children:"\u76f8\u5173\u9898\u76ee"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/dual-pointers/two-sum-ii-input-array-is-sorted",children:"2Sum II"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/dual-pointers/3sum",children:"3Sum"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/dual-pointers/3sum-closest",children:"3Sum Closest"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/dual-pointers/4sum",children:"4Sum"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/array/4sum-ii",children:"4Sum II"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,n,s)=>{s.d(n,{A:()=>r});s(96540);var t=s(34164);const a={tabItem:"tabItem_Ymn6"};var l=s(74848);function r(e){let{children:n,hidden:s,className:r}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,r),hidden:s,children:n})}},11470:(e,n,s)=>{s.d(n,{A:()=>w});var t=s(96540),a=s(34164),l=s(23104),r=s(56347),i=s(205),c=s(57485),o=s(31682),m=s(70679);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:s}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:s,attributes:t,default:a}}=e;return{value:n,label:s,attributes:t,default:a}}))}(s);return function(e){const n=(0,o.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function d(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:s}=e;const a=(0,r.W6)(),l=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,c.aZ)(l),(0,t.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function x(e){const{defaultValue:n,queryString:s=!1,groupId:a}=e,l=h(e),[r,c]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:l}))),[o,u]=p({queryString:s,groupId:a}),[x,j]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,m.Dv)(s);return[a,(0,t.useCallback)((e=>{s&&l.set(e)}),[s,l])]}({groupId:a}),g=(()=>{const e=o??x;return d({value:e,tabValues:l})?e:null})();(0,i.A)((()=>{g&&c(g)}),[g]);return{selectedValue:r,selectValue:(0,t.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),j(e)}),[u,j,l]),tabValues:l}}var j=s(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=s(74848);function v(e){let{className:n,block:s,selectedValue:t,selectValue:r,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,l.a_)(),m=e=>{const n=e.currentTarget,s=c.indexOf(n),a=i[s].value;a!==t&&(o(n),r(a))},u=e=>{let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const s=c.indexOf(e.currentTarget)+1;n=c[s]??c[0];break}case"ArrowLeft":{const s=c.indexOf(e.currentTarget)-1;n=c[s]??c[c.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":s},n),children:i.map((e=>{let{value:n,label:s,attributes:l}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>c.push(e),onKeyDown:u,onClick:m,...l,className:(0,a.A)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":t===n}),children:s??n},n)}))})}function b(e){let{lazy:n,children:s,selectedValue:l}=e;const r=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===l));return e?(0,t.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function y(e){const n=x(e);return(0,f.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,f.jsx)(v,{...n,...e}),(0,f.jsx)(b,{...n,...e})]})}function w(e){const n=(0,j.A)();return(0,f.jsx)(y,{...e,children:u(e.children)},String(n))}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>i});var t=s(96540);const a={},l=t.createContext(a);function r(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);