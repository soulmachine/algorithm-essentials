---
title: Perfect Squares
---

### 描述

TODO

### 分析

令 `f(i)` 表示正整数`i`最小需要几个平方数才能凑出总和`i`，则状态转移方程为

$$
f(i)=\begin{cases}
i & all\ 1 \\
\min\left\{f(i),f(i-j*j)+1\right\} & i-j*j \geq 0
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
<TabItem value="java">

```java
// TODO
```

</TabItem>
<TabItem value="cpp">

```cpp
// Perfect Squares
// Time complexity: O(n * sqrt(n))
// Space complexity: O(n)
class Solution {
public:
    int numSquares(int n) {
        vector<int> dp(n+1);
        for (int i = 0; i <= n; i++) {
            dp[i] = i; // base case, all 1's
        }

        for (int i = 1; i <=n; ++i) {
            for (int j = 1; i >= j*j; j++) {
                dp[i] = min(dp[i], dp[i-j*j]+1);
            }
        }
        return dp[n];
    }
};
```

</TabItem>

<TabItem value="python">

```python
# No code to translate since input is just a TODO comment
# TODO
```

</TabItem>
</Tabs>
