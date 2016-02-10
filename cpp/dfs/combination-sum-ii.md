## Combination Sum II


### 描述

Given a collection of candidate numbers (`C`) and a target number (`T`), find all unique combinations in `C` where the candidate numbers sums to `T`.

Each number in `C` may only be used **once** in the combination.

Note:

* All numbers (including target) will be positive integers.
* Elements in a combination ($$a_1, a_2, ..., a_k$$) must be in non-descending order. (ie, $$a_1 > a_2 > ... > a_k$$).
* The solution set must not contain duplicate combinations.

For example, given candidate set `10,1,2,7,6,1,5` and target `8`, 
A solution set is: 

```
[1, 7] 
[1, 2, 5] 
[2, 6] 
[1, 1, 6]
```


### 分析

无


### 代码

{% if book.cpp %}
  {% codesnippet "./code/combination-sum-ii.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}


### 相关题目

* [Combination Sum](combination-sum.md)
