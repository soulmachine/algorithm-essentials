## N-Queens II


### 描述

Follow up for N-Queens problem.

Now, instead outputting board configurations, return the total number of distinct solutions.


### 分析

只需要输出解的个数，不需要输出所有解，代码要比上一题简化很多。设一个全局计数器，每找到一个解就增1。


### 代码1

{% if book.cpp %}
  {% codesnippet "./code/n-queens-ii-1.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}


### 代码2

{% if book.cpp %}
  {% codesnippet "./code/n-queens-ii-2.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}


### 相关题目

* [N-Queens](n-queens.md)
