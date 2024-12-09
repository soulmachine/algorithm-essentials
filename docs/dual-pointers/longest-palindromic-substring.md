---
title: Longest Palindromic Substring
---

### 描述

Given a string `S`, find the longest palindromic substring in `S`. You may assume that the maximum length of `S` is 1000, and there exists one unique longest palindromic substring.

### 分析

最长回文子串，非常经典的题。

最简单的思路是暴力枚举，两两组合枚举所有的子串，检查每个子串是否是回文串，以每个元素为中间元素，时间复杂度`O(n^3)`。

可以换一种思路进行暴力枚举，以每个字符为中心，双指针背向而行，检测子串是否是回文串，时间复杂度O(n^2)。不过要注意，回文子串有两种情况，奇数和偶数，枚举的时候要覆盖这2种情况。

### 代码

#### 中心线枚举算法

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
// Longest Palindromic Substring
// 中心线枚举算法
// 时间复杂度O(n^2)，空间复杂度O(1)
class Solution {
    public String longestPalindrome(String s) {
        String longest = "";
        for (int i = 0; i < s.length(); i ++) {
            // 回文子串的长度是奇数
            String oddPalindrome = getPalindrome(s, i, i);
            if (longest.length() < oddPalindrome.length()) {
                longest = oddPalindrome;
            }

            // 回文子串的长度是偶数
            String evenPalindrome = getPalindrome(s, i, i + 1);
            if (longest.length() < evenPalindrome.length()) {
                longest = evenPalindrome;
            }
        }

        return longest;
    }

