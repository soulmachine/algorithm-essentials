---
title: Validate Binary Search Tree
---

### 描述

Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

- The left subtree of a node contains only nodes with keys less than the node's key.
- The right subtree of a node contains only nodes with keys greater than the node's key.
- Both the left and right subtrees must also be binary search trees.

### 分析

无

### 代码

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

<Tabs
defaultValue="java"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// Validate Binary Search Tree
// 时间复杂度O(n)，空间复杂度O(\logn)
public class Solution {
    public boolean isValidBST(TreeNode root) {
        return isValidBST(root, INT_MIN, INT_MAX);
    }

    bool isValidBST(TreeNode* root, int lower, int upper) {
        if (root == nullptr) return true;

        return root.val > lower && root.val < upper
                && isValidBST(root.left, lower, root.val)
                && isValidBST(root.right, root.val, upper);
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Validate Binary Search Tree
// 时间复杂度O(n)，空间复杂度O(\logn)
class Solution {
public:
    bool isValidBST(TreeNode* root) {
        return isValidBST(root, LONG_MIN, LONG_MAX);
    }

    bool isValidBST(TreeNode* root, long long lower, long long upper) {
        if (root == nullptr) return true;

        return root->val > lower && root->val < upper
                && isValidBST(root->left, lower, root->val)
                && isValidBST(root->right, root->val, upper);
    }
};
```

</TabItem>
</Tabs>

### 相关题目

- [Validate Binary Search Tree](validate-binary-search-tree.md)
