"use strict";(self.webpackChunkalgorithm_essentials=self.webpackChunkalgorithm_essentials||[]).push([[1360],{95208:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"dfs/n-queens","title":"N-Queens","description":"\u63cf\u8ff0","source":"@site/docs/dfs/n-queens.md","sourceDirName":"dfs","slug":"/dfs/n-queens","permalink":"/dfs/n-queens","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"N-Queens"},"sidebar":"docs","previous":{"title":"Unique Paths II","permalink":"/dfs/unique-paths-ii"},"next":{"title":"N-Queens II","permalink":"/dfs/n-queens-ii"}}');var i=r(74848),s=r(28453),a=r(11470),o=r(19365);const l={title:"N-Queens"},u=void 0,c={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u5206\u6790",id:"\u5206\u6790",level:3},{value:"\u4ee3\u7801 1",id:"\u4ee3\u7801-1",level:3},{value:"\u4ee3\u7801 2",id:"\u4ee3\u7801-2",level:3},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",level:3}];function f(n){const e={a:"a",code:"code",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h3,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,i.jsxs)(e.p,{children:["The ",(0,i.jsx)(e.strong,{children:"n-queens puzzle"})," is the problem of placing n queens on an ",(0,i.jsx)(e.code,{children:"n \xd7 n"})," chessboard such that no two queens attack each other."]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Eight Queens",src:r(69360).A+"",width:"256",height:"259"})}),"\n",(0,i.jsxs)(e.p,{children:["Given an integer ",(0,i.jsx)(e.code,{children:"n"}),", return all distinct solutions to the n-queens puzzle."]}),"\n",(0,i.jsxs)(e.p,{children:["Each solution contains a distinct board configuration of the n-queens' placement, where ",(0,i.jsx)(e.code,{children:"'Q'"})," and ",(0,i.jsx)(e.code,{children:"'.'"})," both indicate a queen and an empty space respectively."]}),"\n",(0,i.jsx)(e.p,{children:"For example,\nThere exist two distinct solutions to the 4-queens puzzle:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:'[\n [".Q..",  // Solution 1\n  "...Q",\n  "Q...",\n  "..Q."],\n\n ["..Q.",  // Solution 2\n  "Q...",\n  "...Q",\n  ".Q.."]\n]\n'})}),"\n",(0,i.jsx)(e.h3,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,i.jsx)(e.p,{children:"\u7ecf\u5178\u7684\u6df1\u641c\u9898\u3002"}),"\n",(0,i.jsxs)(e.p,{children:["\u8bbe\u7f6e\u4e00\u4e2a\u6570\u7ec4 ",(0,i.jsx)(e.code,{children:"vector<int> C(n, 0)"}),", ",(0,i.jsx)(e.code,{children:"C[i]"})," \u8868\u793a\u7b2c i \u884c\u7687\u540e\u6240\u5728\u7684\u5217\u7f16\u53f7\uff0c\u5373\u5728\u4f4d\u7f6e ",(0,i.jsx)(e.code,{children:"(i, C[i])"}),"\u4e0a\u653e\u4e86\u4e00\u4e2a\u7687\u540e\uff0c\u8fd9\u6837\u7528\u4e00\u4e2a\u4e00\u7ef4\u6570\u7ec4\uff0c\u5c31\u80fd\u8bb0\u5f55\u6574\u4e2a\u68cb\u76d8\u3002"]}),"\n",(0,i.jsx)(e.h3,{id:"\u4ee3\u7801-1",children:"\u4ee3\u7801 1"}),"\n","\n",(0,i.jsxs)(a.A,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,i.jsx)(o.A,{value:"java",children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"// N-Queens\n// \u6df1\u641c+\u526a\u679d\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n!*n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\npublic class Solution {\n    public List<List<String>> solveNQueens(int n) {\n        List<List<String>> result = new ArrayList<>();\n        int[] C = new int[n]; // C[i]\u8868\u793a\u7b2ci\u884c\u7687\u540e\u6240\u5728\u7684\u5217\u7f16\u53f7\n        dfs(C, 0, result);\n        return result;\n    }\n    private static void dfs(int[] C, int row, List<List<String>> result) {\n        final int N = C.length;\n        if (row == N) { // \u7ec8\u6b62\u6761\u4ef6\uff0c\u4e5f\u662f\u6536\u655b\u6761\u4ef6\uff0c\u610f\u5473\u7740\u627e\u5230\u4e86\u4e00\u4e2a\u53ef\u884c\u89e3\n            List<String> solution = new ArrayList<>();\n            for (int i = 0; i < N; ++i) {\n                char[] charArray = new char[N];\n                Arrays.fill(charArray, '.');\n                for (int j = 0; j < N; ++j) {\n                    if (j == C[i]) charArray[j] = 'Q';\n                }\n                solution.add(new String(charArray));\n            }\n            result.add(solution);\n            return;\n        }\n\n        for (int j = 0; j < N; ++j) {  // \u6269\u5c55\u72b6\u6001\uff0c\u4e00\u5217\u4e00\u5217\u7684\u8bd5\n            final boolean ok = isValid(C, row, j);\n            if (!ok) continue;  // \u526a\u679d\uff0c\u5982\u679c\u975e\u6cd5\uff0c\u7ee7\u7eed\u5c1d\u8bd5\u4e0b\u4e00\u5217\n            // \u6267\u884c\u6269\u5c55\u52a8\u4f5c\n            C[row] = j;\n            dfs(C, row + 1, result);\n            // \u64a4\u9500\u52a8\u4f5c\n            // C[row] = -1;\n        }\n    }\n\n    /**\n     * \u80fd\u5426\u5728 (row, col) \u4f4d\u7f6e\u653e\u4e00\u4e2a\u7687\u540e.\n     *\n     * @param C \u68cb\u5c40\n     * @param row \u5f53\u524d\u6b63\u5728\u5904\u7406\u7684\u884c\uff0c\u524d\u9762\u7684\u884c\u90fd\u5df2\u7ecf\u653e\u4e86\u7687\u540e\u4e86\n     * @param col \u5f53\u524d\u5217\n     * @return \u80fd\u5426\u653e\u4e00\u4e2a\u7687\u540e\n     */\n    private static boolean isValid(int[] C, int row, int col) {\n        for (int i = 0; i < row; ++i) {\n            // \u5728\u540c\u4e00\u5217\n            if (C[i] == col) return false;\n            // \u5728\u540c\u4e00\u5bf9\u89d2\u7ebf\u4e0a\n            if (Math.abs(i - row) == Math.abs(C[i] - col)) return false;\n        }\n        return true;\n    }\n}\n"})})}),(0,i.jsx)(o.A,{value:"cpp",children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"// N-Queens\n// \u6df1\u641c+\u526a\u679d\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n!*n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\npublic:\n    vector<vector<string> > solveNQueens(int n) {\n        vector<vector<string> > result;\n        vector<int> C(n, -1);  // C[i]\u8868\u793a\u7b2ci\u884c\u7687\u540e\u6240\u5728\u7684\u5217\u7f16\u53f7\n        dfs(C, result, 0);\n        return result;\n    }\nprivate:\n    void dfs(vector<int> &C, vector<vector<string> > &result, int row) {\n        const int N = C.size();\n        if (row == N) { // \u7ec8\u6b62\u6761\u4ef6\uff0c\u4e5f\u662f\u6536\u655b\u6761\u4ef6\uff0c\u610f\u5473\u7740\u627e\u5230\u4e86\u4e00\u4e2a\u53ef\u884c\u89e3\n            vector<string> solution;\n            for (int i = 0; i < N; ++i) {\n                string s(N, '.');\n                for (int j = 0; j < N; ++j) {\n                    if (j == C[i]) s[j] = 'Q';\n                }\n                solution.push_back(s);\n            }\n            result.push_back(solution);\n            return;\n        }\n\n        for (int j = 0; j < N; ++j) {  // \u6269\u5c55\u72b6\u6001\uff0c\u4e00\u5217\u4e00\u5217\u7684\u8bd5\n            const bool ok = isValid(C, row, j);\n            if (!ok) continue;  // \u526a\u679d\uff0c\u5982\u679c\u975e\u6cd5\uff0c\u7ee7\u7eed\u5c1d\u8bd5\u4e0b\u4e00\u5217\n            // \u6267\u884c\u6269\u5c55\u52a8\u4f5c\n            C[row] = j;\n            dfs(C, result, row + 1);\n            // \u64a4\u9500\u52a8\u4f5c\n            // C[row] = -1;\n        }\n    }\n\n    /**\n     * \u80fd\u5426\u5728 (row, col) \u4f4d\u7f6e\u653e\u4e00\u4e2a\u7687\u540e.\n     *\n     * @param C \u68cb\u5c40\n     * @param row \u5f53\u524d\u6b63\u5728\u5904\u7406\u7684\u884c\uff0c\u524d\u9762\u7684\u884c\u90fd\u5df2\u7ecf\u653e\u4e86\u7687\u540e\u4e86\n     * @param col \u5f53\u524d\u5217\n     * @return \u80fd\u5426\u653e\u4e00\u4e2a\u7687\u540e\n     */\n    bool isValid(const vector<int> &C, int row, int col) {\n        for (int i = 0; i < row; ++i) {\n            // \u5728\u540c\u4e00\u5217\n            if (C[i] == col) return false;\n            // \u5728\u540c\u4e00\u5bf9\u89d2\u7ebf\u4e0a\n            if (abs(i - row) == abs(C[i] - col)) return false;\n        }\n        return true;\n    }\n};\n"})})}),(0,i.jsx)(o.A,{value:"python",children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"# N-Queens\n# \u6df1\u641c+\u526a\u679d\n# \u65f6\u95f4\u590d\u6742\u5ea6O(n!*n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\ndef solveNQueens(n: int) -> list[list[str]]:\n    result = []\n    C = [0] * n  # C[i]\u8868\u793a\u7b2ci\u884c\u7687\u540e\u6240\u5728\u7684\u5217\u7f16\u53f7\n    dfs(C, 0, result)\n    return result\n\ndef dfs(C: list[int], row: int, result: list[list[str]]) -> None:\n    N = len(C)\n    if row == N:  # \u7ec8\u6b62\u6761\u4ef6\uff0c\u4e5f\u662f\u6536\u655b\u6761\u4ef6\uff0c\u610f\u5473\u7740\u627e\u5230\u4e86\u4e00\u4e2a\u53ef\u884c\u89e3\n        solution = []\n        for i in range(N):\n            char_array = ['.'] * N\n            for j in range(N):\n                if j == C[i]:\n                    char_array[j] = 'Q'\n            solution.append(''.join(char_array))\n        result.append(solution)\n        return\n\n    for j in range(N):  # \u6269\u5c55\u72b6\u6001\uff0c\u4e00\u5217\u4e00\u5217\u7684\u8bd5\n        ok = isValid(C, row, j)\n        if not ok:\n            continue  # \u526a\u679d\uff0c\u5982\u679c\u975e\u6cd5\uff0c\u7ee7\u7eed\u5c1d\u8bd5\u4e0b\u4e00\u5217\n        # \u6267\u884c\u6269\u5c55\u52a8\u4f5c\n        C[row] = j\n        dfs(C, row + 1, result)\n        # \u64a4\u9500\u52a8\u4f5c\n        # C[row] = -1\n\ndef isValid(C: list[int], row: int, col: int) -> bool:\n    \"\"\"\n    \u80fd\u5426\u5728 (row, col) \u4f4d\u7f6e\u653e\u4e00\u4e2a\u7687\u540e.\n    Args:\n        C: \u68cb\u5c40\n        row: \u5f53\u524d\u6b63\u5728\u5904\u7406\u7684\u884c\uff0c\u524d\u9762\u7684\u884c\u90fd\u5df2\u7ecf\u653e\u4e86\u7687\u540e\u4e86\n        col: \u5f53\u524d\u5217\n    Returns:\n        \u80fd\u5426\u653e\u4e00\u4e2a\u7687\u540e\n    \"\"\"\n    for i in range(row):\n        # \u5728\u540c\u4e00\u5217\n        if C[i] == col:\n            return False\n        # \u5728\u540c\u4e00\u5bf9\u89d2\u7ebf\u4e0a\n        if abs(i - row) == abs(C[i] - col):\n            return False\n    return True\n"})})})]}),"\n",(0,i.jsx)(e.h3,{id:"\u4ee3\u7801-2",children:"\u4ee3\u7801 2"}),"\n",(0,i.jsxs)(a.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],children:[(0,i.jsx)(o.A,{value:"java",children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"// N-Queens\n// \u6df1\u641c+\u526a\u679d\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n!)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\npublic class Solution {\n    public List<List<String>> solveNQueens(int n) {\n        this.columns = new boolean[n];\n        this.main_diag = new boolean[2 * n - 1];\n        this.anti_diag = new boolean[2 * n - 1];\n\n        List<List<String>> result = new ArrayList<>();\n        int[] C = new int[n];\n        Arrays.fill(C, -1); // C[i]\u8868\u793a\u7b2ci\u884c\u7687\u540e\u6240\u5728\u7684\u5217\u7f16\u53f7\n        dfs(C, 0, result);\n        return result;\n    }\n\n\n    private void dfs(int[] C, int row, List<List<String>> result) {\n        final int N = C.length;\n        if (row == N) { // \u7ec8\u6b62\u6761\u4ef6\uff0c\u4e5f\u662f\u6536\u655b\u6761\u4ef6\uff0c\u610f\u5473\u7740\u627e\u5230\u4e86\u4e00\u4e2a\u53ef\u884c\u89e3\n            List<String> solution = new ArrayList<>();\n            for (int i = 0; i < N; ++i) {\n                char[] charArray = new char[N];\n                Arrays.fill(charArray, '.');\n                for (int j = 0; j < N; ++j) {\n                    if (j == C[i]) charArray[j] = 'Q';\n                }\n                solution.add(new String(charArray));\n            }\n            result.add(solution);\n            return;\n        }\n\n        for (int j = 0; j < N; ++j) {  // \u6269\u5c55\u72b6\u6001\uff0c\u4e00\u5217\u4e00\u5217\u7684\u8bd5\n            final boolean ok = !columns[j] && !main_diag[row - j + N - 1]  &&\n                    !anti_diag[row + j];\n            if (!ok) continue;  // \u526a\u679d\uff0c\u5982\u679c\u975e\u6cd5\uff0c\u7ee7\u7eed\u5c1d\u8bd5\u4e0b\u4e00\u5217\n            // \u6267\u884c\u6269\u5c55\u52a8\u4f5c\n            C[row] = j;\n            columns[j] = main_diag[row - j + N - 1] = anti_diag[row + j] = true;\n            dfs(C, row + 1, result);\n            // \u64a4\u9500\u52a8\u4f5c\n            // C[row] = -1;\n            columns[j] = main_diag[row - j + N - 1] = anti_diag[row + j] = false;\n        }\n    }\n    // \u8fd9\u4e09\u4e2a\u53d8\u91cf\u7528\u4e8e\u526a\u679d\n    private boolean[] columns;  // \u8868\u793a\u5df2\u7ecf\u653e\u7f6e\u7684\u7687\u540e\u5360\u636e\u4e86\u54ea\u4e9b\u5217\n    private boolean[] main_diag;  // \u5360\u636e\u4e86\u54ea\u4e9b\u4e3b\u5bf9\u89d2\u7ebf\n    private boolean[] anti_diag;  // \u5360\u636e\u4e86\u54ea\u4e9b\u526f\u5bf9\u89d2\u7ebf\n}\n"})})}),(0,i.jsx)(o.A,{value:"cpp",children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"// N-Queens\n// \u6df1\u641c+\u526a\u679d\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n!)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\npublic:\n    vector<vector<string> > solveNQueens(int n) {\n        this->columns = vector<bool>(n, false);\n        this->main_diag = vector<bool>(2 * n - 1, false);\n        this->anti_diag = vector<bool>(2 * n - 1, false);\n\n        vector<vector<string> > result;\n        vector<int> C(n, -1);  // C[i]\u8868\u793a\u7b2ci\u884c\u7687\u540e\u6240\u5728\u7684\u5217\u7f16\u53f7\n        dfs(C, result, 0);\n        return result;\n    }\nprivate:\n    // \u8fd9\u4e09\u4e2a\u53d8\u91cf\u7528\u4e8e\u526a\u679d\n    vector<bool> columns;  // \u8868\u793a\u5df2\u7ecf\u653e\u7f6e\u7684\u7687\u540e\u5360\u636e\u4e86\u54ea\u4e9b\u5217\n    vector<bool> main_diag;  // \u5360\u636e\u4e86\u54ea\u4e9b\u4e3b\u5bf9\u89d2\u7ebf\n    vector<bool> anti_diag;  // \u5360\u636e\u4e86\u54ea\u4e9b\u526f\u5bf9\u89d2\u7ebf\n\n    void dfs(vector<int> &C, vector<vector<string> > &result, int row) {\n        const int N = C.size();\n        if (row == N) { // \u7ec8\u6b62\u6761\u4ef6\uff0c\u4e5f\u662f\u6536\u655b\u6761\u4ef6\uff0c\u610f\u5473\u7740\u627e\u5230\u4e86\u4e00\u4e2a\u53ef\u884c\u89e3\n            vector<string> solution;\n            for (int i = 0; i < N; ++i) {\n                string s(N, '.');\n                for (int j = 0; j < N; ++j) {\n                    if (j == C[i]) s[j] = 'Q';\n                }\n                solution.push_back(s);\n            }\n            result.push_back(solution);\n            return;\n        }\n\n        for (int j = 0; j < N; ++j) {  // \u6269\u5c55\u72b6\u6001\uff0c\u4e00\u5217\u4e00\u5217\u7684\u8bd5\n            const bool ok = !columns[j] && !main_diag[row - j + N - 1]  &&\n                    !anti_diag[row + j];\n            if (!ok) continue;  // \u526a\u679d\uff0c\u5982\u679c\u975e\u6cd5\uff0c\u7ee7\u7eed\u5c1d\u8bd5\u4e0b\u4e00\u5217\n            // \u6267\u884c\u6269\u5c55\u52a8\u4f5c\n            C[row] = j;\n            columns[j] = main_diag[row - j + N - 1] = anti_diag[row + j] = true;\n            dfs(C, result, row + 1);\n            // \u64a4\u9500\u52a8\u4f5c\n            // C[row] = -1;\n            columns[j] = main_diag[row - j + N - 1] = anti_diag[row + j] = false;\n        }\n    }\n};\n"})})}),(0,i.jsx)(o.A,{value:"python",children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"# N-Queens\n# \u6df1\u641c+\u526a\u679d\n# \u65f6\u95f4\u590d\u6742\u5ea6O(n!)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution:\n    def solveNQueens(self, n: int) -> list[list[str]]:\n        self.columns = [False] * n\n        self.main_diag = [False] * (2 * n - 1)\n        self.anti_diag = [False] * (2 * n - 1)\n\n        result = []\n        C = [-1] * n  # C[i]\u8868\u793a\u7b2ci\u884c\u7687\u540e\u6240\u5728\u7684\u5217\u7f16\u53f7\n        self.dfs(C, 0, result)\n        return result\n\n    def dfs(self, C: list[int], row: int, result: list[list[str]]) -> None:\n        N = len(C)\n        if row == N:  # \u7ec8\u6b62\u6761\u4ef6\uff0c\u4e5f\u662f\u6536\u655b\u6761\u4ef6\uff0c\u610f\u5473\u7740\u627e\u5230\u4e86\u4e00\u4e2a\u53ef\u884c\u89e3\n            solution = []\n            for i in range(N):\n                char_array = ['.'] * N\n                for j in range(N):\n                    if j == C[i]:\n                        char_array[j] = 'Q'\n                solution.append(''.join(char_array))\n            result.append(solution)\n            return\n\n        for j in range(N):  # \u6269\u5c55\u72b6\u6001\uff0c\u4e00\u5217\u4e00\u5217\u7684\u8bd5\n            ok = not self.columns[j] and not self.main_diag[row - j + N - 1] and \\\n                 not self.anti_diag[row + j]\n            if not ok:\n                continue  # \u526a\u679d\uff0c\u5982\u679c\u975e\u6cd5\uff0c\u7ee7\u7eed\u5c1d\u8bd5\u4e0b\u4e00\u5217\n            # \u6267\u884c\u6269\u5c55\u52a8\u4f5c\n            C[row] = j\n            self.columns[j] = self.main_diag[row - j + N - 1] = self.anti_diag[row + j] = True\n            self.dfs(C, row + 1, result)\n            # \u64a4\u9500\u52a8\u4f5c\n            # C[row] = -1\n            self.columns[j] = self.main_diag[row - j + N - 1] = self.anti_diag[row + j] = False\n"})})})]}),"\n",(0,i.jsx)(e.h3,{id:"\u76f8\u5173\u9898\u76ee",children:"\u76f8\u5173\u9898\u76ee"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"/dfs/n-queens-ii",children:"N-Queens II"})}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(f,{...n})}):f(n)}},19365:(n,e,r)=>{r.d(e,{A:()=>a});r(96540);var t=r(34164);const i={tabItem:"tabItem_Ymn6"};var s=r(74848);function a(n){let{children:e,hidden:r,className:a}=n;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(i.tabItem,a),hidden:r,children:e})}},11470:(n,e,r)=>{r.d(e,{A:()=>N});var t=r(96540),i=r(34164),s=r(23104),a=r(56347),o=r(205),l=r(57485),u=r(31682),c=r(70679);function d(n){return t.Children.toArray(n).filter((n=>"\n"!==n)).map((n=>{if(!n||(0,t.isValidElement)(n)&&function(n){const{props:e}=n;return!!e&&"object"==typeof e&&"value"in e}(n))return n;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof n.type?n.type:n.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function f(n){const{values:e,children:r}=n;return(0,t.useMemo)((()=>{const n=e??function(n){return d(n).map((n=>{let{props:{value:e,label:r,attributes:t,default:i}}=n;return{value:e,label:r,attributes:t,default:i}}))}(r);return function(n){const e=(0,u.XI)(n,((n,e)=>n.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((n=>n.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(n),n}),[e,r])}function h(n){let{value:e,tabValues:r}=n;return r.some((n=>n.value===e))}function p(n){let{queryString:e=!1,groupId:r}=n;const i=(0,a.W6)(),s=function(n){let{queryString:e=!1,groupId:r}=n;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:e,groupId:r});return[(0,l.aZ)(s),(0,t.useCallback)((n=>{if(!s)return;const e=new URLSearchParams(i.location.search);e.set(s,n),i.replace({...i.location,search:e.toString()})}),[s,i])]}function j(n){const{defaultValue:e,queryString:r=!1,groupId:i}=n,s=f(n),[a,l]=(0,t.useState)((()=>function(n){let{defaultValue:e,tabValues:r}=n;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!h({value:e,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${r.map((n=>n.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const t=r.find((n=>n.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:e,tabValues:s}))),[u,d]=p({queryString:r,groupId:i}),[j,v]=function(n){let{groupId:e}=n;const r=function(n){return n?`docusaurus.tab.${n}`:null}(e),[i,s]=(0,c.Dv)(r);return[i,(0,t.useCallback)((n=>{r&&s.set(n)}),[r,s])]}({groupId:i}),g=(()=>{const n=u??j;return h({value:n,tabValues:s})?n:null})();(0,o.A)((()=>{g&&l(g)}),[g]);return{selectedValue:a,selectValue:(0,t.useCallback)((n=>{if(!h({value:n,tabValues:s}))throw new Error(`Can't select invalid tab value=${n}`);l(n),d(n),v(n)}),[d,v,s]),tabValues:s}}var v=r(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(74848);function m(n){let{className:e,block:r,selectedValue:t,selectValue:a,tabValues:o}=n;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=n=>{const e=n.currentTarget,r=l.indexOf(e),i=o[r].value;i!==t&&(u(e),a(i))},d=n=>{let e=null;switch(n.key){case"Enter":c(n);break;case"ArrowRight":{const r=l.indexOf(n.currentTarget)+1;e=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(n.currentTarget)-1;e=l[r]??l[l.length-1];break}}e?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":r},e),children:o.map((n=>{let{value:e,label:r,attributes:s}=n;return(0,b.jsx)("li",{role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,ref:n=>l.push(n),onKeyDown:d,onClick:c,...s,className:(0,i.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":t===e}),children:r??e},e)}))})}function w(n){let{lazy:e,children:r,selectedValue:s}=n;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(e){const n=a.find((n=>n.props.value===s));return n?(0,t.cloneElement)(n,{className:(0,i.A)("margin-top--md",n.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((n,e)=>(0,t.cloneElement)(n,{key:e,hidden:n.props.value!==s})))})}function C(n){const e=j(n);return(0,b.jsxs)("div",{className:(0,i.A)("tabs-container",g.tabList),children:[(0,b.jsx)(m,{...e,...n}),(0,b.jsx)(w,{...e,...n})]})}function N(n){const e=(0,v.A)();return(0,b.jsx)(C,{...n,children:d(n.children)},String(e))}},69360:(n,e,r)=>{r.d(e,{A:()=>t});const t=r.p+"assets/images/8-queens-b485b6083f2778f1ebbee5bf753c991a.png"},28453:(n,e,r)=>{r.d(e,{R:()=>a,x:()=>o});var t=r(96540);const i={},s=t.createContext(i);function a(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);