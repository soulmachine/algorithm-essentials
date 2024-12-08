---
title: Candy
---

### 描述

There are `N` children standing in a line. Each child is assigned a rating value.

You are giving candies to these children subjected to the following requirements:

- Each child must have at least one candy.
- Children with a higher rating get more candies than their neighbors.

What is the minimum candies you must give?

### 分析

无

### 迭代版

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
// Candy
// 时间复杂度O(n)，空间复杂度O(n)
public class Solution {
    public int candy(int[] ratings) {
        final int n = ratings.length;
        final int[] increment = new int[n];

        // 左右各扫描一遍
        for (int i = 1, inc = 1; i < n; i++) {
            if (ratings[i] > ratings[i - 1])
                increment[i] = Math.max(inc++, increment[i]);
            else
                inc = 1;
        }

        for (int i = n - 2, inc = 1; i >= 0; i--) {
            if (ratings[i] > ratings[i + 1])
                increment[i] = Math.max(inc++, increment[i]);
            else
                inc = 1;
        }
        // 初始值为n，因为每个小朋友至少一颗糖
        int sum = n;
        for (int i : increment) sum += i;
        return sum;
    }
};
```

</TabItem>
<TabItem value="cpp">

```cpp
// Candy
// 时间复杂度O(n)，空间复杂度O(n)
class Solution {
public:
    int candy(vector<int> &ratings) {
        const int n = ratings.size();
        vector<int> increment(n);

        // 左右各扫描一遍
        for (int i = 1, inc = 1; i < n; i++) {
            if (ratings[i] > ratings[i - 1])
                increment[i] = max(inc++, increment[i]);
            else
                inc = 1;
        }

        for (int i = n - 2, inc = 1; i >= 0; i--) {
            if (ratings[i] > ratings[i + 1])
                increment[i] = max(inc++, increment[i]);
            else
                inc = 1;
        }
        // 初始值为n，因为每个小朋友至少一颗糖
        return accumulate(&increment[0], &increment[0]+n, n);
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Candy
# Time complexity O(n), space complexity O(n)
class Solution:
    def candy(self, ratings: list[int]) -> int:
        n = len(ratings)
        increment = [0] * n

        # scan from left and right
        inc = 1
        for i in range(1, n):
            if ratings[i] > ratings[i - 1]:
                increment[i] = max(inc, increment[i])
                inc += 1
            else:
                inc = 1

        inc = 1
        for i in range(n - 2, -1, -1):
            if ratings[i] > ratings[i + 1]:
                increment[i] = max(inc, increment[i])
                inc += 1
            else:
                inc = 1

        # initial sum is n because each child gets at least 1 candy
        sum = n
        for i in increment:
            sum += i
        return sum
```

</TabItem>
</Tabs>

### 递归版

<Tabs
defaultValue="java"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// Candy
// 备忘录法，时间复杂度O(n)，空间复杂度O(n)
// java.lang.StackOverflowError
public class Solution {
    public int candy(int[] ratings) {
        final int[] f = new int[ratings.length];
        int sum = 0;
        for (int i = 0; i < ratings.length; ++i)
            sum += solve(ratings, f, i);
        return sum;
    }
    int solve(int[] ratings, int[] f, int i) {
        if (f[i] == 0) {
            f[i] = 1;
            if (i > 0 && ratings[i] > ratings[i - 1])
                f[i] = Math.max(f[i], solve(ratings, f, i - 1) + 1);
            if (i < ratings.length - 1 && ratings[i] > ratings[i + 1])
                f[i] = Math.max(f[i], solve(ratings, f, i + 1) + 1);
        }
        return f[i];
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Candy
// 备忘录法，时间复杂度O(n)，空间复杂度O(n)
// @author fancymouse (http://weibo.com/u/1928162822)
class Solution {
public:
    int candy(const vector<int>& ratings) {
        vector<int> f(ratings.size());
        int sum = 0;
        for (int i = 0; i < ratings.size(); ++i)
            sum += solve(ratings, f, i);
        return sum;
    }
    int solve(const vector<int>& ratings, vector<int>& f, int i) {
        if (f[i] == 0) {
            f[i] = 1;
            if (i > 0 && ratings[i] > ratings[i - 1])
                f[i] = max(f[i], solve(ratings, f, i - 1) + 1);
            if (i < ratings.size() - 1 && ratings[i] > ratings[i + 1])
                f[i] = max(f[i], solve(ratings, f, i + 1) + 1);
        }
        return f[i];
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Candy
# 备忘录法，时间复杂度O(n)，空间复杂度O(n)
# java.lang.StackOverflowError
class Solution:
    def candy(self, ratings: list[int]) -> int:
        f = [0] * len(ratings)
        return sum(self.solve(ratings, f, i) for i in range(len(ratings)))

    def solve(self, ratings: list[int], f: list[int], i: int) -> int:
        if f[i] == 0:
            f[i] = 1
            if i > 0 and ratings[i] > ratings[i - 1]:
                f[i] = max(f[i], self.solve(ratings, f, i - 1) + 1)
            if i < len(ratings) - 1 and ratings[i] > ratings[i + 1]:
                f[i] = max(f[i], self.solve(ratings, f, i + 1) + 1)
        return f[i]
```

</TabItem>
</Tabs>