    private String getPalindrome(String s, int left, int right) {
        while(left >= 0 && right < s.length()) {
            if (s.charAt(left) != s.charAt(right)) {
                break;
            }
            left--;
            right++;
        }
        return s.substring(left + 1, right);
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
# Longest Palindromic Substring
# Center enumeration algorithm
# Time complexity O(n^2), Space complexity O(1)
class Solution:
    def longestPalindrome(self, s: str) -> str:
        longest = ""
        for i in range(len(s)):
            # palindrome substring with odd length
            odd_palindrome = self.get_palindrome(s, i, i)
            if len(longest) < len(odd_palindrome):
                longest = odd_palindrome

            # palindrome substring with even length
            even_palindrome = self.get_palindrome(s, i, i + 1)
            if len(longest) < len(even_palindrome):
                longest = even_palindrome

        return longest

    def get_palindrome(self, s: str, left: int, right: int) -> str:
        while left >= 0 and right < len(s):
            if s[left] != s[right]:
                break
            left -= 1
            right += 1
        return s[left + 1:right]
```

</TabItem>
</Tabs>


#### Manacher’s Algorithm

<Tabs
defaultValue="java"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// Longest Palindromic Substring
// Manacher’s Algorithm
// 时间复杂度O(n)，空间复杂度O(n)
class Solution {
    // Transform S into T.
    // For example, S = "abba", T = "^#a#b#b#a#$".
    // ^ and $ signs are sentinels appended to each end to avoid bounds checking
    public String preProcess(final String s) {
        int n = s.length();
        if (n == 0) return "^$";

        StringBuilder ret = new StringBuilder("^");
        for (int i = 0; i < n; i++) ret.append("#" + s.charAt(i));

        ret.append("#$");
        return ret.toString();
    }

    String longestPalindrome(String s) {
        String T = preProcess(s);
        final int n = T.length();
        // 以T[i]为中心，向左/右扩张的长度，不包含T[i]自己，
        // 因此 P[i]是源字符串中回文串的长度
        int[] P = new int[n];
        int C = 0, R = 0;

        for (int i = 1; i < n - 1; i++) {
            int iMirror = 2 * C - i; // equals to i' = C - (i-C)

            P[i] = (R > i) ? Math.min(R - i, P[iMirror]) : 0;

            // Attempt to expand palindrome centered at i
            while (T.charAt(i + 1 + P[i]) == T.charAt(i - 1 - P[i]))
                P[i]++;

            // If palindrome centered at i expand past R,
            // adjust center based on expanded palindrome.
            if (i + P[i] > R) {
                C = i;
                R = i + P[i];
            }
        }

        // Find the maximum element in P.
        int maxLen = 0;
        int centerIndex = 0;
        for (int i = 1; i < n - 1; i++) {
            if (P[i] > maxLen) {
                maxLen = P[i];
                centerIndex = i;
            }
        }

        final int start =(centerIndex - 1 - maxLen) / 2;
        return s.substring(start, start + maxLen);
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Longest Palindromic Substring
// Manacher’s Algorithm
// 时间复杂度O(n)，空间复杂度O(n)
class Solution {
public:
    // Transform S into T.
    // For example, S = "abba", T = "^#a#b#b#a#$".
    // ^ and $ signs are sentinels appended to each end to avoid bounds checking
    string preProcess(const string& s) {
        int n = s.length();
        if (n == 0) return "^$";

        string ret = "^";
        for (int i = 0; i < n; i++) ret += "#" + s.substr(i, 1);

        ret += "#$";
        return ret;
    }

    string longestPalindrome(string s) {
        string T = preProcess(s);
        const int n = T.length();
        // 以T[i]为中心，向左/右扩张的长度，不包含T[i]自己，
        // 因此 P[i]是源字符串中回文串的长度
        int P[n];
        int C = 0, R = 0;

        for (int i = 1; i < n - 1; i++) {
            int i_mirror = 2 * C - i; // equals to i' = C - (i-C)

            P[i] = (R > i) ? min(R - i, P[i_mirror]) : 0;

            // Attempt to expand palindrome centered at i
            while (T[i + 1 + P[i]] == T[i - 1 - P[i]])
                P[i]++;

            // If palindrome centered at i expand past R,
            // adjust center based on expanded palindrome.
            if (i + P[i] > R) {
                C = i;
                R = i + P[i];
            }
        }

        // Find the maximum element in P.
        int max_len = 0;
        int center_index = 0;
        for (int i = 1; i < n - 1; i++) {
            if (P[i] > max_len) {
                max_len = P[i];
                center_index = i;
            }
        }

        return s.substr((center_index - 1 - max_len) / 2, max_len);
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Longest Palindromic Substring
# Manacher's Algorithm
# 时间复杂度O(n)，空间复杂度O(n)
class Solution:
    # Transform S into T.
    # For example, S = "abba", T = "^#a#b#b#a#$".
    # ^ and $ signs are sentinels appended to each end to avoid bounds checking
    def preProcess(self, s: str) -> str:
        n = len(s)
        if n == 0:
            return "^$"

        ret = ["^"]
        for i in range(n):
            ret.append("#" + s[i])

        ret.append("#$")
        return "".join(ret)

    def longestPalindrome(self, s: str) -> str:
        T = self.preProcess(s)
        n = len(T)
        # 以T[i]为中心，向左/右扩张的长度，不包含T[i]自己，
        # 因此 P[i]是源字符串中回文串的长度
        P = [0] * n
        C = 0
        R = 0

        for i in range(1, n - 1):
            iMirror = 2 * C - i  # equals to i' = C - (i-C)

            P[i] = min(R - i, P[iMirror]) if R > i else 0

            # Attempt to expand palindrome centered at i
            while T[i + 1 + P[i]] == T[i - 1 - P[i]]:
                P[i] += 1

            # If palindrome centered at i expand past R,
            # adjust center based on expanded palindrome.
            if i + P[i] > R:
                C = i
                R = i + P[i]

        # Find the maximum element in P.
        maxLen = 0
        centerIndex = 0
        for i in range(1, n - 1):
            if P[i] > maxLen:
                maxLen = P[i]
                centerIndex = i

        start = (centerIndex - 1 - maxLen) // 2
        return s[start:start + maxLen]
```

</TabItem>
</Tabs>
