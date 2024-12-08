---
title: Maximum Sum Circular Subarray
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
<TabItem value="java">

```java
// TODO
```

</TabItem>
<TabItem value="cpp">

```cpp
// Maximum Sum Circular Subarray
// 时间复杂度O(n)，空间复杂度O(1)
// see https://leetcode.com/problems/maximum-sum-circular-subarray/discuss/178422/One-Pass
class Solution {
public:
    int maxSubarraySumCircular(vector<int>& nums) {
        int total = 0, globalMax = nums[0], localMax = 0, globalMin = nums[0], localMin = 0;
        for (int& num : nums) {
            localMax = max(localMax + num, num);
            globalMax = max(globalMax, localMax);
            localMin = min(localMin + num, num);
            globalMin = min(globalMin, localMin);
            total += num;
        }
        return globalMax > 0 ? max(globalMax, total - globalMin) : globalMax;
    }
};
```

</TabItem>

<TabItem value="python">

```python
# No code was provided to translate. Please provide the Java code you'd like to be translated to Python 3.
def todo():
    pass
```

</TabItem>
</Tabs>

### 相关题目

- [Maximum Subarray](maximum-subarray.md)
- [Maximum Subarray Sum with One Deletion](maximum-subarray-sum-with-one-deletion.md)
