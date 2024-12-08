---
title: Interleaving String
---

### 描述

Given `s1, s2, s3`, find whether `s3` is formed by the interleaving of `s1` and `s2`.

For example, Given: `s1 = "aabcc", s2 = "dbbca"`,

When `s3 = "aadbbcbcac"`, return true.

When `s3 = "aadbbbaccc"`, return false.

### 分析

设状态`f[i][j]`，表示`s1[0,i]`和`s2[0,j]`，匹配`s3[0, i+j]`。如果 s1 的最后一个字符等于 s3 的最后一个字符，则`f[i][j]=f[i-1][j]`；如果 s2 的最后一个字符等于 s3 的最后一个字符，则`f[i][j]=f[i][j-1]`。因此状态转移方程如下：

```
f[i][j] = (s1[i - 1] == s3 [i + j - 1] && f[i - 1][j])
       || (s2[j - 1] == s3 [i + j - 1] && f[i][j - 1]);
```

### 递归

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
// Interleaving String
// 递归，会超时，仅用来帮助理解
public class Solution {
    public boolean isInterleave(String s1, String s2, String s3) {
        if (s3.length() != s1.length() + s2.length())
            return false;
        if (s1.isEmpty() || s2.isEmpty()) return true;

        return isInterleave(s1, 0, s1.length(),
                s2, 0, s2.length(), s3, 0, s3.length());
    }

