"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[45],{66834:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>b,frontMatter:()=>s,metadata:()=>i,toc:()=>u});const i=JSON.parse('{"id":"search/cutting-ribbons","title":"Cutting Ribbons","description":"","source":"@site/docs/search/cutting-ribbons.md","sourceDirName":"search","slug":"/search/cutting-ribbons","permalink":"/search/cutting-ribbons","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Cutting Ribbons"}}');var o=e(74848),r=e(28453);const s={title:"Cutting Ribbons"},c=void 0,a={},u=[];function l(n){const t={code:"code",pre:"pre",...(0,r.R)(),...n.components};return(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",children:"class Solution {\n    private boolean isCutPossible(int[] ribbons, int length, int k) {\n        int count = 0;\n        for (int ribbon: ribbons) {\n            count += (ribbon / length);\n        } // I could've written an early 'return' here to save some computation, but for me, the more \"if\", the more likely to bug\n        return count >= k;\n    }\n\n    public int maxLength(int[] ribbons, int k) {\n        int l = 1;\n        int r = (int) 1e5 + 1;\n        while (l < r) {\n            int mid = l + ((r - l) >> 1);\n            \n            if (!isCutPossible(ribbons, mid, k)) {\n                r = mid;\n            } else {\n                l = mid + 1;\n            }\n        }\n        return l - 1;\n    }\n\n}\n"})})}function b(n={}){const{wrapper:t}={...(0,r.R)(),...n.components};return t?(0,o.jsx)(t,{...n,children:(0,o.jsx)(l,{...n})}):l(n)}},28453:(n,t,e)=>{e.d(t,{R:()=>s,x:()=>c});var i=e(96540);const o={},r=i.createContext(o);function s(n){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function c(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:s(n.components),i.createElement(r.Provider,{value:t},n.children)}}}]);