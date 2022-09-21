"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[6288],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),r=n(7294),o=n(6010),i=n(2389),l=n(7392),s=n(7094),u=n(2466);const p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t;const{lazy:n,block:i,defaultValue:d,values:m,groupId:f,className:k}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=m??v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,l.l)(h,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===d?d:d??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==g&&!h.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,s.U)(),[j,w]=(0,r.useState)(g),O=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=f){const e=y[f];null!=e&&e!==j&&h.some((t=>t.value===e))&&w(e)}const C=e=>{const t=e.currentTarget,n=O.indexOf(t),a=h[n].value;a!==j&&(T(t),w(a),null!=f&&N(f,String(a)))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;n=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;n=O[t]??O[O.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},k)},h.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:e=>O.push(e),onKeyDown:E,onFocus:C,onClick:C},i,{className:(0,o.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":j===t})}),n??t)}))),n?(0,r.cloneElement)(v.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}function m(e){const t=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},9965:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),o=n(5488),i=n(5162);const l={title:"Android Unlock Patterns"},s=void 0,u={unversionedId:"dfs/android-unlock-patterns",id:"dfs/android-unlock-patterns",title:"Android Unlock Patterns",description:"\u63cf\u8ff0",source:"@site/docs/dfs/android-unlock-patterns.md",sourceDirName:"dfs",slug:"/dfs/android-unlock-patterns",permalink:"/dfs/android-unlock-patterns",draft:!1,tags:[],version:"current",frontMatter:{title:"Android Unlock Patterns"},sidebar:"docs",previous:{title:"Word Search",permalink:"/dfs/word-search"},next:{title:"Robot Room Cleaner",permalink:"/dfs/robot-room-cleaner"}},p={},c=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}],d={toc:c};function m(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.kt)("p",null,"Android devices have a special lock screen with a ",(0,r.kt)("inlineCode",{parentName:"p"},"3 x 3"),' grid of dots. Users can set an "unlock pattern" by connecting the dots in a specific sequence, forming a series of joined line segments where each segment\'s endpoints are two consecutive dots in the sequence. A sequence of ',(0,r.kt)("inlineCode",{parentName:"p"},"k")," dots is a ",(0,r.kt)("strong",{parentName:"p"},"valid")," unlock pattern if both of the following are true:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"All the dots in the sequence are ",(0,r.kt)("strong",{parentName:"li"},"distinct"),"."),(0,r.kt)("li",{parentName:"ul"},"If the line segment connecting two consecutive dots in the sequence passes through any other dot, the other dot ",(0,r.kt)("strong",{parentName:"li"},"must have previously appeared")," in the sequence. No jumps through non-selected dots are allowed.")),(0,r.kt)("p",null,"Here are some example valid and invalid unlock patterns:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(8155).Z,width:"418",height:"128"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The 1st pattern ",(0,r.kt)("inlineCode",{parentName:"li"},"[4,1,3,6]")," is invalid because the line connecting dots 1 and 3 pass through dot 2, but dot 2 did not previously appear in the sequence."),(0,r.kt)("li",{parentName:"ul"},"The 2nd pattern ",(0,r.kt)("inlineCode",{parentName:"li"},"[4,1,9,2]")," is invalid because the line connecting dots 1 and 9 pass through dot 5, but dot 5 did not previously appear in the sequence."),(0,r.kt)("li",{parentName:"ul"},"The 3rd pattern ",(0,r.kt)("inlineCode",{parentName:"li"},"[2,4,1,3,6]")," is valid because it follows the conditions. The line connecting dots 1 and 3 meets the condition because dot 2 previously appeared in the sequence."),(0,r.kt)("li",{parentName:"ul"},"The 4th pattern ",(0,r.kt)("inlineCode",{parentName:"li"},"[6,5,4,1,9,2]")," is valid because it follows the conditions. The line connecting dots 1 and 9 meets the condition because dot 5 previously appeared in the sequence.")),(0,r.kt)("p",null,"Given two integers ",(0,r.kt)("inlineCode",{parentName:"p"},"m")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"n"),", return ",(0,r.kt)("strong",{parentName:"p"},"the number of unique and valid unlock patterns")," of the Android grid lock screen that consist of at least ",(0,r.kt)("inlineCode",{parentName:"p"},"m")," keys and at most ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," keys."),(0,r.kt)("p",null,"Two unlock patterns are considered ",(0,r.kt)("strong",{parentName:"p"},"unique")," if there is a dot in one sequence that is not in the other, or the order of the dots is different."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 1"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Input"),": m = 1, n = 1",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Output"),": 9")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 2"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Input"),": m = 1, n = 2",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Output"),": 65")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Constraints"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= m, n <= 9"))),(0,r.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,r.kt)("p",null,"\u6df1\u641c\uff0c\u914d\u5408\u5927\u91cf\u526a\u679d\u3002"),(0,r.kt)("p",null,"\u526a\u679d\u901a\u5e38\u9700\u8981\u6df1\u5165\u7406\u89e3\u9898\u610f\uff0c\u638c\u63e1\u9886\u57df\u77e5\u8bc6\uff08domain knowledge\uff09\u3002\u672c\u9898\u6709\u4e2a\u6bd4\u8f83\u91cd\u8981\u7684\u7279\u6027\u662f\uff0c1,3,5,7 \u8fd9 4 \u4e2a\u70b9\u662f\u4e92\u76f8\u5bf9\u79f0\u7684\uff0c\u5373\u4ee5 1 \u4f5c\u4e3a\u8d77\u70b9\uff0c\u5f97\u5230\u7684\u6709\u6548\u6a21\u5f0f\u7684\u4e2a\u6570\uff0c\u4e0e\u4ee5 3 \u4f5c\u4e3a\u8d77\u70b9\uff0c\u5f97\u5230\u7684\u6709\u6548\u6a21\u5f0f\u7684\u4e2a\u6570\uff0c\u662f\u76f8\u7b49\u7684\uff0c5, 7 \u4e5f\u662f\u7c7b\u4f3c\u3002\u540c\u7406\uff0c2,4,6,8 \u8fd9 4 \u4e2a\u70b9\u4e5f\u662f\u5bf9\u79f0\u7684\u3002"),(0,r.kt)("p",null,"\u6362\u53e5\u8bdd\u8bf4\uff0c\u4ee4 ",(0,r.kt)("inlineCode",{parentName:"p"},"f[i]"),"\u8868\u793a\u4ee5",(0,r.kt)("inlineCode",{parentName:"p"},"i"),"\u4e3a\u8d77\u70b9\u7684\u6709\u6548\u6a21\u5f0f\u7684\u4e2a\u6570\uff0c\u603b\u6570\u5c31\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"f[1]*4+f[2]*4+f[5]"),"\u3002"),(0,r.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,r.kt)(o.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Android Unlock Patterns\n// Time Complexity O(n!), Space Complexity: O(n)\npublic class Solution {\n\n    public int numberOfPatterns(int m, int n) {\n        int[][] jumps = build_jump_table();\n        boolean[] visited = new boolean[10];\n\n        int count = 0;\n        for(int i = m; i <= n; ++i) {\n            count += dfs(visited, jumps, 1, i - 1) * 4;  // 1, 3, 7, 9 are symmetric\n            count += dfs(visited, jumps, 2, i - 1) * 4;  // 2, 4, 6, 8 are symmetric\n            count += dfs(visited, jumps, 5, i - 1);      // 5\n        }\n        return count;\n    }\n\n    private static int dfs(boolean visited[], int[][] jumps, int num, int remain) {\n        if(remain == 0) return 1;\n\n        int count = 0;\n        visited[num] = true;\n        for(int i = 1; i <= 9; ++i) {\n            int mid = jumps[num][i]; // Edge num->i jumps over mid\n            if(!visited[i] && (mid == 0 || (visited[mid]))) {\n                count += dfs(visited, jumps, i, remain - 1);\n            }\n        }\n        visited[num] = false;\n        return count;\n    }\n\n    private int[][] build_jump_table() {\n        int[][] jumps = new int[10][10]; // jump table, 0 means adjacent\n        jumps[1][3] = jumps[3][1] = 2; // The edge 1->3 jumps over 2\n        jumps[1][7] = jumps[7][1] = 4;\n        jumps[3][9] = jumps[9][3] = 6;\n        jumps[7][9] = jumps[9][7] = 8;\n        jumps[2][8] = jumps[8][2] = jumps[4][6] = jumps[6][4] = 5;\n        jumps[1][9] = jumps[9][1] = jumps[3][7] = jumps[7][3] = 5;\n        return jumps;\n    }\n}\n"))),(0,r.kt)(i.Z,{value:"cpp",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// TODO\n")))))}m.isMDXComponent=!0},8155:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/android-unlock-0f4c54baaeab7dbcdefb69fccd511841.png"}}]);