---
title: Insert Interval
---

### 描述

Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

You may assume that the intervals were initially sorted according to their start times.

Example 1:
Given intervals `[1,3],[6,9]`, insert and merge `[2,5]` in as `[1,5],[6,9]`.

Example 2:
Given `[1,2],[3,5],[6,7],[8,10],[12,16]`, insert and merge `[4,9]` in as `[1,2],[3,10],[12,16]`.

This is because the new interval `[4,9]` overlaps with `[3,5],[6,7],[8,10]`.

### 分析

无

### 代码

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
// Insert Interval
// 时间复杂度O(n)，空间复杂度O(1)
public class Solution {
    public int[][] insert(int[][] intervals, int[] newInterval) {
        ArrayList<int[]> list = new ArrayList<>(Arrays.asList(intervals));
        insert(list, newInterval);
        return list.toArray(new int[0][2]);
    }

    private void insert(ArrayList<int[]> intervals, int[] newInterval) {
        for (int i = 0; i < intervals.size();) {
            final int[] cur = intervals.get(i);
            if (newInterval[1] < cur[0]) {
                intervals.add(i, newInterval);
                return;
            } else if (newInterval[0] > cur[1]) {
                ++i;
            } else {
                newInterval[0] = Math.min(newInterval[0], cur[0]);
                newInterval[1] = Math.max(newInterval[1], cur[1]);
                intervals.remove(i);
            }
        }
        intervals.add(newInterval);
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Insert Interval
// 时间复杂度O(n)，空间复杂度O(1)
class Solution {
public:
    vector<Interval> insert(vector<Interval> &intervals, Interval newInterval) {
        vector<Interval>::iterator it = intervals.begin();
        while (it != intervals.end()) {
            if (newInterval.end < it->start) {
                intervals.insert(it, newInterval);
                return intervals;
            } else if (newInterval.start > it->end) {
                it++;
                continue;
            } else {
                newInterval.start = min(newInterval.start, it->start);
                newInterval.end = max(newInterval.end, it->end);
                it = intervals.erase(it);
            }
        }
        intervals.insert(intervals.end(), newInterval);
        return intervals;
    }
};
```

</TabItem>
</Tabs>

### 相关题目

- [Merge Intervals](merge-intervals.md)
