---
title: 2Sum
---

### 描述

Given an array of integers, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.

**Example 1:**

> **Input**: nums = [2,7,11,15], target = 9
>
> **Output**: [0,1]

**Example 2:**

> **Input**: nums = [3,2,4], target = 6
>
> **Output**: [1,2]

**Example 3:**

> **Input**: nums = [3,3], target = 6
>
> **Output**: [0,1]

**Constraints:**

- 2 <= nums.length <= $10^5$
- $-10^9$ <= nums[i] <= $10^9$
- $-10^9$ <= target <= $10^9$
- Only one valid answer exists.

### 分析

方法 1：暴力，复杂度$$O(n^2)$$，会超时

方法 2：hash。用一个哈希表，存储每个数对应的下标，复杂度`O(n)`.

方法 3：先排序，然后左右夹逼，排序$$O(n\log n)$$，左右夹逼`O(n)`，最终$$O(n\log n)$$。但是注意，这题需要返回的是下标，而不是数字本身，因此这个方法行不通。

### 代码

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

#### HashMap + 两次遍历

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
# Two Sum
# 方法2：HashMap + 两次遍历。用一个哈希表，存储每个数对应的下标
# Time Complexity: O(n)，Space Complexity: O(n)
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        m = {num: i for i, num in enumerate(nums)}

        for i, num in enumerate(nums):
            complement = m.get(target - num)
            if complement is not None and complement > i:
                return [i, complement]

        return None
```

</TabItem>
<TabItem value="java">

```java
// Two Sum
// 方法2：HashMap + 两次遍历。用一个哈希表，存储每个数对应的下标
// Time Complexity: O(n)，Space Complexity: O(n)
public class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> m = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            m.put(nums[i], i);
        }
        for (int i = 0; i < nums.length; i++) {
            final Integer complement = m.get(target-nums[i]);
            if (complement != null && complement > i) {
                return new int[]{i, complement};
            }
        }
        return null;
    }
};
```

</TabItem>
<TabItem value="cpp">

```cpp
// Two Sum
// 方法2：HashMap + 两次遍历。用一个哈希表，存储每个数对应的下标
// Time Complexity: O(n)，Space Complexity: O(n)
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> m;
        for (int i = 0; i < nums.size(); i++) {
            m[nums[i]] = i;
        }
        for (int i = 0; i < nums.size(); i++) {
            auto complement = m.find(target - nums[i]);
            if (complement != m.end() && complement->second > i) {
                return {i, complement->second};
            }
        }
        return {-1, -1};
    }
};
```

</TabItem>
</Tabs>

#### HashMap + 单次遍历

上面的方法可以优化一下，只需要一次遍历。

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
# Two Sum
# 方法2：HashMap + 单次遍历。用一个哈希表，存储每个数对应的下标
# Time Complexity: O(n)，Space Complexity: O(n)
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        m = {}
        for i, num in enumerate(nums):
            complement = m.get(target - num)
            if complement is not None:
                return [i, complement]
            m[num] = i
        return None
```

</TabItem>
<TabItem value="java">

```java
// Two Sum
// 方法2：HashMap + 单次遍历。用一个哈希表，存储每个数对应的下标
// Time Complexity: O(n)，Space Complexity: O(n)
public class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> m = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            final Integer complement = m.get(target-nums[i]);
            if (complement != null) {
                return new int[]{i, complement};
            }
            m.put(nums[i], i);
        }
        return new int[]{-1, -1};
    }
};
```

</TabItem>
<TabItem value="cpp">

```cpp
// Two Sum
// 方法2：HashMap + 单次遍历。用一个哈希表，存储每个数对应的下标
// Time Complexity: O(n)，Space Complexity: O(n)
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> m;
        for (int i = 0; i < nums.size(); i++) {
            auto complement = m.find(target - nums[i]);
            if (complement != m.end()) {
                return {i, complement->second};
            }
            m[nums[i]] = i;
        }
        return {-1, -1};
    }
};
```

</TabItem>
</Tabs>

### 相关题目

- [2Sum II](2sum-ii.md)
- [3Sum](3sum.md)
- [3Sum Closest](3sum-closest.md)
- [4Sum](4sum.md)
