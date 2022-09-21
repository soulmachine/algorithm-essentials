"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[8278],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=i.createContext({}),u=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=u(e.components);return i.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(t),m=r,w=c["".concat(p,".").concat(m)]||c[m]||s[m]||a;return t?i.createElement(w,o(o({ref:n},d),{},{components:t})):i.createElement(w,o({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=c;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<a;u++)o[u]=t[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},7168:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var i=t(7462),r=(t(7294),t(3905));const a={title:"Minimum Window Substring"},o=void 0,l={unversionedId:"simulation/minimum-window-substring",id:"simulation/minimum-window-substring",title:"Minimum Window Substring",description:"\u63cf\u8ff0",source:"@site/docs/simulation/minimum-window-substring.md",sourceDirName:"simulation",slug:"/simulation/minimum-window-substring",permalink:"/en/simulation/minimum-window-substring",draft:!1,tags:[],version:"current",frontMatter:{title:"Minimum Window Substring"},sidebar:"docs",previous:{title:"Employee Free Time",permalink:"/en/simulation/employee-free-time"},next:{title:"Add Binary",permalink:"/en/simulation/add-binary"}},p={},u=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}],d={toc:u};function s(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.kt)("p",null,"Given a string ",(0,r.kt)("inlineCode",{parentName:"p"},"S")," and a string ",(0,r.kt)("inlineCode",{parentName:"p"},"T"),", find the minimum window in ",(0,r.kt)("inlineCode",{parentName:"p"},"S")," which will contain all the characters in ",(0,r.kt)("inlineCode",{parentName:"p"},"T")," in complexity ",(0,r.kt)("inlineCode",{parentName:"p"},"O(n)"),"."),(0,r.kt)("p",null,"For example, ",(0,r.kt)("inlineCode",{parentName:"p"},'S = "ADOBECODEBANC", T = "ABC"')),(0,r.kt)("p",null,"Minimum window is ",(0,r.kt)("inlineCode",{parentName:"p"},'"BANC"'),"."),(0,r.kt)("p",null,"Note:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If there is no such window in ",(0,r.kt)("inlineCode",{parentName:"li"},"S")," that covers all characters in ",(0,r.kt)("inlineCode",{parentName:"li"},"T"),", return the emtpy string ",(0,r.kt)("inlineCode",{parentName:"li"},'""'),"."),(0,r.kt)("li",{parentName:"ul"},"If there are multiple such windows, you are guaranteed that there will always be only one unique minimum window in ",(0,r.kt)("inlineCode",{parentName:"li"},"S"),".")),(0,r.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,r.kt)("p",null,"\u53cc\u6307\u9488\uff0c\u52a8\u6001\u7ef4\u62a4\u4e00\u4e2a\u533a\u95f4\u3002\u5c3e\u6307\u9488\u4e0d\u65ad\u5f80\u540e\u626b\uff0c\u5f53\u626b\u5230\u6709\u4e00\u4e2a\u7a97\u53e3\u5305\u542b\u4e86\u6240\u6709",(0,r.kt)("inlineCode",{parentName:"p"},"T"),"\u7684\u5b57\u7b26\u540e\uff0c\u7136\u540e\u518d\u6536\u7f29\u5934\u6307\u9488\uff0c\u76f4\u5230\u4e0d\u80fd\u518d\u6536\u7f29\u4e3a\u6b62\u3002\u6700\u540e\u8bb0\u5f55\u6240\u6709\u53ef\u80fd\u7684\u60c5\u51b5\u4e2d\u7a97\u53e3\u6700\u5c0f\u7684"),(0,r.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'// LeetCode, Minimum Window Substring\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    string minWindow(string S, string T) {\n        if (S.empty()) return "";\n        if (S.size() < T.size()) return "";\n\n        const int ASCII_MAX = 256;\n        int appeared_count[ASCII_MAX];\n        int expected_count[ASCII_MAX];\n        fill(appeared_count, appeared_count + ASCII_MAX, 0);\n        fill(expected_count, expected_count + ASCII_MAX, 0);\n\n        for (size_t i = 0; i < T.size(); i++) expected_count[T[i]]++;\n\n        int minWidth = INT_MAX, min_start = 0;  // \u7a97\u53e3\u5927\u5c0f\uff0c\u8d77\u70b9\n        int wnd_start = 0;\n        int appeared = 0;  // \u5b8c\u6574\u5305\u542b\u4e86\u4e00\u4e2aT\n        //\u5c3e\u6307\u9488\u4e0d\u65ad\u5f80\u540e\u626b\n        for (size_t wnd_end = 0; wnd_end < S.size(); wnd_end++) {\n            if (expected_count[S[wnd_end]] > 0)  {  // this char is a part of T\n                appeared_count[S[wnd_end]]++;\n                if (appeared_count[S[wnd_end]] <= expected_count[S[wnd_end]])\n                    appeared++;\n            }\n            if (appeared == T.size()) {  // \u5b8c\u6574\u5305\u542b\u4e86\u4e00\u4e2aT\n                // \u6536\u7f29\u5934\u6307\u9488\n                while (appeared_count[S[wnd_start]] > expected_count[S[wnd_start]]\n                        || expected_count[S[wnd_start]] == 0) {\n                    appeared_count[S[wnd_start]]--;\n                    wnd_start++;\n                }\n                if (minWidth > (wnd_end - wnd_start + 1)) {\n                    minWidth = wnd_end - wnd_start + 1;\n                    min_start = wnd_start;\n                }\n            }\n        }\n\n        if (minWidth == INT_MAX) return "";\n        else return S.substr(min_start, minWidth);\n    }\n};\n')))}s.isMDXComponent=!0}}]);