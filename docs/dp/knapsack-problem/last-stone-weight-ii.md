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

- 1 <= stones.length <= 30
- 1 <= stones[i] <= 100

### 分析

两块石头粉碎的过程，就是给每个石头赋值正号或者负号的过程，相当于把这些石头分为两组，使得两组的差值尽可能小，所以这是经典的集合划分 NP 完全问题，可以采用动态规划的方法求解。

### 代码

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

#### 方法 1

可以转换成 0-1 背包问题，更加简化，只有重量没有价值信息。每个物品 i 的重量为 `stones[i]`，价值为 0，背包能容纳的最大重量为`sum(stones)/2`。该问题就变成，选择若干物品，能否恰好填满背包？令 `f[i][j]`表示前 i 个物品能否填满容量为 j 的背包，则状态转移方程为:

$$f[i][j] = f[i-1][j] \lor f[i-1][j-W[i]]$$

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
// Last Stone Weight II
// 0-1 knapsack problem
// Time Complexity: O(n*W), Space Complexity: O(W)
class Solution {
    public int lastStoneWeightII(int[] stones) {
        int sum = 0;
        for(int i : stones) sum += i;

        int[] w = stones; // weight array
        int W = sum / 2; // maximum weight capacity of knapsack

        boolean[] f = new boolean[W + 1];
        f[0] = true; // initialize

        for(int i = 0; i < stones.length; i++) {
            for(int j = W; j >= w[i]; --j) {
                f[j] = f[j] || f[j-w[i]];
            }
        }

        for (int j = W; j >= 0; j--)
            if (f[j]) return sum - j*2;
        return -1;
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

#### 方法 2

可以转换成标准的 0-1 背包问题，每个物品 i 的重量为 `stones[i]`，价值也为`stones[i]`，背包能容纳的最大重量为`sum(stones)/2`。

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
// Last Stone Weight II
// 0-1 knapsack problem
// Time Complexity: O(n*W), Space Complexity: O(W)
class Solution {
    public int lastStoneWeightII(int[] stones) {
        int sum = 0;
        for(int i : stones) sum += i;

        int[] w = stones; // weight array
        int W = sum / 2; // maximum weight capacity of knapsack

        int[] f = new int[W + 1];
        f[0] = 0; // initialize

        for(int i = 0; i < stones.length; i++) {
            for(int j = W; j >= w[i]; --j) {
                f[j] = Math.max(f[j], f[j-w[i]]+w[i]);
            }
        }

        return sum - f[W]*2;
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

- [Partition Equal Subset Sum](partition-equal-subset-sum.md)
