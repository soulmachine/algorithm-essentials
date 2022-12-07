---
title: Kth Smallest Element in a Sorted Matrix
---

### 描述

TODO

### 分析

这道题的难点在于矩阵并不是蛇形有序的，它的顺序跟 [Search a 2D Matrix II](search-in-rotated-sorted-array-ii.md)是一样的，每行从小到大有序，每列也从小到大有序，但是一行的末尾元素可能比下一行的首元素要大。首先可以确定的是，左上角一定是最小的，右下角一定是最大的。

### 代码

#### 逐行扫描

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

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
// Kth Smallest Element in a Sorted Matrix
// Time complexity: O(MlgN*lgX)
// Space complexity: O(1)
class Solution {
public:
    int kthSmallest(const vector<vector<int>>& matrix, int k) {
        const int M = matrix.size();
        int left = matrix[0][0], right = matrix.back().back();
        while (left < right) {
            const int mid = left + (right - left) / 2;
            int count = 0;
            for (int i = 0; i < M; ++i) {
                count += upper_bound(matrix[i].begin(), matrix[i].end(), mid) - matrix[i].begin();
            }
            if (count < k) left = mid + 1;
            else right = mid;
        }
        return left;
    }
};
```

上面这个代码只利用了行有序的信息，没有利用列有序的信息。

</TabItem>
</Tabs>

#### 二分法

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
// Kth Smallest Element in a Sorted Matrix
// Time complexity: O(min(M,N)*lgX)
// Space complexity: O(1)
class Solution {
public:
    int kthSmallest(vector<vector<int>>& matrix, int k) {
        int left = matrix[0][0], right = matrix.back().back();
        while (left < right) {
            int mid = left + (right - left) / 2;
            int count = search_less_equal(matrix, mid);
            if (count < k) left = mid + 1;
            else right = mid;
        }
        return left;
    }
    int search_less_equal(vector<vector<int>>& matrix, int target) {
        const int M = matrix.size(), N = matrix[0].size();
        int i = M - 1, j = 0, count = 0;
        while (i >= 0 && j < N) {
            if (matrix[i][j] <= target) {
                count += i + 1;
                ++j;
            } else {
                --i;
            }
        }
        return count;
    }
};
```

</TabItem>
</Tabs>
