---
title: Number of Islands
---

### 描述

TODO

### 分析

这里用暴力的方法可以解决，DFS和BFS都可以。

稍微优化一点的方法，就是并查集。

### 代码

#### DFS

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
// TODO
```

</TabItem>
<TabItem value="cpp">

```cpp
// Number of Islands
// Time complexity: O(MN)
// Space complexity: O(MN)
class Solution {
 private:
  void dfs(vector<vector<char> >& grid, int i, int j) {
    const int M = grid.size(), N = grid[0].size();
    if (i < 0 || i >= M | j < 0 || j >= N || grid[i][j] == '0') return;

    grid[i][j] = '0';
    dfs(grid, i - 1, j); // down
    dfs(grid, i + 1, j); // up
    dfs(grid, i, j - 1); // left
    dfs(grid, i, j + 1); // right
  }

 public:
  int numIslands(vector<vector<char>>& grid) {
    const int M = grid.size(), N = grid[0].size();

    int num_islands = 0;
    for (int i = 0; i < M; ++i) {
      for (int j = 0; j < N; ++j) {
        if (grid[i][j] == '1') {
          ++num_islands;
          dfs(grid, i, j);
        }
      }
    }

    return num_islands;
  }
};
```

</TabItem>

<TabItem value="python">

```python
# No code to translate - only a TODO comment
```

</TabItem>
</Tabs>

#### 并查集

<Tabs
defaultValue="cpp"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// TODO
```

</TabItem>
<TabItem value="cpp">

```cpp
class DSU {
 public:
  DSU(const vector<vector<char>>& grid) {
    const int M = grid.size(), N = grid[0].size();
    p = vector<int>(M * N, -1);
    rank = vector<int>(M * N, 0);
    for (int i = 0; i < M; i++) {
      for (int j = 0; j < N; j++) {
        const int x = i * N + j;
        if (grid[i][j] == '1') {
          p[x] = x;
          rank[x] = 1;
        }
      }
    }
  }

  int find(int x) {
    while (p[x] != x) {
      p[x] = p[p[x]];  // path compression
      x = p[x];
    }
    return x;
  }

  // return the number of reduced components
  int merge(int x, int y) {
    int px = find(x);
    int py = find(y);
    if (px == py) return 0;

    if (rank[px] < rank[py]) {
      p[px] = py;
    } else if (rank[px] > rank[py]) {
      p[py] = px;
    } else {
      p[px] = py;
      rank[px] += 1;
    }
    return 1;
  }

 private:
  vector<int> p;
  vector<int> rank;
};

// Number of Islands
// Time complexity: O(MN * log*MN)
// Space complexity: O(MN)
class Solution {
 public:
  int numIslands(vector<vector<char>>& grid) {
    const int M = grid.size(), N = grid[0].size();
    const int dirs[][4] = {
        {-1, 0}, {1, 0}, {0, -1}, {0, 1}};  // up, down, left, right

    DSU dsu(grid);
    int num_islands = 0;
    for (int i = 0; i < M; ++i) {
      for (int j = 0; j < N; ++j) {
        if (grid[i][j] == '1') {
          ++num_islands;
          for (const auto& dir : dirs) {
            int new_i = i + dir[0];
            int new_j = j + dir[1];
            if (0 <= new_i && new_i < M && 0 <= new_j && new_j < N &&
                grid[new_i][new_j] == '1') {
              num_islands -= dsu.merge(i * N + j, new_i * N + new_j);
            }
          }
        }
      }
    }

    return num_islands;
  }
};
```

</TabItem>

<TabItem value="python">

```python
# Nothing to translate since the Java code only shows a TODO comment

# TODO
```

</TabItem>
</Tabs>


### 相关题目

- [Number of Provinces](number-of-provinces.md)
