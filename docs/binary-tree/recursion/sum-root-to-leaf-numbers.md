---
title: Sum Root to Leaf Numbers
---

### 描述

Given a binary tree containing digits from `0-9` only, each root-to-leaf path could represent a number.

An example is the root-to-leaf path `1->2->3` which represents the number `123`.

Find the total sum of all root-to-leaf numbers.

For example,

```cpp
    1
   / \
  2   3
```

The root-to-leaf path `1->2` represents the number `12`.
The root-to-leaf path `1->3` represents the number `13`.

Return the sum = `12 + 13 = 25`.

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
// Sum root to leaf numbers
// 时间复杂度O(n)，空间复杂度O(logn)
public class Solution {
    public int sumNumbers(TreeNode root) {
        return dfs(root, 0);
    }
    private static int dfs(TreeNode root, int sum) {
        if (root == null) return 0;
        if (root.left == null && root.right == null)
            return sum * 10 + root.val;

        return dfs(root.left, sum * 10 + root.val) +
                dfs(root.right, sum * 10 + root.val);
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Sum root to leaf numbers
// 时间复杂度O(n)，空间复杂度O(logn)
class Solution {
public:
    int sumNumbers(TreeNode *root) {
        return dfs(root, 0);
    }
private:
    int dfs(TreeNode *root, int sum) {
        if (root == nullptr) return 0;
        if (root->left == nullptr && root->right == nullptr)
            return sum * 10 + root->val;

        return dfs(root->left, sum * 10 + root->val) +
                dfs(root->right, sum * 10 + root->val);
    }
};
```

</TabItem>
</Tabs>
