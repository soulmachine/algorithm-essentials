---
title: Moving Average from Data Stream
---

### 描述

Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.

**Example**:

> MovingAverage m = new MovingAverage(3);  
> m.next(1) = 1  
> m.next(10) = (1 + 10) / 2  
> m.next(3) = (1 + 10 + 3) / 3  
> m.next(5) = (10 + 3 + 5) / 3

### 分析

可以用一个双端队列，大小为窗口大小，并用一个变量存储总和。每次新来一个元素，就插入到尾部，并从头部弹出旧元素，最后要更新总和。

由于这个双端队列的大小是固定的，可以优化为一个数组，用循环队列来实现。

### 代码

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

#### 双端队列

<Tabs
defaultValue="python"
values={[
{ label: 'Python', value: 'python', },
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="python">

```python
# Moving Average of Data Stream
# Time Complexity O(1), Space Complexity O(n)
class MovingAverage:
    def __init__(self, capacity: int):
        self.capacity = capacity
        self.queue = deque()
        self.window_sum = 0.0
        self.count = 0

    def next(self, val: int) -> float:
        self.count += 1
        self.queue.append(val)
        head = self.queue.popleft() if self.count > self.capacity else 0
        self.window_sum = self.window_sum - head + val
        return self.window_sum / min(self.capacity, self.count)
```

</TabItem>
<TabItem value="java">

```java
// Moving Average of Data Stream
// Time Complexity O(1), Space Complexity O(n)
class MovingAverage {
  private int capacity, count = 0;
  private double windowSum = 0.0;
  private Deque<Integer> queue = new ArrayDeque<>();

  public MovingAverage(int capacity) {
    this.capacity = capacity;
  }

  public double next(int value) {
    ++count;
    queue.add(value);
    int head = count > capacity ? queue.poll() : 0;
    windowSum = windowSum - head + value;
    return windowSum / Math.min(capacity, count);
  }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Moving Average of Data Stream
// Time Complexity O(1), Space Complexity O(n)
class MovingAverage {
public:
    /** Initialize your data structure here. */
    MovingAverage(int capacity) {
        this->capacity = capacity;
    }

    double next(int val) {
        ++count;
        queue.push_back(val);
        int head = count > capacity ? queue.front() : 0;
        if (count > capacity) queue.pop_front();
        window_sum = window_sum - head + val;
        return window_sum / min(capacity, count);
    }
private:
    int capacity, count = 0;
    double window_sum = 0;
    deque<int> queue;
};
```

</TabItem>
</Tabs>

#### 循环队列

<Tabs
defaultValue="python"
values={[
{ label: 'Python', value: 'python', },
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="python">

```python
# Moving Average of Data Stream
# Time Complexity O(1), Space Complexity O(n)
class MovingAverage:
    def __init__(self, capacity: int):
        self.q = [0] * capacity
        self.capacity = capacity
        self.head = 0
        self.count = 0
        self.window_sum = 0.0

    def next(self, value: int) -> float:
        tail = (self.head + self.count) % self.capacity
        self.count += 1
        self.window_sum = self.window_sum - self.q[tail] + value
        self.q[tail] = value
        return self.window_sum / min(self.capacity, self.count)
```

</TabItem>
<TabItem value="java">

```java
// Moving Average of Data Stream
// Time Complexity O(1), Space Complexity O(n)
class MovingAverage {  
  private int[] q;
  private int capacity, head, count;
  private double windowSum = 0.0;

  public MovingAverage(int capacity) {
    q = new int[capacity];
    this.capacity = capacity;
    head = 0;
    count = 0;
  }

  public double next(int value) {
    int tail = (head + count) % capacity;
    count++;
    windowSum = windowSum - q[tail] + value;
    q[tail] = value;
    return windowSum / Math.min(capacity, count);
  }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Moving Average of Data Stream
// Time Complexity O(1), Space Complexity O(n)
class MovingAverage {
public:
    MovingAverage(int size) {
        q = new int[size];
        std::fill_n(q, size, 0);
        capacity = size;
        head = 0;
        count = 0;
    }

    double next(int value) {
        int tail = (head + count) % capacity;
        count++;
        windowSum = windowSum - q[tail] + value;
        q[tail] = value;
        return windowSum / min(capacity, count);
    }
private:
    int *q;
    int capacity, head, count;
    double windowSum = 0.0;
};

```

</TabItem>
</Tabs>

### 相关题目

- [Median of Data Stream](../stack/median-of-data-stream)
