---
title: Flatten Binary Tree to Linked List
---

### 描述

Given a binary tree, flatten it to a linked list in-place.

For example, Given

```
         1
        / \
       2   5
      / \   \
     3   4   6
```

The flattened tree should look like:

```
   1
    \
     2
      \
       3
        \
         4
          \
           5
            \
             6
```

### 分析

无

### 递归版 1

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
// Flatten Binary Tree to Linked List
// 递归版1，时间复杂度O(n)，空间复杂度O(logn)
public class Solution {
    public void flatten(TreeNode root) {
        if (root == null) return;  // 终止条件

        flatten(root.left);
        flatten(root.right);

        if (root.left == null) return;

        // 三方合并，将左子树所形成的链表插入到root和root->right之间
        TreeNode p = root.left;
        while(p.right != null) p = p.right; //寻找左链表最后一个节点
        p.right = root.right;
        root.right = root.left;
        root.left = null;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Flatten Binary Tree to Linked List
// 递归版1，时间复杂度O(n)，空间复杂度O(logn)
class Solution {
public:
    void flatten(TreeNode *root) {
        if (root == nullptr) return;  // 终止条件

        flatten(root->left);
        flatten(root->right);

        if (nullptr == root->left) return;

        // 三方合并，将左子树所形成的链表插入到root和root->right之间
        TreeNode *p = root->left;
        while(p->right) p = p->right; //寻找左链表最后一个节点
        p->right = root->right;
        root->right = root->left;
        root->left = nullptr;
    }
};
```

</TabItem>
</Tabs>

### 递归版 2

<Tabs
defaultValue="java"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// Flatten Binary Tree to Linked List
// 递归版2
// @author 王顺达(http://weibo.com/u/1234984145)
// 时间复杂度O(n)，空间复杂度O(logn)
public class Solution {
    public void flatten(TreeNode root) {
        flatten(root, null);
    }
    // 把root所代表树变成链表后，tail跟在该链表后面
    private static TreeNode flatten(TreeNode root, TreeNode tail) {
        if (root == null) return tail;

        root.right = flatten(root.left, flatten(root.right, tail));
        root.left = null;
        return root;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Flatten Binary Tree to Linked List
// 递归版2
// @author 王顺达(http://weibo.com/u/1234984145)
// 时间复杂度O(n)，空间复杂度O(logn)
class Solution {
public:
    void flatten(TreeNode *root) {
        flatten(root, NULL);
    }
private:
    // 把root所代表树变成链表后，tail跟在该链表后面
    TreeNode *flatten(TreeNode *root, TreeNode *tail) {
        if (NULL == root) return tail;

        root->right = flatten(root->left, flatten(root->right, tail));
        root->left = NULL;
        return root;
    }
};
```

</TabItem>
</Tabs>
