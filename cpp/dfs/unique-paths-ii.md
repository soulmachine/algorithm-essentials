## Unique Paths II


### 描述

Follow up for "Unique Paths":

Now consider if some obstacles are added to the grids. How many unique paths would there be?

An obstacle and empty space is marked as 1 and 0 respectively in the grid.

For example,

There is one obstacle in the middle of a `3 × 3` grid as illustrated below.

```
[
  [0,0,0],
  [0,1,0],
  [0,0,0]
]
```

The total number of unique paths is 2.

Note: `m` and `n` will be at most 100.


### 备忘录法

在上一题的基础上改一下即可。相比动规，简单得多。

{% if book.cpp %}
  {% codesnippet "./code/unique-paths-ii-1.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}


### 动规

与上一题类似，但要特别注意第一列的障碍。在上一题中，第一列全部是1，但是在这一题中不同，第一列如果某一行有障碍物，那么后面的行全为0。


{% if book.cpp %}
  {% codesnippet "./code/unique-paths-ii-2.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}


### 相关题目

* [Unique Paths](unique-paths.md)
* [Minimum Path Sum](../dp/minimum-path-sum.md)
