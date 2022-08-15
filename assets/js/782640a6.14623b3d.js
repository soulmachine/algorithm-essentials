"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[9707],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>N});var s=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,s)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function m(e,a){if(null==e)return{};var t,s,n=function(e,a){if(null==e)return{};var t,s,n={},r=Object.keys(e);for(s=0;s<r.length;s++)t=r[s],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)t=r[s],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=s.createContext({}),i=function(e){var a=s.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},u=function(e){var a=i(e.components);return s.createElement(l.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return s.createElement(s.Fragment,{},a)}},o=s.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,u=m(e,["components","mdxType","originalType","parentName"]),o=i(t),N=n,k=o["".concat(l,".").concat(N)]||o[N]||c[N]||r;return t?s.createElement(k,p(p({ref:a},u),{},{components:t})):s.createElement(k,p({ref:a},u))}));function N(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,p=new Array(r);p[0]=o;var m={};for(var l in a)hasOwnProperty.call(a,l)&&(m[l]=a[l]);m.originalType=e,m.mdxType="string"==typeof e?e:n,p[1]=m;for(var i=2;i<r;i++)p[i]=t[i];return s.createElement.apply(null,p)}return s.createElement.apply(null,t)}o.displayName="MDXCreateElement"},5162:(e,a,t)=>{t.d(a,{Z:()=>p});var s=t(7294),n=t(6010);const r="tabItem_Ymn6";function p(e){let{children:a,hidden:t,className:p}=e;return s.createElement("div",{role:"tabpanel",className:(0,n.Z)(r,p),hidden:t},a)}},5488:(e,a,t)=>{t.d(a,{Z:()=>N});var s=t(7462),n=t(7294),r=t(6010),p=t(2389),m=t(7392),l=t(7094),i=t(2466);const u="tabList__CuJ",c="tabItem_LNqP";function o(e){var a,t;const{lazy:p,block:o,defaultValue:N,values:k,groupId:v,className:h}=e,b=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),d=null!=k?k:b.map((e=>{let{props:{value:a,label:t,attributes:s}}=e;return{value:a,label:t,attributes:s}})),g=(0,m.l)(d,((e,a)=>e.value===a.value));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===N?N:null!=(a=null!=N?N:null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)?a:b[0].props.value;if(null!==y&&!d.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+d.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:f,setTabGroupChoices:w}=(0,l.U)(),[S,L]=(0,n.useState)(y),x=[],{blockElementScrollPositionUntilNextRender:O}=(0,i.o5)();if(null!=v){const e=f[v];null!=e&&e!==S&&d.some((a=>a.value===e))&&L(e)}const T=e=>{const a=e.currentTarget,t=x.indexOf(a),s=d[t].value;s!==S&&(O(a),L(s),null!=v&&w(v,String(s)))},j=e=>{var a;let t=null;switch(e.key){case"ArrowRight":{var s;const a=x.indexOf(e.currentTarget)+1;t=null!=(s=x[a])?s:x[0];break}case"ArrowLeft":{var n;const a=x.indexOf(e.currentTarget)-1;t=null!=(n=x[a])?n:x[x.length-1];break}}null==(a=t)||a.focus()};return n.createElement("div",{className:(0,r.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},h)},d.map((e=>{let{value:a,label:t,attributes:p}=e;return n.createElement("li",(0,s.Z)({role:"tab",tabIndex:S===a?0:-1,"aria-selected":S===a,key:a,ref:e=>x.push(e),onKeyDown:j,onFocus:T,onClick:T},p,{className:(0,r.Z)("tabs__item",c,null==p?void 0:p.className,{"tabs__item--active":S===a})}),null!=t?t:a)}))),p?(0,n.cloneElement)(b.filter((e=>e.props.value===S))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},b.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==S})))))}function N(e){const a=(0,p.Z)();return n.createElement(o,(0,s.Z)({key:String(a)},e))}},2918:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>l,default:()=>N,frontMatter:()=>m,metadata:()=>i,toc:()=>c});var s=t(7462),n=(t(7294),t(3905)),r=t(5488),p=t(5162);const m={title:"Subsets"},l=void 0,i={unversionedId:"brute-force/subsets",id:"brute-force/subsets",title:"Subsets",description:"\u63cf\u8ff0",source:"@site/docs/brute-force/subsets.md",sourceDirName:"brute-force",slug:"/brute-force/subsets",permalink:"/brute-force/subsets",draft:!1,editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/brute-force/subsets.md",tags:[],version:"current",frontMatter:{title:"Subsets"},sidebar:"someSidebar",previous:{title:"Random Pick with Weight",permalink:"/search/random-pick-with-weight"},next:{title:"Subsets II",permalink:"/brute-force/subsets-ii"}},u={},c=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u9012\u5f52",id:"\u9012\u5f52",level:3},{value:"\u589e\u91cf\u6784\u9020\u6cd5",id:"\u589e\u91cf\u6784\u9020\u6cd5",level:4},{value:"\u4f4d\u5411\u91cf\u6cd5",id:"\u4f4d\u5411\u91cf\u6cd5",level:4},{value:"\u8fed\u4ee3",id:"\u8fed\u4ee3",level:3},{value:"\u589e\u91cf\u6784\u9020\u6cd5",id:"\u589e\u91cf\u6784\u9020\u6cd5-1",level:4},{value:"\u4e8c\u8fdb\u5236\u6cd5",id:"\u4e8c\u8fdb\u5236\u6cd5",level:4},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],o={toc:c};function N(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,s.Z)({},o,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,n.kt)("p",null,"Given a set of distinct integers, ",(0,n.kt)("inlineCode",{parentName:"p"},"S"),", return all possible subsets."),(0,n.kt)("p",null,"Note:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Elements in a subset must be in non-descending order."),(0,n.kt)("li",{parentName:"ul"},"The solution set must not contain duplicate subsets.")),(0,n.kt)("p",null,"For example, If ",(0,n.kt)("inlineCode",{parentName:"p"},"S = [1,2,3]"),", a solution is:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"[\n  [3],\n  [1],\n  [2],\n  [1,2,3],\n  [1,3],\n  [2,3],\n  [1,2],\n  []\n]\n")),(0,n.kt)("h3",{id:"\u9012\u5f52"},"\u9012\u5f52"),(0,n.kt)("h4",{id:"\u589e\u91cf\u6784\u9020\u6cd5"},"\u589e\u91cf\u6784\u9020\u6cd5"),(0,n.kt)("p",null,"\u6bcf\u4e2a\u5143\u7d20\uff0c\u90fd\u6709\u4e24\u79cd\u9009\u62e9\uff0c\u9009\u6216\u8005\u4e0d\u9009\u3002"),(0,n.kt)(r.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,n.kt)(p.Z,{value:"java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// Subsets\n// \u589e\u91cf\u6784\u9020\u6cd5\uff0c\u6df1\u641c\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(2^n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\npublic class Solution {\n    public List<List<Integer>> subsets(int[] nums) {\n        Arrays.sort(nums); // \u8f93\u51fa\u8981\u6c42\u6709\u5e8f\n        List<List<Integer>> result = new ArrayList<>();\n        List<Integer> path = new ArrayList<>();\n        subsets(nums, path, 0, result);\n        return result;\n    }\n\n    private static void subsets(int[] nums, List<Integer> path, int step,\n                                List<List<Integer>> result) {\n        if (step == nums.length) {\n            result.add(new ArrayList<Integer>(path));\n            return;\n        }\n        // \u4e0d\u9009nums[step]\n        subsets(nums, path, step + 1, result);\n        // \u9009nums[step]\n        path.add(nums[step]);\n        subsets(nums, path, step + 1, result);\n        path.remove(path.size() - 1);\n    }\n}\n"))),(0,n.kt)(p.Z,{value:"cpp",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"// Subsets\n// \u589e\u91cf\u6784\u9020\u6cd5\uff0c\u6df1\u641c\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(2^n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\npublic:\n    vector<vector<int> > subsets(vector<int> &S) {\n        sort(S.begin(), S.end());  // \u8f93\u51fa\u8981\u6c42\u6709\u5e8f\n        vector<vector<int> > result;\n        vector<int> path;\n        subsets(S, path, 0, result);\n        return result;\n    }\n\nprivate:\n    static void subsets(const vector<int> &S, vector<int> &path, int step,\n            vector<vector<int> > &result) {\n        if (step == S.size()) {\n            result.push_back(path);\n            return;\n        }\n        // \u4e0d\u9009S[step]\n        subsets(S, path, step + 1, result);\n        // \u9009S[step]\n        path.push_back(S[step]);\n        subsets(S, path, step + 1, result);\n        path.pop_back();\n    }\n};\n")))),(0,n.kt)("h4",{id:"\u4f4d\u5411\u91cf\u6cd5"},"\u4f4d\u5411\u91cf\u6cd5"),(0,n.kt)("p",null,"\u5f00\u4e00\u4e2a\u4f4d\u5411\u91cf",(0,n.kt)("inlineCode",{parentName:"p"},"bool selected[n]"),"\uff0c\u6bcf\u4e2a\u5143\u7d20\u53ef\u4ee5\u9009\u6216\u8005\u4e0d\u9009\u3002"),(0,n.kt)(r.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,n.kt)(p.Z,{value:"java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// Subsets\n// \u4f4d\u5411\u91cf\u6cd5\uff0c\u6df1\u641c\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(2^n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\npublic class Solution {\n    public List<List<Integer>> subsets(int[] nums) {\n        Arrays.sort(nums);  // \u8f93\u51fa\u8981\u6c42\u6709\u5e8f\n\n        List<List<Integer>> result = new ArrayList<>();\n        boolean[] selected = new boolean[nums.length];\n        subsets(nums, selected, 0, result);\n        return result;\n    }\n\n    private static void subsets(int[] nums, boolean[] selected, int step,\n                        List<List<Integer>> result) {\n        if (step == nums.length) {\n            ArrayList<Integer> subset = new ArrayList<>();\n            for (int i = 0; i < nums.length; i++) {\n                if (selected[i]) subset.add(nums[i]);\n            }\n            result.add(subset);\n            return;\n        }\n        // \u4e0d\u9009S[step]\n        selected[step] = false;\n        subsets(nums, selected, step + 1, result);\n        // \u9009S[step]\n        selected[step] = true;\n        subsets(nums, selected, step + 1, result);\n    }\n}\n"))),(0,n.kt)(p.Z,{value:"cpp",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"// Subsets\n// \u4f4d\u5411\u91cf\u6cd5\uff0c\u6df1\u641c\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(2^n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\npublic:\n    vector<vector<int> > subsets(vector<int> &S) {\n        sort(S.begin(), S.end());  // \u8f93\u51fa\u8981\u6c42\u6709\u5e8f\n\n        vector<vector<int> > result;\n        vector<bool> selected(S.size(), false);\n        subsets(S, selected, 0, result);\n        return result;\n    }\n\nprivate:\n    static void subsets(const vector<int> &S, vector<bool> &selected, int step,\n            vector<vector<int> > &result) {\n        if (step == S.size()) {\n            vector<int> subset;\n            for (int i = 0; i < S.size(); i++) {\n                if (selected[i]) subset.push_back(S[i]);\n            }\n            result.push_back(subset);\n            return;\n        }\n        // \u4e0d\u9009S[step]\n        selected[step] = false;\n        subsets(S, selected, step + 1, result);\n        // \u9009S[step]\n        selected[step] = true;\n        subsets(S, selected, step + 1, result);\n    }\n};\n")))),(0,n.kt)("h3",{id:"\u8fed\u4ee3"},"\u8fed\u4ee3"),(0,n.kt)("h4",{id:"\u589e\u91cf\u6784\u9020\u6cd5-1"},"\u589e\u91cf\u6784\u9020\u6cd5"),(0,n.kt)(r.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,n.kt)(p.Z,{value:"java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// Subsets\n// \u8fed\u4ee3\u7248\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(2^n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public List<List<Integer>> subsets(int[] nums) {\n        Arrays.sort(nums); // \u8f93\u51fa\u8981\u6c42\u6709\u5e8f\n        List<List<Integer>> result = new ArrayList<>();\n        result.add(new ArrayList<>()); // empty subset\n        for (int elem : nums) {\n            final int n = result.size();\n            for (int i = 0; i < n; ++i) { // copy itself\n                result.add(new ArrayList<>(result.get(i)));\n            }\n            for (int i = n; i < result.size(); ++i) {\n                result.get(i).add(elem);\n            }\n        }\n        return result;\n    }\n}\n"))),(0,n.kt)(p.Z,{value:"cpp",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"// Subsets\n// \u8fed\u4ee3\u7248\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(2^n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    vector<vector<int> > subsets(vector<int> &S) {\n        sort(S.begin(), S.end()); // \u8f93\u51fa\u8981\u6c42\u6709\u5e8f\n        vector<vector<int> > result(1);\n        for (auto elem : S) {\n            result.reserve(result.size() * 2);\n            auto half = result.begin() + result.size();\n            copy(result.begin(), half, back_inserter(result));\n            for_each(half, result.end(), [&elem](decltype(result[0]) &e){\n                e.push_back(elem);\n            });\n        }\n        return result;\n    }\n};\n")))),(0,n.kt)("h4",{id:"\u4e8c\u8fdb\u5236\u6cd5"},"\u4e8c\u8fdb\u5236\u6cd5"),(0,n.kt)("p",null,"\u672c\u65b9\u6cd5\u7684\u524d\u63d0\u662f\uff1a\u96c6\u5408\u7684\u5143\u7d20\u4e0d\u8d85\u8fc7 int \u4f4d\u6570\u3002\u7528\u4e00\u4e2a int \u6574\u6570\u8868\u793a\u4f4d\u5411\u91cf\uff0c\u7b2c",(0,n.kt)("inlineCode",{parentName:"p"},"i"),"\u4f4d\u4e3a 1\uff0c\u5219\u8868\u793a\u9009\u62e9",(0,n.kt)("inlineCode",{parentName:"p"},"S[i]"),"\uff0c\u4e3a 0 \u5219\u4e0d\u9009\u62e9\u3002\u4f8b\u5982 ",(0,n.kt)("inlineCode",{parentName:"p"},"S={A,B,C,D}"),"\uff0c\u5219",(0,n.kt)("inlineCode",{parentName:"p"},"0110=6"),"\u8868\u793a\u5b50\u96c6 ",(0,n.kt)("inlineCode",{parentName:"p"},"{B,C}"),"\u3002"),(0,n.kt)("p",null,"\u8fd9\u79cd\u65b9\u6cd5\u6700\u5de7\u5999\u3002\u56e0\u4e3a\u5b83\u4e0d\u4ec5\u80fd\u751f\u6210\u5b50\u96c6\uff0c\u8fd8\u80fd\u65b9\u4fbf\u7684\u8868\u793a\u96c6\u5408\u7684\u5e76\u3001\u4ea4\u3001\u5dee\u7b49\u96c6\u5408\u8fd0\u7b97\u3002\u8bbe\u4e24\u4e2a\u96c6\u5408\u7684\u4f4d\u5411\u91cf\u5206\u522b\u4e3a",(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"B"),(0,n.kt)("mn",{parentName:"msub"},"1"))),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"B_1")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05017em"}},"B"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0502em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"1")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"})))))))))),"\u548c",(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"B"),(0,n.kt)("mn",{parentName:"msub"},"2"))),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"B_2")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05017em"}},"B"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0502em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"2")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"})))))))))),"\uff0c\u5219",(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"B"),(0,n.kt)("mn",{parentName:"msub"},"1")),(0,n.kt)("mo",{parentName:"mrow"},"\u222a"),(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"B"),(0,n.kt)("mn",{parentName:"msub"},"2")),(0,n.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"B"),(0,n.kt)("mn",{parentName:"msub"},"1")),(0,n.kt)("mo",{parentName:"mrow"},"\u2229"),(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"B"),(0,n.kt)("mn",{parentName:"msub"},"2")),(0,n.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"B"),(0,n.kt)("mn",{parentName:"msub"},"1")),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u25b3"),(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"B"),(0,n.kt)("mn",{parentName:"msub"},"2"))),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"B_1\\cup B_2, B_1 \\cap B_2, B_1 \\triangle B_2")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05017em"}},"B"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0502em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"1")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"\u222a"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8778em",verticalAlign:"-0.1944em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05017em"}},"B"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0502em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"2")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mpunct"},","),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05017em"}},"B"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0502em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"1")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"\u2229"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05017em"}},"B"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0502em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"2")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mpunct"},","),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05017em"}},"B"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0502em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"1")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mord"},"\u25b3"),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05017em"}},"B"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0502em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"2")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"})))))))))),"\u5206\u522b\u5bf9\u5e94\u96c6\u5408\u7684\u5e76\u3001\u4ea4\u3001\u5bf9\u79f0\u5dee\u3002"),(0,n.kt)("p",null,"\u4e8c\u8fdb\u5236\u6cd5\uff0c\u4e5f\u53ef\u4ee5\u770b\u505a\u662f\u4f4d\u5411\u91cf\u6cd5\uff0c\u53ea\u4e0d\u8fc7\u66f4\u52a0\u4f18\u5316\u3002"),(0,n.kt)(r.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,n.kt)(p.Z,{value:"java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// Subsets\n// \u4e8c\u8fdb\u5236\u6cd5\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(2^n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public List<List<Integer>> subsets(int[] nums) {\n        Arrays.sort(nums); // \u8f93\u51fa\u8981\u6c42\u6709\u5e8f\n        List<List<Integer>> result = new ArrayList<>();\n        final int n = nums.length;\n        ArrayList<Integer> v = new ArrayList<>();\n\n        for (int i = 0; i < 1 << n; i++) {\n            for (int j = 0; j < n; j++) {\n                if ((i & 1 << j) > 0) v.add(nums[j]);\n            }\n            result.add(new ArrayList<>(v));\n            v.clear();\n        }\n        return result;\n    }\n}\n"))),(0,n.kt)(p.Z,{value:"cpp",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"// Subsets\n// \u4e8c\u8fdb\u5236\u6cd5\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(2^n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    vector<vector<int> > subsets(vector<int> &S) {\n        sort(S.begin(), S.end()); // \u8f93\u51fa\u8981\u6c42\u6709\u5e8f\n        vector<vector<int> > result;\n        const size_t n = S.size();\n        vector<int> v;\n\n        for (size_t i = 0; i < 1 << n; i++) {\n            for (size_t j = 0; j < n; j++) {\n                if (i & 1 << j) v.push_back(S[j]);\n            }\n            result.push_back(v);\n            v.clear();\n        }\n        return result;\n    }\n};\n")))),(0,n.kt)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/brute-force/subsets-ii"},"Subsets II"))))}N.isMDXComponent=!0}}]);