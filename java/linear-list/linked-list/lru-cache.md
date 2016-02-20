## LRU Cache


### 描述

Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and set.

`get(key)` - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.

`set(key, value)` - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.


### 分析

为了使查找、插入和删除都有较高的性能，这题的关键是要使用一个双向链表和一个HashMap，因为：

* HashMap保存每个节点的地址，可以基本保证在`O(1)`时间内查找节点
* 双向链表能后在`O(1)`时间内添加和删除节点，单链表则不行


具体实现细节：

* 越靠近链表头部，表示节点上次访问距离现在时间最短，尾部的节点表示最近访问最少
* 访问节点时，如果节点存在，把该节点交换到链表头部，同时更新hash表中该节点的地址
* 插入节点时，如果cache的size达到了上限capacity，则删除尾部节点，同时要在hash表中删除对应的项；新节点插入链表头部

![LRU Cche](../../images/lru-cache.png)

### 代码

{% if book.cpp %}
C++的`std::list` 就是个双向链表，且它有个 `splice()`方法，`O(1)`时间，非常好用。
{% endif %}

{% if book.java %}
Java中也有双向链表`LinkedList`, 但是 `LinkedList` 封装的太深，没有能在`O(1)`时间内删除中间某个元素的API(C++的`list`有个`splice()`, O(1), 所以本题C++可以放心使用`splice()`)，于是我们只能自己实现一个双向链表。

本题有的人直接用 `LinkedHashMap` ，代码更短，但这是一种偷懒做法，面试官一定会让你自己重新实现。
{% endif %}

{% codesnippet "./code/lru-cache."+book.suffix, language=book.suffix %}{% endcodesnippet %}
