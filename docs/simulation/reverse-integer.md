---
title: Reverse Integer
---

### 描述

Reverse digits of an integer.

Example1: x = 123, return 321

Example2: x = -123, return -321

**Have you thought about this?**

Here are some good questions to ask before coding. Bonus points for you if you have already thought through this!

If the integer's last digit is 0, what should the output be? ie, cases such as 10, 100.

Did you notice that the reversed integer might overflow? Assume the input is a 32-bit integer, then the reverse of 1000000003 overflows. How should you handle such cases?

Throw an exception? Good, but what if throwing an exception is not an option? You would then have to re-design the function (ie, add an extra parameter).

### 分析

短小精悍的题，代码也可以写的很短小。

### 代码

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

<Tabs
defaultValue="java"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// Reverse Integer
// 时间复杂度O(logn)，空间复杂度O(1)
// 考虑 1.负数的情况 2. 溢出的情况(正溢出&&负溢出，比如 x = -2147483648(即-2^31) )
public class Solution {
    public int reverse(int x) {
        long r = 0;
        long t = x;
        t = t > 0 ? t : -t;
        for (; t > 0; t /= 10)
            r = r * 10 + t % 10;

        boolean sign = x > 0 ? false: true;
        if (r > 2147483647 || (sign && r > Integer.MAX_VALUE)) {
            return 0;
        } else {
            if (sign) {
                return (int)-r;
            } else {
                return (int)r;
            }
        }
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Reverse Integer
// 时间复杂度O(logn)，空间复杂度O(1)
// 考虑 1.负数的情况 2. 溢出的情况(正溢出&&负溢出，比如 x = -2147483648(即-2^31) )
class Solution {
public:
    int reverse (int x) {
        long long r = 0;
        long long t = x;
        t = t > 0 ? t : -t;
        for (; t; t /= 10)
            r = r * 10 + t % 10;

        bool sign = x > 0 ? false: true;
        if (r > 2147483647 || (sign && r > 2147483648)) {
            return 0;
        } else {
            if (sign) {
                return -r;
            } else {
                return r;
            }
        }
    }
};
```

</TabItem>
</Tabs>

### 相关题目

- [Palindrome Number](palindrome-number.md)
