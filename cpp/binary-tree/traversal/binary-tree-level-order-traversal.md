## Binary Tree Level Order Traversal


### 描述

Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree `{3,9,20,#,#,15,7}`,

```
    3
   / \
  9  20
    /  \
   15   7
```

return its level order traversal as:

```
[
  [3],
  [9,20],
  [15,7]
]
```


### 分析

无


### 递归版

{% codesnippet "./code/binary-tree-level-order-traversal-1."+book.suffix, language=book.suffix %}{% endcodesnippet %}


### 迭代版

{% codesnippet "./code/binary-tree-level-order-traversal-2."+book.suffix, language=book.suffix %}{% endcodesnippet %}


### 相关题目


* [Binary Tree Level Order Traversal II](binary-tree-tevel-order-traversal-ii.md)
* [Binary Tree Zigzag Level Order Traversal](binary-tree-zigzag-level-order-traversal.md)
