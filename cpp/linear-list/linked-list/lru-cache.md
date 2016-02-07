## LRU Cache


### 描述

Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and set.

`get(key)` - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.

`set(key, value)` - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.


### 分析

为了使查找、插入和删除都有较高的性能，我们使用一个双向链表(`std::list`)和一个哈希表(`std::unordered_map`)，因为：

* 哈希表保存每个节点的地址，可以基本保证在`O(1)`时间内查找节点
* 双向链表插入和删除效率高，单向链表插入和删除时，还要查找节点的前驱节点


具体实现细节：

* 越靠近链表头部，表示节点上次访问距离现在时间最短，尾部的节点表示最近访问最少
* 访问节点时，如果节点存在，把该节点交换到链表头部，同时更新hash表中该节点的地址
* 插入节点时，如果cache的size达到了上限capacity，则删除尾部节点，同时要在hash表中删除对应的项；新节点插入链表头部


### 代码

{% if book.cpp %}
  {% codesnippet "./code/lru-cache.cpp", language="cpp" %}{% endcodesnippet %}
{% endif %}
