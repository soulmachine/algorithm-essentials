---
title: LFU Cache
---

### 描述

Design and implement a data structure for `Least Frequently Used (LFU)` cache.

Implement the `LFUCache` class:

- `LFUCache(int capacity)` Initializes the object with the `capacity` of the data structure.
- `int get(int key)` Gets the value of the `key` if the `key` exists in the cache. Otherwise, returns `-1`.
- `void put(int key, int value)` Sets or inserts the value if the `key` is not already present. When the cache reaches its `capacity`, it should invalidate the least frequently used item before inserting a new item. For this problem, when there is a tie (i.e., two or more keys with the same frequency), the **least recently** used `key` would be evicted.

**Notice that** the number of times an item is used is the number of calls to the `get` and `put` functions for that item since it was inserted. This number is set to zero when the item is removed.

**Example 1**:

> **Input**:  
> ["LFUCache", "put", "put", "get", "put", "get", "get", "put", "get", "get", "get"]  
> [[2], [1, 1], [2, 2], [1], [3, 3], [2], [3], [4, 4], [1], [3], [4]]  
> **Output**:  
> [null, null, null, 1, null, -1, 3, null, -1, 3, 4]
>
> **Explanation**:  
> LFUCache lfu = new LFUCache(2);  
> lfu.put(1, 1);  
> lfu.put(2, 2);  
> lfu.get(1); // return 1  
> lfu.put(3, 3); // evicts key 2  
> lfu.get(2); // return -1 (not found)  
> lfu.get(3); // return 3  
> lfu.put(4, 4); // evicts key 1.  
> lfu.get(1); // return -1 (not found)  
> lfu.get(3); // return 3  
> lfu.get(4); // return 4

**Constraints**:

- $0 \leq \text{capacity}, \text{key}, \text{value} \leq 10^4$
- At most $10^5$ calls will be made to get and put.

**Follow up**: Could you do both operations in `O(1)` time complexity?

### 分析

`int get(int key)` 需要 O(1)，意味着我们需要一个 `HashMap<Integer, Node> nodeMap`，由 key 指向`Node`节点，这个节点里包含它的值`value`和频率`count`等信息。

当缓存到达最大容量时，需要把访问频率最低的元素弹出去，因此我们需要一个整数变量`min`，来记录最小的频率。还需要一种 O(1)的方法，能够根据`min`的值，找到对应的元素列表，这些元素的访问频率都等于`min`，因此最佳方法是用一个`HashMap<Integer, DList> countMap`，把频率映射到双向链表。为啥用双向链表？因为每次访问一个`key`，这个`key`的频率就会增 1，那么这个节点需要从旧的列表摘除，插入到新的列表，这种需要频繁插入，删除的场景，显然适合用双向链表。

### 代码

本题比 [LRU Cache](lru-cache.md) 更复杂，但大体上是类似的。

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

