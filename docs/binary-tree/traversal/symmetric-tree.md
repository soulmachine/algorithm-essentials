---
title: Symmetric Tree
---

### 描述

Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree `[1,2,2,3,4,4,3]` is symmetric:

```
    1
   / \
  2   2
 / \ / \
3  4 4  3
```

But the following `[1,2,2,null,3,null,3]` is not:

```
    1
   / \
  2   2
   \   \
   3    3
```

Note:
Bonus points if you could solve it both recursively and iteratively.

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
// Symmetric Tree
// 递归版，时间复杂度O(n)，空间复杂度O(logn)
public class Solution {
    public boolean isSymmetric(TreeNode root) {
        if (root == null) return true;
        return isSymmetric(root.left, root.right);
    }
    private static boolean isSymmetric(TreeNode p, TreeNode q) {
        if (p == null && q == null) return true;   // 终止条件
        if (p == null || q == null) return false;  // 终止条件
        return p.val == q.val      // 三方合并
                && isSymmetric(p.left, q.right)
                && isSymmetric(p.right, q.left);
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Symmetric Tree
// 递归版，时间复杂度O(n)，空间复杂度O(logn)
class Solution {
public:
    bool isSymmetric(TreeNode *root) {
        if (root == nullptr) return true;
        return isSymmetric(root->left, root->right);
    }
    bool isSymmetric(TreeNode *p, TreeNode *q) {
        if (p == nullptr && q == nullptr) return true;   // 终止条件
        if (p == nullptr || q == nullptr) return false;  // 终止条件
        return p->val == q->val      // 三方合并
                && isSymmetric(p->left, q->right)
                && isSymmetric(p->right, q->left);
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Symmetric Tree
# Recursive solution, time complexity O(n), space complexity O(logn)
class Solution:
    def isSymmetric(self, root: TreeNode) -> bool:
        if not root:
            return True
        return self.isSymmetricHelper(root.left, root.right)

    def isSymmetricHelper(self, p: TreeNode, q: TreeNode) -> bool:
        if not p and not q:  # Termination condition
            return True
        if not p or not q:  # Termination condition
            return False
        return p.val == q.val and \  # Three-way combination
               self.isSymmetricHelper(p.left, q.right) and \
               self.isSymmetricHelper(p.right, q.left)
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
// Symmetric Tree
// 迭代版，时间复杂度O(n)，空间复杂度O(logn)
public class Solution {
    public boolean isSymmetric (TreeNode root) {
        if (root == null) return true;

        Stack<TreeNode> s = new Stack<>();
        s.push(root.left);
        s.push(root.right);

        while (!s.isEmpty()) {
            TreeNode p = s.pop ();
            TreeNode q = s.pop ();

            if (p == null && q == null) continue;
            if (p == null || q == null) return false;
            if (p.val != q.val) return false;

            s.push(p.left);
            s.push(q.right);

            s.push(p.right);
            s.push(q.left);
        }

        return true;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Symmetric Tree
// 迭代版，时间复杂度O(n)，空间复杂度O(logn)
class Solution {
public:
    bool isSymmetric (TreeNode* root) {
        if (!root) return true;

        stack<TreeNode*> s;
        s.push(root->left);
        s.push(root->right);

        while (!s.empty ()) {
            auto p = s.top (); s.pop();
            auto q = s.top (); s.pop();

            if (!p && !q) continue;
            if (!p || !q) return false;
            if (p->val != q->val) return false;

            s.push(p->left);
            s.push(q->right);

            s.push(p->right);
            s.push(q->left);
        }

        return true;
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Symmetric Tree
# Iterative version, time complexity O(n), space complexity O(logn)
class Solution:
    def isSymmetric(self, root):
        if not root:
            return True

        s = []
        s.append(root.left)
        s.append(root.right)

        while s:
            p = s.pop()
            q = s.pop()

            if not p and not q:
                continue
            if not p or not q:
                return False
            if p.val != q.val:
                return False

            s.append(p.left)
            s.append(q.right)

            s.append(p.right)
            s.append(q.left)

        return True
```

</TabItem>
</Tabs>

### 相关题目

- [Same Tree](same-tree.md)
