---
title: Merge Two Sorted Arrays
---

### 描述

Given two sorted integer arrays A and B, merge B into A as one sorted array.

Note:
You may assume that A has enough space to hold additional elements from B. The number of elements initialized in A and B are m and n respectively.

### 分析

无

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
// Merge Two Sorted Arrays
// 时间复杂度O(m+n)，空间复杂度O(1)
public class Solution {
    public void merge(int[] A, int m, int[] B, int n) {
        int ia = m - 1, ib = n - 1, icur = m + n - 1;
        while(ia >= 0 && ib >= 0) {
            A[icur--] = A[ia] >= B[ib] ? A[ia--] : B[ib--];
        }
        while(ib >= 0) {
            A[icur--] = B[ib--];
        }
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Merge Sorted Array
// 时间复杂度O(m+n)，空间复杂度O(1)
class Solution {
public:
    void merge(vector<int>& A, int m, vector<int>& B, int n) {
        int ia = m - 1, ib = n - 1, icur = m + n - 1;
        while(ia >= 0 && ib >= 0) {
            A[icur--] = A[ia] >= B[ib] ? A[ia--] : B[ib--];
        }
        while(ib >= 0) {
            A[icur--] = B[ib--];
        }
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Merge Two Sorted Arrays
# 时间复杂度O(m+n)，空间复杂度O(1)
class Solution:
    def merge(self, A: list, m: int, B: list, n: int) -> None:
        ia, ib, icur = m - 1, n - 1, m + n - 1
        while ia >= 0 and ib >= 0:
            A[icur] = A[ia] if A[ia] >= B[ib] else B[ib]
            icur -= 1
            if A[ia] >= B[ib]:
                ia -= 1
            else:
                ib -= 1
        while ib >= 0:
            A[icur] = B[ib]
            icur -= 1
            ib -= 1
```

</TabItem>
</Tabs>

### 相关题目

- [Merge Two Sorted Lists](merge-two-sorted-lists.md)
- [Merge k Sorted Lists](merge-k-sorted-lists.md)
