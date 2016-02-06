## 3Sum Closest


### 描述

Given an array `S` of `n` integers, find three integers in `S` such that the sum is closest to a given number, target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

For example, given array `S = {-1 2 1 -4}`, and `target = 1`.

The sum that is closest to the target is 2. (`-1 + 2 + 1 = 2`).


### 分析

先排序，然后左右夹逼，复杂度 $$O(n^2)$$。


### 代码

{% if book.cpp %}
  {% codesnippet "./code/3sum-closest.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}


### 相关题目


* [Two sum](two-sum.md)
* [3Sum](3sum.md)
* [4Sum](4sum.md)
