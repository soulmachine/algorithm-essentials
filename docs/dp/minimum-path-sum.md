---
title: Minimum Path Sum
---

### 描述

Given a `m × n` grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time

### 分析

跟第 ??? 节 [Unique Paths](../dfs/unique-paths.md) 很类似。

设状态为`f[i][j]`，表示从起点`(0,0)`到达`(i,j)`的最小路径和，则状态转移方程为：

```
f[i][j]=min(f[i-1][j], f[i][j-1])+grid[i][j]
```

### 备忘录法

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
// Minimum Path Sum
// 备忘录法
public class Solution {
    public int minPathSum(int[][] grid) {
        final int m = grid.length;
        final int n = grid[0].length;
        this.f = new int[m][n];
        for (int i = 0; i < m; ++i) Arrays.fill(f[i], -1);
        return dfs(grid, m-1, n-1);
    }

    private int dfs(int[][] grid, int x, int y) {
        if (x < 0 || y < 0) return Integer.MAX_VALUE; // 越界，终止条件，注意，不是0

        if (x == 0 && y == 0) return grid[0][0]; // 回到起点，收敛条件

        return Math.min(getOrUpdate(grid, x - 1, y),
                getOrUpdate(grid, x, y - 1)) + grid[x][y];
    }

    private int getOrUpdate(int[][] grid, int x, int y) {
        if (x < 0 || y < 0) return Integer.MAX_VALUE; // 越界，注意，不是0
        if (f[x][y] >= 0) return f[x][y];
        else return f[x][y] = dfs(grid, x, y);
    }
    private int[][] f;  // 缓存
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Minimum Path Sum
// 备忘录法
class Solution {
public:
    int minPathSum(vector<vector<int> > &grid) {
        const int m = grid.size();
        const int n = grid[0].size();
        this->f = vector<vector<int> >(m, vector<int>(n, -1));
        return dfs(grid, m-1, n-1);
    }
private:
    vector<vector<int> > f;  // 缓存

    int dfs(const vector<vector<int> > &grid, int x, int y) {
        if (x < 0 || y < 0) return INT_MAX; // 越界，终止条件，注意，不是0

        if (x == 0 && y == 0) return grid[0][0]; // 回到起点，收敛条件

        return min(getOrUpdate(grid, x - 1, y),
                getOrUpdate(grid, x, y - 1)) + grid[x][y];
    }

