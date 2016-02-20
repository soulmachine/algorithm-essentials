## Word Ladder II


### 描述

Given two words (start and end), and a dictionary, find all shortest transformation sequence(s) from start to end, such that:

* Only one letter can be changed at a time
* Each intermediate word must exist in the dictionary

For example, Given:

```
start = "hit"
end = "cog"
dict = ["hot","dot","dog","lot","log"]
```

Return

```cpp
[
    ["hit","hot","dot","dog","cog"],
    ["hit","hot","lot","log","cog"]
]
```

Note:

* All words have the same length.
* All words contain only lowercase alphabetic characters.


### 分析

跟 Word Ladder比，这题是求路径本身，不是路径长度，也是BFS，略微麻烦点。

求一条路径和求所有路径有很大的不同，求一条路径，每个状态节点只需要记录一个前驱即可；求所有路径时，有的状态节点可能有多个父节点，即要记录多个前驱。

如果当前路径长度已经超过当前最短路径长度，可以中止对该路径的处理，因为我们要找的是最短路径。


### 单队列

{% codesnippet "./code/word-ladder-ii-1."+book.suffix, language=book.suffix %}{% endcodesnippet %}


### 双队列

{% codesnippet "./code/word-ladder-ii-2."+book.suffix, language=book.suffix %}{% endcodesnippet %}


### 图的广搜

前面的解法，在状态扩展的时候，每次都是从'a'到'z'全部枚举一遍，重复计算，比较浪费，其实当给定字典`dict`后，单词与单词之间的路径就固定下来了，本质上单词与单词之间构成了一个无向图。如果事先把这个图构建出来，那么状态扩展就会大大加快。

{% codesnippet "./code/word-ladder-ii-3."+book.suffix, language=book.suffix %}{% endcodesnippet %}


### 相关题目

* [Word Ladder](word-ladder.md)
