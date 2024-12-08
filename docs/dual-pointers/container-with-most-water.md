---
title: Container With Most Water
---

### 描述

Given `n` non-negative integers $$a_1, a_2, ..., a_n$$, where each represents a point at coordinate $$(i, a_i)$$. n vertical lines are drawn such that the two endpoints of line `i` is at $$(i, a_i)$$ and `(i, 0)`. Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container.

### 分析

每个容器的面积，取决于最短的木板。

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
// Container With Most Water
// 时间复杂度O(n)，空间复杂度O(1)
public class Solution {
    public int maxArea(int[] height) {
        int start = 0;
        int end = height.length - 1;
        int result = Integer.MIN_VALUE;
        while (start < end) {
            int area = Math.min(height[end], height[start]) * (end - start);
            result = Math.max(result, area);
            if (height[start] <= height[end]) {
                start++;
            } else {
                end--;
            }
        }
        return result;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// LeetCode, Container With Most Water
// 时间复杂度O(n)，空间复杂度O(1)
class Solution {
public:
    int maxArea(vector<int> &height) {
        int start = 0;
        int end = height.size() - 1;
        int result = INT_MIN;
        while (start < end) {
            int area = min(height[end], height[start]) * (end - start);
            result = max(result, area);
            if (height[start] <= height[end]) {
                start++;
            } else {
                end--;
            }
        }
        return result;
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Container With Most Water
# 时间复杂度O(n)，空间复杂度O(1)
class Solution:
    def maxArea(self, height: list[int]) -> int:
        start = 0
        end = len(height) - 1
        result = float('-inf')
        while start < end:
            area = min(height[end], height[start]) * (end - start)
            result = max(result, area)
            if height[start] <= height[end]:
                start += 1
            else:
                end -= 1
        return result
```

</TabItem>
</Tabs>

### 相关题目

- [Trapping Rain Water](trapping-rain-water.md)
- [Largest Rectangle in Histogram](../stack-and-queue/stack/largest-rectangle-in-histogram.md)
