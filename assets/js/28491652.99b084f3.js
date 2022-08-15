"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[806],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(t),d=a,f=u["".concat(p,".").concat(d)]||u[d]||c[d]||i;return t?r.createElement(f,l(l({ref:n},m),{},{components:t})):r.createElement(f,l({ref:n},m))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=u;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2481:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const i={title:"Valid Anagram"},l=void 0,o={unversionedId:"string/valid-anagram",id:"string/valid-anagram",title:"Valid Anagram",description:"\u63cf\u8ff0",source:"@site/docs/string/valid-anagram.md",sourceDirName:"string",slug:"/string/valid-anagram",permalink:"/string/valid-anagram",draft:!1,editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/string/valid-anagram.md",tags:[],version:"current",frontMatter:{title:"Valid Anagram"},sidebar:"someSidebar",previous:{title:"Anagrams",permalink:"/string/anagrams"},next:{title:"Simplify Path",permalink:"/string/simplify-path"}},p={},s=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}],m={toc:s};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.kt)("p",null,"Given two strings ",(0,a.kt)("inlineCode",{parentName:"p"},"s")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"t"),", write a function to determine if ",(0,a.kt)("inlineCode",{parentName:"p"},"t")," is an anagram of ",(0,a.kt)("inlineCode",{parentName:"p"},"s"),"."),(0,a.kt)("p",null,"For example,"),(0,a.kt)("p",null,'s = "anagram", t = "nagaram", return true.\ns = "rat", t = "car", return false.'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),":"),(0,a.kt)("p",null,"You may assume the string contains only lowercase alphabets."),(0,a.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,a.kt)("p",null,"\u9996\u5148\u80fd\u591f\u60f3\u5230\u7684\u662f\uff0c\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"s"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"t"),"\u5206\u522b\u5efa\u7acb\u4e00\u4e2aHashMap\uff0c\u7edf\u8ba1\u6bcf\u4e2a\u5b57\u6bcd\u51fa\u73b0\u7684\u6b21\u6570\uff0c\u6bd4\u8f83\u4e24\u4e2aHashMap\u662f\u5426\u76f8\u7b49\u3002\u65f6\u95f4\u590d\u6742\u5ea6",(0,a.kt)("inlineCode",{parentName:"p"},"O(n)"),"\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6",(0,a.kt)("inlineCode",{parentName:"p"},"O(n)"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"n"),"\u4e3a\u5b57\u7b26\u4e32\u957f\u5ea6\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u9762\u8bd5\u5b98\u8981\u6c42\u7a7a\u95f4\u590d\u6742\u5ea6\u5747\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"O(1)"),"\uff0c\u600e\u4e48\u529e\uff1f"),(0,a.kt)("p",null,"\u6ce8\u610f\u8fd9\u9898\u7684\u5b57\u7b26\u4e32\u53ea\u5305\u542b\u5c0f\u5199\u7684\u5b57\u6bcd\uff0c\u610f\u5473\u7740\u53ea\u6709\u4ece",(0,a.kt)("inlineCode",{parentName:"p"},"a-z"),"\u768426\u4e2a\u5b57\u6bcd\uff0c\u4e8e\u662f\u6211\u4eec\u53ef\u4ee5\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"s"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"t"),"\u5f00\u4e00\u4e2a\u957f\u5ea6\u4e3a26\u7684\u6574\u6570\u6570\u7ec4\u6765\u4ee3\u66ff\u54c8\u5e0c\u8868\uff0c\u6b64\u65f6\u989d\u5916\u7a7a\u95f4\u4e3a\u56fa\u5b9a\u957f\u5ea6\u7684\u4e24\u4e2a\u6570\u7ec4\uff0c\u56e0\u6b64\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"O(1)"),"\u3002\u8fd9\u662f\u8fd9\u9898\u6bd4\u8f83\u72e1\u8bc8\u7684\u5730\u65b9\u3002"),(0,a.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// Valid Anagram\n// Time Complexity: O(n), Space Complexity: O(1)\npublic class Solution {\n    public boolean isAnagram(String s, String t) {\n        if (s.length() != t.length()) return false;\n        final int[] map = new int[ALPHABET_SIZE];\n\n        for (int i = 0; i < s.length(); ++i) {\n            ++map[s.charAt(i) - 'a'];\n            --map[t.charAt(i) - 'a'];\n        }\n        for (int x : map) {\n            if (x != 0) return false;\n        }\n        return true;\n    }\n    private static final int ALPHABET_SIZE = 26;\n}\n\n")))}c.isMDXComponent=!0}}]);