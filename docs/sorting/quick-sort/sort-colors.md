---
title: Sort Colors
---

### 描述

Given an array with `n` objects colored red, white or blue, sort them so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Note:
You are not suppose to use the library's sort function for this problem.

**Follow up**:

A rather straight forward solution is a two-pass algorithm using counting sort.

First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.

Could you come up with an one-pass algorithm using only constant space?

### 分析

由于 0, 1, 2 非常紧凑，首先想到计数排序(counting sort)，但需要扫描两遍，不符合题目要求。

由于只有三种颜色，可以设置两个 index，一个是 red 的 index，一个是 blue 的 index，两边往中间走。时间复杂度`O(n)`，空间复杂度`O(1)`。

第 3 种思路，利用快速排序里 partition 的思想，第一次将数组按 0 分割，第二次按 1 分割，排序完毕，可以推广到`n`种颜色，每种颜色有重复元素的情况。

### 代码 1

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
// Sort Colors
// Counting Sort
// 时间复杂度O(n)，空间复杂度O(1)
public class Solution {
    public void sortColors(int[] nums) {
        int[] counts = new int[3]; // 记录每个颜色出现的次数

        for (int i = 0; i < nums.length; i++)
            counts[nums[i]]++;

        for (int i = 0, index = 0; i < 3; i++)
            for (int j = 0; j < counts[i]; j++)
                nums[index++] = i;

    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Sort Colors
// Counting Sort
// 时间复杂度O(n)，空间复杂度O(1)
class Solution {
public:
    void sortColors(vector<int>& A) {
        int counts[3] = { 0 }; // 记录每个颜色出现的次数

        for (int i = 0; i < A.size(); i++)
            counts[A[i]]++;

        for (int i = 0, index = 0; i < 3; i++)
            for (int j = 0; j < counts[i]; j++)
                A[index++] = i;

    }
};
```

</TabItem>
</Tabs>

### 代码 2

<Tabs
defaultValue="java"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// Sort Colors
// 双指针，时间复杂度O(n)，空间复杂度O(1)
public class Solution {
    public void sortColors(int[] A) {
        // 一个是red的index，一个是blue的index，两边往中间走
        int red = 0, blue = A.length - 1;

        for (int i = 0; i < blue + 1;) {
            if (A[i] == 0)
                swap (A, i++, red++);
            else if (A[i] == 2)
                swap(A, i, blue--);
            else
                i++;
        }
    }
    private static void swap(int[] A, int i, int j) {
        int tmp = A[i];
        A[i] = A[j];
        A[j] = tmp;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Sort Colors
// 双指针，时间复杂度O(n)，空间复杂度O(1)
class Solution {
public:
    void sortColors(vector<int>& A) {
        // 一个是red的index，一个是blue的index，两边往中间走
        int red = 0, blue = A.size() - 1;

        for (int i = 0; i < blue + 1;) {
            if (A[i] == 0)
                swap(A[i++], A[red++]);
            else if (A[i] == 2)
                swap(A[i], A[blue--]);
            else
                i++;
        }
    }
};
```

</TabItem>
</Tabs>

### 代码 3

<Tabs
defaultValue="java"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// Sort Colors
// 重新实现 partition()
// 时间复杂度O(n)，空间复杂度O(1)
public class Solution {
    public void sortColors(int[] nums) {
        partition(nums, partition(nums, 0, nums.length, new EqualTo(0)),
                nums.length, new EqualTo(1));
    }
    private static int partition(int[] nums, int begin, int end, EqualTo predicate) {
        int pos = begin;

        for (; begin != end; ++begin)
            if (predicate.apply(nums[begin]))
                swap(nums, begin,pos++);

        return pos;
    }
    static class EqualTo {
        private final int target;
        public EqualTo(int target) {
            this.target = target;
        }
        public boolean apply(int x) {
            return x == target;
        }
    }
    private static void swap(int[] nums, int i, int j) {
        int tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Sort Colors
// 重新实现 partition()
// 时间复杂度O(n)，空间复杂度O(1)
class Solution {
public:
    void sortColors(vector<int>& nums) {
        partition(partition(nums.begin(), nums.end(), bind1st(equal_to<int>(), 0)),
                 nums.end(), bind1st(equal_to<int>(), 1));
    }
private:
    template<typename ForwardIterator, typename UnaryPredicate>
    ForwardIterator partition(ForwardIterator first, ForwardIterator last,
            UnaryPredicate pred) {
        auto pos = first;

        for (; first != last; ++first)
            if (pred(*first))
                swap(*first, *pos++);

        return pos;
    }
};
```

</TabItem>
</Tabs>

### 相关题目

- [First Missing Positive](../bucket-sort/first-missing-positive.md)
