---
title: Power of Three
---

### 描述

Given an integer, write a function to determine if it is a power of three.

**Follow up**:

Could you do it without using any loop / recursion?

### 分析

最简单的方法，不断除以 3，看最后能否得到 1。

如果不用循环和递归，那么就需要找数学方法了。最简单的，我们可以把该整数对 3 取对数，如果结果是整数，说明该整数是 3 的幂。

### 代码

```java
// Power of Three
// Time Complexity: O(1), Space Complexity: O(1)
public class Solution {
    public boolean isPowerOfThree(int n) {
        return (Math.log10(n) / Math.log10(3)) % 1 == 0;
    }
}
```
