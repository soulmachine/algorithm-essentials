---
title: Target Sum
---

### 问题描述

You are given an integer array `nums` and an integer `target`.

You want to build an **expression** out of nums by adding one of the symbols `+` and `-` before each integer in nums and then concatenate all the integers.

For example, if `nums = [2, 1]`, you can add a `+` before 2 and a `-` before 1 and concatenate them to build the expression `+2-1`.

Return the number of different expressions that you can build, which evaluates to target.


**Example 1**:

> **Input**: nums = [1,1,1,1,1], target = 3  
> **Output**: 5  
> **Explanation**: There are 5 ways to assign symbols to make the sum of nums be target 3.  
> -1 + 1 + 1 + 1 + 1 = 3  
> +1 - 1 + 1 + 1 + 1 = 3  
> +1 + 1 - 1 + 1 + 1 = 3  
> +1 + 1 + 1 - 1 + 1 = 3  
> +1 + 1 + 1 + 1 - 1 = 3

**Example 2**:

> **Input**: nums = [1], target = 1  
> **Output**: 1

**Constraints**:

* 1 <= nums.length <= 20
* 0 <= nums[i] <= 1000
* 0 <= sum(nums[i]) <= 1000
* -1000 <= target <= 1000

### 分析

本题可以转化为一个0-1背包问题，且恰好装满。令每个物品$i$的重量$w_i$为`nums[i]`，价值$v_i$为0，背包能容纳的最大重量$W=\frac{1}{2}(\sum_i w_i + target)$，该问题就变成，恰好填满背包有多少种不同的组合？

给背包内的物品赋予`+`号，背包外的物品赋予`-`号。背包装满后，背包内的物品重量之和是$\frac{1}{2}(\sum_i w_i + target)$，背包外的物品重量之和是$\frac{1}{2}(\sum_i w_i - target)$，二者相减，刚好是`target`。

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
// Target Sum
// Time Complexity: O(N*W)
// Space Complexity: O(W)
class Solution {
public:
    int findTargetSumWays(vector<int>& nums, int target) {
        const int sum = std::accumulate(nums.begin(), nums.end(), 0);
        if ((sum+target)%2 == 1) return 0;
        if ((sum + target) < 0) return 0;

        const int W = (sum+target)/2; // knapsack capacity
        vector<int> dp(W+1, 0);
        dp[0] = 1; // base case
 
        for (auto num: nums) {
            for (int j = W; j >= num; j--) {
                dp[j] += dp[j-num];
            }
        }

        return dp[W];
    }
};
```

</TabItem>
</Tabs>
