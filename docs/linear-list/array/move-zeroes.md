---
title: Move Zeroes
---

### 描述

Given an array `nums`, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

For example, given `nums = [0, 1, 0, 3, 12]`, after calling your function, nums should be `[1, 3, 12, 0, 0]`.

**Note**:

1. You must do this in-place without making a copy of the array.
1. Minimize the total number of operations.

### 分析

这题跟 "Remove Element" 思路一模一样，只是最后要把后半截设置为 0。

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
# Move Zeroes
# 双指针
# Time Complexity: O(n), Space Complexity: O(1)
class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        i = 0
        for j in range(len(nums)):
            if nums[j] != 0:
                nums[i] = nums[j]
                i += 1
        for j in range(i, len(nums)):
            nums[j] = 0
```

</TabItem>
<TabItem value="java">

```java
// Move Zeroes
// 双指针
// Time Complexity: O(n), Space Complexity: O(1)
public class Solution {
    public void moveZeroes(int[] nums) {
        int i = 0;
        for (int j = 0; j < nums.length; ++j) {
            if (nums[j] != 0) {
                nums[i++] = nums[j];
            }
        }
        for (int j = i; j < nums.length; ++j) {
            nums[j] = 0;
        }
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Move Zeroes
// 双指针
// Time Complexity: O(n), Space Complexity: O(1)
class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        int i = 0;
        for (int j = 0; j < nums.size(); ++j) {
            if (nums[j] != 0) {
                swap(nums[i++], nums[j]);
            }
        }
    }
};
```

</TabItem>
</Tabs>

### 相关题目

- [Remove Element](remove-element.md)
