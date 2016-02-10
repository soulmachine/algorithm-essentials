## Word Ladder


### 描述

Given two words (start and end), and a dictionary, find the length of shortest transformation sequence from start to end, such that:

* Only one letter can be changed at a time
* Each intermediate word must exist in the dictionary

For example, Given:

```
start = "hit"
end = "cog"
dict = ["hot","dot","dog","lot","log"]
```

As one shortest transformation is `"hit" -> "hot" -> "dot" -> "dog" -> "cog"`, return its length `5`.

Note:

* Return 0 if there is no such transformation sequence.
* All words have the same length.
* All words contain only lowercase alphabetic characters.


### 分析

求最短路径，用广搜。


### 单队列

{% codesnippet "./code/word-ladder-1."+book.suffix, language=book.suffix %}{% endcodesnippet %}


### 双队列

{% codesnippet "./code/word-ladder-2."+book.suffix, language=book.suffix %}{% endcodesnippet %}


### 相关题目

* [Word Ladder II](word-ladder-ii.md)
