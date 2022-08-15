"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[1379],{3905:(e,n,r)=>{r.d(n,{Zo:()=>m,kt:()=>d});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=t.createContext({}),p=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},m=function(e){var n=p(e.components);return t.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,l=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(r),d=i,y=c["".concat(u,".").concat(d)]||c[d]||s[d]||l;return r?t.createElement(y,a(a({ref:n},m),{},{components:r})):t.createElement(y,a({ref:n},m))}));function d(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=r.length,a=new Array(l);a[0]=c;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var p=2;p<l;p++)a[p]=r[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}c.displayName="MDXCreateElement"},4970:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var t=r(7462),i=(r(7294),r(3905));const l={title:"Super Ugly Number"},a=void 0,o={unversionedId:"number-theory/super-ugly-number",id:"number-theory/super-ugly-number",title:"Super Ugly Number",description:"\u63cf\u8ff0",source:"@site/docs/number-theory/super-ugly-number.md",sourceDirName:"number-theory",slug:"/number-theory/super-ugly-number",permalink:"/number-theory/super-ugly-number",draft:!1,editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/number-theory/super-ugly-number.md",tags:[],version:"current",frontMatter:{title:"Super Ugly Number"},sidebar:"someSidebar",previous:{title:"Ugly Number II",permalink:"/number-theory/ugly-number-ii"},next:{title:"Fraction to Recurring Decimal",permalink:"/number-theory/fraction-to-recurring-decimal"}},u={},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}],m={toc:p};function s(e){let{components:n,...r}=e;return(0,i.kt)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,i.kt)("p",null,"Write a function to find the ",(0,i.kt)("inlineCode",{parentName:"p"},"n"),"-th super ugly number."),(0,i.kt)("p",null,"Super ugly numbers are positive numbers whose all prime factors are in the given prime list ",(0,i.kt)("inlineCode",{parentName:"p"},"primes")," of size ",(0,i.kt)("inlineCode",{parentName:"p"},"k"),". For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"[1, 2, 4, 7, 8, 13, 14, 16, 19, 26, 28, 32]")," is the sequence of the first 12 super ugly numbers given ",(0,i.kt)("inlineCode",{parentName:"p"},"primes = [2, 7, 13, 19]")," of size 4."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note"),":"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"1 is a super ugly number for any given ",(0,i.kt)("inlineCode",{parentName:"li"},"primes"),"."),(0,i.kt)("li",{parentName:"ol"},"The given numbers in ",(0,i.kt)("inlineCode",{parentName:"li"},"primes")," are in ascending order."),(0,i.kt)("li",{parentName:"ol"},"0 < ",(0,i.kt)("inlineCode",{parentName:"li"},"k")," \u2264 100, 0 < ",(0,i.kt)("inlineCode",{parentName:"li"},"n")," \u2264 1000000, 0 < ",(0,i.kt)("inlineCode",{parentName:"li"},"primes[i]")," < 1000.")),(0,i.kt)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),(0,i.kt)("p",null,"\u8fd9\u9898\u662f ",(0,i.kt)("a",{parentName:"p",href:"/number-theory/ugly-number-ii"},"Ugly Number II"),' \u7684\u6269\u5c55\u3002\u5728"Ugly Number II"\u4e2d\uff0c',(0,i.kt)("inlineCode",{parentName:"p"},"primes=[2,3,5]"),"\uff0c\u8fd9\u9898\u4e2d",(0,i.kt)("inlineCode",{parentName:"p"},"primes"),"\u53ef\u4ee5\u81ea\u7531\u53d8\u5316\u3002"),(0,i.kt)("p",null,'\u6240\u4ee5\u8fd9\u9898\u53ef\u4ee5\u7528"Ugly Number II"\u7684\u601d\u8def\u89e3\u51b3\u3002\u6bcf\u6b21\u8981\u4ece\u591a\u4e2a\u5217\u8868\u4e2d\u9009\u62e9\u6700\u5c0f\u7684\u5143\u7d20\uff0c\u6211\u4eec\u53ef\u4ee5\u7ef4\u62a4\u4e00\u4e2a\u5927\u5c0f\u4e3a',(0,i.kt)("inlineCode",{parentName:"p"},"primes"),"\u957f\u5ea6\u7684\u5c0f\u6839\u5806\u3002"),(0,i.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Super Ugly Number\n// Time complexity: O(n), Space complexity: O(n)\npublic class Solution {\n    public int nthSuperUglyNumber(int n, int[] primes) {\n        final int[] nums = new int[n];\n        nums[0] = 1; // 1 is the first ugly number\n        final Queue<Node> q = new PriorityQueue<>();\n        for (int i = 0; i < primes.length; ++i) {\n            q.add(new Node(0, primes[i], primes[i]));\n        }\n\n        for (int i = 1; i < n; ++i) {\n            // get the min element and add to nums\n            Node node = q.peek();\n            nums[i] = node.val;\n\n            // update top elements\n            do {\n                node = q.poll();\n                node.val = nums[++node.index] * node.prime;\n                q.add(node); // push it back\n                // prevent duplicate\n            } while (!q.isEmpty() && q.peek().val == nums[i]);\n        }\n        return nums[n - 1];\n    }\n    static class Node implements Comparable<Node> {\n        private int index;\n        private int val;\n        private int prime;\n\n        public Node(int index, int val, int prime) {\n            this.index = index;\n            this.val = val;\n            this.prime = prime;\n        }\n        public int compareTo(Node other) {\n            return this.val - other.val;\n        }\n    }\n}\n")),(0,i.kt)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/number-theory/ugly-number-ii"},"Ugly Number II"))))}s.isMDXComponent=!0}}]);