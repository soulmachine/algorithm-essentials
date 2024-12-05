---
title: Perfect Squares
---

### 问题描述

Given an integer `n`, return the least number of perfect square numbers that sum to `n`.

A **perfect square** is an integer that is the square of an integer; in other words, it is the product of some integer with itself. For example, 1, 4, 9, and 16 are perfect squares while 3 and 11 are not.

**Example 1**:

> **Input**: n = 12  
> **Output**: 3  
> **Explanation**: 12 = 4 + 4 + 4

**Example 2**:

> **Input**: n = 13  
> **Output**: 2  
> **Explanation**: 13 = 4 + 9

**Constraints**:

* 1 \leq n \leq 10^4

### 分析

先判断本题是否满足动规的两个条件，

* 例如 `n=12` 这个问题，它的最优解是`12 = 4 + 4 + 4`，那么 `n=8` 这个子问题的答案就是`n=12`的答案减1，即2，可见父问题的最优解包含了子问题的最优解，因此本题具有最优子结构的性质。
* `n=12`依赖`n=4`这个子问题，`n=8`也依赖`n=4`这个子问题，因此本题具有重叠子问题的性质。

可见本题满足动态规划的两个条件，因此可以使用动态规划来解决本题。

由于平方数可以使用无限次，本题是一个完全背包问题，令`f(j)`表示凑出总和`j`所需要的平方数的最少个数，可得动态转移方程为：

$$
f(j)=\begin{cases}
0 & j=0 \\
\min\left\{f(j),f(j-i*i)+1\right\} & 1 \leq i^2 \leq n
\end{cases}
$$

### 代码

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

<Tabs
defaultValue="cpp"
values={[
{ label: 'Python', value: 'python', },
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="python">

```python
TODO
```

</TabItem>
<TabItem value="java">

```java
TODO
```

</TabItem>
<TabItem value="cpp">

```cpp
// Time Complexity: O(n*sqrt(n))
// Space Complexity: O(n)
class Solution {
public:
    int numSquares(int n) {
        const int N = floor((double)sqrt(n));
        vector<int> dp(n+1, n+1);
        dp[0] = 0; // base case

        for (int i = 1; i * i <= n; ++i) {
            for (int j = i*i; j <= n; j++) {
                dp[j] = min(dp[j], dp[j-i*i] + 1);
            }
        }

        return dp[n];
    }
};
```

</TabItem>
</Tabs>

在初始化 `dp` 数组时，本题求的是最少数目，因此要初始化为 `INT_MAX`，不过由于代码后面有+1的操作，`INT_MAX+1` 会溢出，因此用`n+1`代替`INT_MAX`。当全部用1来凑出`n`时，所需数目最大，为`n`, 因此`n+1`一定是一个无效的大数。

本题的原子问题(base case)是，当 `n`为完全平方数，则 `dp[n]=1`。其实0也是个完全平方数，但是一旦用到了0，那肯定不是最优解，所以 `dp[0]`初始化为0而不是1，是为了让其他的完全平方数，例如 1, 4, 9，在内层循环中，有机会被初始化为1。
