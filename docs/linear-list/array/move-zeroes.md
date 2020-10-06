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

```java
// Move Zeroes
// Time Complexity: O(n), Space Complexity: O(1)
public class Solution {
    public void moveZeroes(int[] nums) {
        int index = 0;
        for (int i = 0; i < nums.length; ++i) {
            if (nums[i] != 0) {
                nums[index++] = nums[i];
            }
        }
        for (int i = index; i < nums.length; ++i) {
            nums[i] = 0;
        }
    }
}
```

### 相关题目

- [Remove Element](remove-element.md)
