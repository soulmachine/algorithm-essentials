---
title: Palindrome Partitioning
---

### 描述

Given a string s, partition s such that every substring of the partition is a palindrome.

Return all possible palindrome partitioning of s.

For example, given `s = "aab"`,
Return

```
  [
    ["aa","b"],
    ["a","a","b"]
  ]
```

### 分析

在每一步都可以判断中间结果是否为合法结果，用回溯法。

一个长度为 n 的字符串，有`n-1`个地方可以砍断，每个地方可断可不断，因此复杂度为$$O(2^{n-1})$$

### 深搜 1

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
// Palindrome Partitioning
// 时间复杂度O(2^n)，空间复杂度O(n)
public class Solution {
    public List<List<String>> partition(String s) {
        List<List<String>> result = new ArrayList<>();
        List<String> path = new ArrayList<>(); // 一个partition方案
        dfs(s, path, result, 0, 1);
        return result;
    }

    // prev 表示前一个隔板, start 表示当前隔板
    private static void dfs(String s, List<String> path,
                            List<List<String>> result, int prev, int start) {
        if (start == s.length()) { // 最后一个隔板
            if (isPalindrome(s, prev, start - 1)) { // 必须使用
                path.add(s.substring(prev, start));
                result.add(new ArrayList<>(path));
                path.remove(path.size() - 1);
            }
            return;
        }
        // 不断开
        dfs(s, path, result, prev, start + 1);
        // 如果[prev, start-1] 是回文，则可以断开，也可以不断开（上一行已经做了）
        if (isPalindrome(s, prev, start - 1)) {
            // 断开
            path.add(s.substring(prev, start));
            dfs(s, path, result, start, start + 1);
            path.remove(path.size() - 1);
        }
    }

