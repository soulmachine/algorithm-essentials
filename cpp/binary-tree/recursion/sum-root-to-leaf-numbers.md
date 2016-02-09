## Sum Root to Leaf Numbers


### 描述

Given a binary tree containing digits from `0-9` only, each root-to-leaf path could represent a number.

An example is the root-to-leaf path `1->2->3` which represents the number `123`.

Find the total sum of all root-to-leaf numbers.

For example,
```cpp
    1
   / \
  2   3
```

The root-to-leaf path `1->2` represents the number `12`.
The root-to-leaf path `1->3` represents the number `13`.

Return the sum = `12 + 13 = 25`.


### 分析

无


### 代码

{% if book.cpp %}
  {% codesnippet "./code/sum-root-to-leaf-numbers.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}
