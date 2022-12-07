---
title: Two City Scheduling
---

### 描述

TODO

### 分析

* 假设所有的人都选择城市A， 这时候总花费是`sum = sum{a[i][0]}`
* 然后要选择一半的人改成B， 这个时候, 选择某一个人对`sum`的影响是`d=a[i][1]-a[i][0]`
* 那么， 我们要让结果最小， 就需要让这个d最小， 那按照这个d对数组排序，然后选择最小的一半就好

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
// Two City Scheduling
// Time complexity: O(nlogn)
// Space complexity: O(logn)
class Solution {
    public int twoCitySchedCost(int[][] costs) {
        // sorted by d in ascending order
        Arrays.sort(costs, new Comparator<int[]>() {
            public int compare(int[] a, int[] b) {
                int v1 = a[1] - a[0];    
                int v2 = b[1] - b[0];
                return v1-v2;
            }
        });

        int sum = 0;
        for(int[] cost: costs) {
            sum += cost[0];
        }

        for(int i = 0; i < costs.length/2; ++i) {
            sum += costs[i][1] - costs[i][0];
        }
        return sum;
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
