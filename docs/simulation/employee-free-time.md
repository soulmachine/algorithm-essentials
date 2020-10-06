---
title: Employee Free Time
---

### 描述

We are given a list `schedule` of employees, which represents the working time for each employee.

Each employee has a list of non-overlapping `Intervals`, and these intervals are in sorted order.

Return the list of finite intervals representing **common, positive-length free time** for _all employees_, also in sorted order.

(Even though we are representing `Intervals` in the form `[x, y]`, the objects inside are `Intervals`, not lists or arrays. For example, `schedule[0][0].start = 1`, `schedule[0][0].end = 2`, and `schedule[0][0][0]` is not defined). Also, we wouldn't include intervals like [5, 5] in our answer, as they have zero length.

**Example 1**:

> **Input**: schedule = [[[1,2],[5,6]],[[1,3]],[[4,10]]]
>
> **Output**: [[3,4]]
>
> **Explanation**: There are a total of three employees, and all common
> free time intervals would be [-inf, 1], [3, 4], [10, inf].
> We discard any intervals that contain inf as they aren't finite.

**Example 2**:

> **Input**: schedule = [[[1,3],[6,7]],[[2,4]],[[2,5],[9,12]]]
>
> **Output**: [[5,6],[7,9]]

**Constraints**:

- 1 <= schedule.length , schedule[i].length <= 50
- 0 <= schedule[i].start < schedule[i].end <= 10^8

### 分析

这题求的是区间之间的空白段，跟 [Merge Intervals](merge-intervals.md)是反过来的，所以可以直接复用 Merge Intervals 的代码，然后取反即可。

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
// Employee Free Time
// 时间复杂度O(n)，空间复杂度O(1)
public class Solution {
    public List<Interval> employeeFreeTime(List<List<Interval>> schedule) {
        List<Interval> merged = merge(schedule.stream()
                .flatMap(List::stream)
                .collect(Collectors.toList()));
        List<Interval> result = new ArrayList<>();
        for (int i = 0; i < merged.size()-1; ++i) {
            result.add(new Interval(merged.get(i).end, merged.get(i+1).start ));
        }
        return result;
    }

    private List<Interval> merge(List<Interval> intervals) {
        List<Interval> result = new ArrayList<>();
        for (int i = 0; i < intervals.size(); i++) {
            insert(result, intervals.get(i));
        }
        return result;
    }
    private static List<Interval> insert(List<Interval> intervals,
                                         Interval newInterval) {
        for (int i = 0; i < intervals.size();) {
            final Interval cur = intervals.get(i);
            if (newInterval.end < cur.start) {
                intervals.add(i, newInterval);
                return intervals;
            } else if (newInterval.start > cur.end) {
                ++i;
                continue;
            } else {
                newInterval.start = Math.min(newInterval.start, cur.start);
                newInterval.end = Math.max(newInterval.end, cur.end);
                intervals.remove(i);
            }
        }
        intervals.add(newInterval);
        return intervals;
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

- [Merge Intervals](merge-intervals.md)
