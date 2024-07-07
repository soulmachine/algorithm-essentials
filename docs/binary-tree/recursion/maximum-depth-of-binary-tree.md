---
title: Maximum Depth of Binary Tree
---

### 描述

Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

### 分析

无

### 代码

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

<Tabs
defaultValue="java"
values={[
{ label: 'Python', value: 'python', },
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="python">

```python
# Maximum Depth of Binary Tree
# 时间复杂度O(n)，空间复杂度O(logn)
class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        if root is None:
            return 0
        else: 
            return 1 + max(self.maxDepth(root.left), self.maxDepth(root.right))
        ```
</TabItem>
<TabItem value="java">

```java
// Maximum Depth of Binary Tree
// 时间复杂度O(n)，空间复杂度O(logn)
class Solution {
    public int maxDepth(TreeNode root) {
        if (root == null) return 0;

        return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Maximum Depth of Binary Tree
// 时间复杂度O(n)，空间复杂度O(logn)
class Solution {
public:
    int maxDepth(TreeNode *root) {
        if (root == nullptr) return 0;

        return max(maxDepth(root->left), maxDepth(root->right)) + 1;
    }
};
```

</TabItem>
</Tabs>

### 相关题目

- [Minimum Depth of Binary Tree](minimum-depth-of-binary-tree.md)
