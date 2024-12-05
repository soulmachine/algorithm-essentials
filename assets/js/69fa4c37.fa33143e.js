"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[602],{70606:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"stack-and-queue/stack/build-binary-expression-tree-from-infix-expression","title":"Build Binary Expression Tree From Infix Expression","description":"\u63cf\u8ff0","source":"@site/docs/stack-and-queue/stack/build-binary-expression-tree-from-infix-expression.md","sourceDirName":"stack-and-queue/stack","slug":"/stack-and-queue/stack/build-binary-expression-tree-from-infix-expression","permalink":"/stack-and-queue/stack/build-binary-expression-tree-from-infix-expression","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Build Binary Expression Tree From Infix Expression"},"sidebar":"docs","previous":{"title":"Basic Calculator III","permalink":"/stack-and-queue/stack/basic-calculator-iii"},"next":{"title":"Implement Stack using Queues","permalink":"/stack-and-queue/stack/implement-stack-using-queues"}}');var a=t(74848),s=t(28453),i=t(11470),o=t(19365);const l={title:"Build Binary Expression Tree From Infix Expression"},u=void 0,c={},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}];function d(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,a.jsx)(n.p,{children:"TODO"}),"\n",(0,a.jsx)(n.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,a.jsxs)(n.p,{children:["\u8fd9\u9898\u4e0e",(0,a.jsx)(n.a,{href:"/stack-and-queue/stack/basic-calculator-iii",children:"Basic Calculator III"}),"\u5f88\u7c7b\u4f3c\uff0c\u552f\u4e00\u7684\u4e0d\u540c\u662f\u8f93\u51fa\u7ed3\u679c\u4e0a\uff0c\u672c\u9898\u662f\u8f93\u51fa\u4e00\u68f5\u6811\uff0c\u540e\u8005\u53ea\u9700\u8981\u8f93\u51fa\u4e00\u4e2a\u8ba1\u7b97\u7ed3\u679c\u3002\u6240\u4ee5\u672c\u9898\u7684\u4ee3\u7801\u4e5f\u5f88\u7c7b\u4f3c\uff0c\u8bbe\u7f6e\u4e24\u4e2a\u6808\uff0c\u4e00\u4e2a\u6570\u5b57\u6808\uff0c\u4e00\u4e2a\u64cd\u4f5c\u7b26\u6808\uff0c\u4e0d\u8fc7\u6570\u5b57\u6808\u91cc\u5b58\u653e\u7684\u662f\u4e8c\u53c9\u6811\u8282\u70b9\u3002"]}),"\n",(0,a.jsx)(n.h3,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n","\n",(0,a.jsxs)(i.A,{defaultValue:"cpp",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,a.jsx)(o.A,{value:"java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"// Basic Calculator III\npublic class Solution {\n    private static Map < Character, Integer > priority = new HashMap < > () {\n        {\n            put('(', 1);\n            put('+', 2);\n            put('-', 2);\n            put('*', 3);\n            put('/', 3);\n        }\n    };\n\n    public Node expTree(String s) {\n        final int N = s.length();\n        Stack < Node > nums = new Stack < > ();\n        Stack < Character > ops = new Stack < > ();\n        for (int i = 0; i < N; i++) {\n            char c = s.charAt(i);\n            if (Character.isDigit(c)) {\n                nums.push(new Node(c));\n            } else if (c == '(') {\n                ops.push(c);\n            } else if (c == ')') {\n                while (ops.peek() != '(') {\n                    combine(ops, nums);\n                }\n                ops.pop(); // pop '('\n            } else if (c == '+' || c == '-' || c == '*' || c == '/') {\n                while (!ops.isEmpty() && priority.get(ops.peek()) >= priority.get(c)) {\n                    combine(ops, nums);\n                }\n                ops.push(c);\n            } else {\n                // c == ' ', do nothing\n            }\n        }\n        while (!ops.isEmpty()) {\n            combine(ops, nums);\n        }\n        return nums.pop();\n    }\n    \n    private void combine(Stack<Character> ops, Stack<Node> nums) {\n        Node root = new Node(ops.pop());\n        root.right = nums.pop();\n        root.left = nums.pop();\n    \n        nums.push(root);\n    }\n}\n"})})}),(0,a.jsx)(o.A,{value:"cpp",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"// Build Binary Expression Tree From Infix Expression\nclass Solution {\npublic:\n    Node* expTree(const string &s) {\n        const int N = s.length();\n        stack<Node*> nums;\n        stack<char> ops;\n        for (int i = 0; i < N; i++) {\n            const char c = s[i];\n            if (isdigit(c)) {\n                nums.push(new Node(c));\n            } else if (c == '(') {\n                ops.push(c);\n            } else if (c == ')') {\n                while (ops.top() != '(') {\n                    combine(ops, nums);\n                }\n                ops.pop(); // pop '('\n            } else if (c == '+' || c == '-' || c == '*' || c == '/') {\n                while (!ops.empty() && priority[ops.top()] >= priority[c]) {\n                    combine(ops, nums);\n                }\n                ops.push(c);\n            } else {\n                // c == ' ', do nothing\n            }\n        }\n        while (!ops.empty()) {\n            combine(ops, nums);\n        }\n        return nums.top();\n    }\nprivate:\n    void combine(stack<char> &ops, stack<Node*> &nums) {\n        Node *root = new Node(ops.top()); ops.pop();\n        root->right = nums.top(); nums.pop();\n        root->left = nums.top(); nums.pop();\n        nums.push(root);\n    }\nprivate:\n    unordered_map<char, int> priority = {{'(', 1}, {'+', 2}, {'-', 2},{'*', 3}, {'/', 3}};\n};\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"\u76f8\u5173\u9898\u76ee",children:"\u76f8\u5173\u9898\u76ee"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/stack-and-queue/stack/basic-calculator",children:"Basic Calculator"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/stack-and-queue/stack/basic-calculator-ii",children:"Basic Calculator II"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/stack-and-queue/stack/basic-calculator-iii",children:"Basic Calculator III"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var r=t(34164);const a={tabItem:"tabItem_Ymn6"};var s=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>I});var r=t(96540),a=t(34164),s=t(23104),i=t(56347),o=t(205),l=t(57485),u=t(31682),c=t(70679);function p(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return p(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=d(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[u,p]=m({queryString:t,groupId:a}),[f,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,c.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),v=(()=>{const e=u??f;return h({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{v&&l(v)}),[v]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),b(e)}),[p,b,s]),tabValues:s}}var b=t(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function k(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const n=e.currentTarget,t=l.indexOf(n),a=o[t].value;a!==r&&(u(n),i(a))},p=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:p,onClick:c,...s,className:(0,a.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:s}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=f(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,x.jsx)(k,{...n,...e}),(0,x.jsx)(g,{...n,...e})]})}function I(e){const n=(0,b.A)();return(0,x.jsx)(y,{...e,children:p(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var r=t(96540);const a={},s=r.createContext(a);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);