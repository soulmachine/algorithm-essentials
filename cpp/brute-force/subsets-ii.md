## Subsets II


### 描述

Given a collection of integers that might contain duplicates, `S`, return all possible subsets.

Note:

Elements in a subset must be in non-descending order.
The solution set must not contain duplicate subsets.
For example,
If `S = [1,2,2]`, a solution is:

```
[
  [2],
  [1],
  [1,2,2],
  [2,2],
  [1,2],
  []
]
```


### 分析

这题有重复元素，但本质上，跟上一题很类似，上一题中元素没有重复，相当于每个元素只能选0或1次，这里扩充到了每个元素可以选0到若干次而已。


### 递归


#### 增量构造法

{% if book.cpp %}
  {% codesnippet "./code/subsets-ii-1.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}


{% if book.cpp %}
  {% codesnippet "./code/subsets-ii-2.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}


#### 位向量法

{% if book.cpp %}
  {% codesnippet "./code/subsets-ii-3.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}


### 迭代


#### 增量构造法

{% if book.cpp %}
  {% codesnippet "./code/subsets-ii-4.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}


#### 二进制法

{% if book.cpp %}
  {% codesnippet "./code/subsets-ii-5.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}


### 相关题目

* [Subsets](subsets.md)
