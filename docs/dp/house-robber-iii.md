---
title: House Robber III
---

### 描述

All houses in this place **forms a binary tree**. It will automatically contact the police if two directly-linked houses were broken into on the same night.

**Example 1**:

```
     3
    / \
   2   3
    \   \
     3   1
```

Maximum amount of money the thief can rob = 3 + 3 + 1 = 7.

**Example 2**:

```
     3
    / \
   4   5
  / \   \
 1   3   1
```

Maximum amount of money the thief can rob = 4 + 5 = 9.

### 分析

树形动规。设状态 `f(root)` 表示抢劫 root 为根节点的二叉树，root 可抢也可能不抢，能得到的最大金钱，`g(root)`表示抢劫 root 为根节点的二叉树，但不抢 root，能得到的最大金钱，则状态转移方程为

`f(root) = max{f(root.left) + f(root.right), g(root.left)+g(root.right) + root.val}`

`g(root) = f(root.left) + f(root.right)`

### 代码

```java
// House Robber III
// Time Complexity: O(n), Space Complexity: O(h)
public class Solution {
    public int rob(TreeNode root) {
        return dfs(root)[0];
    }

    private static int[] dfs(TreeNode root) {
        int[] dp = new int[] {0, 0}; // f, g
        if (root != null) {
            int[] dpL = dfs(root.left);
            int[] dpR = dfs(root.right);
            dp[1] = dpL[0] + dpR[0];
            dp[0] = Math.max(dp[1], dpL[1] + dpR[1] + root.val);
        }
        return dp;
    }
}
```
