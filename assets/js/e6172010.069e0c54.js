"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[2225],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),b=a,v=d["".concat(s,".").concat(b)]||d[b]||c[b]||l;return n?r.createElement(v,i(i({ref:t},u),{},{components:n})):r.createElement(v,i({ref:t},u))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294),a=n(6010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>b});var r=n(7462),a=n(7294),l=n(6010),i=n(2389),o=n(7392),s=n(7094),p=n(2466);const u="tabList__CuJ",c="tabItem_LNqP";function d(e){var t;const{lazy:n,block:i,defaultValue:d,values:b,groupId:v,className:m}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=b??f.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),g=(0,o.l)(h,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===d?d:d??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==k&&!h.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,s.U)(),[j,O]=(0,a.useState)(k),T=[],{blockElementScrollPositionUntilNextRender:E}=(0,p.o5)();if(null!=v){const e=y[v];null!=e&&e!==j&&h.some((t=>t.value===e))&&O(e)}const N=e=>{const t=e.currentTarget,n=T.indexOf(t),r=h[n].value;r!==j&&(E(t),O(r),null!=v&&w(v,String(r)))},S=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},m)},h.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:e=>T.push(e),onKeyDown:S,onFocus:N,onClick:N},i,{className:(0,l.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":j===t})}),n??t)}))),n?(0,a.cloneElement)(f.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}function b(e){const t=(0,i.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},9448:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>b,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=n(7462),a=(n(7294),n(3905)),l=n(5488),i=n(5162);const o={title:"Word Break II"},s=void 0,p={unversionedId:"dp/knapsack-problem/word-break-ii",id:"dp/knapsack-problem/word-break-ii",title:"Word Break II",description:"\u63cf\u8ff0",source:"@site/docs/dp/knapsack-problem/word-break-ii.md",sourceDirName:"dp/knapsack-problem",slug:"/dp/knapsack-problem/word-break-ii",permalink:"/dp/knapsack-problem/word-break-ii",draft:!1,tags:[],version:"current",frontMatter:{title:"Word Break II"},sidebar:"docs",previous:{title:"Word Break",permalink:"/dp/knapsack-problem/word-break"},next:{title:"\u591a\u91cd\u80cc\u5305\u95ee\u9898",permalink:"/dp/knapsack-problem/bounded-knapsack"}},u={},c=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],d={toc:c};function b(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.kt)("p",null,"Given a string s and a dictionary of words dict, add spaces in s to construct a sentence where each word is a valid dictionary word."),(0,a.kt)("p",null,"Return all such possible sentences."),(0,a.kt)("p",null,"For example, given"),(0,a.kt)("p",null,"s = ",(0,a.kt)("inlineCode",{parentName:"p"},'"catsanddog"'),","),(0,a.kt)("p",null,"dict = ",(0,a.kt)("inlineCode",{parentName:"p"},'["cat", "cats", "and", "sand", "dog"]'),"."),(0,a.kt)("p",null,"A solution is ",(0,a.kt)("inlineCode",{parentName:"p"},'["cats and dog", "cat sand dog"]'),"."),(0,a.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,a.kt)("p",null,"\u5728\u4e0a\u4e00\u9898\u7684\u57fa\u7840\u4e0a\uff0c\u8981\u8fd4\u56de\u89e3\u672c\u8eab\u3002"),(0,a.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,a.kt)(l.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// Word Break II\n// \u52a8\u89c4\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n^2)\npublic class Solution {\n    public List<String> wordBreak(String s, Set<String> wordDict) {\n        // \u957f\u5ea6\u4e3an\u7684\u5b57\u7b26\u4e32\u6709n+1\u4e2a\u9694\u677f\n        boolean[] f = new boolean[s.length() + 1];\n        // prev[i][j]\u4e3atrue\uff0c\u8868\u793as[j, i)\u662f\u4e00\u4e2a\u5408\u6cd5\u5355\u8bcd\uff0c\u53ef\u4ee5\u4ecej\u5904\u5207\u5f00\n        // \u7b2c\u4e00\u884c\u672a\u7528\n        boolean[][] prev = new boolean[s.length() + 1][s.length()];\n        f[0] = true;\n        for (int i = 1; i <= s.length(); ++i) {\n            for (int j = i - 1; j >= 0; --j) {\n                if (f[j] && wordDict.contains(s.substring(j, i))) {\n                    f[i] = true;\n                    prev[i][j] = true;\n                }\n            }\n        }\n        List<String> result = new ArrayList<>();\n        List<String> path = new ArrayList<>();\n        gen_path(s, prev, s.length(), path, result);\n        return result;\n\n    }\n    // DFS\u904d\u5386\u6811\uff0c\u751f\u6210\u8def\u5f84\n    private static void gen_path(String s, boolean[][] prev,\n                  int cur, List<String> path, List<String> result) {\n        if (cur == 0) {\n            StringBuilder sb = new StringBuilder();\n            for (int i = path.size() - 1; i >= 0; --i)\n                sb.append(path.get(i)).append(' ');\n            sb.deleteCharAt(sb.length()-1);\n            result.add(sb.toString());\n        }\n        for (int i = 0; i < s.length(); ++i) {\n            if (prev[cur][i]) {\n                path.add(s.substring(i, cur));\n                gen_path(s, prev, i, path, result);\n                path.remove(path.size()-1);\n            }\n        }\n    }\n}\n"))),(0,a.kt)(i.Z,{value:"cpp",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'// Word Break II\n// \u52a8\u89c4\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n^2)\nclass Solution {\npublic:\n    vector<string> wordBreak(string s, unordered_set<string> &dict) {\n        vector<bool> dp(s.length() + 1, false);\n        dp[0] = true;\n        // prev[i][j]\u4e3atrue\uff0c\u8868\u793as[j, i)\u662f\u4e00\u4e2a\u5408\u6cd5\u5355\u8bcd\uff0c\u53ef\u4ee5\u4ecej\u5904\u5207\u5f00\n        // \u7b2c\u4e00\u884c\u672a\u7528\n        vector<vector<bool> > prev(s.length() + 1, vector<bool>(s.length()));\n        for (size_t i = 1; i <= s.length(); ++i) {\n            for (int j = i - 1; j >= 0; --j) {\n                if (dp[j] && dict.find(s.substr(j, i - j)) != dict.end()) {\n                    dp[i] = true;\n                    prev[i][j] = true;\n                }\n            }\n        }\n        vector<string> result;\n        vector<string> path;\n        gen_path(s, prev, s.length(), path, result);\n        return result;\n\n    }\nprivate:\n    // DFS\u904d\u5386\u6811\uff0c\u751f\u6210\u8def\u5f84\n    void gen_path(const string &s, const vector<vector<bool> > &prev,\n            int cur, vector<string> &path, vector<string> &result) {\n        if (cur == 0) {\n            string tmp;\n            for (auto iter = path.crbegin(); iter != path.crend(); ++iter)\n                tmp += *iter + " ";\n            tmp.erase(tmp.end() - 1);\n            result.push_back(tmp);\n        }\n        for (size_t i = 0; i < s.size(); ++i) {\n            if (prev[cur][i]) {\n                path.push_back(s.substr(i, cur - i));\n                gen_path(s, prev, i, path, result);\n                path.pop_back();\n            }\n        }\n    }\n};\n')))),(0,a.kt)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dp/knapsack-problem/word-break"},"Word Break"))))}b.isMDXComponent=!0}}]);