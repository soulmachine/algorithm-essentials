---
title: Rotate Image
---

### 描述

You are given an `n × n` 2D matrix representing an image.

Rotate the image by 90 degrees (clockwise).

Follow up:
Could you do this in-place?

### 分析

首先想到，纯模拟，从外到内一圈一圈的转，但这个方法太慢。

如下图，首先沿着副对角线翻转一次，然后沿着水平中线翻转一次。

![Rotate image](/img/rotate-image.png)

或者，首先沿着水平中线翻转一次，然后沿着主对角线翻转一次。

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
// Rotate Image
// 思路 1，时间复杂度O(n^2)，空间复杂度O(1)
public class Solution {
    public void rotate(final int[][] matrix) {
        final int n = matrix.length;

        for (int i = 0; i < n; ++i)  // 沿着副对角线反转
            for (int j = 0; j < n - i; ++j)
                swap(matrix, i, j, n - 1 - j, n - 1 - i);

        for (int i = 0; i < n / 2; ++i) // 沿着水平中线反转
            for (int j = 0; j < n; ++j)
                swap(matrix, i, j, n - 1 - i, j);
    }
    private static void swap(final int[][] matrix,
            int i, int j, int p, int q) {
        int tmp = matrix[i][j];
        matrix[i][j] = matrix[p][q];
        matrix[p][q] = tmp;
    }
};
```

</TabItem>
<TabItem value="cpp">

```cpp
// Rotate Image
// 思路 1，时间复杂度O(n^2)，空间复杂度O(1)
class Solution {
public:
    void rotate(vector<vector<int>>& matrix) {
        const int n = matrix.size();

        for (int i = 0; i < n; ++i)  // 沿着副对角线反转
            for (int j = 0; j < n - i; ++j)
                swap(matrix[i][j], matrix[n - 1 - j][n - 1 - i]);

        for (int i = 0; i < n / 2; ++i) // 沿着水平中线反转
            for (int j = 0; j < n; ++j)
                swap(matrix[i][j], matrix[n - 1 - i][j]);
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Rotate Image
# 思路 1，时间复杂度O(n^2)，空间复杂度O(1)
class Solution:
    def rotate(self, matrix: list[list[int]]) -> None:
        n = len(matrix)

        # 沿着副对角线反转
        for i in range(n):
            for j in range(n - i):
                self.swap(matrix, i, j, n - 1 - j, n - 1 - i)

        # 沿着水平中线反转
        for i in range(n // 2):
            for j in range(n):
                self.swap(matrix, i, j, n - 1 - i, j)

    def swap(self, matrix: list[list[int]], i: int, j: int, p: int, q: int) -> None:
        matrix[i][j], matrix[p][q] = matrix[p][q], matrix[i][j]
```

</TabItem>
</Tabs>

### 代码 2

<Tabs
defaultValue="java"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// Rotate Image
// 思路 2，时间复杂度O(n^2)，空间复杂度O(1)
public class Solution {
    public void rotate(final int[][] matrix) {
        final int n = matrix.length;

        for (int i = 0; i < n / 2; ++i) // 沿着水平中线反转
            for (int j = 0; j < n; ++j)
                swap(matrix, i, j, n - 1 - i, j);

        for (int i = 0; i < n; ++i)  // 沿着主对角线反转
            for (int j = i + 1; j < n; ++j)
                swap(matrix, i, j, j, i);
    }
    private static void swap(final int[][] matrix,
            int i, int j, int p, int q) {
        int tmp = matrix[i][j];
        matrix[i][j] = matrix[p][q];
        matrix[p][q] = tmp;
    }
};
```

</TabItem>
<TabItem value="cpp">

```cpp
// Rotate Image
// 思路 2，时间复杂度O(n^2)，空间复杂度O(1)
class Solution {
public:
    void rotate(vector<vector<int>>& matrix) {
        const int n = matrix.size();

        for (int i = 0; i < n / 2; ++i) // 沿着水平中线反转
            for (int j = 0; j < n; ++j)
                swap(matrix[i][j], matrix[n - 1 - i][j]);

        for (int i = 0; i < n; ++i)  // 沿着主对角线反转
            for (int j = i + 1; j < n; ++j)
                swap(matrix[i][j], matrix[j][i]);
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Rotate Image
# 思路 2，时间复杂度O(n^2)，空间复杂度O(1)
class Solution:
    def rotate(self, matrix: list[list[int]]) -> None:
        n = len(matrix)

        # 沿着水平中线反转
        for i in range(n // 2):
            for j in range(n):
                self.swap(matrix, i, j, n - 1 - i, j)

        # 沿着主对角线反转
        for i in range(n):
            for j in range(i + 1, n):
                self.swap(matrix, i, j, j, i)

    def swap(self, matrix: list[list[int]], i: int, j: int, p: int, q: int) -> None:
        matrix[i][j], matrix[p][q] = matrix[p][q], matrix[i][j]
```

</TabItem>
</Tabs>
