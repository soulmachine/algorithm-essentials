## Search Insert Position



### 描述

Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

Here are few examples.

```
[1,3,5,6], 5 → 2
[1,3,5,6], 2 → 1
[1,3,5,6], 7 → 4
[1,3,5,6], 0 → 0
```


### 分析

即`std::lower_bound()`。


### 代码

{% if book.cpp %}
  {% codesnippet "./code/search-insert-position.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}


### 相关题目

* [Search for a Range](search-for-a-range.md)
