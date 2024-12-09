---
title: Wildcard Matching
---

### 描述

Implement wildcard pattern matching with support for `'?'` and `'*'`.

`'?'` Matches any single character.
`'*'` Matches any sequence of characters (including the empty sequence).

The matching should cover the entire input string (not partial).

The function prototype should be:

```cpp
bool isMatch(const char *s, const char *p)
```

Some examples:

```
isMatch("aa","a") → false
isMatch("aa","aa") → true
isMatch("aaa","aa") → false
isMatch("aa", "*") → true
isMatch("aa", "a*") → true
isMatch("ab", "?*") → true
isMatch("aab", "c*a*b") → false
```

### 分析

跟上一题很类似。

主要是`'*'`的匹配问题。`p`每遇到一个`'*'`，就保留住当前`'*'`的坐标和`s`的坐标，然后`s`从前往后扫描，如果不成功，则`s++`，重新扫描。

### 递归版

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
// Wildcard Matching
// 递归版，会超时，用于帮助理解题意
// 时间复杂度O(n!*m!)，空间复杂度O(n)
class Solution {
    public boolean isMatch(String s, String p) {
        return isMatch(s, 0, p, 0);
    }
    private boolean isMatch(String s, int i, String p, int j) {
        if (i == s.length() && j == p.length()) return true;
        if (i == s.length() || j == p.length()) return false;

        if (p.charAt(j) == '*') {
            while (j < p.length() && p.charAt(j) == '*') ++j;  //skip continuous '*'
            if (j == p.length()) return true;
            while (i < s.length() && !isMatch(s, i, p, j)) ++i;

            return i < s.length();
        }
        else if (p.charAt(j) == s.charAt(i) || p.charAt(j) == '?')
            return isMatch(s, ++i, p, ++j);
        else return false;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Wildcard Matching
// 递归版，会超时，用于帮助理解题意
// 时间复杂度O(n!*m!)，空间复杂度O(n)
class Solution {
public:
    bool isMatch(const string& s, const string& p) {
        return isMatch(s.c_str(), p.c_str());
    }
private:
    bool isMatch(const char *s, const char *p) {
        if (*p == '\0' || *s == '\0') return *p == *s;
        else if (*p == '*') {
            while (*p == '*') ++p;  //skip continuous '*'
            if (*p == '\0') return true;
            while (*s != '\0' && !isMatch(s, p)) ++s;

            return *s != '\0';
        }
        else if (*p == *s || *p == '?') return isMatch(++s, ++p);
        else return false;
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Wildcard Matching
# 递归版，会超时，用于帮助理解题意
# 时间复杂度O(n!*m!)，空间复杂度O(n)
class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        return self._is_match(s, 0, p, 0)

    def _is_match(self, s: str, i: int, p: str, j: int) -> bool:
        if i == len(s) and j == len(p):
            return True
        if i == len(s) or j == len(p):
            return False

        if p[j] == '*':
            while j < len(p) and p[j] == '*':
                j += 1  #skip continuous '*'
            if j == len(p):
                return True
            while i < len(s) and not self._is_match(s, i, p, j):
                i += 1

            return i < len(s)
        elif p[j] == s[i] or p[j] == '?':
            return self._is_match(s, i + 1, p, j + 1)
        else:
            return False
```

</TabItem>
</Tabs>

### 迭代版

<Tabs
defaultValue="java"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// Wildcard Matching
// 迭代版，时间复杂度O(n*m)，空间复杂度O(1)
public class Solution {
    public boolean isMatch(String s, String p) {
        int i = 0, j = 0;
        int ii = -1, jj = -1;
        while (i < s.length()) {
            if (j < p.length() && p.charAt(j) == '*') {
                // skip continuous '*'
                while (j < p.length() && p.charAt(j) == '*') ++j;
                if (j == p.length()) return true;
                ii = i;
                jj = j;
            }
            if (j < p.length() && (p.charAt(j) == '?' || p.charAt(j) == s.charAt(i))) {
                ++i; ++j;
            } else {
                if (ii == -1) return false;
                ++ii;
                i = ii;
                j = jj;
            }
        }
        // skip continuous '*'
        while (j < p.length() && p.charAt(j) == '*') ++j;
        return i == s.length() && j == p.length();
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Wildcard Matching
// 迭代版，时间复杂度O(n*m)，空间复杂度O(1)
class Solution {
public:
    bool isMatch(const string& s, const string& p) {
        return isMatch(s.c_str(), p.c_str());
    }
private:
    bool isMatch(const char *s, const char *p) {
        bool star = false;
        const char *str, *ptr;
        for (str = s, ptr = p; *str != '\0'; str++, ptr++) {
            switch (*ptr) {
            case '?':
                break;
            case '*':
                star = true;
                s = str, p = ptr;
                while (*p == '*') p++;  //skip continuous '*'
                if (*p == '\0') return true;
                str = s - 1;
                ptr = p - 1;
                break;
            default:
                if (*str != *ptr) {
                    // 如果前面没有'*'，则匹配不成功
                    if (!star) return false;
                    s++;
                    str = s - 1;
                    ptr = p - 1;
                }
            }
        }
        while (*ptr == '*') ptr++;
        return (*ptr == '\0');
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Wildcard Matching
# 迭代版，时间复杂度O(n*m)，空间复杂度O(1)
class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        i = j = 0
        ii = jj = -1
        while i < len(s):
            if j < len(p) and p[j] == '*':
                # skip continuous '*'
                while j < len(p) and p[j] == '*':
                    j += 1
                if j == len(p):
                    return True
                ii = i
                jj = j
            if j < len(p) and (p[j] == '?' or p[j] == s[i]):
                i += 1
                j += 1
            else:
                if ii == -1:
                    return False
                ii += 1
                i = ii
                j = jj
        # skip continuous '*'
        while j < len(p) and p[j] == '*':
            j += 1
        return i == len(s) and j == len(p)
```

</TabItem>
</Tabs>

### 相关题目

- [Regular Expression Matching](regular-expression-matching.md)
