---
title: Combination Sum IV
---

### 问题描述

Given an array of distinct integers `nums` and a target integer `target`, return the number of possible combinations that add up to `target`.

The test cases are generated so that the answer can fit in a 32-bit integer.


**Example 1**:

> **Input**: nums = [1,2,3], target = 4  
> **Output**: 7  
> **Explanation**: The possible combination ways are:  
> (1, 1, 1, 1)  
> (1, 1, 2)  
> (1, 2, 1)  
> (1, 3)  
> (2, 1, 1)  
> (2, 2)  
> (3, 1)  
> Note that different sequences are counted as different combinations.

**Example 2**:

> **Input**: nums = [9], target = 3  
> **Output**: 0

**Constraints**:

* $1 \leq nums.length \leq 200$
* $1 \leq nums[i] \leq 1000$
* Every element is unique
* $0 \leq target \leq 1000$

### 分析

本题与[Coin Change II](./coin-change-ii.md)很类似，不过求的是排列数而不是组合数。

求排列数的时候，必须是**外层for遍历背包，内层for循环遍历物品**。

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
// Combination Sum IV
// Time Complexity: O(n*target), Space Complexity: O(target)
class Solution {
public:
    int combinationSum4(vector<int>& nums, int target) {
        vector<unsigned long int> dp(target + 1);
        dp[0] = 1; // base case

        for (int j = 0; j <= target; j++) {
            for(int w : nums) {
                if (j >=w) {
                    dp[j] += dp[j-w];
                }
            }
        }
        return dp[target];
    }
};
```

</TabItem>
</Tabs>
