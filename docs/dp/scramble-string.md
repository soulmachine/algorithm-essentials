---
title: Scramble String
---

### 描述

Given a string `s1`, we may represent it as a binary tree by partitioning it to two non-empty substrings recursively.

Below is one possible representation of `s1 = "great"`:

```
    great
   /    \
  gr    eat
 / \    /  \
g   r  e   at
           / \
          a   t
```

To scramble the string, we may choose any non-leaf node and swap its two children.

For example, if we choose the node `"gr"` and swap its two children, it produces a scrambled string `"rgeat"`.

```
    rgeat
   /    \
  rg    eat
 / \    /  \
r   g  e   at
           / \
          a   t
```

We say that `"rgeat"` is a scrambled string of `"great"`.

Similarly, if we continue to swap the children of nodes `"eat"` and `"at"`, it produces a scrambled string `"rgtae"`.

```
    rgtae
   /    \
  rg    tae
 / \    /  \
r   g  ta  e
       / \
      t   a
```

We say that `"rgtae"` is a scrambled string of `"great"`.

Given two strings `s1` and `s2` of the same length, determine if `s2` is a scrambled string of `s1`.

### 分析

首先想到的是递归（即深搜），对两个 string 进行分割，然后比较四对字符串。代码虽然简单，但是复杂度比较高。有两种加速策略，一种是剪枝，提前返回；一种是加缓存，缓存中间结果，即 memorization（翻译为记忆化搜索）。

剪枝可以五花八门，要充分观察，充分利用信息，找到能让节点提前返回的条件。例如，判断两个字符串是否互为 scamble，至少要求每个字符在两个字符串中出现的次数要相等，如果不相等则返回 false。

加缓存，可以用数组或 HashMap。本题维数较高，用 HashMap，`map`和`unordered_map`均可。

既然可以用记忆化搜索，这题也一定可以用动规。设状态为`f[n][i][j]`，表示长度为`n`，起点为`s1[i]`和起点为`s2[j]`两个字符串是否互为 scramble，则状态转移方程为

