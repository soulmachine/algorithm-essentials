"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[2624],{48093:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"string/regular-expression-matching","title":"Regular Expression Matching","description":"\u63cf\u8ff0","source":"@site/docs/string/regular-expression-matching.md","sourceDirName":"string","slug":"/string/regular-expression-matching","permalink":"/en/string/regular-expression-matching","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Regular Expression Matching"},"sidebar":"docs","previous":{"title":"String to Integer (atoi)","permalink":"/en/string/atoi"},"next":{"title":"Wildcard Matching","permalink":"/en/string/wildcard-matching"}}');var a=t(74848),s=t(28453),i=t(11470),l=t(19365);const c={title:"Regular Expression Matching"},o=void 0,u={},h=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u9012\u5f52\u7248",id:"\u9012\u5f52\u7248",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}];function p(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,a.jsxs)(n.p,{children:["Implement regular expression matching with support for ",(0,a.jsx)(n.code,{children:"'.'"})," and ",(0,a.jsx)(n.code,{children:"'*'"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"'.'"})," Matches any single character.\n",(0,a.jsx)(n.code,{children:"'*'"})," Matches zero or more of the preceding element."]}),"\n",(0,a.jsx)(n.p,{children:"The matching should cover the entire input string (not partial)."}),"\n",(0,a.jsx)(n.p,{children:"The function prototype should be:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"bool isMatch(const char *s, const char *p)\n"})}),"\n",(0,a.jsx)(n.p,{children:"Some examples:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'isMatch("aa","a") \u2192 false\nisMatch("aa","aa") \u2192 true\nisMatch("aaa","aa") \u2192 false\nisMatch("aa", "a*") \u2192 true\nisMatch("aa", ".*") \u2192 true\nisMatch("ab", ".*") \u2192 true\nisMatch("aab", "c*a*b") \u2192 true\n'})}),"\n",(0,a.jsx)(n.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,a.jsx)(n.p,{children:"\u8fd9\u662f\u4e00\u9053\u5f88\u6709\u6311\u6218\u7684\u9898\u3002"}),"\n",(0,a.jsx)(n.h3,{id:"\u9012\u5f52\u7248",children:"\u9012\u5f52\u7248"}),"\n","\n",(0,a.jsxs)(i.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,a.jsx)(l.A,{value:"java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"// Regular Expression Matching\n// Time complexity: O(n)\n// Space complexity: O(1)\nclass Solution {\n    public boolean isMatch(final String s, final String p) {\n        return isMatch(s, 0, p, 0);\n    }\n    private static boolean matchFirst(String s, int i, String p, int j) {\n        if (j == p.length()) return i == s.length();\n        if (i == s.length()) return j == p.length();\n        return p.charAt(j) == '.' || s.charAt(i) == p.charAt(j);\n    }\n    private static boolean isMatch(String s, int i, String p, int j) {\n        if (j == p.length()) return i == s.length();\n\n        // next char is not '*', then must match current character\n        final char b = p.charAt(j);\n        if (j == p.length() - 1 || p.charAt(j + 1) != '*') {\n            if (matchFirst(s, i, p, j)) return isMatch(s, i + 1, p, j + 1);\n            else return false;\n        } else { // next char is '*'\n            if (isMatch(s, i, p, j+2)) return true;  // try the length of 0\n            while (matchFirst(s, i, p, j))  // try all possible lengths\n                if (isMatch(s, ++i, p, j+2)) return true;\n            return false;\n        }\n    }\n}\n\n"})})}),(0,a.jsx)(l.A,{value:"cpp",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"// Regular Expression Matching\n// Time complexity: O(n)\n// Space complexity: O(1)\nclass Solution {\npublic:\n    bool isMatch(const string& s, const string& p) {\n        return isMatch(s.c_str(), p.c_str());\n    }\nprivate:\n    bool matchFirst(const char *s, const char *p) {\n        return *p == *s || (*p == '.' && *s != '\\0');\n    }\n\n    bool isMatch(const char *s, const char *p) {\n        if (*p == '\\0') return *s == '\\0';    //empty\n\n        // next char is not '*', then must match current character\n        if (*(p + 1) != '*') {\n            if (matchFirst(s, p)) return isMatch(s + 1, p + 1);\n            else return false;\n        } else { // next char is '*'\n            if (isMatch(s, p + 2)) return true;    // try the length of 0\n            while ( matchFirst(s, p) )       // try all possible lengths\n                if (isMatch(++s, p + 2)) return true;\n            return false;\n        }\n    }\n};\n\n\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"\u76f8\u5173\u9898\u76ee",children:"\u76f8\u5173\u9898\u76ee"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/en/string/wildcard-matching",children:"Wildcard Matching"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var r=t(34164);const a={tabItem:"tabItem_Ymn6"};var s=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>M});var r=t(96540),a=t(34164),s=t(23104),i=t(56347),l=t(205),c=t(57485),o=t(31682),u=t(70679);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,o.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function d(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=p(e),[i,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[o,h]=f({queryString:t,groupId:a}),[m,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,u.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),b=(()=>{const e=o??m;return d({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{b&&c(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),g(e)}),[h,g,s]),tabValues:s}}var g=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(74848);function x(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.a_)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),a=l[t].value;a!==r&&(o(n),i(a))},h=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:h,onClick:u,...s,className:(0,a.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:s}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=m(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,v.jsx)(x,{...n,...e}),(0,v.jsx)(j,{...n,...e})]})}function M(e){const n=(0,g.A)();return(0,v.jsx)(y,{...e,children:h(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var r=t(96540);const a={},s=r.createContext(a);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);