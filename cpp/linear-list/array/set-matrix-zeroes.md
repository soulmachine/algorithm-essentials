## Set Matrix Zeroes


### 描述

Given a `m × n` matrix, if an element is 0, set its entire row and column to 0. Do it in place.

**Follow up**: Did you use extra space?

A straight forward solution using `O(mn)` space is probably a bad idea.

A simple improvement uses `O(m + n)` space, but still not the best solution.

Could you devise a constant space solution?


### 分析

`O(m+n)`空间的方法很简单，设置两个bool数组，记录每行和每列是否存在0。

想要常数空间，可以复用第一行和第一列。


### 代码1

{% if book.cpp %}
  {% codesnippet "./code/set-matrix-zeroes-1.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}


### 代码2


{% if book.cpp %}
  {% codesnippet "./code/set-matrix-zeroes-2.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}
