---
title: Spiral Matrix II
---

### 描述

Given an integer `n`, generate a square matrix filled with elements from 1 to `n^2` in spiral order.

For example,
Given `n = 3`,

You should return the following matrix:

```
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]
```

### 分析

这题比上一题要简单。

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
// Spiral Matrix II
// 时间复杂度O(n^2)，空间复杂度O(n^2)
public class Solution {
    public int[][] generateMatrix(int n) {
        int[][] matrix = new int[n][n];
        int begin = 0, end = n - 1;
        int num = 1;

        while (begin < end) {
            for (int j = begin; j < end; ++j) matrix[begin][j] = num++;
            for (int i = begin; i < end; ++i) matrix[i][end] = num++;
            for (int j = end; j > begin; --j) matrix[end][j] = num++;
            for (int i = end; i > begin; --i) matrix[i][begin] = num++;
            ++begin;
            --end;
        }

        if (begin == end) matrix[begin][begin] = num;

        return matrix;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Spiral Matrix II
// 时间复杂度O(n^2)，空间复杂度O(n^2)
class Solution {
public:
    vector<vector<int> > generateMatrix(int n) {
        vector<vector<int> > matrix(n, vector<int>(n));
        int begin = 0, end = n - 1;
        int num = 1;

        while (begin < end) {
            for (int j = begin; j < end; ++j) matrix[begin][j] = num++;
            for (int i = begin; i < end; ++i) matrix[i][end] = num++;
            for (int j = end; j > begin; --j) matrix[end][j] = num++;
            for (int i = end; i > begin; --i) matrix[i][begin] = num++;
            ++begin;
            --end;
        }

        if (begin == end) matrix[begin][begin] = num;

        return matrix;
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Spiral Matrix II
# 时间复杂度O(n^2)，空间复杂度O(n^2)
def generateMatrix(n):
    matrix = [[0] * n for _ in range(n)]
    begin = 0
    end = n - 1
    num = 1

    while begin < end:
        for j in range(begin, end): matrix[begin][j] = num; num += 1
        for i in range(begin, end): matrix[i][end] = num; num += 1
        for j in range(end, begin, -1): matrix[end][j] = num; num += 1
        for i in range(end, begin, -1): matrix[i][begin] = num; num += 1
        begin += 1
        end -= 1

    if begin == end:
        matrix[begin][begin] = num

    return matrix
```

</TabItem>
</Tabs>

### 代码 2

```cpp
// LeetCode, Spiral Matrix II
// @author 龚陆安 (http://weibo.com/luangong)
// 时间复杂度O(n^2)，空间复杂度O(n^2)
class Solution {
public:
    vector<vector<int> > generateMatrix(int n) {
        vector< vector<int> > matrix(n, vector<int>(n));
        if (n == 0) return matrix;
        int beginX = 0, endX = n - 1;
        int beginY = 0, endY = n - 1;
        int num = 1;
        while (true) {
            for (int j = beginX; j <= endX; ++j) matrix[beginY][j] = num++;
            if (++beginY > endY) break;

            for (int i = beginY; i <= endY; ++i) matrix[i][endX] = num++;
            if (beginX > --endX) break;

            for (int j = endX; j >= beginX; --j) matrix[endY][j] = num++;
            if (beginY > --endY) break;

            for (int i = endY; i >= beginY; --i) matrix[i][beginX] = num++;
            if (++beginX > endX) break;
        }
        return matrix;
    }
};
```

### 相关题目

- [Spiral Matrix](spiral-matrix.md)
