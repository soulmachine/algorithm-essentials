---
title: Intersection of Two Arrays
---

### 描述

Given two arrays, write a function to compute their intersection.

**Example 1**:

> **Input**: nums1 = [1,2,2,1], nums2 = [2,2]  
> **Output**: [2]

**Example 2**:

> **Input**: nums1 = [4,9,5], nums2 = [9,4,9,8,4]  
> **Output**: [9,4]

**Note**:

- Each element in the result must be unique.
- The result can be in any order.

### 分析

思路一，可以把两个数组排序，然后用两个指针，同时遍历两个数组，时间复杂度 O(nlogn+mlogm)，空间复杂度 O(logm + logn) 到 O(m+n) 之间，取决于排序算法。

思路二，建两个 HashSet, 然后集合求交集，时间复杂度 O(m + n))，空间复杂度 O(m + n)。

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
// Intersection of Two Arrays
// Two HashSet
// Time Complexity: O(m+n), Space Complexity: O(m+n)
class Solution {
  public int[] intersection(int[] nums1, int[] nums2) {
    Set<Integer> set1 = new HashSet<Integer>();
    for (int n : nums1) set1.add(n);
    Set<Integer> set2 = new HashSet<Integer>();
    for (int n : nums2) set2.add(n);

    set1.retainAll(set2);

    int [] result = new int[set1.size()];
    int i = 0;
    for (int s : set1) result[i++] = s;
    return result;
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
# Intersection of Two Arrays
# Two HashSet
# Time Complexity: O(m+n), Space Complexity: O(m+n)
class Solution:
    def intersection(self, nums1: list[int], nums2: list[int]) -> list[int]:
        set1 = set(nums1)
        set2 = set(nums2)
        return list(set1.intersection(set2))
```

</TabItem>
</Tabs>

### 相关题目

- [Intersection of Two Arrays II](intersection-of-two-arrays-ii.md)
