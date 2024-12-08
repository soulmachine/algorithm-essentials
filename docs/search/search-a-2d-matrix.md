---
title: Search a 2D Matrix
---

### 描述

Write an efficient algorithm that searches for a value in an `m × n` matrix. This matrix has the following properties:

- Integers in each row are sorted from left to right.
- The first integer of each row is greater than the last integer of the previous row.

For example, Consider the following matrix:

```
[
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
```

Given `target = 3`, return true.

### 分析

二分查找。

### 代码

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
// Search a 2D Matrix
// 时间复杂度O(logn)，空间复杂度O(1)
public class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        if (matrix.length == 0) return false;
        final int  m = matrix.length;
        final int n = matrix[0].length;

        int first = 0;
        int last = m * n;

        while (first < last) {
            int mid = first + (last - first) / 2;
            int value = matrix[mid / n][mid % n];

            if (value == target)
                return true;
            else if (value < target)
                first = mid + 1;
            else
                last = mid;
        }

        return false;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Search a 2D Matrix
// 时间复杂度O(logn)，空间复杂度O(1)
class Solution {
public:
    bool searchMatrix(const vector<vector<int>>& matrix, int target) {
        if (matrix.empty()) return false;
        const size_t  m = matrix.size();
        const size_t n = matrix.front().size();

        int first = 0;
        int last = m * n;

        while (first < last) {
            int mid = first + (last - first) / 2;
            int value = matrix[mid / n][mid % n];

            if (value == target)
                return true;
            else if (value < target)
                first = mid + 1;
            else
                last = mid;
        }

        return false;
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Search a 2D Matrix
# 时间复杂度O(logn)，空间复杂度O(1)
def searchMatrix(matrix, target):
    if not matrix:
        return False
    m = len(matrix)
    n = len(matrix[0])

    first = 0
    last = m * n

    while first < last:
        mid = first + (last - first) // 2
        value = matrix[mid // n][mid % n]

        if value == target:
            return True
        elif value < target:
            first = mid + 1
        else:
            last = mid

    return False
```

</TabItem>
</Tabs>

### 相关题目

- [Search a 2D Matrix II](search-a-2d-matrix-ii.md)
