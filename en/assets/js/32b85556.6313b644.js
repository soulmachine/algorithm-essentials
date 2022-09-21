"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[9261],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(t),d=a,v=p["".concat(u,".").concat(d)]||p[d]||m[d]||o;return t?r.createElement(v,l(l({ref:n},c),{},{components:t})):r.createElement(v,l({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=p;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(7294),a=t(6010);const o="tabItem_Ymn6";function l(e){let{children:n,hidden:t,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>d});var r=t(7462),a=t(7294),o=t(6010),l=t(2389),i=t(7392),u=t(7094),s=t(2466);const c="tabList__CuJ",m="tabItem_LNqP";function p(e){var n;const{lazy:t,block:l,defaultValue:p,values:d,groupId:v,className:f}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=d??b.map((e=>{let{props:{value:n,label:t,attributes:r}}=e;return{value:n,label:t,attributes:r}})),y=(0,i.l)(g,((e,n)=>e.value===n.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===p?p:p??(null==(n=b.find((e=>e.props.default)))?void 0:n.props.value)??b[0].props.value;if(null!==h&&!g.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:O}=(0,u.U)(),[w,T]=(0,a.useState)(h),I=[],{blockElementScrollPositionUntilNextRender:x}=(0,s.o5)();if(null!=v){const e=k[v];null!=e&&e!==w&&g.some((n=>n.value===e))&&T(e)}const E=e=>{const n=e.currentTarget,t=I.indexOf(n),r=g[t].value;r!==w&&(x(n),T(r),null!=v&&O(v,String(r)))},j=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=I.indexOf(e.currentTarget)+1;t=I[n]??I[0];break}case"ArrowLeft":{const n=I.indexOf(e.currentTarget)-1;t=I[n]??I[I.length-1];break}}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},f)},g.map((e=>{let{value:n,label:t,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:e=>I.push(e),onKeyDown:j,onFocus:E,onClick:E},l,{className:(0,o.Z)("tabs__item",m,null==l?void 0:l.className,{"tabs__item--active":w===n})}),t??n)}))),t?(0,a.cloneElement)(b.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==w})))))}function d(e){const n=(0,l.Z)();return a.createElement(p,(0,r.Z)({key:String(n)},e))}},7074:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var r=t(7462),a=(t(7294),t(3905)),o=t(5488),l=t(5162);const i={title:"Integer to Roman"},u=void 0,s={unversionedId:"string/integer-to-roman",id:"string/integer-to-roman",title:"Integer to Roman",description:"\u63cf\u8ff0",source:"@site/docs/string/integer-to-roman.md",sourceDirName:"string",slug:"/string/integer-to-roman",permalink:"/en/string/integer-to-roman",draft:!1,tags:[],version:"current",frontMatter:{title:"Integer to Roman"},sidebar:"docs",previous:{title:"Valid Number",permalink:"/en/string/valid-number"},next:{title:"Roman to Integer",permalink:"/en/string/roman-to-integer"}},c={},m=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],p={toc:m};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.kt)("p",null,"Given an integer, convert it to a roman numeral."),(0,a.kt)("p",null,"Input is guaranteed to be within the range from 1 to 3999."),(0,a.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,a.kt)("p",null,"\u65e0"),(0,a.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,a.kt)(o.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'// Integer to Roman\n// \u65f6\u95f4\u590d\u6742\u5ea6O(num)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\n    public String intToRoman(int num) {\n        final int radix[] = {1000, 900, 500, 400, 100, 90,\n                50, 40, 10, 9, 5, 4, 1};\n        final String symbol[] = {"M", "CM", "D", "CD", "C", "XC",\n                "L", "XL", "X", "IX", "V", "IV", "I"};\n\n        StringBuilder roman = new StringBuilder();\n        for (int i = 0; num > 0; ++i) {\n            int count = num / radix[i];\n            num %= radix[i];\n            for (; count > 0; --count) roman.append(symbol[i]);\n        }\n        return roman.toString();\n    }\n}\n'))),(0,a.kt)(l.Z,{value:"cpp",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'// Integer to Roman\n// \u65f6\u95f4\u590d\u6742\u5ea6O(num)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    string intToRoman(int num) {\n        const int radix[] = {1000, 900, 500, 400, 100, 90,\n                50, 40, 10, 9, 5, 4, 1};\n        const string symbol[] = {"M", "CM", "D", "CD", "C", "XC",\n                "L", "XL", "X", "IX", "V", "IV", "I"};\n\n        string roman;\n        for (size_t i = 0; num > 0; ++i) {\n            int count = num / radix[i];\n            num %= radix[i];\n            for (; count > 0; --count) roman += symbol[i];\n        }\n        return roman;\n    }\n};\n')))),(0,a.kt)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/en/string/roman-to-integer"},"Roman to Integer"))))}d.isMDXComponent=!0}}]);