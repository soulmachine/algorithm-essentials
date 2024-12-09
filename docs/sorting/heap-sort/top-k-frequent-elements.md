---
title: Top K Frequent Elements
---

### 描述

Given a non-empty array of integers, return the k most frequent elements.

**Example 1**:

> **Input**: nums = [1,1,1,2,2,3], k = 2  
> **Output**: [1,2]

**Example 2**:

> **Input**: nums = [1], k = 1  
> **Output**: [1]

**Note**:

- You may assume `k` is always valid, 1 ≤ k ≤ number of unique elements.
- Your algorithm's time complexity must be better than **O(n log n)**, where n is the array's size.
- It's guaranteed that the answer is unique, in other words the set of the top k frequent elements is unique.
- You can return the answer in any order.

### 分析

看到 Top K, 很显然，用堆。先用一个 HashMap 统计每个元素出现的频率，然后建立一个大小为`k`的小根堆，按照频率排序，堆顶就是频率最小的元素，遍历 HashMap，将元素不断压入堆，当堆大小达到 k 时，压入一个并弹出一个，保持堆的大小恒定为 k，最后，堆中的 k 个元素就是频率最高 k 个元素，将堆转换为数组，就是所求的结果。时间复杂度 O(nlogk)，空间复杂度 O(n+k)。

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
// Top K Frequent Elements
// HashMap + Min Heap
// Time Complexity: O(nlogk), Space Complexity: O(n+k)
class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> m = new HashMap<>();
        for (int x: nums) {
          m.merge(x, 1, Integer::sum);
        }

        // Min heap, sorted by frequency
        PriorityQueue<Integer> pq = new PriorityQueue<>(
            (x, y) -> m.get(x) - m.get(y));

        for (int x: m.keySet()) {
          pq.offer(x);
          if (pq.size() > k) pq.poll();
        }

        int[] top = new int[k];
        for(int i = k - 1; i >= 0; --i) {
            top[i] = pq.poll();
        }
        return top;
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
# Top K Frequent Elements
# HashMap + Min Heap
# Time Complexity: O(nlogk), Space Complexity: O(n+k)
from collections import Counter
import heapq

def topKFrequent(nums, k):
    m = Counter(nums)

    # Min heap, sorted by frequency
    pq = []
    for x in m:
        heapq.heappush(pq, (m[x], x))
        if len(pq) > k:
            heapq.heappop(pq)

    top = []
    for _ in range(k):
        top.append(heapq.heappop(pq)[1])
    return top[::-1]
```

</TabItem>
</Tabs>

### 相关题目

- [Top K Frequent Words](top-k-frequent-words.md)
