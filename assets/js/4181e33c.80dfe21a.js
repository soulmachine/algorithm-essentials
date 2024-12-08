"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[9249],{30733:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>u,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"simulation/candy-crush","title":"Candy Crush","description":"\u63cf\u8ff0","source":"@site/docs/simulation/candy-crush.md","sourceDirName":"simulation","slug":"/simulation/candy-crush","permalink":"/simulation/candy-crush","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Candy Crush"},"sidebar":"docs","previous":{"title":"Design Underground System","permalink":"/simulation/design-underground-system"},"next":{"title":"Design Tic-Tac-Toe","permalink":"/simulation/design-tic-tac-toe"}}');var t=r(74848),o=r(28453),l=r(11470),s=r(19365);const c={title:"Candy Crush"},u=void 0,i={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}];function b(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,t.jsx)(n.p,{children:"TODO"}),"\n",(0,t.jsx)(n.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,t.jsx)(n.p,{children:"TODO"}),"\n",(0,t.jsx)(n.h3,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n","\n",(0,t.jsxs)(l.A,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,t.jsx)(s.A,{value:"java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"// Candy Crush\n// Time complexity: O((R*C)^2)\n// Space complexity: O(1)\nclass Solution {\n    public int[][] candyCrush(int[][] board) {\n        int R = board.length, C = board[0].length;\n        boolean todo = false;\n        for (int r = 0; r < R; ++r) {\n            for (int c = 0; c + 2 < C; ++c) {\n                int v = Math.abs(board[r][c]);\n                if (v != 0 && v == Math.abs(board[r][c+1]) && v == Math.abs(board[r][c+2])) {\n                    board[r][c] = board[r][c+1] = board[r][c+2] = -v;\n                    todo = true;\n                }\n            }\n        }\n        for (int r = 0; r + 2 < R; ++r) {\n            for (int c = 0; c < C; ++c) {\n                int v = Math.abs(board[r][c]);\n                if (v != 0 && v == Math.abs(board[r+1][c]) && v == Math.abs(board[r+2][c])) {\n                    board[r][c] = board[r+1][c] = board[r+2][c] = -v;\n                    todo = true;\n                }\n            }\n        }\n\n        // gravity\n        for (int c = 0; c < C; ++c) {\n            int wr = R - 1;\n            for (int r = R-1; r >= 0; --r)\n                if (board[r][c] > 0)\n                    board[wr--][c] = board[r][c];\n            while (wr >= 0)\n                board[wr--][c] = 0;\n        }\n\n        return todo ? candyCrush(board) : board;\n    }\n}\n"})})}),(0,t.jsx)(s.A,{value:"cpp",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"// TODO\n"})})}),(0,t.jsx)(s.A,{value:"python",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"# Candy Crush\n# Time complexity: O((R*C)^2)\n# Space complexity: O(1)\ndef candyCrush(board):\n    R, C = len(board), len(board[0])\n    todo = False\n\n    for r in range(R):\n        for c in range(C-2):\n            v = abs(board[r][c])\n            if v != 0 and v == abs(board[r][c+1]) and v == abs(board[r][c+2]):\n                board[r][c] = board[r][c+1] = board[r][c+2] = -v\n                todo = True\n\n    for r in range(R-2):\n        for c in range(C):\n            v = abs(board[r][c])\n            if v != 0 and v == abs(board[r+1][c]) and v == abs(board[r+2][c]):\n                board[r][c] = board[r+1][c] = board[r+2][c] = -v\n                todo = True\n\n    # gravity\n    for c in range(C):\n        wr = R - 1\n        for r in range(R-1, -1, -1):\n            if board[r][c] > 0:\n                board[wr][c] = board[r][c]\n                wr -= 1\n        while wr >= 0:\n            board[wr][c] = 0\n            wr -= 1\n\n    return candyCrush(board) if todo else board\n"})})})]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>l});r(96540);var a=r(34164);const t={tabItem:"tabItem_Ymn6"};var o=r(74848);function l(e){let{children:n,hidden:r,className:l}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.A)(t.tabItem,l),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>w});var a=r(96540),t=r(34164),o=r(23104),l=r(56347),s=r(205),c=r(57485),u=r(31682),i=r(70679);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function b(e){const{values:n,children:r}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:a,default:t}}=e;return{value:n,label:r,attributes:a,default:t}}))}(r);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function h(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:r}=e;const t=(0,l.W6)(),o=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,c.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(t.location.search);n.set(o,e),t.replace({...t.location,search:n.toString()})}),[o,t])]}function p(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,o=b(e),[l,c]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:o}))),[u,d]=f({queryString:r,groupId:t}),[p,v]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,o]=(0,i.Dv)(r);return[t,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:t}),m=(()=>{const e=u??p;return h({value:e,tabValues:o})?e:null})();(0,s.A)((()=>{m&&c(m)}),[m]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),v(e)}),[d,v,o]),tabValues:o}}var v=r(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(74848);function y(e){let{className:n,block:r,selectedValue:a,selectValue:l,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),i=e=>{const n=e.currentTarget,r=c.indexOf(n),t=s[r].value;t!==a&&(u(n),l(t))},d=e=>{let n=null;switch(e.key){case"Enter":i(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;n=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;n=c[r]??c[c.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":r},n),children:s.map((e=>{let{value:n,label:r,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>c.push(e),onKeyDown:d,onClick:i,...o,className:(0,t.A)("tabs__item",m.tabItem,o?.className,{"tabs__item--active":a===n}),children:r??n},n)}))})}function x(e){let{lazy:n,children:r,selectedValue:o}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function C(e){const n=p(e);return(0,g.jsxs)("div",{className:(0,t.A)("tabs-container",m.tabList),children:[(0,g.jsx)(y,{...n,...e}),(0,g.jsx)(x,{...n,...e})]})}function w(e){const n=(0,v.A)();return(0,g.jsx)(C,{...e,children:d(e.children)},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>s});var a=r(96540);const t={},o=a.createContext(t);function l(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);