"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[7485],{69205:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"string/greatest-common-divisor-of-strings","title":"Greatest Common Divisor of Strings","description":"\u63cf\u8ff0","source":"@site/docs/string/greatest-common-divisor-of-strings.md","sourceDirName":"string","slug":"/string/greatest-common-divisor-of-strings","permalink":"/en/string/greatest-common-divisor-of-strings","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Greatest Common Divisor of Strings"},"sidebar":"docs","previous":{"title":"Decode String","permalink":"/en/string/decode-string"},"next":{"title":"Largest Number","permalink":"/en/string/largest-number"}}');var s=r(74848),l=r(28453),a=r(11470),o=r(19365);const i={title:"Greatest Common Divisor of Strings"},c=void 0,u={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}];function h(e){const t={blockquote:"blockquote",br:"br",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,s.jsxs)(t.p,{children:["For two strings ",(0,s.jsx)(t.code,{children:"s"})," and ",(0,s.jsx)(t.code,{children:"t"}),', we say "',(0,s.jsx)(t.code,{children:"t"})," divides ",(0,s.jsx)(t.code,{children:"s"}),'" if and only if ',(0,s.jsx)(t.code,{children:"s = t + ... + t"})," (i.e., ",(0,s.jsx)(t.code,{children:"t"})," is concatenated with itself one or more times)."]}),"\n",(0,s.jsxs)(t.p,{children:["Given two strings ",(0,s.jsx)(t.code,{children:"str1"})," and ",(0,s.jsx)(t.code,{children:"str2"}),", return the largest string ",(0,s.jsx)(t.code,{children:"x"})," such that ",(0,s.jsx)(t.code,{children:"x"})," divides both ",(0,s.jsx)(t.code,{children:"str1"})," and ",(0,s.jsx)(t.code,{children:"str2"}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Example 1:"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Input"}),': str1 = "ABCABC", str2 = "ABC"',(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.strong,{children:"Output"}),': "ABC"']}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Example 2:"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Input"}),': str1 = "ABABAB", str2 = "ABAB"',(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.strong,{children:"Output"}),': "AB"']}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Example 3:"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Input"}),': str1 = "LEET", str2 = "CODE"',(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.strong,{children:"Output"}),': ""']}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Constraints:"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"1 <= str1.length, str2.length <= 1000"})}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"str1"})," and ",(0,s.jsx)(t.code,{children:"str2"})," consist of English uppercase letters."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,s.jsxs)(t.p,{children:["\u7531\u4e8e ",(0,s.jsx)(t.code,{children:"str1"})," \u548c ",(0,s.jsx)(t.code,{children:"str2"})," \u53ef\u4ee5\u88ab\u540c\u4e00\u4e2a",(0,s.jsx)(t.code,{children:"x"}),"\u4e32\u6574\u9664\uff0c\u90a3\u4e48 ",(0,s.jsx)(t.code,{children:"str1+str2"})," \u548c ",(0,s.jsx)(t.code,{children:"str2+str1"})," \u4e00\u5b9a\u662f\u76f8\u540c\u7684\u3002\u800c\u4e14\u6700\u5927\u7684",(0,s.jsx)(t.code,{children:"x"}),"\u7684\u957f\u5ea6\u662f ",(0,s.jsx)(t.code,{children:"str1"})," \u548c ",(0,s.jsx)(t.code,{children:"str2"})," \u957f\u5ea6\u7684\u6700\u5927\u516c\u7ea6\u6570\u3002"]}),"\n",(0,s.jsx)(t.h3,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n","\n",(0,s.jsxs)(a.A,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,s.jsx)(o.A,{value:"python",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"# TODO\n"})})}),(0,s.jsx)(o.A,{value:"java",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:"// TODO\n"})})}),(0,s.jsx)(o.A,{value:"cpp",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:'// Greatest Common Divisor of Strings\nclass Solution {\npublic:\n    string gcdOfStrings(string str1, string str2) {\n        return (str1 + str2 == str2 + str1) ? str1.substr(0, gcd(str1.size(), str2.size())) : "";\n    }\n};\n'})})})]})]})}function p(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>a});r(96540);var n=r(34164);const s={tabItem:"tabItem_Ymn6"};var l=r(74848);function a(e){let{children:t,hidden:r,className:a}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,a),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>A});var n=r(96540),s=r(34164),l=r(23104),a=r(56347),o=r(205),i=r(57485),c=r(31682),u=r(70679);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}(r);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:r}=e;const s=(0,a.W6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i.aZ)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(s.location.search);t.set(l,e),s.replace({...s.location,search:t.toString()})}),[l,s])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,l=h(e),[a,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[c,d]=x({queryString:r,groupId:s}),[m,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,l]=(0,u.Dv)(r);return[s,(0,n.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:s}),g=(()=>{const e=c??m;return p({value:e,tabValues:l})?e:null})();(0,o.A)((()=>{g&&i(g)}),[g]);return{selectedValue:a,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,l]),tabValues:l}}var f=r(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(74848);function j(e){let{className:t,block:r,selectedValue:n,selectValue:a,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),u=e=>{const t=e.currentTarget,r=i.indexOf(t),s=o[r].value;s!==n&&(c(t),a(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;t=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;t=i[r]??i[i.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},t),children:o.map((e=>{let{value:t,label:r,attributes:l}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>i.push(e),onKeyDown:d,onClick:u,...l,className:(0,s.A)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:l}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===l));return e?(0,n.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function y(e){const t=m(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",g.tabList),children:[(0,b.jsx)(j,{...t,...e}),(0,b.jsx)(v,{...t,...e})]})}function A(e){const t=(0,f.A)();return(0,b.jsx)(y,{...e,children:d(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>o});var n=r(96540);const s={},l=n.createContext(s);function a(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);