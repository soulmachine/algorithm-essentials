## Swap Nodes in Pairs


### 描述

Given a linked list, swap every two adjacent nodes and return its head.

For example,
Given `1->2->3->4`, you should return the list as `2->1->4->3`.

Your algorithm should use only constant space. You may **not** modify the values in the list, only nodes itself can be changed.


### 分析

无


### 代码

{% if book.cpp %}
  {% codesnippet "./code/swap-nodes-in-pairs-1.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}

下面这种写法更简洁，但题目规定了不准这样做。

{% if book.cpp %}
  {% codesnippet "./code/swap-nodes-in-pairs-2.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}


### 相关题目

* [Reverse Nodes in k-Group](reverse-nodes-in-k-group.md)
