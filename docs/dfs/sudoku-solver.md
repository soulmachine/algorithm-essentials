---
title: Sudoku Solver
---

### 描述

Write a program to solve a Sudoku puzzle by filling the empty cells.

Empty cells are indicated by the character `'.'`.

You may assume that there will be only one unique solution.

![A sudoku puzzle...](/img/sudoku.png)

![...and its solution numbers marked in red](/img/sudoku-solution.png)

### 分析

无。

### 代码

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
// Sudoku Solver
// 时间复杂度O(9^4)，空间复杂度O(1)
public class Solution {
    public void solveSudoku(char[][] board) {
        _solveSudoku(board);
    }
    private static boolean _solveSudoku(char[][] board) {
        for (int i = 0; i < 9; ++i)
            for (int j = 0; j < 9; ++j) {
                if (board[i][j] == '.') {
                    for (int k = 0; k < 9; ++k) {
                        board[i][j] = Character.forDigit(k+1, 10);
                        if (isValid(board, i, j) && _solveSudoku(board))
                            return true;
                        board[i][j] = '.';
                    }
                    return false;
                }
            }
        return true;
    }
    // 检查 (x, y) 是否合法
    private static boolean isValid(char[][] board, int x, int y) {
        int i, j;
        for (i = 0; i < 9; i++) // 检查 y 列
            if (i != x && board[i][y] == board[x][y])
                return false;
        for (j = 0; j < 9; j++) // 检查 x 行
            if (j != y && board[x][j] == board[x][y])
                return false;
        for (i = 3 * (x / 3); i < 3 * (x / 3 + 1); i++)
            for (j = 3 * (y / 3); j < 3 * (y / 3 + 1); j++)
                if ((i != x || j != y) && board[i][j] == board[x][y])
                    return false;
        return true;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Sudoku Solver
// 时间复杂度O(9^4)，空间复杂度O(1)
class Solution {
public:
    void solveSudoku(vector<vector<char> > &board) {
        _solveSudoku(board);
    }
private:
    bool _solveSudoku(vector<vector<char> > &board) {
        for (int i = 0; i < 9; ++i)
            for (int j = 0; j < 9; ++j) {
                if (board[i][j] == '.') {
                    for (int k = 0; k < 9; ++k) {
                        board[i][j] = '1' + k;
                        if (isValid(board, i, j) && _solveSudoku(board))
                            return true;
                        board[i][j] = '.';
                    }
                    return false;
                }
            }
        return true;
    }
    // 检查 (x, y) 是否合法
    bool isValid(const vector<vector<char> > &board, int x, int y) {
        int i, j;
        for (i = 0; i < 9; i++) // 检查 y 列
            if (i != x && board[i][y] == board[x][y])
                return false;
        for (j = 0; j < 9; j++) // 检查 x 行
            if (j != y && board[x][j] == board[x][y])
                return false;
        for (i = 3 * (x / 3); i < 3 * (x / 3 + 1); i++)
            for (j = 3 * (y / 3); j < 3 * (y / 3 + 1); j++)
                if ((i != x || j != y) && board[i][j] == board[x][y])
                    return false;
        return true;
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Sudoku Solver
# Time complexity O(9^4), Space complexity O(1)
class Solution:
    def solveSudoku(self, board):
        self._solveSudoku(board)

    def _solveSudoku(self, board):
        for i in range(9):
            for j in range(9):
                if board[i][j] == '.':
                    for k in range(9):
                        board[i][j] = str(k + 1)
                        if self.isValid(board, i, j) and self._solveSudoku(board):
                            return True
                        board[i][j] = '.'
                    return False
        return True

    # Check if (x, y) is valid
    def isValid(self, board, x, y):
        # Check y column
        for i in range(9):
            if i != x and board[i][y] == board[x][y]:
                return False
        # Check x row
        for j in range(9):
            if j != y and board[x][j] == board[x][y]:
                return False
        for i in range(3 * (x // 3), 3 * (x // 3 + 1)):
            for j in range(3 * (y // 3), 3 * (y // 3 + 1)):
                if (i != x or j != y) and board[i][j] == board[x][y]:
                    return False
        return True
```

</TabItem>
</Tabs>

### 相关题目

- [Valid Sudoku](../array/valid-sudoku.md)
