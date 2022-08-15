"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[8741],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,g=m["".concat(i,".").concat(d)]||m[d]||p[d]||l;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294),a=n(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(7462),a=n(7294),l=n(6010),o=n(2389),s=n(7392),i=n(7094),u=n(2466);const c="tabList__CuJ",p="tabItem_LNqP";function m(e){var t,n;const{lazy:o,block:m,defaultValue:d,values:g,groupId:v,className:f}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=g?g:b.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),h=(0,s.l)(y,((e,t)=>e.value===t.value));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===d?d:null!=(t=null!=d?d:null==(n=b.find((e=>e.props.default)))?void 0:n.props.value)?t:b[0].props.value;if(null!==k&&!y.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:O,setTabGroupChoices:w}=(0,i.U)(),[T,E]=(0,a.useState)(k),N=[],{blockElementScrollPositionUntilNextRender:S}=(0,u.o5)();if(null!=v){const e=O[v];null!=e&&e!==T&&y.some((t=>t.value===e))&&E(e)}const j=e=>{const t=e.currentTarget,n=N.indexOf(t),r=y[n].value;r!==T&&(S(t),E(r),null!=v&&w(v,String(r)))},A=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var r;const t=N.indexOf(e.currentTarget)+1;n=null!=(r=N[t])?r:N[0];break}case"ArrowLeft":{var a;const t=N.indexOf(e.currentTarget)-1;n=null!=(a=N[t])?a:N[N.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},f)},y.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>N.push(e),onKeyDown:A,onFocus:j,onClick:j},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),o?(0,a.cloneElement)(b.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function d(e){const t=(0,o.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},7494:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var r=n(7462),a=(n(7294),n(3905)),l=n(5488),o=n(5162);const s={title:"Anagrams"},i=void 0,u={unversionedId:"string/anagrams",id:"string/anagrams",title:"Anagrams",description:"\u63cf\u8ff0",source:"@site/docs/string/anagrams.md",sourceDirName:"string",slug:"/string/anagrams",permalink:"/string/anagrams",draft:!1,editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/string/anagrams.md",tags:[],version:"current",frontMatter:{title:"Anagrams"},sidebar:"someSidebar",previous:{title:"Count and Say",permalink:"/string/count-and-say"},next:{title:"Valid Anagram",permalink:"/string/valid-anagram"}},c={},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}],m={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.kt)("p",null,"Given an array of strings, return all groups of strings that are anagrams."),(0,a.kt)("p",null,"Note: All inputs will be in lower-case."),(0,a.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,a.kt)("p",null,"Anagram\uff08\u56de\u6587\u6784\u8bcd\u6cd5\uff09\u662f\u6307\u6253\u4e71\u5b57\u6bcd\u987a\u5e8f\u4ece\u800c\u5f97\u5230\u65b0\u7684\u5355\u8bcd\uff0c\u6bd4\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},'"dormitory"')," \u6253\u4e71\u5b57\u6bcd\u987a\u5e8f\u4f1a\u53d8\u6210 ",(0,a.kt)("inlineCode",{parentName:"p"},'"dirty room"')," \uff0c",(0,a.kt)("inlineCode",{parentName:"p"},'"tea"')," \u4f1a\u53d8\u6210",(0,a.kt)("inlineCode",{parentName:"p"},'"eat"'),"\u3002"),(0,a.kt)("p",null,"\u56de\u6587\u6784\u8bcd\u6cd5\u6709\u4e00\u4e2a\u7279\u70b9\uff1a\u5355\u8bcd\u91cc\u7684\u5b57\u6bcd\u7684\u79cd\u7c7b\u548c\u6570\u76ee\u6ca1\u6709\u6539\u53d8\uff0c\u53ea\u662f\u6539\u53d8\u4e86\u5b57\u6bcd\u7684\u6392\u5217\u987a\u5e8f\u3002\u56e0\u6b64\uff0c\u5c06\u51e0\u4e2a\u5355\u8bcd\u6309\u7167\u5b57\u6bcd\u987a\u5e8f\u6392\u5e8f\u540e\uff0c\u82e5\u5b83\u4eec\u76f8\u7b49\uff0c\u5219\u5b83\u4eec\u5c5e\u4e8e\u540c\u4e00\u7ec4 anagrams \u3002"),(0,a.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,a.kt)(l.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// Anagrams\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\npublic class Solution {\n    public List<List<String>> groupAnagrams(String[] strs) {\n        final HashMap<String, ArrayList<String>> group = new HashMap<>();\n        for (final String s : strs) {\n            char[] tmp = s.toCharArray();\n            Arrays.sort(tmp);\n\n            final String key = new String(tmp);\n            if (!group.containsKey(key)) {\n                group.put(key, new ArrayList<>());\n            }\n            group.get(key).add(s);\n        }\n\n        List<List<String>> result = new ArrayList<>();\n        for (Map.Entry<String, ArrayList<String>> entry : group.entrySet()) {\n            final ArrayList<String> list = entry.getValue();\n            Collections.sort(list);\n            result.add(list);\n        }\n        return result;\n    }\n}\n"))),(0,a.kt)(o.Z,{value:"cpp",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// Anagrams\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\npublic:\n    vector<vector<string>> groupAnagrams(vector<string>& strs) {\n        unordered_map<string, vector<string> > group;\n        for (const auto &s : strs) {\n            string key = s;\n            sort(key.begin(), key.end());\n            group[key].push_back(s);\n        }\n\n        vector<vector<string>> result;\n        for (auto iter = group.cbegin(); iter != group.cend(); iter++) {\n            auto v = iter->second;\n            sort(v.begin(), v.end());\n            result.push_back(v);\n        }\n        return result;\n    }\n};\n")))))}d.isMDXComponent=!0}}]);