---
title: Sliding Window Maximum
---

### 描述

Given an array of integers `nums`, there is a sliding window of size `k` which is moving from the very left of the array to the very right. You can only see the `k` numbers in the window. Each time the sliding window moves right by one position.

Return the max sliding window.

**Example 1**:

> **Input**: nums = [1,3,-1,-3,5,3,6,7], k = 3  
> **Output**: [3,3,5,5,6,7]

**Example 2**:

> **Input**: nums = [1], k = 1  
> **Output**: [1]

**Example 3**:

> **Input**: nums = [1,-1], k = 1  
> **Output**: [1,-1]

**Example 4**:

> **Input**: nums = [9,11], k = 2  
> **Output**: [11]

**Example 5**:

> **Input**: nums = [4,-2], k = 2  
> **Output**: [4]

**Constraints**:

- 1 <= nums.length <= $10^5$
- -$10^4$ <= nums[i] <= $10^4$
- 1 <= k <= nums.length

### 分析

简单的暴力法，就是遍历数组，然后遍历窗口内的 k 个元素，找出最大值，时间复杂度 O(nk)。

由于只需要找最大值，最自然的是用大根堆，窗口内维护大小为 k 的堆，滑动窗口前进一步，就插入新元素，删除一个旧元素，这样就可以把暴力法优化到 O($n\log{k}$)。

有可能优化到 O(n)吗？

用一个双端队列，里面存放着窗口内的元素的索引。窗口每次前进一格，先清理队列，然后插入新的索引，并输出`queue[0]`作为当前最大值。清理的逻辑如下：

- 删除所有过期的索引
- 删除比当前元素小的所有元素，它们不可能是最大的。

### 代码

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

#### 双端队列

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
# Sliding Window Maximum
# Using a Deque
# Time Complexity: O(n), Space Complexity: O(k)
from collections import deque
class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        result = []
        q = deque()
        for i in range(0, len(nums)):
            if len(q)>0 and q[0] == i-k:
                q.popleft()
            while len(q) > 0 and nums[q[-1]] < nums[i]:
                q.pop()
            q.append(i)
            if i >= k-1:
                result.append(nums[q[0]])

        return result
```

</TabItem>
<TabItem value="java">

```java
// Sliding Window Maximum
// Using a Deque
// Time Complexity: O(n), Space Complexity: O(k)
class Solution {
    public int[] maxSlidingWindow(int[] nums, int k) {
        int[] result = new int[nums.length-k+1];
        Deque<Integer> q = new ArrayDeque<>();
        for (int i = 0, j = 0; i < nums.length; ++i) {
            if (!q.isEmpty() && q.peekFirst() == i - k) q.pollFirst();
            while (!q.isEmpty() && nums[q.peekLast()] < nums[i]) q.pollLast();
            q.offerLast(i);
            if (i >= k - 1) result[j++] = nums[q.peekFirst()];
        }
        return result;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Sliding Window Maximum
// Using a Deque
// Time Complexity: O(n), Space Complexity: O(k)
class Solution {
public:
    vector<int> maxSlidingWindow(vector<int>& nums, int k) {
        vector<int> result(nums.size()-k+1);
        deque<int> q;
        for (int i = 0, j = 0; i < nums.size(); ++i) {
            if (!q.empty() && q.front() == i - k) q.pop_front();
            while (!q.empty() && nums[q.back()] < nums[i]) q.pop_back();
            q.push_back(i);
            if (i >= k - 1) result[j++] = nums[q.front()];
        }
        return result;
    }
};
```

</TabItem>
</Tabs>

#### 动态规划

将数组分割成大小为 k 的小块，最后一块可能元素个数少于 k。开始位置为 i，结束位置为 j 的滑动窗口，有可能在一个块，也可能横跨两个快。设置两个数组 `left`和`right`, 状态`left[i]`表示从块的开始到下标`i`的最大元素，状态`right[j]`表示从块的结束到下标`j`的最大元素。再次遍历数组，输出数组`max(left[i+k-1], right[i]`，就是最终结果。

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
# Sliding Window Maximum
# Dynamic programming
# Time Complexity: O(n), Space Complexity: O(n)
class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        n = len(nums)
        if n * k == 0:
            return []

        # from left to right
        left = [0] * n
        left[0] = nums[0]
        for i in range(1, n):
            if i % k == 0: # block start
                left[i] = nums[i]
            else:
                left[i] = max(left[i-1], nums[i])

        # from right to left
        right = [0] * n
        right[n - 1] = nums[n - 1]
        for i in reversed(range(n-1)):
            if (i+1)%k == 0: # block end
                right[i] = nums[i]
            else:
                right[i] = max(right[i + 1], nums[i])

        return [max(left[i + k - 1], right[i]) for i in range(n - k + 1)]
```

</TabItem>
<TabItem value="java">

```java
// Sliding Window Maximum
// Dynamic programming
// Time Complexity: O(n), Space Complexity: O(n)
class Solution {
    public int[] maxSlidingWindow(int[] nums, int k) {
        int n = nums.length;
        if (n == 0 || k == 0) {
            return new int[0];
        }

        // from right to left
        int[] left = new int[n];
        left[0] = nums[0];
        for (int i = 1; i < n; i++) {
            if (i % k == 0) { // block start
                left[i] = nums[i];
            } else {
                left[i] = Math.max(left[i-1], nums[i]);
            }
        }

        // from right to left
        int[] right = new int[n];
        right[n - 1] = nums[n - 1];
        for (int i = n-2; i >= 0; i--) {
            if ((i+1) % k == 0) { // block end
                right[i] = nums[i];
            } else {
                right[i] = Math.max(right[i+1], nums[i]);
            }
        }

        int[] result = new int[n-k+1];
        for (int i = 0; i < n-k+1; i++) {
            result[i] = Math.max(left[i + k - 1], right[i]);
        }
        return result;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Sliding Window Maximum
// Dynamic programming
// Time Complexity: O(n), Space Complexity: O(n)
class Solution {
public:
    vector<int> maxSlidingWindow(vector<int>& nums, int k) {
        int n = nums.size();
        if (n == 0 || k == 0) {
            return vector<int>();
        }

        // from right to left
        vector<int> left(n);
        left[0] = nums[0];
        for (int i = 1; i < n; i++) {
            if (i % k == 0) { // block start
                left[i] = nums[i];
            } else {
                left[i] = max(left[i-1], nums[i]);
            }
        }

        // from right to left
        vector<int> right(n);
        right[n - 1] = nums[n - 1];
        for (int i = n-2; i >= 0; i--) {
            if ((i+1) % k == 0) { // block end
                right[i] = nums[i];
            } else {
                right[i] = max(right[i+1], nums[i]);
            }
        }

        vector<int> result(n-k+1);
        for (int i = 0; i < n-k+1; i++) {
            result[i] = max(left[i + k - 1], right[i]);
        }
        return result;
    }
};
```

</TabItem>
</Tabs>

### 相关题目

- [Median of Data Stream](../stack/median-of-data-stream)
