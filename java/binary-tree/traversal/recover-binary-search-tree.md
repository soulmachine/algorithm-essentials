## Recover Binary Search Tree


### 描述

Two elements of a binary search tree (BST) are swapped by mistake.

Recover the tree without changing its structure.

Note: A solution using `O(n)` space is pretty straight forward. Could you devise a constant space solution?


### 分析

`O(n)`空间的解法是，开一个指针数组，中序遍历，将节点指针依次存放到数组里，然后寻找两处逆向的位置，先从前往后找第一个逆序的位置，然后从后往前找第二个逆序的位置，交换这两个指针的值。

中序遍历一般需要用到栈，空间也是`O(n)`的，如何才能不使用栈？Morris中序遍历。


### 代码

{% codesnippet "./code/recover-binary-search-tree."+book.suffix, language=book.suffix %}{% endcodesnippet %}


### 相关题目


* [Binary Tree Inorder Traversal](binary-tree-inorder-traversal.md)
