---
title: Longest Common Prefix
---

### 描述

Write a function to find the longest common prefix string amongst an array of strings.

### 分析

从位置 0 开始，对每一个位置比较所有字符串，直到遇到一个不匹配。

### 纵向扫描

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
// Longest Common Prefix
// 纵向扫描，从位置0开始，对每一个位置比较所有字符串，直到遇到一个不匹配
// 时间复杂度O(n1+n2+...)
public class Solution {
    public String longestCommonPrefix(String[] strs) {
        if (strs.length == 0) return "";

        for (int j = 0; j < strs[0].length(); ++j) { // 纵向扫描
            for (int i = 1; i < strs.length; ++i) {
                if (j == strs[i].length() ||
                        strs[i].charAt(j) != strs[0].charAt(j))
                    return strs[0].substring(0, j);
            }
        }
        return strs[0];
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Longest Common Prefix
// 纵向扫描，从位置0开始，对每一个位置比较所有字符串，直到遇到一个不匹配
// 时间复杂度O(n1+n2+...)
// @author 周倩 (http://weibo.com/zhouditty)
class Solution {
public:
    string longestCommonPrefix(vector<string> &strs) {
        if (strs.empty()) return "";

        for (int j = 0; j < strs[0].size(); ++j) { // 纵向扫描
            for (int i = 1; i < strs.size(); ++i) {
            	// 不会越界，请参考string::[]的文档
                if (strs[i][j] != strs[0][j])
                	return strs[0].substr(0,j);
            }
        }
        return strs[0];
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Longest Common Prefix
# 纵向扫描，从位置0开始，对每一个位置比较所有字符串，直到遇到一个不匹配
# 时间复杂度O(n1+n2+...)
class Solution:
    def longestCommonPrefix(self, strs: list[str]) -> str:
        if len(strs) == 0:
            return ""

        for j in range(len(strs[0])):  # 纵向扫描
            for i in range(1, len(strs)):
                if j == len(strs[i]) or strs[i][j] != strs[0][j]:
                    return strs[0][:j]
        return strs[0]
```

</TabItem>
</Tabs>

### 横向扫描

<Tabs
defaultValue="java"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// Longest Common Prefix
// 横向扫描，每个字符串与第0个字符串，从左到右比较，直到遇到一个不匹配，
// 然后继续下一个字符串
// 时间复杂度O(n1+n2+...)
class Solution {
    public String longestCommonPrefix(String[] strs) {
        if (strs.length == 0) return "";

        int right_most = strs[0].length();
        for (int i = 1; i < strs.length; i++)
            for (int j = 0; j < right_most; j++)
                // 不会越界，请参考string::[]的文档
                if (j == strs[i].length() ||
                        strs[i].charAt(j) != strs[0].charAt(j))
                    right_most = j;

        return strs[0].substring(0, right_most);
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Longest Common Prefix
// 横向扫描，每个字符串与第0个字符串，从左到右比较，直到遇到一个不匹配，
// 然后继续下一个字符串
// 时间复杂度O(n1+n2+...)
class Solution {
public:
    string longestCommonPrefix(vector<string> &strs) {
        if (strs.empty()) return "";

        int right_most = strs[0].size();
        for (size_t i = 1; i < strs.size(); i++)
            for (int j = 0; j < right_most; j++)
                if (strs[i][j] != strs[0][j])  // 不会越界，请参考string::[]的文档
                    right_most = j;

        return strs[0].substr(0, right_most);
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Longest Common Prefix
# 横向扫描，每个字符串与第0个字符串，从左到右比较，直到遇到一个不匹配，
# 然后继续下一个字符串
# 时间复杂度O(n1+n2+...)
class Solution:
    def longestCommonPrefix(self, strs: list[str]) -> str:
        if len(strs) == 0:
            return ""

        right_most = len(strs[0])
        for i in range(1, len(strs)):
            for j in range(right_most):
                if j == len(strs[i]) or strs[i][j] != strs[0][j]:
                    right_most = j
                    break

        return strs[0][:right_most]
```

</TabItem>
</Tabs>
