---
title: Maximum Product of Word Lengths
---

### 描述

Given a string array `words`, find the maximum value of `length(word[i]) * length(word[j])` where the two words do not share common letters. You may assume that each word will contain only lower case letters. If no such two words exist, return 0.

**Example 1**:

Given `["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]`

Return `16`

The two words can be `"abcw"`, `"xtfn"`.

**Example 2**:

Given `["a", "ab", "abc", "d", "cd", "bcd", "abcd"]`

Return 4

The two words can be `"ab"`, `"cd"`.

**Example 3**:

Given `["a", "aa", "aaa", "aaaa"]`

Return 0

No such pair of words.

### 分析

由于只有 26 个小写字母，所以，我们可以为数组中的每个`word`开辟一个长为 26 的布尔数组作为哈希表，然后用一个两重 for 循环，两两比较，如果不存在公共的字母，则计算二者的长度的乘积，取最大作为最终结果。时间复杂度`O(26n^2)`，空间复杂度`O(26n)`。

上面的方法可以进一步优化，即长度为 26 的布尔数组，小于 32 位，可以编码为一个整数，这样两个整数按位与，如果结果为 1，说明存在公共字母，如果结果为 0，说明不存在公共字母。时间复杂度`O(n^2)`，空间复杂度`O(n)`。

### 解法 1

```java
// Maximum Product of Word Lengths
// Time Complexity: O(26n^2), Space Complexity: O(26n)
public class Solution {
    public int maxProduct(String[] words) {
        final int n = words.length;
        final boolean[][] hashset = new boolean[n][ALPHABET_SIZE];

        for (int i = 0; i < n; ++i) {
            for (int j = 0; j < words[i].length(); ++j) {
                hashset[i][words[i].charAt(j) - 'a'] = true;
            }
        }

        int result = 0;
        for (int i = 0; i < n; ++i) {
            for (int j = i + 1; j < n; ++j) {
                boolean hasCommon = false;
                for (int k = 0; k < ALPHABET_SIZE; ++k) {
                    if (hashset[i][k] && hashset[j][k]) {
                        hasCommon = true;
                        break;
                    }
                }
                int tmp = words[i].length() * words[j].length();
                if (!hasCommon && tmp > result) {
                    result = tmp;
                }
            }
        }
        return result;
    }
    private static final int ALPHABET_SIZE = 26;
}
```

### 解法 2

```java
// Maximum Product of Word Lengths
// Time Complexity: O(n^2), Space Complexity: O(n)
public class Solution {
    public int maxProduct(String[] words) {
        final int n = words.length;
        final int[] hashset = new int[n];

        for (int i = 0; i < n; ++i) {
            for (int j = 0; j < words[i].length(); ++j) {
                hashset[i] |= 1 << (words[i].charAt(j) - 'a');
            }
        }

        int result = 0;
        for (int i = 0; i < n; ++i) {
            for (int j = i + 1; j < n; ++j) {
                int tmp = words[i].length() * words[j].length();
                if ((hashset[i] & hashset[j]) == 0 && tmp > result) {
                    result = tmp;
                }
            }
        }
        return result;
    }
}
```
