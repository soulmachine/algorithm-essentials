---
title: Factorial Trailing Zeroes
---

### 描述

Given an integer `n`, return the number of trailing zeroes in `n!`.

Note: Your solution should be in logarithmic time complexity.

### 分析

对任意一个正整数 n 进行质因数分解，$$n = 2^x*3^y*5^z...$$ ，末尾 0 的个数 M 与 2 和 5 的个数即 X、Z 有关，每一对 2 和 5 都可以得到 10，故`M=min(X,Z)`。又因为能被 2 整除的数出现的频率要比能被 5 整除的数出现的频率高，所以`M=Z`。所以只要计算出 Z，就可以得到`n!`的末尾 0 的个数。

### 解法 1

```java
// Factorial Trailing Zeroes
// TLE
// Time Complexity: O(nlogn), Space Complexity: O(1)
public class Solution {
    public int trailingZeroes(int n) {
        int result = 0;

        for (int i = 1; i <= n; ++i) {
            int j = i;
            while (j % 5 == 0) {
                ++result;
                j /= 5;
            }
        }
        return result;
    }
}
```

### 解法 2

上面的解法会超时，可以优化一下。

可以用公式计算出末尾 0 的个数，$$Z=N/5 + N/5^2 + N/5^3 + ...$$ ，$$N/5$$ 表示从 1 到 N 中能被 5 整除的数的个数，由于每个数都能贡献一个 5，意味着能贡献一个 0。$$N/5^2$$ 表示从 1 到 N 中能被 $$5^2$$ 整除的数的个数，每个数都能贡献 2 个 5，意味着能贡献两个 0，不过由于其中一次已经包含在 $$N/5$$ 中了，只能再贡献一个 0，依次类推。

```java
// Factorial Trailing Zeroes
// Time Complexity: O(logn), Space Complexity: O(1)
public class Solution {
    public int trailingZeroes(int n) {
        int result = 0;

        while (n > 0) {
            result += n / 5;
            n /= 5;
        }
        return result;
    }
}
```