<Tabs
defaultValue="python"
values={[
{ label: 'Python', value: 'python', },
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// LFU Cache
// Two HashMap + Doubly Linked List
public class LFUCache {
    int capacity, size;
    int min; // keep track of the minimum frequency
    Map<Integer, Node> nodeMap; // key -> Node
    Map<Integer, DList> countMap; // count -> DList

    public LFUCache(int capacity) {
        this.capacity = capacity;
        nodeMap = new HashMap<>();
        countMap = new HashMap<>();
    }

    // Time Complexity: O(1)
    public int get(int key) {
        Node node = nodeMap.get(key);
        if (node == null) return -1;
        update(node);
        return node.value;
    }

    // Time Complexity: O(1)
    public void put(int key, int value) {
        if (capacity == 0) return;
        Node node;
        if (nodeMap.containsKey(key)) {
            node = nodeMap.get(key);
            node.value = value;
            update(node);
        } else {
            node = new Node(key, value);
            nodeMap.put(key, node);
            if (size == capacity) {
                DList lastList = countMap.get(min);
                nodeMap.remove(lastList.pollLast().key);
                size--;
            }
            size++;
            min = 1; // reset min to 1
            DList newList = countMap.getOrDefault(node.count, new DList());
            newList.offerFirst(node);
            countMap.put(node.count, newList);
        }
    }

    // Increase count in countMap
    private void update(Node node) {
        DList oldList = countMap.get(node.count);
        oldList.remove(node);
        // Make min point to another list
        if (node.count == min && oldList.size == 0) min++;

        node.count++;
        DList newList = countMap.getOrDefault(node.count, new DList());
        newList.offerFirst(node);
        countMap.put(node.count, newList);
    }

    // Node of doubly linked list
    static class Node {
        int key, value, count;
        Node prev, next;
        Node(int key, int value) {
            this.key = key;
            this.value = value;
            count = 1;
        }
    }

    // Doubly linked list
    static class DList {
        Node head, tail;
        int size;

        DList() {
            // head and tail are two dummy nodes
            head = new Node(0, 0);
            tail = new Node(0, 0);
            head.next = tail;
            tail.prev = head;
        }

        void offerFirst(Node node) {
            head.next.prev = node;
            node.next = head.next;
            node.prev = head;
            head.next = node;
            size++;
        }

        // Remove a node in the middle
        void remove(Node node) {
            if (node == null) return;
            node.prev.next = node.next;
            node.next.prev = node.prev;
            size--;
        }

        // Remove the tail node
        Node pollLast() {
            Node last = tail.prev;
            remove(last);
            return last;
        }
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// TODO
```

</TabItem>

<TabItem value="python">

```python
# LFU Cache
# Two HashMap + Doubly Linked List
class LFUCache:
    def __init__(self, capacity):
        self.capacity = capacity
        self.size = 0
        self.min = 0  # keep track of the minimum frequency
        self.node_map = {}  # key -> Node
        self.count_map = {}  # count -> DList

    # Time Complexity: O(1)
    def get(self, key):
        if key not in self.node_map:
            return -1
        node = self.node_map[key]
        self._update(node)
        return node.value

    # Time Complexity: O(1)
    def put(self, key, value):
        if self.capacity == 0:
            return
        if key in self.node_map:
            node = self.node_map[key]
            node.value = value
            self._update(node)
        else:
            node = Node(key, value)
            self.node_map[key] = node
            if self.size == self.capacity:
                last_list = self.count_map[self.min]
                del self.node_map[last_list.poll_last().key]
                self.size -= 1
            self.size += 1
            self.min = 1  # reset min to 1
            new_list = self.count_map.get(node.count, DList())
            new_list.offer_first(node)
            self.count_map[node.count] = new_list

    # Increase count in count_map
    def _update(self, node):
        old_list = self.count_map[node.count]
        old_list.remove(node)
        # Make min point to another list
        if node.count == self.min and old_list.size == 0:
            self.min += 1

        node.count += 1
        new_list = self.count_map.get(node.count, DList())
        new_list.offer_first(node)
        self.count_map[node.count] = new_list

# Node of doubly linked list
class Node:
    def __init__(self, key, value):
        self.key = key
        self.value = value
        self.count = 1
        self.prev = None
        self.next = None

# Doubly linked list
class DList:
    def __init__(self):
        # head and tail are two dummy nodes
        self.head = Node(0, 0)
        self.tail = Node(0, 0)
        self.head.next = self.tail
        self.tail.prev = self.head
        self.size = 0

    def offer_first(self, node):
        node.next = self.head.next
        node.prev = self.head
        self.head.next.prev = node
        self.head.next = node
        self.size += 1

    # Remove a node in the middle
    def remove(self, node):
        if not node:
            return
        node.prev.next = node.next
        node.next.prev = node.prev
        self.size -= 1

    # Remove the tail node
    def poll_last(self):
        last = self.tail.prev
        self.remove(last)
        return last
```

</TabItem>
</Tabs>

### 相关题目

- [LRU Cache](lru-cache.md)
