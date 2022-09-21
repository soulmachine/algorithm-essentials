"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[7006],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=u(n),m=r,h=g["".concat(o,".").concat(m)]||g[m]||p[m]||l;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=g;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),r=n(7294),l=n(6010),i=n(2389),s=n(7392),o=n(7094),u=n(2466);const c="tabList__CuJ",p="tabItem_LNqP";function g(e){var t;const{lazy:n,block:i,defaultValue:g,values:m,groupId:h,className:d}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),A=m??v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,s.l)(A,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===g?g:g??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==k&&!A.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${A.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:w}=(0,o.U)(),[y,N]=(0,r.useState)(k),D=[],{blockElementScrollPositionUntilNextRender:P}=(0,u.o5)();if(null!=h){const e=f[h];null!=e&&e!==y&&A.some((t=>t.value===e))&&N(e)}const x=e=>{const t=e.currentTarget,n=D.indexOf(t),a=A[n].value;a!==y&&(P(t),N(a),null!=h&&w(h,String(a)))},O=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=D.indexOf(e.currentTarget)+1;n=D[t]??D[0];break}case"ArrowLeft":{const t=D.indexOf(e.currentTarget)-1;n=D[t]??D[D.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},d)},A.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>D.push(e),onKeyDown:O,onFocus:x,onClick:x},i,{className:(0,l.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":y===t})}),n??t)}))),n?(0,r.cloneElement)(v.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function m(e){const t=(0,i.Z)();return r.createElement(g,(0,a.Z)({key:String(t)},e))}},9416:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),l=n(5488),i=n(5162);const s={title:"Largest Rectangle in Histogram"},o=void 0,u={unversionedId:"stack-and-queue/stack/largest-rectangle-in-histogram",id:"stack-and-queue/stack/largest-rectangle-in-histogram",title:"Largest Rectangle in Histogram",description:"\u63cf\u8ff0",source:"@site/docs/stack-and-queue/stack/largest-rectangle-in-histogram.md",sourceDirName:"stack-and-queue/stack",slug:"/stack-and-queue/stack/largest-rectangle-in-histogram",permalink:"/en/stack-and-queue/stack/largest-rectangle-in-histogram",draft:!1,tags:[],version:"current",frontMatter:{title:"Largest Rectangle in Histogram"},sidebar:"docs",previous:{title:"Longest Valid Parentheses",permalink:"/en/stack-and-queue/stack/longest-valid-parentheses"},next:{title:"Evaluate Reverse Polish Notation",permalink:"/en/stack-and-queue/stack/evaluate-reverse-polish-notation"}},c={},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],g={toc:p};function m(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,a.Z)({},g,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.kt)("p",null,"Given ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," non-negative integers representing the histogram's bar height where the width of each bar is 1, find the area of largest rectangle in the histogram."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Above is a histogram where width of each bar is 1, given height = `[2,1,5,6,2,3]`.",src:n(2769).Z,width:"188",height:"204"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"The largest rectangle is shown in the shaded area, which has area = 10 unit.",src:n(7409).Z,width:"188",height:"204"})),(0,r.kt)("p",null,"For example, given height = ",(0,r.kt)("inlineCode",{parentName:"p"},"[2,1,5,6,2,3]"),", return 10."),(0,r.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,r.kt)("p",null,"\u7b80\u5355\u7684\uff0c\u7c7b\u4f3c\u4e8e ",(0,r.kt)("a",{parentName:"p",href:"/en/greedy/container-with-most-water"},"Container With Most Water"),"\uff0c\u5bf9\u6bcf\u4e2a\u67f1\u5b50\uff0c\u5de6\u53f3\u6269\u5c55\uff0c\u76f4\u5230\u78b0\u5230\u6bd4\u81ea\u5df1\u77ee\u7684\uff0c\u8ba1\u7b97\u8fd9\u4e2a\u77e9\u5f62\u7684\u9762\u79ef\uff0c\u7528\u4e00\u4e2a\u53d8\u91cf\u8bb0\u5f55\u6700\u5927\u7684\u9762\u79ef\uff0c\u590d\u6742\u5ea6",(0,r.kt)("inlineCode",{parentName:"p"},"O(n^2)"),"\uff0c\u4f1a\u8d85\u65f6\u3002"),(0,r.kt)("p",null,"\u5982\u4e0a\u56fe\u6240\u793a\uff0c\u4ece\u5de6\u5230\u53f3\u5904\u7406\u76f4\u65b9\uff0c\u5f53",(0,r.kt)("inlineCode",{parentName:"p"},"i=4"),"\u65f6\uff0c\u5c0f\u4e8e\u5f53\u524d\u6808\u9876\uff08\u5373\u76f4\u65b9 3\uff09\uff0c\u5bf9\u4e8e\u76f4\u65b9 3\uff0c\u65e0\u8bba\u540e\u9762\u8fd8\u662f\u524d\u9762\u7684\u76f4\u65b9\uff0c\u90fd\u4e0d\u53ef\u80fd\u5f97\u5230\u6bd4\u76ee\u524d\u6808\u9876\u5143\u7d20\u66f4\u9ad8\u7684\u9ad8\u5ea6\u4e86\uff0c\u5904\u7406\u6389\u76f4\u65b9 3\uff08\u8ba1\u7b97\u4ece\u76f4\u65b9 3 \u5230\u76f4\u65b9 4 \u4e4b\u95f4\u7684\u77e9\u5f62\u7684\u9762\u79ef\uff0c\u7136\u540e\u4ece\u6808\u91cc\u5f39\u51fa\uff09\uff1b\u5bf9\u4e8e\u76f4\u65b9 2 \u4e5f\u662f\u5982\u6b64\uff1b\u76f4\u5230\u78b0\u5230\u6bd4\u76f4\u65b9 4 \u66f4\u77ee\u7684\u76f4\u65b9 1\u3002"),(0,r.kt)("p",null,"\u8fd9\u5c31\u610f\u5473\u7740\uff0c\u53ef\u4ee5\u7ef4\u62a4\u4e00\u4e2a\u9012\u589e\u7684\u6808\uff0c\u6bcf\u6b21\u6bd4\u8f83\u6808\u9876\u4e0e\u5f53\u524d\u5143\u7d20\u3002\u5982\u679c\u5f53\u524d\u5143\u7d20\u5927\u4e8e\u6808\u9876\u5143\u7d20\uff0c\u5219\u5165\u6808\uff0c\u5426\u5219\u5408\u5e76\u73b0\u6709\u6808\uff0c\u76f4\u81f3\u6808\u9876\u5143\u7d20\u5c0f\u4e8e\u5f53\u524d\u5143\u7d20\u3002\u7ed3\u5c3e\u65f6\u5165\u6808\u5143\u7d20 0\uff0c\u91cd\u590d\u5408\u5e76\u4e00\u6b21\u3002"),(0,r.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,r.kt)(l.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Largest Rectangle in Histogram\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\n    public int largestRectangleArea(int[] heights) {\n        Stack<Integer> s = new Stack<>();\n        int result = 0;\n        for (int i = 0; i <= heights.length; ) {\n            final int value = i < heights.length ? heights[i] : 0;\n            if (s.isEmpty() || value > heights[s.peek()])\n                s.push(i++);\n            else {\n                int tmp = s.pop();\n                result = Math.max(result,\n                        heights[tmp] * (s.isEmpty() ? i : i - s.peek() - 1));\n            }\n        }\n        return result;\n    }\n}\n"))),(0,r.kt)(i.Z,{value:"cpp",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// Largest Rectangle in Histogram\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\npublic:\n    int largestRectangleArea(vector<int> &heights) {\n        stack<int> s;\n        heights.push_back(0);\n        int result = 0;\n        for (int i = 0; i < heights.size(); ) {\n            if (s.empty() || heights[i] > heights[s.top()])\n                s.push(i++);\n            else {\n                int tmp = s.top();\n                s.pop();\n                result = max(result,\n                        heights[tmp] * (s.empty() ? i : i - s.top() - 1));\n            }\n        }\n        return result;\n    }\n};\n")))),(0,r.kt)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/en/array/trapping-rain-water"},"Trapping Rain Water")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/en/greedy/container-with-most-water"},"Container With Most Water"))))}m.isMDXComponent=!0},7409:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"},2769:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALwAAADMCAMAAAD+tTlYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAD9QTFRFZrb//7ZmkDoA///b2///ADqQOpDbAGa2OgAA/9uQ25A6//+2ZgAAtmYAAAA6tv//AABmkNv/kJBmAAAA////GMlBmQAAAfxJREFUeNrs3W1PgzAUhuEONt6ZYvf/f6srxsRAmWvXIk+8m/jJD+fy5NBuDXk0N+FlwIMHn2mVhbXXSRPfNpezaufLotYdm9P1w9rUvd8L393nvR9q0c7b6v4XvL9J4tvGuNmZRB/Yy9n9aG6VbptPPDWcsODBgwcP/pVlH66j46N/CR48ePDgwSfDn+Yz06jijXLnjfjY1KJ4d6vUD5XwbjMub5XAZ8fPE7O+BuaB5YQFDx48ePCxvugbvSPgpTsPHjx48ODBgwcPHjx48ODBgwcPHjx48ODBgwcPHjx48ODBgwcPPhN+tNZWoniXN9A2le7YbIRtaOCFOz96XlKW6rzw2GykhBwe3w/mK2xDc6t0bzj6Q0I4YcGDBw9eF2/t7++2Hxf/RFXw4MGDB/+v8J0nNWIP/LpuOH68ThvpC3nxnrrB+LKowqNgE+B9deNmfp28sM/ML+rG4cfAOM9U+EXdGHxZhMZ5psGv6kbgI3Kbk+DXdcPxnQ1PDk6B7wLjHnz4tpm/pOz+wPrq8vEAPHjw4MF/4zPlRrxwoxeCP1pzwYMHDx48ePDg8+P7IWH08L549/9xZPE3X/wwePDgwefZKpcvOXLCggcPHrw+/i9uYek8ePDgwYMHDx48ePDgwYMHDx48ePDgwYN/Dq+2fuIlF3jwEetTgAEAJ5umQ4edUd0AAAAASUVORK5CYII="}}]);