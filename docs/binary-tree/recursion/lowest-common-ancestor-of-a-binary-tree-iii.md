---
title: Lowest Common Ancestor of a Binary Tree III
---

### 描述

TODO

### 分析

TODO

### 代码

```java
class Solution {
    public Node lowestCommonAncestor(Node p, Node q) {
        Node a = p, b = q;
        while (a != b) {
            a = a == null? q : a.parent;
            b = b == null? p : b.parent;    
        }
        return a;
    }
}
```

### 相关题目

- [Lowest Common Ancestor of a Binary Tree](lowest-common-ancestor-of-a-binary-tree.md)
- [Lowest Common Ancestor of a Binary Tree II](lowest-common-ancestor-of-a-binary-tree-ii.md)
- [LCA of BST](../bst/lca-of-bst.md)
