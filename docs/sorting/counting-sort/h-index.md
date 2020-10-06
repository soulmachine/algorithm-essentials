---
title: H-Index
---

### 描述

Given an array of citations (each citation is a non-negative integer) of a researcher, write a function to compute the researcher's h-index.

According to the [definition of h-index on Wikipedia](https://en.wikipedia.org/wiki/H-index): "A scientist has index h if h of his/her N papers have at least h citations each, and the other N − h papers have no more than h citations each."

For example, given `citations = [3, 0, 6, 1, 5]`, which means the researcher has 5 papers in total and each of them had received `3, 0, 6, 1, 5` citations respectively. Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, his h-index is 3.

**Note**: If there are several possible values for `h`, the maximum one is taken as the h-index.

### 分析

H-Index 的含义是，如果一个人发表的所有论文中，有`h`篇论文分别被引用了至少`h`次，那么他的 H-Index 就是`h`。

思路一：先从大到小排序，然后从前往后扫描，如果当前文章数（即当前下标+1）等于值本身，则返回当前文章数作为 h-index；如果当前文章数大于值本身，则返回当前文章数-1 作为 H-Index, 因为当前文章的引用数小于当前文章数，不能算在内。时间复杂度$$O(n\log{}n$$，空间复杂度 O(1)。

思路二：跟思路一类似，不过排序算法换成了计数排序。有一个小技巧，因为 H-Index 最大不可能超过论文综述，所以我们只需要开一个长度为`n+1`的数组，如果某篇论文的引用数超过了`n`，就将其当做`n`。

### 代码 1 全排序

```java
// H-Index
// Time complexity: O(nlogn), Space complexity: O(1)
public class Solution {
    public int hIndex(int[] citations) {
        Arrays.sort(citations);
        reverse(citations);
        for (int i = 0; i < citations.length; ++i) {
            if (i + 1 == citations[i]) return i+1;
            if (i + 1 > citations[i]) return i;
        }
        return citations.length;
    }
    private static void reverse(int[] nums) {
        int left = 0;
        int right = nums.length - 1;
        while (left < right) {
            final int tmp = nums[left];
            nums[left] = nums[right];
            nums[right] = tmp;
            ++left;
            --right;
        }
    }
}
```

### 代码 2 计数排序

```java
// H-Index
// Time complexity: O(n), Space complexity: O(n)
public class Solution {
    public int hIndex(int[] citations) {
        final int n = citations.length + 1;
        final int[] histogram = new int[n+1];

        for (int x : citations) {
            ++histogram[x > n ? n : x];
        }

        int sum = 0; // current number of papers
        for (int i = n; i > 0; --i) {
            sum += histogram[i];
            if (sum >= i) {
                return i;
            }
        }
        return 0;
    }
}
```

### 相关题目

- [H-Index II](../../search/h-index-ii.md)
