"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[757],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),u=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(o.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(t),d=a,v=m["".concat(o,".").concat(d)]||m[d]||p[d]||l;return t?r.createElement(v,i(i({ref:n},c),{},{components:t})):r.createElement(v,i({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=m;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<l;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(7294),a=t(6010);const l="tabItem_Ymn6";function i(e){let{children:n,hidden:t,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,i),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>d});var r=t(7462),a=t(7294),l=t(6010),i=t(2389),s=t(7392),o=t(7094),u=t(2466);const c="tabList__CuJ",p="tabItem_LNqP";function m(e){var n,t;const{lazy:i,block:m,defaultValue:d,values:v,groupId:f,className:b}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=v?v:g.map((e=>{let{props:{value:n,label:t,attributes:r}}=e;return{value:n,label:t,attributes:r}})),h=(0,s.l)(y,((e,n)=>e.value===n.value));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===d?d:null!=(n=null!=d?d:null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)?n:g[0].props.value;if(null!==k&&!y.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:j}=(0,o.U)(),[T,O]=(0,a.useState)(k),N=[],{blockElementScrollPositionUntilNextRender:I}=(0,u.o5)();if(null!=f){const e=w[f];null!=e&&e!==T&&y.some((n=>n.value===e))&&O(e)}const P=e=>{const n=e.currentTarget,t=N.indexOf(n),r=y[t].value;r!==T&&(I(n),O(r),null!=f&&j(f,String(r)))},E=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{var r;const n=N.indexOf(e.currentTarget)+1;t=null!=(r=N[n])?r:N[0];break}case"ArrowLeft":{var a;const n=N.indexOf(e.currentTarget)-1;t=null!=(a=N[n])?a:N[N.length-1];break}}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},b)},y.map((e=>{let{value:n,label:t,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:e=>N.push(e),onKeyDown:E,onFocus:P,onClick:P},i,{className:(0,l.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":T===n})}),null!=t?t:n)}))),i?(0,a.cloneElement)(g.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==T})))))}function d(e){const n=(0,i.Z)();return a.createElement(m,(0,r.Z)({key:String(n)},e))}},6637:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var r=t(7462),a=(t(7294),t(3905)),l=t(5488),i=t(5162);const s={title:"Pascal's Triangle"},o=void 0,u={unversionedId:"simulation/pascal-s-triangle",id:"simulation/pascal-s-triangle",title:"Pascal's Triangle",description:"\u63cf\u8ff0",source:"@site/docs/simulation/pascal-s-triangle.md",sourceDirName:"simulation",slug:"/simulation/pascal-s-triangle",permalink:"/simulation/pascal-s-triangle",draft:!1,editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/simulation/pascal-s-triangle.md",tags:[],version:"current",frontMatter:{title:"Pascal's Triangle"},sidebar:"someSidebar",previous:{title:"Substring with Concatenation of All Words",permalink:"/simulation/substring-with-concatenation-of-all-words"},next:{title:"Pascal's Triangle II",permalink:"/simulation/pascal-s-triangle-ii"}},c={},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ece\u5de6\u5230\u53f3",id:"\u4ece\u5de6\u5230\u53f3",level:3},{value:"\u4ece\u53f3\u5230\u5de6",id:"\u4ece\u53f3\u5230\u5de6",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],m={toc:p};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.kt)("p",null,"Given ",(0,a.kt)("inlineCode",{parentName:"p"},"numRows"),", generate the first ",(0,a.kt)("inlineCode",{parentName:"p"},"numRows")," of Pascal's triangle."),(0,a.kt)("p",null,"For example, given ",(0,a.kt)("inlineCode",{parentName:"p"},"numRows = 5"),","),(0,a.kt)("p",null,"Return"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[\n     [1],\n    [1,1],\n   [1,2,1],\n  [1,3,3,1],\n [1,4,6,4,1]\n]\n")),(0,a.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,a.kt)("p",null,"\u672c\u9898\u53ef\u4ee5\u7528\u961f\u5217\uff0c\u8ba1\u7b97\u4e0b\u4e00\u884c\u65f6\uff0c\u7ed9\u4e0a\u4e00\u884c\u5de6\u53f3\u5404\u52a0\u4e00\u4e2a 0\uff0c\u7136\u540e\u4e0b\u4e00\u884c\u7684\u6bcf\u4e2a\u5143\u7d20\uff0c\u5c31\u7b49\u4e8e\u5de6\u4e0a\u89d2\u548c\u53f3\u4e0a\u89d2\u4e4b\u548c\u3002"),(0,a.kt)("p",null,"\u53e6\u4e00\u79cd\u601d\u8def\uff0c\u4e0b\u4e00\u884c\u7b2c\u4e00\u4e2a\u5143\u7d20\u548c\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u8d4b\u503c\u4e3a 1\uff0c\u4e2d\u95f4\u7684\u6bcf\u4e2a\u5143\u7d20\uff0c\u7b49\u4e8e\u4e0a\u4e00\u884c\u7684\u5de6\u4e0a\u89d2\u548c\u53f3\u4e0a\u89d2\u5143\u7d20\u4e4b\u548c\u3002"),(0,a.kt)("h3",{id:"\u4ece\u5de6\u5230\u53f3"},"\u4ece\u5de6\u5230\u53f3"),(0,a.kt)(l.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// Pascal's Triangle\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\npublic class Solution {\n    public List<List<Integer>> generate(int numRows) {\n        List<List<Integer>> result = new ArrayList<>();\n        if(numRows == 0) return result;\n\n        result.add(new ArrayList<>(Arrays.asList(1))); //first row\n\n        for(int i = 2; i <= numRows; ++i) {\n            Integer[] current = new Integer[i]; // \u672c\u884c\n            Arrays.fill(current, 1);\n            List<Integer> prev = result.get(i - 2); // \u4e0a\u4e00\u884c\n\n            for(int j = 1; j < i - 1; ++j) {\n                current[j] = prev.get(j-1) + prev.get(j); // \u5de6\u4e0a\u89d2\u548c\u53f3\u4e0a\u89d2\u4e4b\u548c\n            }\n            result.add(new ArrayList<>(Arrays.asList(current)));\n        }\n        return result;\n    }\n}\n"))),(0,a.kt)(i.Z,{value:"cpp",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// LeetCode, Pascal's Triangle\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\npublic:\n    vector<vector<int> > generate(int numRows) {\n        vector<vector<int> > result;\n        if(numRows == 0) return result;\n\n        result.push_back(vector<int>(1,1)); //first row\n\n        for(int i = 2; i <= numRows; ++i) {\n            vector<int> current(i,1);  // \u672c\u884c\n            const vector<int> &prev = result[i-2];  // \u4e0a\u4e00\u884c\n\n            for(int j = 1; j < i - 1; ++j) {\n                current[j] = prev[j-1] + prev[j]; // \u5de6\u4e0a\u89d2\u548c\u53f3\u4e0a\u89d2\u4e4b\u548c\n            }\n            result.push_back(current);\n        }\n        return result;\n    }\n};\n")))),(0,a.kt)("h3",{id:"\u4ece\u53f3\u5230\u5de6"},"\u4ece\u53f3\u5230\u5de6"),(0,a.kt)(l.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// Pascal's Triangle\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\npublic class Solution {\n    public List<List<Integer>> generate(int numRows) {\n        List<List<Integer>> result = new ArrayList<>();\n        List<Integer> array = new ArrayList<>();\n        for (int i = 1; i <= numRows; i++) {\n            for (int j = i - 2; j > 0; j--) {\n                array.set(j, array.get(j - 1) + array.get(j));\n            }\n            array.add(1);\n            result.add(new ArrayList<Integer>(array));\n        }\n        return result;\n    }\n}\n"))),(0,a.kt)(i.Z,{value:"cpp",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// LeetCode, Pascal's Triangle\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\npublic:\n    vector<vector<int> > generate(int numRows) {\n        vector<vector<int> > result;\n        vector<int> array;\n        for (int i = 1; i <= numRows; i++) {\n            for (int j = i - 2; j > 0; j--) {\n                array[j] = array[j - 1] + array[j];\n            }\n            array.push_back(1);\n            result.push_back(array);\n        }\n        return result;\n    }\n};\n")))),(0,a.kt)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/simulation/pascal-s-triangle-ii"},"Pascal's Triangle II"))))}d.isMDXComponent=!0}}]);