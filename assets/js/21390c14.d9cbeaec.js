"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[2139],{3905:(a,e,t)=>{t.d(e,{Zo:()=>i,kt:()=>o});var s=t(7294);function n(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function m(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,s)}return t}function p(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){n(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function r(a,e){if(null==a)return{};var t,s,n=function(a,e){if(null==a)return{};var t,s,n={},m=Object.keys(a);for(s=0;s<m.length;s++)t=m[s],e.indexOf(t)>=0||(n[t]=a[t]);return n}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(s=0;s<m.length;s++)t=m[s],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(n[t]=a[t])}return n}var l=s.createContext({}),N=function(a){var e=s.useContext(l),t=e;return a&&(t="function"==typeof a?a(e):p(p({},e),a)),t},i=function(a){var e=N(a.components);return s.createElement(l.Provider,{value:e},a.children)},c={inlineCode:"code",wrapper:function(a){var e=a.children;return s.createElement(s.Fragment,{},e)}},k=s.forwardRef((function(a,e){var t=a.components,n=a.mdxType,m=a.originalType,l=a.parentName,i=r(a,["components","mdxType","originalType","parentName"]),k=N(t),o=n,h=k["".concat(l,".").concat(o)]||k[o]||c[o]||m;return t?s.createElement(h,p(p({ref:e},i),{},{components:t})):s.createElement(h,p({ref:e},i))}));function o(a,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof a||n){var m=t.length,p=new Array(m);p[0]=k;var r={};for(var l in e)hasOwnProperty.call(e,l)&&(r[l]=e[l]);r.originalType=a,r.mdxType="string"==typeof a?a:n,p[1]=r;for(var N=2;N<m;N++)p[N]=t[N];return s.createElement.apply(null,p)}return s.createElement.apply(null,t)}k.displayName="MDXCreateElement"},7286:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>p,default:()=>c,frontMatter:()=>m,metadata:()=>r,toc:()=>N});var s=t(7462),n=(t(7294),t(3905));const m={title:"Happy Number"},p=void 0,r={unversionedId:"number-theory/happy-number",id:"number-theory/happy-number",title:"Happy Number",description:"\u63cf\u8ff0",source:"@site/docs/number-theory/happy-number.md",sourceDirName:"number-theory",slug:"/number-theory/happy-number",permalink:"/number-theory/happy-number",draft:!1,tags:[],version:"current",frontMatter:{title:"Happy Number"},sidebar:"docs",previous:{title:"\u6570\u8bba",permalink:"/number-theory/"},next:{title:"Ugly Number",permalink:"/number-theory/ugly-number"}},l={},N=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}],i={toc:N};function c(a){let{components:e,...t}=a;return(0,n.kt)("wrapper",(0,s.Z)({},i,t,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,n.kt)("p",null,'Write a function to determine if a number is "happy number".'),(0,n.kt)("p",null,"A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example"),": 19 is a happy number"),(0,n.kt)("p",null,(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("msup",{parentName:"mrow"},(0,n.kt)("mn",{parentName:"msup"},"1"),(0,n.kt)("mn",{parentName:"msup"},"2")),(0,n.kt)("mo",{parentName:"mrow"},"+"),(0,n.kt)("msup",{parentName:"mrow"},(0,n.kt)("mn",{parentName:"msup"},"9"),(0,n.kt)("mn",{parentName:"msup"},"2")),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("mn",{parentName:"mrow"},"82")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1^2 + 9^2 = 82")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8974em",verticalAlign:"-0.0833em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},"1"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},"9"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"="),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},"82")))))),(0,n.kt)("p",null,(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("msup",{parentName:"mrow"},(0,n.kt)("mn",{parentName:"msup"},"8"),(0,n.kt)("mn",{parentName:"msup"},"2")),(0,n.kt)("mo",{parentName:"mrow"},"+"),(0,n.kt)("msup",{parentName:"mrow"},(0,n.kt)("mn",{parentName:"msup"},"2"),(0,n.kt)("mn",{parentName:"msup"},"2")),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("mn",{parentName:"mrow"},"68")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"8^2 + 2^2 = 68")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8974em",verticalAlign:"-0.0833em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},"8"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},"2"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"="),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},"68")))))),(0,n.kt)("p",null,(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("msup",{parentName:"mrow"},(0,n.kt)("mn",{parentName:"msup"},"6"),(0,n.kt)("mn",{parentName:"msup"},"2")),(0,n.kt)("mo",{parentName:"mrow"},"+"),(0,n.kt)("msup",{parentName:"mrow"},(0,n.kt)("mn",{parentName:"msup"},"8"),(0,n.kt)("mn",{parentName:"msup"},"2")),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("mn",{parentName:"mrow"},"100")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"6^2 + 8^2 = 100")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8974em",verticalAlign:"-0.0833em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},"6"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},"8"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"="),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},"100")))))),(0,n.kt)("p",null,(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("msup",{parentName:"mrow"},(0,n.kt)("mn",{parentName:"msup"},"1"),(0,n.kt)("mn",{parentName:"msup"},"2")),(0,n.kt)("mo",{parentName:"mrow"},"+"),(0,n.kt)("msup",{parentName:"mrow"},(0,n.kt)("mn",{parentName:"msup"},"0"),(0,n.kt)("mn",{parentName:"msup"},"2")),(0,n.kt)("mo",{parentName:"mrow"},"+"),(0,n.kt)("msup",{parentName:"mrow"},(0,n.kt)("mn",{parentName:"msup"},"0"),(0,n.kt)("mn",{parentName:"msup"},"2")),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("mn",{parentName:"mrow"},"1")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1^2 + 0^2 + 0^2 = 1")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8974em",verticalAlign:"-0.0833em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},"1"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8974em",verticalAlign:"-0.0833em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},"0"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},"0"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"="),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},"1")))))),(0,n.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,n.kt)("p",null,"\u8fd9\u9898\u627e\u5230\u89c4\u5f8b\u540e\u5c31\u7b80\u5355\u4e86\u3002\u5982\u679c\u53f3\u8fb9\u7684\u51fa\u73b0\u4e86\u67d0\u4e2a\u91cd\u590d\u7684\u6570\uff0c\u4f46\u4e0d\u662f 1\uff0c\u8bf4\u660e\u4f1a\u65e0\u9650\u5faa\u73af\u4e0b\u53bb\uff0c\u8fd9\u4e2a\u6570\u5c31\u4e0d\u662f\u5feb\u4e50\u6570\uff0c\u5982\u679c\u662f 1\uff0c\u5219\u662f\u5feb\u4e50\u6570\u3002"),(0,n.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// Happy Number\n// Time complexity: ?, Space complexity: ?\npublic class Solution {\n    public boolean isHappy(int n) {\n        final Set<Integer> existed = new HashSet<>();\n        while (true) {\n            int sum = 0;\n            while (n > 0) {\n                int digit = n % 10;\n                sum += digit * digit;\n                n /= 10;\n            }\n            if (existed.contains(sum)) {\n                return sum == 1;\n            } else {\n                existed.add(sum);\n                n = sum;\n            }\n        }\n    }\n}\n")))}c.isMDXComponent=!0}}]);