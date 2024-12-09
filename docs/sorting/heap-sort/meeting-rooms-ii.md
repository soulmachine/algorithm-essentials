---
title: Meeting Rooms II
---

### 描述

Given an array of meeting time intervals consisting of start and end times `[[s1,e1],[s2,e2],...]` (s<sub>i</sub> < e<sub>i</sub>), find the minimum number of conference rooms required.

**Example 1**:

> **Input**: [[0, 30],[5, 10],[15, 20]]  
> **Output**: 2

**Example 2**:

> **Input**: [[7,10],[2,4]]  
> **Output**: 1

### 分析

首先将数组按照`interval`的开始时间排序，然后设置一个小根堆，用于存储的正在使用中的会议室，按结束时间排序，堆顶就是结束时间最小的`interval`。遍历数组，把一个一个的`interval`压入堆，每次压入之前，把新区间与堆顶的区间进行比较，如果新区间的开始时间大于堆顶的结束时间，说明堆顶的会议室已经结束，把它弹出，然后压入新区间。数组遍历结束后，堆的大小就是所需要的会议室数量。

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
// Meeting Rooms II
// Time Complexity: O(nlogn), Space Complexity: O(n)
class Solution {
    public int minMeetingRooms(int[][] intervals) {
        if (intervals.length == 0) return 0;
        Arrays.sort(intervals,(int[] a, int[] b) ->a[0] - b[0]);

        PriorityQueue<Integer> pq = new PriorityQueue<Integer>();
        pq.offer(intervals[0][1]);

        for (int i = 1; i < intervals.length; i++) {
            if (intervals[i][0] >= pq.peek()) pq.poll();
            pq.add(intervals[i][1]);
        }

        return pq.size();
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
# Meeting Rooms II
# Time Complexity: O(nlogn), Space Complexity: O(n)
def minMeetingRooms(intervals):
    if not intervals:
        return 0
    intervals.sort(key=lambda x: x[0])

    import heapq
    pq = []
    heapq.heappush(pq, intervals[0][1])

    for i in range(1, len(intervals)):
        if intervals[i][0] >= pq[0]:
            heapq.heappop(pq)
        heapq.heappush(pq, intervals[i][1])

    return len(pq)
```

</TabItem>
</Tabs>

### 相关题目

- [Meeting Rooms](../../array/meeting-rooms.md)
