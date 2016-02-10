## Word Break II


### 描述

Given a string s and a dictionary of words dict, add spaces in s to construct a sentence where each word is a valid dictionary word.

Return all such possible sentences.

For example, given 

s = `"catsanddog"`,

dict = `["cat", "cats", "and", "sand", "dog"]`.

A solution is `["cats and dog", "cat sand dog"]`.


### 分析

在上一题的基础上，要返回解本身。


### 代码

{% if book.cpp %}
  {% codesnippet "./code/word-break-ii.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}


### 相关题目

* [Word Break](word-break.md)
