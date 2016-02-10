## Binary Tree Postorder Traversal


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

用栈或者Morris遍历。


### 栈

{% codesnippet "./code/binary-tree-postorder-traversal-1."+book.suffix, language=book.suffix %}{% endcodesnippet %}


### Morris后序遍历

{% codesnippet "./code/binary-tree-postorder-traversal-2."+book.suffix, language=book.suffix %}{% endcodesnippet %}


### 相关题目


* [Binary Tree Preorder Traversal](binary-tree-preorder-traversal.md)
* [Binary Tree Inorder Traversal](binary-tree-inorder-traversal.md)
* [Recover Binary Search Tree](recover-binary-search-tree.md)
