---
title: Power of Two
---

### 描述

Given an integer, write a function to determine if it is a power of two.

### 分析

如果是 2 的幂，则二进制的所有位中，有且仅有一个 1。

可以复用 "Number of 1 Bits" 中的函数，计算出 1 的个数，如果为 1，则返回 true, 不为 1，返回 false。

还有更巧妙的办法。如果一个数是 2 的幂，则它的二进制最高位必然为 1，其余为 0，此时如果我们减 1 的话，最高位降为 0，其余位变为 1，如果把两个数按位与，结果必然为 0。

### 代码

```java
// Power of Two
// Time Complexity: O(1), Space Complexity: O(1)
public class Solution {
    public boolean isPowerOfTwo(int n) {
        return n > 0 && (n & (n-1)) == 0;
    }
}
```
