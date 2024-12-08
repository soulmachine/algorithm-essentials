---
title: Palindrome Number
---

### 描述

Determine whether an integer is a palindrome. Do this without extra space.

**Some hints:**

Could negative integers be palindromes? (ie, -1)

If you are thinking of converting the integer to string, note the restriction of using extra space.

You could also try reversing an integer. However, if you have solved the problem "Reverse Integer", you know that the reversed integer might overflow. How would you handle such case?

There is a more generic way of solving this problem.

### 分析

首先想到，可以利用上一题，将整数反转，然后与原来的整数比较，是否相等，相等则为 Palindrome 的。可是 reverse()会溢出。

正确的解法是，不断地取第一位和最后一位（10 进制下）进行比较，相等则取第二位和倒数第二位，直到完成比较或者中途找到了不一致的位。

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
<TabItem value="java">

```java
// Palindrome Number
// 时间复杂度O(1)，空间复杂度O(1)
public class Solution {
    public boolean isPalindrome(int x) {
        if (x < 0) return false;
        int d = 1; // divisor
        while (x / d >= 10) d *= 10;

        while (x > 0) {
            int q = x / d;  // quotient
            int r = x % 10;   // remainder
            if (q != r) return false;
            x = x % d / 10;
            d /= 100;
        }
        return true;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Palindrome Number
// 时间复杂度O(1)，空间复杂度O(1)
class Solution {
public:
    bool isPalindrome(int x) {
        if (x < 0) return false;
        int d = 1; // divisor
        while (x / d >= 10) d *= 10;

        while (x > 0) {
            int q = x / d;  // quotient
            int r = x % 10;   // remainder
            if (q != r) return false;
            x = x % d / 10;
            d /= 100;
        }
        return true;
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Palindrome Number
# 时间复杂度O(1)，空间复杂度O(1)
def isPalindrome(x: int) -> bool:
    if x < 0:
        return False
    d = 1  # divisor
    while x // d >= 10:
        d *= 10

    while x > 0:
        q = x // d  # quotient
        r = x % 10  # remainder
        if q != r:
            return False
        x = x % d // 10
        d //= 100
    return True
```

</TabItem>
</Tabs>

### 相关题目

- [Reverse Integer](reverse-integer.md)
- [Valid Palindrome](../dual-pointers/valid-palindrome.md)
