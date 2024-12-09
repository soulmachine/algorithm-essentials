---
title: Search Insert Position
---

### 描述

Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

Here are few examples.

```
[1,3,5,6], 5 → 2
[1,3,5,6], 2 → 1
[1,3,5,6], 7 → 4
[1,3,5,6], 0 → 0
```

### 分析

即`std::lower_bound()`。

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
// Search Insert Position
// 重新实现 lower_bound
// 时间复杂度O(logn)，空间复杂度O(1)
public class Solution {
    public int searchInsert(int[] nums, int target) {
        return lower_bound(nums, 0, nums.length, target);
    }

    int lower_bound (int[] A, int first, int last, int target) {
        while (first != last) {
            int mid = first + (last - first) / 2;
            if (target > A[mid]) first = ++mid;
            else                 last = mid;
        }

        return first;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Search Insert Position
// 重新实现 lower_bound
// 时间复杂度O(logn)，空间复杂度O(1)
class Solution {
public:
    int searchInsert(vector<int>& nums, int target) {
        return distance(nums.begin(), lower_bound(nums.begin(), nums.end(), target));
    }

    template<typename ForwardIterator, typename T>
    ForwardIterator lower_bound (ForwardIterator first,
            ForwardIterator last, T value) {
        while (first != last) {
            auto mid = next(first, distance(first, last) / 2);

            if (value > *mid)   first = ++mid;
            else                last = mid;
        }

        return first;
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Search Insert Position
# 重新实现 lower_bound
# 时间复杂度O(logn)，空间复杂度O(1)
class Solution:
    def searchInsert(self, nums: list[int], target: int) -> int:
        return self.lower_bound(nums, 0, len(nums), target)

    def lower_bound(self, A: list[int], first: int, last: int, target: int) -> int:
        while first != last:
            mid = first + (last - first) // 2
            if target > A[mid]:
                first = mid + 1
            else:
                last = mid
        return first
```

</TabItem>
</Tabs>

### 相关题目

- [Search for a Range](find-first-and-last-position-of-element-in-sorted-array.md)
