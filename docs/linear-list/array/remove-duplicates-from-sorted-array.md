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
defaultValue="java"
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

        i = 0
        for j in range(1, len(nums)):
            if nums[j] != nums[i]:
                i += 1
                nums[i] = nums[j]

        return i + 1
```

</TabItem>
<TabItem value="java">

```java
// Remove Duplicates from Sorted Array
// Time Complexity: O(n)，Space Complexity: O(1)
public class Solution {
    public int removeDuplicates(int[] nums) {
        if (nums.length == 0) return 0;

        int len = 1;
        for (int i = 1; i < nums.length; i++){
            if (nums[i] != nums[len - 1])
                nums[len++] = nums[i];
        }
        return len;
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

        int len = 1;
        for (int i = 1; i < nums.size(); i++) {
            if (nums[i] != nums[len-1])
                nums[len++] = nums[i];
        }
        return len;
    }
};
```

</TabItem>
</Tabs>

### 相关题目

- [Remove Duplicates from Sorted Array II](remove-duplicates-from-sorted-array-ii.md)
