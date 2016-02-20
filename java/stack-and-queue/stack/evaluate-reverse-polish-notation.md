## Evaluate Reverse Polish Notation


### 描述

Evaluate the value of an arithmetic expression in Reverse Polish Notation.

Valid operators are `+, -, *, /`. Each operand may be an integer or another expression.

Some examples:

```
  ["2", "1", "+", "3", "*"] -> ((2 + 1) * 3) -> 9
  ["4", "13", "5", "/", "+"] -> (4 + (13 / 5)) -> 6
```


### 分析

逆波兰表达式是典型的递归结构，所以可以用递归来求解，也可以用栈来求解。


### 递归版

{% if book.java %}
递归的写法，C++版可以AC，但Java版会爆栈`StackOverflowError`，所以Java 只能用栈来解决。
{% endif %}

{% codesnippet "./code/evaluate-reverse-polish-notation-1."+book.suffix, language=book.suffix %}{% endcodesnippet %}


### 迭代版

{% codesnippet "./code/evaluate-reverse-polish-notation-2."+book.suffix, language=book.suffix %}{% endcodesnippet %}
