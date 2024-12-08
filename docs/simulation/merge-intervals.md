---
title: Merge Intervals
---

### 描述

Given a collection of intervals, merge all overlapping intervals.

For example,
Given `[1,3],[2,6],[8,10],[15,18]`,
return `[1,6],[8,10],[15,18]`

### 分析

复用一下 Insert Intervals 的解法即可，创建一个新的 interval 集合，然后每次从旧的里面取一个 interval 出来，然后插入到新的集合中。

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
// Merge Interval
// 复用一下Insert Intervals的解法即可
// 时间复杂度O(n1+n2+...)，空间复杂度O(1)
public class Solution {
    public int[][] merge(int[][] intervals) {
        ArrayList<int[]> list = new ArrayList<>();
        for (int[] newInterval : intervals) {
            insert(list, newInterval);
        }
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
// Merge Interval
// Time complexity: O(nlogn)
// Space complexity: O(1)
class Solution {
public:
    vector<vector<int>> merge(vector<vector<int>>& intervals) {
        sort(intervals.begin(), intervals.end());

        vector<vector<int>> merged;
        for (auto interval : intervals) {
            if (merged.empty() || merged.back()[1] < interval[0]) {
                merged.push_back(interval);
            } else {
                merged.back()[1] = max(merged.back()[1], interval[1]);
            }
        }
        return merged;
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Merge Interval
# Reuse solution from Insert Intervals
# Time complexity O(n1+n2+...), space complexity O(1)
class Solution:
    def merge(self, intervals: list[list[int]]) -> list[list[int]]:
        result = []
        for newInterval in intervals:
            self.insert(result, newInterval)
        return result

    def insert(self, intervals: list[list[int]], newInterval: list[int]) -> None:
        i = 0
        while i < len(intervals):
            cur = intervals[i]
            if newInterval[1] < cur[0]:
                intervals.insert(i, newInterval)
                return
            elif newInterval[0] > cur[1]:
                i += 1
            else:
                newInterval[0] = min(newInterval[0], cur[0])
                newInterval[1] = max(newInterval[1], cur[1])
                intervals.pop(i)
        intervals.append(newInterval)
```

</TabItem>
</Tabs>

### 相关题目

- [Insert Interval](insert-interval.md)
- [Employee Free Time](employee-free-time.md)
