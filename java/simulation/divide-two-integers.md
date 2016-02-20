## Divide Two Integers


### 描述

Divide two integers without using multiplication, division and mod operator.


### 分析

不能用乘、除和取模，那剩下的，还有加、减和位运算。

最简单的方法，是不断减去被除数。在这个基础上，可以做一点优化，每次把被除数翻倍，从而加速。

注意，写代码的时候，禁止使用 long.


### 代码

{% codesnippet "./code/divide-two-integers."+book.suffix, language=book.suffix %}{% endcodesnippet %}
