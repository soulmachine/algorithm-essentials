"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[7648],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,v=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return t?r.createElement(v,l(l({ref:n},c),{},{components:t})):r.createElement(v,l({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(7294),a=t(6010);const i="tabItem_Ymn6";function l(e){let{children:n,hidden:t,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,l),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>m});var r=t(7462),a=t(7294),i=t(6010),l=t(2389),o=t(7392),s=t(7094),u=t(2466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var n;const{lazy:t,block:l,defaultValue:d,values:m,groupId:v,className:f}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=m??g.map((e=>{let{props:{value:n,label:t,attributes:r}}=e;return{value:n,label:t,attributes:r}})),h=(0,o.l)(b,((e,n)=>e.value===n.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===d?d:d??(null==(n=g.find((e=>e.props.default)))?void 0:n.props.value)??g[0].props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:w}=(0,s.U)(),[N,I]=(0,a.useState)(y),x=[],{blockElementScrollPositionUntilNextRender:O}=(0,u.o5)();if(null!=v){const e=k[v];null!=e&&e!==N&&b.some((n=>n.value===e))&&I(e)}const j=e=>{const n=e.currentTarget,t=x.indexOf(n),r=b[t].value;r!==N&&(O(n),I(r),null!=v&&w(v,String(r)))},P=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=x.indexOf(e.currentTarget)+1;t=x[n]??x[0];break}case"ArrowLeft":{const n=x.indexOf(e.currentTarget)-1;t=x[n]??x[x.length-1];break}}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":l},f)},b.map((e=>{let{value:n,label:t,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,key:n,ref:e=>x.push(e),onKeyDown:P,onFocus:j,onClick:j},l,{className:(0,i.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":N===n})}),t??n)}))),t?(0,a.cloneElement)(g.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==N})))))}function m(e){const n=(0,l.Z)();return a.createElement(d,(0,r.Z)({key:String(n)},e))}},3618:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var r=t(7462),a=(t(7294),t(3905)),i=t(5488),l=t(5162);const o={title:"ZigZag Conversion"},s=void 0,u={unversionedId:"simulation/zigzag-conversion",id:"simulation/zigzag-conversion",title:"ZigZag Conversion",description:"\u63cf\u8ff0",source:"@site/docs/simulation/zigzag-conversion.md",sourceDirName:"simulation",slug:"/simulation/zigzag-conversion",permalink:"/en/simulation/zigzag-conversion",draft:!1,tags:[],version:"current",frontMatter:{title:"ZigZag Conversion"},sidebar:"docs",previous:{title:"Spiral Matrix II",permalink:"/en/simulation/spiral-matrix-ii"},next:{title:"Divide Two Integers",permalink:"/en/simulation/divide-two-integers"}},c={},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}],d={toc:p};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.kt)("p",null,"The string ",(0,a.kt)("inlineCode",{parentName:"p"},'"PAYPALISHIRING"')," is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"P   A   H   N\nA P L S I I G\nY   I   R\n")),(0,a.kt)("p",null,"And then read line by line: ",(0,a.kt)("inlineCode",{parentName:"p"},'"PAHNAPLSIIGYIR"')),(0,a.kt)("p",null,"Write the code that will take a string and make this conversion given a number of rows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"string convert(string text, int nRows);\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'convert("PAYPALISHIRING", 3)')," should return ",(0,a.kt)("inlineCode",{parentName:"p"},'"PAHNAPLSIIGYIR"'),"."),(0,a.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,a.kt)("p",null,"\u8981\u627e\u5230\u6570\u5b66\u89c4\u5f8b\u3002\u771f\u6b63\u9762\u8bd5\u4e2d\uff0c\u4e0d\u5927\u53ef\u80fd\u51fa\u8fd9\u79cd\u95ee\u9898\u3002"),(0,a.kt)("p",null,"n=4:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"P     I     N\nA   L S   I G\nY A   H R\nP     I\n")),(0,a.kt)("p",null,"n=5:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"P       H\nA     S I\nY   I   R\nP L     I  G\nA       N\n")),(0,a.kt)("p",null,"\u6240\u4ee5\uff0c\u5bf9\u4e8e\u6bcf\u4e00\u5c42\u5782\u76f4\u5143\u7d20\u7684\u5750\u6807 ",(0,a.kt)("inlineCode",{parentName:"p"},"(i,j)= (j+1 )*n +i"),"\uff1b\u5bf9\u4e8e\u6bcf\u4e24\u5c42\u5782\u76f4\u5143\u7d20\u4e4b\u95f4\u7684\u63d2\u5165\u5143\u7d20\uff08\u659c\u5bf9\u89d2\u5143\u7d20\uff09\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"(i,j)= (j+1)*n -i")),(0,a.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,a.kt)(i.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// ZigZag Conversion\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public String convert(String s, int numRows) {\n        if (numRows <= 1 || s.length() <= 1) return s;\n        StringBuilder result = new StringBuilder();\n        for (int i = 0; i < numRows; i++) {\n            for (int j = 0, index = i; index < s.length();\n                 j++, index = (2 * numRows - 2) * j + i) {\n                result.append(s.charAt(index));  // \u5782\u76f4\u5143\u7d20\n                if (i == 0 || i == numRows - 1) continue;   // \u659c\u5bf9\u89d2\u5143\u7d20\n                if (index + (numRows - i - 1) * 2 < s.length())\n                    result.append(s.charAt(index + (numRows - i - 1) * 2));\n            }\n        }\n        return result.toString();\n    }\n}\n"))),(0,a.kt)(l.Z,{value:"cpp",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// LeetCode, ZigZag Conversion\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    string convert(string s, int nRows) {\n        if (nRows <= 1 || s.size() <= 1) return s;\n        string result;\n        for (int i = 0; i < nRows; i++) {\n            for (int j = 0, index = i; index < s.size();\n                    j++, index = (2 * nRows - 2) * j + i) {\n                result.append(1, s[index]);  // \u5782\u76f4\u5143\u7d20\n                if (i == 0 || i == nRows - 1) continue;   // \u659c\u5bf9\u89d2\u5143\u7d20\n                if (index + (nRows - i - 1) * 2 < s.size())\n                    result.append(1, s[index + (nRows - i - 1) * 2]);\n            }\n        }\n        return result;\n    }\n};\n")))))}m.isMDXComponent=!0}}]);