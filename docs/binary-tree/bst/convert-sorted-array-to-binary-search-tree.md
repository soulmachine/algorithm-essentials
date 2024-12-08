---
title: Convert Sorted Array to Binary Search Tree
---

### 描述

Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

### 分析

二分法。

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
// Convert Sorted Array to Binary Search Tree
// 二分法，时间复杂度O(n)，空间复杂度O(logn)
public class Solution {
    public TreeNode sortedArrayToBST (int[] nums) {
        return sortedArrayToBST(nums, 0, nums.length);
    }

    private static TreeNode sortedArrayToBST (int[] nums, int begin, int end) {
        int length = end - begin;
        if (length < 1) return null;  // 终止条件

        // 三方合并
        int mid = begin + length / 2;
        TreeNode root = new TreeNode (nums[mid]);
        root.left = sortedArrayToBST(nums, begin, mid);
        root.right = sortedArrayToBST(nums, mid + 1, end);

        return root;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Convert Sorted Array to Binary Search Tree
// 二分法，时间复杂度O(n)，空间复杂度O(logn)
class Solution {
public:
    TreeNode* sortedArrayToBST (vector<int>& num) {
        return sortedArrayToBST(num.begin(), num.end());
    }

    template<typename RandomAccessIterator>
    TreeNode* sortedArrayToBST (RandomAccessIterator first,
            RandomAccessIterator last) {
        const auto length = distance(first, last);

        if (length <= 0) return nullptr;  // 终止条件

        // 三方合并
        auto mid = first + length / 2;
        TreeNode* root = new TreeNode (*mid);
        root->left = sortedArrayToBST(first, mid);
        root->right = sortedArrayToBST(mid + 1, last);

        return root;
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Convert Sorted Array to Binary Search Tree
# Binary method, time complexity O(n), space complexity O(logn)
class Solution:
    def sortedArrayToBST(self, nums: list[int]) -> 'TreeNode':
        return self._sortedArrayToBST(nums, 0, len(nums))

    def _sortedArrayToBST(self, nums: list[int], begin: int, end: int) -> 'TreeNode':
        length = end - begin
        if length < 1: return None  # termination condition

        # three-way merge
        mid = begin + length // 2
        root = TreeNode(nums[mid])
        root.left = self._sortedArrayToBST(nums, begin, mid)
        root.right = self._sortedArrayToBST(nums, mid + 1, end)

        return root
```

</TabItem>
</Tabs>

### 相关题目

- [Convert Sorted List to Binary Search Tree](convert-sorted-list-to-binary-search-tree.md)
