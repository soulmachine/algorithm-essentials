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

用一个哈希表存储所有出现过的元素，对每个元素，以该元素为中心，往左右扩张，直到不连续为止，记录下最长的长度。


### 代码

{% codesnippet "./code/longest-consecutive-sequence."+book.suffix, language=book.suffix %}{% endcodesnippet %}
