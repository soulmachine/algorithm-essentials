---
title: Word Break
---

### 描述

Given a string s and a dictionary of words dict, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

For example, given

s = `"leetcode"`,

dict = `["leet", "code"]`.

Return true because `"leetcode"` can be segmented as `"leet code"`.

### 分析

本题最直观的做法是 BFS，也可以用 DFS 和动态规划。

### 代码

#### DFS

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
// Word Break
// 深搜，超时
// 时间复杂度O(2^n)，空间复杂度O(n)
class Solution {
    public boolean wordBreak(String s, Set<String> dict) {
        return dfs(s, dict, 0, 1);
    }
    private static boolean dfs(String s, Set<String> dict,
                    int start, int cur) {
        if (cur == s.length()) {
            return dict.contains(s.substring(start, cur));
        }
        if (dfs(s, dict, start, cur+1)) return true; // no cut
        if (dict.contains(s.substring(start, cur))) // cut here
            if (dfs(s, dict, cur+1, cur+1)) return true;
        return false;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Word Break
// 深搜，超时
// 时间复杂度O(2^n)，空间复杂度O(n)
class Solution {
public:
    bool wordBreak(string s, unordered_set<string> &dict) {
        return dfs(s, dict, 0, 1);
    }
private:
    static bool dfs(const string &s, unordered_set<string> &dict,
            size_t start, size_t cur) {
        if (cur == s.size()) {
            return dict.find(s.substr(start, cur-start)) != dict.end();
        }
        if (dfs(s, dict, start, cur+1)) return true; // no cut
        if (dict.find(s.substr(start, cur-start)) != dict.end()) // cut here
            if (dfs(s, dict, cur+1, cur+1)) return true;
        return false;
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Word Break
# 深搜，超时
# 时间复杂度O(2^n)，空间复杂度O(n)
class Solution:
    def wordBreak(self, s: str, dict: set[str]) -> bool:
        return self.dfs(s, dict, 0, 1)

    def dfs(self, s: str, dict: set[str], start: int, cur: int) -> bool:
        if cur == len(s):
            return s[start:cur] in dict

        if self.dfs(s, dict, start, cur + 1):  # no cut
            return True

        if s[start:cur] in dict:  # cut here
            if self.dfs(s, dict, cur, cur + 1):
                return True

        return False
```

</TabItem>
</Tabs>

#### BFS

<Tabs
defaultValue="java"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// Word Break
// BFS
// Time Complexity: O(n^2), Space Complexity: O(n)
public class Solution {
    public boolean wordBreak(String s, List<String> wordDict) {
        Set<String> set = new HashSet<>(wordDict);
        Queue<Integer> queue = new LinkedList<>();
        boolean[] visited = new boolean[s.length()];

        queue.offer(0);
        while (!queue.isEmpty()) {
            int start = queue.poll();
            if (!visited[start]) {
                for (int end = start + 1; end <= s.length(); end++) {
                    if (set.contains(s.substring(start, end))) {
                        queue.offer(end);
                        if (end == s.length()) {
                            return true;
                        }
                    }
                }
                visited[start] = true;
            }
        }
        return false;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// TODO
```

</TabItem>

<TabItem value="python">

```python
# Word Break
# BFS
# Time Complexity: O(n^2), Space Complexity: O(n)
def wordBreak(s: str, wordDict: list[str]) -> bool:
    word_set = set(wordDict)
    queue = [0]
    visited = [False] * len(s)

    while queue:
        start = queue.pop(0)
        if not visited[start]:
            for end in range(start + 1, len(s) + 1):
                if s[start:end] in word_set:
                    queue.append(end)
                    if end == len(s):
                        return True
            visited[start] = True
    return False
```

</TabItem>
</Tabs>

#### 动规

本题可以视为一个完全背包问题，令函数`f(i)`表示`s[0,i)`是否可以分词，则状态转移方程为

`f(i) = any_of(f(j) && s[j,i] in dict), 0 <= j < i`

<Tabs
defaultValue="java"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// Word Break
// 动规，时间复杂度O(n^2)，空间复杂度O(n)
class Solution {
    public boolean wordBreak(String s, List<String> wordDict) {
        Set<String> dict = new HashSet<>();
        dict.addAll(wordDict);
        boolean[] dp = new boolean[s.length() + 1];
        dp[0] = true; // base case, empty string
        for (int i = 1; i <= s.length(); ++i) {
            for (int j = i - 1; j >= 0; --j) {
                dp[i] = dp[i] || dp[j] && dict.contains(s.substring(j, i));
            }
        }
        return dp[s.length()];
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Word Break
// 动规，时间复杂度O(n^2)，空间复杂度O(n)
class Solution {
public:
    bool wordBreak(const string& s, const vector<string>& wordDict) {
        unordered_set<string> dict(wordDict.begin(), wordDict.end());
        vector<bool> dp(s.size() + 1, false);
        dp[0] = true; // base case
        for (int i = 1; i <= s.size(); ++i) {
            for (int j = i - 1; j >= 0; --j) {
                dp[i] = dp[i] || dp[j] && dict.find(s.substr(j, i - j)) != dict.end();
            }
        }
        return dp[s.size()];
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Word Break
# 动规，时间复杂度O(n^2)，空间复杂度O(n)
class Solution:
    def wordBreak(self, s: str, wordDict: list[str]) -> bool:
        dict_set = set(wordDict)
        dp = [False] * (len(s) + 1)
        dp[0] = True  # base case, empty string
        for i in range(1, len(s) + 1):
            for j in range(i - 1, -1, -1):
                dp[i] = dp[i] or (dp[j] and s[j:i] in dict_set)
        return dp[len(s)]
```

</TabItem>
</Tabs>

### 相关题目

- [Word Break II](word-break-ii.md)
