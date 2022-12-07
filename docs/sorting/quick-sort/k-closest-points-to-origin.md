---
title: K Closest Points to Origin
---

### 描述

TODO

### 分析

返回的结果可以是任意顺序，用 Quick select.

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
// TODO
```

</TabItem>
<TabItem value="cpp">

```cpp
// K Closest Points to Origin
// Time complexity: O(N)
// Space complexity: O(1)
class Solution {
public:
    vector<vector<int>> kClosest(vector<vector<int>>& points, int k) {
        quick_select(points, 0, points.size() - 1, k-1);
        vector<vector<int>> result;
        std::copy(points.begin(), points.begin() + k, std::back_inserter(result));
        return result;
    }

private:
    vector<int> quick_select(vector<vector<int>>& points, int low, int high, int k) {
        if (low == high) return points[low];
        const int pos = partition(points, low, high);

        if (pos == k) {
            return points[pos];
        } else if (pos < k) {
            return quick_select(points, pos+1, high, k);
        } else {
            return quick_select(points, low, pos-1, k);
        }
    }
    int partition(vector<vector<int>>& points, int i, int j) {
        const vector<int> pivot = points[i]; // copy, do NOT use reference!
        const int pivot_dist = dist(pivot);
        while (i < j) {
            while (i < j && dist(points[j]) >= pivot_dist) --j;
            points[i] = points[j];
            while(i < j && dist(points[i]) <= pivot_dist) ++i;
            points[j] = points[i];
        }
        points[i] = pivot;
        return i;
    }
    
    int dist(const vector<int>& p) {
        return p[0] * p[0] + p[1] * p[1];
    }
};
```

</TabItem>
</Tabs>
