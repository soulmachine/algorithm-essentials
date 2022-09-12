---
title: Remove Duplicates from Sorted Array
---

### 描述

Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this in place with constant memory.

For example, Given input array `A = [1,1,2]`,

Your function should return length = 2, and `A` is now `[1,2]`.

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
# Remove Duplicates from Sorted Array
# Time Complexity: O(n)，Space Complexity: O(1)
class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        if len(nums) == 0:
            return 0

        slow = 0
        for fast in range(len(nums)):
            if nums[fast] != nums[slow]:
                slow += 1
                nums[slow] = nums[fast]

        return slow + 1
```

</TabItem>
<TabItem value="java">

```java
// Remove Duplicates from Sorted Array
// Time Complexity: O(n)，Space Complexity: O(1)
public class Solution {
    public int removeDuplicates(int[] nums) {
        if (nums.length == 0) return 0;

        int slow = 0;
        for (int fast = 0; fast < nums.length; fast++){
            if (nums[fast] != nums[slow])
                nums[++slow] = nums[fast];
        }
        return slow + 1;
    }
};
```

</TabItem>
<TabItem value="cpp">

```cpp
// Remove Duplicates from Sorted Array
// Time Complexity: O(n)，Space Complexity: O(1)
class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        if (nums.empty()) return 0;

        int slow = 0;
        for (int fast = 0; fast < nums.size(); fast++) {
            if (nums[fast] != nums[slow]) {
                nums[++slow] = nums[fast];
            }
        }
        return slow+1;
    }
};
```

</TabItem>
</Tabs>

### 相关题目

- [Remove Duplicates from Sorted Array II](remove-duplicates-from-sorted-array-ii.md)
- [Remove Element](remove-element.md)
- [Move Zeroes](move-zeroes.md)
- [Remove Duplicates from Sorted List](../linked-list/remove-duplicates-from-sorted-list.md)
