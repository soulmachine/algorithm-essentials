---
title: Meeting Rooms
---

### 描述

Given an array of meeting time `intervals` where `intervals[i]` = [start<sub>i</sub>, end<sub>i</sub>], determine if a person could attend all meetings.

**Example 1**:

> **Input**: intervals = [[0,30],[5,10],[15,20]]  
> **Output**: false

**Example 2**:

> **Input**: intervals = [[7,10],[2,4]]  
> **Output**: true

### 分析

先排序，然后遍历数组，判断前后两个区间是否重叠。

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
// Meeting Rooms
// Time Complexity: O(nlogn), Space Complexity: O(1)
class Solution {
    public boolean canAttendMeetings(int[][] intervals) {
        Arrays.sort(intervals, (a, b) -> a[0] - b[0]);
        for (int i = 0; i < intervals.length - 1; i++) {
            if (intervals[i][1] > intervals[i + 1][0]) {
                return false;
            }
        }
        return true;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// TODO
```

</TabItem>
</Tabs>

### 相关题目

- [Meeting Rooms II](../sorting/heap-sort/meeting-rooms-ii.md)
