---
title: Most Stones Removed with Same Row or Column
---

### 描述

TODO

### 分析

这是一个典型的并查集问题，先把 `class DSU` 模版抄一遍，接下来核心逻辑只需要几行：把所有的石头暴力两两组合，如果二者在同一行或者同一列，则合并，因此时间复杂度为 $O(N^2 \times \log^* N)$。

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
// TODO
```

</TabItem>
<TabItem value="cpp">

```cpp
class DSU {
// Plese copy from https://algorithm-essentials.soulmachine.me/graph/ufs/#union-by-rank
};

// Most Stones Removed with Same Row or Column
// Time complexity: O(N^2*log*N)
// Space complexity: O(N)
class Solution {
public:
    int removeStones(const vector<vector<int>>& stones) {
        const int N = stones.size();
        DSU dsu(N);
        int result = 0;
        for (int i = 0; i < N; i++) {
            for (int j = i+1; j < N; j++) {
                if (shareSameRowOrColumn(stones[i], stones[j]))
                    result += dsu.merge(i, j);
            }
        }
        return result;
    }
private:
    bool shareSameRowOrColumn(const vector<int>& a, const vector<int>& b) {
        return a[0] == b[0] || a[1] == b[1];
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Empty file - nothing to translate since only comment is "TODO"

# Note: Python uses '#' for comments instead of '//'
# TODO
```

</TabItem>
</Tabs>
