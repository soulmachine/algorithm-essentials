"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[3204],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7402:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={title:"Word Pattern"},l=void 0,o={unversionedId:"string/word-pattern",id:"string/word-pattern",title:"Word Pattern",description:"\u63cf\u8ff0",source:"@site/docs/string/word-pattern.md",sourceDirName:"string",slug:"/string/word-pattern",permalink:"/string/word-pattern",draft:!1,tags:[],version:"current",frontMatter:{title:"Word Pattern"},sidebar:"docs",previous:{title:"Isomorphic Strings",permalink:"/string/isomorphic-strings"},next:{title:"Decode String",permalink:"/string/decode-string"}},p={},s=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.kt)("p",null,"Given a ",(0,a.kt)("inlineCode",{parentName:"p"},"pattern")," and a string ",(0,a.kt)("inlineCode",{parentName:"p"},"str"),", find if ",(0,a.kt)("inlineCode",{parentName:"p"},"str")," follows the same pattern."),(0,a.kt)("p",null,"Here follow means a full match, such that there is a bijection between a letter in ",(0,a.kt)("inlineCode",{parentName:"p"},"pattern")," and a non-empty word in ",(0,a.kt)("inlineCode",{parentName:"p"},"str"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples"),":"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"pattern = ",(0,a.kt)("inlineCode",{parentName:"li"},'"abba"'),", str = ",(0,a.kt)("inlineCode",{parentName:"li"},'"dog cat cat dog"')," should return true."),(0,a.kt)("li",{parentName:"ol"},"pattern = ",(0,a.kt)("inlineCode",{parentName:"li"},'"abba"'),", str = ",(0,a.kt)("inlineCode",{parentName:"li"},'"dog cat cat fish"')," should return false."),(0,a.kt)("li",{parentName:"ol"},"pattern = ",(0,a.kt)("inlineCode",{parentName:"li"},'"aaaa"'),", str = ",(0,a.kt)("inlineCode",{parentName:"li"},'"dog cat cat dog"')," should return false."),(0,a.kt)("li",{parentName:"ol"},"pattern = ",(0,a.kt)("inlineCode",{parentName:"li"},'"abba"'),", str = ",(0,a.kt)("inlineCode",{parentName:"li"},'"dog dog dog dog"')," should return false.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Notes"),":"),(0,a.kt)("p",null,"You may assume ",(0,a.kt)("inlineCode",{parentName:"p"},"pattern")," contains only lowercase letters, and ",(0,a.kt)("inlineCode",{parentName:"p"},"str")," contains lowercase letters separated by a single space."),(0,a.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,a.kt)("p",null,'\u672c\u9898\u8ddf "Isomorphic Strings" \u5f88\u7c7b\u4f3c\uff0c\u7528\u4e24\u4e2aHashMap, \u8bb0\u5f55\u4ece\u5b57\u7b26\u5230\u5b57\u7b26\u4e32\u548c\u5b57\u7b26\u4e32\u5230\u5b57\u7b26\u7684\u6620\u5c04\u3002'),(0,a.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'// Word Pattern\n// Time Complexity: O(n), Space Complexity: O(n)\npublic class Solution {\n    public boolean wordPattern(String pattern, String str) {\n        String[] words = str.split(" ");\n        if (words.length != pattern.length()) return false;\n\n        final Map<Character, String> map1 = new HashMap<>();\n        final Map<String, Character> map2 = new HashMap<>();\n        for (int i = 0; i < words.length; ++i) {\n            final Character key1 = pattern.charAt(i);\n            if (map1.containsKey(key1)) {\n                final String value = map1.get(key1);\n                if (!value.equals(words[i])) return false;\n            } else {\n                map1.put(key1, words[i]);\n            }\n\n            final String key2 = words[i];\n            if (map2.containsKey(key2)) {\n                final char value = map2.get(key2);\n                if (value != pattern.charAt(i)) return false;\n            } else {\n                map2.put(key2, pattern.charAt(i));\n            }\n        }\n        return true;\n    }\n}\n')),(0,a.kt)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/string/isomorphic-strings"},"Isomorphic Strings"))))}u.isMDXComponent=!0}}]);