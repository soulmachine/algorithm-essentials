"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[2317],{902:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>u,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"dfs/generate-parentheses","title":"Generate Parentheses","description":"\u63cf\u8ff0","source":"@site/docs/dfs/generate-parentheses.md","sourceDirName":"dfs","slug":"/dfs/generate-parentheses","permalink":"/en/dfs/generate-parentheses","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Generate Parentheses"},"sidebar":"docs","previous":{"title":"Combination Sum III","permalink":"/en/dfs/combination-sum-iii"},"next":{"title":"Sudoku Solver","permalink":"/en/dfs/sudoku-solver"}}');var a=t(74848),s=t(28453),l=t(11470),i=t(19365);const u={title:"Generate Parentheses"},o=void 0,c={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801 1",id:"\u4ee3\u7801-1",level:3},{value:"\u4ee3\u7801 2",id:"\u4ee3\u7801-2",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}];function h(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,a.jsxs)(n.p,{children:["Given ",(0,a.jsx)(n.code,{children:"n"})," pairs of parentheses, write a function to generate all combinations of well-formed parentheses."]}),"\n",(0,a.jsxs)(n.p,{children:["For example, given ",(0,a.jsx)(n.code,{children:"n = 3"}),", a solution set is:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'"((()))", "(()())", "(())()", "()(())", "()()()"\n'})}),"\n",(0,a.jsx)(n.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,a.jsx)(n.p,{children:"\u5c0f\u62ec\u53f7\u4e32\u662f\u4e00\u4e2a\u9012\u5f52\u7ed3\u6784\uff0c\u8ddf\u5355\u94fe\u8868\u3001\u4e8c\u53c9\u6811\u7b49\u9012\u5f52\u7ed3\u6784\u4e00\u6837\uff0c\u9996\u5148\u60f3\u5230\u7528\u9012\u5f52\u3002"}),"\n",(0,a.jsxs)(n.p,{children:["\u4e00\u6b65\u6b65\u6784\u9020\u5b57\u7b26\u4e32\u3002\u5f53\u5de6\u62ec\u53f7\u51fa\u73b0\u6b21\u6570",(0,a.jsx)(n.code,{children:"<n"}),"\u65f6\uff0c\u5c31\u53ef\u4ee5\u653e\u7f6e\u65b0\u7684\u5de6\u62ec\u53f7\u3002\u5f53\u53f3\u62ec\u53f7\u51fa\u73b0\u6b21\u6570\u5c0f\u4e8e\u5de6\u62ec\u53f7\u51fa\u73b0\u6b21\u6570\u65f6\uff0c\u5c31\u53ef\u4ee5\u653e\u7f6e\u65b0\u7684\u53f3\u62ec\u53f7\u3002"]}),"\n",(0,a.jsx)(n.h3,{id:"\u4ee3\u7801-1",children:"\u4ee3\u7801 1"}),"\n","\n",(0,a.jsxs)(l.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,a.jsx)(i.A,{value:"java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"// Generate Parentheses\n// \u65f6\u95f4\u590d\u6742\u5ea6O(TODO)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\npublic class Solution {\n    public List<String> generateParenthesis(int n) {\n        List<String> result = new ArrayList<>();\n        StringBuilder path = new StringBuilder();\n        if (n > 0) generate(n, path, result, 0, 0);\n        return result;\n    }\n    // l \u8868\u793a ( \u51fa\u73b0\u7684\u6b21\u6570, r \u8868\u793a ) \u51fa\u73b0\u7684\u6b21\u6570\n    private static void generate(int n, StringBuilder path,\n                                 List<String> result, int l, int r) {\n        if (l == n) {\n            StringBuilder sb = new StringBuilder(path);\n            for (int i = 0; i < n - r; ++i) sb.append(')');\n            result.add(sb.toString());\n            return;\n        }\n\n        path.append('(');\n        generate(n, path, result, l + 1, r);\n        path.deleteCharAt(path.length() - 1);\n\n        if (l > r) {\n            path.append(')');\n            generate(n, path, result, l, r + 1);\n            path.deleteCharAt(path.length() - 1);\n        }\n    }\n}\n"})})}),(0,a.jsx)(i.A,{value:"cpp",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"// Generate Parentheses\n// \u65f6\u95f4\u590d\u6742\u5ea6O(TODO)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\npublic:\n    vector<string> generateParenthesis(int n) {\n        vector<string> result;\n        string path;\n        if (n > 0) generate(n, path, result, 0, 0);\n        return result;\n    }\n    // l \u8868\u793a ( \u51fa\u73b0\u7684\u6b21\u6570, r \u8868\u793a ) \u51fa\u73b0\u7684\u6b21\u6570\n    void generate(int n, string& path, vector<string> &result, int l, int r) {\n        if (l == n) {\n            string s(path);\n            result.push_back(s.append(n - r, ')'));\n            return;\n        }\n\n        path.push_back('(');\n        generate(n, path, result, l + 1, r);\n        path.pop_back();\n\n        if (l > r) {\n            path.push_back(')');\n            generate(n, path, result, l, r + 1);\n            path.pop_back();\n        }\n    }\n};\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"\u4ee3\u7801-2",children:"\u4ee3\u7801 2"}),"\n",(0,a.jsx)(n.p,{children:"\u53e6\u4e00\u79cd\u9012\u5f52\u5199\u6cd5\uff0c\u66f4\u52a0\u7b80\u6d01\u3002"}),"\n",(0,a.jsxs)(l.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,a.jsx)(i.A,{value:"java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'// Generate Parentheses\n// @author \u8fde\u57ce (http://weibo.com/lianchengzju)\npublic class Solution {\n    public List<String> generateParenthesis(int n) {\n        if (n == 0) return new ArrayList<>(Arrays.asList(""));\n        if (n == 1) return new ArrayList<>(Arrays.asList("()"));\n        List<String> result = new ArrayList<>();\n\n        for (int i = 0; i < n; ++i)\n            for (String inner : generateParenthesis (i))\n                for (String outer : generateParenthesis (n - 1 - i))\n                    result.add ("(" + inner + ")" + outer);\n\n        return result;\n    }\n}\n'})})}),(0,a.jsx)(i.A,{value:"cpp",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:'// Generate Parentheses\n// @author \u8fde\u57ce (http://weibo.com/lianchengzju)\nclass Solution {\npublic:\n    vector<string> generateParenthesis (int n) {\n        if (n == 0) return vector<string>(1, "");\n        if (n == 1) return vector<string> (1, "()");\n        vector<string> result;\n\n        for (int i = 0; i < n; ++i)\n            for (auto inner : generateParenthesis (i))\n                for (auto outer : generateParenthesis (n - 1 - i))\n                    result.push_back ("(" + inner + ")" + outer);\n\n        return result;\n    }\n};\n'})})})]}),"\n",(0,a.jsx)(n.h3,{id:"\u76f8\u5173\u9898\u76ee",children:"\u76f8\u5173\u9898\u76ee"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/en/stack-and-queue/stack/valid-parentheses",children:"Valid Parentheses"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/en/stack-and-queue/stack/longest-valid-parentheses",children:"Longest Valid Parentheses"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>l});t(96540);var r=t(34164);const a={tabItem:"tabItem_Ymn6"};var s=t(74848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,l),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>S});var r=t(96540),a=t(34164),s=t(23104),l=t(56347),i=t(205),u=t(57485),o=t(31682),c=t(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,o.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const a=(0,l.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,u.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function v(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=h(e),[l,u]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[o,d]=f({queryString:t,groupId:a}),[v,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,c.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),b=(()=>{const e=o??v;return p({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{b&&u(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),g(e)}),[d,g,s]),tabValues:s}}var g=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=t(74848);function j(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.a_)(),c=e=>{const n=e.currentTarget,t=u.indexOf(n),a=i[t].value;a!==r&&(o(n),l(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}n?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>u.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:s}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function w(e){const n=v(e);return(0,m.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,m.jsx)(j,{...n,...e}),(0,m.jsx)(x,{...n,...e})]})}function S(e){const n=(0,g.A)();return(0,m.jsx)(w,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>i});var r=t(96540);const a={},s=r.createContext(a);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);