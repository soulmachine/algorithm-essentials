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
        i = 0
        for j in range(len(nums)):
            if nums[j] != target:
                nums[i] = nums[j]
                i += 1
        return i
```

</TabItem>
<TabItem value="java">

```java
// Remove Element
// 双指针
// Time Complexity: O(n), Space Complexity: O(1)
public class Solution {
    public int removeElement(int[] nums, int target) {
        int i = 0;
        for (int j = 0; j < nums.length; ++j) {
            if (nums[j] != target) {
                nums[i++] = nums[j];
            }
        }
        return i;
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
        int i = 0;
        for (int j = 0; j < nums.size(); ++j) {
            if (nums[j] != target) {
                nums[i++] = nums[j];
            }
        }
        return i;
    }
};
```

</TabItem>
</Tabs>

### 相关题目

- [Move Zeroes](move-zeroes.md)
