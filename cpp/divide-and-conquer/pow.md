## Pow(x,n)


### 描述

Implement `pow(x, n)`.


### 分析

二分法，$$x^n = x^{n/2} \times x^{n/2} \times x^{n\%2}$$


### 代码

{% if book.cpp %}
  {% codesnippet "./code/pow.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}

### 相关题目

* [Sqrt(x)](sqrt.md)
