## First Missing Positive


### 描述

Given an unsorted integer array, find the first missing positive integer.

For example,
Given `[1,2,0]` return `3`,
and `[3,4,-1,1]` return `2`.

Your algorithm should run in `O(n)` time and uses constant space.


### 分析

本质上是桶排序(bucket sort)，每当 `A[i]!= i+1` 的时候，将`A[i]`与`A[A[i]-1]`交换，直到无法交换为止，终止条件是 `A[i]== A[A[i]-1]`。


### 代码

{% codesnippet "./code/first-missing-positive."+book.suffix, language=book.suffix %}{% endcodesnippet %}


### 相关题目

* [Sort Colors](sort-colors.md)
