"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[6549],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(t),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return t?a.createElement(f,i(i({ref:n},c),{},{components:t})):a.createElement(f,i({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(7294),r=t(6010);const l="tabItem_Ymn6";function i(e){let{children:n,hidden:t,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(7462),r=t(7294),l=t(6010),i=t(2389),o=t(7392),s=t(7094),u=t(2466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var n;const{lazy:t,block:i,defaultValue:d,values:m,groupId:f,className:g}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=m??b.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),h=(0,o.l)(v,((e,n)=>e.value===n.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===d?d:d??(null==(n=b.find((e=>e.props.default)))?void 0:n.props.value)??b[0].props.value;if(null!==y&&!v.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:N}=(0,s.U)(),[w,O]=(0,r.useState)(y),j=[],{blockElementScrollPositionUntilNextRender:C}=(0,u.o5)();if(null!=f){const e=k[f];null!=e&&e!==w&&v.some((n=>n.value===e))&&O(e)}const T=e=>{const n=e.currentTarget,t=j.indexOf(n),a=v[t].value;a!==w&&(C(n),O(a),null!=f&&N(f,String(a)))},x=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=j.indexOf(e.currentTarget)+1;t=j[n]??j[0];break}case"ArrowLeft":{const n=j.indexOf(e.currentTarget)-1;t=j[n]??j[j.length-1];break}}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},g)},v.map((e=>{let{value:n,label:t,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:e=>j.push(e),onKeyDown:x,onFocus:T,onClick:T},i,{className:(0,l.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":w===n})}),t??n)}))),t?(0,r.cloneElement)(b.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==w})))))}function m(e){const n=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(n)},e))}},8766:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var a=t(7462),r=(t(7294),t(3905)),l=t(5488),i=t(5162);const o={title:"Count and Say"},s=void 0,u={unversionedId:"string/count-and-say",id:"string/count-and-say",title:"Count and Say",description:"\u63cf\u8ff0",source:"@site/docs/string/count-and-say.md",sourceDirName:"string",slug:"/string/count-and-say",permalink:"/en/string/count-and-say",draft:!1,tags:[],version:"current",frontMatter:{title:"Count and Say"},sidebar:"docs",previous:{title:"Roman to Integer",permalink:"/en/string/roman-to-integer"},next:{title:"Anagrams",permalink:"/en/string/anagrams"}},c={},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}],d={toc:p};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.kt)("p",null,"The count-and-say sequence is the sequence of integers beginning as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"1, 11, 21, 1211, 111221, ...\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"1")," is read off as ",(0,r.kt)("inlineCode",{parentName:"p"},'"one 1"')," or ",(0,r.kt)("inlineCode",{parentName:"p"},"11"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"11")," is read off as ",(0,r.kt)("inlineCode",{parentName:"p"},'"two 1s"')," or ",(0,r.kt)("inlineCode",{parentName:"p"},"21"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"21")," is read off as ",(0,r.kt)("inlineCode",{parentName:"p"},'"one 2"'),", then ",(0,r.kt)("inlineCode",{parentName:"p"},'"one 1"')," or ",(0,r.kt)("inlineCode",{parentName:"p"},"1211"),"."),(0,r.kt)("p",null,"Given an integer ",(0,r.kt)("inlineCode",{parentName:"p"},"n"),", generate the nth sequence."),(0,r.kt)("p",null,"Note: The sequence of integers will be represented as a string."),(0,r.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,r.kt)("p",null,"\u6a21\u62df\u3002"),(0,r.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,r.kt)(l.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// Count and Say\n// @author \u8fde\u57ce (http://weibo.com/lianchengzju)\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\n    public String countAndSay(int n) {\n        String s = "1";\n\n        while (--n > 0)\n            s = getNext(s);\n\n        return s;\n    }\n\n    String getNext(final String s) {\n        StringBuilder sb = new StringBuilder();\n\n        for (int i = 0; i < s.length();) {\n            int j = notEqual(s, i);\n            sb.append(j - i);\n            sb.append(s.charAt(i));\n            i = j;\n        }\n\n        return sb.toString();\n    }\n    // find the first char that not equal to fromIndex\n    private static int notEqual(final String s, int fromIndex) {\n        final char target = s.charAt(fromIndex);\n        int i = fromIndex;\n        for (; i < s.length(); ++i) {\n            if (s.charAt(i) != target) break;\n        }\n        return i;\n    }\n}\n'))),(0,r.kt)(i.Z,{value:"cpp",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'// Count and Say\n// @author \u8fde\u57ce (http://weibo.com/lianchengzju)\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\npublic:\n    string countAndSay(int n) {\n        string s("1");\n\n        while (--n)\n            s = getNext(s);\n\n        return s;\n    }\n\n    string getNext(const string &s) {\n        stringstream ss;\n\n        for (auto i = s.begin(); i != s.end(); ) {\n            auto j = find_if(i, s.end(), bind1st(not_equal_to<char>(), *i));\n            ss << distance(i, j) << *i;\n            i = j;\n        }\n\n        return ss.str();\n    }\n};\n')))))}m.isMDXComponent=!0}}]);