```
f[n][i][j]} =  (f[k][i][j] && f[n-k][i+k][j+k])
            || (f[k][i][j+n-k] && f[n-k][i+k][j])
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
// Scramble String
// 递归，会超时，仅用来帮助理解
// 时间复杂度O(n^6)，空间复杂度O(1)
public class Solution {
    public boolean isScramble(String s1, String s2) {
        return isScramble(s1, 0, s1.length(), s2, 0);
    }
    private static boolean isScramble(String s1, int begin1, int end1,
                                      String s2, int begin2) {
        final int length = end1 - begin1;
        final int end2 = begin2 + length;

        if (length == 1) return s1.charAt(begin1) == s2.charAt(begin2);

        for (int i = 1; i < length; ++i)
            if ((isScramble(s1, begin1, begin1 + i, s2, begin2)
                    && isScramble(s1, begin1 + i, end1, s2, begin2 + i))
                    || (isScramble(s1, begin1, begin1 + i, s2, end2 - i)
                    && isScramble(s1, begin1 + i, end1, s2, begin2)))
                return true;

        return false;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Scramble String
// 递归，会超时，仅用来帮助理解
// 时间复杂度O(n^6)，空间复杂度O(1)
class Solution {
public:
    bool isScramble(const string& s1, const string& s2) {
        return isScramble(s1.begin(), s1.end(), s2.begin());
    }
private:
    typedef string::iterator Iterator;
    bool isScramble(Iterator first1, Iterator last1, Iterator first2) {
        auto length = distance(first1, last1);
        auto last2 = next(first2, length);

        if (length == 1) return *first1 == *first2;

        for (int i = 1; i < length; ++i)
            if ((isScramble(first1, first1 + i, first2)
                 && isScramble(first1 + i, last1, first2 + i))
                    || (isScramble(first1, first1 + i, last2 - i)
                            && isScramble(first1 + i, last1, first2)))
                return true;

        return false;
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Scramble String
# 递归，会超时，仅用来帮助理解
# 时间复杂度O(n^6)，空间复杂度O(1)
class Solution:
    def isScramble(self, s1: str, s2: str) -> bool:
        return self._isScramble(s1, 0, len(s1), s2, 0)

    def _isScramble(self, s1: str, begin1: int, end1: int, s2: str, begin2: int) -> bool:
        length = end1 - begin1
        end2 = begin2 + length

        if length == 1:
            return s1[begin1] == s2[begin2]

        for i in range(1, length):
            if ((self._isScramble(s1, begin1, begin1 + i, s2, begin2)
                    and self._isScramble(s1, begin1 + i, end1, s2, begin2 + i))
                    or (self._isScramble(s1, begin1, begin1 + i, s2, end2 - i)
                    and self._isScramble(s1, begin1 + i, end1, s2, begin2))):
                return True

        return False
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
// Scramble String
// 动规，时间复杂度O(n^3)，空间复杂度O(n^3)
public class Solution {
    public boolean isScramble(String s1, String s2) {
        final int N = s1.length();
        if (N != s2.length()) return false;

        // f[n][i][j]，表示长度为n，起点为s1[i]和
        // 起点为s2[j]两个字符串是否互为scramble
        boolean[][][] f = new boolean[N+1][N][N];

        for (int i = 0; i < N; i++)
            for (int j = 0; j < N; j++)
                f[1][i][j] = s1.charAt(i) == s2.charAt(j);

        for (int n = 1; n <= N; ++n) {
            for (int i = 0; i + n <= N; ++i) {
                for (int j = 0; j + n <= N; ++j) {
                    for (int k = 1; k < n; ++k) {
                        if ((f[k][i][j] && f[n - k][i + k][j + k]) ||
                                (f[k][i][j + n - k] && f[n - k][i + k][j])) {
                            f[n][i][j] = true;
                            break;
                        }
                    }
                }
            }
        }
        return f[N][0][0];
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Scramble String
// 动规，时间复杂度O(n^3)，空间复杂度O(n^3)
class Solution {
public:
    bool isScramble(const string& s1, const string& s2) {
        const int N = s1.size();
        if (N != s2.size()) return false;

        // f[n][i][j]，表示长度为n，起点为s1[i]和
        // 起点为s2[j]两个字符串是否互为scramble
        bool f[N + 1][N][N];
        fill_n(&f[0][0][0], (N + 1) * N * N, false);

        for (int i = 0; i < N; i++)
            for (int j = 0; j < N; j++)
                f[1][i][j] = s1[i] == s2[j];

        for (int n = 1; n <= N; ++n) {
            for (int i = 0; i + n <= N; ++i) {
                for (int j = 0; j + n <= N; ++j) {
                    for (int k = 1; k < n; ++k) {
                        if ((f[k][i][j] && f[n - k][i + k][j + k]) ||
                                (f[k][i][j + n - k] && f[n - k][i + k][j])) {
                            f[n][i][j] = true;
                            break;
                        }
                    }
                }
            }
        }
        return f[N][0][0];
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Scramble String
# 动规，时间复杂度O(n^3)，空间复杂度O(n^3)
class Solution:
    def isScramble(self, s1: str, s2: str) -> bool:
        N = len(s1)
        if N != len(s2):
            return False

        # f[n][i][j]，表示长度为n，起点为s1[i]和
        # 起点为s2[j]两个字符串是否互为scramble
        f = [[[False] * N for _ in range(N)] for _ in range(N + 1)]

        for i in range(N):
            for j in range(N):
                f[1][i][j] = s1[i] == s2[j]

        for n in range(1, N + 1):
            for i in range(N - n + 1):
                for j in range(N - n + 1):
                    for k in range(1, n):
                        if ((f[k][i][j] and f[n - k][i + k][j + k]) or
                                (f[k][i][j + n - k] and f[n - k][i + k][j])):
                            f[n][i][j] = True
                            break

        return f[N][0][0]
```

</TabItem>
</Tabs>

### 递归+剪枝

