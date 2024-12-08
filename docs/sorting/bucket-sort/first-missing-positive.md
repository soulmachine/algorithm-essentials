---
title: First Missing Positive
---

### 描述

Given an unsorted integer array, find the first missing positive integer.

For example,
Given `[1,2,0]` return `3`,
and `[3,4,-1,1]` return `2`.

Your algorithm should run in `O(n)` time and uses constant space.

### 分析

本质上是桶排序(bucket sort)，每当 `A[i]!= i+1` 的时候，将`A[i]`与`A[A[i]-1]`交换，直到无法交换为止，终止条件是 `A[i]== A[A[i]-1]`。

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
// First Missing Positive
// 时间复杂度O(n)，空间复杂度O(1)
public class Solution {
    public int firstMissingPositive(int[] nums) {
        bucket_sort(nums);

        for (int i = 0; i < nums.length; ++i)
            if (nums[i] != (i + 1))
                return i + 1;
        return nums.length + 1;
    }
    private static void bucket_sort(int[] A) {
        final int n = A.length;
        for (int i = 0; i < n; i++) {
            while (A[i] != i + 1) {
                if (A[i] < 1 || A[i] > n || A[i] == A[A[i] - 1])
                    break;
                // swap
                int tmp = A[i];
                A[i] = A[tmp - 1];
                A[tmp - 1] = tmp;
            }
        }
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// First Missing Positive
// 时间复杂度O(n)，空间复杂度O(1)
class Solution {
public:
    int firstMissingPositive(vector<int>& nums) {
        bucket_sort(nums);

        for (int i = 0; i < nums.size(); ++i)
            if (nums[i] != (i + 1))
                return i + 1;
        return nums.size() + 1;
    }
private:
    static void bucket_sort(vector<int>& A) {
        const int n = A.size();
        for (int i = 0; i < n; i++) {
            while (A[i] != i + 1) {
                if (A[i] <= 0 || A[i] > n || A[i] == A[A[i] - 1])
                    break;
                swap(A[i], A[A[i] - 1]);
            }
        }
    }
};
```

</TabItem>

<TabItem value="python">

```python
# First Missing Positive
# 时间复杂度O(n)，空间复杂度O(1)
def firstMissingPositive(nums: list[int]) -> int:
    def bucket_sort(A):
        n = len(A)
        for i in range(n):
            while A[i] != i + 1:
                if A[i] < 1 or A[i] > n or A[i] == A[A[i] - 1]:
                    break
                # swap
                tmp = A[i]
                A[i] = A[tmp - 1]
                A[tmp - 1] = tmp

    bucket_sort(nums)
    for i in range(len(nums)):
        if nums[i] != (i + 1):
            return i + 1
    return len(nums) + 1
```

</TabItem>
</Tabs>

### 相关题目

- [Sort Colors](../quick-sort/sort-colors.md)
