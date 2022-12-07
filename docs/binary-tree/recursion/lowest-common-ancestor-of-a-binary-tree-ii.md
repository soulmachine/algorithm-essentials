---
title: Lowest Common Ancestor of a Binary Tree II
---

### 描述

TODO

### 分析

这题与[Lowest Common Ancestor of a Binary Tree](lowest-common-ancestor-of-a-binary-tree.md)的区别是，`p`和`q`可能不存在于树中，这时候需要返回`null`。

这题的代码与[Lowest Common Ancestor of a Binary Tree](lowest-common-ancestor-of-a-binary-tree.md)绝大部分雷同，有2点变化：

* DFS的时候，如果遇到`root`等于`p`或`q`的时候，不能立刻返回root，因为不能判断另一个节点是否在树中，所以需要采取**后序遍历**，保证每个节点都被访问到
* 设置一个计数器`count`，当搜索到`p`或`q`的时候，计数器`count`增一，最后如果`count`等于2，说明`p`或`q`在同一棵树中，返回最近公共祖先，否则返回`null`。

### 代码

```java
// Lowest Common Ancestor of a Binary Tree II
// Time complexity: O(n)
// Space complexity: O(logn)
class Solution {
	private int count = 0;

    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        TreeNode LCA = LCA(root, p, q);
        return count == 2 ? LCA : null;
    }

    public TreeNode LCA(TreeNode root, TreeNode p, TreeNode q) {
        if (root == null) return root;

        TreeNode left = LCA(root.left, p, q);     
        TreeNode right = LCA(root.right, p, q);
        
        if (root == p || root == q) {
            count++;
            return root;
        }

        return left == null ? right : right == null ? left : root;
    }
}
```

### 相关题目

* [Lowest Common Ancestor of a Binary Tree](lowest-common-ancestor-of-a-binary-tree.md)
* [Lowest Common Ancestor of a Binary Tree III](lowest-common-ancestor-of-a-binary-tree-iii.md)
* [LCA of BST](../bst/lca-of-bst.md)
