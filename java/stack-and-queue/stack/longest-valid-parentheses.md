## Longest Valid Parentheses


### 描述

Given a string containing just the characters `'('` and `')'`, find the length of the longest valid (well-formed) parentheses substring.

For `"(()"`, the longest valid parentheses substring is `"()"`, which has length = 2.

Another example is `")()())"`, where the longest valid parentheses substring is `"()()"`, which has length = 4.


### 分析

无


### 使用栈

{% codesnippet "./code/longest-valid-parentheses-1."+book.suffix, language=book.suffix %}{% endcodesnippet %}


### Dynamic Programming, One Pass

{% codesnippet "./code/longest-valid-parentheses-3."+book.suffix, language=book.suffix %}{% endcodesnippet %}


### 两遍扫描

{% codesnippet "./code/longest-valid-parentheses-3."+book.suffix, language=book.suffix %}{% endcodesnippet %}


### 相关题目

* [Valid Parentheses](valid-parentheses.md)
* [Generate Parentheses](generate-parentheses.md)
