---
title: Ones and Zeroes
---

### 描述

You are given an array of binary strings `strs` and two integers `m` and `n`.

Return the size of the largest subset of `strs` such that there are **at most** `m` 0's and `n` 1's in the subset.

A set `x` is a subset of a set `y` if all elements of `x` are also elements of `y`.

**Example 1**:

> **Input**: strs = ["10","0001","111001","1","0"], m = 5, n = 3  
> **Output**: 4  
> **Explanation**: The largest subset with at most 5 0's and 3 1's is {"10", "0001", "1", "0"}, so the answer is 4.  
> Other valid but smaller subsets include {"0001", "1"} and {"10", "1", "0"}.  
> {"111001"} is an invalid subset because it contains 4 1's, greater than the maximum of 3.

**Example 2**:

> **Input**: strs = ["10","0","1"], m = 1, n = 1  
> **Output**: 2  
> **Explanation**: The largest subset is {"0", "1"}, so the answer is 2.

**Constraints**:

- 1 <= strs.length <= 600
- 1 <= strs[i].length <= 100
- strs[i] consists only of digits '0' and '1'.
- 1 <= m, n <= 100

### 分析

0-1 背包问题，每个字符串有两种重量，0 的个数和 1 的个数，每个字符串的价值都是 1，因此这个问题里有两个背包，一个装 0，一个装 1，价值则是背包里字符串的个数。

令$f(i, j, k)$表示把前$i$个字符串装进容量为$j$的第一个背包和容量为$k$第二个背包，可以获得的子集的最大大小，则状态转移方程是：

$$f(i,j,k)=\max\left\{f(i-1,j,k), f(i-1, j-w0_i,k-w1_i)+1\right\}$$

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
# TODO
```

</TabItem>
<TabItem value="java">

```java
// Ones and Zeroes
// 0-1 knapsack problem
// Time Complexity: O(l*m*n), Space Complexity: O(m*n)
class Solution {
    public int findMaxForm(String[] strs, int m, int n) {
        int[][] dp = new int[m+1][n+1];

        int[] w0 = new int[strs.length];
        int[] w1 = new int[strs.length];
        for (int i = 0; i < strs.length; ++i) {
            w0[i] = numberOfZeroes(strs[i]);
            w1[i] = strs[i].length() - w0[i];
        }

        for (int i = 0; i < strs.length; ++i) {
            for(int j = m; j >= w0[i]; --j)
                for(int k = n;k >= w1[i]; --k) {
                    dp[j][k] = Math.max(dp[j][k], dp[j-w0[i]][k-w1[i]]+1);
                }
        }
        return dp[m][n];
    }

    private static int numberOfZeroes(String s) {
        int count = 0;
        for (char c : s.toCharArray()) {
            if (c == '0') count++;
        }
        return count;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Ones and Zeroes
// 0-1 knapsack problem
// Time Complexity: O(l*m*n), Space Complexity: O(m*n)
class Solution {
public:
    int findMaxForm(vector<string>& strs, int m, int n) {
        vector<vector<int>> dp(m+1, vector<int>(n+1));
        vector<int> w0(strs.size());
        vector<int> w1(strs.size());
        for (int i = 0; i < strs.size(); ++i) {
            w0[i] = numberOfZeroes(strs[i]);
            w1[i] = strs[i].size() - w0[i];
        }

        for (int i = 0; i < strs.size(); ++i) {
            for(int j = m; j >= w0[i]; --j)
                for(int k = n; k >= w1[i]; --k) {
                    dp[j][k] = max(dp[j][k], dp[j-w0[i]][k-w1[i]]+1);
                }
        }
        return dp[m][n];
    }
private:
    static int numberOfZeroes(const string& s) {
        int count = 0;
        for (char c : s) {
            if (c == '0') count++;
        }
        return count;
    }
};
```

</TabItem>
</Tabs>
