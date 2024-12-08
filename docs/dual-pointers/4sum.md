---
title: 4Sum
---

### 描述

Given an array `S` of `n` integers, are there elements `a, b, c`, and `d` in `S` such that `a + b + c + d = target`? Find all unique quadruplets in the array which gives the sum of target.

Note:

- Elements in a quadruplet `(a,b,c,d)` must be in non-descending order. (ie, $$a \leq b \leq c \leq d$$)
- The solution set must not contain duplicate quadruplets.

For example, given array `S = {1 0 -1 0 -2 2}`, and `target = 0`.

A solution set is:

```
(-1,  0, 0, 1)
(-2, -1, 1, 2)
(-2,  0, 0, 2)
```

### 分析

先排序，然后双指针左右夹逼，复杂度 $$O(n^3)$$，会超时。

可以用一个 hashmap 先缓存两个数的和，最终复杂度$$O(n^3)$$。这个策略也适用于 3Sum 。

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
# 4Sum
# 双指针
# Time Complexity: O(n^3)，Space Complexity: O(n)
class Solution:
    def fourSum(self, nums: List[int], target: int) -> List[List[int]]:
        nums.sort()
        return self.kSum(nums, 0, target, 4)

    def twoSumII(self, nums: List[int], start: int, target:int)->List[List[int]]:
        result = []
        low, high = start, len(nums)-1
        while low < high:
            sum = nums[low] + nums[high]
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

    def kSum(self, nums: List[int], start: int, target: int, k: int) -> List[List[int]]:
        result = []
        if k == 2:
            return self.twoSumII(nums, start, target)
        if start + k > len(nums) or nums[start] * k > target or nums[-1] * k < target:
            return result
        for i in range(start, len(nums)):
            if i == start or nums[i] != nums[i-1]:
                for lst in self.kSum(nums, i+1, target-nums[i], k-1):
                    result.append([nums[i]] + lst)
        return result
