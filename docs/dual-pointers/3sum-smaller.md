---
title: 3Sum Smaller
---

### 描述

Given an array of n integers `nums` and an integer target, find the number of index triplets `i, j, k` with `0 <= i < j < k < n` that satisfy the condition `nums[i] + nums[j] + nums[k] < target`.

**Follow up**: Could you solve it in O($n^2$) runtime?

**Example 1**:

> **Input**: nums = [-2,0,1,3], target = 2
>
> **Output**: 2
>
> **Explanation**: Because there are two triplets which sums are less than 2:
>
> [-2,0,1]
>
> [-2,0,3]

**Example 2**:

> **Input**: nums = [], target = 0
>
> **Output**: 0

**Example 3**:

> **Input**: nums = [0], target = 0
>
> **Output**: 0

**Constraints**:

- n == nums.length
- $0 \leq n \leq 300$
- $-100 \leq nums[i] \leq 100$
- $-100 \leq target \leq 100$

### 分析

先排序，然后双指针左右夹逼，复杂度 $$O(n^2)$$。

### 代码

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
<TabItem value="python">

```python
# 3Sum Smaller
# 先排序，然后双指针左右夹逼
# Time Complexity: O(n^2)
# Space Complexity: O(1)
class Solution:
    def threeSumSmaller(self, nums: List[int], target: int) -> int:
        nums.sort()
        count = 0
        for i in range(len(nums)-2):
            count += self.twoSumSmaller(nums, i, target - nums[i])
        return count

    def twoSumSmaller(self, nums: List[int], i: int, target: int) -> int:
        count = 0
        left, right = i + 1, len(nums) - 1
        while left < right:
            if nums[left] + nums[right] < target:
                count += right - left
                left += 1
            else:
                right -= 1
        return count
```

</TabItem>
<TabItem value="java">

```java
// 3Sum Smaller
// 先排序，然后双指针左右夹逼
// Time Complexity: O(n^2)
// Space Complexity: O(1)
class Solution {
    public int threeSumSmaller(int[] nums, int target) {
        if(nums.length < 3) return 0;
        Arrays.sort(nums);
        int count = 0;
        for (int i = 0; i < nums.length - 2; i++) {
            count += twoSumSmaller(nums, i, target - nums[i]);
        }
        return count;
    }

    private int twoSumSmaller(int[] nums, int i, int target) {
        int count = 0;
        int left = i + 1, right = nums.length - 1;
        while (left < right) {
            if (nums[left] + nums[right] < target) {
                count += right - left;
                left++;
            } else {
                right--;
            }
        }
        return count;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// 3Sum Smaller
// 先排序，然后双指针左右夹逼
// Time Complexity: O(n^2)
// Space Complexity: O(1)
class Solution {
public:
    int threeSumSmaller(vector<int>& nums, int target) {
        if(nums.size() < 3) return 0;
        sort(nums.begin(), nums.end());
        int count = 0;
        for (int i = 0; i < nums.size() - 2; i++) {
            count += twoSumSmaller(nums, i, target - nums[i]);
        }
        return count;
    }
private:
    int twoSumSmaller(const vector<int>& nums, int i, int target) {
        int count = 0;
        int left = i + 1, right = nums.size() - 1;
        while (left < right) {
            if (nums[left] + nums[right] < target) {
                count += right - left;
                left++;
            } else {
                right--;
            }
        }
        return count;
    }
};
```

</TabItem>
</Tabs>

### 相关题目

- [2Sum](../array/two-sum.md)
- [2Sum II](two-sum-ii-input-array-is-sorted.md)
- [3Sum](3sum.md)
- [4Sum](4sum.md)
- [4Sum II](../array/4sum-ii.md)
