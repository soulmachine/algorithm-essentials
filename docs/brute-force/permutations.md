---
title: Permutations
---

### 描述

Given a collection of numbers, return all possible permutations.

For example,
`[1,2,3]` have the following permutations:
`[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2]`, and `[3,2,1]`.

### 代码

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

#### 递归

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
// Permutations
// Recursive
// Time Complexity: O(n!), Space Complexity: O(n)
public class Solution {
    public List<List<Integer>> permute(int[] nums) {
        Arrays.sort(nums);
        List<List<Integer>> result = new ArrayList<>();
        dfs(nums, 0, result);
        return result;
    }

    private static void dfs(int[] nums, int start, List<List<Integer>> result) {
        if (start == nums.length) {
            result.add(Arrays.stream(nums).boxed().collect(Collectors.toList()));
            return;
        }

        for (int i = start; i < nums.length; i++) {
            swap(nums, start, i);
            dfs(nums, start + 1, result);
            swap(nums, start, i); // restore
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
// Permutations
// 深搜，增量构造法
// 时间复杂度O(n!)，空间复杂度O(n)
class Solution {
public:
    vector<vector<int> > permute(vector<int>& num) {
        sort(num.begin(), num.end());

        vector<vector<int>> result;
        vector<int> path;  // 中间结果

        dfs(num, path, result);
        return result;
    }
private:
    void dfs(const vector<int>& num, vector<int> &path,
            vector<vector<int> > &result) {
        if (path.size() == num.size()) {  // 收敛条件
            result.push_back(path);
            return;
        }

        // 扩展状态
        for (auto i : num) {
            // 查找 i 是否在path 中出现过
            auto pos = find(path.begin(), path.end(), i);

            if (pos == path.end()) {
                path.push_back(i);
                dfs(num, path, result);
                path.pop_back();
            }
        }
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Permutations
# Recursive
# Time Complexity: O(n!), Space Complexity: O(n)
class Solution:
    def permute(self, nums: list[int]) -> list[list[int]]:
        nums.sort()
        result = []
        self.dfs(nums, 0, result)
        return result

    def dfs(self, nums: list[int], start: int, result: list[list[int]]) -> None:
        if start == len(nums):
            result.append(nums[:])
            return

        for i in range(start, len(nums)):
            self.swap(nums, start, i)
            self.dfs(nums, start + 1, result)
            self.swap(nums, start, i)  # restore

    def swap(self, nums: list[int], i: int, j: int) -> None:
        nums[i], nums[j] = nums[j], nums[i]
```

</TabItem>
</Tabs>

#### next_permutation()

函数 `next_permutation()`的具体实现见这节 [Next Permutation](../array/next-permutation.md)。

<Tabs
defaultValue="java"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// Permutations
// 重新实现 next_permutation()
// 时间复杂度O(n!)，空间复杂度O(1)
public class Solution {
    public List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        Arrays.sort(nums);

        do {
            ArrayList<Integer> one = new ArrayList<>();
            for (int i : nums) {
                one.add(i);
            }
            result.add(one);
            // 调用的是 2.1.12 节的 next_permutation()
            // 而不是 std::next_permutation()
        } while(nextPermutation(nums, 0, nums.length));
        return result;
    }
    // 代码来自 2.1.12 节的 next_permutation()
    private static boolean nextPermutation(int[] nums, int begin, int end) {
        // From right to left, find the first digit(partitionNumber)
        // which violates the increase trend
        int p = end - 2;
        while (p > -1 && nums[p] >= nums[p + 1]) --p;

        // If not found, which means current sequence is already the largest
        // permutation, then rearrange to the first permutation and return false
        if(p == -1) {
            reverse(nums, begin, end);
            return false;
        }

        // From right to left, find the first digit which is greater
        // than the partition number, call it changeNumber
        int c = end - 1;
        while (c > 0 && nums[c] <= nums[p]) --c;

        // Swap the partitionNumber and changeNumber
        swap(nums, p, c);
        // Reverse all the digits on the right of partitionNumber
        reverse(nums, p+1, end);
        return true;
    }
    private static void swap(int[] nums, int i, int j) {
        int tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
    }
    private static void reverse(int[] nums, int begin, int end) {
        end--;
        while (begin < end) {
            swap(nums, begin++, end--);
        }
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Permutations
// 重新实现 next_permutation()
// 时间复杂度O(n!)，空间复杂度O(1)
class Solution {
public:
    vector<vector<int> > permute(vector<int> &num) {
        vector<vector<int> > result;
        sort(num.begin(), num.end());

        do {
            result.push_back(num);
        // 调用的是 2.1.12 节的 next_permutation()
        // 而不是 std::next_permutation()
        } while(next_permutation(num.begin(), num.end()));
        return result;
    }
private:
    // 代码来自 2.1.12 节的 next_permutation()
    void nextPermutation(vector<int> &nums) {
        next_permutation(nums.begin(), nums.end());
    }

    template<typename BidiIt>
    bool next_permutation(BidiIt first, BidiIt last) {
        // Get a reversed range to simplify reversed traversal.
        const auto rfirst = reverse_iterator<BidiIt>(last);
        const auto rlast = reverse_iterator<BidiIt>(first);

        // Begin from the second last element to the first element.
        auto pivot = next(rfirst);

        // Find `pivot`, which is the first element that is no less than its
        // successor.  `Prev` is used since `pivort` is a `reversed_iterator`.
        while (pivot != rlast && *pivot >= *prev(pivot))
            ++pivot;

        // No such elemenet found, current sequence is already the largest
        // permutation, then rearrange to the first permutation and return false.
        if (pivot == rlast) {
            reverse(rfirst, rlast);
            return false;
        }

        // Scan from right to left, find the first element that is greater than
        // `pivot`.
        auto change = find_if(rfirst, pivot, bind1st(less<int>(), *pivot));

        swap(*change, *pivot);
        reverse(rfirst, pivot);

        return true;
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Permutations
# 重新实现 next_permutation()
# 时间复杂度O(n!)，空间复杂度O(1)
def permute(nums):
    result = []
    nums.sort()

    def next_permutation(nums, begin, end):
        # From right to left, find the first digit(partitionNumber)
        # which violates the increase trend
        p = end - 2
        while p > -1 and nums[p] >= nums[p + 1]:
            p -= 1

        # If not found, which means current sequence is already the largest
        # permutation, then rearrange to the first permutation and return false
        if p == -1:
            nums[begin:end] = nums[begin:end][::-1]
            return False

        # From right to left, find the first digit which is greater
        # than the partition number, call it changeNumber
        c = end - 1
        while c > 0 and nums[c] <= nums[p]:
            c -= 1

        # Swap the partitionNumber and changeNumber
        nums[p], nums[c] = nums[c], nums[p]
        # Reverse all the digits on the right of partitionNumber
        nums[p+1:end] = nums[p+1:end][::-1]
        return True

    while True:
        result.append(nums[:])
        # 调用的是 2.1.12 节的 next_permutation()
        # 而不是 std::next_permutation()
        if not next_permutation(nums, 0, len(nums)):
            break

    return result
```

</TabItem>
</Tabs>

### 相关题目

- [Next Permutation](../array/next-permutation.md)
- [Permutation Sequence](../array/permutation-sequence.md)
- [Permutations II](permutations-ii.md)
- [Combinations](combinations.md)
