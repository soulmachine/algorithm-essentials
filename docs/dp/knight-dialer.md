---
title: Knight Dialer
---

### 描述

TODO

### 分析

令 `f(j, i)`表示第`j`步恰好走到数字`i`的方案数，状态转移方程为:

TODO

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
// TODO
```

</TabItem>
<TabItem value="cpp">

```cpp
// Knight Dialer
// Time complexity: O(10 *N)
// Space complexity: O(10 *N)
class Solution {
public:
    int knightDialer(int N) {
        const int M = 1e9 + 7;
        vector<vector<int>> dp(N, vector<int>(10));
        // all possible paths
        vector<vector<int>> path{{4, 6}, {6, 8}, {7, 9}, {4, 8}, {3, 9, 0}, {}, {1, 7, 0}, {2, 6}, {1, 9}, {4, 2}};
        for (int i = 0; i < 10; ++i) dp[0][i] = 1; // base cases

        for (int i = 1; i < N; ++i) {
            for (int j = 0; j <= 9; ++j) {
                for (int idx : path[j]) {
                    dp[i][j] = (dp[i][j] + dp[i - 1][idx]) % M;
                }
            }
        }

        int result = 0;
        for (int i = 0; i < 10; ++i) result = (result + dp.back()[i]) % M;
        return result;
    }
};
```

</TabItem>

<TabItem value="python">

```python
# TODO
```

</TabItem>
</Tabs>
