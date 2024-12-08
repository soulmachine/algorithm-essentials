---
title: Coin Change II
---

### 问题描述

Given an integer array `coins` representing coins of different denominations and an integer `amount` representing a total amount of money.

Return the number of combinations that make up that amount. If that amount of money cannot be made up by any combination of the coins, return 0.

You may assume that you have an infinite number of each kind of coin.

The answer is guaranteed to fit into a signed 32-bit integer.


**Example 1**:

> **Input**: amount = 5, coins = [1,2,5]  
> **Output**: 4  
> **Explanation**: there are four ways to make up the amount:  
> 5=5  
> 5=2+2+1  
> 5=2+1+1+1  
> 5=1+1+1+1+1

**Example 2**:

> **Input**: amount = 3, coins = [2]  
> **Output**: 0  
> **Explanation**: the amount of 3 cannot be made up just with coins of 2.

**Example 3**:

> **Input**: amount = 10, coins = [10]  
> **Output**: 1

**Constraints**:

* $1 \leq coins.length \leq 300$
* $1 \leq coins[i] \leq 5000$
* Each coin is unique
* $0 \leq amount \leq 5000$

### 分析

本题与[Coin Change](./coin-change.md)很类似，唯一的变化是本题要求的是组合数，而不是最小的硬币数。

令函数`f(j)`表示可以凑出金额 `j`的组合数，每新增一个硬币，就多了一条到达`j`的路径，因此状态转移方程如下：

$$
f(j)=\begin{cases}
1 & j=0 \\
f(j)+f(j-coin) & coin \in coins
\end{cases}
$$

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
    int change(int amount, vector<int>& coins) {
        vector<int> dp(amount + 1, 0);
        dp[0] = 1;
        for (auto coin : coins) {
            for (int j = coin; j <= amount; ++j) {
                dp[j] += dp[j - coin];
            }
        }
        return dp[amount];
    }
};
```

</TabItem>
</Tabs>
