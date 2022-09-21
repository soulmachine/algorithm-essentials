---
title: Coin Change
---

### 问题描述

Given an integer array `coins` representing coins of different denominations and an integer `amount` representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return `-1`.

You may assume that you have an infinite number of each kind of coin.

**Example 1**:

> **Input**: coins = [1,2,5], amount = 11  
> **Output**: 3  
> **Explanation**: 11 = 5 + 5 + 1

**Example 2**:

> **Input**: coins = [2], amount = 3  
> **Output**: -1

**Example 3**:

> **Input**: coins = [1], amount = 0  
> **Output**: 0

**Constraints**:

* 1 <= coins.length <= 12
* 1 <= coins[i] <= $2^{31}$ - 1
* 0 <= amount <= $10^4$

### 分析

先判断本题是否满足动规的两个条件，假设硬币面值为 1,2,5，：

* 如果知道了凑出金额10所需要的组合数，那么，凑出金额11, 12, 15所需要的最少硬币数都只需要在金额10的答案上加1，因此本题具有最优子结构的性质。
* 金额10的和金额11都可能用到金额9这个子问题，因此本题具有重叠子问题的性质。

可见本题满足动态规划的两个条件，因此可以使用动态规划来解决本题。

* 由于每种硬币的数量是无限的，当取了某种硬币后，该硬币的数量还是无限个，没有变化，变化的仅仅是目标金额减去该硬币的面值，因此本题的变量只有一个，就是目标金额 `amount`。
* 令函数`f(j)`表示凑出金额 `j` 所需要的最少硬币数，那么可知原子情况为 `f(0)=0`。
* 每次决策时，可以从所有硬币中选择一枚，即可选择的动作有`N`种，`N`是硬币的种类数。

综上，可得状态转移方程为：

$$
f(j)=\begin{cases}
0 & j=0 \\
\min\left\{f(j),f(j-coin)+1\right\} & coin \in coins
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
// Time Complexity: O(N*amount)
// Space Complexity: O(amount)
class Solution {
public:
    int coinChange(vector<int>& coins, int amount) {
        // choose amount+1 over INT_MAX to avoid overflow
        vector<int> dp(amount+1, amount+1);
        dp[0] = 0; // base case

        for (auto coin : coins) {
            for (int j=coin; j <= amount; j++) {
                dp[j] = min(dp[j], dp[j-coin] + 1);
            }
        }
        return dp[amount] == amount+1 ? -1 : dp[amount];
    }
};
```

</TabItem>
</Tabs>

在初始化 `dp` 数组时，本题求的是最少硬币数，因此要初始化为 `INT_MAX`，不过由于代码后面有+1的操作，`INT_MAX+1` 会溢出，因此用`amount+1`代替`INT_MAX`。当目标金额全部是由面值为1的硬币凑起来的时候，所需硬币数最大，为`amount`, 因此`amount+1`一定是一个无效的大数。

最后返回的时候，如果 `dp[amount]` 仍然是 `amount+1`，说明没有解，返回 `-1` 即可。
