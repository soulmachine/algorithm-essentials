## Binary Tree Preorder Traversal


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

用栈或者Morris遍历。


### 栈

{% if book.cpp %}
  {% codesnippet "./code/binary-tree-preorder-traversal-1.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}


### Morris先序遍历

{% if book.cpp %}
  {% codesnippet "./code/binary-tree-preorder-traversal-2.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}


### 相关题目

* [Binary Tree Inorder Traversal](binary-tree-inorder-traversal.md)
* [Binary Tree Postorder Traversal](binary-tree-postorder-traversal.md)
* [Recover Binary Search Tree](recover-binary-search-tree.md)
