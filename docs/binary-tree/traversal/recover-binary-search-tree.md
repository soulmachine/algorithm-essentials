---
title: Recover Binary Search Tree
---

### 描述

Two elements of a binary search tree (BST) are swapped by mistake.

Recover the tree without changing its structure.

Note: A solution using `O(n)` space is pretty straight forward. Could you devise a constant space solution?

### 分析

`O(logn)`空间的解法是，中序递归遍历，用两个指针存放在遍历过程中碰到的两处逆向的位置。

本题要求`O(1)`空间，只能用 Morris 中序遍历。

### 中序遍历，递归方式

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
// Recover Binary Search Tree
// 中序遍历,递归
// 时间复杂度O(n)，空间复杂度O(logn)
// 本代码仅仅是为了帮助理解题目
public class Solution {
    private TreeNode p1 = null;
    private TreeNode p2 = null;
    private TreeNode prev = null;

    public void recoverTree(TreeNode root) {
        inOrder( root);
        // swap
        int tmp = p1.val;
        p1.val = p2.val;
        p2.val = tmp;
    }

    private void inOrder(TreeNode root) {
        if ( root ==  null ) return;
        if ( root.left != null ) inOrder(root.left);

        if ( prev != null && root.val < prev.val ) {
            if ( p1 == null) {
                p1 = prev;
                p2 = root;
            } else {
                p2 = root;
            }
        }
        prev = root;
        if ( root.right != null ) inOrder(root.right);
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Recover Binary Search Tree
// 中序遍历,递归
// 时间复杂度O(n)，空间复杂度O(logn)
// 本代码仅仅是为了帮助理解题目
class Solution {
public:
    void recoverTree(TreeNode *root) {
        inOrder( root);
        swap(p1->val, p2->val);
    }
private:
    void inOrder(TreeNode *root) {
        if ( root ==  nullptr ) return;
        if ( root->left != nullptr ) inOrder(root->left);

        if ( prev != nullptr && root->val < prev->val ) {
            if ( p1 == nullptr) {
                p1 = prev;
                p2 = root;
            } else {
                p2 = root;
            }
        }
        prev = root;
        if ( root->right != nullptr ) inOrder(root->right);
    }
    TreeNode *p1 = nullptr;
    TreeNode *p2 = nullptr;
    TreeNode *prev = nullptr;
};
```

</TabItem>

<TabItem value="python">

```python
# Recover Binary Search Tree
# 中序遍历,递归
# 时间复杂度O(n)，空间复杂度O(logn)
# 本代码仅仅是为了帮助理解题目
class Solution:
    def __init__(self):
        self.p1 = None
        self.p2 = None
        self.prev = None

    def recoverTree(self, root):
        self.inOrder(root)
        # swap
        tmp = self.p1.val
        self.p1.val = self.p2.val
        self.p2.val = tmp

    def inOrder(self, root):
        if root is None:
            return
        if root.left is not None:
            self.inOrder(root.left)

        if self.prev is not None and root.val < self.prev.val:
            if self.p1 is None:
                self.p1 = self.prev
                self.p2 = root
            else:
                self.p2 = root
        self.prev = root
        if root.right is not None:
            self.inOrder(root.right)
```

</TabItem>
</Tabs>

### Morris 中序遍历

<Tabs
defaultValue="java"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// Recover Binary Search Tree
// Morris中序遍历，时间复杂度O(n)，空间复杂度O(1)
public class Solution {
    public void recoverTree(TreeNode root) {
        TreeNode[] broken = new TreeNode[2];
        TreeNode prev = null;
        TreeNode cur = root;

        while (cur != null) {
            if (cur.left == null) {
                detect(broken, prev, cur);
                prev = cur;
                cur = cur.right;
            } else {
                TreeNode node = cur.left;

                while (node.right != null && node.right != cur)
                    node = node.right;

                if (node.right == null) {
                    node.right = cur;
                    //prev = cur; 不能有这句！因为cur还没有被访问
                    cur = cur.left;
                } else {
                    detect(broken, prev, cur);
                    node.right = null;
                    prev = cur;
                    cur = cur.right;
                }
            }
        }
        // swap
        int tmp = broken[0].val;
        broken[0].val = broken[1].val;
        broken[1].val = tmp;
    }

    void detect(TreeNode[] broken, TreeNode prev,
                TreeNode current) {
        if (prev != null && prev.val > current.val) {
            if (broken[0] == null) {
                broken[0] = prev;
            } //不能用else，例如 {0,1}，会导致最后 swap时second为nullptr，
            //会 Runtime Error
            broken[1] = current;
        }
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Recover Binary Search Tree
// Morris中序遍历，时间复杂度O(n)，空间复杂度O(1)
class Solution {
public:
    void recoverTree(TreeNode* root) {
        pair<TreeNode*, TreeNode*> broken;
        TreeNode* prev = nullptr;
        TreeNode* cur = root;

        while (cur != nullptr) {
            if (cur->left == nullptr) {
                detect(broken, prev, cur);
                prev = cur;
                cur = cur->right;
            } else {
                auto node = cur->left;

                while (node->right != nullptr && node->right != cur)
                    node = node->right;

                if (node->right == nullptr) {
                    node->right = cur;
                    //prev = cur; 不能有这句！因为cur还没有被访问
                    cur = cur->left;
                } else {
                    detect(broken, prev, cur);
                    node->right = nullptr;
                    prev = cur;
                    cur = cur->right;
                }
            }
        }

        swap(broken.first->val, broken.second->val);
    }

    void detect(pair<TreeNode*, TreeNode*>& broken, TreeNode* prev,
            TreeNode* current) {
        if (prev != nullptr && prev->val > current->val) {
            if (broken.first == nullptr) {
                broken.first = prev;
            } //不能用else，例如 {0,1}，会导致最后 swap时second为nullptr，
              //会 Runtime Error
            broken.second = current;
        }
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Recover Binary Search Tree
# Morris中序遍历，时间复杂度O(n)，空间复杂度O(1)
class Solution:
    def recoverTree(self, root):
        broken = [None, None]
        prev = None
        cur = root

        while cur:
            if cur.left is None:
                self.detect(broken, prev, cur)
                prev = cur
                cur = cur.right
            else:
                node = cur.left

                while node.right and node.right != cur:
                    node = node.right

                if node.right is None:
                    node.right = cur
                    #prev = cur  # 不能有这句！因为cur还没有被访问
                    cur = cur.left
                else:
                    self.detect(broken, prev, cur)
                    node.right = None
                    prev = cur
                    cur = cur.right

        # swap
        tmp = broken[0].val
        broken[0].val = broken[1].val
        broken[1].val = tmp

    def detect(self, broken, prev, current):
        if prev and prev.val > current.val:
            if broken[0] is None:
                broken[0] = prev
            #不能用else，例如 {0,1}，会导致最后 swap时second为nullptr，
            #会 Runtime Error
            broken[1] = current
```

</TabItem>
</Tabs>

### 相关题目

- [Binary Tree Inorder Traversal](binary-tree-inorder-traversal.md)
