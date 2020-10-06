---
title: Regular Expression Matching
---

### 描述

Implement regular expression matching with support for `'.'` and `'*'`.

`'.'` Matches any single character.
`'*'` Matches zero or more of the preceding element.

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
isMatch("aa", "a*") → true
isMatch("aa", ".*") → true
isMatch("ab", ".*") → true
isMatch("aab", "c*a*b") → true
```

### 分析

这是一道很有挑战的题。

### 递归版

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
// Regular Expression Matching
// Time complexity: O(n)
// Space complexity: O(1)
class Solution {
    public boolean isMatch(final String s, final String p) {
        return isMatch(s, 0, p, 0);
    }
    private static boolean matchFirst(String s, int i, String p, int j) {
        if (j == p.length()) return i == s.length();
        if (i == s.length()) return j == p.length();
        return p.charAt(j) == '.' || s.charAt(i) == p.charAt(j);
    }
    private static boolean isMatch(String s, int i, String p, int j) {
        if (j == p.length()) return i == s.length();

        // next char is not '*', then must match current character
        final char b = p.charAt(j);
        if (j == p.length() - 1 || p.charAt(j + 1) != '*') {
            if (matchFirst(s, i, p, j)) return isMatch(s, i + 1, p, j + 1);
            else return false;
        } else { // next char is '*'
            if (isMatch(s, i, p, j+2)) return true;  // try the length of 0
            while (matchFirst(s, i, p, j))  // try all possible lengths
                if (isMatch(s, ++i, p, j+2)) return true;
            return false;
        }
    }
}

```

</TabItem>
<TabItem value="cpp">

```cpp
// Regular Expression Matching
// Time complexity: O(n)
// Space complexity: O(1)
class Solution {
public:
    bool isMatch(const string& s, const string& p) {
        return isMatch(s.c_str(), p.c_str());
    }
private:
    bool matchFirst(const char *s, const char *p) {
        return *p == *s || (*p == '.' && *s != '\0');
    }

    bool isMatch(const char *s, const char *p) {
        if (*p == '\0') return *s == '\0';    //empty

        // next char is not '*', then must match current character
        if (*(p + 1) != '*') {
            if (matchFirst(s, p)) return isMatch(s + 1, p + 1);
            else return false;
        } else { // next char is '*'
            if (isMatch(s, p + 2)) return true;    // try the length of 0
            while ( matchFirst(s, p) )       // try all possible lengths
                if (isMatch(++s, p + 2)) return true;
            return false;
        }
    }
};


```

</TabItem>
</Tabs>

### 相关题目

- [Wildcard Matching](wildcard-matching.md)