    private static boolean isInterleave(String s1, int begin1, int end1,
                                        String s2, int begin2, int end2,
                                        String s3, int begin3, int end3) {
        if (begin3 == end3)
            return begin1 == end1 && begin2 == end2;

        return (begin1 < end1 && s1.charAt(begin1) == s3.charAt(begin3) &&
                isInterleave(s1, begin1 + 1, end1, s2, begin2, end2,
                        s3, begin3 + 1, end3)) ||
                (begin2 < end2 && s2.charAt(begin2) == s3.charAt(begin3) &&
                        isInterleave(s1, begin1, end1,
                                s2, begin2 + 1, end2, s3, begin3 + 1, end3));
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Interleaving String
// 递归，会超时，仅用来帮助理解
class Solution {
public:
    bool isInterleave(const string& s1, const string& s2, const string& s3) {
        if (s3.length() != s1.length() + s2.length())
            return false;

        return isInterleave(begin(s1), end(s1), begin(s2), end(s2),
                begin(s3), end(s3));
    }

    template<typename InIt>
    bool isInterleave(InIt first1, InIt last1, InIt first2, InIt last2,
            InIt first3, InIt last3) {
        if (first3 == last3)
            return first1 == last1 && first2 == last2;

        return (*first1 == *first3
                && isInterleave(next(first1), last1, first2, last2,
                        next(first3), last3))
                || (*first2 == *first3
                        && isInterleave(first1, last1, next(first2), last2,
                                next(first3), last3));
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Interleaving String
# 递归，会超时，仅用来帮助理解
class Solution:
    def isInterleave(self, s1: str, s2: str, s3: str) -> bool:
        if len(s3) != len(s1) + len(s2):
            return False
        if not s1 or not s2:
            return True

        return self.is_interleave_helper(s1, 0, len(s1),
                                       s2, 0, len(s2),
                                       s3, 0, len(s3))

    def is_interleave_helper(self, s1: str, begin1: int, end1: int,
                            s2: str, begin2: int, end2: int,
                            s3: str, begin3: int, end3: int) -> bool:
        if begin3 == end3:
            return begin1 == end1 and begin2 == end2

        return (begin1 < end1 and s1[begin1] == s3[begin3] and
                self.is_interleave_helper(s1, begin1 + 1, end1,
                                        s2, begin2, end2,
                                        s3, begin3 + 1, end3)) or \
               (begin2 < end2 and s2[begin2] == s3[begin3] and
                self.is_interleave_helper(s1, begin1, end1,
                                        s2, begin2 + 1, end2,
                                        s3, begin3 + 1, end3))
```

</TabItem>
</Tabs>

### 动规

<Tabs
defaultValue="java"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// Interleaving String
// 二维动规，时间复杂度O(n^2)，空间复杂度O(n^2)
public class Solution {
    public boolean isInterleave(String s1, String s2, String s3) {
        if (s3.length() != s1.length() + s2.length())
            return false;

        boolean[][] f = new boolean[s1.length() + 1][s2.length() + 1];
        for (int i = 0; i < s1.length() + 1; ++i)
            Arrays.fill(f[i], true);

        for (int i = 1; i <= s1.length(); ++i)
            f[i][0] = f[i - 1][0] && s1.charAt(i - 1) == s3.charAt(i - 1);

        for (int i = 1; i <= s2.length(); ++i)
            f[0][i] = f[0][i - 1] && s2.charAt(i - 1) == s3.charAt(i - 1);

        for (int i = 1; i <= s1.length(); ++i)
            for (int j = 1; j <= s2.length(); ++j)
                f[i][j] = (s1.charAt(i - 1) == s3.charAt(i + j - 1) && f[i - 1][j])
                        || (s2.charAt(j - 1) == s3.charAt(i + j - 1) && f[i][j - 1]);

        return f[s1.length()][s2.length()];
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Interleaving String
// 二维动规，时间复杂度O(n^2)，空间复杂度O(n^2)
class Solution {
public:
    bool isInterleave(const string& s1, const string& s2, const string& s3) {
        if (s3.length() != s1.length() + s2.length())
            return false;

        vector<vector<bool>> f(s1.length() + 1,
                vector<bool>(s2.length() + 1, true));

        for (size_t i = 1; i <= s1.length(); ++i)
            f[i][0] = f[i - 1][0] && s1[i - 1] == s3[i - 1];

        for (size_t i = 1; i <= s2.length(); ++i)
            f[0][i] = f[0][i - 1] && s2[i - 1] == s3[i - 1];

        for (size_t i = 1; i <= s1.length(); ++i)
            for (size_t j = 1; j <= s2.length(); ++j)
                f[i][j] = (s1[i - 1] == s3[i + j - 1] && f[i - 1][j])
                        || (s2[j - 1] == s3[i + j - 1] && f[i][j - 1]);

        return f[s1.length()][s2.length()];
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Interleaving String
# 二维动规，时间复杂度O(n^2)，空间复杂度O(n^2)
class Solution:
    def isInterleave(self, s1: str, s2: str, s3: str) -> bool:
        if len(s3) != len(s1) + len(s2):
            return False

        f = [[True] * (len(s2) + 1) for _ in range(len(s1) + 1)]

        for i in range(1, len(s1) + 1):
            f[i][0] = f[i - 1][0] and s1[i - 1] == s3[i - 1]

        for i in range(1, len(s2) + 1):
            f[0][i] = f[0][i - 1] and s2[i - 1] == s3[i - 1]

        for i in range(1, len(s1) + 1):
            for j in range(1, len(s2) + 1):
                f[i][j] = (s1[i - 1] == s3[i + j - 1] and f[i - 1][j]) or \
                         (s2[j - 1] == s3[i + j - 1] and f[i][j - 1])

        return f[len(s1)][len(s2)]
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
// Interleaving String
// 二维动规+滚动数组，时间复杂度O(n^2)，空间复杂度O(n)
public class Solution {
    public boolean isInterleave(String s1, String s2, String s3) {
        if (s1.length() + s2.length() != s3.length())
            return false;

        if (s1.length() < s2.length())
            return isInterleave(s2, s1, s3);

        boolean[] f = new boolean[s2.length() + 1];
        Arrays.fill(f, true);

        for (int i = 1; i <= s2.length(); ++i)
            f[i] = s2.charAt(i - 1) == s3.charAt(i - 1) && f[i - 1];

        for (int i = 1; i <= s1.length(); ++i) {
            f[0] = s1.charAt(i - 1) == s3.charAt(i - 1) && f[0];

            for (int j = 1; j <= s2.length(); ++j)
                f[j] = (s1.charAt(i - 1) == s3.charAt(i + j - 1) && f[j])
                        || (s2.charAt(j - 1) == s3.charAt(i + j - 1) && f[j - 1]);
        }

        return f[s2.length()];
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Interleaving String
// 二维动规+滚动数组，时间复杂度O(n^2)，空间复杂度O(n)
class Solution {
public:
    bool isInterleave(const string& s1, const string& s2, const string& s3) {
        if (s1.length() + s2.length() != s3.length())
            return false;

        if (s1.length() < s2.length())
            return isInterleave(s2, s1, s3);

        vector<bool> f(s2.length() + 1, true);

        for (size_t i = 1; i <= s2.length(); ++i)
            f[i] = s2[i - 1] == s3[i - 1] && f[i - 1];

        for (size_t i = 1; i <= s1.length(); ++i) {
            f[0] = s1[i - 1] == s3[i - 1] && f[0];

            for (size_t j = 1; j <= s2.length(); ++j)
                f[j] = (s1[i - 1] == s3[i + j - 1] && f[j])
                        || (s2[j - 1] == s3[i + j - 1] && f[j - 1]);
        }

        return f[s2.length()];
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Interleaving String
# 二维动规+滚动数组，时间复杂度O(n^2)，空间复杂度O(n)
class Solution:
    def isInterleave(self, s1: str, s2: str, s3: str) -> bool:
        if len(s1) + len(s2) != len(s3):
            return False

        if len(s1) < len(s2):
            return self.isInterleave(s2, s1, s3)

        f = [True] * (len(s2) + 1)

        for i in range(1, len(s2) + 1):
            f[i] = s2[i - 1] == s3[i - 1] and f[i - 1]

        for i in range(1, len(s1) + 1):
            f[0] = s1[i - 1] == s3[i - 1] and f[0]

            for j in range(1, len(s2) + 1):
                f[j] = (s1[i - 1] == s3[i + j - 1] and f[j]) or \
                       (s2[j - 1] == s3[i + j - 1] and f[j - 1])

        return f[len(s2)]
```

</TabItem>
</Tabs>
