---
title: Longest Arithmetic Subsequence
---

### 描述

TODO

### 分析

令 `f(i, d)`表示以`nums[i]`结尾的差值为`d`的最长等差数列的长度，则状态转移方程为

$$
f(i,d)=\begin{cases}
1 & d=0 \\
\max\left\{f(j, d)+1\right\} & 0 <= j < i
\end{cases}
$$

在实现代码时要注意，由于等差数列的差值有可能是负数，而数组的下标不能是负数，所以需要处理一下，题目限定了数字范围为0到 500 之间，所以差值的范围就是 -500 到 500，可以给差值加上个500，这样差值范围就是 0 到 1000 了，二维 dp 数组的大小为 `n * 1001`。

### 代码

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

<Tabs
defaultValue="cpp"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// TODO
```

</TabItem>
<TabItem value="cpp">

```cpp
// Longest Arithmetic Subsequence
// Time complexity: O(N^2)
// Space complexity: O(1001*N)
class Solution {
public:
    int longestArithSeqLength(vector<int>& nums) {
        const int MAX_DIFF = 500;
        const int N = nums.size();
        int result = 0;
        vector<vector<int>> dp(N, vector<int>(2 * MAX_DIFF +1, 1));
        for (int i = 0; i < N; ++i) {
            for (int j = 0; j < i; ++j) {
                int diff = nums[i] - nums[j] + MAX_DIFF;
                dp[i][diff] = dp[j][diff] + 1;
                result = max(result, dp[i][diff]);
            }
        }
        return result;
    }
};
```

</TabItem>
</Tabs>
