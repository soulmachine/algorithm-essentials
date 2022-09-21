"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[9675],{3905:(a,e,t)=>{t.d(e,{Zo:()=>o,kt:()=>u});var n=t(7294);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function m(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function r(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},m=Object.keys(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var l=n.createContext({}),i=function(a){var e=n.useContext(l),t=e;return a&&(t="function"==typeof a?a(e):r(r({},e),a)),t},o=function(a){var e=i(a.components);return n.createElement(l.Provider,{value:e},a.children)},c={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(a,e){var t=a.components,s=a.mdxType,m=a.originalType,l=a.parentName,o=p(a,["components","mdxType","originalType","parentName"]),N=i(t),u=s,k=N["".concat(l,".").concat(u)]||N[u]||c[u]||m;return t?n.createElement(k,r(r({ref:e},o),{},{components:t})):n.createElement(k,r({ref:e},o))}));function u(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var m=t.length,r=new Array(m);r[0]=N;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=a,p.mdxType="string"==typeof a?a:s,r[1]=p;for(var i=2;i<m;i++)r[i]=t[i];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}N.displayName="MDXCreateElement"},5162:(a,e,t)=>{t.d(e,{Z:()=>r});var n=t(7294),s=t(6010);const m="tabItem_Ymn6";function r(a){let{children:e,hidden:t,className:r}=a;return n.createElement("div",{role:"tabpanel",className:(0,s.Z)(m,r),hidden:t},e)}},5488:(a,e,t)=>{t.d(e,{Z:()=>u});var n=t(7462),s=t(7294),m=t(6010),r=t(2389),p=t(7392),l=t(7094),i=t(2466);const o="tabList__CuJ",c="tabItem_LNqP";function N(a){var e;const{lazy:t,block:r,defaultValue:N,values:u,groupId:k,className:h}=a,d=s.Children.map(a.children,(a=>{if((0,s.isValidElement)(a)&&"value"in a.props)return a;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof a.type?a.type:a.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=u??d.map((a=>{let{props:{value:e,label:t,attributes:n}}=a;return{value:e,label:t,attributes:n}})),v=(0,p.l)(g,((a,e)=>a.value===e.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((a=>a.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===N?N:N??(null==(e=d.find((a=>a.props.default)))?void 0:e.props.value)??d[0].props.value;if(null!==b&&!g.some((a=>a.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${g.map((a=>a.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:y}=(0,l.U)(),[w,O]=(0,s.useState)(b),x=[],{blockElementScrollPositionUntilNextRender:C}=(0,i.o5)();if(null!=k){const a=f[k];null!=a&&a!==w&&g.some((e=>e.value===a))&&O(a)}const T=a=>{const e=a.currentTarget,t=x.indexOf(e),n=g[t].value;n!==w&&(C(e),O(n),null!=k&&y(k,String(n)))},E=a=>{var e;let t=null;switch(a.key){case"ArrowRight":{const e=x.indexOf(a.currentTarget)+1;t=x[e]??x[0];break}case"ArrowLeft":{const e=x.indexOf(a.currentTarget)-1;t=x[e]??x[x.length-1];break}}null==(e=t)||e.focus()};return s.createElement("div",{className:(0,m.Z)("tabs-container",o)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,m.Z)("tabs",{"tabs--block":r},h)},g.map((a=>{let{value:e,label:t,attributes:r}=a;return s.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:a=>x.push(a),onKeyDown:E,onFocus:T,onClick:T},r,{className:(0,m.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":w===e})}),t??e)}))),t?(0,s.cloneElement)(d.filter((a=>a.props.value===w))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},d.map(((a,e)=>(0,s.cloneElement)(a,{key:e,hidden:a.props.value!==w})))))}function u(a){const e=(0,r.Z)();return s.createElement(N,(0,n.Z)({key:String(e)},a))}},2349:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>p,metadata:()=>i,toc:()=>c});var n=t(7462),s=(t(7294),t(3905)),m=t(5488),r=t(5162);const p={title:"Combination Sum"},l=void 0,i={unversionedId:"dfs/combination-sum",id:"dfs/combination-sum",title:"Combination Sum",description:"\u63cf\u8ff0",source:"@site/docs/dfs/combination-sum.md",sourceDirName:"dfs",slug:"/dfs/combination-sum",permalink:"/dfs/combination-sum",draft:!1,tags:[],version:"current",frontMatter:{title:"Combination Sum"},sidebar:"docs",previous:{title:"Restore IP Addresses",permalink:"/dfs/restore-ip-addresses"},next:{title:"Combination Sum II",permalink:"/dfs/combination-sum-ii"}},o={},c=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],N={toc:c};function u(a){let{components:e,...t}=a;return(0,s.kt)("wrapper",(0,n.Z)({},N,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,s.kt)("p",null,"Given a set of candidate numbers (",(0,s.kt)("inlineCode",{parentName:"p"},"C"),") and a target number (",(0,s.kt)("inlineCode",{parentName:"p"},"T"),"), find all unique combinations in ",(0,s.kt)("inlineCode",{parentName:"p"},"C")," where the candidate numbers sums to ",(0,s.kt)("inlineCode",{parentName:"p"},"T"),"."),(0,s.kt)("p",null,"The same repeated number may be chosen from ",(0,s.kt)("inlineCode",{parentName:"p"},"C")," ",(0,s.kt)("strong",{parentName:"p"},"unlimited")," number of times."),(0,s.kt)("p",null,"Note:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"All numbers (including target) will be positive integers."),(0,s.kt)("li",{parentName:"ul"},"Elements in a combination (",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msub"},"a"),(0,s.kt)("mn",{parentName:"msub"},"1")),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msub"},"a"),(0,s.kt)("mn",{parentName:"msub"},"2")),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msub"},"a"),(0,s.kt)("mi",{parentName:"msub"},"k"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a_1, a_2, ..., a_k")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"1")))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,s.kt)("span",{parentName:"span"})))))),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"2")))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,s.kt)("span",{parentName:"span"})))))),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"..."),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3361em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.03148em"}},"k")))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,s.kt)("span",{parentName:"span"})))))))))),") must be in non-descending order. (ie, ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msub"},"a"),(0,s.kt)("mn",{parentName:"msub"},"1")),(0,s.kt)("mo",{parentName:"mrow"},"\u2264"),(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msub"},"a"),(0,s.kt)("mn",{parentName:"msub"},"2")),(0,s.kt)("mo",{parentName:"mrow"},"\u2264"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,s.kt)("mo",{parentName:"mrow"},"\u2264"),(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msub"},"a"),(0,s.kt)("mi",{parentName:"msub"},"k"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a_1 \\leq a_2 \\leq ... \\leq a_k")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.786em",verticalAlign:"-0.15em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"1")))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,s.kt)("span",{parentName:"span"})))))),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2264"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.786em",verticalAlign:"-0.15em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"2")))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,s.kt)("span",{parentName:"span"})))))),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2264"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7719em",verticalAlign:"-0.136em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"..."),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2264"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.5806em",verticalAlign:"-0.15em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3361em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.03148em"}},"k")))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,s.kt)("span",{parentName:"span"})))))))))),")."),(0,s.kt)("li",{parentName:"ul"},"The solution set must not contain duplicate combinations.")),(0,s.kt)("p",null,"For example, given candidate set ",(0,s.kt)("inlineCode",{parentName:"p"},"2,3,6,7")," and target ",(0,s.kt)("inlineCode",{parentName:"p"},"7"),",\nA solution set is:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"[7]\n[2, 2, 3]\n")),(0,s.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,s.kt)("p",null,"\u65e0"),(0,s.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,s.kt)(m.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"java",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"// Combination Sum\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n!)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\npublic class Solution {\n    public List<List<Integer>> combinationSum(int[] nums, int target) {\n        Arrays.sort(nums);\n        List<List<Integer>> result = new ArrayList<>(); // \u6700\u7ec8\u7ed3\u679c\n        List<Integer> path = new ArrayList<>(); // \u4e2d\u95f4\u7ed3\u679c\n        dfs(nums, path, result, target, 0);\n        return result;\n    }\n\n    private static void dfs(int[] nums, List<Integer> path,\n                            List<List<Integer>> result, int gap, int start) {\n        if (gap == 0) {  // \u627e\u5230\u4e00\u4e2a\u5408\u6cd5\u89e3\n            result.add(new ArrayList<Integer>(path));\n            return;\n        }\n        for (int i = start; i < nums.length; i++) { // \u6269\u5c55\u72b6\u6001\n            if (gap < nums[i]) return; // \u526a\u679d\n\n            path.add(nums[i]); // \u6267\u884c\u6269\u5c55\u52a8\u4f5c\n            dfs(nums, path, result, gap - nums[i], i);\n            path.remove(path.size() - 1);  // \u64a4\u9500\u52a8\u4f5c\n        }\n    }\n}\n"))),(0,s.kt)(r.Z,{value:"cpp",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"// Combination Sum\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n!)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\npublic:\n    vector<vector<int> > combinationSum(vector<int> &nums, int target) {\n        sort(nums.begin(), nums.end());\n        vector<vector<int> > result; // \u6700\u7ec8\u7ed3\u679c\n        vector<int> path; // \u4e2d\u95f4\u7ed3\u679c\n        dfs(nums, path, result, target, 0);\n        return result;\n    }\n\nprivate:\n    void dfs(vector<int>& nums, vector<int>& path, vector<vector<int> > &result,\n            int gap, int start) {\n        if (gap == 0) {  // \u627e\u5230\u4e00\u4e2a\u5408\u6cd5\u89e3\n            result.push_back(path);\n            return;\n        }\n        for (size_t i = start; i < nums.size(); i++) { // \u6269\u5c55\u72b6\u6001\n            if (gap < nums[i]) return; // \u526a\u679d\n\n            path.push_back(nums[i]); // \u6267\u884c\u6269\u5c55\u52a8\u4f5c\n            dfs(nums, path, result, gap - nums[i], i);\n            path.pop_back();  // \u64a4\u9500\u52a8\u4f5c\n        }\n    }\n};\n")))),(0,s.kt)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/dfs/combination-sum-ii"},"Combination Sum II")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/dfs/combination-sum-iii"},"Combination Sum III"))))}u.isMDXComponent=!0}}]);