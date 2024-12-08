---
title: N-Queens II
---

### 描述

Follow up for N-Queens problem.

Now, instead outputting board configurations, return the total number of distinct solutions.

### 分析

只需要输出解的个数，不需要输出所有解，代码要比上一题简化很多。设一个全局计数器，每找到一个解就增 1。

### 代码 1

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

<Tabs
defaultValue="python"
values={[
{ label: 'Python', value: 'python', },

{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// N-Queens II
// 深搜+剪枝
// 时间复杂度O(n!*n)，空间复杂度O(n)
public class Solution {
    public int totalNQueens(int n) {
        this.count = 0;

        int[] C = new int[n]; // C[i]表示第i行皇后所在的列编号
        dfs(C, 0);
        return this.count;
    }

    void dfs(int[] C, int row) {
        final int n = C.length;
        if (row == n) { // 终止条件，也是收敛条件，意味着找到了一个可行解
            ++this.count;
            return;
        }

        for (int j = 0; j < n; ++j) {  // 扩展状态，一列一列的试
            final boolean ok = isValid(C, row, j);
            if (!ok) continue;  // 剪枝：如果合法，继续递归
            // 执行扩展动作
            C[row] = j;
            dfs(C, row + 1);
            // 撤销动作
            // C[row] = -1;
        }
    }
    /**
     * 能否在 (row, col) 位置放一个皇后.
     *
     * @param C 棋局
     * @param row 当前正在处理的行，前面的行都已经放了皇后了
     * @param col 当前列
     * @return 能否放一个皇后
     */
    private static boolean isValid(int[] C, int row, int col) {
        for (int i = 0; i < row; ++i) {
            // 在同一列
            if (C[i] == col) return false;
            // 在同一对角线上
            if (Math.abs(i - row) == Math.abs(C[i] - col)) return false;
        }
        return true;
    }
    private int count; // 解的个数
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// N-Queens II
// 深搜+剪枝
// 时间复杂度O(n!*n)，空间复杂度O(n)
class Solution {
public:
    int totalNQueens(int n) {
        this->count = 0;

        vector<int> C(n, 0);  // C[i]表示第i行皇后所在的列编号
        dfs(C, 0);
        return this->count;
    }
private:
    int count; // 解的个数

    void dfs(vector<int> &C, int row) {
        const int N = C.size();
        if (row == N) { // 终止条件，也是收敛条件，意味着找到了一个可行解
            ++this->count;
            return;
        }

        for (int j = 0; j < N; ++j) {  // 扩展状态，一列一列的试
            const bool ok = isValid(C, row, j);
            if (!ok) continue;  // 剪枝：如果合法，继续递归
            // 执行扩展动作
            C[row] = j;
            dfs(C, row + 1);
            // 撤销动作
            // C[row] = -1;
        }
    }
    /**
     * 能否在 (row, col) 位置放一个皇后.
     *
     * @param C 棋局
     * @param row 当前正在处理的行，前面的行都已经放了皇后了
     * @param col 当前列
     * @return 能否放一个皇后
     */
    bool isValid(const vector<int> &C, int row, int col) {
        for (int i = 0; i < row; ++i) {
            // 在同一列
            if (C[i] == col) return false;
            // 在同一对角线上
            if (abs(i - row) == abs(C[i] - col)) return false;
        }
        return true;
    }
};
```

</TabItem>

<TabItem value="python">

```python
# N-Queens II
# 深搜+剪枝
# 时间复杂度O(n!*n)，空间复杂度O(n)
class Solution:
    def totalNQueens(self, n: int) -> int:
        self.count = 0

        C = [0] * n  # C[i]表示第i行皇后所在的列编号
        self.dfs(C, 0)
        return self.count

    def dfs(self, C: list, row: int) -> None:
        n = len(C)
        if row == n:  # 终止条件，也是收敛条件，意味着找到了一个可行解
            self.count += 1
            return

        for j in range(n):  # 扩展状态，一列一列的试
            ok = self.isValid(C, row, j)
            if not ok:
                continue  # 剪枝：如果合法，继续递归
            # 执行扩展动作
            C[row] = j
            self.dfs(C, row + 1)
            # 撤销动作
            # C[row] = -1

    @staticmethod
    def isValid(C: list, row: int, col: int) -> bool:
        """
        能否在 (row, col) 位置放一个皇后.
        :param C: 棋局
        :param row: 当前正在处理的行，前面的行都已经放了皇后了
        :param col: 当前列
        :return: 能否放一个皇后
        """
        for i in range(row):
            # 在同一列
            if C[i] == col:
                return False
            # 在同一对角线上
            if abs(i - row) == abs(C[i] - col):
                return False
        return True
```

</TabItem>
</Tabs>

### 代码 2

<Tabs
defaultValue="java"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// N-Queens II
// 深搜+剪枝
// 时间复杂度 O(n!)，空间复杂度 O(n)
public class Solution {
public int totalNQueens(int n) {
this.count = 0;
this.columns = new boolean[n];
this.main_diag = new boolean[2 * n - 1];
this.anti_diag = new boolean[2 * n - 1];

        int[] C = new int[n]; // C[i]表示第i行皇后所在的列编号
        dfs(C, 0);
        return this.count;
    }

    void dfs(int[] C, int row) {
        final int N = C.length;
        if (row == N) { // 终止条件，也是收敛条件，意味着找到了一个可行解
            ++this.count;
            return;
        }

        for (int j = 0; j < N; ++j) {  // 扩展状态，一列一列的试
            final boolean ok = !columns[j] &&
                    !main_diag[row - j + N - 1] &&
                    !anti_diag[row + j];
            if (!ok) continue;  // 剪枝：如果合法，继续递归
            // 执行扩展动作
            C[row] = j;
            columns[j] = main_diag[row - j + N - 1] =
                    anti_diag[row + j] = true;
            dfs(C, row + 1);
            // 撤销动作
            // C[row] = -1;
            columns[j] = main_diag[row - j + N - 1] =
                    anti_diag[row + j] = false;
        }
    }

    private int count; // 解的个数
    // 这三个变量用于剪枝
    private boolean[] columns;   // 表示已经放置的皇后占据了哪些列
    private boolean[] main_diag; // 占据了哪些主对角线
    private boolean[] anti_diag; // 占据了哪些副对角线

    public static void main(String[] args) {
        Solution s = new Solution();
        s.totalNQueens(1);
    }

}
```

</TabItem>
<TabItem value="cpp">

```cpp
// N-Queens II
// 深搜+剪枝
// 时间复杂度O(n!)，空间复杂度O(n)
class Solution {
public:
    int totalNQueens(int n) {
        this->count = 0;
        this->columns = vector<bool>(n, false);
        this->main_diag = vector<bool>(2 * n - 1, false);
        this->anti_diag = vector<bool>(2 * n - 1, false);

        vector<int> C(n, 0);  // C[i]表示第i行皇后所在的列编号
        dfs(C, 0);
        return this->count;
    }
private:
    int count; // 解的个数
    // 这三个变量用于剪枝
    vector<bool> columns;  // 表示已经放置的皇后占据了哪些列
    vector<bool> main_diag;  // 占据了哪些主对角线
    vector<bool> anti_diag;  // 占据了哪些副对角线

    void dfs(vector<int> &C, int row) {
        const int N = C.size();
        if (row == N) { // 终止条件，也是收敛条件，意味着找到了一个可行解
            ++this->count;
            return;
        }

        for (int j = 0; j < N; ++j) {  // 扩展状态，一列一列的试
            const bool ok = !columns[j] &&
                    !main_diag[row - j + N - 1] &&
                    !anti_diag[row + j];
            if (!ok) continue;  // 剪枝：如果合法，继续递归
            // 执行扩展动作
            C[row] = j;
            columns[j] = main_diag[row - j + N - 1] =
                    anti_diag[row + j] = true;
            dfs(C, row + 1);
            // 撤销动作
            // C[row] = -1;
            columns[j] = main_diag[row - j + N - 1] =
                    anti_diag[row + j] = false;
        }
    }
};
```

</TabItem>

<TabItem value="python">

```python
# N-Queens II
# 深搜+剪枝
# 时间复杂度 O(n!)，空间复杂度 O(n)
class Solution:
    def totalNQueens(self, n: int) -> int:
        self.count = 0
        self.columns = [False] * n
        self.main_diag = [False] * (2 * n - 1)
        self.anti_diag = [False] * (2 * n - 1)

        C = [0] * n  # C[i]表示第i行皇后所在的列编号
        self.dfs(C, 0)
        return self.count

    def dfs(self, C: list, row: int) -> None:
        N = len(C)
        if row == N:  # 终止条件，也是收敛条件，意味着找到了一个可行解
            self.count += 1
            return

        for j in range(N):  # 扩展状态，一列一列的试
            ok = not self.columns[j] and \
                not self.main_diag[row - j + N - 1] and \
                not self.anti_diag[row + j]
            if not ok:  # 剪枝：如果合法，继续递归
                continue
            # 执行扩展动作
            C[row] = j
            self.columns[j] = True
            self.main_diag[row - j + N - 1] = True
            self.anti_diag[row + j] = True
            self.dfs(C, row + 1)
            # 撤销动作
            # C[row] = -1
            self.columns[j] = False
            self.main_diag[row - j + N - 1] = False
            self.anti_diag[row + j] = False

if __name__ == "__main__":
    s = Solution()
    s.totalNQueens(1)
```

</TabItem>
</Tabs>

### 相关题目

- [N-Queens](n-queens.md)

```

```
