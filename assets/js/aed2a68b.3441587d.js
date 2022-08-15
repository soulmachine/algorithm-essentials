"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[87],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(t),d=i,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},7054:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(7462),i=(t(7294),t(3905));const o={title:"Maximum Product of Word Lengths"},a=void 0,l={unversionedId:"bitwise-operations/maximum-product-of-word-lengths",id:"bitwise-operations/maximum-product-of-word-lengths",title:"Maximum Product of Word Lengths",description:"\u63cf\u8ff0",source:"@site/docs/bitwise-operations/maximum-product-of-word-lengths.md",sourceDirName:"bitwise-operations",slug:"/bitwise-operations/maximum-product-of-word-lengths",permalink:"/bitwise-operations/maximum-product-of-word-lengths",draft:!1,editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/bitwise-operations/maximum-product-of-word-lengths.md",tags:[],version:"current",frontMatter:{title:"Maximum Product of Word Lengths"},sidebar:"someSidebar",previous:{title:"Missing Number",permalink:"/bitwise-operations/missing-number"},next:{title:"Bitwise AND of Numbers Range",permalink:"/bitwise-operations/bitwise-and-of-numbers-range"}},s={},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u89e3\u6cd5 1",id:"\u89e3\u6cd5-1",level:3},{value:"\u89e3\u6cd5 2",id:"\u89e3\u6cd5-2",level:3}],u={toc:p};function m(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,i.kt)("p",null,"Given a string array ",(0,i.kt)("inlineCode",{parentName:"p"},"words"),", find the maximum value of ",(0,i.kt)("inlineCode",{parentName:"p"},"length(word[i]) * length(word[j])")," where the two words do not share common letters. You may assume that each word will contain only lower case letters. If no such two words exist, return 0."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1"),":"),(0,i.kt)("p",null,"Given ",(0,i.kt)("inlineCode",{parentName:"p"},'["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]')),(0,i.kt)("p",null,"Return ",(0,i.kt)("inlineCode",{parentName:"p"},"16")),(0,i.kt)("p",null,"The two words can be ",(0,i.kt)("inlineCode",{parentName:"p"},'"abcw"'),", ",(0,i.kt)("inlineCode",{parentName:"p"},'"xtfn"'),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2"),":"),(0,i.kt)("p",null,"Given ",(0,i.kt)("inlineCode",{parentName:"p"},'["a", "ab", "abc", "d", "cd", "bcd", "abcd"]')),(0,i.kt)("p",null,"Return 4"),(0,i.kt)("p",null,"The two words can be ",(0,i.kt)("inlineCode",{parentName:"p"},'"ab"'),", ",(0,i.kt)("inlineCode",{parentName:"p"},'"cd"'),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 3"),":"),(0,i.kt)("p",null,"Given ",(0,i.kt)("inlineCode",{parentName:"p"},'["a", "aa", "aaa", "aaaa"]')),(0,i.kt)("p",null,"Return 0"),(0,i.kt)("p",null,"No such pair of words."),(0,i.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,i.kt)("p",null,"\u7531\u4e8e\u53ea\u6709 26 \u4e2a\u5c0f\u5199\u5b57\u6bcd\uff0c\u6240\u4ee5\uff0c\u6211\u4eec\u53ef\u4ee5\u4e3a\u6570\u7ec4\u4e2d\u7684\u6bcf\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"word"),"\u5f00\u8f9f\u4e00\u4e2a\u957f\u4e3a 26 \u7684\u5e03\u5c14\u6570\u7ec4\u4f5c\u4e3a\u54c8\u5e0c\u8868\uff0c\u7136\u540e\u7528\u4e00\u4e2a\u4e24\u91cd for \u5faa\u73af\uff0c\u4e24\u4e24\u6bd4\u8f83\uff0c\u5982\u679c\u4e0d\u5b58\u5728\u516c\u5171\u7684\u5b57\u6bcd\uff0c\u5219\u8ba1\u7b97\u4e8c\u8005\u7684\u957f\u5ea6\u7684\u4e58\u79ef\uff0c\u53d6\u6700\u5927\u4f5c\u4e3a\u6700\u7ec8\u7ed3\u679c\u3002\u65f6\u95f4\u590d\u6742\u5ea6",(0,i.kt)("inlineCode",{parentName:"p"},"O(26n^2)"),"\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6",(0,i.kt)("inlineCode",{parentName:"p"},"O(26n)"),"\u3002"),(0,i.kt)("p",null,"\u4e0a\u9762\u7684\u65b9\u6cd5\u53ef\u4ee5\u8fdb\u4e00\u6b65\u4f18\u5316\uff0c\u5373\u957f\u5ea6\u4e3a 26 \u7684\u5e03\u5c14\u6570\u7ec4\uff0c\u5c0f\u4e8e 32 \u4f4d\uff0c\u53ef\u4ee5\u7f16\u7801\u4e3a\u4e00\u4e2a\u6574\u6570\uff0c\u8fd9\u6837\u4e24\u4e2a\u6574\u6570\u6309\u4f4d\u4e0e\uff0c\u5982\u679c\u7ed3\u679c\u4e3a 1\uff0c\u8bf4\u660e\u5b58\u5728\u516c\u5171\u5b57\u6bcd\uff0c\u5982\u679c\u7ed3\u679c\u4e3a 0\uff0c\u8bf4\u660e\u4e0d\u5b58\u5728\u516c\u5171\u5b57\u6bcd\u3002\u65f6\u95f4\u590d\u6742\u5ea6",(0,i.kt)("inlineCode",{parentName:"p"},"O(n^2)"),"\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6",(0,i.kt)("inlineCode",{parentName:"p"},"O(n)"),"\u3002"),(0,i.kt)("h3",{id:"\u89e3\u6cd5-1"},"\u89e3\u6cd5 1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Maximum Product of Word Lengths\n// Time Complexity: O(26n^2), Space Complexity: O(26n)\npublic class Solution {\n    public int maxProduct(String[] words) {\n        final int n = words.length;\n        final boolean[][] hashset = new boolean[n][ALPHABET_SIZE];\n\n        for (int i = 0; i < n; ++i) {\n            for (int j = 0; j < words[i].length(); ++j) {\n                hashset[i][words[i].charAt(j) - 'a'] = true;\n            }\n        }\n\n        int result = 0;\n        for (int i = 0; i < n; ++i) {\n            for (int j = i + 1; j < n; ++j) {\n                boolean hasCommon = false;\n                for (int k = 0; k < ALPHABET_SIZE; ++k) {\n                    if (hashset[i][k] && hashset[j][k]) {\n                        hasCommon = true;\n                        break;\n                    }\n                }\n                int tmp = words[i].length() * words[j].length();\n                if (!hasCommon && tmp > result) {\n                    result = tmp;\n                }\n            }\n        }\n        return result;\n    }\n    private static final int ALPHABET_SIZE = 26;\n}\n")),(0,i.kt)("h3",{id:"\u89e3\u6cd5-2"},"\u89e3\u6cd5 2"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Maximum Product of Word Lengths\n// Time Complexity: O(n^2), Space Complexity: O(n)\npublic class Solution {\n    public int maxProduct(String[] words) {\n        final int n = words.length;\n        final int[] hashset = new int[n];\n\n        for (int i = 0; i < n; ++i) {\n            for (int j = 0; j < words[i].length(); ++j) {\n                hashset[i] |= 1 << (words[i].charAt(j) - 'a');\n            }\n        }\n\n        int result = 0;\n        for (int i = 0; i < n; ++i) {\n            for (int j = i + 1; j < n; ++j) {\n                int tmp = words[i].length() * words[j].length();\n                if ((hashset[i] & hashset[j]) == 0 && tmp > result) {\n                    result = tmp;\n                }\n            }\n        }\n        return result;\n    }\n}\n")))}m.isMDXComponent=!0}}]);