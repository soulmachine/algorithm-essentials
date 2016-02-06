## Longest Consecutive Sequence


### 描述

Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

For example,
Given `[100, 4, 200, 1, 3, 2]`,
The longest consecutive elements sequence is `[1, 2, 3, 4]`. Return its length: 4.

Your algorithm should run in `O(n)` complexity.


### 分析

如果允许$$O(n \log n)$$的复杂度，那么可以先排序，可是本题要求`O(n)`。

由于序列里的元素是无序的，又要求`O(n)`，首先要想到用哈希表。

用一个哈希表 `unordered_map<int, bool> used`记录每个元素是否使用，对每个元素，以该元素为中心，往左右扩张，直到不连续为止，记录下最长的长度。


### 代码

{% if book.cpp %}
  {% codesnippet "./code/longest-consecutive-sequence-1.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}


### 分析2

第一直觉是个聚类的操作,应该有union,find的操作.连续序列可以用两端和长度来表示.
本来用两端就可以表示,但考虑到查询的需求,将两端分别暴露出来.用`unordered_map<int, int> map`来
存储.原始思路来自于\url{http://discuss.leetcode.com/questions/1070/longest-consecutive-sequence}

### 代码

{% if book.cpp %}
  {% codesnippet "./code/longest-consecutive-sequence-1.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}
