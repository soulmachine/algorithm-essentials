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
defaultValue="cpp"
values={[
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
</Tabs>
