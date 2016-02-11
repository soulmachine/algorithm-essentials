## Divide Two Integers


### 描述

Divide two integers without using multiplication, division and mod operator.


### 分析

不能用乘、除和取模，那剩下的，还有加、减和位运算。

最简单的方法，是不断减去被除数。在这个基础上，可以做一点优化，每次把被除数翻倍，从而加速。


### 代码1

{% codesnippet "./code/divide-two-integers-1."+book.suffix, language=book.suffix %}{% endcodesnippet %}


### 代码2

{% codesnippet "./code/divide-two-integers-2."+book.suffix, language=book.suffix %}{% endcodesnippet %}
