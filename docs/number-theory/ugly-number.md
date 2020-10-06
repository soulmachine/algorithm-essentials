---
title: Ugly Number
---

### 描述

Write a function to check whether a given number is an ugly number.

Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. For example, 6, 8 are ugly while 14 is not ugly since it includes another prime factor 7.

Note that 1 is typically treated as an ugly number.

### 分析

思路很简单，把`n`里面的 2,3,5 全部消掉，看最后能不能剩下 1。

### 代码

```java
// Ugly Number
// Time complexity: O(logn), Space complexity: O(1)
public class Solution {
    public boolean isUgly(int num) {
        if (num == 0) return false;
        while (num % 2 == 0) num /= 2;
        while (num % 3 == 0) num /= 3;
        while (num % 5 == 0) num /= 5;
        return num == 1;
    }
}
```

### 相关题目

- [Ugly Number II](ugly-number-ii.md)
