---
title: Remove Element
---

### 描述

Given an array and a value, remove all instances of that value in place and return the new length.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.

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
<TabItem value="python">

```python
# Remove Element
# 双指针
# Time Complexity: O(n), Space Complexity: O(1)
class Solution:
    def removeElement(self, nums: List[int], target: int) -> int:
        slow = 0
        for fast in range(len(nums)):
            if nums[fast] != target:
                nums[slow] = nums[fast]
                slow += 1
        return slow
```

</TabItem>
<TabItem value="java">

```java
// Remove Element
// 双指针
// Time Complexity: O(n), Space Complexity: O(1)
public class Solution {
    public int removeElement(int[] nums, int target) {
        int slow = 0;
        for (int fast = 0; fast < nums.length; ++fast) {
            if (nums[fast] != target) {
                nums[slow++] = nums[fast];
            }
        }
        return slow;
    }
};
```

</TabItem>
<TabItem value="cpp">

```cpp
// Remove Element
// 双指针
// Time Complexity: O(n), Space Complexity: O(1)
class Solution {
public:
    int removeElement(vector<int>& nums, int target) {
        int slow = 0;
        for (int fast = 0; fast < nums.size(); ++fast) {
            if (nums[fast] != target) {
                nums[slow++] = nums[fast];
            }
        }
        return slow;
    }
};
```

</TabItem>
</Tabs>

### 相关题目

- [Remove Duplicates from Sorted Array](remove-duplicates-from-sorted-array.md)
- [Remove Duplicates from Sorted Array II](remove-duplicates-from-sorted-array-ii.md)
- [Move Zeroes](move-zeroes.md)
- [Remove Duplicates from Sorted List](../linked-list/remove-duplicates-from-sorted-list.md)
