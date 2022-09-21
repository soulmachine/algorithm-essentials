"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[8863],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,v=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(v,i(i({ref:t},p),{},{components:n})):r.createElement(v,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294),a=n(6010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(7462),a=n(7294),l=n(6010),i=n(2389),o=n(7392),s=n(7094),u=n(2466);const p="tabList__CuJ",c="tabItem_LNqP";function m(e){var t;const{lazy:n,block:i,defaultValue:m,values:d,groupId:v,className:f}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=d??h.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),k=(0,o.l)(b,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===m?m:m??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==g&&!b.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,s.U)(),[N,I]=(0,a.useState)(g),O=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=v){const e=y[v];null!=e&&e!==N&&b.some((t=>t.value===e))&&I(e)}const T=e=>{const t=e.currentTarget,n=O.indexOf(t),r=b[n].value;r!==N&&(E(t),I(r),null!=v&&w(v,String(r)))},x=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;n=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;n=O[t]??O[O.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},f)},b.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>O.push(e),onKeyDown:x,onFocus:T,onClick:T},i,{className:(0,l.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,a.cloneElement)(h.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function d(e){const t=(0,i.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},8173:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var r=n(7462),a=(n(7294),n(3905)),l=n(5488),i=n(5162);const o={title:"Employee Free Time"},s=void 0,u={unversionedId:"simulation/employee-free-time",id:"simulation/employee-free-time",title:"Employee Free Time",description:"\u63cf\u8ff0",source:"@site/docs/simulation/employee-free-time.md",sourceDirName:"simulation",slug:"/simulation/employee-free-time",permalink:"/en/simulation/employee-free-time",draft:!1,tags:[],version:"current",frontMatter:{title:"Employee Free Time"},sidebar:"docs",previous:{title:"Merge Intervals",permalink:"/en/simulation/merge-intervals"},next:{title:"Minimum Window Substring",permalink:"/en/simulation/minimum-window-substring"}},p={},c=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],m={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.kt)("p",null,"We are given a list ",(0,a.kt)("inlineCode",{parentName:"p"},"schedule")," of employees, which represents the working time for each employee."),(0,a.kt)("p",null,"Each employee has a list of non-overlapping ",(0,a.kt)("inlineCode",{parentName:"p"},"Intervals"),", and these intervals are in sorted order."),(0,a.kt)("p",null,"Return the list of finite intervals representing ",(0,a.kt)("strong",{parentName:"p"},"common, positive-length free time")," for ",(0,a.kt)("em",{parentName:"p"},"all employees"),", also in sorted order."),(0,a.kt)("p",null,"(Even though we are representing ",(0,a.kt)("inlineCode",{parentName:"p"},"Intervals")," in the form ",(0,a.kt)("inlineCode",{parentName:"p"},"[x, y]"),", the objects inside are ",(0,a.kt)("inlineCode",{parentName:"p"},"Intervals"),", not lists or arrays. For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"schedule[0][0].start = 1"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"schedule[0][0].end = 2"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"schedule[0][0][0]")," is not defined). Also, we wouldn't include intervals like ","[5, 5]"," in our answer, as they have zero length."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Input"),": schedule = [[","[1,2]",",","[5,6]","],[","[1,3]","],[","[4,10]","]]"),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Output"),": [","[3,4]","]"),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Explanation"),": There are a total of three employees, and all common\nfree time intervals would be ","[-inf, 1]",", ","[3, 4]",", ","[10, inf]",".\nWe discard any intervals that contain inf as they aren't finite.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Input"),": schedule = [[","[1,3]",",","[6,7]","],[","[2,4]","],[","[2,5]",",","[9,12]","]]"),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Output"),": [","[5,6]",",","[7,9]","]")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1 <= schedule.length , schedule","[i]",".length <= 50"),(0,a.kt)("li",{parentName:"ul"},"0 <= schedule","[i]",".start < schedule","[i]",".end <= 10^8")),(0,a.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,a.kt)("p",null,"\u8fd9\u9898\u6c42\u7684\u662f\u533a\u95f4\u4e4b\u95f4\u7684\u7a7a\u767d\u6bb5\uff0c\u8ddf ",(0,a.kt)("a",{parentName:"p",href:"/en/simulation/merge-intervals"},"Merge Intervals"),"\u662f\u53cd\u8fc7\u6765\u7684\uff0c\u6240\u4ee5\u53ef\u4ee5\u76f4\u63a5\u590d\u7528 Merge Intervals \u7684\u4ee3\u7801\uff0c\u7136\u540e\u53d6\u53cd\u5373\u53ef\u3002"),(0,a.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,a.kt)(l.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// Employee Free Time\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public List<Interval> employeeFreeTime(List<List<Interval>> schedule) {\n        List<Interval> merged = merge(schedule.stream()\n                .flatMap(List::stream)\n                .collect(Collectors.toList()));\n        List<Interval> result = new ArrayList<>();\n        for (int i = 0; i < merged.size()-1; ++i) {\n            result.add(new Interval(merged.get(i).end, merged.get(i+1).start ));\n        }\n        return result;\n    }\n\n    private List<Interval> merge(List<Interval> intervals) {\n        List<Interval> result = new ArrayList<>();\n        for (int i = 0; i < intervals.size(); i++) {\n            insert(result, intervals.get(i));\n        }\n        return result;\n    }\n    private static List<Interval> insert(List<Interval> intervals,\n                                         Interval newInterval) {\n        for (int i = 0; i < intervals.size();) {\n            final Interval cur = intervals.get(i);\n            if (newInterval.end < cur.start) {\n                intervals.add(i, newInterval);\n                return intervals;\n            } else if (newInterval.start > cur.end) {\n                ++i;\n                continue;\n            } else {\n                newInterval.start = Math.min(newInterval.start, cur.start);\n                newInterval.end = Math.max(newInterval.end, cur.end);\n                intervals.remove(i);\n            }\n        }\n        intervals.add(newInterval);\n        return intervals;\n    }\n}\n"))),(0,a.kt)(i.Z,{value:"cpp",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// TODO\n")))),(0,a.kt)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/en/simulation/merge-intervals"},"Merge Intervals"))))}d.isMDXComponent=!0}}]);