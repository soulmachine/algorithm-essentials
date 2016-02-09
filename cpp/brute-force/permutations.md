## Permutations



### 描述

Given a collection of numbers, return all possible permutations.

For example,
`[1,2,3]` have the following permutations:
`[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2]`, and `[3,2,1]`.


### next_permutation()

偷懒的做法，可以直接使用`std::next_permutation()`。如果是在OJ网站上，可以用这个API偷个懒；如果是在面试中，面试官肯定会让你重新实现。

#### 代码

{% if book.cpp %}
  {% codesnippet "./code/permutations-1.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}


### 重新实现next_permutation()

#### 代码

函数 `next_permutation()`的具体实现见这节 [Next Permutation](../linear-list/array/next-permutation.md)。

{% if book.cpp %}
  {% codesnippet "./code/permutations-2.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}


### 递归

本题是求路径本身，求所有解，函数参数需要标记当前走到了哪步，还需要中间结果的引用，最终结果的引用。

扩展节点，每次从左到右，选一个没有出现过的元素。

本题不需要判重，因为状态装换图是一颗有层次的树。收敛条件是当前走到了最后一个元素。


#### 代码

{% if book.cpp %}
  {% codesnippet "./code/permutations-3.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}


### 相关题目

* [Next Permutation](next-permutation.md)
* [Permutation Sequence](permutation-sequence.md)
* [Permutations II](permutations-ii.md)
* [Combinations](combinations.md)
