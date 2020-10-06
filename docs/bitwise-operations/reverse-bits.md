---
title: Reverse Bits
---

### 描述

Reverse bits of a given 32 bits unsigned integer.

For example, given input `43261596` (represented in binary as `00000010100101000001111010011100`), return `964176192` (represented in binary as `00111001011110000010100101000000`).

**Follow up**: If this function is called many times, how would you optimize it?

### 分析

最简单直接的做法，从右向左把一位位取出来，添加到新生成的整数的最低位即可。

第二个简单的方法，左右不断交换位，直到相遇。

### 解法 1

```java
// Reverse Bits
// Time Complexity: O(logn), Space Complexity: O(1)
public class Solution {
    // you need treat n as an unsigned value
    public int reverseBits(int n) {
        int result = 0;
        for (int i = 0; i < 32; ++i) {
            if ((n & 1) == 1) {
                result = (result << 1) + 1;
            } else {
                result = result << 1;
            }
            n = n >> 1;
        }
        return result;
    }
}
```

### 解法 2

```java
// Reverse Bits
// Time Complexity: O(logn), Space Complexity: O(1)
public class Solution {
    // you need treat n as an unsigned value
    public int reverseBits(int n) {
        int left = 0;
        int right = 31;
        while (left < right) {
            // swap bit
            int x = (n >> left) & 1;
            int y = (n >> right) & 1;

            if (x != y) {
                n ^= (1 << left) | (1 << right);
            }
            ++left;
            --right;
        }
        return n;
    }
}
```
