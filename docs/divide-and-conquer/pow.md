---
title: Pow(x,n)
---

### 描述

Implement `pow(x, n)`.

### 分析

二分法，$$x^n = x^{n/2} \times x^{n/2} \times x^{n\%2}$$

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
// Pow(x, n)
// 二分法，$x^n = x^{n/2} * x^{n/2} * x^{n\%2}$
// 时间复杂度O(logn)，空间复杂度O(1)
public class Solution {
    public double myPow(double x, int n) {
        if (n < 0) return 1.0 / power(x, -n);
        else return power(x, n);
    }
    private static double power(double x, int n) {
        if (n == 0) return 1;
        double v = power(x, n / 2);
        if (n % 2 == 0) return v * v;
        else return v * v * x;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Pow(x, n)
// 二分法，$x^n = x^{n/2} * x^{n/2} * x^{n\%2}$
// 时间复杂度O(logn)，空间复杂度O(1)
class Solution {
public:
    double myPow(double x, int n) {
        long long N = n; // to prevent overflow
        if (N < 0) return power(1/x, -N);
        else return power(x, N);
    }
private:
    double power(double x, int n) {
        if (n == 0) return 1;
        double v = power(x, n / 2);
        if (n % 2 == 0) return v * v;
        else return v * v * x;
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Pow(x, n)
# 二分法，$x^n = x^{n/2} * x^{n/2} * x^{n\%2}$
# 时间复杂度O(logn)，空间复杂度O(1)
class Solution:
    def myPow(self, x: float, n: int) -> float:
        if n < 0:
            return 1.0 / self.power(x, -n)
        else:
            return self.power(x, n)

    def power(self, x: float, n: int) -> float:
        if n == 0:
            return 1
        v = self.power(x, n // 2)
        if n % 2 == 0:
            return v * v
        else:
            return v * v * x
```

</TabItem>
</Tabs>

### 相关题目

- [Sqrt(x)](sqrt.md)
