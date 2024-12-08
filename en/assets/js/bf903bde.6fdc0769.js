"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[6202],{72514:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"simulation/text-justification","title":"Text Justification","description":"\u63cf\u8ff0","source":"@site/docs/simulation/text-justification.md","sourceDirName":"simulation","slug":"/simulation/text-justification","permalink":"/en/simulation/text-justification","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Text Justification"},"sidebar":"docs","previous":{"title":"Divide Two Integers","permalink":"/en/simulation/divide-two-integers"},"next":{"title":"Max Points on a Line","permalink":"/en/simulation/max-points-on-a-line"}}');var a=t(74848),r=t(28453),s=t(11470),l=t(19365);const o={title:"Text Justification"},u=void 0,c={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}];function p(n){const e={code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,a.jsxs)(e.p,{children:["Given an array of words and a length ",(0,a.jsx)(e.code,{children:"L"}),", format the text such that each line has exactly ",(0,a.jsx)(e.code,{children:"L"})," characters and is fully (left and right) justified."]}),"\n",(0,a.jsxs)(e.p,{children:["You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ",(0,a.jsx)(e.code,{children:"' '"})," when necessary so that each line has exactly ",(0,a.jsx)(e.code,{children:"L"})," characters."]}),"\n",(0,a.jsx)(e.p,{children:"Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line do not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right."}),"\n",(0,a.jsx)(e.p,{children:"For the last line of text, it should be left justified and no extra space is inserted between words."}),"\n",(0,a.jsx)(e.p,{children:"For example,"}),"\n",(0,a.jsxs)(e.p,{children:["words: ",(0,a.jsx)(e.code,{children:'["This", "is", "an", "example", "of", "text", "justification."]'})]}),"\n",(0,a.jsx)(e.p,{children:"L: 16."}),"\n",(0,a.jsx)(e.p,{children:"Return the formatted lines as:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:'[\n   "This    is    an",\n   "example  of text",\n   "justification.  "\n]\n'})}),"\n",(0,a.jsxs)(e.p,{children:["Note: Each word is guaranteed not to exceed ",(0,a.jsx)(e.code,{children:"L"})," in length."]}),"\n",(0,a.jsx)(e.p,{children:"Corner Cases:"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"A line other than the last line might contain only one word. What should you do in this case?"}),"\n",(0,a.jsx)(e.li,{children:"In this case, that line should be left"}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,a.jsx)(e.p,{children:"\u65e0"}),"\n",(0,a.jsx)(e.h3,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n","\n",(0,a.jsxs)(s.A,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,a.jsx)(l.A,{value:"java",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:"// Text Justification\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public List<String> fullJustify(String[] words, int maxWidth) {\n        List<String> result = new ArrayList<>();\n        final int n = words.length;\n        int begin = 0, len = 0; // \u5f53\u524d\u884c\u7684\u8d77\u70b9\uff0c\u5f53\u524d\u957f\u5ea6\n        for (int i = 0; i < n; ++i) {\n            if (len + words[i].length() + (i - begin) > maxWidth) {\n                result.add(connect(words, begin, i - 1, len, maxWidth, false));\n                begin = i;\n                len = 0;\n            }\n            len += words[i].length();\n        }\n        // \u6700\u540e\u4e00\u884c\u4e0d\u8db3 maxWidth\n        result.add(connect(words, begin, n - 1, len, maxWidth, true));\n        return result;\n    }\n    /**\n     * @brief \u5c06 words[begin, end] \u8fde\u6210\u4e00\u884c\n     * @param[in] words \u5355\u8bcd\u5217\u8868\n     * @param[in] begin \u5f00\u59cb\n     * @param[in] end \u7ed3\u675f\n     * @param[in] len words[begin, end]\u6240\u6709\u5355\u8bcd\u52a0\u8d77\u6765\u7684\u957f\u5ea6\n     * @param[in] L \u9898\u76ee\u89c4\u5b9a\u7684\u4e00\u884c\u957f\u5ea6\n     * @param[in] is_last \u662f\u5426\u662f\u6700\u540e\u4e00\u884c\n     * @return \u5bf9\u9f50\u540e\u7684\u5f53\u524d\u884c\n     */\n    private static String connect(String[] words, int begin, int end,\n                   int len, int L, boolean is_last) {\n        StringBuilder sb = new StringBuilder();\n        final int n = end - begin + 1;\n        for (int i = 0; i < n; ++i) {\n            sb.append(words[begin + i]);\n            addSpaces(sb, i, n - 1, L - len, is_last);\n        }\n\n        final int m = L - sb.length();\n        for (int i = 0; i < m; ++i) sb.append(' ');\n        return sb.toString();\n    }\n\n    /**\n     * @brief \u6dfb\u52a0\u7a7a\u683c.\n     * @param[inout]s \u4e00\u884c\n     * @param[in] i \u5f53\u524d\u7a7a\u9699\u7684\u5e8f\u53f7\n     * @param[in] n \u7a7a\u9699\u603b\u6570\n     * @param[in] L \u603b\u5171\u9700\u8981\u6dfb\u52a0\u7684\u7a7a\u989d\u6570\n     * @param[in] is_last \u662f\u5426\u662f\u6700\u540e\u4e00\u884c\n     * @return \u65e0\n     */\n    private static void addSpaces(StringBuilder sb, int i,\n                                  int n, int L, boolean is_last) {\n        if (n < 1 || i > n - 1) return;\n        int spaces = is_last ? 1 : (L / n + (i < (L % n) ? 1 : 0));\n        for (int j = 0; j < spaces; ++j) sb.append(' ');\n    }\n }\n"})})}),(0,a.jsx)(l.A,{value:"cpp",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-cpp",children:"// Text Justification\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    vector<string> fullJustify(vector<string> &words, int L) {\n        vector<string> result;\n        const int n = words.size();\n        int begin = 0, len = 0; // \u5f53\u524d\u884c\u7684\u8d77\u70b9\uff0c\u5f53\u524d\u957f\u5ea6\n        for (int i = 0; i < n; ++i) {\n            if (len + words[i].size() + (i - begin) > L) {\n                result.push_back(connect(words, begin, i - 1, len, L, false));\n                begin = i;\n                len = 0;\n            }\n            len += words[i].size();\n        }\n        // \u6700\u540e\u4e00\u884c\u4e0d\u8db3L\n        result.push_back(connect(words, begin, n - 1, len, L, true));\n        return result;\n    }\n    /**\n     * @brief \u5c06 words[begin, end] \u8fde\u6210\u4e00\u884c\n     * @param[in] words \u5355\u8bcd\u5217\u8868\n     * @param[in] begin \u5f00\u59cb\n     * @param[in] end \u7ed3\u675f\n     * @param[in] len words[begin, end]\u6240\u6709\u5355\u8bcd\u52a0\u8d77\u6765\u7684\u957f\u5ea6\n     * @param[in] L \u9898\u76ee\u89c4\u5b9a\u7684\u4e00\u884c\u957f\u5ea6\n     * @param[in] is_last \u662f\u5426\u662f\u6700\u540e\u4e00\u884c\n     * @return \u5bf9\u9f50\u540e\u7684\u5f53\u524d\u884c\n     */\n    string connect(vector<string> &words, int begin, int end,\n            int len, int L, bool is_last) {\n        string s;\n        int n = end - begin + 1;\n        for (int i = 0; i < n; ++i) {\n            s += words[begin + i];\n            addSpaces(s, i, n - 1, L - len, is_last);\n        }\n\n        if (s.size() < L) s.append(L - s.size(), ' ');\n        return s;\n    }\n\n    /**\n     * @brief \u6dfb\u52a0\u7a7a\u683c.\n     * @param[inout]s \u4e00\u884c\n     * @param[in] i \u5f53\u524d\u7a7a\u9699\u7684\u5e8f\u53f7\n     * @param[in] n \u7a7a\u9699\u603b\u6570\n     * @param[in] L \u603b\u5171\u9700\u8981\u6dfb\u52a0\u7684\u7a7a\u989d\u6570\n     * @param[in] is_last \u662f\u5426\u662f\u6700\u540e\u4e00\u884c\n     * @return \u65e0\n     */\n    void addSpaces(string &s, int i, int n, int L, bool is_last) {\n        if (n < 1 || i > n - 1) return;\n        int spaces = is_last ? 1 : (L / n + (i < (L % n) ? 1 : 0));\n        s.append(spaces, ' ');\n    }\n};\n"})})}),(0,a.jsx)(l.A,{value:"python",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:'# Text Justification\n# \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution:\n    def fullJustify(self, words, maxWidth):\n        result = []\n        n = len(words)\n        begin = 0\n        length = 0  # \u5f53\u524d\u884c\u7684\u8d77\u70b9\uff0c\u5f53\u524d\u957f\u5ea6\n        for i in range(n):\n            if length + len(words[i]) + (i - begin) > maxWidth:\n                result.append(self.connect(words, begin, i - 1, length, maxWidth, False))\n                begin = i\n                length = 0\n            length += len(words[i])\n        # \u6700\u540e\u4e00\u884c\u4e0d\u8db3 maxWidth\n        result.append(self.connect(words, begin, n - 1, length, maxWidth, True))\n        return result\n\n    def connect(self, words, begin, end, length, L, is_last):\n        """\n        \u5c06 words[begin, end] \u8fde\u6210\u4e00\u884c\n        :param words: \u5355\u8bcd\u5217\u8868\n        :param begin: \u5f00\u59cb\n        :param end: \u7ed3\u675f\n        :param length: words[begin, end]\u6240\u6709\u5355\u8bcd\u52a0\u8d77\u6765\u7684\u957f\u5ea6\n        :param L: \u9898\u76ee\u89c4\u5b9a\u7684\u4e00\u884c\u957f\u5ea6\n        :param is_last: \u662f\u5426\u662f\u6700\u540e\u4e00\u884c\n        :return: \u5bf9\u9f50\u540e\u7684\u5f53\u524d\u884c\n        """\n        sb = []\n        n = end - begin + 1\n        for i in range(n):\n            sb.append(words[begin + i])\n            self.addSpaces(sb, i, n - 1, L - length, is_last)\n\n        result = \'\'.join(sb)\n        return result + \' \' * (L - len(result))\n\n    def addSpaces(self, sb, i, n, L, is_last):\n        """\n        \u6dfb\u52a0\u7a7a\u683c\n        :param sb: \u4e00\u884c\n        :param i: \u5f53\u524d\u7a7a\u9699\u7684\u5e8f\u53f7\n        :param n: \u7a7a\u9699\u603b\u6570\n        :param L: \u603b\u5171\u9700\u8981\u6dfb\u52a0\u7684\u7a7a\u989d\u6570\n        :param is_last: \u662f\u5426\u662f\u6700\u540e\u4e00\u884c\n        :return: \u65e0\n        """\n        if n < 1 or i > n - 1:\n            return\n        spaces = 1 if is_last else (L // n + (1 if i < (L % n) else 0))\n        sb.append(\' \' * spaces)\n'})})})]})]})}function h(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(p,{...n})}):p(n)}},19365:(n,e,t)=>{t.d(e,{A:()=>s});t(96540);var i=t(34164);const a={tabItem:"tabItem_Ymn6"};var r=t(74848);function s(n){let{children:e,hidden:t,className:s}=n;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.A)(a.tabItem,s),hidden:t,children:e})}},11470:(n,e,t)=>{t.d(e,{A:()=>y});var i=t(96540),a=t(34164),r=t(23104),s=t(56347),l=t(205),o=t(57485),u=t(31682),c=t(70679);function d(n){return i.Children.toArray(n).filter((n=>"\n"!==n)).map((n=>{if(!n||(0,i.isValidElement)(n)&&function(n){const{props:e}=n;return!!e&&"object"==typeof e&&"value"in e}(n))return n;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof n.type?n.type:n.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(n){const{values:e,children:t}=n;return(0,i.useMemo)((()=>{const n=e??function(n){return d(n).map((n=>{let{props:{value:e,label:t,attributes:i,default:a}}=n;return{value:e,label:t,attributes:i,default:a}}))}(t);return function(n){const e=(0,u.XI)(n,((n,e)=>n.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((n=>n.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(n),n}),[e,t])}function h(n){let{value:e,tabValues:t}=n;return t.some((n=>n.value===e))}function f(n){let{queryString:e=!1,groupId:t}=n;const a=(0,s.W6)(),r=function(n){let{queryString:e=!1,groupId:t}=n;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:e,groupId:t});return[(0,o.aZ)(r),(0,i.useCallback)((n=>{if(!r)return;const e=new URLSearchParams(a.location.search);e.set(r,n),a.replace({...a.location,search:e.toString()})}),[r,a])]}function b(n){const{defaultValue:e,queryString:t=!1,groupId:a}=n,r=p(n),[s,o]=(0,i.useState)((()=>function(n){let{defaultValue:e,tabValues:t}=n;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!h({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((n=>n.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const i=t.find((n=>n.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:e,tabValues:r}))),[u,d]=f({queryString:t,groupId:a}),[b,m]=function(n){let{groupId:e}=n;const t=function(n){return n?`docusaurus.tab.${n}`:null}(e),[a,r]=(0,c.Dv)(t);return[a,(0,i.useCallback)((n=>{t&&r.set(n)}),[t,r])]}({groupId:a}),g=(()=>{const n=u??b;return h({value:n,tabValues:r})?n:null})();(0,l.A)((()=>{g&&o(g)}),[g]);return{selectedValue:s,selectValue:(0,i.useCallback)((n=>{if(!h({value:n,tabValues:r}))throw new Error(`Can't select invalid tab value=${n}`);o(n),d(n),m(n)}),[d,m,r]),tabValues:r}}var m=t(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function v(n){let{className:e,block:t,selectedValue:i,selectValue:s,tabValues:l}=n;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.a_)(),c=n=>{const e=n.currentTarget,t=o.indexOf(e),a=l[t].value;a!==i&&(u(e),s(a))},d=n=>{let e=null;switch(n.key){case"Enter":c(n);break;case"ArrowRight":{const t=o.indexOf(n.currentTarget)+1;e=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(n.currentTarget)-1;e=o[t]??o[o.length-1];break}}e?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},e),children:l.map((n=>{let{value:e,label:t,attributes:r}=n;return(0,x.jsx)("li",{role:"tab",tabIndex:i===e?0:-1,"aria-selected":i===e,ref:n=>o.push(n),onKeyDown:d,onClick:c,...r,className:(0,a.A)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":i===e}),children:t??e},e)}))})}function w(n){let{lazy:e,children:t,selectedValue:r}=n;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const n=s.find((n=>n.props.value===r));return n?(0,i.cloneElement)(n,{className:(0,a.A)("margin-top--md",n.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((n,e)=>(0,i.cloneElement)(n,{key:e,hidden:n.props.value!==r})))})}function j(n){const e=b(n);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,x.jsx)(v,{...e,...n}),(0,x.jsx)(w,{...e,...n})]})}function y(n){const e=(0,m.A)();return(0,x.jsx)(j,{...n,children:d(n.children)},String(e))}},28453:(n,e,t)=>{t.d(e,{R:()=>s,x:()=>l});var i=t(96540);const a={},r=i.createContext(a);function s(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:s(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);