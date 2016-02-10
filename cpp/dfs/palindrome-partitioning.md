## Palindrome Partitioning


### 描述

Given a string s, partition s such that every substring of the partition is a palindrome.

Return all possible palindrome partitioning of s.

For example, given `s = "aab"`,
Return

```
  [
    ["aa","b"],
    ["a","a","b"]
  ]
```

### 分析

在每一步都可以判断中间结果是否为合法结果，用回溯法。

一个长度为n的字符串，有`n-1`个地方可以砍断，每个地方可断可不断，因此复杂度为$$O(2^{n-1})$$


### 深搜1

{% if book.cpp %}
  {% codesnippet "./code/palindrome-partitioning-1.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}


### 深搜2

另一种写法，更加简洁。这种写法也在 Combination Sum, Combination Sum II 中出现过。

{% if book.cpp %}
  {% codesnippet "./code/palindrome-partitioning-2.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}


### 动规

{% if book.cpp %}
  {% codesnippet "./code/palindrome-partitioning-3.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}


### 相关题目

* [Palindrome Partitioning II](palindrome-partitioning-ii.md)
