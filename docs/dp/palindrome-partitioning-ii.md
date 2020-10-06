---
title: Palindrome Partitioning II
---

### 描述

Given a string s, partition s such that every substring of the partition is a palindrome.

Return the minimum cuts needed for a palindrome partitioning of s.

For example, given `s = "aab"`,

Return 1 since the palindrome partitioning `["aa","b"]` could be produced using 1 cut.

### 分析

定义状态`f(i,j)`表示区间`[i,j]`之间最小的 cut 数，则状态转移方程为

$$
f(i,j)=\min\left\{f(i,k)+f(k+1,j)\right\}, i \leq k \leq j, 0 \leq i \leq j<n
$$

这是一个二维函数，实际写代码比较麻烦。

所以要转换成一维 DP。如果每次，从 i 往右扫描，每找到一个回文就算一次 DP 的话，就可以转换为`f(i)=区间[i, n-1]之间最小的cut数`，n 为字符串长度，则状态转移方程为

$$
f(i)=\min\left\{f(j+1)+1\right\}, i \leq j<n
$$

一个问题出现了，就是如何判断`[i,j]`是否是回文？每次都从 i 到 j 比较一遍？太浪费了，这里也是一个 DP 问题。

定义状态 `P[i][j] = true if [i,j]为回文`，那么

```
P[i][j] = str[i] == str[j] && P[i+1][j-1]
```

### 代码

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

<Tabs
defaultValue="java"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// Palindrome Partitioning II
// 时间复杂度O(n^2)，空间复杂度O(n^2)
public class Solution {
    public int minCut(String s) {
        final int n = s.length();
        int[] f = new int[n+1];
        boolean[][] p = new boolean[n][n];
        //the worst case is cutting by each char
        for (int i = 0; i <= n; i++)
            f[i] = n - 1 - i; // 最后一个f[n]=-1
        for (int i = n - 1; i >= 0; i--) {
            for (int j = i; j < n; j++) {
                if (s.charAt(i) == s.charAt(j) &&
                        (j - i < 2 || p[i + 1][j - 1])) {
                    p[i][j] = true;
                    f[i] = Math.min(f[i], f[j + 1] + 1);
                }
            }
        }
        return f[0];
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Palindrome Partitioning II
// 时间复杂度O(n^2)，空间复杂度O(n^2)
class Solution {
public:
    int minCut(const string& s) {
        const int n = s.size();
        int f[n+1];
        bool p[n][n];
        fill_n(&p[0][0], n * n, false);
        //the worst case is cutting by each char
        for (int i = 0; i <= n; i++)
            f[i] = n - 1 - i; // 最后一个f[n]=-1
        for (int i = n - 1; i >= 0; i--) {
            for (int j = i; j < n; j++) {
                if (s[i] == s[j] && (j - i < 2 || p[i + 1][j - 1])) {
                    p[i][j] = true;
                    f[i] = min(f[i], f[j + 1] + 1);
                }
            }
        }
        return f[0];
    }
};
```

</TabItem>
</Tabs>

### 相关题目

- [Palindrome Partitioning](../dfs/palindrome-partitioning.md)
