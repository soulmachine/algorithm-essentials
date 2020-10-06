---
title: Missing Number
---

### 描述

Given an array containing `n` distinct numbers taken from `0, 1, 2, ..., n`, find the one that is missing from the array.

For example,

Given nums = `[0, 1, 3]` return `2`.

**Note**:

Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?

### 分析

本题的意思是，从 1 到 n 的整数，其中某个数丢失了，替代它的是 0。要我们找出这个丢失的数。

方法 1，我们可以用公式计算出从 1 到 n 的和，减去实际数组的总和，差值就是那个丢失的数。

方法 2，利用异或位运算，把数组中的每一个数，与 1 到 n 进行按位异或，最后剩下的，就是丢失的数。

方法 3，二分查找。首先把数组排序，设中间元素为`nums[mid]`，如果`nums[mid]`的值大于其下标，说明丢失的数字在左边，反之则在右边。时间复杂度`O(nlogn)`，比前面两个方法慢，但是如果题目给的数组是事先排好序的，那么复杂度就是`O(log n)`，所以这个方法还是很有意义的。

### 解法 1

```java
// Missing Number
// Time Complexity: O(n), Space Complexity: O(1)
public class Solution {
    public int missingNumber(int[] nums) {
        int sum = 0;
        for (int x : nums) {
            sum += x;
        }
        final int n = nums.length;
        final int sumExpected = (n * (n + 1)) / 2;
        return sumExpected - sum;
    }
}
```

### 解法 2

```java
// Missing Number
// Time Complexity: O(n), Space Complexity: O(1)
public class Solution {
    public int missingNumber(int[] nums) {
        int result = 0;
        for (int i = 0; i < nums.length; ++i) {
            result ^= (i+1) ^ nums[i];
        }
        return result;
    }
}
```

### 解法 3

```java
// Missing Number
// Time Complexity: O(nlogn), Space Complexity: O(1)
public class Solution {
    public int missingNumber(int[] nums) {
        Arrays.sort(nums);
        int begin = 0;
        int end = nums.length;
        while (begin != end) {
            final int mid = begin + (end - begin) / 2;
            if (mid < nums[mid]) end = mid;
            else begin = mid + 1;
        }
        return end;
    }
}
```
