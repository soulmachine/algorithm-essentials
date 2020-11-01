---
title: 3Sum
---

### 描述

Given an array `S` of `n` integers, are there elements `a, b, c` in `S` such that `a + b + c = 0`? Find all unique triplets in the array which gives the sum of zero.

Note:

- Elements in a triplet `(a,b,c)` must be in non-descending order. (ie, $$a \leq b \leq c$$)
- The solution set must not contain duplicate triplets.

For example, given array `S = {-1 0 1 2 -1 -4}`.

A solution set is:

```
(-1, 0, 1)
(-1, -1, 2)
```

### 分析

先排序，然后双指针左右夹逼，时间复杂度 $$O(n^2)$$。

这个方法可以推广到`k-sum`，先排序，然后做`k-2`次循环，在最内层循环左右夹逼，时间复杂度是 $$O(\max\{n \log n, n^{k-1}\})$$。

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
<TabItem value="python">

```python
# 3Sum
# 先排序，然后左右夹逼，注意跳过重复的数
# Time Complexity: O(n^2)
# Space Complexity: from O(logn) to O(n), depending on the
# implementation of the sorting algorithm
class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        result = []
        for i in range(len(nums)):
            if i == 0 or nums[i] != nums[i-1]:
                for lst in self.twoSumII(nums, i+1, 0-nums[i]):
                    result.append([nums[i]]+lst)
        return result

    def twoSumII(self, nums: List[int], start: int, target:int)->List[List[int]]:
        result = []
        low, high = start, len(nums)-1
        while low < high:
            sum = nums[low] + nums[high];
            if sum < target:
                low += 1
            elif sum > target:
                high -= 1
            else:
                result.append([nums[low], nums[high]])
                low += 1
                high -= 1
                while low < high and nums[low] == nums[low-1]:
                    low += 1
                while low < high and nums[high] == nums[high+1]:
                    high -= 1
        return result
```

</TabItem>
<TabItem value="java">

```java
// 3Sum
// 先排序，然后左右夹逼，注意跳过重复的数
// Time Complexity: O(n^2)
// Space Complexity: from O(logn) to O(n), depending on the
// implementation of the sorting algorithm
public class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        Arrays.sort(nums);
        List<List<Integer>> result = new ArrayList<>();

        for (int i = 0; i < nums.length; ++i) {
            if (i == 0 || nums[i] != nums[i-1]) {
                for(List<Integer> lst: twoSumII(nums, i+1, 0-nums[i])) {
                    lst.add(0, nums[i]);
                    result.add(lst);
                }
            }
        }
        return result;
    }

    public List<List<Integer>> twoSumII(int[] nums, int start, int target) {
        List<List<Integer>> result = new ArrayList<>();
        int low = start, high = nums.length-1;
        while (low < high) {
            int sum = nums[low] + nums[high];
            if (sum < target) {
                ++low;
            } else if(sum > target) {
                --high;
            } else {
                result.add(new ArrayList<>(Arrays.asList(nums[low++], nums[high--])));
                while(low < high && nums[low] == nums[low-1]) ++low;
                while(low < high && nums[high] == nums[high+1]) --high;
            }
        }
        return result;
    }
};
```

</TabItem>
<TabItem value="cpp">

```cpp
// 3Sum
// 先排序，然后双指针左右夹逼，注意跳过重复的数
// Time Complexity: O(n^2)
// Space Complexity: from O(logn) to O(n), depending on the
// implementation of the sorting algorithm
class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        sort(begin(nums), end(nums));
        vector<vector<int>> result;

        for (int i = 0; i < nums.size(); ++i)
            if (i == 0 || nums[i] != nums[i - 1]) {
                for (auto& lst: twoSumII(nums, i+1, 0-nums[i])) {
                    lst.insert(lst.begin(), nums[i]);
                    result.push_back(lst);
                }
            }
        return result;
    }

    vector<vector<int>> twoSumII(vector<int>& nums, int start, int target) {
        vector<vector<int>> result;
        int low = start, high = nums.size() - 1;
        while (low < high) {
            int sum = nums[low] + nums[high];
            if (sum < target) {
                ++low;
            } else if (sum > target) {
                --high;
            } else {
                result.push_back({ nums[low++], nums[high--] });
                while(low < high && nums[low] == nums[low-1]) ++low;
                while(low < high && nums[high] == nums[high+1]) --high;
            }
        }
        return result;
    }
};
```

