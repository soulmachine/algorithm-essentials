"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[7617],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),a=n(6010);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,l),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(7462),a=n(7294),i=n(6010),l=n(2389),o=n(7392),s=n(7094),u=n(2466);const c="tabList__CuJ",p="tabItem_LNqP";function m(e){var t,n;const{lazy:l,block:m,defaultValue:d,values:f,groupId:g,className:h}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=f?f:v.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),y=(0,o.l)(b,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===d?d:null!=(t=null!=d?d:null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)?t:v[0].props.value;if(null!==k&&!b.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:I}=(0,s.U)(),[w,T]=(0,a.useState)(k),O=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=g){const e=N[g];null!=e&&e!==w&&b.some((t=>t.value===e))&&T(e)}const A=e=>{const t=e.currentTarget,n=O.indexOf(t),r=b[n].value;r!==w&&(E(t),T(r),null!=g&&I(g,String(r)))},j=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var r;const t=O.indexOf(e.currentTarget)+1;n=null!=(r=O[t])?r:O[0];break}case"ArrowLeft":{var a;const t=O.indexOf(e.currentTarget)-1;n=null!=(a=O[t])?a:O[O.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":m},h)},b.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>O.push(e),onKeyDown:j,onFocus:A,onClick:A},l,{className:(0,i.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(v.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,l.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},6642:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var r=n(7462),a=(n(7294),n(3905)),i=n(5488),l=n(5162);const o={title:"String to Integer (atoi)"},s=void 0,u={unversionedId:"string/atoi",id:"string/atoi",title:"String to Integer (atoi)",description:"\u63cf\u8ff0",source:"@site/docs/string/atoi.md",sourceDirName:"string",slug:"/string/atoi",permalink:"/string/atoi",draft:!1,editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/string/atoi.md",tags:[],version:"current",frontMatter:{title:"String to Integer (atoi)"},sidebar:"someSidebar",previous:{title:"Implement strStr()",permalink:"/string/strstr"},next:{title:"Longest Palindromic Substring",permalink:"/string/longest-palindromic-substring"}},c={},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],m={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.kt)("p",null,"Implement ",(0,a.kt)("inlineCode",{parentName:"p"},"atoi")," to convert a string to an integer."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Hint"),": Carefully consider all possible input cases. If you want a challenge, please do not see below and ask yourself what are the possible input cases."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Notes"),": It is intended for this problem to be specified vaguely (ie, no given input specs). You are responsible to gather all the input requirements up front."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Requirements for atoi"),":"),(0,a.kt)("p",null,"The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value."),(0,a.kt)("p",null,"The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function."),(0,a.kt)("p",null,"If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed."),(0,a.kt)("p",null,"If no valid conversion could be performed, a zero value is returned. If the correct value is out of the range of representable values, ",(0,a.kt)("inlineCode",{parentName:"p"},"INT_MAX (2147483647)")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"INT_MIN (-2147483648)")," is returned."),(0,a.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,a.kt)("p",null,"\u7ec6\u8282\u9898\u3002\u6ce8\u610f\u51e0\u4e2a\u6d4b\u8bd5\u7528\u4f8b\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'\u4e0d\u89c4\u5219\u8f93\u5165\uff0c\u4f46\u662f\u6709\u6548\uff0c"-3924x8fc"\uff0c " + 413",'),(0,a.kt)("li",{parentName:"ol"},'\u65e0\u6548\u683c\u5f0f\uff0c" ++c", " ++1"'),(0,a.kt)("li",{parentName:"ol"},'\u6ea2\u51fa\u6570\u636e\uff0c"2147483648"')),(0,a.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,a.kt)(i.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// String to Integer (atoi)\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\n    public int myAtoi(final String str) {\n        int num = 0;\n        int sign = 1;\n        final int n = str.length();\n        if (n == 0) return 0;\n\n        int i = 0;\n        while (i < n && str.charAt(i) == ' ') i++;\n\n        if (str.charAt(i) == '+') {\n            i++;\n        } else if (str.charAt(i) == '-') {\n            sign = -1;\n            i++;\n        }\n\n        for (; i < n; i++) {\n            if (str.charAt(i) < '0' || str.charAt(i) > '9')\n                break;\n            if (num > Integer.MAX_VALUE / 10 ||\n                    (num == Integer.MAX_VALUE / 10 &&\n                            (str.charAt(i) - '0') > Integer.MAX_VALUE % 10)) {\n                return sign == -1 ? Integer.MIN_VALUE : Integer.MAX_VALUE;\n            }\n            num = num * 10 + str.charAt(i) - '0';\n        }\n        return num * sign;\n    }\n}\n"))),(0,a.kt)(l.Z,{value:"cpp",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// String to Integer (atoi)\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    int myAtoi(const string &str) {\n        int num = 0;\n        int sign = 1;\n        const int n = str.length();\n        if (n == 0) return 0;\n\n        int i = 0;\n        while (str[i] == ' ' && i < n) i++;\n\n        if (str[i] == '+') {\n            i++;\n        } else if (str[i] == '-') {\n            sign = -1;\n            i++;\n        }\n\n        for (; i < n; i++) {\n            if (str[i] < '0' || str[i] > '9')\n                break;\n            if (num > INT_MAX / 10 ||\n                            (num == INT_MAX / 10 &&\n                                    (str[i] - '0') > INT_MAX % 10)) {\n                return sign == -1 ? INT_MIN : INT_MAX;\n            }\n            num = num * 10 + str[i] - '0';\n        }\n        return num * sign;\n    }\n};\n")))),(0,a.kt)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/string/strstr"},"Implement strStr()"))))}d.isMDXComponent=!0}}]);