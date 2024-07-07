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
        slow = 0
        for fast in range(len(nums)):
            if nums[fast] != 0:
                nums[slow] = nums[fast]
                slow += 1
        for i in range(slow, len(nums)):
            nums[i] = 0
```

</TabItem>
<TabItem value="java">

```java
// Move Zeroes
// 双指针
// Time Complexity: O(n), Space Complexity: O(1)
public class Solution {
    public void moveZeroes(int[] nums) {
        int slow = 0;
        for (int fast = 0; fast < nums.length; ++fast) {
            if (nums[fast] != 0) {
                nums[slow++] = nums[fast];
            }
        }
        for (int i = slow; i < nums.length; ++i) {
            nums[i] = 0;
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
        int slow = 0;
        for (int fast = 0; fast < nums.size(); ++fast) {
            if (nums[fast] != 0) {
                swap(nums[slow++], nums[fast]);
            }
        }
    }
};
```

</TabItem>
</Tabs>

上面的代码实际上重复实现了`removeElement()`，所以本题实际上可以直接调用`removeElement()`，只是最后要把后半截设置为 0。s

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
        slow = self.removeElement(nums, 0)
        for i in range(slow, len(nums)):
            nums[i] = 0
```

</TabItem>
<TabItem value="java">

```java
// Move Zeroes
// 双指针
// Time Complexity: O(n), Space Complexity: O(1)
public class Solution {
    public void moveZeroes(int[] nums) {
        int slow = removeElement(nums, 0);
        for (int i = slow; i < nums.length; ++i) {
            nums[i] = 0;
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
        int slow = removeElement(nums, 0);
        for (int i = slow; i < nums.size(); ++i) {
            nums[i] = 0;
        }
    }
};
```

</TabItem>
</Tabs>

### 相关题目

- [Remove Duplicates from Sorted Array](remove-duplicates-from-sorted-array.md)
- [Remove Duplicates from Sorted Array II](remove-duplicates-from-sorted-array-ii.md)
- [Remove Element](remove-element.md)
- [Remove Duplicates from Sorted List](../linked-list/remove-duplicates-from-sorted-list.md)
