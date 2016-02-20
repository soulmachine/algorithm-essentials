## Triangle


### 描述

Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.

For example, given the following triangle

```
[
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]
```

The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).

Note: Bonus point if you are able to do this using only `O(n)` extra space, where n is the total number of rows in the triangle.


### 分析

设状态为`f(i, j)`，表示从从位置`(i,j)`出发，路径的最小和，则状态转移方程为

$$
f(i,j)=\min\left\{f(i+1,j),f(i+1,j+1)\right\}+(i,j)
$$


### 代码

{% codesnippet "./code/triangle."+book.suffix, language=book.suffix %}{% endcodesnippet %}
