---
title: Majority Element
---

### 描述

Given an array of size n, find the majority element. The majority element is the element that appears more than `⌊ n/2 ⌋` times.

You may assume that the array is non-empty and the majority element always exist in the array.

### 分析

这题最简单的解法，先把数组排序，`O(nlogn)`，然后从头到尾扫描一遍，找出最长的连续子串。

由于超过`⌊ n/2 ⌋`次，可以对上面的方法改进一下，排序后，不需要扫描，直接返回中间那个元素，`nums[n/2]`，肯定就是答案。

上述两个方法都是 `O(nlogn)`的，本题有一个线性解法。由于超过`⌊ n/2 ⌋`，可以用相抵消的思想，凡是和最多元素不相等的，就抵消，最后剩下的一定就是最多的那个元素。

### 代码

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

#### 解法 1 排序

<Tabs
defaultValue="python"
values={[
{ label: 'Python', value: 'python', },
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="python">

```python
# Majority Element
# Time Complexity: O(nlogn), Space Complexity: O(1)
class Solution:
    def majorityElement(self, nums):
        nums.sort()
        return nums[len(nums)//2]
```

</TabItem>
<TabItem value="java">

```java
// Majority Element
// Time Complexity: O(nlogn), Space Complexity: O(1)
public class Solution {
    public int majorityElement(int[] nums) {
        Arrays.sort(nums);
        return nums[nums.length/2];
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Majority Element
// Time Complexity: O(nlogn), Space Complexity: O(1)
class Solution {
public:
    int majorityElement(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        return nums[nums.size()/2];
    }
};
```

</TabItem>
</Tabs>

### 解法 2 Boyer-Moore Voting Algorithm

<Tabs
defaultValue="python"
values={[
{ label: 'Python', value: 'python', },
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="python">

```python
# Majority Element
# Time Complexity: O(nlogn), Space Complexity: O(1)
class Solution:
    def majorityElement(self, nums):
        candidate = 0
        count = 0

        for num in nums:
            if candidate == num:
                count += 1
            elif count == 0:
                candidate = num
                count = 1
            else:
                count -= 1

        return candidate
```

</TabItem>
<TabItem value="java">

```java
// Majority Element
// Time Complexity: O(n), Space Complexity: O(1)
public class Solution {
    public int majorityElement(int[] nums) {
        int count = 0;
        int candidate = 0;

        for (int num : nums) {
            if (candidate == num) {
                ++count;
            } else if (count == 0) {
                candidate = num;
                count = 1;
            } else {
                --count;
            }
        }
        return candidate;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Majority Element
// Time Complexity: O(nlogn), Space Complexity: O(1)
class Solution {
public:
    int majorityElement(vector<int>& nums) {
        int count = 0;
        int candidate = 0;

        for (int num : nums) {
            if (candidate == num) {
                ++count;
            } else if (count == 0) {
                candidate = num;
                count = 1;
            } else {
                --count;
            }
        }
        return candidate;
    }
};
```

</TabItem>
</Tabs>

### 相关题目

- [Majority Element II](majority-element-ii.md)
