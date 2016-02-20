## Multiply Strings


### 描述

Given two numbers represented as strings, return multiplication of the numbers as a string.

Note: The numbers can be arbitrarily large and are non-negative.


### 分析

高精度乘法。

常见的做法是将字符转化为一个int，一一对应，形成一个int数组。但是这样很浪费空间，一个int32的最大值是`2^{31}-1=2147483647`，可以与9个字符对应，由于有乘法，减半，则至少可以与4个字符一一对应。一个int64可以与9个字符对应。


### 代码1

{% codesnippet "./code/multiply-strings-1."+book.suffix, language=book.suffix %}{% endcodesnippet %}


### 代码2

{% codesnippet "./code/multiply-strings-2."+book.suffix, language=book.suffix %}{% endcodesnippet %}
