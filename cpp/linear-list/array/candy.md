## Candy


### 描述

There are `N` children standing in a line. Each child is assigned a rating value.

You are giving candies to these children subjected to the following requirements:

* Each child must have at least one candy.
* Children with a higher rating get more candies than their neighbors.

What is the minimum candies you must give?


### 分析

无


### 迭代版

{% if book.cpp %}
  {% codesnippet "./code/candy-1.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}



### 递归版

{% if book.cpp %}
  {% codesnippet "./code/candy-2.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}
```
