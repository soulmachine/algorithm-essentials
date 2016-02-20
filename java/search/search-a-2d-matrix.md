## Search a 2D Matrix


### 描述

Write an efficient algorithm that searches for a value in an `m × n` matrix. This matrix has the following properties:

* Integers in each row are sorted from left to right.
* The first integer of each row is greater than the last integer of the previous row.

For example, Consider the following matrix:

```
[
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
```

Given `target = 3`, return true.


### 分析

二分查找。


### 代码

{% codesnippet "./code/search-a-2d-matrix."+book.suffix, language=book.suffix %}{% endcodesnippet %}
