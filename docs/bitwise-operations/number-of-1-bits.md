---
title: Number of 1 Bits
---

### 描述

Write a function that takes an unsigned integer and returns the number of ’1' bits it has (also known as the Hamming weight).

For example, the 32-bit integer `11` has binary representation `00000000000000000000000000001011`, so the function should return 3.

### 分析

最直接的方法，做 32 次右移，统计出 1 的个数。

第二个方法，来自 "Hacker's Delight" 这本书。

使用 Java 解题时，需要注意：

1. 输入值 n 可能为负数，但应视其为无符号整数，因为 Java 中实际上是没有无符号整数的
2. 使用无符号右移操作符`>>>`，可以忽略符号位

### 解法 1

```java
// Number of 1 Bits
// Time Complexity: O(32), Space Complexity: O(1)
public class Solution {
    // you need to treat n as an unsigned value
    public int hammingWeight(int n) {
        int count = 0;
        for (int i = 0; i < 32; ++i) {
            count += n & 1;
            n >>>= 1;
        }
        return count;
    }
}
```

### 解法 2

```java
// Number of 1 Bits
// Time Complexity: O(number of 1), Space Complexity: O(1)
public class Solution {
    // you need to treat n as an unsigned value
    public int hammingWeight(int n) {
        int count = 0;
        while (n != 0) {
            ++count;
            n &= n - 1;
        }
        return count;
    }
}
```
