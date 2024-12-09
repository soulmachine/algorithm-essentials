---
title: Implement strStr()
---

### 描述

Implement strStr().

Returns a pointer to the first occurrence of needle in haystack, or null if needle is not part of haystack.

### 分析

暴力算法的复杂度是 `O(m*n)`，代码如下。更高效的的算法有 KMP 算法、Boyer-Mooer 算法和 Rabin-Karp 算法。面试中暴力算法足够了，一定要写得没有 BUG。

### 暴力匹配

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
// Implement strStr()
// 暴力解法，时间复杂度O(N*M)，空间复杂度O(1)
class Solution {
    public int strStr(final String haystack, final String needle) {
        if (needle.isEmpty()) return 0;

        final int N = haystack.length() - needle.length() + 1;
        for (int i = 0; i < N; i++) {
            int j = i;
            int k = 0;
            while (j < haystack.length() && k < needle.length() &&
                    haystack.charAt(j) == needle.charAt(k)) {
                j++;
                k++;
            }
            if (k == needle.length()) return i;
        }
        return -1;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Implement strStr()
// 暴力解法，时间复杂度O(N*M)，空间复杂度O(1)
class Solution {
public:
    int strStr(const string& haystack, const string& needle) {
        if (needle.empty()) return 0;

        const int N = haystack.size() - needle.size() + 1;
        for (int i = 0; i < N; i++) {
            int j = i;
            int k = 0;
            while (j < haystack.size() && k < needle.size() && haystack[j] == needle[k]) {
                j++;
                k++;
            }
            if (k == needle.size()) return i;
        }
        return -1;
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Implement strStr()
# Brute force solution, time complexity O(N*M), space complexity O(1)
class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        if not needle:
            return 0

        N = len(haystack) - len(needle) + 1
        for i in range(N):
            j = i
            k = 0
            while j < len(haystack) and k < len(needle) and haystack[j] == needle[k]:
                j += 1
                k += 1
            if k == len(needle):
                return i
        return -1
```

</TabItem>
</Tabs>

### KMP

<Tabs
defaultValue="java"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// Implement strStr()
// KMP，时间复杂度O(N+M)，空间复杂度O(M)
public class Solution {
    public int strStr(final String haystack, final String needle) {
        return kmp(haystack, needle);
    }

    /*
     * 计算部分匹配表，即next数组.
     *
     * @param[in] pattern 模式串
     * @param[out] next next数组
     * @return 无
     */
    private static void compute_prefix(final String pattern, final int[] next) {
        int i;
        int j = -1;

        next[0] = j;
        for (i = 1; i < pattern.length(); i++) {
            while (j > -1 && pattern.charAt(j + 1) != pattern.charAt(i)) j = next[j];

            if (pattern.charAt(i) == pattern.charAt(j + 1)) j++;
            next[i] = j;
        }
    }

    /*
     * @brief KMP算法.
     *
     * @param[in] text 文本
     * @param[in] pattern 模式串
     * @return 成功则返回第一次匹配的位置，失败则返回-1
     */
    private static int kmp(final String text, final String pattern) {
        int i;
        int j = -1;
        final int n = text.length();
        final int m = pattern.length();
        if (n == 0 && m == 0) return 0; /* "","" */
        if (m == 0) return 0;  /* "a","" */
        int[] next = new int[m];

        compute_prefix(pattern, next);

        for (i = 0; i < n; i++) {
            while (j > -1 && pattern.charAt(j + 1) != text.charAt(i)) j = next[j];

            if (text.charAt(i) == pattern.charAt(j + 1)) j++;
            if (j == m - 1) {
                return i-j;
            }
        }

        return -1;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Implement strStr()
// KMP，时间复杂度O(N+M)，空间复杂度O(M)
class Solution {
public:
    int strStr(const string& haystack, const string& needle) {
        return kmp(haystack.c_str(), needle.c_str());
    }
private:
    /*
     * @brief 计算部分匹配表，即next数组.
     *
     * @param[in] pattern 模式串
     * @param[out] next next数组
     * @return 无
     */
    static void compute_prefix(const char *pattern, int next[]) {
        int i;
        int j = -1;
        const int m = strlen(pattern);

        next[0] = j;
        for (i = 1; i < m; i++) {
            while (j > -1 && pattern[j + 1] != pattern[i]) j = next[j];

            if (pattern[i] == pattern[j + 1]) j++;
            next[i] = j;
        }
    }

    /*
     * @brief KMP算法.
     *
     * @param[in] text 文本
     * @param[in] pattern 模式串
     * @return 成功则返回第一次匹配的位置，失败则返回-1
     */
    static int kmp(const char *text, const char *pattern) {
        int i;
        int j = -1;
        const int n = strlen(text);
        const int m = strlen(pattern);
        if (n == 0 && m == 0) return 0; /* "","" */
        if (m == 0) return 0;  /* "a","" */
        int *next = (int*)malloc(sizeof(int) * m);

        compute_prefix(pattern, next);

        for (i = 0; i < n; i++) {
            while (j > -1 && pattern[j + 1] != text[i]) j = next[j];

            if (text[i] == pattern[j + 1]) j++;
            if (j == m - 1) {
                free(next);
                return i-j;
            }
        }

        free(next);
        return -1;
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Implement strStr()
# KMP，时间复杂度O(N+M)，空间复杂度O(M)
class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        return self.kmp(haystack, needle)

    '''
    计算部分匹配表，即next数组.

    Args:
        pattern (str): 模式串
        next next数组
    '''
    @staticmethod
    def compute_prefix(pattern: str, next: list) -> None:
        j = -1
        next[0] = j

        for i in range(1, len(pattern)):
            while j > -1 and pattern[j + 1] != pattern[i]:
                j = next[j]

            if pattern[i] == pattern[j + 1]:
                j += 1
            next[i] = j

    '''
    KMP算法.

    Args:
        text (str): 文本
        pattern (str): 模式串
    Returns: 成功则返回第一次匹配的位置，失败则返回-1
    '''
    @staticmethod
    def kmp(text: str, pattern: str) -> int:
        j = -1
        n = len(text)
        m = len(pattern)
        if n == 0 and m == 0:
            return 0  # "",""
        if m == 0:
            return 0  # "a",""
        next = [0] * m

        Solution.compute_prefix(pattern, next)

        for i in range(n):
            while j > -1 and pattern[j + 1] != text[i]:
                j = next[j]

            if text[i] == pattern[j + 1]:
                j += 1
            if j == m - 1:
                return i - j

        return -1
```

</TabItem>
</Tabs>

### 相关题目

- [String to Integer (atoi)](atoi.md)
