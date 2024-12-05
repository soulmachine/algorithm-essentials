"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[6033],{75473:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"array/game-of-life","title":"Game of Life","description":"\u63cf\u8ff0","source":"@site/docs/array/game-of-life.md","sourceDirName":"array","slug":"/array/game-of-life","permalink":"/array/game-of-life","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Game of Life"},"sidebar":"docs","previous":{"title":"Product of Array Except Self","permalink":"/array/product-of-array-except-self"},"next":{"title":"Increasing Triplet Subsequence","permalink":"/array/increasing-triplet-subsequence"}}');var r=i(74848),l=i(28453);const a={title:"Game of Life"},o=void 0,s={},c=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}];function d(e){const n={a:"a",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,r.jsxs)(n.p,{children:["According to the ",(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life",children:"Wikipedia's article"}),': "The ',(0,r.jsx)(n.strong,{children:"Game of Life"}),", also known simply as ",(0,r.jsx)(n.strong,{children:"Life"}),', is a cellular automaton devised by the British mathematician John Horton Conway in 1970."']}),"\n",(0,r.jsx)(n.p,{children:"Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Any live cell with fewer than two live neighbors dies, as if caused by under-population."}),"\n",(0,r.jsx)(n.li,{children:"Any live cell with two or three live neighbors lives on to the next generation."}),"\n",(0,r.jsx)(n.li,{children:"Any live cell with more than three live neighbors dies, as if by over-population.."}),"\n",(0,r.jsx)(n.li,{children:"Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Write a function to compute the next state (after one update) of the board given its current state."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Follow up"}),":"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Could you solve it in-place? Remember that the board needs to be updated at the same time: You cannot update some cells first and then use their updated values to update other cells."}),"\n",(0,r.jsx)(n.li,{children:"In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches the border of the array. How would you address these problems?"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,r.jsx)(n.p,{children:"\u6700\u7b80\u5355\u7684\u529e\u6cd5\u662f\u65b0\u5efa\u4e00\u4e2a\u77e9\u9635\u4fdd\u5b58\u4e0b\u4e00\u8f6e\u5c40\u9762\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u4e0d\u8fc7\u672c\u63d0\u8981\u6c42 inplace, \u96be\u5ea6\u5c31\u77ac\u95f4\u589e\u5927\u4e86\u3002\u56e0\u4e3a\u6211\u4eec\u4fee\u6539\u4e00\u4e2a\u4f4d\u7f6e\u7684\u503c\u540e\uff0c\u5b83\u7684\u65e7\u503c\u5c31\u4e22\u5931\u4e86\uff0c\u800c\u5b83\u5468\u56f4\u8fd8\u6709\u90bb\u5c45\u4f9d\u8d56\u5b83\u7684\u65e7\u503c\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u56e0\u4e3a\u9898\u76ee\u7ed9\u51fa\u7684\u662f\u4e00\u4e2a int \u77e9\u9635\uff0c\u5927\u6709\u7a7a\u95f4\u53ef\u4ee5\u5229\u7528\u3002\u6211\u4eec\u53ef\u4ee5\u6362\u4e00\u79cd\u65b9\u5f0f\u8fdb\u884c\u7f16\u7801\uff0c\u5047\u8bbe\u5bf9\u4e8e\u6bcf\u4e2a\u70b9\uff0c\u503c\u7684\u542b\u4e49\u4e3a\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u72b6\u6001 0 \u548c 1\uff0c\u8868\u793a\u72b6\u6001\u4e0d\u53d8"}),"\n",(0,r.jsx)(n.li,{children:"\u72b6\u6001 -1\uff1a\u6d3b\u7ec6\u80de\u8f6c\u4e3a\u6b7b\u7ec6\u80de"}),"\n",(0,r.jsx)(n.li,{children:"\u72b6\u6001 2\uff1a\u6b7b\u7ec6\u80de\u8f6c\u4e3a\u6d3b\u7ec6\u80de"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u5f97\u5230\u8fd9\u6837\u4e00\u4e2a\u77e9\u9635\u540e\uff0c\u6700\u540e\u5c06\u6240\u6709\u5927\u4e8e0\u7684\u4f4d\u7f6e\u53d8\u6210\u6d3b\u7ec6\u80de1\uff0c\u5c0f\u4e8e0\u7684\u4f4d\u7f6e\u53d8\u6210\u6b7b\u7ec6\u80de0\uff0c\u5c31\u662f\u6240\u6c42\u7684\u4e0b\u4e00\u8f6e\u5c40\u9762\u4e86\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"// Game of Life\n// Time complexity: O(mxn), Space complexity: O(1)\npublic class Solution {\n    public void gameOfLife(int[][] board) {\n        final int m = board.length;\n        final int n = board[0].length;\n        // clock wise, start from upper-left corner\n        final int[] dx = new int[] {-1, -1, -1, 0, 1, 1, 1, 0};\n        final int[] dy = new int[] {-1, 0, 1, 1, 1, 0, -1, -1};\n\n        // encode\n        for (int i = 0; i < m; ++i) {\n            for (int j = 0; j < n; ++j) {\n                int live = 0; // number of live neighbors\n                for (int k = 0; k < 8; ++k) {\n                    final int x = i + dx[k];\n                    final int y = j + dy[k];\n                    if (x > -1 && x < m && y > -1 && y < n && Math.abs(board[x][y]) == 1) {\n                        ++live;\n                    }\n                }\n                // Rule 1 or Rule 3\n                if ((board[i][j] == 1) && (live < 2 || live > 3)) {\n                    // -1 signifies the cell is now dead but originally was live.\n                    board[i][j] = -1;\n                }\n                // Rule 4\n                if (board[i][j] == 0 && live == 3) {\n                    // 2 signifies the cell is now live but was originally dead.\n                    board[i][j] = 2;\n                }\n            }\n        }\n\n        // Get the final representation for the newly updated board.\n        for (int i = 0; i < m; i++) {\n            for (int j = 0; j < n; j++) {\n                if (board[i][j] > 0) {\n                    board[i][j] = 1;\n                } else {\n                    board[i][j] = 0;\n                }\n            }\n        }\n    }\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var t=i(96540);const r={},l=t.createContext(r);function a(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);