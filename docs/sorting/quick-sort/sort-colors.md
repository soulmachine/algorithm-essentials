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

### 代码

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

#### 双指针

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
// Sort Colors
// 双指针，时间复杂度O(n)，空间复杂度O(1)
public class Solution {
    public void sortColors(int[] A) {
        // 一个是red的index，一个是blue的index，两边往中间走
        int red = 0, blue = A.length - 1;

        for (int i = 0; i < blue + 1;) {
            if (A[i] == 0)
                swap (A, i++, red++); // swap A[i] to the left side
            else if (A[i] == 2)
                swap(A, i, blue--); // swap A[i] to the right side
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

        for (int i = 0; i <= blue;) {
            if (A[i] == 0)
                swap(A[i++], A[red++]); // swap A[i] to the left side
            else if (A[i] == 2)
                swap(A[i], A[blue--]); // swap A[i] to the right side
            else
                i++;
        }
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Sort Colors
# 双指针，时间复杂度O(n)，空间复杂度O(1)
class Solution:
    def sortColors(self, A: list[int]) -> None:
        # 一个是red的index，一个是blue的index，两边往中间走
        red, blue = 0, len(A) - 1
        i = 0
        while i <= blue:
            if A[i] == 0:
                A[i], A[red] = A[red], A[i]  # swap A[i] to the left side
                i += 1
                red += 1
            elif A[i] == 2:
                A[i], A[blue] = A[blue], A[i]  # swap A[i] to the right side
                blue -= 1
            else:
                i += 1
```

</TabItem>
</Tabs>

#### 快速排序

令N为元素个数，K为颜色种类，每次选择一个颜色进行划分，因此有logK层。递归调用logK层，空间复杂度是O(logK)；每层需要递归遍历整个数组，因此时间复杂度为O(NlogK)。

本题K=3，因此可以近似认为时间复杂度是O(N), 空间复杂度是O(1)。

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
// 时间复杂度O(NlogK)，空间复杂度O(logK)
public class Solution {
    public void sortColors(int[] nums) {
        quickSort(nums, 0, nums.length-1);
    }

    private static void quickSort(int[] nums, int left, int right) {
        if (left < right) {
            final int pos = partition(nums, left, right);
            quickSort(nums, left, pos - 1);
            quickSort(nums, pos + 1, right);
        }
    }

    private static int partition(int[] nums, int i, int j) {
        final int pivot = nums[i];
        while (i < j) {
            while (i < j && nums[j] >= pivot) --j;
            nums[i] = nums[j];
            while(i < j && nums[i] <= pivot) ++i;
            nums[j] = nums[i];
        }
        nums[i] = pivot;
        return i;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Sort Colors
// 时间复杂度O(NlogK)，空间复杂度O(logK)
class Solution {
public:
    void sortColors(vector<int>& nums) {
        quick_sort(nums, 0, nums.size()-1);
    }
private:
    void quick_sort(vector<int>& nums, int i, int j) {
        if (i < j) {
            const int pos = partition(nums, i, j);
            quick_sort(nums, i, pos - 1);
            quick_sort(nums, pos + 1, j);
        }
    }
    int partition(vector<int>& nums, int i, int j) {
        const int pivot = nums[i];
        while (i < j) {
            while (i < j && nums[j] >= pivot) --j;
            nums[i] = nums[j];
            while(i < j && nums[i] <= pivot) ++i;
            nums[j] = nums[i];
        }
        nums[i] = pivot;
        return i;
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Sort Colors
# 时间复杂度O(NlogK)，空间复杂度O(logK)
class Solution:
    def sortColors(self, nums: list[int]) -> None:
        def partition(nums: list[int], i: int, j: int) -> int:
            pivot = nums[i]
            while i < j:
                while i < j and nums[j] >= pivot:
                    j -= 1
                nums[i] = nums[j]
                while i < j and nums[i] <= pivot:
                    i += 1
                nums[j] = nums[i]
            nums[i] = pivot
            return i

        def quickSort(nums: list[int], left: int, right: int) -> None:
            if left < right:
                pos = partition(nums, left, right)
                quickSort(nums, left, pos - 1)
                quickSort(nums, pos + 1, right)

        quickSort(nums, 0, len(nums) - 1)
```

</TabItem>
</Tabs>

### 相关题目

- [First Missing Positive](../bucket-sort/first-missing-positive.md)
