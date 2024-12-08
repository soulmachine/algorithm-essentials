---
title: Trapping Rain Water
---

### 描述

Given `n` non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

For example,
Given `[0,1,0,2,1,0,1,3,2,1,2,1]`, return 6.

![Trapping Rain Water](/img/trapping-rain-water.png)

### 分析

对于每个柱子，找到其左右两边最高的柱子，该柱子能容纳的面积就是`min(left_peak, right_peak) - height`。

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
// Trapping Rain Water
// 时间复杂度O(n)，空间复杂度O(1)
class Solution {
  public: int trap(vector < int > & height) {
    int left = 0, right = height.size() - 1;
    int result = 0;
    int left_peak = 0, right_peak = 0;
    while (left < right) {
      if (height[left] < height[right]) {
        if (height[left] >= left_peak) {
          left_peak = height[left];
        } else {
          result += (left_peak - height[left]);
        }
        ++left;
      } else {
        if (height[right] >= right_peak) {
          right_peak = height[right];
        } else {
          result += (right_peak - height[right]);
        }
        --right;
      }
    }
    return result;
  }
};
```

</TabItem>

<TabItem value="python">

```python
# Python code snippet with just "# TODO"
# TODO
```

</TabItem>
</Tabs>

### 相关题目

- [Container With Most Water](container-with-most-water.md)
- [Largest Rectangle in Histogram](../stack-and-queue/stack/largest-rectangle-in-histogram.md)
