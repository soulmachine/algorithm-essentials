---
title: 3Sum Closest
---

### 描述

Given an array `S` of `n` integers, find three integers in `S` such that the sum is closest to a given number, target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

For example, given array `S = {-1 2 1 -4}`, and `target = 1`.

The sum that is closest to the target is 2. (`-1 + 2 + 1 = 2`).

### 分析

先排序，然后双指针左右夹逼，复杂度 $$O(n^2)$$。

### 代码

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

<Tabs
defaultValue="java"
values={[
{ label: 'Python', value: 'python', },
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="python">

```python
# 3Sum Closest
# 先排序，然后双指针左右夹逼
# Time Complexity: O(n^2)
# Space Complexity: from O(logn) to O(n), depending on the
# implementation of the sorting algorithm
class Solution:
    def threeSumClosest(self, nums: List[int], target: int) -> int:
        diff = float('inf')
        nums.sort()
        for i in range(len(nums)):
            low, high = i + 1, len(nums) - 1
            while low < high:
                sum = nums[i] + nums[low] + nums[high]
                if abs(target - sum) < abs(diff):
                    diff = target - sum
                if sum < target:
                    low += 1
                else:
                    high -= 1
        return target - diff
```

</TabItem>
<TabItem value="java">

```java
// 3Sum Closest
// 先排序，然后双指针左右夹逼
// Time Complexity: O(n^2)
// Space Complexity: from O(logn) to O(n), depending on the
// implementation of the sorting algorithm
public class Solution {
    public int threeSumClosest(int[] nums, int target) {
        int diff = Integer.MAX_VALUE;
        Arrays.sort(nums);
        for (int i = 0; i < nums.length; ++i) {
            int low = i + 1, high = nums.length - 1; // two pointers
            while(low < high) {
                int sum = nums[i] + nums[low] + nums[high];
                if (Math.abs(sum - target) < Math.abs(diff))
                    diff = target - sum;

                if (sum < target) ++low;
                else              --high;
            }
        }
        return target - diff;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// 3Sum Closest
// 先排序，然后双指针左右夹逼
// Time Complexity: O(n^2)
// Space Complexity: from O(logn) to O(n), depending on the
// implementation of the sorting algorithm
class Solution {
public:
    int threeSumClosest(vector<int>& nums, int target) {
        int diff = INT_MAX;
        sort(nums.begin(), nums.end());
        for (int i = 0; i < nums.size(); ++i) {
            int low = i + 1, high = nums.size() - 1; // two pointers
            while(low < high) {
                int sum = nums[i] + nums[low] + nums[high];
                if (abs(sum - target) < abs(diff))
                    diff = target - sum;

                if (sum < target) ++low;
                else              --high;
            }
        }
        return target - diff;
    }
};
```

</TabItem>
</Tabs>

### 相关题目

- [2Sum](2sum.md)
- [2Sum II](2sum-ii.md)
- [3Sum](3sum.md)
- [4Sum](4sum.md)
