"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[7780],{12578:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>u,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"stack-and-queue/stack/remove-all-adjacent-duplicates-in-string-ii","title":"Remove All Adjacent Duplicates in String II","description":"\u63cf\u8ff0","source":"@site/docs/stack-and-queue/stack/remove-all-adjacent-duplicates-in-string-ii.md","sourceDirName":"stack-and-queue/stack","slug":"/stack-and-queue/stack/remove-all-adjacent-duplicates-in-string-ii","permalink":"/stack-and-queue/stack/remove-all-adjacent-duplicates-in-string-ii","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Remove All Adjacent Duplicates in String II"},"sidebar":"docs","previous":{"title":"Remove All Adjacent Duplicates in String","permalink":"/stack-and-queue/stack/remove-all-adjacent-duplicates-in-string"},"next":{"title":"Design Browser History","permalink":"/stack-and-queue/stack/design-browser-history"}}');var r=n(74848),l=n(28453),s=n(11470),i=n(19365);const u={title:"Remove All Adjacent Duplicates in String II"},o=void 0,c={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}];function p(e){const t={code:"code",h3:"h3",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,r.jsx)(t.p,{children:"TODO"}),"\n",(0,r.jsx)(t.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,r.jsx)(t.p,{children:"TODO"}),"\n",(0,r.jsx)(t.h3,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n","\n",(0,r.jsxs)(s.A,{defaultValue:"cpp",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,r.jsx)(i.A,{value:"python",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"# TODO\n"})})}),(0,r.jsx)(i.A,{value:"java",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"// TODO\n"})})}),(0,r.jsx)(i.A,{value:"cpp",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:"// Remove All Adjacent Duplicates in String II\n// Time complexity: O(n)\n// Space complexity: O(n)\nclass Solution {\npublic:\n    string removeDuplicates(string s, int k) {\n        stack<int> counts;\n        for (int i = 0; i < s.size(); ++i) {\n            if (i == 0 || s[i] != s[i - 1]) {\n                counts.push(1);\n            } else if (++counts.top() == k) {\n                counts.pop();\n                s.erase(i - k + 1, k);\n                i = i - k;\n            }\n        }\n        return s;\n    }\n};\n"})})})]})]})}function h(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var a=n(34164);const r={tabItem:"tabItem_Ymn6"};var l=n(74848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,s),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>y});var a=n(96540),r=n(34164),l=n(23104),s=n(56347),i=n(205),u=n(57485),o=n(31682),c=n(70679);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,o.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.W6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u.aZ)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=p(e),[s,u]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[o,d]=m({queryString:n,groupId:r}),[f,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),b=(()=>{const e=o??f;return h({value:e,tabValues:l})?e:null})();(0,i.A)((()=>{b&&u(b)}),[b]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),v(e)}),[d,v,l]),tabValues:l}}var v=n(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function j(e){let{className:t,block:n,selectedValue:a,selectValue:s,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:o}=(0,l.a_)(),c=e=>{const t=e.currentTarget,n=u.indexOf(t),r=i[n].value;r!==a&&(o(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>u.push(e),onKeyDown:d,onClick:c,...l,className:(0,r.A)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:l}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===l));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function k(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,g.jsx)(j,{...t,...e}),(0,g.jsx)(x,{...t,...e})]})}function y(e){const t=(0,v.A)();return(0,g.jsx)(k,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var a=n(96540);const r={},l=a.createContext(r);function s(e){const t=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(l.Provider,{value:t},e.children)}}}]);