---
title: Partition Equal Subset Sum
---

### 描述

Given a **non-empty** array nums containing **only positive integers**, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.

**Example 1**:

> **Input**: nums = [1,5,11,5] > **Output**: true
> **Explanation**: The array can be partitioned as [1, 5, 5] and [11].

**Example 2**:

> **Input**: nums = [1,2,3,5] > **Output**: false
> **Explanation**: The array cannot be partitioned into equal sum subsets.

**Constraints**:

- 1 <= nums.length <= 200
- 1 <= nums[i] <= 100

### 分析

可以转换成 0-1 背包问题，更加简化，只有重量没有价值信息。每个物品 i 的重量为 `nums[i]`，价值为 0，背包能容纳的最大重量为`sum(nums)/2`。该问题就变成，选择若干物品，能否恰好填满背包？令 `f[i][j]`表示前 i 个物品能否填满容量为 j 的背包，则状态转移方程为:

$$f[i][j] = f[i-1][j] \lor f[i-1][j-W[i]]$$

### 代码

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

<Tabs
defaultValue="java"
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
// Partition Equal Subset Sum
// 0-1 knapsack problem
// Time Complexity: O(n*W), Space Complexity: O(W)
class Solution {
    public boolean canPartition(int[] nums) {
        int sum = 0;
        for(int i : nums) sum += i;
        if(sum % 2 != 0) return false;

        int[] w = nums; // weight array
        int W = sum / 2; // maximum weight capacity of knapsack

        boolean[] f = new boolean[W + 1];
        f[0] = true; // initialize

        for(int i = 0; i < nums.length; i++) {
            for(int j = W; j >= w[i]; --j) {
                f[j] = f[j] || f[j-w[i]];
            }
        }
        return f[W];
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// TODO
```

</TabItem>
</Tabs>

### 相关题目

- [Last Stone Weight II](last-stone-weight-ii.md)
