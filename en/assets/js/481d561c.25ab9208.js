"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[4537],{71460:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>u,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>p});const a=JSON.parse('{"id":"stack-and-queue/stack/basic-calculator-iii","title":"Basic Calculator III","description":"\u63cf\u8ff0","source":"@site/docs/stack-and-queue/stack/basic-calculator-iii.md","sourceDirName":"stack-and-queue/stack","slug":"/stack-and-queue/stack/basic-calculator-iii","permalink":"/en/stack-and-queue/stack/basic-calculator-iii","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Basic Calculator III"},"sidebar":"docs","previous":{"title":"Basic Calculator II","permalink":"/en/stack-and-queue/stack/basic-calculator-ii"},"next":{"title":"Build Binary Expression Tree From Infix Expression","permalink":"/en/stack-and-queue/stack/build-binary-expression-tree-from-infix-expression"}}');var s=t(74848),r=t(28453),i=t(11470),l=t(19365);const c={title:"Basic Calculator III"},u=void 0,o={},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}];function d(n){const e={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,s.jsx)(e.p,{children:"TODO"}),"\n",(0,s.jsx)(e.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,s.jsx)(e.p,{children:"\u8fd9\u9053\u9898\u662f\u524d\u97622\u9053\u9898\u7684\u7efc\u5408\u4f53\uff0c\u65e2\u6709\u4e58\u9664\u53c8\u6709\u62ec\u53f7\u3002\u6700\u7ecf\u5178\u7684\u505a\u6cd5\u662f\u7528\u4e24\u4e2a\u6808\uff0c\u4e00\u4e2a\u6570\u5b57\u6808\uff0c\u4e00\u4e2a\u64cd\u4f5c\u7b26\u6808\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n","\n",(0,s.jsxs)(i.A,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,s.jsx)(l.A,{value:"java",children:(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:"// Basic Calculator III\npublic class Solution {\n    private static Map < Character, Integer > priority = new HashMap < > () {\n        {\n            put('(', 1);\n            put('+', 2);\n            put('-', 2);\n            put('*', 3);\n            put('/', 3);\n        }\n    };\n\n    public int calculate(String s) {\n        final int N = s.length();\n        Stack < Integer > nums = new Stack < > ();\n        Stack < Character > ops = new Stack < > ();\n        for (int i = 0; i < N; i++) {\n            char c = s.charAt(i);\n            if (Character.isDigit(c)) {\n                int num = 0;\n                while (i < N && Character.isDigit(s.charAt(i))) {\n                    num = num * 10 + (s.charAt(i++) - '0');\n                }\n                nums.push(num);\n                i--;\n            } else if (c == '(') {\n                ops.push(c);\n            } else if (c == ')') {\n                while (ops.peek() != '(') {\n                    calc(nums, ops);\n                }\n                ops.pop(); // pop '('\n            } else if (c == '+' || c == '-' || c == '*' || c == '/') {\n                while (!ops.isEmpty() && priority.get(ops.peek()) >= priority.get(c)) {\n                    calc(nums, ops);\n                }\n                ops.push(c);\n            } else {\n                // c == ' ', do nothing\n            }\n        }\n        while (!ops.isEmpty()) {\n            calc(nums, ops);\n        }\n        return nums.pop();\n    }\n\n    private static void calc(Stack < Integer > nums, Stack < Character > ops) {\n        int b = nums.pop(), a = nums.pop();\n        int result = 0;\n        switch (ops.pop()) {\n            case '+':\n                result = a + b;\n                break;\n            case '-':\n                result = a - b;\n                break;\n            case '*':\n                result = a * b;\n                break;\n            case '/':\n                result = a / b;\n                break;\n        }\n        nums.push(result);\n    }\n}\n"})})}),(0,s.jsx)(l.A,{value:"cpp",children:(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"// Basic Calculator III\nclass Solution {\npublic:\n    int calculate(const string &s) {\n        const int N = s.length();\n        stack<int> nums;\n        stack<char> ops;\n        for (int i = 0; i < N; i++) {\n            const char c = s[i];\n            if (isdigit(c)) {\n                int num = 0;\n                while (i < N && isdigit(s[i])) {\n                    num = num * 10 + (s[i++] - '0');\n                }\n                nums.push(num);\n                i--;\n            } else if (c == '(') {\n                ops.push(c);\n            } else if (c == ')') {\n                while (ops.top() != '(') {\n                    calc(nums, ops);\n                }\n                ops.pop(); // pop '('\n            } else if (c == '+' || c == '-' || c == '*' || c == '/') {\n                while (!ops.empty() && priority[ops.top()] >= priority[c]) {\n                    calc(nums, ops);\n                }\n                ops.push(c);\n            } else {\n                // c == ' ', do nothing\n            }\n        }\n        while (!ops.empty()) {\n            calc(nums, ops);\n        }\n        return nums.top();\n    }\nprivate:\n    void calc(stack<int> &nums, stack<char> &ops) {\n        int b = nums.top(); nums.pop();\n        int a = nums.top(); nums.pop();\n        int result = 0;\n        int op = ops.top(); ops.pop();\n        switch (op) {\n            case '+':\n                result = a + b;\n                break;\n            case '-':\n                result = a - b;\n                break;\n            case '*':\n                result = a * b;\n                break;\n            case '/':\n                result = a / b;\n                break;\n        }\n        nums.push(result);\n    }\nprivate:\n    unordered_map<char, int> priority = {{'(', 1}, {'+', 2}, {'-', 2},{'*', 3}, {'/', 3}};\n};\n"})})}),(0,s.jsx)(l.A,{value:"python",children:(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"# Basic Calculator III\nclass Solution:\n    priority = {\n        '(': 1,\n        '+': 2,\n        '-': 2,\n        '*': 3,\n        '/': 3\n    }\n\n    def calculate(self, s: str) -> int:\n        N = len(s)\n        nums = []\n        ops = []\n        i = 0\n        while i < N:\n            c = s[i]\n            if c.isdigit():\n                num = 0\n                while i < N and s[i].isdigit():\n                    num = num * 10 + int(s[i])\n                    i += 1\n                nums.append(num)\n                i -= 1\n            elif c == '(':\n                ops.append(c)\n            elif c == ')':\n                while ops[-1] != '(':\n                    self.calc(nums, ops)\n                ops.pop()  # pop '('\n            elif c in '+-*/':\n                while ops and self.priority.get(ops[-1]) >= self.priority.get(c):\n                    self.calc(nums, ops)\n                ops.append(c)\n            else:\n                # c == ' ', do nothing\n                pass\n            i += 1\n\n        while ops:\n            self.calc(nums, ops)\n        return nums.pop()\n\n    @staticmethod\n    def calc(nums, ops):\n        b = nums.pop()\n        a = nums.pop()\n        op = ops.pop()\n        if op == '+':\n            result = a + b\n        elif op == '-':\n            result = a - b\n        elif op == '*':\n            result = a * b\n        else:  # op == '/'\n            result = a // b\n        nums.append(result)\n"})})})]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"/en/stack-and-queue/stack/basic-calculator",children:"Basic Calculator"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"/en/stack-and-queue/stack/basic-calculator-ii",children:"Basic Calculator II"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"/en/stack-and-queue/stack/build-binary-expression-tree-from-infix-expression",children:"Build Binary Expression Tree From Infix Expression"})}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},19365:(n,e,t)=>{t.d(e,{A:()=>i});t(96540);var a=t(34164);const s={tabItem:"tabItem_Ymn6"};var r=t(74848);function i(n){let{children:e,hidden:t,className:i}=n;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(s.tabItem,i),hidden:t,children:e})}},11470:(n,e,t)=>{t.d(e,{A:()=>I});var a=t(96540),s=t(34164),r=t(23104),i=t(56347),l=t(205),c=t(57485),u=t(31682),o=t(70679);function p(n){return a.Children.toArray(n).filter((n=>"\n"!==n)).map((n=>{if(!n||(0,a.isValidElement)(n)&&function(n){const{props:e}=n;return!!e&&"object"==typeof e&&"value"in e}(n))return n;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof n.type?n.type:n.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(n){const{values:e,children:t}=n;return(0,a.useMemo)((()=>{const n=e??function(n){return p(n).map((n=>{let{props:{value:e,label:t,attributes:a,default:s}}=n;return{value:e,label:t,attributes:a,default:s}}))}(t);return function(n){const e=(0,u.XI)(n,((n,e)=>n.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((n=>n.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(n),n}),[e,t])}function h(n){let{value:e,tabValues:t}=n;return t.some((n=>n.value===e))}function m(n){let{queryString:e=!1,groupId:t}=n;const s=(0,i.W6)(),r=function(n){let{queryString:e=!1,groupId:t}=n;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:e,groupId:t});return[(0,c.aZ)(r),(0,a.useCallback)((n=>{if(!r)return;const e=new URLSearchParams(s.location.search);e.set(r,n),s.replace({...s.location,search:e.toString()})}),[r,s])]}function f(n){const{defaultValue:e,queryString:t=!1,groupId:s}=n,r=d(n),[i,c]=(0,a.useState)((()=>function(n){let{defaultValue:e,tabValues:t}=n;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!h({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((n=>n.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=t.find((n=>n.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:e,tabValues:r}))),[u,p]=m({queryString:t,groupId:s}),[f,b]=function(n){let{groupId:e}=n;const t=function(n){return n?`docusaurus.tab.${n}`:null}(e),[s,r]=(0,o.Dv)(t);return[s,(0,a.useCallback)((n=>{t&&r.set(n)}),[t,r])]}({groupId:s}),v=(()=>{const n=u??f;return h({value:n,tabValues:r})?n:null})();(0,l.A)((()=>{v&&c(v)}),[v]);return{selectedValue:i,selectValue:(0,a.useCallback)((n=>{if(!h({value:n,tabValues:r}))throw new Error(`Can't select invalid tab value=${n}`);c(n),p(n),b(n)}),[p,b,r]),tabValues:r}}var b=t(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function k(n){let{className:e,block:t,selectedValue:a,selectValue:i,tabValues:l}=n;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.a_)(),o=n=>{const e=n.currentTarget,t=c.indexOf(e),s=l[t].value;s!==a&&(u(e),i(s))},p=n=>{let e=null;switch(n.key){case"Enter":o(n);break;case"ArrowRight":{const t=c.indexOf(n.currentTarget)+1;e=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(n.currentTarget)-1;e=c[t]??c[c.length-1];break}}e?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},e),children:l.map((n=>{let{value:e,label:t,attributes:r}=n;return(0,g.jsx)("li",{role:"tab",tabIndex:a===e?0:-1,"aria-selected":a===e,ref:n=>c.push(n),onKeyDown:p,onClick:o,...r,className:(0,s.A)("tabs__item",v.tabItem,r?.className,{"tabs__item--active":a===e}),children:t??e},e)}))})}function x(n){let{lazy:e,children:t,selectedValue:r}=n;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const n=i.find((n=>n.props.value===r));return n?(0,a.cloneElement)(n,{className:(0,s.A)("margin-top--md",n.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((n,e)=>(0,a.cloneElement)(n,{key:e,hidden:n.props.value!==r})))})}function y(n){const e=f(n);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",v.tabList),children:[(0,g.jsx)(k,{...e,...n}),(0,g.jsx)(x,{...e,...n})]})}function I(n){const e=(0,b.A)();return(0,g.jsx)(y,{...n,children:p(n.children)},String(e))}},28453:(n,e,t)=>{t.d(e,{R:()=>i,x:()=>l});var a=t(96540);const s={},r=a.createContext(s);function i(n){const e=a.useContext(r);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),a.createElement(r.Provider,{value:e},n.children)}}}]);