</TabItem>
</Tabs>

#### HashSet

其他代码完全一样，仅仅是 `twoSumII()`不同。

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
# 3Sum
# 先排序，然后twoSumII()用HashSet实现
# Time Complexity: O(n^2), Space Complexity: O(n)
class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        result = []
        for i in range(len(nums)):
            if i == 0 or nums[i] != nums[i-1]:
                for lst in self.twoSumII(nums, i+1, 0-nums[i]):
                    result.append([nums[i]]+lst)
        return result

    def twoSumII(self, nums: List[int], start: int, target:int)->List[List[int]]:
        result = []
        s = set()
        for i in range(start, len(nums)):
            if len(result) == 0 or result[-1][1] != nums[i]:
                complement = target - nums[i]
                if complement in s:
                    result.append([complement, nums[i]])
            s.add(nums[i])
        return result
```

</TabItem>
<TabItem value="java">

```java
// 3Sum
// 先排序，然后twoSumII()用HashSet实现
// Time Complexity: O(n^2), Space Complexity: O(n)
public class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        Arrays.sort(nums);
        List<List<Integer>> result = new ArrayList<>();

        for (int i = 0; i < nums.length; ++i) {
            if (i == 0 || nums[i] != nums[i-1]) {
                for(List<Integer> lst: twoSumII(nums, i+1, 0-nums[i])) {
                    lst.add(0, nums[i]);
                    result.add(lst);
                }
            }
        }
        return result;
    }

    public List<List<Integer>> twoSumII(int[] nums, int start, int target) {
        List<List<Integer>> result = new ArrayList<>();
        Set<Integer> s = new HashSet<>();
        for (int i = start; i < nums.length; ++i) {
            if (result.isEmpty() || result.get(result.size() - 1).get(1) != nums[i]) {
                int complement = target - nums[i];
                if (s.contains(complement)) {
                    result.add(new ArrayList<>(Arrays.asList(complement, nums[i])));
                }
            }
            s.add(nums[i]);
        }
        return result;
    }
};
```

</TabItem>
<TabItem value="cpp">

```cpp
// 3Sum
// 先排序，然后twoSumII()用HashSet实现
// Time Complexity: O(n^2), Space Complexity: O(n)
class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        sort(begin(nums), end(nums));
        vector<vector<int>> result;

        for (int i = 0; i < nums.size(); ++i)
            if (i == 0 || nums[i] != nums[i - 1]) {
                for (auto& lst: twoSumII(nums, i+1, 0-nums[i])) {
                    lst.insert(lst.begin(), nums[i]);
                    result.push_back(lst);
                }
            }
        return result;
    }

    vector<vector<int>> twoSumII(vector<int>& nums, int start, int target) {
        vector<vector<int>> result;
        unordered_set<int> s;
        for (auto i = start; i < nums.size(); ++i) {
            if (result.empty() || result.back()[1] != nums[i]) {
                int complement = target - nums[i];
                if (s.count(complement)) {
                    result.push_back({ complement, nums[i]});
                }
            }
            s.insert(nums[i]);
        }
        return result;
    }
};
```

</TabItem>
</Tabs>

### 相关题目

- [2Sum](2sum.md)
- [2Sum II](2sum-ii.md)
- [3Sum Closest](3sum-closest.md)
- [4Sum](4sum.md)
- [4Sum II](4sum-ii.md)
