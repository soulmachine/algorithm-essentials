---
title: Minimum Moves to Equal Array Elements
---

### 描述

TODO

### 分析

把最小的n-1个元素都增1，相当于把最大的元素减1，如此反复，需要的总操作次数就是 $\sum_{i=0} ^{n-1} a[i] - n * \min\left\{a\right\}$。

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
# TODO
```

</TabItem>
<TabItem value="java">

```java
// Minimum Moves to Equal Array Elements
// Time complexity: O(n)
// Space complexity: O(1)
public class Solution {
    public int minMoves(int[] nums) {
        int moves = 0, min = Integer.MAX_VALUE;
        for (int i = 0; i < nums.length; i++) {
            moves += nums[i];
            min = Math.min(min, nums[i]);
        }
        return moves - min * nums.length;
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
