---
title: Binary Tree Postorder Traversal
---

### 描述

Given a binary tree, return the **postorder** traversal of its nodes' values.

For example:
Given binary tree `{1,#,2,3}`,

```
 1
  \
   2
  /
 3
```

return `[3,2,1]`.

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
// Binary Tree Postorder Traversal
// 使用栈，时间复杂度O(n)，空间复杂度O(n)
class Solution {
    public List<Integer> postorderTraversal(TreeNode root) {
        ArrayList<Integer> result = new ArrayList<>();
        Stack<TreeNode> s = new Stack<>();
        /* p，正在访问的结点，q，刚刚访问过的结点*/
        TreeNode p = root;
        TreeNode q = null;

        do {
            while (p != null) { /* 往左下走*/
                s.push(p);
                p = p.left;
            }
            q = null;
            while (!s.empty()) {
                p = s.pop();
                /* 右孩子不存在或已被访问，访问之*/
                if (p.right == q) {
                    result.add(p.val);
                    q = p; /* 保存刚访问过的结点*/
                } else {
                    /* 当前结点不能访问，需第二次进栈*/
                    s.push(p);
                    /* 先处理右子树*/
                    p = p.right;
                    break;
                }
            }
        } while (!s.empty());

        return result;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Binary Tree Postorder Traversal
// 使用栈，时间复杂度O(n)，空间复杂度O(n)
class Solution {
public:
    vector<int> postorderTraversal(TreeNode *root) {
        vector<int> result;
        stack<const TreeNode *> s;
        /* p，正在访问的结点，q，刚刚访问过的结点*/
        const TreeNode *p = root, *q = nullptr;

        do {
            while (p != nullptr) { /* 往左下走*/
                s.push(p);
                p = p->left;
            }
            q = nullptr;
            while (!s.empty()) {
                p = s.top();
                s.pop();
                /* 右孩子不存在或已被访问，访问之*/
                if (p->right == q) {
                    result.push_back(p->val);
                    q = p; /* 保存刚访问过的结点*/
                } else {
                    /* 当前结点不能访问，需第二次进栈*/
                    s.push(p);
                    /* 先处理右子树*/
                    p = p->right;
                    break;
                }
            }
        } while (!s.empty());

        return result;
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Binary Tree Postorder Traversal
# 使用栈，时间复杂度O(n)，空间复杂度O(n)
class Solution:
    def postorderTraversal(self, root):
        result = []
        s = []
        # p，正在访问的结点，q，刚刚访问过的结点
        p = root
        q = None
        while True:
            while p: # 往左下走
                s.append(p)
                p = p.left
            q = None
            while s:
                p = s.pop()
                # 右孩子不存在或已被访问，访问之
                if p.right == q:
                    result.append(p.val)
                    q = p # 保存刚访问过的结点
                else:
                    # 当前结点不能访问，需第二次进栈
                    s.append(p)
                    # 先处理右子树
                    p = p.right
                    break
            if not s:
                break
        return result
```

</TabItem>
</Tabs>

### Morris 后序遍历

<Tabs
defaultValue="java"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// Binary Tree Postorder Traversal
// Morris后序遍历，时间复杂度O(n)，空间复杂度O(1)
class Solution {
    public List<Integer> postorderTraversal(TreeNode root) {
        ArrayList<Integer> result = new ArrayList<>();
        TreeNode dummy = new TreeNode(-1);
        dummy.left = root;
        TreeNode cur = dummy;
        TreeNode prev = null;

        while (cur != null) {
            if (cur.left == null) {
                prev = cur; /* 必须要有 */
                cur = cur.right;
            } else {
                TreeNode node = cur.left;
                while (node.right != null && node.right != cur)
                    node = node.right;

                if (node.right == null) { /* 还没线索化，则建立线索 */
                    node.right = cur;
                    prev = cur; /* 必须要有 */
                    cur = cur.left;
                } else { /* 已经线索化，则访问节点，并删除线索  */
                    visit_reverse(cur.left, prev, result);
                    prev.right = null;
                    prev = cur; /* 必须要有 */
                    cur = cur.right;
                }
            }
        }
        return result;
    }
    // 逆转路径
    private static void reverse(TreeNode from, TreeNode to) {
        TreeNode x = from;
        TreeNode y = from.right;
        TreeNode z = null;
        if (from == to) return;

        while (x != to) {
            z = y.right;
            y.right = x;
            x = y;
            y = z;
        }
    }

    // 访问逆转后的路径上的所有结点
    private static void visit_reverse(TreeNode from, TreeNode to,
                                      List<Integer> result) {
        TreeNode p = to;
        reverse(from, to);

        while (true) {
            result.add(p.val);
            if (p == from)
                break;
            p = p.right;
        }

        reverse(to, from);
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Binary Tree Postorder Traversal
// Morris后序遍历，时间复杂度O(n)，空间复杂度O(1)
class Solution {
public:
    vector<int> postorderTraversal(TreeNode *root) {
        vector<int> result;
        TreeNode dummy(-1);
        TreeNode *cur, *prev = nullptr;
        std::function < void(const TreeNode*)> visit =
            [&result](const TreeNode *node){
            result.push_back(node->val);
        };

        dummy.left = root;
        cur = &dummy;
        while (cur != nullptr) {
            if (cur->left == nullptr) {
                prev = cur; /* 必须要有 */
                cur = cur->right;
            } else {
                TreeNode *node = cur->left;
                while (node->right != nullptr && node->right != cur)
                    node = node->right;

                if (node->right == nullptr) { /* 还没线索化，则建立线索 */
                    node->right = cur;
                    prev = cur; /* 必须要有 */
                    cur = cur->left;
                } else { /* 已经线索化，则访问节点，并删除线索  */
                    visit_reverse(cur->left, prev, visit);
                    prev->right = nullptr;
                    prev = cur; /* 必须要有 */
                    cur = cur->right;
                }
            }
        }
        return result;
    }
private:
    // 逆转路径
    static void reverse(TreeNode *from, TreeNode *to) {
        TreeNode *x = from, *y = from->right, *z;
        if (from == to) return;

        while (x != to) {
            z = y->right;
            y->right = x;
            x = y;
            y = z;
        }
    }

    // 访问逆转后的路径上的所有结点
    static void visit_reverse(TreeNode* from, TreeNode *to,
                     std::function< void(const TreeNode*) >& visit) {
        TreeNode *p = to;
        reverse(from, to);

        while (true) {
            visit(p);
            if (p == from)
                break;
            p = p->right;
        }

        reverse(to, from);
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Binary Tree Postorder Traversal
# Morris后序遍历，时间复杂度O(n)，空间复杂度O(1)
class Solution:
    def postorderTraversal(self, root):
        result = []
        dummy = TreeNode(-1)
        dummy.left = root
        cur = dummy
        prev = None

        while cur:
            if cur.left is None:
                prev = cur  # 必须要有
                cur = cur.right
            else:
                node = cur.left
                while node.right and node.right != cur:
                    node = node.right

                if node.right is None:  # 还没线索化，则建立线索
                    node.right = cur
                    prev = cur  # 必须要有
                    cur = cur.left
                else:  # 已经线索化，则访问节点，并删除线索
                    self.visit_reverse(cur.left, prev, result)
                    prev.right = None
                    prev = cur  # 必须要有
                    cur = cur.right

        return result

    # 逆转路径
    @staticmethod
    def reverse(from_node, to_node):
        x = from_node
        y = from_node.right
        z = None
        if from_node == to_node:
            return

        while x != to_node:
            z = y.right
            y.right = x
            x = y
            y = z

    # 访问逆转后的路径上的所有结点
    def visit_reverse(self, from_node, to_node, result):
        p = to_node
        self.reverse(from_node, to_node)

        while True:
            result.append(p.val)
            if p == from_node:
                break
            p = p.right

        self.reverse(to_node, from_node)
```

</TabItem>
</Tabs>

### 相关题目

- [Binary Tree Preorder Traversal](binary-tree-preorder-traversal.md)
- [Binary Tree Inorder Traversal](binary-tree-inorder-traversal.md)
- [Recover Binary Search Tree](recover-binary-search-tree.md)
