"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[8117],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,h=p["".concat(o,".").concat(d)]||p[d]||c[d]||l;return n?r.createElement(h,i(i({ref:t},m),{},{components:n})):r.createElement(h,i({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=p;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294),a=n(6010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(7462),a=n(7294),l=n(6010),i=n(2389),u=n(7392),o=n(7094),s=n(2466);const m="tabList__CuJ",c="tabItem_LNqP";function p(e){var t,n;const{lazy:i,block:p,defaultValue:d,values:h,groupId:f,className:g}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=h?h:v.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),y=(0,u.l)(b,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===d?d:null!=(t=null!=d?d:null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)?t:v[0].props.value;if(null!==k&&!b.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:j,setTabGroupChoices:O}=(0,o.U)(),[w,x]=(0,a.useState)(k),T=[],{blockElementScrollPositionUntilNextRender:I}=(0,s.o5)();if(null!=f){const e=j[f];null!=e&&e!==w&&b.some((t=>t.value===e))&&x(e)}const N=e=>{const t=e.currentTarget,n=T.indexOf(t),r=b[n].value;r!==w&&(I(t),x(r),null!=f&&O(f,String(r)))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var r;const t=T.indexOf(e.currentTarget)+1;n=null!=(r=T[t])?r:T[0];break}case"ArrowLeft":{var a;const t=T.indexOf(e.currentTarget)-1;n=null!=(a=T[t])?a:T[T.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",m)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},g)},b.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>T.push(e),onKeyDown:E,onFocus:N,onClick:N},i,{className:(0,l.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),i?(0,a.cloneElement)(v.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,i.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},2188:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>d,frontMatter:()=>u,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905)),l=n(5488),i=n(5162);const u={title:"Jump Game II"},o=void 0,s={unversionedId:"greedy/jump-game-ii",id:"greedy/jump-game-ii",title:"Jump Game II",description:"\u63cf\u8ff0",source:"@site/docs/greedy/jump-game-ii.md",sourceDirName:"greedy",slug:"/greedy/jump-game-ii",permalink:"/greedy/jump-game-ii",draft:!1,editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/greedy/jump-game-ii.md",tags:[],version:"current",frontMatter:{title:"Jump Game II"},sidebar:"someSidebar",previous:{title:"Jump Game",permalink:"/greedy/jump-game"},next:{title:"Best Time to Buy and Sell Stock",permalink:"/greedy/best-time-to-buy-and-sell-stock"}},m={},c=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801 1",id:"\u4ee3\u7801-1",level:3},{value:"\u4ee3\u7801 2",id:"\u4ee3\u7801-2",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.kt)("p",null,"Given an array of non-negative integers, you are initially positioned at the first index of the array."),(0,a.kt)("p",null,"Each element in the array represents your maximum jump length at that position."),(0,a.kt)("p",null,"Your goal is to reach the last index in the minimum number of jumps."),(0,a.kt)("p",null,"For example:\nGiven array ",(0,a.kt)("inlineCode",{parentName:"p"},"A = [2,3,1,1,4]")),(0,a.kt)("p",null,"The minimum number of jumps to reach the last index is 2. (Jump 1 step from index 0 to 1, then 3 steps to the last index.)"),(0,a.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,a.kt)("p",null,"\u8d2a\u5fc3\u6cd5\u3002"),(0,a.kt)("h3",{id:"\u4ee3\u7801-1"},"\u4ee3\u7801 1"),(0,a.kt)(l.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// Jump Game II\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public int jump(int[] nums) {\n        int step = 0; // \u6700\u5c0f\u6b65\u6570\n        int left = 0;\n        int right = 0;  // [left, right]\u662f\u5f53\u524d\u80fd\u8986\u76d6\u7684\u533a\u95f4\n        if (nums.length == 1) return 0;\n\n        while (left <= right) { // \u5c1d\u8bd5\u4ece\u6bcf\u4e00\u5c42\u8df3\u6700\u8fdc\n            ++step;\n            final int old_right = right;\n            for (int i = left; i <= old_right; ++i) {\n                int new_right = i + nums[i];\n                if (new_right >= nums.length - 1) return step;\n\n                if (new_right > right) right = new_right;\n            }\n            left = old_right + 1;\n        }\n        return 0;\n    }\n}\n"))),(0,a.kt)(i.Z,{value:"cpp",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// LeetCode, Jump Game II\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    int jump(const vector<int>& nums) {\n        int step = 0; // \u6700\u5c0f\u6b65\u6570\n        int left = 0;\n        int right = 0;  // [left, right]\u662f\u5f53\u524d\u80fd\u8986\u76d6\u7684\u533a\u95f4\n        if (nums.size() == 1) return 0;\n\n        while (left <= right) { // \u5c1d\u8bd5\u4ece\u6bcf\u4e00\u5c42\u8df3\u6700\u8fdc\n            ++step;\n            const int old_right = right;\n            for (int i = left; i <= old_right; ++i) {\n                int new_right = i + nums[i];\n                if (new_right >= nums.size() - 1) return step;\n\n                if (new_right > right) right = new_right;\n            }\n            left = old_right + 1;\n        }\n        return 0;\n    }\n};\n")))),(0,a.kt)("h3",{id:"\u4ee3\u7801-2"},"\u4ee3\u7801 2"),(0,a.kt)(l.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'// Jump Game II\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public int jump(int[] nums) {\n        int result = 0;\n        // the maximum distance that has been reached\n        int last = 0;\n        // the maximum distance that can be reached by using "ret+1" steps\n        int cur = 0;\n        for (int i = 0; i < nums.length; ++i) {\n            if (i > last) {\n                last = cur;\n                ++result;\n            }\n            cur = Math.max(cur, i + nums[i]);\n        }\n\n        return result;\n    }\n}\n'))),(0,a.kt)(i.Z,{value:"cpp",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'// Jump Game II\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    int jump(const vector<int>& nums) {\n        int result = 0;\n        // the maximum distance that has been reached\n        int last = 0;\n        // the maximum distance that can be reached by using "ret+1" steps\n        int cur = 0;\n        for (int i = 0; i < nums.size(); ++i) {\n            if (i > last) {\n                last = cur;\n                ++result;\n            }\n            cur = max(cur, i + nums[i]);\n        }\n\n        return result;\n    }\n};\n')))),(0,a.kt)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/greedy/jump-game"},"Jump Game"))))}d.isMDXComponent=!0}}]);