```

</TabItem>
<TabItem value="java">

```java
// 4Sum
// 先排序，然后双指针左右夹逼
// Time Complexity: O(n^3)，Space Complexity: O(k)
public class Solution {
    public List<List<Integer>> fourSum(int[] nums, int target) {
        Arrays.sort(nums);
        return kSum(nums, 0, target, 4);
    }
    public List<List<Integer>> kSum(int[] nums, int start, int target, int k) {
        List<List<Integer>> result = new ArrayList<>();
        if (k == 2) {
            return twoSumII(nums, start, target);
        }
        if (start+k > nums.length || nums[start] * k > target || target > nums[nums.length - 1] * k) {
            return result;
        }
        for (int i = start; i < nums.length; ++i) {
            if (i == start || nums[i - 1] != nums[i]) {
                for (var list : kSum(nums, i + 1, target - nums[i], k - 1)) {
                    list.add(nums[i]);
                    result.add(list);
                }
            }
        }
        return result;
    }
    public List<List<Integer>> twoSumII(int[] nums, int start, int target) {
        List<List<Integer>> result = new ArrayList<>();
        int low = start, high = nums.length - 1;
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
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// 4Sum
// 先排序，然后左右夹逼
// Time Complexity: O(n^3)，Space Complexity: O(k)
class Solution {
public:
    vector<vector<int>> fourSum(vector<int>& nums, int target) {
        sort(begin(nums), end(nums));
        return kSum(nums, 0, target, 4);
    }
    vector<vector<int>> kSum(vector<int>& nums, int start, int target, int k) {
        vector<vector<int>> result;
        if (k == 2) {
            return twoSumII(nums, start, target);
        }
        if (start+k > nums.size() || nums[start] * k > target || target > nums.back() * k) {
            return result;
        }

        for (int i = start; i < nums.size(); ++i) {
            if (i == start || nums[i - 1] != nums[i]) {
                for (auto &list : kSum(nums, i + 1, target - nums[i], k - 1)) {
                    list.push_back(nums[i]);
                    result.push_back(list);
                }
            }
        }
        return result;
    }
    vector<vector<int>> twoSumII(const vector<int>& nums, int start, int target) {
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

其他代码完全一样，仅仅是`twoSumII()`不一样。

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
# 4Sum
# 先排序，然后twoSumII()用HashSet实现
# Time Complexity: O(n^3)，Space Complexity: O(n)
class Solution:
    def fourSum(self, nums: List[int], target: int) -> List[List[int]]:
        nums.sort()
        return self.kSum(nums, 0, target, 4)

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

    def kSum(self, nums: List[int], start: int, target: int, k: int) -> List[List[int]]:
        result = []
        if k == 2:
            return self.twoSumII(nums, start, target)
        if start + k > len(nums) or nums[start] * k > target or nums[-1] * k < target:
            return result
        for i in range(start, len(nums)-k+1):
            if i == start or nums[i] != nums[i-1]:
                for lst in self.kSum(nums, i+1, target-nums[i], k-1):
                    result.append([nums[i]] + lst)
        return result
```

</TabItem>
<TabItem value="java">

```java
// 4Sum
// 先排序，然后twoSumII()用HashSet实现
// Time Complexity: O(n^3)，Space Complexity: O(k)
public class Solution {
    public List<List<Integer>> fourSum(int[] nums, int target) {
        Arrays.sort(nums);
        return kSum(nums, 0, target, 4);
    }
    public List<List<Integer>> kSum(int[] nums, int start, int target, int k) {
        List<List<Integer>> result = new ArrayList<>();
        if (k == 2) {
            return twoSumII(nums, start, target);
        }
        if (start+k > nums.length || nums[start] * k > target || target > nums[nums.length - 1] * k) {
            return result;
        }
        for (int i = start; i < nums.length; ++i) {
            if (i == start || nums[i - 1] != nums[i]) {
                for (var list : kSum(nums, i + 1, target - nums[i], k - 1)) {
                    list.add(nums[i]);
                    result.add(list);
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
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// 4Sum
// 先排序，然后左右夹逼
// Time Complexity: O(n^3)，Space Complexity: O(k)
class Solution {
public:
    vector<vector<int>> fourSum(vector<int>& nums, int target) {
        sort(begin(nums), end(nums));
        return kSum(nums, 0, target, 4);
    }
    vector<vector<int>> kSum(vector<int>& nums, int start, int target, int k) {
        vector<vector<int>> result;
        if (k == 2) {
            return twoSumII(nums, start, target);
        }
        if (start+k > nums.size() || nums[start] * k > target || target > nums.back() * k) {
            return result;
        }

        for (int i = start; i < nums.size(); ++i) {
            if (i == start || nums[i - 1] != nums[i]) {
                for (auto &list : kSum(nums, i + 1, target - nums[i], k - 1)) {
                    list.push_back(nums[i]);
                    result.push_back(list);
                }
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

### kSum 问题总结

对于 kSum 这类问题，

1. 如果求的是具体的位置，就不能 sort，因为排序后位置信息就丢失了
2. 如果求位置，用 HashMap, 求组合本身，用 HashSet 就足够了
3. 如果求的是组合本身且 k>2, 无论如何，先排序，然后再考虑用双指针或者 HashSet
4. `twoSumII()`可以作为一个通用的底层函数，它往往有两种实现，双指针或者 HashSet(HashMap)
5. `twoSumII()`的 HashSet 实现，比较直观的是两次遍历，可以优化成单次遍历。

[2Sum](../array/two-sum.md)求的是位置，因此不能 sort。用两轮循环暴力搜索，时间复杂度$O(n^2)$, 空间复杂度 O(1)；如果用一个 HashMap 来缓存位置，时间复杂度可以降低到 O(n)，代价是空间复杂度变为 O(n)。

[2Sum II](2sum-ii.md)求的是组合本身，`nums`数组已排好序，因此就不必再排序了，直接用双指针左右夹逼，时间复杂度 O(n)，空间复杂度 O(1)；也可以用 HashSet，时间复杂度 O(n)，空间复杂度 O(n)，并没有比双指针快，却更占内存。因此这题最佳方法是双指针。

[3Sum](3sum.md)求的是组合本身且 k>2, 先排序，然后用双指针或者 HashSet 两种方法都可以。

[4Sum](4sum.md)求的是组合本身且 k>2, 先排序，然后用双指针或者 HashSet 两种方法都可以。

### 相关题目

- [2Sum](../array/two-sum.md)
- [2Sum II](2sum-ii.md)
- [3Sum](3sum.md)
- [3Sum Closest](3sum-closest.md)
- [4Sum II](../array/4sum-ii.md)
