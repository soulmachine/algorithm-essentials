## Sort List


### 描述

Sort a linked list in `O(n log n)` time using constant space complexity.


### 分析

常数空间且`O(nlogn)`，单链表适合用归并排序，双向链表适合用快速排序。本题可以复用 [Merge Two Sorted Lists](merge-two-sorted-lists.md) 的代码。


### 代码

{% codesnippet "./code/sort-list."+book.suffix, language=book.suffix %}{% endcodesnippet %}


### 相关题目

* [Insertion Sort List](Insertion-Sort-List.md)
