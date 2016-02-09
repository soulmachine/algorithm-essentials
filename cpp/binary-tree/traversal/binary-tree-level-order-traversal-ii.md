## Binary Tree Level Order Traversal II


### 描述

Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

For example:
Given binary tree `{3,9,20,#,#,15,7}`,

```
    3
   / \
  9  20
    /  \
   15   7
```

return its bottom-up level order traversal as:

```
[
  [15,7]
  [9,20],
  [3],
]
```


### 分析

在上一题 [Binary Tree Level Order Traversal](binary-tree-tevel-order-traversal.md) 的基础上，`reverse()`一下即可。


### 递归版

{% if book.cpp %}
  {% codesnippet "./code/binary-tree-level-order-traversal-ii-1.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}


### 迭代版

{% if book.cpp %}
  {% codesnippet "./code/binary-tree-level-order-traversal-ii-2.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}


### 相关题目


* [Binary Tree Level Order Traversal](binary-tree-tevel-order-traversal.md)
* [Binary Tree Zigzag Level Order Traversal](binary-tree-zigzag-level-order-traversal.md)
