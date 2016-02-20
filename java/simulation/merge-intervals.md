## Merge Intervals


### 描述

Given a collection of intervals, merge all overlapping intervals.

For example,
Given `[1,3],[2,6],[8,10],[15,18]`,
return `[1,6],[8,10],[15,18]`


### 分析

复用一下Insert Intervals的解法即可，创建一个新的interval集合，然后每次从旧的里面取一个interval出来，然后插入到新的集合中。


### 代码

{% codesnippet "./code/merge-intervals."+book.suffix, language=book.suffix %}{% endcodesnippet %}


### 相关题目

* [Insert Interval](insert-interval.md)
