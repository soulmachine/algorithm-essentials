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

- 0 <= capacity, key, value <= $10^4$
- At most $10^5$ calls will be made to get and put.

**Follow up**: Could you do both operations in `O(1)` time complexity?

### 分析

### 代码

本题比 [LRU Cache](lru-cache.md) 更复杂，但大体上是类似的。

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

<Tabs
defaultValue="java"
values={[
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
// LRU Cache
// 时间复杂度O(logn)，空间复杂度O(n)
class LRUCache{
private:
    struct CacheNode {
        int key;
        int value;
        CacheNode(int k, int v) :key(k), value(v){}
    };
public:
    LRUCache(int capacity) {
        this->capacity = capacity;
    }

    int get(int key) {
        if (cacheMap.find(key) == cacheMap.end()) return -1;

        // 把当前访问的节点移到链表头部，并且更新map中该节点的地址
        cacheList.splice(cacheList.begin(), cacheList, cacheMap[key]);
        cacheMap[key] = cacheList.begin();
        return cacheMap[key]->value;
    }

    void set(int key, int value) {
        if (cacheMap.find(key) == cacheMap.end()) {
            if (cacheList.size() == capacity) { //删除链表尾部节点（最少访问的节点）
                cacheMap.erase(cacheList.back().key);
                cacheList.pop_back();
            }
            // 插入新节点到链表头部, 并且在map中增加该节点
            cacheList.push_front(CacheNode(key, value));
            cacheMap[key] = cacheList.begin();
        } else {
            //更新节点的值，把当前访问的节点移到链表头部,并且更新map中该节点的地址
            cacheMap[key]->value = value;
            cacheList.splice(cacheList.begin(), cacheList, cacheMap[key]);
            cacheMap[key] = cacheList.begin();
        }
    }
private:
    list<CacheNode> cacheList; // doubly linked list
    unordered_map<int, list<CacheNode>::iterator> cacheMap;
    int capacity;
};
```

</TabItem>
</Tabs>

### 相关题目

- [LRU Cache](lru-cache.md)
