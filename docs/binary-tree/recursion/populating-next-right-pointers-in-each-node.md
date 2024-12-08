---
title: Populating Next Right Pointers in Each Node
---

### 描述

Given a binary tree

```cpp
struct TreeLinkNode {
   int val;
   TreeLinkNode *left, *right, *next;
   TreeLinkNode(int x) : val(x), left(NULL), right(NULL), next(NULL) {}
};
```

Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to `NULL`.

Initially, all next pointers are set to `NULL`.

Note:

- You may only use constant extra space.
- You may assume that it is a perfect binary tree (ie, all leaves are at the same level, and every parent has two children).

For example,

```
         1
       /  \
      2    3
     / \  / \
    4  5  6  7
```

After calling your function, the tree should look like:

```
         1 -> NULL
       /  \
      2 -> 3 -> NULL
     / \  / \
    4->5->6->7 -> NULL
```

### 分析

无

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
// Populating Next Right Pointers in Each Node
// 时间复杂度O(n)，空间复杂度O(logn)
public class Solution {
    public void connect(TreeLinkNode root) {
        connect(root, null);
    }
    private static void connect(TreeLinkNode root, TreeLinkNode sibling) {
        if (root == null) return;
        else root.next = sibling;

        connect(root.left, root.right);
        if (sibling != null) connect(root.right, sibling.left);
        else connect(root.right, null);
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Populating Next Right Pointers in Each Node
// 时间复杂度O(n)，空间复杂度O(logn)
class Solution {
public:
    void connect(TreeLinkNode *root) {
        connect(root, NULL);
    }
private:
    void connect(TreeLinkNode *root, TreeLinkNode *sibling) {
        if (root == nullptr)
            return;
        else
            root->next = sibling;

        connect(root->left, root->right);
        if (sibling)
            connect(root->right, sibling->left);
        else
            connect(root->right, nullptr);
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Populating Next Right Pointers in Each Node
# Time Complexity O(n), Space Complexity O(logn)
class Solution:
    def connect(self, root):
        self._connect(root, None)

    def _connect(self, root, sibling):
        if not root:
            return
        else:
            root.next = sibling

        self._connect(root.left, root.right)
        if sibling:
            self._connect(root.right, sibling.left)
        else:
            self._connect(root.right, None)
```

</TabItem>
</Tabs>

### 相关题目

- [Populating Next Right Pointers in Each Node II](../traversal/populating-next-right-pointers-in-each-node-ii.md)
