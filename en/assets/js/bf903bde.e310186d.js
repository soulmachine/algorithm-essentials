"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[7736],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=a.createContext({}),u=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(o.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(t),m=i,f=d["".concat(o,".").concat(m)]||d[m]||p[m]||r;return t?a.createElement(f,l(l({ref:n},c),{},{components:t})):a.createElement(f,l({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=d;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var u=2;u<r;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(7294),i=t(6010);const r="tabItem_Ymn6";function l(e){let{children:n,hidden:t,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(r,l),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(7462),i=t(7294),r=t(6010),l=t(2389),s=t(7392),o=t(7094),u=t(2466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var n;const{lazy:t,block:l,defaultValue:d,values:m,groupId:f,className:b}=e,h=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=m??h.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),v=(0,s.l)(g,((e,n)=>e.value===n.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===d?d:d??(null==(n=h.find((e=>e.props.default)))?void 0:n.props.value)??h[0].props.value;if(null!==y&&!g.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:k}=(0,o.U)(),[x,L]=(0,i.useState)(y),j=[],{blockElementScrollPositionUntilNextRender:O}=(0,u.o5)();if(null!=f){const e=w[f];null!=e&&e!==x&&g.some((n=>n.value===e))&&L(e)}const T=e=>{const n=e.currentTarget,t=j.indexOf(n),a=g[t].value;a!==x&&(O(n),L(a),null!=f&&k(f,String(a)))},N=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=j.indexOf(e.currentTarget)+1;t=j[n]??j[0];break}case"ArrowLeft":{const n=j.indexOf(e.currentTarget)-1;t=j[n]??j[j.length-1];break}}null==(n=t)||n.focus()};return i.createElement("div",{className:(0,r.Z)("tabs-container",c)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},b)},g.map((e=>{let{value:n,label:t,attributes:l}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===n?0:-1,"aria-selected":x===n,key:n,ref:e=>j.push(e),onKeyDown:N,onFocus:T,onClick:T},l,{className:(0,r.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":x===n})}),t??n)}))),t?(0,i.cloneElement)(h.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},h.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==x})))))}function m(e){const n=(0,l.Z)();return i.createElement(d,(0,a.Z)({key:String(n)},e))}},2538:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var a=t(7462),i=(t(7294),t(3905)),r=t(5488),l=t(5162);const s={title:"Text Justification"},o=void 0,u={unversionedId:"simulation/text-justification",id:"simulation/text-justification",title:"Text Justification",description:"\u63cf\u8ff0",source:"@site/docs/simulation/text-justification.md",sourceDirName:"simulation",slug:"/simulation/text-justification",permalink:"/en/simulation/text-justification",draft:!1,tags:[],version:"current",frontMatter:{title:"Text Justification"},sidebar:"docs",previous:{title:"Divide Two Integers",permalink:"/en/simulation/divide-two-integers"},next:{title:"Max Points on a Line",permalink:"/en/simulation/max-points-on-a-line"}},c={},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}],d={toc:p};function m(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,i.kt)("p",null,"Given an array of words and a length ",(0,i.kt)("inlineCode",{parentName:"p"},"L"),", format the text such that each line has exactly ",(0,i.kt)("inlineCode",{parentName:"p"},"L")," characters and is fully (left and right) justified."),(0,i.kt)("p",null,"You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ",(0,i.kt)("inlineCode",{parentName:"p"},"' '")," when necessary so that each line has exactly ",(0,i.kt)("inlineCode",{parentName:"p"},"L")," characters."),(0,i.kt)("p",null,"Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line do not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right."),(0,i.kt)("p",null,"For the last line of text, it should be left justified and no extra space is inserted between words."),(0,i.kt)("p",null,"For example,"),(0,i.kt)("p",null,"words: ",(0,i.kt)("inlineCode",{parentName:"p"},'["This", "is", "an", "example", "of", "text", "justification."]')),(0,i.kt)("p",null,"L: 16."),(0,i.kt)("p",null,"Return the formatted lines as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'[\n   "This    is    an",\n   "example  of text",\n   "justification.  "\n]\n')),(0,i.kt)("p",null,"Note: Each word is guaranteed not to exceed ",(0,i.kt)("inlineCode",{parentName:"p"},"L")," in length."),(0,i.kt)("p",null,"Corner Cases:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A line other than the last line might contain only one word. What should you do in this case?"),(0,i.kt)("li",{parentName:"ul"},"In this case, that line should be left")),(0,i.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,i.kt)("p",null,"\u65e0"),(0,i.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,i.kt)(r.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Text Justification\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public List<String> fullJustify(String[] words, int maxWidth) {\n        List<String> result = new ArrayList<>();\n        final int n = words.length;\n        int begin = 0, len = 0; // \u5f53\u524d\u884c\u7684\u8d77\u70b9\uff0c\u5f53\u524d\u957f\u5ea6\n        for (int i = 0; i < n; ++i) {\n            if (len + words[i].length() + (i - begin) > maxWidth) {\n                result.add(connect(words, begin, i - 1, len, maxWidth, false));\n                begin = i;\n                len = 0;\n            }\n            len += words[i].length();\n        }\n        // \u6700\u540e\u4e00\u884c\u4e0d\u8db3 maxWidth\n        result.add(connect(words, begin, n - 1, len, maxWidth, true));\n        return result;\n    }\n    /**\n     * @brief \u5c06 words[begin, end] \u8fde\u6210\u4e00\u884c\n     * @param[in] words \u5355\u8bcd\u5217\u8868\n     * @param[in] begin \u5f00\u59cb\n     * @param[in] end \u7ed3\u675f\n     * @param[in] len words[begin, end]\u6240\u6709\u5355\u8bcd\u52a0\u8d77\u6765\u7684\u957f\u5ea6\n     * @param[in] L \u9898\u76ee\u89c4\u5b9a\u7684\u4e00\u884c\u957f\u5ea6\n     * @param[in] is_last \u662f\u5426\u662f\u6700\u540e\u4e00\u884c\n     * @return \u5bf9\u9f50\u540e\u7684\u5f53\u524d\u884c\n     */\n    private static String connect(String[] words, int begin, int end,\n                   int len, int L, boolean is_last) {\n        StringBuilder sb = new StringBuilder();\n        final int n = end - begin + 1;\n        for (int i = 0; i < n; ++i) {\n            sb.append(words[begin + i]);\n            addSpaces(sb, i, n - 1, L - len, is_last);\n        }\n\n        final int m = L - sb.length();\n        for (int i = 0; i < m; ++i) sb.append(' ');\n        return sb.toString();\n    }\n\n    /**\n     * @brief \u6dfb\u52a0\u7a7a\u683c.\n     * @param[inout]s \u4e00\u884c\n     * @param[in] i \u5f53\u524d\u7a7a\u9699\u7684\u5e8f\u53f7\n     * @param[in] n \u7a7a\u9699\u603b\u6570\n     * @param[in] L \u603b\u5171\u9700\u8981\u6dfb\u52a0\u7684\u7a7a\u989d\u6570\n     * @param[in] is_last \u662f\u5426\u662f\u6700\u540e\u4e00\u884c\n     * @return \u65e0\n     */\n    private static void addSpaces(StringBuilder sb, int i,\n                                  int n, int L, boolean is_last) {\n        if (n < 1 || i > n - 1) return;\n        int spaces = is_last ? 1 : (L / n + (i < (L % n) ? 1 : 0));\n        for (int j = 0; j < spaces; ++j) sb.append(' ');\n    }\n }\n"))),(0,i.kt)(l.Z,{value:"cpp",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"// Text Justification\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    vector<string> fullJustify(vector<string> &words, int L) {\n        vector<string> result;\n        const int n = words.size();\n        int begin = 0, len = 0; // \u5f53\u524d\u884c\u7684\u8d77\u70b9\uff0c\u5f53\u524d\u957f\u5ea6\n        for (int i = 0; i < n; ++i) {\n            if (len + words[i].size() + (i - begin) > L) {\n                result.push_back(connect(words, begin, i - 1, len, L, false));\n                begin = i;\n                len = 0;\n            }\n            len += words[i].size();\n        }\n        // \u6700\u540e\u4e00\u884c\u4e0d\u8db3L\n        result.push_back(connect(words, begin, n - 1, len, L, true));\n        return result;\n    }\n    /**\n     * @brief \u5c06 words[begin, end] \u8fde\u6210\u4e00\u884c\n     * @param[in] words \u5355\u8bcd\u5217\u8868\n     * @param[in] begin \u5f00\u59cb\n     * @param[in] end \u7ed3\u675f\n     * @param[in] len words[begin, end]\u6240\u6709\u5355\u8bcd\u52a0\u8d77\u6765\u7684\u957f\u5ea6\n     * @param[in] L \u9898\u76ee\u89c4\u5b9a\u7684\u4e00\u884c\u957f\u5ea6\n     * @param[in] is_last \u662f\u5426\u662f\u6700\u540e\u4e00\u884c\n     * @return \u5bf9\u9f50\u540e\u7684\u5f53\u524d\u884c\n     */\n    string connect(vector<string> &words, int begin, int end,\n            int len, int L, bool is_last) {\n        string s;\n        int n = end - begin + 1;\n        for (int i = 0; i < n; ++i) {\n            s += words[begin + i];\n            addSpaces(s, i, n - 1, L - len, is_last);\n        }\n\n        if (s.size() < L) s.append(L - s.size(), ' ');\n        return s;\n    }\n\n    /**\n     * @brief \u6dfb\u52a0\u7a7a\u683c.\n     * @param[inout]s \u4e00\u884c\n     * @param[in] i \u5f53\u524d\u7a7a\u9699\u7684\u5e8f\u53f7\n     * @param[in] n \u7a7a\u9699\u603b\u6570\n     * @param[in] L \u603b\u5171\u9700\u8981\u6dfb\u52a0\u7684\u7a7a\u989d\u6570\n     * @param[in] is_last \u662f\u5426\u662f\u6700\u540e\u4e00\u884c\n     * @return \u65e0\n     */\n    void addSpaces(string &s, int i, int n, int L, bool is_last) {\n        if (n < 1 || i > n - 1) return;\n        int spaces = is_last ? 1 : (L / n + (i < (L % n) ? 1 : 0));\n        s.append(spaces, ' ');\n    }\n};\n")))))}m.isMDXComponent=!0}}]);