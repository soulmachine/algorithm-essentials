---
title: Last Stone Weight
---

### 描述

TODO

### 分析

TODO

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
// Last Stone Weight
// Time complexity: O(nlogn)
// Space complexity: O(n)
class Solution {
    public int lastStoneWeight(int[] stones) {
        // max heap
        PriorityQueue<Integer> heap = new PriorityQueue<>(Comparator.reverseOrder());
        for (int stone: stones) {
            heap.add(stone);
        }

        while (heap.size() > 1) {
            int stone1 = heap.poll();
            int stone2 = heap.poll();
            if (stone1 != stone2) {
                heap.offer(stone1 - stone2);
            }
        }

        return heap.isEmpty() ? 0 : heap.poll();
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
