---
title: Lowest Common Ancestor of a Binary Tree
---

### 描述

Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to [the definition of LCA on Wikipedia](https://en.wikipedia.org/wiki/Lowest_common_ancestor): “The lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants (where we allow **a node to be a descendant of itself**).”

```
        _______3______
       /              \
    ___5__          ___1__
   /      \        /      \
   6      _2       0       8
         /  \
         7   4
```

For example, the lowest common ancestor (LCA) of nodes 5 and 1 is 3. Another example is LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.

### 分析

用自底向上(bottom-up)的思路，先看看是否能在`root`的左子树中找到`p`或`q`，再看看能否在右子树中找到，

- 如果两边都能找到，说明当前节点就是最近公共祖先
- 如果左边没找到，则说明`p`和`q`都在右子树
- 如果右边没找到，则说明`p`和`q`都在左子树

### 代码

```java
// Lowest Common Ancestor of a Binary Tree
// Time complexity: O(n), Space complexity: O(h)
public class Solution {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        // if root is null or found p or q
        if (root == null || root == p || root == q) return root;
        // find p or q in the left subtree
        final TreeNode left = lowestCommonAncestor(root.left, p, q);
        // find p or q in the right subtree
        final TreeNode right = lowestCommonAncestor(root.right, p, q);
        if (left != null && right != null) return root;
        else return left == null ? right : left;
    }
}
```

### 相关题目

- [LCA of BST](../bst/lca-of-bst.md)
- [Lowest Common Ancestor of a Binary Tree II](lowest-common-ancestor-of-a-binary-tree-ii.md)
- [Lowest Common Ancestor of a Binary Tree III](lowest-common-ancestor-of-a-binary-tree-iii.md)