    int getOrUpdate(const vector<vector<int> > &grid, int x, int y) {
        if (x < 0 || y < 0) return INT_MAX; // 越界，注意，不是0
        if (f[x][y] >= 0) return f[x][y];
        else return f[x][y] = dfs(grid, x, y);
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Minimum Path Sum
# 备忘录法
class Solution:
    def minPathSum(self, grid: list[list[int]]) -> int:
        m = len(grid)
        n = len(grid[0])
        self.f = [[-1] * n for _ in range(m)]
        return self.dfs(grid, m-1, n-1)

    def dfs(self, grid: list[list[int]], x: int, y: int) -> int:
        if x < 0 or y < 0:
            return float('inf')  # 越界，终止条件，注意，不是0

        if x == 0 and y == 0:
            return grid[0][0]  # 回到起点，收敛条件

        return min(self.getOrUpdate(grid, x - 1, y),
                  self.getOrUpdate(grid, x, y - 1)) + grid[x][y]

    def getOrUpdate(self, grid: list[list[int]], x: int, y: int) -> int:
        if x < 0 or y < 0:
            return float('inf')  # 越界，注意，不是0
        if self.f[x][y] >= 0:
            return self.f[x][y]
        else:
            self.f[x][y] = self.dfs(grid, x, y)
            return self.f[x][y]
```

</TabItem>
</Tabs>

### 动规

<Tabs
defaultValue="java"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// Minimum Path Sum
// 二维动规
public class Solution {
    public int minPathSum(int[][] grid) {
        final int m = grid.length;
        final int n = grid[0].length;
        if (m == 0) return 0;

        int[][] f = new int[m][n];
        f[0][0] = grid[0][0];
        for (int i = 1; i < m; i++) {
            f[i][0] = f[i - 1][0] + grid[i][0];
        }
        for (int i = 1; i < n; i++) {
            f[0][i] = f[0][i - 1] + grid[0][i];
        }

        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                f[i][j] = Math.min(f[i - 1][j], f[i][j - 1]) + grid[i][j];
            }
        }
        return f[m - 1][n - 1];
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Minimum Path Sum
// 二维动规
class Solution {
public:
    int minPathSum(vector<vector<int> > &grid) {
        if (grid.size() == 0) return 0;
        const int m = grid.size();
        const int n = grid[0].size();

        int f[m][n];
        f[0][0] = grid[0][0];
        for (int i = 1; i < m; i++) {
            f[i][0] = f[i - 1][0] + grid[i][0];
        }
        for (int i = 1; i < n; i++) {
            f[0][i] = f[0][i - 1] + grid[0][i];
        }

        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                f[i][j] = min(f[i - 1][j], f[i][j - 1]) + grid[i][j];
            }
        }
        return f[m - 1][n - 1];
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Minimum Path Sum
# 二维动规
def minPathSum(grid):
    if not grid:
        return 0
    m = len(grid)
    n = len(grid[0])

    f = [[0] * n for _ in range(m)]
    f[0][0] = grid[0][0]

    for i in range(1, m):
        f[i][0] = f[i - 1][0] + grid[i][0]

    for i in range(1, n):
        f[0][i] = f[0][i - 1] + grid[0][i]

    for i in range(1, m):
        for j in range(1, n):
            f[i][j] = min(f[i - 1][j], f[i][j - 1]) + grid[i][j]

    return f[m - 1][n - 1]
```

</TabItem>
</Tabs>

### 动规+滚动数组

<Tabs
defaultValue="java"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// Minimum Path Sum
// 二维动规+滚动数组
public class Solution {
    public int minPathSum(int[][] grid) {
        final int m = grid.length;
        final int n = grid[0].length;

        int[] f = new int[n];
        Arrays.fill(f, Integer.MAX_VALUE); // 初始值是 INT_MAX，因为后面用了min函数。
        f[0] = 0;

        for (int i = 0; i < m; i++) {
            f[0] += grid[i][0];
            for (int j = 1; j < n; j++) {
                // 左边的f[j]，表示更新后的f[j]，与公式中的f[i[[j]对应
                // 右边的f[j]，表示老的f[j]，与公式中的f[i-1][j]对应
                f[j] = Math.min(f[j - 1], f[j]) + grid[i][j];
            }
        }
        return f[n - 1];
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Minimum Path Sum
// 二维动规+滚动数组
class Solution {
public:
    int minPathSum(vector<vector<int> > &grid) {
        const int m = grid.size();
        const int n = grid[0].size();

        int f[n];
        fill(f, f+n, INT_MAX); // 初始值是 INT_MAX，因为后面用了min函数。
        f[0] = 0;

        for (int i = 0; i < m; i++) {
            f[0] += grid[i][0];
            for (int j = 1; j < n; j++) {
                // 左边的f[j]，表示更新后的f[j]，与公式中的f[i[[j]对应
                // 右边的f[j]，表示老的f[j]，与公式中的f[i-1][j]对应
                f[j] = min(f[j - 1], f[j]) + grid[i][j];
            }
        }
        return f[n - 1];
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Minimum Path Sum
# 二维动规+滚动数组
def minPathSum(grid):
    m = len(grid)
    n = len(grid[0])

    f = [float('inf')] * n  # 初始值是 INT_MAX，因为后面用了min函数。
    f[0] = 0

    for i in range(m):
        f[0] += grid[i][0]
        for j in range(1, n):
            # 左边的f[j]，表示更新后的f[j]，与公式中的f[i[[j]对应
            # 右边的f[j]，表示老的f[j]，与公式中的f[i-1][j]对应
            f[j] = min(f[j-1], f[j]) + grid[i][j]

    return f[n-1]
```

</TabItem>
</Tabs>

### 相关题目

- [Unique Paths](../dfs/unique-paths.md)
- [Unique Paths II](../dfs/unique-paths-ii.md)
