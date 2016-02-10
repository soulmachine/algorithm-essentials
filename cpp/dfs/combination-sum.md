## Combination Sum


### 描述

Given a set of candidate numbers (`C`) and a target number (`T`), find all unique combinations in `C` where the candidate numbers sums to `T`.

The same repeated number may be chosen from `C` **unlimited** number of times.

Note:

* All numbers (including target) will be positive integers.
* Elements in a combination ($$a_1, a_2, ..., a_k$$) must be in non-descending order. (ie, $$a_1 \leq a_2 \leq ... \leq a_k$$).
* The solution set must not contain duplicate combinations.


For example, given candidate set `2,3,6,7` and target `7`, 
A solution set is: 

```
[7] 
[2, 2, 3] 
```


### 分析

无


### 代码

{% if book.cpp %}
  {% codesnippet "./code/combination-sum.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}


### 相关题目

* [Combination Sum II](combination-sum-ii.md)
