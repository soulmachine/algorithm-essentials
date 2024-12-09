---
title: Construct Binary Tree from Inorder and Postorder Traversal
---

### 描述

Given inorder and postorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

### 分析

无

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
// Construct Binary Tree from Inorder and Postorder Traversal
// 递归，时间复杂度O(n)，空间复杂度O(\logn)
public class Solution {
    public TreeNode buildTree(int[] inorder, int[] postorder) {
        return buildTree(inorder, 0, inorder.length,
                postorder, 0, postorder.length);
    }

    TreeNode buildTree(int[] inorder, int begin1, int end1,
                       int[] postorder, int begin2, int end2) {
        if (begin1 ==end1) return null;
        if (begin2 ==end2) return null;

        int val = postorder[end2 - 1];
        TreeNode root = new TreeNode(val);

        int in_root_pos = find(inorder, begin1, end1, val);
        int left_size = in_root_pos - begin1;
        int post_left_last = begin2 + left_size;

        root.left = buildTree(inorder, begin1, in_root_pos,
                postorder, begin2, post_left_last);
        root.right = buildTree(inorder, in_root_pos + 1, end1,
                postorder, post_left_last, end2 - 1);

        return root;
    }
    private static int find(int[] array, int begin, int end, int val) {
        for (int i = begin; i < end; ++i) {
            if (array[i] == val) return i;
        }
        return -1;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Construct Binary Tree from Inorder and Postorder Traversal
// 递归，时间复杂度O(n)，空间复杂度O(\logn)
class Solution {
public:
    TreeNode* buildTree(vector<int>& inorder, vector<int>& postorder) {
        return buildTree(begin(inorder), end(inorder),
                begin(postorder), end(postorder));
    }

    template<typename BidiIt>
    TreeNode* buildTree(BidiIt in_first, BidiIt in_last,
            BidiIt post_first, BidiIt post_last) {
        if (in_first ==in_last) return nullptr;
        if (post_first == post_last) return nullptr;

        const auto val = *prev(post_last);
        TreeNode* root = new TreeNode(val);

        auto in_root_pos = find(in_first, in_last, val);
        auto left_size = distance(in_first, in_root_pos);
        auto post_left_last = next(post_first, left_size);

        root->left = buildTree(in_first, in_root_pos, post_first, post_left_last);
        root->right = buildTree(next(in_root_pos), in_last, post_left_last,
                prev(post_last));

        return root;
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Construct Binary Tree from Inorder and Postorder Traversal
# 递归，时间复杂度O(n)，空间复杂度O(\logn)
class Solution:
    def buildTree(self, inorder, postorder):
        return self._buildTree(inorder, 0, len(inorder),
                             postorder, 0, len(postorder))

    def _buildTree(self, inorder, begin1, end1,
                  postorder, begin2, end2):
        if begin1 == end1:
            return None
        if begin2 == end2:
            return None

        val = postorder[end2 - 1]
        root = TreeNode(val)

        in_root_pos = self._find(inorder, begin1, end1, val)
        left_size = in_root_pos - begin1
        post_left_last = begin2 + left_size

        root.left = self._buildTree(inorder, begin1, in_root_pos,
                                  postorder, begin2, post_left_last)
        root.right = self._buildTree(inorder, in_root_pos + 1, end1,
                                   postorder, post_left_last, end2 - 1)

        return root

    def _find(self, array, begin, end, val):
        for i in range(begin, end):
            if array[i] == val:
                return i
        return -1
```

</TabItem>
</Tabs>

### 相关题目

- [Construct Binary Tree from Preorder and Inorder Traversal](construct-binary-tree-from-preorder-and-inorder-traversal.md)
