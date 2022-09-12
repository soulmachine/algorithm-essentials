---
title: Rotate Array
---

### 描述

Rotate an array of `n` elements to the right by `k` steps.

For example, with `n = 7` and `k = 3`, the array `[1,2,3,4,5,6,7]` is rotated to `[5,6,7,1,2,3,4]`.

Note:
Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.

### 分析

最简单的方法，开一个`k`长的数组，先把右边`k`个元素存入这个临时数组，然后把数组中的前`n-k`右移`k`位，再把临时数组的`k`个元素存入到原始数组左边。时间复杂度`O(n)`，空间复杂度`O(k)`。

第二个简单的方法，先实现一个函数，把数组右移一位，调用这个函数`k`次即可。时间复杂度`O(n*k)`，空间复杂度`O(1)`。

第三个方法，先将数组分为两段，前`n-k`个为一段，后`k`个元素作为第二段，将第一段 reverse, 第二段 reverse, 然后将整个数组 reverse, 这样经过三轮 reverse，就完成了循环右移。时间复杂度`O(n)`，空间复杂度`O(1)`。

### 代码

#### 三轮 reverse

```java
// Rotate Array
// Time Complexity: O(n), Space Complexity: O(1)
public class Solution {
    public void rotate(int[] nums, int k) {
        k %= nums.length;
        reverse(nums, 0, nums.length - k);
        reverse(nums, nums.length - k, nums.length);
        reverse(nums, 0, nums.length);
    }
    private static void reverse(int[] nums, int begin, int end) {
        int left = begin;
        int right = end - 1;
        while (left < right) {
            // swap
            int tmp = nums[left];
            nums[left] = nums[right];
            nums[right] = tmp;
            ++left;
            --right;
        }
    }
}
```
