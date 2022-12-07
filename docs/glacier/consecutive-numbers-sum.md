---
title: Consecutive Numbers Sum
---

### 描述

Given an integer `n`, return the number of ways you can write n as the sum of consecutive positive integers.

**Example 1:**

> **Input**: n = 5  
> **Output**: 2  
> **Explanation**: 5 = 2 + 3

**Example 2:**

> **Input**: n = 9  
> **Output**: 3  
> **Explanation**: 9 = 4 + 5 = 2 + 3 + 4

**Example 3:**

> **Input**: n = 15  
> **Output**: 4  
> **Explanation**: 15 = 8 + 7 = 4 + 5 + 6 = 1 + 2 + 3 + 4 + 5

**Constraints:**

* 1 <= n <= $10^9$

### 分析

<https://blog.csdn.net/qq_46105170/article/details/119196729>

### 代码

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

<Tabs
defaultValue="java"
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
// Consecutive Numbers Sum
// Time complexity: O(sqrt(n))
// Space complexity: O(1)
public class Solution {
    public int consecutiveNumbersSum(int n) {
        int result = 0;
        for (int k = 1; k * k + k <= 2 * n; k++) {
            if ((n - k * (k - 1) / 2) % k == 0) {
                result++;
            }
        }
        
        return result;
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