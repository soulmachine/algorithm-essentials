---
title: Same Tree
---

### 描述

Given two binary trees, write a function to check if they are equal or not.

Two binary trees are considered equal if they are structurally identical and the nodes have the same value.

### 分析

无

### 递归版

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
// Same Tree
// 递归版，时间复杂度O(n)，空间复杂度O(logn)
public class Solution {
    public boolean isSameTree(TreeNode p, TreeNode q) {
        if (p == null && q == null) return true;   // 终止条件
        if (p == null || q == null) return false;  // 剪枝
        return p.val == q.val      // 三方合并
                && isSameTree(p.left, q.left)
                && isSameTree(p.right, q.right);
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Same Tree
// 递归版，时间复杂度O(n)，空间复杂度O(logn)
class Solution {
public:
    bool isSameTree(TreeNode *p, TreeNode *q) {
        if (!p && !q) return true;   // 终止条件
        if (!p || !q) return false;  // 剪枝
        return p->val == q->val      // 三方合并
                && isSameTree(p->left, q->left)
                && isSameTree(p->right, q->right);
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Same Tree
# 递归版，时间复杂度O(n)，空间复杂度O(logn)
class Solution:
    def isSameTree(self, p: TreeNode, q: TreeNode) -> bool:
        if p is None and q is None: return True   # 终止条件
        if p is None or q is None: return False   # 剪枝
        return p.val == q.val \    # 三方合并
                and self.isSameTree(p.left, q.left) \
                and self.isSameTree(p.right, q.right)
```

</TabItem>
</Tabs>

### 迭代版

<Tabs
defaultValue="java"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// Same Tree
// 迭代版，时间复杂度O(n)，空间复杂度O(logn)
public class Solution {
    public boolean isSameTree(TreeNode p, TreeNode q) {
        Stack<TreeNode> s = new Stack<>();
        s.push(p);
        s.push(q);

        while(!s.empty()) {
            p = s.pop();
            q = s.pop();

            if (p == null && q == null) continue;
            if (p == null || q == null) return false;
            if (p.val != q.val) return false;

            s.push(p.left);
            s.push(q.left);

            s.push(p.right);
            s.push(q.right);
        }
        return true;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Same Tree
// 迭代版，时间复杂度O(n)，空间复杂度O(logn)
class Solution {
public:
    bool isSameTree(TreeNode *p, TreeNode *q) {
        stack<TreeNode*> s;
        s.push(p);
        s.push(q);

        while(!s.empty()) {
            p = s.top(); s.pop();
            q = s.top(); s.pop();

            if (!p && !q) continue;
            if (!p || !q) return false;
            if (p->val != q->val) return false;

            s.push(p->left);
            s.push(q->left);

            s.push(p->right);
            s.push(q->right);
        }
        return true;
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Same Tree
# 迭代版，时间复杂度O(n)，空间复杂度O(logn)
class Solution:
    def isSameTree(self, p: TreeNode, q: TreeNode) -> bool:
        s = []
        s.append(p)
        s.append(q)

        while s:
            q = s.pop()
            p = s.pop()

            if p is None and q is None:
                continue
            if p is None or q is None:
                return False
            if p.val != q.val:
                return False

            s.append(p.left)
            s.append(q.left)

            s.append(p.right)
            s.append(q.right)
        return True
```

</TabItem>
</Tabs>

### 相关题目

- [Symmetric Tree](symmetric-tree.md)