<Tabs
defaultValue="java"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// Scramble String
// 递归+剪枝
// 时间复杂度O(n^6)，空间复杂度O(1)
public class Solution {
    public boolean isScramble(String s1, String s2) {
        return isScramble(s1, 0, s1.length(), s2, 0);
    }
    private static boolean isScramble(String s1, int begin1, int end1,
                                      String s2, int begin2) {
        final int length = end1 - begin1;
        final int end2 = begin2 + length;
        if (length == 1) return s1.charAt(begin1) == s2.charAt(begin2);

        // 剪枝，提前返回
        int[] A = new int[26]; // 每个字符的计数器
        for(int i = 0; i < length; i++) A[s1.charAt(begin1+i)-'a']++;
        for(int i = 0; i < length; i++) A[s2.charAt(begin2+i)-'a']--;
        for(int i = 0; i < 26; i++) if (A[i] != 0) return false;

        for (int i = 1; i < length; ++i)
            if ((isScramble(s1, begin1, begin1 + i, s2, begin2)
                    && isScramble(s1, begin1 + i, end1, s2, begin2 + i))
                    || (isScramble(s1, begin1, begin1 + i, s2, end2 - i)
                    && isScramble(s1, begin1 + i, end1, s2, begin2)))
                return true;

        return false;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Scramble String
// 递归+剪枝
// 时间复杂度O(n^6)，空间复杂度O(1)
class Solution {
public:
    bool isScramble(const string& s1, const string& s2) {
        return isScramble(s1.begin(), s1.end(), s2.begin());
    }
private:
    typedef string::const_iterator Iterator;
    bool isScramble(Iterator first1, Iterator last1, Iterator first2) {
        auto length = distance(first1, last1);
        auto last2 = next(first2, length);
        if (length == 1) return *first1 == *first2;

        // 剪枝，提前返回
        int A[26]; // 每个字符的计数器
        fill(A, A + 26, 0);
        for(int i = 0; i < length; i++) A[*(first1+i)-'a']++;
        for(int i = 0; i < length; i++) A[*(first2+i)-'a']--;
        for(int i = 0; i < 26; i++) if (A[i] != 0) return false;

        for (int i = 1; i < length; ++i)
            if ((isScramble(first1, first1 + i, first2)
                 && isScramble(first1 + i, last1, first2 + i))
                    || (isScramble(first1, first1 + i, last2 - i)
                            && isScramble(first1 + i, last1, first2)))
                return true;

        return false;
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Scramble String
# 递归+剪枝
# 时间复杂度O(n^6)，空间复杂度O(1)
class Solution:
    def isScramble(self, s1: str, s2: str) -> bool:
        return self.is_scramble_helper(s1, 0, len(s1), s2, 0)

    def is_scramble_helper(self, s1, begin1, end1, s2, begin2):
        length = end1 - begin1
        end2 = begin2 + length
        if length == 1:
            return s1[begin1] == s2[begin2]

        # 剪枝，提前返回
        A = [0] * 26  # 每个字符的计数器
        for i in range(length):
            A[ord(s1[begin1 + i]) - ord('a')] += 1
        for i in range(length):
            A[ord(s2[begin2 + i]) - ord('a')] -= 1
        for i in range(26):
            if A[i] != 0:
                return False

        for i in range(1, length):
            if ((self.is_scramble_helper(s1, begin1, begin1 + i, s2, begin2)
                 and self.is_scramble_helper(s1, begin1 + i, end1, s2, begin2 + i))
                or (self.is_scramble_helper(s1, begin1, begin1 + i, s2, end2 - i)
                    and self.is_scramble_helper(s1, begin1 + i, end1, s2, begin2))):
                return True

        return False
```

</TabItem>
</Tabs>

### 备忘录法

<Tabs
defaultValue="java"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// Scramble String
// 递归+map做cache
// 时间复杂度O(n^3)，空间复杂度O(n^3), TLE
public class Solution {
    public boolean isScramble(String s1, String s2) {
        cache.clear();
        return isScramble(s1, 0, s1.length(), s2, 0);
    }

    final private HashMap<Triple, Boolean> cache = new HashMap<>();

    private boolean isScramble(String s1, int begin1, int end1,
                               String s2, int begin2) {
        final int length = end1 - begin1;
        final int end2 = begin2 + length;

        if (length == 1) return s1.charAt(begin1) == s2.charAt(begin2);

        for (int i = 1; i < length; ++i)
            if ((getOrUpdate(s1, begin1, begin1 + i, s2, begin2)
                    && getOrUpdate(s1, begin1 + i, end1, s2, begin2 + i))
                    || (getOrUpdate(s1, begin1, begin1 + i, s2, end2 - i)
                    && getOrUpdate(s1, begin1 + i, end1, s2, begin2)))
                return true;

        return false;
    }

    boolean getOrUpdate(String s1, int begin1, int end1,
                     String s2, int begin2) {
        Triple key = new Triple(begin1, end1, begin2);
        if (!cache.containsKey(key)) {
            boolean result = isScramble(s1, begin1, end1, s2, begin2);
            cache.put(key, result);
            return result;
        } else {
            return cache.get(key);
        }
    }
    static class Triple {
        private int i;
        private int j;
        private int k;

        public Triple(int i, int j, int k) {
            this.i = i;
            this.j = j;
            this.k = k;
        }
        @Override
        public int hashCode() {
            int hash = 0;
            hash = i * 31 + j;
            hash = hash * 31 * k;
            return hash;
        }
        @Override
        public boolean equals(Object other) {
            if (this == other) return true;
            if (this.hashCode() != other.hashCode()) return false;
            if (!(other instanceof Triple)) return false;
            Triple o = (Triple)other;
            return this.i == o.i && this.j == o.j && this.k == o.k;
        }
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
typedef string::const_iterator Iterator;
typedef tuple<Iterator, Iterator, Iterator> Key;
// 定制一个哈希函数
namespace std {
template<> struct hash<Key> {
    size_t operator()(const Key & x) const {
        Iterator first1, last1, first2;
        tie(first1, last1, first2) = x;

        int result = *first1;
        result = result * 31 + *last1;
        result = result * 31 + *first2;
        result = result * 31 + *(next(first2, distance(first1, last1)-1));
        return result;
    }
};
}

// Scramble String
// 递归+unordered_map做cache，比map快
// 时间复杂度O(n^3)，空间复杂度O(n^3)
class Solution {
public:
    unordered_map<Key, bool> cache;

    bool isScramble(const string& s1, const string& s2) {
        cache.clear();
        return isScramble(s1.begin(), s1.end(), s2.begin());
    }

    bool isScramble(Iterator first1, Iterator last1, Iterator first2) {
        auto length = distance(first1, last1);
        auto last2 = next(first2, length);

        if (length == 1)
            return *first1 == *first2;

        for (int i = 1; i < length; ++i)
            if ((getOrUpdate(first1, first1 + i, first2)
                    && getOrUpdate(first1 + i, last1, first2 + i))
                    || (getOrUpdate(first1, first1 + i, last2 - i)
                            && getOrUpdate(first1 + i, last1, first2)))
                return true;

        return false;
    }

    bool getOrUpdate(Iterator first1, Iterator last1, Iterator first2) {
        auto key = make_tuple(first1, last1, first2);
        auto pos = cache.find(key);

        return (pos != cache.end()) ?
                pos->second : (cache[key] = isScramble(first1, last1, first2));
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Scramble String
# 递归+map做cache
# 时间复杂度O(n^3)，空间复杂度O(n^3), TLE
class Solution:
    def __init__(self):
        self.cache = {}

    def isScramble(self, s1: str, s2: str) -> bool:
        self.cache.clear()
        return self._isScramble(s1, 0, len(s1), s2, 0)

    def _isScramble(self, s1: str, begin1: int, end1: int, s2: str, begin2: int) -> bool:
        length = end1 - begin1
        end2 = begin2 + length

        if length == 1:
            return s1[begin1] == s2[begin2]

        for i in range(1, length):
            if ((self.getOrUpdate(s1, begin1, begin1 + i, s2, begin2)
                    and self.getOrUpdate(s1, begin1 + i, end1, s2, begin2 + i))
                    or (self.getOrUpdate(s1, begin1, begin1 + i, s2, end2 - i)
                    and self.getOrUpdate(s1, begin1 + i, end1, s2, begin2))):
                return True

        return False

    def getOrUpdate(self, s1: str, begin1: int, end1: int, s2: str, begin2: int) -> bool:
        key = (begin1, end1, begin2)
        if key not in self.cache:
            result = self._isScramble(s1, begin1, end1, s2, begin2)
            self.cache[key] = result
            return result
        else:
            return self.cache[key]
```

</TabItem>
</Tabs>
