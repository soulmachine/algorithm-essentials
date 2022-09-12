---
title: Permutation Sequence
---

### 描述

The set `[1,2,3,…,n]` contains a total of `n!` unique permutations.

By listing and labeling all of the permutations in order,
We get the following sequence (ie, for `n = 3`):

```
"123"
"132"
"213"
"231"
"312"
"321"
```

Given `n` and `k`, return the kth permutation sequence.

Note: Given `n` will be between 1 and 9 inclusive.

### 分析

首先可以想到一个简单直白的方法，即调用 `k-1` 次 `next_permutation()`，从而得到第`k`个排列。这个方法把前`k`个排列全部求出来了，比较浪费，时间复杂度是 `O(kn)`，所以会超时。有没有办法直接求第`k`个排列呢？有！

利用康托编码的思路，假设有`n`个不重复的元素，第`k`个排列是$$a_1, a_2, a_3, ..., a_n$$，那么$$a_1$$是哪一个位置呢？

我们把$$a_1$$去掉，那么剩下的排列为
$$a_2, a_3, ..., a_n$$, 共计`n-1`个元素，`n-1`个元素共有`(n-1)!`个排列，于是就可以知道 $$a_1 = k / (n-1)!$$。

同理，$$a_2, a_3, ..., a_n$$ 的值推导如下：

$$k_2 = k\%(n-1)!$$

$$a_2 = k_2/(n-2)!$$

$$\quad \cdots$$

$$k_{n-1} = k_{n-2}\%2!$$

$$a_{n-1} = k_{n-1}/1!$$

$$a_n = 0$$

### 康托编码

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
// Permutation Sequence
// 康托编码
// 时间复杂度O(n)，空间复杂度O(1)
public class Solution {
    public String getPermutation(int n, int k) {
        string s(n, '0');
        string result;
        for (int i = 0; i < n; ++i)
            s[i] += i + 1;

        return kth_permutation(s, k);
    }
private:
    int factorial(int n) {
        int result = 1;
        for (int i = 1; i < n+1; ++i)
            result *= i;
        return result;
    }

    // s 已排好序，是第一个排列
    string kth_permutation(string &s, int k) {
        const int n = s.size();
        string result;

        int base = factorial(n - 1);
        --k;  // 康托编码从0开始

        for (int i = n - 1; i > 0; k %= base, base /= i, --i) {
            auto a = next(s.begin(), k / base);
            result.push_back(*a);
            s.erase(a);
        }

        result.push_back(s[0]); // 最后一个
        return result;
    }
};
```

</TabItem>
<TabItem value="cpp">

```cpp
// Permutation Sequence
// 康托编码
// 时间复杂度O(n)，空间复杂度O(1)
class Solution {
public:
    string getPermutation(int n, int k) {
        string s(n, '0');
        string result;
        for (int i = 0; i < n; ++i)
            s[i] += i + 1;

        return kth_permutation(s, k);
    }
private:
    int factorial(int n) {
        int result = 1;
        for (int i = 1; i < n+1; ++i)
            result *= i;
        return result;
    }

    // s 已排好序，是第一个排列
    string kth_permutation(string &s, int k) {
        const int n = s.size();
        string result;

        int base = factorial(n - 1);
        --k;  // 康托编码从0开始

        for (int i = n - 1; i > 0; k %= base, base /= i, --i) {
            auto a = next(s.begin(), k / base);
            result.push_back(*a);
            s.erase(a);
        }

        result.push_back(s[0]); // 最后一个
        return result;
    }
};
```

</TabItem>
</Tabs>

### 相关题目

- [Next Permutation](next-permutation.md)
- [Permutations](../brute-force/permutations.md)
- [Permutations II](../brute-force/permutations-ii.md)
- [Combinations](../brute-force/combinations.md)
