## Word Break


### 描述

Given a string s and a dictionary of words dict, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

For example, given

s = `"leetcode"`,

dict = `["leet", "code"]`.

Return true because `"leetcode"` can be segmented as `"leet code"`.


### 分析

设状态为`f(i)`，表示`s[0,i]`是否可以分词，则状态转移方程为

$$
f(i) = any\_of(f(j) \&\& s[j+1,i] \in dict),  0 \leq j < i
$$


### 深搜

{% if book.cpp %}
  {% codesnippet "./code/word-break-1.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}


### 动规

{% if book.cpp %}
  {% codesnippet "./code/word-break-2.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}


### 相关题目

* [Word Break II](word-break-ii.md)
