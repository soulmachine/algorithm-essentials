---
title: Maximal Square
---

### 描述

TODO

### 分析

令 `f(i,j)`表示以`matrix[i][j]`为右下角的正方形的边长，

$$
f(i,j)=\begin{cases}
0 & matrix[i][j]=0 \\
\min\left\{f(i-1,j), f(i, j-1), f(i-1,j-1)\right\}+1 & matrix[i][j]=1
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
// Maximal Square
class Solution {
public:
    int maximalSquare(vector<vector<char>>& matrix) {
        const int M = matrix.size(), N = matrix[0].size();
        vector<vector<int>> dp(M, vector<int>(N, 0));

        int result = 0;
        for (int i = 0; i < M; ++i) {
            for (int j = 0; j < N; ++j) {
                if (i == 0 || j == 0) dp[i][j] = matrix[i][j] - '0'; // base case
                else if (matrix[i][j] == '1') {
                    dp[i][j] = min(dp[i - 1][j], min(dp[i][j - 1], dp[i - 1][j - 1])) + 1;
                }
                result = max(result, dp[i][j]);
            }
        }
        return result * result;
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Empty line - nothing to translate since the input contains only a comment
# TODO
```

</TabItem>
</Tabs>
