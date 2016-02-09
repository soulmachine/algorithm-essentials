## Permutations II


### 描述

Given a collection of numbers that might contain duplicates, return all possible unique permutations.

For example,
`[1,1,2]` have the following unique permutations:
`[1,1,2], [1,2,1]`, and `[2,1,1]`.


### next_permutation()

直接使用`std::next_permutation()`，代码与上一题相同。


### 重新实现next_permutation()

重新实现`std::next_permutation()`，代码与上一题相同。


### 递归

递归函数`permute()`的参数`p`，是中间结果，它的长度又能标记当前走到了哪一步，用于判断收敛条件。

扩展节点，每次从小到大，选一个没有被用光的元素，直到所有元素被用光。

本题不需要判重，因为状态装换图是一颗有层次的树。

{% if book.cpp %}
  {% codesnippet "./code/permutations-ii.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}


### 相关题目

* [Next Permutation](next-permutation.md)
* [Permutation Sequence](permutation-sequence.md)
* [Permutations](permutations.md)
* [Combinations](combinations.md)
