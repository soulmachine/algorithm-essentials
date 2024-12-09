---
title: Binary Tree Zigzag Level Order Traversal
---

### 描述

Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

For example:

Given binary tree `{3,9,20,#,#,15,7}`,

```
    3
   / \
  9  20
    /  \
   15   7
```

return its zigzag level order traversal as:

```
[
  [3],
  [20,9],
  [15,7]
]
```

### 分析

广度优先遍历，用一个 bool 记录是从左到右还是从右到左，每一层结束就翻转一下。

### 代码

#### 迭代版

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
// Binary Tree Zigzag Level Order Traversal
// 广度优先遍历，用一个bool记录是从左到右还是从右到左，每一层结束就翻转一下。
// 迭代版，时间复杂度O(n)，空间复杂度O(n)
public class Solution {
    public List<List<Integer>> zigzagLevelOrder(TreeNode root) {
        List<List<Integer>> result = new ArrayList<>();
        Queue<TreeNode> current = new LinkedList<>();
        Queue<TreeNode> next = new LinkedList<>();
        boolean left_to_right = true;

        if(root == null) {
            return result;
        } else {
            current.offer(root);
        }

        while (!current.isEmpty()) {
            ArrayList<Integer> level = new ArrayList<>(); // elments in one level
            while (!current.isEmpty()) {
                TreeNode node = current.poll();
                level.add(node.val);
                if (node.left != null) next.offer(node.left);
                if (node.right != null) next.offer(node.right);
            }
            if (!left_to_right) Collections.reverse(level);
            result.add(level);
            left_to_right = !left_to_right;
            // swap
            Queue<TreeNode> tmp = current;
            current = next;
            next = tmp;
        }
        return result;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Binary Tree Zigzag Level Order Traversal
// 广度优先遍历，用一个bool记录是从左到右还是从右到左，每一层结束就翻转一下。
// 迭代版，时间复杂度O(n)，空间复杂度O(n)
class Solution {
public:
    vector<vector<int> > zigzagLevelOrder(TreeNode *root) {
        vector<vector<int> > result;
        queue<TreeNode*> current, next;
        bool left_to_right = true;

        if(root == nullptr) {
            return result;
        } else {
            current.push(root);
        }

        while (!current.empty()) {
            vector<int> level; // elments in one level
            while (!current.empty()) {
                TreeNode* node = current.front();
                current.pop();
                level.push_back(node->val);
                if (node->left != nullptr) next.push(node->left);
                if (node->right != nullptr) next.push(node->right);
            }
            if (!left_to_right) reverse(level.begin(), level.end());
            result.push_back(level);
            left_to_right = !left_to_right;
            swap(next, current);
        }
        return result;
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Binary Tree Zigzag Level Order Traversal
# 广度优先遍历，用一个bool记录是从左到右还是从右到左，每一层结束就翻转一下。
# 迭代版，时间复杂度O(n)，空间复杂度O(n)
from collections import deque

def zigzagLevelOrder(root):
    result = []
    current = deque()
    next = deque()
    left_to_right = True

    if not root:
        return result
    else:
        current.append(root)

    while current:
        level = []  # elements in one level
        while current:
            node = current.popleft()
            level.append(node.val)
            if node.left:
                next.append(node.left)
            if node.right:
                next.append(node.right)
        if not left_to_right:
            level.reverse()
        result.append(level)
        left_to_right = not left_to_right
        # swap
        current, next = next, current

    return result
```

</TabItem>
</Tabs>

#### 递归版

<Tabs
defaultValue="java"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// Binary Tree Zigzag Level Order Traversal
// 递归版，时间复杂度O(n)，空间复杂度O(n)
public class Solution {
    public List<List<Integer>> zigzagLevelOrder(TreeNode root) {
        List<List<Integer>> result = new ArrayList<>();
        traverse(root, 1, result, true);
        return result;
    }

    private static void traverse(TreeNode root, int level, List<List<Integer>> result,
                                 boolean left_to_right) {
        if (root == null) return;

        if (level > result.size())
            result.add(new ArrayList<>());

        if (left_to_right)
            result.get(level-1).add(root.val);
        else
            result.get(level-1).add(0, root.val);

        traverse(root.left, level+1, result, !left_to_right);
        traverse(root.right, level+1, result, !left_to_right);
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Binary Tree Zigzag Level Order Traversal
// 递归版，时间复杂度O(n)，空间复杂度O(n)
class Solution {
public:
    vector<vector<int> > zigzagLevelOrder(TreeNode *root) {
        vector<vector<int>> result;
        traverse(root, 1, result, true);
        return result;
    }

    void traverse(TreeNode *root, size_t level, vector<vector<int>> &result,
            bool left_to_right) {
        if (!root) return;

        if (level > result.size())
            result.push_back(vector<int>());

        if (left_to_right)
            result[level-1].push_back(root->val);
        else
            result[level-1].insert(result[level-1].begin(), root->val);

        traverse(root->left, level+1, result, !left_to_right);
        traverse(root->right, level+1, result, !left_to_right);
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Binary Tree Zigzag Level Order Traversal
# 递归版，时间复杂度O(n)，空间复杂度O(n)
class Solution:
    def zigzagLevelOrder(self, root):
        result = []
        self.traverse(root, 1, result, True)
        return result

    def traverse(self, root, level, result, left_to_right):
        if not root:
            return

        if level > len(result):
            result.append([])

        if left_to_right:
            result[level-1].append(root.val)
        else:
            result[level-1].insert(0, root.val)

        self.traverse(root.left, level+1, result, not left_to_right)
        self.traverse(root.right, level+1, result, not left_to_right)
```

</TabItem>
</Tabs>

### 相关题目

- [Binary Tree Level Order Traversal](binary-tree-level-order-traversal.md)
- [Binary Tree Level Order Traversal II](binary-tree-level-order-traversal-ii.md)
