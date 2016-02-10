## Minimum Path Sum


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

{% if book.cpp %}
  {% codesnippet "./code/minimum-path-sum-1.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}


### 动规

{% if book.cpp %}
  {% codesnippet "./code/minimum-path-sum-2.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}


### 动规+滚动数组

{% if book.cpp %}
  {% codesnippet "./code/minimum-path-sum-3.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}


### 相关题目

* [Unique Paths](../dfs/unique-paths.md)
* [Unique Paths II](../dfs/unique-paths-ii.md)
