"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[497],{63333:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"dp/knapsack-problem/word-break","title":"Word Break","description":"\u63cf\u8ff0","source":"@site/docs/dp/knapsack-problem/word-break.md","sourceDirName":"dp/knapsack-problem","slug":"/dp/knapsack-problem/word-break","permalink":"/dp/knapsack-problem/word-break","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Word Break"},"sidebar":"docs","previous":{"title":"Combination Sum IV","permalink":"/dp/knapsack-problem/combination-sum-iv"},"next":{"title":"Word Break II","permalink":"/dp/knapsack-problem/word-break-ii"}}');var s=r(74848),a=r(28453),i=r(11470),l=r(19365);const o={title:"Word Break"},c=void 0,u={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"DFS",id:"dfs",level:4},{value:"BFS",id:"bfs",level:4},{value:"\u52a8\u89c4",id:"\u52a8\u89c4",level:4},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}];function p(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,s.jsx)(n.p,{children:"Given a string s and a dictionary of words dict, determine if s can be segmented into a space-separated sequence of one or more dictionary words."}),"\n",(0,s.jsx)(n.p,{children:"For example, given"}),"\n",(0,s.jsxs)(n.p,{children:["s = ",(0,s.jsx)(n.code,{children:'"leetcode"'}),","]}),"\n",(0,s.jsxs)(n.p,{children:["dict = ",(0,s.jsx)(n.code,{children:'["leet", "code"]'}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Return true because ",(0,s.jsx)(n.code,{children:'"leetcode"'})," can be segmented as ",(0,s.jsx)(n.code,{children:'"leet code"'}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,s.jsx)(n.p,{children:"\u672c\u9898\u6700\u76f4\u89c2\u7684\u505a\u6cd5\u662f BFS\uff0c\u4e5f\u53ef\u4ee5\u7528 DFS \u548c\u52a8\u6001\u89c4\u5212\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n",(0,s.jsx)(n.h4,{id:"dfs",children:"DFS"}),"\n","\n",(0,s.jsxs)(i.A,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,s.jsx)(l.A,{value:"java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"// Word Break\n// \u6df1\u641c\uff0c\u8d85\u65f6\n// \u65f6\u95f4\u590d\u6742\u5ea6O(2^n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\n    public boolean wordBreak(String s, Set<String> dict) {\n        return dfs(s, dict, 0, 1);\n    }\n    private static boolean dfs(String s, Set<String> dict,\n                    int start, int cur) {\n        if (cur == s.length()) {\n            return dict.contains(s.substring(start, cur));\n        }\n        if (dfs(s, dict, start, cur+1)) return true; // no cut\n        if (dict.contains(s.substring(start, cur))) // cut here\n            if (dfs(s, dict, cur+1, cur+1)) return true;\n        return false;\n    }\n}\n"})})}),(0,s.jsx)(l.A,{value:"cpp",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"// Word Break\n// \u6df1\u641c\uff0c\u8d85\u65f6\n// \u65f6\u95f4\u590d\u6742\u5ea6O(2^n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\npublic:\n    bool wordBreak(string s, unordered_set<string> &dict) {\n        return dfs(s, dict, 0, 1);\n    }\nprivate:\n    static bool dfs(const string &s, unordered_set<string> &dict,\n            size_t start, size_t cur) {\n        if (cur == s.size()) {\n            return dict.find(s.substr(start, cur-start)) != dict.end();\n        }\n        if (dfs(s, dict, start, cur+1)) return true; // no cut\n        if (dict.find(s.substr(start, cur-start)) != dict.end()) // cut here\n            if (dfs(s, dict, cur+1, cur+1)) return true;\n        return false;\n    }\n};\n"})})}),(0,s.jsx)(l.A,{value:"python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"# Word Break\n# \u6df1\u641c\uff0c\u8d85\u65f6\n# \u65f6\u95f4\u590d\u6742\u5ea6O(2^n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution:\n    def wordBreak(self, s: str, dict: set[str]) -> bool:\n        return self.dfs(s, dict, 0, 1)\n\n    def dfs(self, s: str, dict: set[str], start: int, cur: int) -> bool:\n        if cur == len(s):\n            return s[start:cur] in dict\n\n        if self.dfs(s, dict, start, cur + 1):  # no cut\n            return True\n\n        if s[start:cur] in dict:  # cut here\n            if self.dfs(s, dict, cur, cur + 1):\n                return True\n\n        return False\n"})})})]}),"\n",(0,s.jsx)(n.h4,{id:"bfs",children:"BFS"}),"\n",(0,s.jsxs)(i.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,s.jsx)(l.A,{value:"java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"// Word Break\n// BFS\n// Time Complexity: O(n^2), Space Complexity: O(n)\npublic class Solution {\n    public boolean wordBreak(String s, List<String> wordDict) {\n        Set<String> set = new HashSet<>(wordDict);\n        Queue<Integer> queue = new LinkedList<>();\n        boolean[] visited = new boolean[s.length()];\n\n        queue.offer(0);\n        while (!queue.isEmpty()) {\n            int start = queue.poll();\n            if (!visited[start]) {\n                for (int end = start + 1; end <= s.length(); end++) {\n                    if (set.contains(s.substring(start, end))) {\n                        queue.offer(end);\n                        if (end == s.length()) {\n                            return true;\n                        }\n                    }\n                }\n                visited[start] = true;\n            }\n        }\n        return false;\n    }\n}\n"})})}),(0,s.jsx)(l.A,{value:"cpp",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"// TODO\n"})})}),(0,s.jsx)(l.A,{value:"python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"# Word Break\n# BFS\n# Time Complexity: O(n^2), Space Complexity: O(n)\ndef wordBreak(s: str, wordDict: list[str]) -> bool:\n    word_set = set(wordDict)\n    queue = [0]\n    visited = [False] * len(s)\n\n    while queue:\n        start = queue.pop(0)\n        if not visited[start]:\n            for end in range(start + 1, len(s) + 1):\n                if s[start:end] in word_set:\n                    queue.append(end)\n                    if end == len(s):\n                        return True\n            visited[start] = True\n    return False\n"})})})]}),"\n",(0,s.jsx)(n.h4,{id:"\u52a8\u89c4",children:"\u52a8\u89c4"}),"\n",(0,s.jsxs)(n.p,{children:["\u672c\u9898\u53ef\u4ee5\u89c6\u4e3a\u4e00\u4e2a\u5b8c\u5168\u80cc\u5305\u95ee\u9898\uff0c\u4ee4\u51fd\u6570",(0,s.jsx)(n.code,{children:"f(i)"}),"\u8868\u793a",(0,s.jsx)(n.code,{children:"s[0,i)"}),"\u662f\u5426\u53ef\u4ee5\u5206\u8bcd\uff0c\u5219\u72b6\u6001\u8f6c\u79fb\u65b9\u7a0b\u4e3a"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"f(i) = any_of(f(j) && s[j,i] in dict), 0 <= j < i"})}),"\n",(0,s.jsxs)(i.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,s.jsx)(l.A,{value:"java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"// Word Break\n// \u52a8\u89c4\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\n    public boolean wordBreak(String s, List<String> wordDict) {\n        Set<String> dict = new HashSet<>();\n        dict.addAll(wordDict);\n        boolean[] dp = new boolean[s.length() + 1];\n        dp[0] = true; // base case, empty string\n        for (int i = 1; i <= s.length(); ++i) {\n            for (int j = i - 1; j >= 0; --j) {\n                dp[i] = dp[i] || dp[j] && dict.contains(s.substring(j, i));\n            }\n        }\n        return dp[s.length()];\n    }\n}\n"})})}),(0,s.jsx)(l.A,{value:"cpp",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"// Word Break\n// \u52a8\u89c4\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\npublic:\n    bool wordBreak(const string& s, const vector<string>& wordDict) {\n        unordered_set<string> dict(wordDict.begin(), wordDict.end());\n        vector<bool> dp(s.size() + 1, false);\n        dp[0] = true; // base case\n        for (int i = 1; i <= s.size(); ++i) {\n            for (int j = i - 1; j >= 0; --j) {\n                dp[i] = dp[i] || dp[j] && dict.find(s.substr(j, i - j)) != dict.end();\n            }\n        }\n        return dp[s.size()];\n    }\n};\n"})})}),(0,s.jsx)(l.A,{value:"python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"# Word Break\n# \u52a8\u89c4\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution:\n    def wordBreak(self, s: str, wordDict: list[str]) -> bool:\n        dict_set = set(wordDict)\n        dp = [False] * (len(s) + 1)\n        dp[0] = True  # base case, empty string\n        for i in range(1, len(s) + 1):\n            for j in range(i - 1, -1, -1):\n                dp[i] = dp[i] or (dp[j] and s[j:i] in dict_set)\n        return dp[len(s)]\n"})})})]}),"\n",(0,s.jsx)(n.h3,{id:"\u76f8\u5173\u9898\u76ee",children:"\u76f8\u5173\u9898\u76ee"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/dp/knapsack-problem/word-break-ii",children:"Word Break II"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>i});r(96540);var t=r(34164);const s={tabItem:"tabItem_Ymn6"};var a=r(74848);function i(e){let{children:n,hidden:r,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,i),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>w});var t=r(96540),s=r(34164),a=r(23104),i=r(56347),l=r(205),o=r(57485),c=r(31682),u=r(70679);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:s}}=e;return{value:n,label:r,attributes:t,default:s}}))}(r);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function h(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:r}=e;const s=(0,i.W6)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,o.aZ)(a),(0,t.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function b(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,a=p(e),[i,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:a}))),[c,d]=f({queryString:r,groupId:s}),[b,v]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,u.Dv)(r);return[s,(0,t.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:s}),m=(()=>{const e=c??b;return h({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{m&&o(m)}),[m]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),v(e)}),[d,v,a]),tabValues:a}}var v=r(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=r(74848);function g(e){let{className:n,block:r,selectedValue:t,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const n=e.currentTarget,r=o.indexOf(n),s=l[r].value;s!==t&&(c(n),i(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;n=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;n=o[r]??o[o.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...a,className:(0,s.A)("tabs__item",m.tabItem,a?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function x(e){let{lazy:n,children:r,selectedValue:a}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function k(e){const n=b(e);return(0,j.jsxs)("div",{className:(0,s.A)("tabs-container",m.tabList),children:[(0,j.jsx)(g,{...n,...e}),(0,j.jsx)(x,{...n,...e})]})}function w(e){const n=(0,v.A)();return(0,j.jsx)(k,{...e,children:d(e.children)},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>l});var t=r(96540);const s={},a=t.createContext(s);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);