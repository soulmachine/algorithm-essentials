"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[223],{84835:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>b,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"brute-force/letter-combinations-of-a-phone-number1","title":"Letter Combinations of a Phone Number","description":"\u63cf\u8ff0","source":"@site/docs/brute-force/letter-combinations-of-a-phone-number1.md","sourceDirName":"brute-force","slug":"/brute-force/letter-combinations-of-a-phone-number1","permalink":"/brute-force/letter-combinations-of-a-phone-number1","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Letter Combinations of a Phone Number"}}');var a=t(74848),s=t(28453),i=t(11470),l=t(19365);const o={title:"Letter Combinations of a Phone Number"},u=void 0,c={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u9012\u5f52",id:"\u9012\u5f52",level:3},{value:"\u8fed\u4ee3",id:"\u8fed\u4ee3",level:3}];function h(e){const n={code:"code",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,a.jsx)(n.p,{children:"Given a digit string, return all possible letter combinations that the number could represent."}),"\n",(0,a.jsx)(n.p,{children:"A mapping of digit to letters (just like on the telephone buttons) is given below."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Phone Keyboard",src:t(79434).A+"",width:"200",height:"162"})}),"\n",(0,a.jsxs)(n.p,{children:["**Input:**Digit string ",(0,a.jsx)(n.code,{children:'"23"'})]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Output:"})," ",(0,a.jsx)(n.code,{children:'["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]'}),"."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Note:"}),"\nAlthough the above answer is in lexicographical order, your answer could be in any order you want."]}),"\n",(0,a.jsx)(n.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,a.jsx)(n.p,{children:"\u65e0"}),"\n",(0,a.jsx)(n.h3,{id:"\u9012\u5f52",children:"\u9012\u5f52"}),"\n","\n",(0,a.jsxs)(i.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,a.jsx)(l.A,{value:"java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'// Letter Combinations of a Phone Number\n// \u65f6\u95f4\u590d\u6742\u5ea6O(3^n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\npublic class Solution {\n    private static final String[] keyboard =\n            new String[]{ " ", "", "abc", "def", // \'0\',\'1\',\'2\',...\n            "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz" };\n\n    public List<String> letterCombinations(String digits) {\n        List<String> result = new ArrayList<>();\n        if (digits.isEmpty()) return result;\n        dfs(digits, 0, "", result);\n        return result;\n    }\n\n    private static void dfs(String digits, int cur, String path,\n                            List<String> result) {\n        if (cur == digits.length()) {\n            result.add(path);\n            return;\n        }\n        final String str = keyboard[digits.charAt(cur) - \'0\'];\n\n        for (char c : keyboard[digits.charAt(cur) - \'0\'].toCharArray()) {\n            dfs(digits, cur + 1, path + c, result);\n        }\n    }\n}\n'})})}),(0,a.jsx)(l.A,{value:"cpp",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:'// Letter Combinations of a Phone Number\n// \u65f6\u95f4\u590d\u6742\u5ea6O(3^n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\npublic:\n    const vector<string> keyboard { " ", "", "abc", "def", // \'0\',\'1\',\'2\',...\n            "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz" };\n\n    vector<string> letterCombinations (const string &digits) {\n        vector<string> result;\n        if (digits.empty()) return result;\n        dfs(digits, 0, "", result);\n        return result;\n    }\n\n    void dfs(const string &digits, size_t cur, string path,\n            vector<string> &result) {\n        if (cur == digits.size()) {\n            result.push_back(path);\n            return;\n        }\n        for (auto c : keyboard[digits[cur] - \'0\']) {\n            dfs(digits, cur + 1, path + c, result);\n        }\n    }\n};\n'})})})]}),"\n",(0,a.jsx)(n.h3,{id:"\u8fed\u4ee3",children:"\u8fed\u4ee3"}),"\n",(0,a.jsxs)(i.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,a.jsx)(l.A,{value:"java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'// Letter Combinations of a Phone Number\n// \u65f6\u95f4\u590d\u6742\u5ea6O(3^n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    private static final String[] keyboard =\n            new String[]{ " ", "", "abc", "def", // \'0\',\'1\',\'2\',...\n                    "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz" };\n\n    public List<String> letterCombinations(String digits) {\n        if (digits.isEmpty()) return new ArrayList<>();\n        List<String> result = new ArrayList<>();\n        result.add("");\n        for (char d : digits.toCharArray()) {\n            final int n = result.size();\n            final int m = keyboard[d - \'0\'].length();\n\n            // resize to n * m\n            for (int i = 1; i < m; ++i) {\n                for (int j = 0; j < n; ++j) {\n                    result.add(result.get(j));\n                }\n            }\n\n            for (int i = 0; i < result.size(); ++i) {\n                result.set(i, result.get(i) + keyboard[d - \'0\'].charAt(i/n));\n            }\n        }\n        return result;\n    }\n}\n'})})}),(0,a.jsx)(l.A,{value:"cpp",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:'// Letter Combinations of a Phone Number\n// \u65f6\u95f4\u590d\u6742\u5ea6O(3^n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    const vector<string> keyboard { " ", "", "abc", "def", // \'0\',\'1\',\'2\',...\n            "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz" };\n\n    vector<string> letterCombinations (const string &digits) {\n        if (digits.empty()) return vector<string>();\n        vector<string> result(1, "");\n        for (auto d : digits) {\n            const size_t n = result.size();\n            const size_t m = keyboard[d - \'0\'].size();\n\n            // resize to n * m\n            for (size_t i = 1; i < m; ++i) {\n                for (size_t j = 0; j < n; ++j) {\n                    result.push_back(result[j]);\n                }\n            }\n\n            for (size_t i = 0; i < result.size(); ++i) {\n                result[i] = result[i] + keyboard[d - \'0\'][i/n];\n            }\n        }\n        return result;\n    }\n};\n'})})})]})]})}function b(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var r=t(34164);const a={tabItem:"tabItem_Ymn6"};var s=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(96540),a=t(34164),s=t(23104),i=t(56347),l=t(205),o=t(57485),u=t(31682),c=t(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function b(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=h(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!b({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[u,d]=p({queryString:t,groupId:a}),[f,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,c.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),m=(()=>{const e=u??f;return b({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{m&&o(m)}),[m]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!b({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),g(e)}),[d,g,s]),tabValues:s}}var g=t(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(74848);function j(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const n=e.currentTarget,t=o.indexOf(n),a=l[t].value;a!==r&&(u(n),i(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.A)("tabs__item",m.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:s}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=f(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",m.tabList),children:[(0,v.jsx)(j,{...n,...e}),(0,v.jsx)(x,{...n,...e})]})}function w(e){const n=(0,g.A)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(n))}},79434:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/phone-keyboard-a697160e29404c1c63994256f357ab55.png"},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var r=t(96540);const a={},s=r.createContext(a);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);