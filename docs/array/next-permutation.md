---
title: Next Permutation
---

### 描述

Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

The replacement must be in-place, do not allocate extra memory.

Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.

```
1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1
```

### 分析

算法过程如下图所示（来自[http://fisherlei.blogspot.com/2012/12/leetcode-next-permutation.html](http://fisherlei.blogspot.com/2012/12/leetcode-next-permutation.html)）。

![下一个排列算法流程](/img/next-permutation.png)

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
<TabItem value="java">

```java
// Next Permutation
// Time Complexity: O(n), Space Complexity: O(1)
public class Solution {
    public void nextPermutation(int[] nums) {
        nextPermutation(nums, 0, nums.length);
    }
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
};
```

</TabItem>
<TabItem value="cpp">

```cpp
// Next Permutation
// Time Complexity: O(n), Space Complexity: O(1)
class Solution {
public:
    void nextPermutation(vector<int> &nums) {
        next_permutation(nums, 0, nums.size());
    }
private:
    bool next_permutation(vector<int> &nums, int begin, int end) {
        // From right to left, find the first digit(partitionNumber)
        // which violates the increase trend
        int p = end - 2;
        while (p > -1 && nums[p] >= nums[p + 1]) --p;

        // If not found, which means current sequence is already the largest
        // permutation, then rearrange to the first permutation and return false
        if(p == -1) {
            reverse(&nums[begin], &nums[end]);
            return false;
        }

        // From right to left, find the first digit which is greater
        // than the partition number, call it changeNumber
        int c = end - 1;
        while (c > 0 && nums[c] <= nums[p]) --c;

        // Swap the partitionNumber and changeNumber
        swap(nums[p], nums[c]);
        // Reverse all the digits on the right of partitionNumber
        reverse(&nums[p+1], &nums[end]);
        return true;
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Next Permutation
# Time Complexity: O(n), Space Complexity: O(1)
class Solution:
    def nextPermutation(self, nums: list[int]) -> None:
        self.nextPermutation_helper(nums, 0, len(nums))

    @staticmethod
    def nextPermutation_helper(nums: list[int], begin: int, end: int) -> bool:
        # From right to left, find the first digit(partitionNumber)
        # which violates the increase trend
        p = end - 2
        while p > -1 and nums[p] >= nums[p + 1]:
            p -= 1

        # If not found, which means current sequence is already the largest
        # permutation, then rearrange to the first permutation and return false
        if p == -1:
            Solution.reverse(nums, begin, end)
            return False

        # From right to left, find the first digit which is greater
        # than the partition number, call it changeNumber
        c = end - 1
        while c > 0 and nums[c] <= nums[p]:
            c -= 1

        # Swap the partitionNumber and changeNumber
        Solution.swap(nums, p, c)
        # Reverse all the digits on the right of partitionNumber
        Solution.reverse(nums, p+1, end)
        return True

    @staticmethod
    def swap(nums: list[int], i: int, j: int) -> None:
        nums[i], nums[j] = nums[j], nums[i]

    @staticmethod
    def reverse(nums: list[int], begin: int, end: int) -> None:
        end -= 1
        while begin < end:
            Solution.swap(nums, begin, end)
            begin += 1
            end -= 1
```

</TabItem>
</Tabs>

### 相关题目

- [Permutation Sequence](permutation-sequence.md)
- [Permutations](../brute-force/permutations.md)
- [Permutations II](../brute-force/permutations-ii.md)
- [Combinations](../brute-force/combinations.md)
