---
title: Edit Distance
---

### 描述

Given two words `word1` and `word2`, find the minimum number of steps required to convert `word1` to `word2`. (each operation is counted as 1 step.)

You have the following 3 operations permitted on a word:

- Insert a character
- Delete a character
- Replace a character

### 分析

设状态为`f[i][j]`，表示`A[0,i]`和`B[0,j]`之间的最小编辑距离。设`A[0,i]`的形式是`str1c`，`B[0,j]`的形式是`str2d`，

1. 如果`c==d`，则`f[i][j]=f[i-1][j-1]`；
1. 如果`c!=d`，

   1. 如果将 c 替换成 d，则`f[i][j]=f[i-1][j-1]+1`；
   1. 如果在 c 后面添加一个 d，则`f[i][j]=f[i][j-1]+1`；
   1. 如果将 c 删除，则`f[i][j]=f[i-1][j]+1`；

### 动规

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
// Edit Distance
// 二维动规，时间复杂度O(n*m)，空间复杂度O(n*m)
public class Solution {
    public int minDistance(String word1, String word2) {
        final int n = word1.length();
        final int m = word2.length();
        // 长度为n的字符串，有n+1个隔板
        int[][] f = new int[n+1][m+1];
        for (int i = 0; i <= n; i++)
            f[i][0] = i;
        for (int j = 0; j <= m; j++)
            f[0][j] = j;

        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= m; j++) {
                if (word1.charAt(i - 1) == word2.charAt(j - 1))
                    f[i][j] = f[i - 1][j - 1];
                else {
                    int mn = Math.min(f[i - 1][j], f[i][j - 1]);
                    f[i][j] = 1 + Math.min(f[i - 1][j - 1], mn);
                }
            }
        }
        return f[n][m];
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Edit Distance
// 二维动规，时间复杂度O(n*m)，空间复杂度O(n*m)
class Solution {
public:
    int minDistance(const string &word1, const string &word2) {
        const size_t n = word1.size();
        const size_t m = word2.size();
        // 长度为n的字符串，有n+1个隔板
        int f[n + 1][m + 1];
        for (size_t i = 0; i <= n; i++)
            f[i][0] = i;
        for (size_t j = 0; j <= m; j++)
            f[0][j] = j;

        for (size_t i = 1; i <= n; i++) {
            for (size_t j = 1; j <= m; j++) {
                if (word1[i - 1] == word2[j - 1])
                    f[i][j] = f[i - 1][j - 1];
                else {
                    int mn = min(f[i - 1][j], f[i][j - 1]);
                    f[i][j] = 1 + min(f[i - 1][j - 1], mn);
                }
            }
        }
        return f[n][m];
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Edit Distance
# 二维动规，时间复杂度O(n*m)，空间复杂度O(n*m)
class Solution:
    def minDistance(self, word1: str, word2: str) -> int:
        n = len(word1)
        m = len(word2)
        # 长度为n的字符串，有n+1个隔板
        f = [[0] * (m + 1) for _ in range(n + 1)]
        for i in range(n + 1):
            f[i][0] = i
        for j in range(m + 1):
            f[0][j] = j

        for i in range(1, n + 1):
            for j in range(1, m + 1):
                if word1[i - 1] == word2[j - 1]:
                    f[i][j] = f[i - 1][j - 1]
                else:
                    mn = min(f[i - 1][j], f[i][j - 1])
                    f[i][j] = 1 + min(f[i - 1][j - 1], mn)

        return f[n][m]
```

</TabItem>
</Tabs>

### 动规+滚动数组

<Tabs
defaultValue="java"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// Edit Distance
// 二维动规+滚动数组
// 时间复杂度O(n*m)，空间复杂度O(n)
public class Solution {
    public int minDistance(String word1, String word2) {
        if (word1.length() < word2.length())
            return minDistance(word2, word1);

        int[] f = new int[word2.length() + 1];
        int upper_left = 0; // 额外用一个变量记录f[i-1][j-1]

        for (int i = 0; i <= word2.length(); ++i)
            f[i] = i;

        for (int i = 1; i <= word1.length(); ++i) {
            upper_left = f[0];
            f[0] = i;

            for (int j = 1; j <= word2.length(); ++j) {
                int upper = f[j];

                if (word1.charAt(i - 1) == word2.charAt(j - 1))
                    f[j] = upper_left;
                else
                    f[j] = 1 + Math.min(upper_left, Math.min(f[j], f[j - 1]));

                upper_left = upper;
            }
        }

        return f[word2.length()];
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Edit Distance
// 二维动规+滚动数组
// 时间复杂度O(n*m)，空间复杂度O(n)
class Solution {
public:
    int minDistance(const string &word1, const string &word2) {
        if (word1.length() < word2.length())
            return minDistance(word2, word1);

        int f[word2.length() + 1];
        int upper_left = 0; // 额外用一个变量记录f[i-1][j-1]

        for (size_t i = 0; i <= word2.size(); ++i)
            f[i] = i;

        for (size_t i = 1; i <= word1.size(); ++i) {
            upper_left = f[0];
            f[0] = i;

            for (size_t j = 1; j <= word2.size(); ++j) {
                int upper = f[j];

                if (word1[i - 1] == word2[j - 1])
                    f[j] = upper_left;
                else
                    f[j] = 1 + min(upper_left, min(f[j], f[j - 1]));

                upper_left = upper;
            }
        }

        return f[word2.length()];
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Edit Distance
# 二维动规+滚动数组
# 时间复杂度O(n*m)，空间复杂度O(n)
class Solution:
    def minDistance(self, word1: str, word2: str) -> int:
        if len(word1) < len(word2):
            return self.minDistance(word2, word1)

        f = [i for i in range(len(word2) + 1)]
        upper_left = 0  # 额外用一个变量记录f[i-1][j-1]

        for i in range(1, len(word1) + 1):
            upper_left = f[0]
            f[0] = i

            for j in range(1, len(word2) + 1):
                upper = f[j]

                if word1[i - 1] == word2[j - 1]:
                    f[j] = upper_left
                else:
                    f[j] = 1 + min(upper_left, min(f[j], f[j - 1]))

                upper_left = upper

        return f[len(word2)]
```

</TabItem>
</Tabs>
