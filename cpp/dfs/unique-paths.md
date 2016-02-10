## Unique Paths


### 描述

A robot is located at the top-left corner of a `m × n` grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?

![Above is a `3 × 7` grid. How many possible unique paths are there?](../images/robot-maze.png)

**Note**: `m` and `n` will be at most 100.


### 深搜

{% if book.cpp %}
  {% codesnippet "./code/unique-paths-1.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}


### 备忘录法

给前面的深搜，加个缓存，就可以过大集合了。即备忘录法。

{% if book.cpp %}
  {% codesnippet "./code/unique-paths-2.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}


### 动规

既然可以用备忘录法自顶向下解决，也一定可以用动规自底向上解决。

设状态为`f[i][j]`，表示从起点`(1,1)`到达`(i,j)`的路线条数，则状态转移方程为：

```
f[i][j]=f[i-1][j]+f[i][j-1]
```

{% if book.cpp %}
  {% codesnippet "./code/unique-paths-3.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}


### 数学公式

一个`m`行，`n`列的矩阵，机器人从左上走到右下总共需要的步数是`m+n-2`，其中向下走的步数是`m-1`，因此问题变成了在`m+n-2`个操作中，选择`m–1`个时间点向下走，选择方式有多少种。即 $$C_{m+n-2}^{m-1}$$ 。

```cpp
// LeetCode, Unique Paths
// 数学公式
class Solution {
public:
    typedef long long int64_t;
    // 求阶乘, n!/(start-1)!，即 n*(n-1)...start，要求 n >= 1
    static int64_t factor(int n, int start = 1) {
        int64_t  ret = 1;
        for(int i = start; i <= n; ++i)
            ret *= i;
        return ret;
    }
    // 求组合数 C_n^k
    static int64_t combination(int n, int k) {
        // 常数优化
        if (k == 0) return 1;
        if (k == 1) return n;

        int64_t ret = factor(n, k+1);
        ret /= factor(n - k);
        return ret;
    }

    int uniquePaths(int m, int n) {
        // max 可以防止n和k差距过大，从而防止combination()溢出
        return combination(m+n-2, max(m-1, n-1));
    }
};
```


### 相关题目

* [Unique Paths II](unique-paths-ii.md)
* [Minimum Path Sum](../dp/minimum-path-sum.md)
