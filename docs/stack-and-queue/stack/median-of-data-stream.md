---
title: Median of Data Stream
---

### 描述

Median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value. So the median is the mean of the two middle value.

For example,  
`[2,3,4]`, the median is `3`  
`[2,3]`, the median is `(2 + 3) / 2 = 2.5`

Design a data structure that supports the following two operations:

- `void addNum(int num)` - Add a integer number from the data stream to the data structure.
- `double findMedian()` - Return the median of all elements so far.

**Example**:

> addNum(1)  
> addNum(2)  
> findMedian() -> 1.5  
> addNum(3)  
> findMedian() -> 2

**Follow up**:

1. If all integer numbers from the stream are between 0 and 100, how would you optimize it?
1. If 99% of all integer numbers from the stream are between 0 and 100, how would you optimize it?

### 分析

求中位数，最直观的方法是把数组排序，然后 `n/2` 位置的数就是中位数。`addNum()`时间复杂度是 O(1), `findMedian()`的时间复杂度是 n(logn)。

为了提高 `findMedian()`的速度，我们可以在 `addNum()`源源不断插入新元素的时候，使用插入排序，保证数组是已经排序好了的，这样 `findMedian()`的时间复杂度是 O(1), `addNum()`的时间复杂度是 O(logn)+O(n)=O(n)，因为二分查找插入位置需要 O(logn)，后面的元素全部平移需要 O(n)。

对于查找中位数这个需求，把整个数组排序有点计算过头了，因此肯定不是最快的。下面开始讨论一种更快的方法。

可以使用两个堆，一个大根堆，一个小根堆，大根堆存放较小的一半元素，小根堆存放较大的一半元素，维持两个堆的大小相同，那么这两个堆的根节点就是中位数。当 n 为奇数时，中位数就是大根堆的根节点，当 n 为偶数时，中位数就是两个堆的根节点之和除以 2。`addNum()`时间复杂度是 O(logn), `findMedian()`的时间复杂度是 O(1)。

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
<TabItem value="python">

```python
# Median of Data Stream
# Using two heaps
# Overall Space Complexity: O(n)
class MedianFinder:

    def __init__(self):
        self.min_heap = []
        self.max_heap = []

    def addNum(self, num: int) -> None:
        """Time Complexity: O(logn)"""
        root = heapq.heappushpop(self.max_heap,-num)
        heapq.heappush(self.min_heap, -root)
        while len(self.max_heap) < len(self.min_heap):
            root = heapq.heappop(self.min_heap)
            heapq.heappush(self.max_heap, -root)

    def findMedian(self) -> float:
        """Time Complexity: O(1)"""
        if len(self.max_heap) == len(self.min_heap):
            return (-self.max_heap[0]  + self.min_heap[0])/2
        else:
            return -self.max_heap[0]
```

</TabItem>
<TabItem value="java">

```java
// Median of Data Stream
// Using two heaps
// Overall Space Complexity: O(n)
class MedianFinder {
    private PriorityQueue<Integer> maxHeap;
    private PriorityQueue<Integer> minHeap;

    public MedianFinder() {
        maxHeap = new PriorityQueue<>();
        minHeap = new PriorityQueue<>((a,b) ->  -1 * Integer.compare(a, b));
    }

    // Time Complexity: O(logn)
    public void addNum(int num) {
        maxHeap.offer(num);

        minHeap.offer(maxHeap.poll());

        if (maxHeap.size() < minHeap.size()) {
            maxHeap.offer(minHeap.poll());
        }
    }

    // Time Complexity: O(1)
    public double findMedian() {
        if (maxHeap.size() == minHeap.size()) {
            return (maxHeap.peek() + minHeap.peek()) * 0.5;
        } else {
            return maxHeap.peek();
        }
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Median of Data Stream
// Using two heaps
// Overall Space Complexity: O(n)
class MedianFinder {
    priority_queue<int> max_heap;
    priority_queue<int, vector<int>, greater<int>> min_heap;

public:
    // Time Complexity: O(logn)
    void addNum(int num) {
        max_heap.push(num);

        min_heap.push(max_heap.top());
        max_heap.pop();

        if (max_heap.size() < min_heap.size()) {
            max_heap.push(min_heap.top());
            min_heap.pop();
        }
    }

    // Time Complexity: O(1)
    double findMedian() {
        if (max_heap.size() == min_heap.size()) {
            return (max_heap.top() + min_heap.top()) * 0.5;
        } else {
            return max_heap.top();
        }
    }
};
```

</TabItem>
</Tabs>

### 相关题目

- [Moving Average from Data Stream](../queue/moving-average-from-data-stream)
