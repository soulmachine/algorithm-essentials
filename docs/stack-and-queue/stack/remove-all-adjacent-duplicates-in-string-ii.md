---
title: Remove All Adjacent Duplicates in String II
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
// TODO
```

</TabItem>
<TabItem value="cpp">

```cpp
// Remove All Adjacent Duplicates in String II
// Time complexity: O(n)
// Space complexity: O(n)
class Solution {
public:
    string removeDuplicates(string s, int k) {
        stack<int> counts;
        for (int i = 0; i < s.size(); ++i) {
            if (i == 0 || s[i] != s[i - 1]) {
                counts.push(1);
            } else if (++counts.top() == k) {
                counts.pop();
                s.erase(i - k + 1, k);
                i = i - k;
            }
        }
        return s;
    }
};
```

</TabItem>
</Tabs>
