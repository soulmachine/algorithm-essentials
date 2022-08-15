"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[7279],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),a=n(6010);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,l),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(7462),a=n(7294),i=n(6010),l=n(2389),o=n(7392),s=n(7094),u=n(2466);const p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,n;const{lazy:l,block:d,defaultValue:m,values:f,groupId:h,className:v}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=f?f:b.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),g=(0,o.l)(y,((e,t)=>e.value===t.value));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===m?m:null!=(t=null!=m?m:null==(n=b.find((e=>e.props.default)))?void 0:n.props.value)?t:b[0].props.value;if(null!==k&&!y.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:O}=(0,s.U)(),[j,w]=(0,a.useState)(k),E=[],{blockElementScrollPositionUntilNextRender:S}=(0,u.o5)();if(null!=h){const e=N[h];null!=e&&e!==j&&y.some((t=>t.value===e))&&w(e)}const T=e=>{const t=e.currentTarget,n=E.indexOf(t),r=y[n].value;r!==j&&(S(t),w(r),null!=h&&O(h,String(r)))},C=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var r;const t=E.indexOf(e.currentTarget)+1;n=null!=(r=E[t])?r:E[0];break}case"ArrowLeft":{var a;const t=E.indexOf(e.currentTarget)-1;n=null!=(a=E[t])?a:E[E.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},v)},y.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:e=>E.push(e),onKeyDown:C,onFocus:T,onClick:T},l,{className:(0,i.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":j===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(b.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}function m(e){const t=(0,l.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},4990:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var r=n(7462),a=(n(7294),n(3905)),i=n(5488),l=n(5162);const o={title:"Simplify Path"},s=void 0,u={unversionedId:"string/simplify-path",id:"string/simplify-path",title:"Simplify Path",description:"\u63cf\u8ff0",source:"@site/docs/string/simplify-path.md",sourceDirName:"string",slug:"/string/simplify-path",permalink:"/string/simplify-path",draft:!1,editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/string/simplify-path.md",tags:[],version:"current",frontMatter:{title:"Simplify Path"},sidebar:"someSidebar",previous:{title:"Valid Anagram",permalink:"/string/valid-anagram"},next:{title:"Length of Last Word",permalink:"/string/length-of-last-word"}},p={},c=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}],d={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.kt)("p",null,"Given an absolute path for a file (Unix-style), simplify it."),(0,a.kt)("p",null,"For example,"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"path = ",(0,a.kt)("inlineCode",{parentName:"li"},'"/home/"'),", => ",(0,a.kt)("inlineCode",{parentName:"li"},'"/home"')),(0,a.kt)("li",{parentName:"ul"},"path = ",(0,a.kt)("inlineCode",{parentName:"li"},'"/a/./b/../../c/"'),", => ",(0,a.kt)("inlineCode",{parentName:"li"},'"/c"'))),(0,a.kt)("p",null,"Corner Cases:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Did you consider the case where path = ",(0,a.kt)("inlineCode",{parentName:"p"},'"/../"'),"?"),(0,a.kt)("p",{parentName:"li"},"In this case, you should return ",(0,a.kt)("inlineCode",{parentName:"p"},'"/"'),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Another corner case is the path might contain multiple slashes ",(0,a.kt)("inlineCode",{parentName:"p"},"'/'")," together, such as ",(0,a.kt)("inlineCode",{parentName:"p"},'"/home//foo/"'),"."),(0,a.kt)("p",{parentName:"li"},"In this case, you should ignore redundant slashes and return ",(0,a.kt)("inlineCode",{parentName:"p"},'"/home/foo"'),"."))),(0,a.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,a.kt)("p",null,"\u5f88\u6709\u5b9e\u9645\u4ef7\u503c\u7684\u9898\u76ee\u3002"),(0,a.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,a.kt)(i.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"import java.util.*;\n\n// Simplify Path\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\n    public String simplifyPath(String path) {\n        Stack<String> dirs = new Stack<>();\n\n        for (int i = 0; i < path.length();) {\n            ++i;\n\n            int j = path.indexOf('/', i);\n            if (j < 0) j = path.length();\n            final String dir = path.substring(i, j);\n\n            // \u5f53\u6709\u8fde\u7eed '///'\u65f6\uff0cdir \u4e3a\u7a7a\n            if (!dir.isEmpty() && !dir.equals(\".\")) {\n                if (dir.equals(\"..\")) {\n                    if (!dirs.isEmpty())\n                        dirs.pop();\n                } else {\n                    dirs.push(dir);\n                }\n            }\n\n            i = j;\n        }\n\n        StringBuilder result = new StringBuilder();\n        if (dirs.isEmpty()) {\n            result.append('/');\n        } else {\n            for (final String dir : dirs) {\n                result.append('/').append(dir);\n            }\n        }\n        return result.toString();\n    }\n}\n"))),(0,a.kt)(l.Z,{value:"cpp",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// Simplify Path\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\npublic:\n    string simplifyPath(const string& path) {\n        vector<string> dirs; // \u5f53\u505a\u6808\n\n        for (auto i = path.begin(); i != path.end();) {\n            ++i;\n\n            auto j = find(i, path.end(), '/');\n            auto dir = string(i, j);\n\n            if (!dir.empty() && dir != \".\") {// \u5f53\u6709\u8fde\u7eed '///'\u65f6\uff0cdir \u4e3a\u7a7a\n                if (dir == \"..\") {\n                    if (!dirs.empty())\n                        dirs.pop_back();\n                } else\n                    dirs.push_back(dir);\n            }\n\n            i = j;\n        }\n\n        stringstream out;\n        if (dirs.empty()) {\n            out << \"/\";\n        } else {\n            for (auto dir : dirs)\n                out << '/' << dir;\n        }\n\n        return out.str();\n    }\n};\n")))))}m.isMDXComponent=!0}}]);