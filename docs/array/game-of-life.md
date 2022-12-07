---
title: Game of Life
---

### 描述

According to the [Wikipedia's article](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life): "The **Game of Life**, also known simply as **Life**, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

1. Any live cell with fewer than two live neighbors dies, as if caused by under-population.
1. Any live cell with two or three live neighbors lives on to the next generation.
1. Any live cell with more than three live neighbors dies, as if by over-population..
1. Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

Write a function to compute the next state (after one update) of the board given its current state.

**Follow up**:

1. Could you solve it in-place? Remember that the board needs to be updated at the same time: You cannot update some cells first and then use their updated values to update other cells.
2. In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches the border of the array. How would you address these problems?

### 分析

最简单的办法是新建一个矩阵保存下一轮局面。

不过本提要求 inplace, 难度就瞬间增大了。因为我们修改一个位置的值后，它的旧值就丢失了，而它周围还有邻居依赖它的旧值。

因为题目给出的是一个 int 矩阵，大有空间可以利用。我们可以换一种方式进行编码，假设对于每个点，值的含义为：

- 状态 0 和 1，表示状态不变
- 状态 -1：活细胞转为死细胞
- 状态 2：死细胞转为活细胞

得到这样一个矩阵后，最后将所有大于0的位置变成活细胞1，小于0的位置变成死细胞0，就是所求的下一轮局面了。

### 代码

```java
// Game of Life
// Time complexity: O(mxn), Space complexity: O(1)
public class Solution {
    public void gameOfLife(int[][] board) {
        final int m = board.length;
        final int n = board[0].length;
        // clock wise, start from upper-left corner
        final int[] dx = new int[] {-1, -1, -1, 0, 1, 1, 1, 0};
        final int[] dy = new int[] {-1, 0, 1, 1, 1, 0, -1, -1};

        // encode
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                int live = 0; // number of live neighbors
                for (int k = 0; k < 8; ++k) {
                    final int x = i + dx[k];
                    final int y = j + dy[k];
                    if (x > -1 && x < m && y > -1 && y < n && Math.abs(board[x][y]) == 1) {
                        ++live;
                    }
                }
                // Rule 1 or Rule 3
                if ((board[i][j] == 1) && (live < 2 || live > 3)) {
                    // -1 signifies the cell is now dead but originally was live.
                    board[i][j] = -1;
                }
                // Rule 4
                if (board[i][j] == 0 && live == 3) {
                    // 2 signifies the cell is now live but was originally dead.
                    board[i][j] = 2;
                }
            }
        }

        // Get the final representation for the newly updated board.
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (board[i][j] > 0) {
                    board[i][j] = 1;
                } else {
                    board[i][j] = 0;
                }
            }
        }
    }
}
```
