---
title: Invert Binary Tree
---

### 描述

Invert a binary tree.

```
     4
   /   \
  2     7
 / \   / \
1   3 6   9
```

to

```
     4
   /   \
  7     2
 / \   / \
9   6 3   1
```

### 分析

这题是大名鼎鼎的 Homebrew 的作者 Max Howell 在 Twitter 上发牢骚的那道题。原始 Tweet 地址：[https://twitter.com/mxcl/status/608682016205344768](https://twitter.com/mxcl/status/608682016205344768)

这题最简单的办法，是层次遍历，每次交换左右子树。

但是，这题也可以用递归解决，代码非常短。

### 解法 1 层次遍历

```java
// Invert Binary Tree
// Time Complexity: O(n), Space Complexity: O(n)
public class Solution {
    public TreeNode invertTree(TreeNode root) {
        Queue<TreeNode> q = new LinkedList<>();
        if (root != null) q.offer(root);

        while (!q.isEmpty()) {
            TreeNode node = q.poll();
            // swap left and right
            TreeNode tmp = node.left;
            node.left = node.right;
            node.right = tmp;

            if (node.left != null) q.offer(node.left);
            if (node.right != null) q.offer(node.right);
        }
        return root;
    }
}
```

### 解法 2 递归

```java
// Invert Binary Tree
// Time Complexity: O(n), Space Complexity: O(n)
public class Solution {
    public TreeNode invertTree(TreeNode root) {
        if (root == null) return root;

        TreeNode tmp = root.left;
        root.left = invertTree(root.right);
        root.right = invertTree(tmp);

        return root;
    }
}
```
