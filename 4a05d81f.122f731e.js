(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return d}));var r=n(2),a=n(7),o=(n(0),n(304)),i=n(308),c=n(309),s={title:"Search Insert Position"},l={unversionedId:"search/search-insert-position",id:"search/search-insert-position",isDocsHomePage:!1,title:"Search Insert Position",description:"\u63cf\u8ff0",source:"@site/docs/search/search-insert-position.md",slug:"/search/search-insert-position",permalink:"/search/search-insert-position",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/search/search-insert-position.md",version:"current",sidebar:"someSidebar",previous:{title:"Search for a Range",permalink:"/search/search-for-a-range"},next:{title:"Search in Rotated Sorted Array",permalink:"/search/search-in-rotated-sorted-array"}},u=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",children:[]}],b={rightToc:u};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(o.b)("p",null,"Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order."),Object(o.b)("p",null,"You may assume no duplicates in the array."),Object(o.b)("p",null,"Here are few examples."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"[1,3,5,6], 5 \u2192 2\n[1,3,5,6], 2 \u2192 1\n[1,3,5,6], 7 \u2192 4\n[1,3,5,6], 0 \u2192 0\n")),Object(o.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(o.b)("p",null,"\u5373",Object(o.b)("inlineCode",{parentName:"p"},"std::lower_bound()"),"\u3002"),Object(o.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(o.b)(i.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"java",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Search Insert Position\n// \u91cd\u65b0\u5b9e\u73b0 lower_bound\n// \u65f6\u95f4\u590d\u6742\u5ea6O(logn)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public int searchInsert(int[] nums, int target) {\n        return lower_bound(nums, 0, nums.length, target);\n    }\n\n    int lower_bound (int[] A, int first, int last, int target) {\n        while (first != last) {\n            int mid = first + (last - first) / 2;\n            if (target > A[mid]) first = ++mid;\n            else                 last = mid;\n        }\n\n        return first;\n    }\n}\n"))),Object(o.b)(c.a,{value:"cpp",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"// Search Insert Position\n// \u91cd\u65b0\u5b9e\u73b0 lower_bound\n// \u65f6\u95f4\u590d\u6742\u5ea6O(logn)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    int searchInsert(vector<int>& nums, int target) {\n        return distance(nums.begin(), lower_bound(nums.begin(), nums.end(), target));\n    }\n\n    template<typename ForwardIterator, typename T>\n    ForwardIterator lower_bound (ForwardIterator first,\n            ForwardIterator last, T value) {\n        while (first != last) {\n            auto mid = next(first, distance(first, last) / 2);\n\n            if (value > *mid)   first = ++mid;\n            else                last = mid;\n        }\n\n        return first;\n    }\n};\n")))),Object(o.b)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/search/search-for-a-range"}),"Search for a Range"))))}d.isMDXComponent=!0},304:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(n),p=r,f=b["".concat(i,".").concat(p)]||b[p]||d[p]||o;return n?a.a.createElement(f,c(c({ref:t},l),{},{components:n})):a.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},305:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},306:function(e,t,n){"use strict";var r=n(0);const a=Object(r.createContext)(void 0);t.a=a},307:function(e,t,n){"use strict";var r=n(0),a=n(306);t.a=function(){const e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},308:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(307),i=n(305),c=n(49),s=n.n(c);const l=37,u=39;t.a=function(e){const{block:t,children:n,defaultValue:c,values:b,groupId:d}=e,{tabGroupChoices:p,setTabGroupChoices:f}=Object(o.a)(),[m,h]=Object(r.useState)(c),[O,v]=Object(r.useState)(!1);if(null!=d){const e=p[d];null!=e&&e!==m&&b.some((t=>t.value===e))&&h(e)}const y=e=>{h(e),null!=d&&f(d,e)},j=[],g=e=>{e.metaKey||e.altKey||e.ctrlKey||v(!0)},w=()=>{v(!1)};return Object(r.useEffect)((()=>{window.addEventListener("keydown",g),window.addEventListener("mousedown",w)}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},b.map((({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":m===e,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":m===e}),style:O?{}:{outline:"none"},key:e,ref:e=>j.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case u:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case l:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(j,e.target,e),g(e)},onFocus:()=>y(e),onClick:()=>{y(e),v(!1)},onPointerDown:()=>v(!1)},t)))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((e=>e.props.value===m))[0]))}},309:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}}}]);