    private static boolean isPalindrome(String s, int start, int end) {
        while (start < end && s.charAt(start) == s.charAt(end)) {
            ++start;
            --end;
        }
        return start >= end;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Palindrome Partitioning
// 时间复杂度O(2^n)，空间复杂度O(n)
class Solution {
public:
    vector<vector<string>> partition(string s) {
        vector<vector<string>> result;
        vector<string> path;  // 一个partition方案
        dfs(s, path, result, 0, 1);
        return result;
    }

    // prev 表示前一个隔板, start 表示当前隔板
    void dfs(string &s, vector<string>& path,
            vector<vector<string>> &result, size_t prev, size_t start) {
        if (start == s.size()) { // 最后一个隔板
            if (isPalindrome(s, prev, start - 1)) { // 必须使用
                path.push_back(s.substr(prev, start - prev));
                result.push_back(path);
                path.pop_back();
            }
            return;
        }
        // 不断开
        dfs(s, path, result, prev, start + 1);
        // 如果[prev, start-1] 是回文，则可以断开，也可以不断开（上一行已经做了）
        if (isPalindrome(s, prev, start - 1)) {
            // 断开
            path.push_back(s.substr(prev, start - prev));
            dfs(s, path, result, start, start + 1);
            path.pop_back();
        }
    }

    bool isPalindrome(const string &s, int start, int end) {
        while (start < end && s[start] == s[end]) {
            ++start;
            --end;
        }
        return start >= end;
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Palindrome Partitioning
# 时间复杂度O(2^n)，空间复杂度O(n)
class Solution:
    def partition(self, s: str) -> list[list[str]]:
        result = []
        path = []  # 一个partition方案
        self.dfs(s, path, result, 0, 1)
        return result

    # prev 表示前一个隔板, start 表示当前隔板
    def dfs(self, s: str, path: list[str], result: list[list[str]], prev: int, start: int) -> None:
        if start == len(s):  # 最后一个隔板
            if self.isPalindrome(s, prev, start - 1):  # 必须使用
                path.append(s[prev:start])
                result.append(path[:])
                path.pop()
            return
        # 不断开
        self.dfs(s, path, result, prev, start + 1)
        # 如果[prev, start-1] 是回文，则可以断开，也可以不断开（上一行已经做了）
        if self.isPalindrome(s, prev, start - 1):
            # 断开
            path.append(s[prev:start])
            self.dfs(s, path, result, start, start + 1)
            path.pop()

    def isPalindrome(self, s: str, start: int, end: int) -> bool:
        while start < end and s[start] == s[end]:
            start += 1
            end -= 1
        return start >= end
```

</TabItem>
</Tabs>

### 深搜 2

另一种写法，更加简洁。这种写法也在 Combination Sum, Combination Sum II 中出现过。

<Tabs
defaultValue="java"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// Palindrome Partitioning
// 时间复杂度O(2^n)，空间复杂度O(n)
public class Solution {
    public List<List<String>> partition(String s) {
        List<List<String>> result = new ArrayList<>();
        List<String> path = new ArrayList<>();  // 一个partition方案
        dfs(s, path, result, 0);
        return result;
    }
    // 搜索必须以s[start]开头的partition方案
    private static void dfs(String s, List<String> path,
                            List<List<String>> result, int start) {
        if (start == s.length()) {
            result.add(new ArrayList<>(path));
            return;
        }
        for (int i = start; i < s.length(); i++) {
            if (isPalindrome(s, start, i)) { // 从i位置砍一刀
                path.add(s.substring(start, i+1));
                dfs(s, path, result, i + 1);  // 继续往下砍
                path.remove(path.size() - 1); // 撤销上上行
            }
        }
    }
    private static boolean isPalindrome(String s, int start, int end) {
        while (start < end && s.charAt(start) == s.charAt(end)) {
            ++start;
            --end;
        }
        return start >= end;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Palindrome Partitioning
// 时间复杂度O(2^n)，空间复杂度O(n)
class Solution {
public:
    vector<vector<string>> partition(string s) {
        vector<vector<string>> result;
        vector<string> path;  // 一个partition方案
        DFS(s, path, result, 0);
        return result;
    }
    // 搜索必须以s[start]开头的partition方案
    void DFS(string &s, vector<string>& path,
            vector<vector<string>> &result, int start) {
        if (start == s.size()) {
            result.push_back(path);
            return;
        }
        for (int i = start; i < s.size(); i++) {
            if (isPalindrome(s, start, i)) { // 从i位置砍一刀
                path.push_back(s.substr(start, i - start + 1));
                DFS(s, path, result, i + 1);  // 继续往下砍
                path.pop_back(); // 撤销上上行
            }
        }
    }
    bool isPalindrome(const string &s, int start, int end) {
        while (start < end && s[start] == s[end]) {
            ++start;
            --end;
        }
        return start >= end;
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Palindrome Partitioning
# 时间复杂度O(2^n)，空间复杂度O(n)
def partition(s):
    result = []
    path = []  # 一个partition方案
    dfs(s, path, result, 0)
    return result

# 搜索必须以s[start]开头的partition方案
def dfs(s, path, result, start):
    if start == len(s):
        result.append(path[:])
        return
    for i in range(start, len(s)):
        if is_palindrome(s, start, i): # 从i位置砍一刀
            path.append(s[start:i+1])
            dfs(s, path, result, i + 1)  # 继续往下砍
            path.pop()  # 撤销上上行

def is_palindrome(s, start, end):
    while start < end and s[start] == s[end]:
        start += 1
        end -= 1
    return start >= end
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
// Palindrome Partitioning
// 动规，时间复杂度O(n^2)，空间复杂度O(1)
public class Solution {
    public List<List<String>> partition(String s) {
        final int n = s.length();
        boolean[][] p = new boolean[n][n]; // whether s[i,j] is palindrome
        for (int i = n - 1; i >= 0; --i)
            for (int j = i; j < n; ++j)
                p[i][j] = s.charAt(i) == s.charAt(j) &&
                        ((j - i < 2) || p[i + 1][j - 1]);

        List<List<String>>[] subPalins = new ArrayList[n]; // sub palindromes of s[0,i]
        for (int i = 0; i < n; ++i) subPalins[i] = new ArrayList<>();
        for (int i = n - 1; i >= 0; --i) {
            for (int j = i; j < n; ++j)
                if (p[i][j]) {
                    String palindrome = s.substring(i, j+1);
                    if (j + 1 < n) {
                        for (List<String> v : subPalins[j + 1]) {
                            ArrayList<String> tmp = new ArrayList<>(v);
                            tmp.add(0, palindrome);
                            subPalins[i].add(tmp);
                        }
                    } else {
                        ArrayList<String> tmp = new ArrayList<>();
                        tmp.add(palindrome);
                        subPalins[i].add(tmp);
                    }
                }
        }
        return subPalins[0];
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Palindrome Partitioning
// 动规，时间复杂度O(n^2)，空间复杂度O(1)
class Solution {
public:
    vector<vector<string> > partition(string s) {
        const int n = s.size();
        bool p[n][n]; // whether s[i,j] is palindrome
        fill_n(&p[0][0], n * n, false);
        for (int i = n - 1; i >= 0; --i)
            for (int j = i; j < n; ++j)
                p[i][j] = s[i] == s[j] && ((j - i < 2) || p[i + 1][j - 1]);

        vector<vector<string> > sub_palins[n]; // sub palindromes of s[0,i]
        for (int i = n - 1; i >= 0; --i) {
            for (int j = i; j < n; ++j)
                if (p[i][j]) {
                    const string palindrome = s.substr(i, j - i + 1);
                    if (j + 1 < n) {
                        for (auto v : sub_palins[j + 1]) {
                            v.insert(v.begin(), palindrome);
                            sub_palins[i].push_back(v);
                        }
                    } else {
                        sub_palins[i].push_back(vector<string> { palindrome });
                    }
                }
        }
        return sub_palins[0];
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Palindrome Partitioning
# 动规，时间复杂度O(n^2)，空间复杂度O(1)
def partition(s):
    n = len(s)
    p = [[False] * n for _ in range(n)]  # whether s[i,j] is palindrome
    for i in range(n-1, -1, -1):
        for j in range(i, n):
            p[i][j] = s[i] == s[j] and (j - i < 2 or p[i + 1][j - 1])

    subPalins = [[] for _ in range(n)]  # sub palindromes of s[0,i]
    for i in range(n-1, -1, -1):
        for j in range(i, n):
            if p[i][j]:
                palindrome = s[i:j+1]
                if j + 1 < n:
                    for v in subPalins[j + 1]:
                        tmp = [palindrome] + v.copy()
                        subPalins[i].append(tmp)
                else:
                    subPalins[i].append([palindrome])
    return subPalins[0]
```

</TabItem>
</Tabs>

### 相关题目

- [Palindrome Partitioning II](../dp/palindrome-partitioning-ii.md)
