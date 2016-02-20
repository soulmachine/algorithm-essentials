## 3Sum


### 描述

Given an array `S` of `n` integers, are there elements `a, b, c` in `S` such that `a + b + c = 0`? Find all unique triplets in the array which gives the sum of zero.

Note:

* Elements in a triplet `(a,b,c)` must be in non-descending order. (ie, $$a \leq b \leq c$$)
* The solution set must not contain duplicate triplets.


For example, given array `S = {-1 0 1 2 -1 -4}`.

A solution set is:

```
(-1, 0, 1)
(-1, -1, 2)
```


### 分析

先排序，然后左右夹逼，复杂度 $$O(n^2)$$。

这个方法可以推广到`k-sum`，先排序，然后做`k-2`次循环，在最内层循环左右夹逼，时间复杂度是 $$O(\max\{n \log n, n^{k-1}\})$$。


### 代码

{% codesnippet "./code/3sum."+book.suffix, language=book.suffix %}{% endcodesnippet %}


### 相关题目


* [Two sum](two-sum.md)
* [3Sum Closest](3sum-closest.md)
* [4Sum](4sum.md)
