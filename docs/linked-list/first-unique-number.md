---
title: First Unique Number
---

### 描述

TODO

### 分析

本题要做到的效果，就是一个队列，但这个队列比较奇怪，只保存不重复的元素，而且如果来了一个元素，导致中间某个元素重复了，要删除中间这个元素。什么数据结构，能做到以O(1)的速度删除中间元素？只能是双向链表。

为了能O(1)的速度访问双向链表中间元素，我们还需要一个HashMap来保存每个元素的位置。这样一看，本题用到的数据结构跟[LRU Cache](lru-cache.md)一模一样。

### 代码

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
// First Unique Number
class FirstUnique {
    private DLinkedList list = new DLinkedList();
    private Set<Integer> visited = new HashSet<>();
    private Map<Integer, DLinkedNode> m = new HashMap<>();

    // O(n)
    public FirstUnique(int[] nums) {
        for (int num : nums) {
            this.add(num);
        }
    }

    // O(1)
    public int showFirstUnique() {
        DLinkedNode head = list.peekHead();
        if (head != null) {
            return head.value;
        } else {
            return -1;
        }
    }

    // O(1)
    public void add(int value) {
        if (!visited.contains(value)) {
            visited.add(value);
            DLinkedNode node = new DLinkedNode(value);
            list.offerTail(node);
            m.put(value, node);
        } else {
            DLinkedNode node = m.get(value);
            list.remove(node);
            m.remove(value);
        }
    }

    // Node of doubly linked list
    static class DLinkedNode {
        int value;
        DLinkedNode prev, next;

        DLinkedNode(int value) {
            this.value = value;
        }
    }

    // Doubly linked list
    static class DLinkedList {
        DLinkedNode head, tail;
        int size;

        DLinkedList() {
            // head and tail are two dummy nodes
            head = new DLinkedNode(0);
            tail = new DLinkedNode(0);
            head.next = tail;
            tail.prev = head;
        }

        // Add a new node before tail
        void offerTail(DLinkedNode node) {
            node.next = tail;
            node.prev = tail.prev;
            tail.prev.next = node;
            tail.prev = node;
            size++;
        }

        // Remove a node in the middle
        void remove(DLinkedNode node) {
            if (node == null) return;
            node.prev.next = node.next;
            node.next.prev = node.prev;
            size--;
        }

        boolean isEmpty() {
            return size == 0;
        }

        DLinkedNode peekHead() {
            return isEmpty()? null:head.next;
        }
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
class FirstUnique {
private:
    // Node of doubly linked list
    class DLinkedNode {
    public:
        int value;
        DLinkedNode *prev=nullptr, *next=nullptr;

        DLinkedNode(int value) {
            this->value = value;
        }
    };

    // Doubly linked list
    class DLinkedList {
    public:
        DLinkedList() {
            // head and tail are two dummy nodes
            head = new DLinkedNode(0);
            tail = new DLinkedNode(0);
            head->next = tail;
            tail->prev = head;
        }

        // Add a new node before tail
        void offerTail(DLinkedNode *node) {
            node->next = tail;
            node->prev = tail->prev;
            tail->prev->next = node;
            tail->prev = node;
            size++;
        }

        // Remove a node in the middle
        void remove(DLinkedNode *node) {
            if (node == nullptr) return;
            node->prev->next = node->next;
            node->next->prev = node->prev;
            delete node;
            size--;
        }

        bool isEmpty() {
            return size == 0;
        }

        DLinkedNode* peekHead() {
            return isEmpty()? nullptr : head->next;
        }

    private:
        DLinkedNode *head, *tail;
        int size = 0;
    };

public:
    // O(n)
    FirstUnique(vector<int>& nums) {
        for (int num : nums) {
            this->add(num);
        }

    }

    // O(1)
    int showFirstUnique() {
        DLinkedNode *head = list.peekHead();
        if (head != nullptr) {
            return head->value;
        } else {
            return -1;
        }
    }

    // O(1)
    void add(int value) {
        if (visited.find(value) == visited.end()) {
            visited.insert(value);
            DLinkedNode *node = new DLinkedNode(value);
            list.offerTail(node);
            m[value] = node;
        } else {
            DLinkedNode *node = m[value];
            list.remove(node);
            m.erase(value);
        }
    }

private:
    DLinkedList list;
    unordered_set<int> visited;
    unordered_map<int, DLinkedNode*> m;
};
```

</TabItem>

<TabItem value="python">

```python
# First Unique Number
class DLinkedNode:
    def __init__(self, value):
        self.value = value
        self.prev = None
        self.next = None

class DLinkedList:
    def __init__(self):
        # head and tail are two dummy nodes
        self.head = DLinkedNode(0)
        self.tail = DLinkedNode(0)
        self.head.next = self.tail
        self.tail.prev = self.head
        self.size = 0

    # Add a new node before tail
    def offerTail(self, node):
        node.next = self.tail
        node.prev = self.tail.prev
        self.tail.prev.next = node
        self.tail.prev = node
        self.size += 1

    # Remove a node in the middle
    def remove(self, node):
        if node is None:
            return
        node.prev.next = node.next
        node.next.prev = node.prev
        self.size -= 1

    def isEmpty(self):
        return self.size == 0

    def peekHead(self):
        return None if self.isEmpty() else self.head.next

class FirstUnique:
    def __init__(self, nums):
        self.list = DLinkedList()
        self.visited = set()
        self.m = {}
        # O(n)
        for num in nums:
            self.add(num)

    # O(1)
    def showFirstUnique(self):
        head = self.list.peekHead()
        if head:
            return head.value
        else:
            return -1

    # O(1)
    def add(self, value):
        if value not in self.visited:
            self.visited.add(value)
            node = DLinkedNode(value)
            self.list.offerTail(node)
            self.m[value] = node
        else:
            node = self.m.get(value)
            self.list.remove(node)
            self.m.pop(value, None)
```

</TabItem>
</Tabs>

### 相关题目

- [LRU Cache](lru-cache.md)
