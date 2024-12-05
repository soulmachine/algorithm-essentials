"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[4990],{65727:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>d,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"linked-list/palindrome-linked-list","title":"Palindrome Linked List","description":"\u63cf\u8ff0","source":"@site/docs/linked-list/palindrome-linked-list.md","sourceDirName":"linked-list","slug":"/linked-list/palindrome-linked-list","permalink":"/en/linked-list/palindrome-linked-list","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Palindrome Linked List"},"sidebar":"docs","previous":{"title":"All O(1) Data Structure","permalink":"/en/linked-list/all-o1-data-structure"},"next":{"title":"Flatten a Multilevel Doubly Linked List","permalink":"/en/linked-list/flatten-a-multilevel-doubly-linked-list"}}');var l=t(74848),s=t(28453);const d={title:"Palindrome Linked List"},r=void 0,o={},a=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}];function c(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,l.jsx)(n.p,{children:"Given a singly linked list, determine if it is a palindrome."}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Follow up"}),":"]}),"\n",(0,l.jsxs)(n.p,{children:["Could you do it in ",(0,l.jsx)(n.code,{children:"O(n)"})," time and ",(0,l.jsx)(n.code,{children:"O(1)"})," space?"]}),"\n",(0,l.jsx)(n.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,l.jsxs)(n.p,{children:["\u9996\u5148\u8981\u5bfb\u627e\u4e2d\u70b9\uff0c\u539f\u7406\u662f\u4f7f\u7528\u5feb\u6162\u6307\u9488\uff0c\u6bcf\u6b21\u5feb\u6307\u9488\u8d70\u4e24\u6b65\uff0c\u6162\u6307\u9488\u8d70\u4e00\u6b65\u3002\u540c\u65f6\u8fd8\u8981\u7528\u6808\uff0c\u6bcf\u6b21\u6162\u6307\u9488\u8d70\u4e00\u6b65\uff0c\u90fd\u628a\u503c\u5b58\u5165\u6808\u4e2d\u3002\u7b49\u5feb\u6307\u9488\u8d70\u5b8c\u65f6\uff0c\u94fe\u8868\u7684\u524d\u534a\u6bb5\u90fd\u5b58\u5165\u6808\u4e2d\u4e86\u3002\u6700\u540e\u6162\u6307\u9488\u7ee7\u7eed\u5f80\u524d\u8d70\uff0c\u6bcf\u6b21\u4e0e\u6808\u9876\u5143\u7d20\u8fdb\u884c\u6bd4\u8f83\u3002\u7a7a\u95f4\u590d\u6742\u5ea6",(0,l.jsx)(n.code,{children:"O(n)"}),"\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u5982\u4f55\u505a\u5230\u7528",(0,l.jsx)(n.code,{children:"O(1)"}),"\u7a7a\u95f4\u5462\uff1f\u53ef\u4ee5\u5148\u627e\u5230\u4e2d\u70b9\uff0c\u628a\u540e\u534a\u6bb5 reverse \u4e00\u4e0b\uff0c\u7136\u540e\u6bd4\u8f83\u4e24\u4e2a\u5c0f\u94fe\u8868\u3002"]}),"\n",(0,l.jsx)(n.h3,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:"// Palindrome Linked List\n// Time Complexity: O(n), Space Complexity: O(1)\npublic class Solution {\n    public boolean isPalindrome(ListNode head) {\n        if (head == null) return true;\n\n        final ListNode middle = findMiddle(head);\n        middle.next = reverse(middle.next);\n\n        ListNode p1 = head;\n        ListNode p2 = middle.next;\n        while (p1 != null && p2 != null && p1.val == p2.val) {\n            p1 = p1.next;\n            p2 = p2.next;\n        }\n        return p2 == null;\n\n    }\n    private static ListNode findMiddle(ListNode head) {\n        if (head == null) return null;\n\n        ListNode slow = head;\n        ListNode fast = head.next;\n\n        while (fast != null && fast.next != null) {\n            slow = slow.next;\n            fast = fast.next.next;\n        }\n        return slow;\n    }\n\n    private static ListNode reverse(ListNode head) {\n        ListNode prev = null;\n\n        while (head != null) {\n            ListNode tmp = head.next;\n            head.next = prev;\n            prev = head;\n            head = tmp;\n        }\n\n        return prev;\n    }\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>r});var i=t(96540);const l={},s=i.createContext(l);function d(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);