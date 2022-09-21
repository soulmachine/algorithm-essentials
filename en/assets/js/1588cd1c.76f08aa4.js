"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[5813],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),u=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=u(t),f=r,d=p["".concat(c,".").concat(f)]||p[f]||m[f]||l;return t?a.createElement(d,i(i({ref:n},s),{},{components:t})):a.createElement(d,i({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=p;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(7294),r=t(6010);const l="tabItem_Ymn6";function i(e){let{children:n,hidden:t,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>f});var a=t(7462),r=t(7294),l=t(6010),i=t(2389),o=t(7392),c=t(7094),u=t(2466);const s="tabList__CuJ",m="tabItem_LNqP";function p(e){var n;const{lazy:t,block:i,defaultValue:p,values:f,groupId:d,className:v}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=f??b.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),j=(0,o.l)(g,((e,n)=>e.value===n.value));if(j.length>0)throw new Error(`Docusaurus error: Duplicate values "${j.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===p?p:p??(null==(n=b.find((e=>e.props.default)))?void 0:n.props.value)??b[0].props.value;if(null!==h&&!g.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:x}=(0,c.U)(),[k,O]=(0,r.useState)(h),w=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=d){const e=y[d];null!=e&&e!==k&&g.some((n=>n.value===e))&&O(e)}const E=e=>{const n=e.currentTarget,t=w.indexOf(n),a=g[t].value;a!==k&&(T(n),O(a),null!=d&&x(d,String(a)))},R=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=w.indexOf(e.currentTarget)+1;t=w[n]??w[0];break}case"ArrowLeft":{const n=w.indexOf(e.currentTarget)-1;t=w[n]??w[w.length-1];break}}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},v)},g.map((e=>{let{value:n,label:t,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:k===n?0:-1,"aria-selected":k===n,key:n,ref:e=>w.push(e),onKeyDown:R,onFocus:E,onClick:E},i,{className:(0,l.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":k===n})}),t??n)}))),t?(0,r.cloneElement)(b.filter((e=>e.props.value===k))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==k})))))}function f(e){const n=(0,i.Z)();return r.createElement(p,(0,a.Z)({key:String(n)},e))}},3127:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>u,toc:()=>m});var a=t(7462),r=(t(7294),t(3905)),l=t(5488),i=t(5162);const o={title:"Maximal Rectangle"},c=void 0,u={unversionedId:"dp/maximal-rectangle",id:"dp/maximal-rectangle",title:"Maximal Rectangle",description:"\u63cf\u8ff0",source:"@site/docs/dp/maximal-rectangle.md",sourceDirName:"dp",slug:"/dp/maximal-rectangle",permalink:"/en/dp/maximal-rectangle",draft:!1,tags:[],version:"current",frontMatter:{title:"Maximal Rectangle"},sidebar:"docs",previous:{title:"Palindrome Partitioning II",permalink:"/en/dp/palindrome-partitioning-ii"},next:{title:"Best Time to Buy and Sell Stock III",permalink:"/en/dp/best-time-to-buy-and-sell-stock-iii"}},s={},m=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}],p={toc:m};function f(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.kt)("p",null,"Given a 2D binary matrix filled with 0's and 1's, find the largest rectangle containing all ones and return its area."),(0,r.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,r.kt)("p",null,"\u65e0"),(0,r.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,r.kt)(l.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Maximal Rectangle\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\npublic class Solution {\n    public int maximalRectangle(char[][] matrix) {\n        if (matrix.length == 0)  return 0;\n\n        final int m = matrix.length;\n        final int n = matrix[0].length;\n        int[] H = new int[n];\n        int[] L = new int[n];\n        int[] R = new int[n];\n        Arrays.fill(R, n);\n\n        int ret = 0;\n        for (int i = 0; i < m; ++i) {\n            int left = 0, right = n;\n            // calculate L(i, j) from left to right\n            for (int j = 0; j < n; ++j) {\n                if (matrix[i][j] == '1') {\n                    ++H[j];\n                    L[j] = Math.max(L[j], left);\n                } else {\n                    left = j+1;\n                    H[j] = 0; L[j] = 0; R[j] = n;\n                }\n            }\n            // calculate R(i, j) from right to left\n            for (int j = n-1; j >= 0; --j) {\n                if (matrix[i][j] == '1') {\n                    R[j] = Math.min(R[j], right);\n                    ret = Math.max(ret, H[j]*(R[j]-L[j]));\n                } else {\n                    right = j;\n                }\n            }\n        }\n        return ret;\n    }\n}\n"))),(0,r.kt)(i.Z,{value:"cpp",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// Maximal Rectangle\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\npublic:\n    int maximalRectangle(vector<vector<char> > &matrix) {\n        if (matrix.empty())  return 0;\n\n        const int m = matrix.size();\n        const int n = matrix[0].size();\n        vector<int> H(n, 0);\n        vector<int> L(n, 0);\n        vector<int> R(n, n);\n\n        int ret = 0;\n        for (int i = 0; i < m; ++i) {\n            int left = 0, right = n;\n            // calculate L(i, j) from left to right\n            for (int j = 0; j < n; ++j) {\n                if (matrix[i][j] == '1') {\n                    ++H[j];\n                    L[j] = max(L[j], left);\n                } else {\n                    left = j+1;\n                    H[j] = 0; L[j] = 0; R[j] = n;\n                }\n            }\n            // calculate R(i, j) from right to left\n            for (int j = n-1; j >= 0; --j) {\n                if (matrix[i][j] == '1') {\n                    R[j] = min(R[j], right);\n                    ret = max(ret, H[j]*(R[j]-L[j]));\n                } else {\n                    right = j;\n                }\n            }\n        }\n        return ret;\n    }\n};\n")))))}f.isMDXComponent=!0}}]);