---
title: Ugly Number II
---

### 描述

Write a function to find the `n`-th ugly number.

Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. For example, 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10 ugly numbers.

Note that 1 is typically treated as an ugly number.

**Hint**:

1. The naive approach is to call `isUgly()` for every number until you reach the `n`-th one. Most numbers are not ugly. Try to focus your effort on generating only the ugly ones.
1. An ugly number must be multiplied by either 2, 3, or 5 from a smaller ugly number.
1. The key is how to maintain the order of the ugly numbers. Try a similar approach of merging from three sorted lists: $$L_1$$, $$L_2$$, and $$L_3$$.
1. Assume you have $$U_k$$, the $$k^{th}$$ ugly number. Then $$U_{k+1}$$ must be $$Min(L_1 * 2, L_2 * 3, L_3 * 5)$$.

### 分析

根据提示中的信息，我们知道丑陋序列可以拆分成 3 个子序列：

1. 1x2, 2x2, 3x2, 4x2, 5x2, ...
1. 1x3, 2x3, 3x3, 4x3, 5x3, ...
1. 1x5, 2x5, 3x5, 4x5, 5x5, ...

每次从三个列表中取出当前最小的那个加入序列，直到第`n`个为止。

### 代码

```java
// Ugly Number II
// Time complexity: O(n), Space complexity: O(n)
// TODO: 没必要保存所有的ugly number, 空间可以优化到O(1)
public class Solution {
    public int nthUglyNumber(int n) {
        final int[] nums = new int[n];
        nums[0] = 1; // 1 is the first ugly number
        int i2 = 0, i3 = 0, i5 = 0;

        for (int i = 1; i < n; ++i) {
            int u2 = nums[i2] * 2, u3 = nums[i3] * 3, u5 = nums[i5] * 5;
            int ugly = Math.min(u2, Math.min(u3, u5));
            nums[i] = ugly;

            // Do NOT use if else if here, otherwise duplicated numbers may happen
            if (ugly == u2) ++i2;
            if (ugly == u3) ++i3;
            if (ugly == u5) ++i5;

        }
        return nums[n - 1];
    }
}
```

### 相关题目

- [Ugly Number](ugly-number.md)
- [Super Ugly Number](super-ugly-number.md)
