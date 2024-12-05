"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[3263],{17716:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"stack-and-queue/stack/implement-stack-using-queues","title":"Implement Stack using Queues","description":"\u63cf\u8ff0","source":"@site/docs/stack-and-queue/stack/implement-stack-using-queues.md","sourceDirName":"stack-and-queue/stack","slug":"/stack-and-queue/stack/implement-stack-using-queues","permalink":"/stack-and-queue/stack/implement-stack-using-queues","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Implement Stack using Queues"},"sidebar":"docs","previous":{"title":"Build Binary Expression Tree From Infix Expression","permalink":"/stack-and-queue/stack/build-binary-expression-tree-from-infix-expression"},"next":{"title":"Median of Data Stream","permalink":"/stack-and-queue/stack/median-of-data-stream"}}');var i=s(74848),l=s(28453);const o={title:"Implement Stack using Queues"},c=void 0,r={},a=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}];function u(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,i.jsx)(n.p,{children:"Implement the following operations of a stack using queues."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"push(x) -- Push element x onto stack."}),"\n",(0,i.jsx)(n.li,{children:"pop() -- Removes the element on top of the stack."}),"\n",(0,i.jsx)(n.li,{children:"top() -- Get the top element."}),"\n",(0,i.jsx)(n.li,{children:"empty() -- Return whether the stack is empty."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Notes"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"You must use only standard operations of a queue -- which means only push to back, peek/pop from front, size, and is empty operations are valid."}),"\n",(0,i.jsx)(n.li,{children:"Depending on your language, queue may not be supported natively. You may simulate a queue by using a list or deque (double-ended queue), as long as you use only standard operations of a queue."}),"\n",(0,i.jsx)(n.li,{children:"You may assume that all operations are valid (for example, no pop or top operations will be called on an empty stack)."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,i.jsxs)(n.p,{children:["\u53ef\u4ee5\u7528\u4e24\u4e2a\u961f\u5217\uff0c",(0,i.jsx)(n.code,{children:"q"}),"\u548c",(0,i.jsx)(n.code,{children:"tmp"}),"\uff0c",(0,i.jsx)(n.code,{children:"q"}),"\u5b58\u653e\u5143\u7d20\uff0c",(0,i.jsx)(n.code,{children:"tmp"}),"\u7528\u6765\u4f5c\u4e2d\u8f6c\u3002"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"push(x)"}),"\uff0c\u5148\u5c06",(0,i.jsx)(n.code,{children:"x"})," push \u5230",(0,i.jsx)(n.code,{children:"tmp"}),"\uff0c\u7136\u540e\u628a",(0,i.jsx)(n.code,{children:"q"}),"\u4e2d\u7684\u5143\u7d20\u5168\u90e8\u5f39\u51fa\u6765\uff0c\u5b58\u5165",(0,i.jsx)(n.code,{children:"tmp"}),"\uff0c\u6700\u540e\u5207\u6362",(0,i.jsx)(n.code,{children:"q"}),"\u548c",(0,i.jsx)(n.code,{children:"tmp"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"pop()"}),"\uff0c\u76f4\u63a5\u5c06",(0,i.jsx)(n.code,{children:"q"}),"\u7684\u961f\u9996\u5143\u7d20\u5f39\u51fa\u6765\u5373\u53ef"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u8be5\u7b97\u6cd5",(0,i.jsx)(n.code,{children:"push"}),"\u7684\u7b97\u6cd5\u590d\u6742\u5ea6\u662f",(0,i.jsx)(n.code,{children:"O(n)"}),", ",(0,i.jsx)(n.code,{children:"pop"}),"\u7684\u7b97\u6cd5\u590d\u6742\u5ea6",(0,i.jsx)(n.code,{children:"O(1)"}),"\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u53e6\u4e2a\u4e00\u4e2a\u65b9\u6cd5\u662f\uff0c\u8ba9",(0,i.jsx)(n.code,{children:"pop"}),"\u662f",(0,i.jsx)(n.code,{children:"O(n)"}),", ",(0,i.jsx)(n.code,{children:"push"}),"\u662f",(0,i.jsx)(n.code,{children:"O(1)"}),"\uff0c\u601d\u8def\u5f88\u7c7b\u4f3c\uff0c\u5c31\u4e0d\u8d58\u8ff0\u4e86\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"// Implement Stack using Queues\nclass MyStack {\n    // Push element x onto stack.\n    // Time Complexity O(n)\n    public void push(int x) {\n        tmp.offer(x);\n        while (!q.isEmpty()) {\n            final int e = q.poll();\n            tmp.offer(e);\n        }\n        // swap q and tmp\n        Queue<Integer> temp = tmp;\n        tmp = q;\n        q = temp;\n    }\n\n    // Removes the element on top of the stack.\n    // Time Complexity O(1)\n    public void pop() {\n        q.poll();\n    }\n\n    // Get the top element.\n    public int top() {\n        return q.peek();\n    }\n\n    // Return whether the stack is empty.\n    public boolean empty() {\n        return q.isEmpty();\n    }\n\n    private Queue<Integer> q = new LinkedList<>();\n    private Queue<Integer> tmp = new LinkedList<>();\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u76f8\u5173\u9898\u76ee",children:"\u76f8\u5173\u9898\u76ee"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/stack-and-queue/queue/implement-queue-using-stacks",children:"Implement Queue using Stacks"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>c});var t=s(96540);const i={},l=t.createContext(i);function o(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);