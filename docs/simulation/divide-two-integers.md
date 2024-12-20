---
title: Divide Two Integers
---

### 描述

Divide two integers without using multiplication, division and mod operator.

### 分析

不能用乘、除和取模，那剩下的，还有加、减和位运算。

最简单的方法，是不断减去被除数。在这个基础上，可以做一点优化，每次把被除数翻倍，从而加速。

注意，写代码的时候，禁止使用 long.

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
// Divide Two Integers
// 时间复杂度O(logn)，空间复杂度O(1)
public class Solution {
    public int divide(int dividend, int divisor) {
        if(dividend == 0) return 0;
        if (divisor == 0) return Integer.MAX_VALUE;

        // 当 dividend = INT_MIN，divisor = -1时，结果会溢出
        if (dividend == Integer.MIN_VALUE) {
            if (divisor == -1) return Integer.MAX_VALUE;
            else if (divisor < 0)
                return 1 + divide(dividend - divisor, divisor);
            else
                return - 1 + divide((dividend + divisor), divisor);
        }
        if(divisor == Integer.MIN_VALUE){
            return dividend == divisor ? 1 : 0;
        }

        int a = dividend > 0 ? dividend : -dividend;
        int b = divisor > 0 ? divisor : -divisor;

        int result = 0;
        while (a >= b) {
            int c = b;
            for (int i = 0; a >= c;) {
                a -= c;
                result += 1 << i;
                if (c < Integer.MAX_VALUE / 2) { // prevent overflow
                    ++i;
                    c <<= 1;
                }
            }
        }

        return ((dividend^divisor) >> 31) != 0 ? (-result) : (result);
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Divide Two Integers
// 时间复杂度O(logn)，空间复杂度O(1)
class Solution {
public:
    int divide(int dividend, int divisor) {
        if (dividend == 0) return 0;
        if (divisor == 0) return INT_MAX;

        // 当 dividend = INT_MIN，divisor = -1时，结果会溢出
        if (dividend == INT_MIN) {
            if (divisor == -1) return INT_MAX;
            else if (divisor < 0)
                return 1 + divide(dividend - divisor, divisor);
            else
                return - 1 + divide((dividend + divisor), divisor);
        }
        if(divisor == INT_MIN){
            return dividend == divisor ? 1 : 0;
        }

        int a = dividend > 0 ? dividend : -dividend;
        int b = divisor > 0 ? divisor : -divisor;

        int result = 0;
        while (a >= b) {
            int c = b;
            for (int i = 0; a >= c;) {
                a -= c;
                result += 1 << i;
                if (c < INT_MAX / 2) { // prevent overflow
                    ++i;
                    c <<= 1;
                }
            }
        }

        return ((dividend^divisor) >> 31) ? (-result) : (result);
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Divide Two Integers
# 时间复杂度O(logn)，空间复杂度O(1)
class Solution:
    def divide(self, dividend: int, divisor: int) -> int:
        if dividend == 0:
            return 0
        if divisor == 0:
            return 2**31 - 1

        # 当 dividend = INT_MIN，divisor = -1时，结果会溢出
        if dividend == -2**31:
            if divisor == -1:
                return 2**31 - 1
            elif divisor < 0:
                return 1 + self.divide(dividend - divisor, divisor)
            else:
                return -1 + self.divide(dividend + divisor, divisor)

        if divisor == -2**31:
            return 1 if dividend == divisor else 0

        a = dividend if dividend > 0 else -dividend
        b = divisor if divisor > 0 else -divisor

        result = 0
        while a >= b:
            c = b
            i = 0
            while a >= c:
                a -= c
                result += 1 << i
                if c < (2**31 - 1) // 2:  # prevent overflow
                    i += 1
                    c <<= 1

        return -result if ((dividend ^ divisor) >> 31) != 0 else result
```

</TabItem>
</Tabs>
