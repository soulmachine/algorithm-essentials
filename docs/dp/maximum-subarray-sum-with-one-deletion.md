---
title: Maximum Sum Circular Subarray
---

### 描述

TODO

### 分析

令二维数组 `dp[i][0/1]`, `dp[i][0]`表示以`nums[i]`结尾的最大连续子数组和，`dp[i][1]`删除`nums[i]`最大连续子数组和。

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
class Solution {
    public int maximumSum(int[] arr) {
        int n = arr.length;
        if (n == 1) {
            return arr[0];
        }
        int[][] dp = new int[n][2];
        dp[0][1] = 0;
        dp[0][0] = arr[0];
        int res = Integer.MIN_VALUE;
        for (int i = 1; i < n; i++) {
            dp[i][0] = Math.max(dp[i - 1][0] + arr[i], arr[i]);
            dp[i][1] = Math.max(dp[i - 1][0], dp[i - 1][1] + arr[i]);
            res = Math.max(res, Math.max(dp[i][0], dp[i][1]));
        }
        return res;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// TODO
```

</TabItem>

<TabItem value="python">

```python
class Solution:
    def maximumSum(self, arr: List[int]) -> int:
        n = len(arr)
        if n == 1:
            return arr[0]
        dp = [[0] * 2 for _ in range(n)]
        dp[0][1] = 0
        dp[0][0] = arr[0]
        res = float('-inf')
        for i in range(1, n):
            dp[i][0] = max(dp[i - 1][0] + arr[i], arr[i])
            dp[i][1] = max(dp[i - 1][0], dp[i - 1][1] + arr[i])
            res = max(res, max(dp[i][0], dp[i][1]))
        return res
```

</TabItem>
</Tabs>

### 相关题目

- [Maximum Subarray](maximum-subarray.md)
- [Maximum Sum Circular Subarray](maximum-sum-circular-subarray.md)
