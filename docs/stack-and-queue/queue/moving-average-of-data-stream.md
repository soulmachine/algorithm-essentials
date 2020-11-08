---
title: Moving Average of Data Stream
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
    def __init__(self, size: int):
        self.size = size
        self.queue = deque()
        self.window_sum = 0.0
        self.count = 0

    def next(self, val: int) -> float:
        self.count += 1
        self.queue.append(val)
        head = self.queue.popleft() if self.count > self.size else 0
        self.window_sum = self.window_sum - head + val
        return self.window_sum / min(self.size, self.count)
```

</TabItem>
<TabItem value="java">

```java
// Moving Average of Data Stream
// Time Complexity O(1), Space Complexity O(n)
class MovingAverage {
  private int size, count = 0;
  private double windowSum = 0.0;
  private Deque<Integer> queue = new ArrayDeque<>();

  public MovingAverage(int size) {
    this.size = size;
  }

  public double next(int val) {
    ++count;
    queue.add(val);
    int head = count > size ? queue.poll() : 0;
    windowSum = windowSum - head + val;
    return windowSum / Math.min(size, count);
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
    MovingAverage(int size) {
        this->size = size;
    }

    double next(int val) {
        ++count;
        queue.push_back(val);
        int head = count > size ? queue.front() : 0;
        if (count > size) queue.pop_front();
        window_sum = window_sum - head + val;
        return window_sum / min(size, count);
    }
private:
    int size, count = 0;
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
    def __init__(self, size: int):
        self.size = size
        self.queue = [0] * size
        self.tail = 0
        self.window_sum = 0.0
        self.count = 0

    def next(self, val: int) -> float:
        self.count += 1
        head_index = (self.tail + 1) % self.size
        self.window_sum = self.window_sum - self.queue[head_index] + val
        # move forward for one step
        self.tail = (self.tail + 1) % self.size
        self.queue[self.tail] = val
        return self.window_sum / min(self.size, self.count)
```

</TabItem>
<TabItem value="java">

```java
// Moving Average of Data Stream
// Time Complexity O(1), Space Complexity O(n)
class MovingAverage {
  private int size, count = 0, tail = 0;
  private double windowSum = 0.0;
  private int[] queue;

  public MovingAverage(int size) {
    this.size = size;
    this.queue = new int[size];
  }

  public double next(int val) {
    ++this.count;
    int headIndex = (this.tail + 1) % this.size;
    this.windowSum = this.windowSum - this.queue[headIndex] + val;
    // move forward for one step
    this.tail = (this.tail + 1) % size;
    this.queue[this.tail] = val;
    return this.windowSum / Math.min(this.size, this.count);
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
        this->size = size;
        this->queue = vector<int>(size);
    }

    double next(int val) {
        ++count;
        int head_index = (tail + 1) % size;
        window_sum = window_sum - queue[head_index] + val;
        // move forward for one step
        tail = (tail + 1) % size;
        queue[tail] = val;
        return window_sum / min(size, count);
    }
private:
    int size, count = 0, tail = 0;
    double window_sum = 0;
    vector<int> queue;
};

```

</TabItem>
</Tabs>

### 相关题目

- [Median of Data Stream](../stack/median-of-data-stream)
