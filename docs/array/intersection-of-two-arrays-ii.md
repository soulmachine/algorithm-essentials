---
title: Intersection of Two Arrays II
---

### 描述

Given two arrays, write a function to compute their intersection.

**Example 1**:

> **Input**: nums1 = [1,2,2,1], nums2 = [2,2]  
> **Output**: [2,2]

**Example 2**:

> **Input**: nums1 = [4,9,5], nums2 = [9,4,9,8,4]  
> **Output**: [4,9]

**Note**:

- Each element in the result should appear as many times as it shows in both arrays.
- The result can be in any order.

### 分析

思路一，可以把两个数组排序，然后用两个指针，同时遍历两个数组，时间复杂度 O(nlogn+mlogm)，空间复杂度 O(logm + logn) 到 O(m+n) 之间，取决于排序算法。

思路二，基于较短的那个数组建立一个 HashMap, key 为整数, value 为出现次数，然后遍历另一个数组, 碰到一次就把哈希表里的值减一，并把该数加入到交集中，等于 0 则跳过。时间复杂度 O(m + n))，空间复杂度 O(min(m + n))。

### 代码

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

#### 排序

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
// Intersection of Two Arrays II
// Sort
// Time Complexity: O(mlogm+nlogn)
// Space Complexity:  from O(logm+logn) to O(n+m), depending
// on the implementation of the sorting algorithm.
class Solution {
    public int[] intersect(int[] nums1, int[] nums2) {
        Arrays.sort(nums1);
        Arrays.sort(nums2);
        int i = 0, j = 0, k = 0;
        while (i < nums1.length && j < nums2.length) {
            if (nums1[i] < nums2[j]) {
                ++i;
            } else if (nums1[i] > nums2[j]) {
                ++j;
            } else {
                nums1[k++] = nums1[i++];
                ++j;
            }
        }
        return Arrays.copyOfRange(nums1, 0, k);
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// TODO
```

</TabItem>

<TabItem value="python">

```python
# Intersection of Two Arrays II
# Sort
# Time Complexity: O(mlogm+nlogn)
# Space Complexity:  from O(logm+logn) to O(n+m), depending
# on the implementation of the sorting algorithm.
class Solution:
    def intersect(self, nums1: list[int], nums2: list[int]) -> list[int]:
        nums1.sort()
        nums2.sort()
        i = j = k = 0
        while i < len(nums1) and j < len(nums2):
            if nums1[i] < nums2[j]:
                i += 1
            elif nums1[i] > nums2[j]:
                j += 1
            else:
                nums1[k] = nums1[i]
                k += 1
                i += 1
                j += 1
        return nums1[:k]
```

</TabItem>
</Tabs>

#### HashMap

<Tabs
defaultValue="java"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// Intersection of Two Arrays II
// HashMap
// Time Complexity: O(m + n), Space Complexity:  O(min(m + n))
class Solution {
    public int[] intersect(int[] nums1, int[] nums2) {
        if (nums1.length > nums2.length) return intersect(nums2, nums1);

        Map<Integer, Integer> m = new HashMap<>();
        for (int x : nums1) {
            m.merge(x, 1, Integer::sum);
        }

        int k = 0;
        for (int x : nums2) {
            int count = m.getOrDefault(x, 0);
            if (count > 0) {
                nums1[k++] = x;
                m.put(x, count - 1);
            }
        }
        return Arrays.copyOfRange(nums1, 0, k);
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// TODO
```

</TabItem>

<TabItem value="python">

```python
# Intersection of Two Arrays II
# HashMap
# Time Complexity: O(m + n), Space Complexity:  O(min(m + n))
from collections import Counter

def intersect(nums1, nums2):
    if len(nums1) > len(nums2):
        return intersect(nums2, nums1)

    count = Counter(nums1)
    k = 0

    for x in nums2:
        if count[x] > 0:
            nums1[k] = x
            k += 1
            count[x] -= 1

    return nums1[:k]
```

</TabItem>
</Tabs>

### 相关题目

- [Intersection of Two Arrays](intersection-of-two-arrays.md)
