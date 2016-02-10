## Decode Ways


### 描述

A message containing letters from `A-Z` is being encoded to numbers using the following mapping:

```
'A' -> 1
'B' -> 2
...
'Z' -> 26
```

Given an encoded message containing digits, determine the total number of ways to decode it.

For example,
Given encoded message `"12"`, it could be decoded as `"AB"` (1 2) or `"L"` (12).

The number of ways decoding `"12"` is 2.


### 分析

跟第???节[Climbing Stairs](../linear-list/array/climbing-stairs.md)很类似，不过多加一些判断逻辑。


### 代码

{% if book.cpp %}
  {% codesnippet "./code/decode-ways.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}


### 相关题目

* [Climbing Stairs](climbing-stairs.md)
