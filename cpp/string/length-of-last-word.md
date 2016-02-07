## Length of Last Word


### 描述

Given a string s consists of upper/lower-case alphabets and empty space characters `' '`, return the length of last word in the string.

If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only.

For example, 
Given `s = "Hello World"`,
return 5.


### 分析

细节实现题。


### 用 STL

{% if book.cpp %}
  {% codesnippet "./code/length-of-last-word-1.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}


### 顺序扫描

{% if book.cpp %}
  {% codesnippet "./code/length-of-last-word-2.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}
