---
title: Serialize and Deserialize Binary Tree
---

### 描述

Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

Clarification: The input/output format is the same as [how LeetCode serializes a binary tree](https://leetcode.com/faq/#binary-tree). You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.

**Example 1**:

```text
  1
 / \
2   3
   / \
  4   5
```

> **Input**: root = [1,2,3,null,null,4,5]  
> **Output**: [1,2,3,null,null,4,5]

**Example 2**:

> **Input**: root = []  
> **Output**: []

**Example 3**:

> **Input**: root = [1]  
> **Output**: [1]

**Example 4**:

> **Input**: root = [1,2]  
> **Output**: [1,2]

**Constraints**:

- The number of nodes in the tree is in the range [0, $10^4$].
- $-1000 \leq Node.val \leq 1000$

### 分析

这题本质上考的是二叉树的遍历，前序，中序，后序，BFS，无论哪种都可以。

注意，空叶子节点也必须编码为"null"，这样才能保存完整的树结构。

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
<TabItem value="python">

```python
# Serialize and Deserialize Binary Tree
# Time Complexity O(n), Space Complexity O(n)
class Codec:

    def serialize(self, root):
        return self.serializeDFS(root, "")

    def serializeDFS(self, root, string: str):
        if root is None:
            string += "null,"
        else:
            string += str(root.val) + ","
            string = self.serializeDFS(root.left, string)
            string = self.serializeDFS(root.right, string)
        return string

    def deserialize(self, data):
        return self.deserializeDFS(data.split(','))

    def deserializeDFS(self, l):
        if l[0] == 'null':
            l.pop(0)
            return None

        root = TreeNode(l[0])
        l.pop(0)
        root.left = self.deserializeDFS(l)
        root.right = self.deserializeDFS(l)
        return root
```

</TabItem>
<TabItem value="java">

```java
// Serialize and Deserialize Binary Tree
// Time Complexity O(n), Space Complexity O(n)
public class Codec {

    public String serialize(TreeNode root) {
        return serializeDFS(root, "");
    }

    // preorder
    private static String serializeDFS(TreeNode root, String str) {
        if (root == null) {
            str += "null," ;
        } else {
            str += String.valueOf(root.val) + ",";
            str = serializeDFS(root.left, str);
            str = serializeDFS(root.right, str);
        }
        return str;
    }

    public TreeNode deserialize(String data) {
        String[] arr = data.split(",");
        LinkedList<String> l = new LinkedList<>(Arrays.asList(arr));
        return deserializeDFS(l);
    }

    private static TreeNode deserializeDFS(LinkedList<String> l) {
        if (l.peekFirst().equals("null")) {
            l.pollFirst();
            return null;
        }
        TreeNode root = new TreeNode(Integer.valueOf(l.pollFirst()));
        root.left = deserializeDFS(l);
        root.right = deserializeDFS(l);
        return root;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Serialize and Deserialize Binary Tree
// Time Complexity O(n), Space Complexity O(n)
class Codec {
public:

    // Encodes a tree to a single string.
    string serialize(TreeNode* root) {
        return serializeDFS(root, "");
    }

    // preorder
    string serializeDFS(TreeNode* root, string str) {
        if (root == nullptr) {
            str += "null,";
        } else {
            str += std::to_string(root->val) + ",";
            str = serializeDFS(root->left, str);
            str = serializeDFS(root->right, str);
        }
        return str;
    }
    // Decodes your encoded data to tree.
    TreeNode* deserialize(string data) {
        stringstream ss(data);
        list<string> l;

        string tmp;
        while (getline(ss, tmp, ',')) {
            l.push_back(tmp);
        }

        return deserializeDFS(l);
    }

    TreeNode* deserializeDFS(list<string> &l) {
        if (l.front() == "null") {
            l.pop_front();
            return nullptr;
        }
        TreeNode* root = new TreeNode(std::stoi(l.front()));
        l.pop_front();
        root->left = deserializeDFS(l);
        root->right = deserializeDFS(l);
        return root;
    }
};
```

</TabItem>
</Tabs>

### 相关题目

- [Path Sum II](path-sum-ii.md)
