---
title: Binary Tree Maximum Path Sum
---

### 描述

Given a binary tree, find the maximum path sum.

The path may start and end at any node in the tree.
For example:
Given the below binary tree,

```
  1
 / \
2   3
```

Return `6`.

### 分析

这题很难，路径可以从任意节点开始，到任意节点结束。

可以利用“最大连续子序列和”问题的思路，见这节[Maximum Subarray](../../dp/maximum-subarray.md)。如果说 Array 只有一个方向的话，那么 Binary Tree 其实只是左、右两个方向而已，我们需要比较两个方向上的值。

不过，Array 可以从头到尾遍历，那么 Binary Tree 怎么办呢，我们可以采用 Binary Tree 最常用的 dfs 来进行遍历。先算出左右子树的结果 L 和 R，如果 L 大于 0，那么对后续结果是有利的，我们加上 L，如果 R 大于 0，对后续结果也是有利的，继续加上 R。

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
// Binary Tree Maximum Path Sum
// 时间复杂度O(n)，空间复杂度O(logn)
public class Solution {
    public int maxPathSum(TreeNode root) {
        max_sum = Integer.MIN_VALUE;
        dfs(root);
        return max_sum;
    }
    private int max_sum;
    private int dfs(TreeNode root) {
        if (root == null) return 0;
        int l = dfs(root.left);
        int r = dfs(root.right);
        int sum = root.val;
        if (l > 0) sum += l;
        if (r > 0) sum += r;
        max_sum = Math.max(max_sum, sum);
        return Math.max(r, l) > 0 ? Math.max(r, l) + root.val : root.val;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Binary Tree Maximum Path Sum
// 时间复杂度O(n)，空间复杂度O(logn)
class Solution {
public:
    int maxPathSum(TreeNode *root) {
        max_sum = INT_MIN;
        dfs(root);
        return max_sum;
    }
private:
    int max_sum;
    int dfs(const TreeNode *root) {
        if (root == nullptr) return 0;
        int l = dfs(root->left);
        int r = dfs(root->right);
        int sum = root->val;
        if (l > 0) sum += l;
        if (r > 0) sum += r;
        max_sum = max(max_sum, sum);
        return max(r, l) > 0 ? max(r, l) + root->val : root->val;
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Binary Tree Maximum Path Sum
# 时间复杂度O(n)，空间复杂度O(logn)
class Solution:
    def maxPathSum(self, root):
        self.max_sum = float('-inf')
        self.dfs(root)
        return self.max_sum

    def dfs(self, root):
        if not root:
            return 0
        l = self.dfs(root.left)
        r = self.dfs(root.right)
        sum = root.val
        if l > 0:
            sum += l
        if r > 0:
            sum += r
        self.max_sum = max(self.max_sum, sum)
        return (max(r, l) + root.val) if max(r, l) > 0 else root.val
```

</TabItem>
</Tabs>

注意，最后 return 的时候，只返回一个方向上的值，为什么？这是因为在递归中，只能向父节点返回，不可能存在 L->root->R 的路径，只可能是 L->root 或 R->root。

### 相关题目

- [Maximum Subarray](../../dp/maximum-subarray.md)
- [Maximum Product Subarray](../../dp/maximum-product-subarray.md)
