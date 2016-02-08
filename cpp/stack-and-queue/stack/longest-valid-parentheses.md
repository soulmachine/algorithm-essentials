## Longest Valid Parentheses


### 描述

Given a string containing just the characters `'('` and `')'`, find the length of the longest valid (well-formed) parentheses substring.

For `"(()"`, the longest valid parentheses substring is `"()"`, which has length = 2.

Another example is `")()())"`, where the longest valid parentheses substring is `"()()"`, which has length = 4.


### 分析

无


### 使用栈

{% if book.cpp %}
  {% codesnippet "./code/longest-valid-parentheses-1.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}


### Dynamic Programming, One Pass

{% if book.cpp %}
  {% codesnippet "./code/longest-valid-parentheses-3.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}


### 两遍扫描

{% if book.cpp %}
  {% codesnippet "./code/longest-valid-parentheses-3.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}


### 相关题目

* [Valid Parentheses](valid-parentheses.md)
* [Generate Parentheses](generate-parentheses.md)
