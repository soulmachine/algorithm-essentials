---
title: Binary Tree Preorder Traversal
---

### 描述

Given a binary tree, return the **preorder** traversal of its nodes' values.

For example:
Given binary tree `{1,#,2,3}`,

```
 1
  \
   2
  /
 3
```

return `[1,2,3]`.

Note: Recursive solution is trivial, could you do it iteratively?

### 分析

用栈或者 Morris 遍历。

### 栈

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
// Binary Tree Preorder Traversal
// 使用栈，时间复杂度O(n)，空间复杂度O(n)
class Solution {
    public List<Integer> preorderTraversal(TreeNode root) {
        ArrayList<Integer> result = new ArrayList<>();
        Stack<TreeNode> s = new Stack<>();
        if (root != null) s.push(root);

        while (!s.isEmpty()) {
            final TreeNode p = s.pop();
            result.add(p.val);

            if (p.right != null) s.push(p.right);
            if (p.left != null) s.push(p.left);
        }
        return result;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Binary Tree Preorder Traversal
// 使用栈，时间复杂度O(n)，空间复杂度O(n)
class Solution {
public:
    vector<int> preorderTraversal(TreeNode *root) {
        vector<int> result;
        stack<const TreeNode *> s;
        if (root != nullptr) s.push(root);

        while (!s.empty()) {
            const TreeNode *p = s.top();
            s.pop();
            result.push_back(p->val);

            if (p->right != nullptr) s.push(p->right);
            if (p->left != nullptr) s.push(p->left);
        }
        return result;
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Binary Tree Preorder Traversal
# Using stack, time complexity O(n), space complexity O(n)
class Solution:
    def preorderTraversal(self, root):
        result = []
        s = []
        if root:
            s.append(root)

        while s:
            p = s.pop()
            result.append(p.val)

            if p.right:
                s.append(p.right)
            if p.left:
                s.append(p.left)

        return result
```

</TabItem>
</Tabs>

### Morris 先序遍历

```cpp
// Binary Tree Preorder Traversal
// Morris先序遍历，时间复杂度O(n)，空间复杂度O(1)
class Solution {
public:
    vector<int> preorderTraversal(TreeNode *root) {
        vector<int> result;
        TreeNode *cur = root, *prev = nullptr;

        while (cur != nullptr) {
            if (cur->left == nullptr) {
                result.push_back(cur->val);
                prev = cur; /* cur刚刚被访问过 */
                cur = cur->right;
            } else {
                /* 查找前驱 */
                TreeNode *node = cur->left;
                while (node->right != nullptr && node->right != cur)
                    node = node->right;

                if (node->right == nullptr) { /* 还没线索化，则建立线索 */
                    result.push_back(cur->val); /* 仅这一行的位置与中序不同 */
                    node->right = cur;
                    prev = cur; /* cur刚刚被访问过 */
                    cur = cur->left;
                } else {    /* 已经线索化，则删除线索  */
                    node->right = nullptr;
                    /* prev = cur; 不能有这句，cur已经被访问 */
                    cur = cur->right;
                }
            }
        }
        return result;
    }
};
```

### 相关题目

- [Binary Tree Inorder Traversal](binary-tree-inorder-traversal.md)
- [Binary Tree Postorder Traversal](binary-tree-postorder-traversal.md)
- [Recover Binary Search Tree](recover-binary-search-tree.md)
