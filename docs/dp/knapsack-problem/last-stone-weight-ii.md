---
title: Last Stone Weight II
---

### 描述

We have a collection of rocks, each rock has a positive integer weight.

Each turn, we choose **any two rocks** and smash them together. Suppose the stones have weights `x` and `y` with `x <= y`. The result of this smash is:

- If `x == y`, both stones are totally destroyed;
- If `x != y`, the stone of weight `x` is totally destroyed, and the stone of weight `y` has new weight `y-x`.

At the end, there is at most 1 stone left. Return the **smallest possible** weight of this stone (the weight is 0 if there are no stones left.)

**Example 1**:

> **Input**: [2,7,4,1,8,1]  
> **Output**: 1  
> **Explanation**:  
> We can combine 2 and 4 to get 2 so the array converts to [2,7,1,8,1] then,  
> we can combine 7 and 8 to get 1 so the array converts to [2,1,1,1] then,  
> we can combine 2 and 1 to get 1 so the array converts to [1,1,1] then,  
> we can combine 1 and 1 to get 0 so the array converts to [1] then that's the optimal value.

**Note**:

- $1 \leq stones.length \leq 30$
- $1 \leq stones[i] \leq 100$

### 分析

本题可以转换成标准的 0-1 背包问题，令每个物品$i$的重量$w_i$为 `stones[i]`，价值$v_i$也为`stones[i]`，背包能容纳的最大重量$W=\frac{1}{2}\sum_i w_i$。

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
# TODO
```

</TabItem>
<TabItem value="java">

```java
// Last Stone Weight II
// 0-1 knapsack problem
// Time Complexity: O(n*W), Space Complexity: O(W)
class Solution {
    public int lastStoneWeightII(int[] stones) {
        int sum = 0;
        for(int i : stones) sum += i;

        int[] w = stones; // weight array
        int W = sum / 2; // maximum weight capacity of knapsack

        int[] dp = new int[W + 1];
        dp[0] = 0; // base case

        for(int i = 0; i < stones.length; i++) {
            for(int j = W; j >= w[i]; --j) {
                dp[j] = Math.max(dp[j], dp[j-w[i]]+w[i]);
            }
        }

        return sum - dp[W]*2;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Last Stone Weight II
// 0-1 knapsack problem
// Time Complexity: O(n*W), Space Complexity: O(W)
class Solution {
public:
    int lastStoneWeightII(vector<int>& stones) {
        int sum = 0;
        for(int i : stones) sum += i;

        const vector<int>& w = stones; // weight array
        int W = sum / 2; // maximum weight capacity of knapsack

        vector<int> dp(W + 1);
        dp[0] = 0; // base case

        for(int i = 0; i < stones.size(); i++) {
            for(int j = W; j >= w[i]; --j) {
                dp[j] = max(dp[j], dp[j-w[i]]+w[i]);
            }
        }

        return sum - dp[W]*2;
    }
};
```

</TabItem>
</Tabs>

### 相关题目

- [Partition Equal Subset Sum](partition-equal-subset-sum.md)
