---
title: Valid Sudoku
---

### 描述

Determine if a Sudoku is valid, according to: Sudoku Puzzles - The Rules [http://sudoku.com.au/TheRules.aspx]url(http://sudoku.com.au/TheRules.aspx) .

The Sudoku board could be partially filled, where empty cells are filled with the character `'.'`.

![Valid Sudoku](/img/sudoku.png)

### 分析

细节实现题。

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

### 代码

<Tabs
defaultValue="java"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// Valid Sudoku
// 时间复杂度O(n^2)，空间复杂度O(1)
public class Solution {
    public boolean isValidSudoku(char[][] board) {
        boolean[] used = new boolean[9];

        for (int i = 0; i < 9; ++i) {
            Arrays.fill(used, false);

            for (int j = 0; j < 9; ++j) // 检查行
                if (!check(board[i][j], used))
                    return false;

            Arrays.fill(used, false);

            for (int j = 0; j < 9; ++j) // 检查列
                if (!check(board[j][i], used))
                    return false;
        }

        for (int r = 0; r < 3; ++r) // 检查 9 个子格子
            for (int c = 0; c < 3; ++c) {
                Arrays.fill(used, false);

                for (int i = r * 3; i < r * 3 + 3; ++i)
                    for (int j = c * 3; j < c * 3 + 3; ++j)
                        if (!check(board[i][j], used))
                            return false;
            }

        return true;
    }

    private static boolean check(char ch, boolean[] used) {
        if (ch == '.') return true;

        if (used[ch - '1']) return false;

        return used[ch - '1'] = true;
    }
};
```

</TabItem>
<TabItem value="cpp">

```cpp
// Valid Sudoku
// 时间复杂度O(n^2)，空间复杂度O(1)
class Solution {
public:
    bool isValidSudoku(const vector<vector<char>>& board) {
        bool used[9];

        for (int i = 0; i < 9; ++i) {
            fill(used, used + 9, false);

            for (int j = 0; j < 9; ++j) // 检查行
                if (!check(board[i][j], used))
                    return false;

            fill(used, used + 9, false);

            for (int j = 0; j < 9; ++j) // 检查列
                if (!check(board[j][i], used))
                    return false;
        }

        for (int r = 0; r < 3; ++r) // 检查 9 个子格子
            for (int c = 0; c < 3; ++c) {
                fill(used, used + 9, false);

                for (int i = r * 3; i < r * 3 + 3; ++i)
                    for (int j = c * 3; j < c * 3 + 3; ++j)
                        if (!check(board[i][j], used))
                            return false;
            }

        return true;
    }

    bool check(char ch, bool used[9]) {
        if (ch == '.') return true;

        if (used[ch - '1']) return false;

        return used[ch - '1'] = true;
    }
};
```

</TabItem>
</Tabs>

### 相关题目

- [Sudoku Solver](../dfs/sudoku-solver.md)
