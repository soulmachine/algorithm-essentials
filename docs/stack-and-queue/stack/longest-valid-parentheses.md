---
title: Longest Valid Parentheses
---

### 描述

Given a string containing just the characters `'('` and `')'`, find the length of the longest valid (well-formed) parentheses substring.

For `"(()"`, the longest valid parentheses substring is `"()"`, which has length = 2.

Another example is `")()())"`, where the longest valid parentheses substring is `"()()"`, which has length = 4.

### 分析

无

### 使用栈

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
// Longest Valid Parenthese
// 使用栈，时间复杂度O(n)，空间复杂度O(n)
public class Solution {
    public int longestValidParentheses(String s) {
        // the position of the last ')'
        int maxLen = 0, last = -1;
        // keep track of the positions of non-matching '('s
        Stack<Integer> lefts = new Stack<>();

        for (int i = 0; i < s.length(); ++i) {
            if (s.charAt(i) =='(') {
                lefts.push(i);
            } else {
                if (lefts.empty()) {
                    // no matching left
                    last = i;
                } else {
                    // find a matching pair
                    lefts.pop();
                    if (lefts.empty()) {
                        maxLen = Math.max(maxLen, i-last);
                    } else {
                        maxLen = Math.max(maxLen, i-lefts.peek());
                    }
                }
            }
        }
        return maxLen;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Longest Valid Parenthese
// 使用栈，时间复杂度O(n)，空间复杂度O(n)
class Solution {
public:
    int longestValidParentheses(const string& s) {
        int max_len = 0, last = -1; // the position of the last ')'
        stack<int> lefts;  // keep track of the positions of non-matching '('s

        for (int i = 0; i < s.size(); ++i) {
            if (s[i] =='(') {
                lefts.push(i);
            } else {
                if (lefts.empty()) {
                    // no matching left
                    last = i;
                } else {
                    // find a matching pair
                    lefts.pop();
                    if (lefts.empty()) {
                        max_len = max(max_len, i-last);
                    } else {
                        max_len = max(max_len, i-lefts.top());
                    }
                }
            }
        }
        return max_len;
    }
};
```

</TabItem>
</Tabs>

### Dynamic Programming, One Pass

<Tabs
defaultValue="java"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// Longest Valid Parenthese
// 时间复杂度O(n)，空间复杂度O(n)
// @author 一只杰森(http://weibo.com/wjson)
class Solution {
    public int longestValidParentheses(final String s) {
        int[] f = new int[s.length()];
        int result = 0;
        for (int i = s.length() - 2; i >= 0; --i) {
            int match = i + f[i + 1] + 1;
            // case: "((...))"
            if (s.charAt(i) == '(' && match < s.length() &&
                    s.charAt(match) == ')') {
                f[i] = f[i + 1] + 2;
                // if a valid sequence exist afterwards "((...))()"
                if (match + 1 < s.length()) f[i] += f[match + 1];
            }
            result = Math.max(result, f[i]);
        }
        return result;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Longest Valid Parenthese
// 时间复杂度O(n)，空间复杂度O(n)
// @author 一只杰森(http://weibo.com/wjson)
class Solution {
public:
    int longestValidParentheses(const string& s) {
        vector<int> f(s.size(), 0);
        int result = 0;
        for (int i = s.size() - 2; i >= 0; --i) {
            int match = i + f[i + 1] + 1;
            // case: "((...))"
            if (s[i] == '(' && match < s.size() && s[match] == ')') {
                f[i] = f[i + 1] + 2;
                // if a valid sequence exist afterwards "((...))()"
                if (match + 1 < s.size()) f[i] += f[match + 1];
            }
            result = max(result, f[i]);
        }
        return result;
    }
};
```

</TabItem>
</Tabs>

### 两遍扫描

<Tabs
defaultValue="java"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// Longest Valid Parenthese
// 两遍扫描，时间复杂度O(n)，空间复杂度O(1)
// @author 曹鹏(http://weibo.com/cpcs)
class Solution {
    public int longestValidParentheses(final String s) {
        int result = 0, depth = 0, start = -1;
        for (int i = 0; i < s.length(); ++i) {
            if (s.charAt(i) == '(') {
                ++depth;
            } else {
                --depth;
                if (depth < 0) {
                    start = i;
                    depth = 0;
                } else if (depth == 0) {
                    result = Math.max(result, i - start);
                }
            }
        }

        depth = 0;
        start = s.length();
        for (int i = s.length() - 1; i >= 0; --i) {
            if (s.charAt(i) == ')') {
                ++depth;
            } else {
                --depth;
                if (depth < 0) {
                    start = i;
                    depth = 0;
                } else if (depth == 0) {
                    result = Math.max(result, start - i);
                }
            }
        }
        return result;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Longest Valid Parenthese
// 两遍扫描，时间复杂度O(n)，空间复杂度O(1)
// @author 曹鹏(http://weibo.com/cpcs)
class Solution {
public:
    int longestValidParentheses(const string& s) {
        int result = 0, depth = 0, start = -1;
        for (int i = 0; i < s.size(); ++i) {
            if (s[i] == '(') {
                ++depth;
            } else {
                --depth;
                if (depth < 0) {
                    start = i;
                    depth = 0;
                } else if (depth == 0) {
                    result = max(result, i - start);
                }
            }
        }

        depth = 0;
        start = s.size();
        for (int i = s.size() - 1; i >= 0; --i) {
            if (s[i] == ')') {
                ++depth;
            } else {
                --depth;
                if (depth < 0) {
                    start = i;
                    depth = 0;
                } else if (depth == 0) {
                    result = max(result, start - i);
                }
            }
        }
        return result;
    }
};
```

</TabItem>
</Tabs>

### 相关题目

- [Valid Parentheses](valid-parentheses.md)
- [Generate Parentheses](../../dfs/generate-parentheses.md)
