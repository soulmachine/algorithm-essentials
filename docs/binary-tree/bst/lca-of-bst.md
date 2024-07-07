---
title: LCA of BST
---

### 描述

Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

```
      _______6______
       /              \
    ___2__          ___8__
   /      \        /      \
   1      _4       7       9
         /  \
         3   5
```

For example, the lowest common ancestor (LCA) of nodes 2 and 8 is 6. Another example is LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.

### 分析

根据二叉搜索树的性质，两个子节点`p`,`q`和根节点`root`的关系，有以下四种情况：

1. 两个子节点都在树的左子树上
1. 两个子节点都在树的右子树上
1. 一个子节点在左子树，一个子节点在右子树
1. 一个子节点的值和根节点的值相等

以题目中的树为例，节点 1 和节点 4 为情况 1，节点 7 和节点 9 为情况 2，节点 1 和节点 7 为情况 3，节点 2 和 4 为情况 4。
若为情况 3 或 4，当前节点即为最近公共祖先，若为情况 1 或 2，则还需递归到左或右子树上，继续这个过程。

该算法的时间复杂度为`O(h)`，`h`为树的高度。

### 解法 1 递归

```java
// LCA of BST
// Time Complexity: O(h), Space Complexity: O(h)
public class Solution {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        if (root == null) return null;

        if (Math.max(p.val, q.val) < root.val) {
            return lowestCommonAncestor(root.left, p, q);
        } else if (Math.min(p.val, q.val) > root.val) {
            return lowestCommonAncestor(root.right, p, q);
        } else {
            return root;
        }
    }
}
```

### 解法 2 迭代

```java
// LCA of BST
// Time Complexity: O(h), Space Complexity: O(1)
public class Solution {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        while (root != null) {
            if (Math.max(p.val, q.val) < root.val) {
                root = root.left;
            } else if (Math.min(p.val, q.val) > root.val) {
                root = root.right;
            } else {
                return root;
            }
        }
        return null;
    }
}
```

### 相关题目

- [LCA of Binary Tree](../recursion/lowest-common-ancestor-of-a-binary-tree.md)
