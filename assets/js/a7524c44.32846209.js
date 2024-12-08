"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[4737],{38463:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>b,frontMatter:()=>c,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"dp/scramble-string","title":"Scramble String","description":"\u63cf\u8ff0","source":"@site/docs/dp/scramble-string.md","sourceDirName":"dp","slug":"/dp/scramble-string","permalink":"/dp/scramble-string","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Scramble String"},"sidebar":"docs","previous":{"title":"Interleaving String","permalink":"/dp/interleaving-string"},"next":{"title":"Minimum Path Sum","permalink":"/dp/minimum-path-sum"}}');var t=r(74848),s=r(28453),a=r(11470),l=r(19365);const c={title:"Scramble String"},o=void 0,u={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u9012\u5f52",id:"\u9012\u5f52",level:3},{value:"\u52a8\u89c4",id:"\u52a8\u89c4",level:3},{value:"\u9012\u5f52+\u526a\u679d",id:"\u9012\u5f52\u526a\u679d",level:3},{value:"\u5907\u5fd8\u5f55\u6cd5",id:"\u5907\u5fd8\u5f55\u6cd5",level:3}];function g(n){const e={code:"code",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,t.jsxs)(e.p,{children:["Given a string ",(0,t.jsx)(e.code,{children:"s1"}),", we may represent it as a binary tree by partitioning it to two non-empty substrings recursively."]}),"\n",(0,t.jsxs)(e.p,{children:["Below is one possible representation of ",(0,t.jsx)(e.code,{children:'s1 = "great"'}),":"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"    great\n   /    \\\n  gr    eat\n / \\    /  \\\ng   r  e   at\n           / \\\n          a   t\n"})}),"\n",(0,t.jsx)(e.p,{children:"To scramble the string, we may choose any non-leaf node and swap its two children."}),"\n",(0,t.jsxs)(e.p,{children:["For example, if we choose the node ",(0,t.jsx)(e.code,{children:'"gr"'})," and swap its two children, it produces a scrambled string ",(0,t.jsx)(e.code,{children:'"rgeat"'}),"."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"    rgeat\n   /    \\\n  rg    eat\n / \\    /  \\\nr   g  e   at\n           / \\\n          a   t\n"})}),"\n",(0,t.jsxs)(e.p,{children:["We say that ",(0,t.jsx)(e.code,{children:'"rgeat"'})," is a scrambled string of ",(0,t.jsx)(e.code,{children:'"great"'}),"."]}),"\n",(0,t.jsxs)(e.p,{children:["Similarly, if we continue to swap the children of nodes ",(0,t.jsx)(e.code,{children:'"eat"'})," and ",(0,t.jsx)(e.code,{children:'"at"'}),", it produces a scrambled string ",(0,t.jsx)(e.code,{children:'"rgtae"'}),"."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"    rgtae\n   /    \\\n  rg    tae\n / \\    /  \\\nr   g  ta  e\n       / \\\n      t   a\n"})}),"\n",(0,t.jsxs)(e.p,{children:["We say that ",(0,t.jsx)(e.code,{children:'"rgtae"'})," is a scrambled string of ",(0,t.jsx)(e.code,{children:'"great"'}),"."]}),"\n",(0,t.jsxs)(e.p,{children:["Given two strings ",(0,t.jsx)(e.code,{children:"s1"})," and ",(0,t.jsx)(e.code,{children:"s2"})," of the same length, determine if ",(0,t.jsx)(e.code,{children:"s2"})," is a scrambled string of ",(0,t.jsx)(e.code,{children:"s1"}),"."]}),"\n",(0,t.jsx)(e.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,t.jsx)(e.p,{children:"\u9996\u5148\u60f3\u5230\u7684\u662f\u9012\u5f52\uff08\u5373\u6df1\u641c\uff09\uff0c\u5bf9\u4e24\u4e2a string \u8fdb\u884c\u5206\u5272\uff0c\u7136\u540e\u6bd4\u8f83\u56db\u5bf9\u5b57\u7b26\u4e32\u3002\u4ee3\u7801\u867d\u7136\u7b80\u5355\uff0c\u4f46\u662f\u590d\u6742\u5ea6\u6bd4\u8f83\u9ad8\u3002\u6709\u4e24\u79cd\u52a0\u901f\u7b56\u7565\uff0c\u4e00\u79cd\u662f\u526a\u679d\uff0c\u63d0\u524d\u8fd4\u56de\uff1b\u4e00\u79cd\u662f\u52a0\u7f13\u5b58\uff0c\u7f13\u5b58\u4e2d\u95f4\u7ed3\u679c\uff0c\u5373 memorization\uff08\u7ffb\u8bd1\u4e3a\u8bb0\u5fc6\u5316\u641c\u7d22\uff09\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u526a\u679d\u53ef\u4ee5\u4e94\u82b1\u516b\u95e8\uff0c\u8981\u5145\u5206\u89c2\u5bdf\uff0c\u5145\u5206\u5229\u7528\u4fe1\u606f\uff0c\u627e\u5230\u80fd\u8ba9\u8282\u70b9\u63d0\u524d\u8fd4\u56de\u7684\u6761\u4ef6\u3002\u4f8b\u5982\uff0c\u5224\u65ad\u4e24\u4e2a\u5b57\u7b26\u4e32\u662f\u5426\u4e92\u4e3a scamble\uff0c\u81f3\u5c11\u8981\u6c42\u6bcf\u4e2a\u5b57\u7b26\u5728\u4e24\u4e2a\u5b57\u7b26\u4e32\u4e2d\u51fa\u73b0\u7684\u6b21\u6570\u8981\u76f8\u7b49\uff0c\u5982\u679c\u4e0d\u76f8\u7b49\u5219\u8fd4\u56de false\u3002"}),"\n",(0,t.jsxs)(e.p,{children:["\u52a0\u7f13\u5b58\uff0c\u53ef\u4ee5\u7528\u6570\u7ec4\u6216 HashMap\u3002\u672c\u9898\u7ef4\u6570\u8f83\u9ad8\uff0c\u7528 HashMap\uff0c",(0,t.jsx)(e.code,{children:"map"}),"\u548c",(0,t.jsx)(e.code,{children:"unordered_map"}),"\u5747\u53ef\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:["\u65e2\u7136\u53ef\u4ee5\u7528\u8bb0\u5fc6\u5316\u641c\u7d22\uff0c\u8fd9\u9898\u4e5f\u4e00\u5b9a\u53ef\u4ee5\u7528\u52a8\u89c4\u3002\u8bbe\u72b6\u6001\u4e3a",(0,t.jsx)(e.code,{children:"f[n][i][j]"}),"\uff0c\u8868\u793a\u957f\u5ea6\u4e3a",(0,t.jsx)(e.code,{children:"n"}),"\uff0c\u8d77\u70b9\u4e3a",(0,t.jsx)(e.code,{children:"s1[i]"}),"\u548c\u8d77\u70b9\u4e3a",(0,t.jsx)(e.code,{children:"s2[j]"}),"\u4e24\u4e2a\u5b57\u7b26\u4e32\u662f\u5426\u4e92\u4e3a scramble\uff0c\u5219\u72b6\u6001\u8f6c\u79fb\u65b9\u7a0b\u4e3a"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"f[n][i][j]} =  (f[k][i][j] && f[n-k][i+k][j+k])\n            || (f[k][i][j+n-k] && f[n-k][i+k][j])\n"})}),"\n",(0,t.jsx)(e.h3,{id:"\u9012\u5f52",children:"\u9012\u5f52"}),"\n","\n",(0,t.jsxs)(a.A,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,t.jsx)(l.A,{value:"java",children:(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:"// Scramble String\n// \u9012\u5f52\uff0c\u4f1a\u8d85\u65f6\uff0c\u4ec5\u7528\u6765\u5e2e\u52a9\u7406\u89e3\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n^6)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public boolean isScramble(String s1, String s2) {\n        return isScramble(s1, 0, s1.length(), s2, 0);\n    }\n    private static boolean isScramble(String s1, int begin1, int end1,\n                                      String s2, int begin2) {\n        final int length = end1 - begin1;\n        final int end2 = begin2 + length;\n\n        if (length == 1) return s1.charAt(begin1) == s2.charAt(begin2);\n\n        for (int i = 1; i < length; ++i)\n            if ((isScramble(s1, begin1, begin1 + i, s2, begin2)\n                    && isScramble(s1, begin1 + i, end1, s2, begin2 + i))\n                    || (isScramble(s1, begin1, begin1 + i, s2, end2 - i)\n                    && isScramble(s1, begin1 + i, end1, s2, begin2)))\n                return true;\n\n        return false;\n    }\n}\n"})})}),(0,t.jsx)(l.A,{value:"cpp",children:(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"// Scramble String\n// \u9012\u5f52\uff0c\u4f1a\u8d85\u65f6\uff0c\u4ec5\u7528\u6765\u5e2e\u52a9\u7406\u89e3\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n^6)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    bool isScramble(const string& s1, const string& s2) {\n        return isScramble(s1.begin(), s1.end(), s2.begin());\n    }\nprivate:\n    typedef string::iterator Iterator;\n    bool isScramble(Iterator first1, Iterator last1, Iterator first2) {\n        auto length = distance(first1, last1);\n        auto last2 = next(first2, length);\n\n        if (length == 1) return *first1 == *first2;\n\n        for (int i = 1; i < length; ++i)\n            if ((isScramble(first1, first1 + i, first2)\n                 && isScramble(first1 + i, last1, first2 + i))\n                    || (isScramble(first1, first1 + i, last2 - i)\n                            && isScramble(first1 + i, last1, first2)))\n                return true;\n\n        return false;\n    }\n};\n"})})}),(0,t.jsx)(l.A,{value:"python",children:(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"# Scramble String\n# \u9012\u5f52\uff0c\u4f1a\u8d85\u65f6\uff0c\u4ec5\u7528\u6765\u5e2e\u52a9\u7406\u89e3\n# \u65f6\u95f4\u590d\u6742\u5ea6O(n^6)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution:\n    def isScramble(self, s1: str, s2: str) -> bool:\n        return self._isScramble(s1, 0, len(s1), s2, 0)\n\n    def _isScramble(self, s1: str, begin1: int, end1: int, s2: str, begin2: int) -> bool:\n        length = end1 - begin1\n        end2 = begin2 + length\n\n        if length == 1:\n            return s1[begin1] == s2[begin2]\n\n        for i in range(1, length):\n            if ((self._isScramble(s1, begin1, begin1 + i, s2, begin2)\n                    and self._isScramble(s1, begin1 + i, end1, s2, begin2 + i))\n                    or (self._isScramble(s1, begin1, begin1 + i, s2, end2 - i)\n                    and self._isScramble(s1, begin1 + i, end1, s2, begin2))):\n                return True\n\n        return False\n"})})})]}),"\n",(0,t.jsx)(e.h3,{id:"\u52a8\u89c4",children:"\u52a8\u89c4"}),"\n",(0,t.jsxs)(a.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,t.jsx)(l.A,{value:"java",children:(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:"// Scramble String\n// \u52a8\u89c4\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n^3)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n^3)\npublic class Solution {\n    public boolean isScramble(String s1, String s2) {\n        final int N = s1.length();\n        if (N != s2.length()) return false;\n\n        // f[n][i][j]\uff0c\u8868\u793a\u957f\u5ea6\u4e3an\uff0c\u8d77\u70b9\u4e3as1[i]\u548c\n        // \u8d77\u70b9\u4e3as2[j]\u4e24\u4e2a\u5b57\u7b26\u4e32\u662f\u5426\u4e92\u4e3ascramble\n        boolean[][][] f = new boolean[N+1][N][N];\n\n        for (int i = 0; i < N; i++)\n            for (int j = 0; j < N; j++)\n                f[1][i][j] = s1.charAt(i) == s2.charAt(j);\n\n        for (int n = 1; n <= N; ++n) {\n            for (int i = 0; i + n <= N; ++i) {\n                for (int j = 0; j + n <= N; ++j) {\n                    for (int k = 1; k < n; ++k) {\n                        if ((f[k][i][j] && f[n - k][i + k][j + k]) ||\n                                (f[k][i][j + n - k] && f[n - k][i + k][j])) {\n                            f[n][i][j] = true;\n                            break;\n                        }\n                    }\n                }\n            }\n        }\n        return f[N][0][0];\n    }\n}\n"})})}),(0,t.jsx)(l.A,{value:"cpp",children:(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"// Scramble String\n// \u52a8\u89c4\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n^3)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n^3)\nclass Solution {\npublic:\n    bool isScramble(const string& s1, const string& s2) {\n        const int N = s1.size();\n        if (N != s2.size()) return false;\n\n        // f[n][i][j]\uff0c\u8868\u793a\u957f\u5ea6\u4e3an\uff0c\u8d77\u70b9\u4e3as1[i]\u548c\n        // \u8d77\u70b9\u4e3as2[j]\u4e24\u4e2a\u5b57\u7b26\u4e32\u662f\u5426\u4e92\u4e3ascramble\n        bool f[N + 1][N][N];\n        fill_n(&f[0][0][0], (N + 1) * N * N, false);\n\n        for (int i = 0; i < N; i++)\n            for (int j = 0; j < N; j++)\n                f[1][i][j] = s1[i] == s2[j];\n\n        for (int n = 1; n <= N; ++n) {\n            for (int i = 0; i + n <= N; ++i) {\n                for (int j = 0; j + n <= N; ++j) {\n                    for (int k = 1; k < n; ++k) {\n                        if ((f[k][i][j] && f[n - k][i + k][j + k]) ||\n                                (f[k][i][j + n - k] && f[n - k][i + k][j])) {\n                            f[n][i][j] = true;\n                            break;\n                        }\n                    }\n                }\n            }\n        }\n        return f[N][0][0];\n    }\n};\n"})})}),(0,t.jsx)(l.A,{value:"python",children:(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"# Scramble String\n# \u52a8\u89c4\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n^3)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n^3)\nclass Solution:\n    def isScramble(self, s1: str, s2: str) -> bool:\n        N = len(s1)\n        if N != len(s2):\n            return False\n\n        # f[n][i][j]\uff0c\u8868\u793a\u957f\u5ea6\u4e3an\uff0c\u8d77\u70b9\u4e3as1[i]\u548c\n        # \u8d77\u70b9\u4e3as2[j]\u4e24\u4e2a\u5b57\u7b26\u4e32\u662f\u5426\u4e92\u4e3ascramble\n        f = [[[False] * N for _ in range(N)] for _ in range(N + 1)]\n\n        for i in range(N):\n            for j in range(N):\n                f[1][i][j] = s1[i] == s2[j]\n\n        for n in range(1, N + 1):\n            for i in range(N - n + 1):\n                for j in range(N - n + 1):\n                    for k in range(1, n):\n                        if ((f[k][i][j] and f[n - k][i + k][j + k]) or\n                                (f[k][i][j + n - k] and f[n - k][i + k][j])):\n                            f[n][i][j] = True\n                            break\n\n        return f[N][0][0]\n"})})})]}),"\n",(0,t.jsx)(e.h3,{id:"\u9012\u5f52\u526a\u679d",children:"\u9012\u5f52+\u526a\u679d"}),"\n",(0,t.jsxs)(a.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,t.jsx)(l.A,{value:"java",children:(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:"// Scramble String\n// \u9012\u5f52+\u526a\u679d\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n^6)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public boolean isScramble(String s1, String s2) {\n        return isScramble(s1, 0, s1.length(), s2, 0);\n    }\n    private static boolean isScramble(String s1, int begin1, int end1,\n                                      String s2, int begin2) {\n        final int length = end1 - begin1;\n        final int end2 = begin2 + length;\n        if (length == 1) return s1.charAt(begin1) == s2.charAt(begin2);\n\n        // \u526a\u679d\uff0c\u63d0\u524d\u8fd4\u56de\n        int[] A = new int[26]; // \u6bcf\u4e2a\u5b57\u7b26\u7684\u8ba1\u6570\u5668\n        for(int i = 0; i < length; i++) A[s1.charAt(begin1+i)-'a']++;\n        for(int i = 0; i < length; i++) A[s2.charAt(begin2+i)-'a']--;\n        for(int i = 0; i < 26; i++) if (A[i] != 0) return false;\n\n        for (int i = 1; i < length; ++i)\n            if ((isScramble(s1, begin1, begin1 + i, s2, begin2)\n                    && isScramble(s1, begin1 + i, end1, s2, begin2 + i))\n                    || (isScramble(s1, begin1, begin1 + i, s2, end2 - i)\n                    && isScramble(s1, begin1 + i, end1, s2, begin2)))\n                return true;\n\n        return false;\n    }\n}\n"})})}),(0,t.jsx)(l.A,{value:"cpp",children:(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"// Scramble String\n// \u9012\u5f52+\u526a\u679d\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n^6)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    bool isScramble(const string& s1, const string& s2) {\n        return isScramble(s1.begin(), s1.end(), s2.begin());\n    }\nprivate:\n    typedef string::const_iterator Iterator;\n    bool isScramble(Iterator first1, Iterator last1, Iterator first2) {\n        auto length = distance(first1, last1);\n        auto last2 = next(first2, length);\n        if (length == 1) return *first1 == *first2;\n\n        // \u526a\u679d\uff0c\u63d0\u524d\u8fd4\u56de\n        int A[26]; // \u6bcf\u4e2a\u5b57\u7b26\u7684\u8ba1\u6570\u5668\n        fill(A, A + 26, 0);\n        for(int i = 0; i < length; i++) A[*(first1+i)-'a']++;\n        for(int i = 0; i < length; i++) A[*(first2+i)-'a']--;\n        for(int i = 0; i < 26; i++) if (A[i] != 0) return false;\n\n        for (int i = 1; i < length; ++i)\n            if ((isScramble(first1, first1 + i, first2)\n                 && isScramble(first1 + i, last1, first2 + i))\n                    || (isScramble(first1, first1 + i, last2 - i)\n                            && isScramble(first1 + i, last1, first2)))\n                return true;\n\n        return false;\n    }\n};\n"})})}),(0,t.jsx)(l.A,{value:"python",children:(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"# Scramble String\n# \u9012\u5f52+\u526a\u679d\n# \u65f6\u95f4\u590d\u6742\u5ea6O(n^6)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution:\n    def isScramble(self, s1: str, s2: str) -> bool:\n        return self.is_scramble_helper(s1, 0, len(s1), s2, 0)\n\n    def is_scramble_helper(self, s1, begin1, end1, s2, begin2):\n        length = end1 - begin1\n        end2 = begin2 + length\n        if length == 1:\n            return s1[begin1] == s2[begin2]\n\n        # \u526a\u679d\uff0c\u63d0\u524d\u8fd4\u56de\n        A = [0] * 26  # \u6bcf\u4e2a\u5b57\u7b26\u7684\u8ba1\u6570\u5668\n        for i in range(length):\n            A[ord(s1[begin1 + i]) - ord('a')] += 1\n        for i in range(length):\n            A[ord(s2[begin2 + i]) - ord('a')] -= 1\n        for i in range(26):\n            if A[i] != 0:\n                return False\n\n        for i in range(1, length):\n            if ((self.is_scramble_helper(s1, begin1, begin1 + i, s2, begin2)\n                 and self.is_scramble_helper(s1, begin1 + i, end1, s2, begin2 + i))\n                or (self.is_scramble_helper(s1, begin1, begin1 + i, s2, end2 - i)\n                    and self.is_scramble_helper(s1, begin1 + i, end1, s2, begin2))):\n                return True\n\n        return False\n"})})})]}),"\n",(0,t.jsx)(e.h3,{id:"\u5907\u5fd8\u5f55\u6cd5",children:"\u5907\u5fd8\u5f55\u6cd5"}),"\n",(0,t.jsxs)(a.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,t.jsx)(l.A,{value:"java",children:(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:"// Scramble String\n// \u9012\u5f52+map\u505acache\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n^3)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n^3), TLE\npublic class Solution {\n    public boolean isScramble(String s1, String s2) {\n        cache.clear();\n        return isScramble(s1, 0, s1.length(), s2, 0);\n    }\n\n    final private HashMap<Triple, Boolean> cache = new HashMap<>();\n\n    private boolean isScramble(String s1, int begin1, int end1,\n                               String s2, int begin2) {\n        final int length = end1 - begin1;\n        final int end2 = begin2 + length;\n\n        if (length == 1) return s1.charAt(begin1) == s2.charAt(begin2);\n\n        for (int i = 1; i < length; ++i)\n            if ((getOrUpdate(s1, begin1, begin1 + i, s2, begin2)\n                    && getOrUpdate(s1, begin1 + i, end1, s2, begin2 + i))\n                    || (getOrUpdate(s1, begin1, begin1 + i, s2, end2 - i)\n                    && getOrUpdate(s1, begin1 + i, end1, s2, begin2)))\n                return true;\n\n        return false;\n    }\n\n    boolean getOrUpdate(String s1, int begin1, int end1,\n                     String s2, int begin2) {\n        Triple key = new Triple(begin1, end1, begin2);\n        if (!cache.containsKey(key)) {\n            boolean result = isScramble(s1, begin1, end1, s2, begin2);\n            cache.put(key, result);\n            return result;\n        } else {\n            return cache.get(key);\n        }\n    }\n    static class Triple {\n        private int i;\n        private int j;\n        private int k;\n\n        public Triple(int i, int j, int k) {\n            this.i = i;\n            this.j = j;\n            this.k = k;\n        }\n        @Override\n        public int hashCode() {\n            int hash = 0;\n            hash = i * 31 + j;\n            hash = hash * 31 * k;\n            return hash;\n        }\n        @Override\n        public boolean equals(Object other) {\n            if (this == other) return true;\n            if (this.hashCode() != other.hashCode()) return false;\n            if (!(other instanceof Triple)) return false;\n            Triple o = (Triple)other;\n            return this.i == o.i && this.j == o.j && this.k == o.k;\n        }\n    }\n}\n"})})}),(0,t.jsx)(l.A,{value:"cpp",children:(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"typedef string::const_iterator Iterator;\ntypedef tuple<Iterator, Iterator, Iterator> Key;\n// \u5b9a\u5236\u4e00\u4e2a\u54c8\u5e0c\u51fd\u6570\nnamespace std {\ntemplate<> struct hash<Key> {\n    size_t operator()(const Key & x) const {\n        Iterator first1, last1, first2;\n        tie(first1, last1, first2) = x;\n\n        int result = *first1;\n        result = result * 31 + *last1;\n        result = result * 31 + *first2;\n        result = result * 31 + *(next(first2, distance(first1, last1)-1));\n        return result;\n    }\n};\n}\n\n// Scramble String\n// \u9012\u5f52+unordered_map\u505acache\uff0c\u6bd4map\u5feb\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n^3)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n^3)\nclass Solution {\npublic:\n    unordered_map<Key, bool> cache;\n\n    bool isScramble(const string& s1, const string& s2) {\n        cache.clear();\n        return isScramble(s1.begin(), s1.end(), s2.begin());\n    }\n\n    bool isScramble(Iterator first1, Iterator last1, Iterator first2) {\n        auto length = distance(first1, last1);\n        auto last2 = next(first2, length);\n\n        if (length == 1)\n            return *first1 == *first2;\n\n        for (int i = 1; i < length; ++i)\n            if ((getOrUpdate(first1, first1 + i, first2)\n                    && getOrUpdate(first1 + i, last1, first2 + i))\n                    || (getOrUpdate(first1, first1 + i, last2 - i)\n                            && getOrUpdate(first1 + i, last1, first2)))\n                return true;\n\n        return false;\n    }\n\n    bool getOrUpdate(Iterator first1, Iterator last1, Iterator first2) {\n        auto key = make_tuple(first1, last1, first2);\n        auto pos = cache.find(key);\n\n        return (pos != cache.end()) ?\n                pos->second : (cache[key] = isScramble(first1, last1, first2));\n    }\n};\n"})})}),(0,t.jsx)(l.A,{value:"python",children:(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"# Scramble String\n# \u9012\u5f52+map\u505acache\n# \u65f6\u95f4\u590d\u6742\u5ea6O(n^3)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n^3), TLE\nclass Solution:\n    def __init__(self):\n        self.cache = {}\n\n    def isScramble(self, s1: str, s2: str) -> bool:\n        self.cache.clear()\n        return self._isScramble(s1, 0, len(s1), s2, 0)\n\n    def _isScramble(self, s1: str, begin1: int, end1: int, s2: str, begin2: int) -> bool:\n        length = end1 - begin1\n        end2 = begin2 + length\n\n        if length == 1:\n            return s1[begin1] == s2[begin2]\n\n        for i in range(1, length):\n            if ((self.getOrUpdate(s1, begin1, begin1 + i, s2, begin2)\n                    and self.getOrUpdate(s1, begin1 + i, end1, s2, begin2 + i))\n                    or (self.getOrUpdate(s1, begin1, begin1 + i, s2, end2 - i)\n                    and self.getOrUpdate(s1, begin1 + i, end1, s2, begin2))):\n                return True\n\n        return False\n\n    def getOrUpdate(self, s1: str, begin1: int, end1: int, s2: str, begin2: int) -> bool:\n        key = (begin1, end1, begin2)\n        if key not in self.cache:\n            result = self._isScramble(s1, begin1, end1, s2, begin2)\n            self.cache[key] = result\n            return result\n        else:\n            return self.cache[key]\n"})})})]})]})}function b(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(g,{...n})}):g(n)}},19365:(n,e,r)=>{r.d(e,{A:()=>a});r(96540);var i=r(34164);const t={tabItem:"tabItem_Ymn6"};var s=r(74848);function a(n){let{children:e,hidden:r,className:a}=n;return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.A)(t.tabItem,a),hidden:r,children:e})}},11470:(n,e,r)=>{r.d(e,{A:()=>k});var i=r(96540),t=r(34164),s=r(23104),a=r(56347),l=r(205),c=r(57485),o=r(31682),u=r(70679);function d(n){return i.Children.toArray(n).filter((n=>"\n"!==n)).map((n=>{if(!n||(0,i.isValidElement)(n)&&function(n){const{props:e}=n;return!!e&&"object"==typeof e&&"value"in e}(n))return n;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof n.type?n.type:n.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function g(n){const{values:e,children:r}=n;return(0,i.useMemo)((()=>{const n=e??function(n){return d(n).map((n=>{let{props:{value:e,label:r,attributes:i,default:t}}=n;return{value:e,label:r,attributes:i,default:t}}))}(r);return function(n){const e=(0,o.XI)(n,((n,e)=>n.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((n=>n.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(n),n}),[e,r])}function b(n){let{value:e,tabValues:r}=n;return r.some((n=>n.value===e))}function f(n){let{queryString:e=!1,groupId:r}=n;const t=(0,a.W6)(),s=function(n){let{queryString:e=!1,groupId:r}=n;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:e,groupId:r});return[(0,c.aZ)(s),(0,i.useCallback)((n=>{if(!s)return;const e=new URLSearchParams(t.location.search);e.set(s,n),t.replace({...t.location,search:e.toString()})}),[s,t])]}function h(n){const{defaultValue:e,queryString:r=!1,groupId:t}=n,s=g(n),[a,c]=(0,i.useState)((()=>function(n){let{defaultValue:e,tabValues:r}=n;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!b({value:e,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${r.map((n=>n.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const i=r.find((n=>n.default))??r[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:e,tabValues:s}))),[o,d]=f({queryString:r,groupId:t}),[h,p]=function(n){let{groupId:e}=n;const r=function(n){return n?`docusaurus.tab.${n}`:null}(e),[t,s]=(0,u.Dv)(r);return[t,(0,i.useCallback)((n=>{r&&s.set(n)}),[r,s])]}({groupId:t}),m=(()=>{const n=o??h;return b({value:n,tabValues:s})?n:null})();(0,l.A)((()=>{m&&c(m)}),[m]);return{selectedValue:a,selectValue:(0,i.useCallback)((n=>{if(!b({value:n,tabValues:s}))throw new Error(`Can't select invalid tab value=${n}`);c(n),d(n),p(n)}),[d,p,s]),tabValues:s}}var p=r(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=r(74848);function S(n){let{className:e,block:r,selectedValue:i,selectValue:a,tabValues:l}=n;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.a_)(),u=n=>{const e=n.currentTarget,r=c.indexOf(e),t=l[r].value;t!==i&&(o(e),a(t))},d=n=>{let e=null;switch(n.key){case"Enter":u(n);break;case"ArrowRight":{const r=c.indexOf(n.currentTarget)+1;e=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(n.currentTarget)-1;e=c[r]??c[c.length-1];break}}e?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":r},e),children:l.map((n=>{let{value:e,label:r,attributes:s}=n;return(0,j.jsx)("li",{role:"tab",tabIndex:i===e?0:-1,"aria-selected":i===e,ref:n=>c.push(n),onKeyDown:d,onClick:u,...s,className:(0,t.A)("tabs__item",m.tabItem,s?.className,{"tabs__item--active":i===e}),children:r??e},e)}))})}function v(n){let{lazy:e,children:r,selectedValue:s}=n;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(e){const n=a.find((n=>n.props.value===s));return n?(0,i.cloneElement)(n,{className:(0,t.A)("margin-top--md",n.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:a.map(((n,e)=>(0,i.cloneElement)(n,{key:e,hidden:n.props.value!==s})))})}function x(n){const e=h(n);return(0,j.jsxs)("div",{className:(0,t.A)("tabs-container",m.tabList),children:[(0,j.jsx)(S,{...e,...n}),(0,j.jsx)(v,{...e,...n})]})}function k(n){const e=(0,p.A)();return(0,j.jsx)(x,{...n,children:d(n.children)},String(e))}},28453:(n,e,r)=>{r.d(e,{R:()=>a,x:()=>l});var i=r(96540);const t={},s=i.createContext(t);function a(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:a(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);