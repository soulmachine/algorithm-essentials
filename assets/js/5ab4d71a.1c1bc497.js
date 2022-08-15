"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[9201],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(t),d=i,b=p["".concat(u,".").concat(d)]||p[d]||m[d]||a;return t?r.createElement(b,l(l({ref:n},c),{},{components:t})):r.createElement(b,l({ref:n},c))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=p;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(7294),i=t(6010);const a="tabItem_Ymn6";function l(e){let{children:n,hidden:t,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,i.Z)(a,l),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>d});var r=t(7462),i=t(7294),a=t(6010),l=t(2389),o=t(7392),u=t(7094),s=t(2466);const c="tabList__CuJ",m="tabItem_LNqP";function p(e){var n,t;const{lazy:l,block:p,defaultValue:d,values:b,groupId:v,className:f}=e,g=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=b?b:g.map((e=>{let{props:{value:n,label:t,attributes:r}}=e;return{value:n,label:t,attributes:r}})),x=(0,o.l)(h,((e,n)=>e.value===n.value));if(x.length>0)throw new Error('Docusaurus error: Duplicate values "'+x.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===d?d:null!=(n=null!=d?d:null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)?n:g[0].props.value;if(null!==y&&!h.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:k,setTabGroupChoices:j}=(0,u.U)(),[O,w]=(0,i.useState)(y),N=[],{blockElementScrollPositionUntilNextRender:T}=(0,s.o5)();if(null!=v){const e=k[v];null!=e&&e!==O&&h.some((n=>n.value===e))&&w(e)}const E=e=>{const n=e.currentTarget,t=N.indexOf(n),r=h[t].value;r!==O&&(T(n),w(r),null!=v&&j(v,String(r)))},I=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{var r;const n=N.indexOf(e.currentTarget)+1;t=null!=(r=N[n])?r:N[0];break}case"ArrowLeft":{var i;const n=N.indexOf(e.currentTarget)-1;t=null!=(i=N[n])?i:N[N.length-1];break}}null==(n=t)||n.focus()};return i.createElement("div",{className:(0,a.Z)("tabs-container",c)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":p},f)},h.map((e=>{let{value:n,label:t,attributes:l}=e;return i.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===n?0:-1,"aria-selected":O===n,key:n,ref:e=>N.push(e),onKeyDown:I,onFocus:E,onClick:E},l,{className:(0,a.Z)("tabs__item",m,null==l?void 0:l.className,{"tabs__item--active":O===n})}),null!=t?t:n)}))),l?(0,i.cloneElement)(g.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},g.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==O})))))}function d(e){const n=(0,l.Z)();return i.createElement(p,(0,r.Z)({key:String(n)},e))}},3263:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var r=t(7462),i=(t(7294),t(3905)),a=t(5488),l=t(5162);const o={title:"Spiral Matrix II"},u=void 0,s={unversionedId:"simulation/spiral-matrix-ii",id:"simulation/spiral-matrix-ii",title:"Spiral Matrix II",description:"\u63cf\u8ff0",source:"@site/docs/simulation/spiral-matrix-ii.md",sourceDirName:"simulation",slug:"/simulation/spiral-matrix-ii",permalink:"/simulation/spiral-matrix-ii",draft:!1,editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/simulation/spiral-matrix-ii.md",tags:[],version:"current",frontMatter:{title:"Spiral Matrix II"},sidebar:"someSidebar",previous:{title:"Spiral Matrix",permalink:"/simulation/spiral-matrix"},next:{title:"ZigZag Conversion",permalink:"/simulation/zigzag-conversion"}},c={},m=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801 1",id:"\u4ee3\u7801-1",level:3},{value:"\u4ee3\u7801 2",id:"\u4ee3\u7801-2",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],p={toc:m};function d(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,i.kt)("p",null,"Given an integer ",(0,i.kt)("inlineCode",{parentName:"p"},"n"),", generate a square matrix filled with elements from 1 to ",(0,i.kt)("inlineCode",{parentName:"p"},"n^2")," in spiral order."),(0,i.kt)("p",null,"For example,\nGiven ",(0,i.kt)("inlineCode",{parentName:"p"},"n = 3"),","),(0,i.kt)("p",null,"You should return the following matrix:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[\n [ 1, 2, 3 ],\n [ 8, 9, 4 ],\n [ 7, 6, 5 ]\n]\n")),(0,i.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,i.kt)("p",null,"\u8fd9\u9898\u6bd4\u4e0a\u4e00\u9898\u8981\u7b80\u5355\u3002"),(0,i.kt)("h3",{id:"\u4ee3\u7801-1"},"\u4ee3\u7801 1"),(0,i.kt)(a.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Spiral Matrix II\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n^2)\npublic class Solution {\n    public int[][] generateMatrix(int n) {\n        int[][] matrix = new int[n][n];\n        int begin = 0, end = n - 1;\n        int num = 1;\n\n        while (begin < end) {\n            for (int j = begin; j < end; ++j) matrix[begin][j] = num++;\n            for (int i = begin; i < end; ++i) matrix[i][end] = num++;\n            for (int j = end; j > begin; --j) matrix[end][j] = num++;\n            for (int i = end; i > begin; --i) matrix[i][begin] = num++;\n            ++begin;\n            --end;\n        }\n\n        if (begin == end) matrix[begin][begin] = num;\n\n        return matrix;\n    }\n}\n"))),(0,i.kt)(l.Z,{value:"cpp",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"// Spiral Matrix II\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n^2)\nclass Solution {\npublic:\n    vector<vector<int> > generateMatrix(int n) {\n        vector<vector<int> > matrix(n, vector<int>(n));\n        int begin = 0, end = n - 1;\n        int num = 1;\n\n        while (begin < end) {\n            for (int j = begin; j < end; ++j) matrix[begin][j] = num++;\n            for (int i = begin; i < end; ++i) matrix[i][end] = num++;\n            for (int j = end; j > begin; --j) matrix[end][j] = num++;\n            for (int i = end; i > begin; --i) matrix[i][begin] = num++;\n            ++begin;\n            --end;\n        }\n\n        if (begin == end) matrix[begin][begin] = num;\n\n        return matrix;\n    }\n};\n")))),(0,i.kt)("h3",{id:"\u4ee3\u7801-2"},"\u4ee3\u7801 2"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"// LeetCode, Spiral Matrix II\n// @author \u9f9a\u9646\u5b89 (http://weibo.com/luangong)\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n^2)\nclass Solution {\npublic:\n    vector<vector<int> > generateMatrix(int n) {\n        vector< vector<int> > matrix(n, vector<int>(n));\n        if (n == 0) return matrix;\n        int beginX = 0, endX = n - 1;\n        int beginY = 0, endY = n - 1;\n        int num = 1;\n        while (true) {\n            for (int j = beginX; j <= endX; ++j) matrix[beginY][j] = num++;\n            if (++beginY > endY) break;\n\n            for (int i = beginY; i <= endY; ++i) matrix[i][endX] = num++;\n            if (beginX > --endX) break;\n\n            for (int j = endX; j >= beginX; --j) matrix[endY][j] = num++;\n            if (beginY > --endY) break;\n\n            for (int i = endY; i >= beginY; --i) matrix[i][beginX] = num++;\n            if (++beginX > endX) break;\n        }\n        return matrix;\n    }\n};\n")),(0,i.kt)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/simulation/spiral-matrix"},"Spiral Matrix"))))}d.isMDXComponent=!0}}]);