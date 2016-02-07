## Valid Number


### 描述

Validate if a given string is numeric.

Some examples:
\begin{Code}
```
"0" => true
" 0.1 " => true
"abc" => false
"1 a" => false
"2e10" => true
```

Note: It is intended for the problem statement to be ambiguous. You should gather all requirements up front before implementing one.


### 分析

细节实现题。

本题的功能与标准库中的`strtod()`功能类似。


### 有限自动机

{% if book.cpp %}
  {% codesnippet "./code/valid-number-1.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}


### 使用strtod()

{% if book.cpp %}
  {% codesnippet "./code/valid-number-2.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}
