## Single Number


### 描述

Given an array of integers, every element appears twice except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?


### 分析

异或，不仅能处理两次的情况，只要出现偶数次，都可以清零。


### 代码


{% codesnippet "./code/single-number."+book.suffix, language=book.suffix %}{% endcodesnippet %}


### 相关题目

*  [Single Number II](single-number-ii.md)
