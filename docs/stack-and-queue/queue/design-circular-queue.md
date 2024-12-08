---
title: Design Circular Queue
---

### 描述

TODO

### 分析

TODO

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
// Design Circular Queues
class MyCircularQueue {
    private int[] q;
    private int capacity, head, count;

    public MyCircularQueue(int k) {
        q = new int[k];
        capacity = k;
        head = 0;
        count = 0;
    }

    public boolean enQueue(int value) {
        if (isFull()) return false;
        q[(head + count) % capacity] = value;
        count += 1;
        return true;
    }

    public boolean deQueue() {
        if (isEmpty()) return false;
        head = (head + 1) % capacity;
        count -= 1;
        return true;
    }

    public int Front() {
        if (isEmpty()) return -1;
        return q[head];
    }

    public int Rear() {
        if (isEmpty()) return -1;
        int tail = (head + count - 1) % capacity;
        return q[tail];
    }

    public boolean isEmpty() {
        return count == 0;
    }

    public boolean isFull() {
        return count == capacity;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Design Circular Queues
class MyCircularQueue {
public:
    MyCircularQueue(int k) {
        q = new int[k];
        capacity = k;
        head = 0;
        count = 0;
    }
    ~MyCircularQueue() {
        delete[] q;
    }

    bool enQueue(int value) {
        if (isFull()) return false;
        q[(head + count) % capacity] = value;
        count += 1;
        return true;
    }
    
    bool deQueue() {
        if (isEmpty()) return false;
        head = (head + 1) % capacity;
        count -= 1;
        return true;
    }
    
    int Front() {
        if (isEmpty()) return -1;
        return q[head];
    }
    
    int Rear() {
        if (isEmpty()) return -1;
        int tail = (head + count - 1) % capacity;
        return q[tail];
    }
    
    bool isEmpty() {
        return count == 0;
    }
    
    bool isFull() {
        return count == capacity;
    }

private:
    int *q;
    int capacity, head, count;
};
```

</TabItem>

<TabItem value="python">

```python
# Design Circular Queues
class MyCircularQueue:
    def __init__(self, k: int):
        self.q = [0] * k
        self.capacity = k
        self.head = 0
        self.count = 0

    def enQueue(self, value: int) -> bool:
        if self.isFull(): return False
        self.q[(self.head + self.count) % self.capacity] = value
        self.count += 1
        return True

    def deQueue(self) -> bool:
        if self.isEmpty(): return False
        self.head = (self.head + 1) % self.capacity
        self.count -= 1
        return True

    def Front(self) -> int:
        if self.isEmpty(): return -1
        return self.q[self.head]

    def Rear(self) -> int:
        if self.isEmpty(): return -1
        tail = (self.head + self.count - 1) % self.capacity
        return self.q[tail]

    def isEmpty(self) -> bool:
        return self.count == 0

    def isFull(self) -> bool:
        return self.count == self.capacity
```

</TabItem>
</Tabs>
