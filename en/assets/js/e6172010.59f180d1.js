"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[179],{85146:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"dp/knapsack-problem/word-break-ii","title":"Word Break II","description":"\u63cf\u8ff0","source":"@site/docs/dp/knapsack-problem/word-break-ii.md","sourceDirName":"dp/knapsack-problem","slug":"/dp/knapsack-problem/word-break-ii","permalink":"/en/dp/knapsack-problem/word-break-ii","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Word Break II"},"sidebar":"docs","previous":{"title":"Word Break","permalink":"/en/dp/knapsack-problem/word-break"},"next":{"title":"\u591a\u91cd\u80cc\u5305\u95ee\u9898","permalink":"/en/dp/knapsack-problem/bounded-knapsack"}}');var a=t(74848),s=t(28453),i=t(11470),l=t(19365);const o={title:"Word Break II"},u=void 0,c={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}];function p(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,a.jsx)(n.p,{children:"Given a string s and a dictionary of words dict, add spaces in s to construct a sentence where each word is a valid dictionary word."}),"\n",(0,a.jsx)(n.p,{children:"Return all such possible sentences."}),"\n",(0,a.jsx)(n.p,{children:"For example, given"}),"\n",(0,a.jsxs)(n.p,{children:["s = ",(0,a.jsx)(n.code,{children:'"catsanddog"'}),","]}),"\n",(0,a.jsxs)(n.p,{children:["dict = ",(0,a.jsx)(n.code,{children:'["cat", "cats", "and", "sand", "dog"]'}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["A solution is ",(0,a.jsx)(n.code,{children:'["cats and dog", "cat sand dog"]'}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,a.jsx)(n.p,{children:"\u5728\u4e0a\u4e00\u9898\u7684\u57fa\u7840\u4e0a\uff0c\u8981\u8fd4\u56de\u89e3\u672c\u8eab\u3002"}),"\n",(0,a.jsx)(n.h3,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n","\n",(0,a.jsxs)(i.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,a.jsx)(l.A,{value:"java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"// Word Break II\n// \u52a8\u89c4\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n^2)\npublic class Solution {\n    public List<String> wordBreak(String s, Set<String> wordDict) {\n        // \u957f\u5ea6\u4e3an\u7684\u5b57\u7b26\u4e32\u6709n+1\u4e2a\u9694\u677f\n        boolean[] f = new boolean[s.length() + 1];\n        // prev[i][j]\u4e3atrue\uff0c\u8868\u793as[j, i)\u662f\u4e00\u4e2a\u5408\u6cd5\u5355\u8bcd\uff0c\u53ef\u4ee5\u4ecej\u5904\u5207\u5f00\n        // \u7b2c\u4e00\u884c\u672a\u7528\n        boolean[][] prev = new boolean[s.length() + 1][s.length()];\n        f[0] = true;\n        for (int i = 1; i <= s.length(); ++i) {\n            for (int j = i - 1; j >= 0; --j) {\n                if (f[j] && wordDict.contains(s.substring(j, i))) {\n                    f[i] = true;\n                    prev[i][j] = true;\n                }\n            }\n        }\n        List<String> result = new ArrayList<>();\n        List<String> path = new ArrayList<>();\n        gen_path(s, prev, s.length(), path, result);\n        return result;\n\n    }\n    // DFS\u904d\u5386\u6811\uff0c\u751f\u6210\u8def\u5f84\n    private static void gen_path(String s, boolean[][] prev,\n                  int cur, List<String> path, List<String> result) {\n        if (cur == 0) {\n            StringBuilder sb = new StringBuilder();\n            for (int i = path.size() - 1; i >= 0; --i)\n                sb.append(path.get(i)).append(' ');\n            sb.deleteCharAt(sb.length()-1);\n            result.add(sb.toString());\n        }\n        for (int i = 0; i < s.length(); ++i) {\n            if (prev[cur][i]) {\n                path.add(s.substring(i, cur));\n                gen_path(s, prev, i, path, result);\n                path.remove(path.size()-1);\n            }\n        }\n    }\n}\n"})})}),(0,a.jsx)(l.A,{value:"cpp",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:'// Word Break II\n// \u52a8\u89c4\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n^2)\nclass Solution {\npublic:\n    vector<string> wordBreak(string s, unordered_set<string> &dict) {\n        vector<bool> dp(s.length() + 1, false);\n        dp[0] = true;\n        // prev[i][j]\u4e3atrue\uff0c\u8868\u793as[j, i)\u662f\u4e00\u4e2a\u5408\u6cd5\u5355\u8bcd\uff0c\u53ef\u4ee5\u4ecej\u5904\u5207\u5f00\n        // \u7b2c\u4e00\u884c\u672a\u7528\n        vector<vector<bool> > prev(s.length() + 1, vector<bool>(s.length()));\n        for (size_t i = 1; i <= s.length(); ++i) {\n            for (int j = i - 1; j >= 0; --j) {\n                if (dp[j] && dict.find(s.substr(j, i - j)) != dict.end()) {\n                    dp[i] = true;\n                    prev[i][j] = true;\n                }\n            }\n        }\n        vector<string> result;\n        vector<string> path;\n        gen_path(s, prev, s.length(), path, result);\n        return result;\n\n    }\nprivate:\n    // DFS\u904d\u5386\u6811\uff0c\u751f\u6210\u8def\u5f84\n    void gen_path(const string &s, const vector<vector<bool> > &prev,\n            int cur, vector<string> &path, vector<string> &result) {\n        if (cur == 0) {\n            string tmp;\n            for (auto iter = path.crbegin(); iter != path.crend(); ++iter)\n                tmp += *iter + " ";\n            tmp.erase(tmp.end() - 1);\n            result.push_back(tmp);\n        }\n        for (size_t i = 0; i < s.size(); ++i) {\n            if (prev[cur][i]) {\n                path.push_back(s.substr(i, cur - i));\n                gen_path(s, prev, i, path, result);\n                path.pop_back();\n            }\n        }\n    }\n};\n'})})})]}),"\n",(0,a.jsx)(n.h3,{id:"\u76f8\u5173\u9898\u76ee",children:"\u76f8\u5173\u9898\u76ee"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/en/dp/knapsack-problem/word-break",children:"Word Break"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var r=t(34164);const a={tabItem:"tabItem_Ymn6"};var s=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(96540),a=t(34164),s=t(23104),i=t(56347),l=t(205),o=t(57485),u=t(31682),c=t(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function v(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=p(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[u,d]=b({queryString:t,groupId:a}),[v,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,c.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),g=(()=>{const e=u??v;return h({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{g&&o(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=t(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=t(74848);function j(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const n=e.currentTarget,t=o.indexOf(n),a=l[t].value;a!==r&&(u(n),i(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function k(e){let{lazy:n,children:t,selectedValue:s}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function x(e){const n=v(e);return(0,m.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,m.jsx)(j,{...n,...e}),(0,m.jsx)(k,{...n,...e})]})}function w(e){const n=(0,f.A)();return(0,m.jsx)(x,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var r=t(96540);const a={},s=r.createContext(a);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);