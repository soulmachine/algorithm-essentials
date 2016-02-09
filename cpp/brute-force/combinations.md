## Combinations


### 描述

Given two integers `n` and `k`, return all possible combinations of `k` numbers out of `1 ... n`.

For example,
If `n = 4` and `k = 2`, a solution is:

```
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
```


### 递归

{% if book.cpp %}
  {% codesnippet "./code/combinations-1.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}


### 迭代

{% if book.cpp %}
  {% codesnippet "./code/combinations-2.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}


### 相关题目

* [Next Permutation](next-permutation.md)
* [Permutation Sequence](permutation-sequence.md)
* [Permutations](permutations.md)
* [Permutations II](permutations-ii.md)
