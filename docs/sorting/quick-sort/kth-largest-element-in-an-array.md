---
title: Kth Largest Element in an Array
---

### 描述

Find the `k`-th largest element in an unsorted array.

For example, given `[3,2,1,5,6,4]` and `k = 2`, return 5.

**Note**:

You may assume `k` is always valid, 1 ≤ k ≤ array's length.

### 分析

这题是一道很好的面试题目，

- 题目短小，很快就能说清题意
- 有很多种解法。从简单到复杂的解法都有，梯度均匀。
- 不需要预先知道特殊领域知识。

这题有很多思路：

1. 按从大到小全排序，然后取第`k`个元素，时间复杂度`O(nlogn)`，空间复杂度`O(1)`
1. 利用堆进行部分排序。维护一个大根堆，将数组元素全部压入堆，然后弹出`k`次，第`k`个就是答案。时间复杂度`O(klogn)`，空间复杂度`O(n)`
1. 选择排序，第`k`次选择后即可得到第`k`大的数，时间复杂度`O(nk)`，空间复杂度`O(1)`
1. 堆排序，维护一个`k`大小的小根堆，将数组中的每个元素与堆顶元素进行比较，如果比堆顶元素大，则删除堆顶元素并添加该元素，如果比堆顶元素小，则什么也不做，继续下一个元素。时间复杂度`O(nlogk)`，空间复杂度`O(k)`。
1. 利用快速排序中的 partition 思想，从数组中随机选择一个元素 x，把数组划分为前后两部分`sa`和`sb`，`sa`中的元素小于 x，`sb`中的元素大于或等于 x。这时有两种情况：

   1. `sa`的元素个数小于`k`，则递归求解`sb`中的第`k-|sa|`大的元素
   1. `sa`的元素个数大于或等于`k`，则递归求解`sa`中的第`k`大的元素

   时间复杂度`O(n)`，空间复杂度`O(1)`

思路 4 和 5 比较高效，可以接受，其他思路太慢了，不采纳。

### 代码

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

#### 小根堆

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
// Kth Largest Element in an Array
// Time complexity: O(nlogk), Space complexity: O(k)
public class Solution {
    public int findKthLargest(int[] nums, int k) {
        final Queue<Integer> q = new PriorityQueue<>();

        for (int x : nums) {
            q.offer(x);
            if (q.size() > k) {
                q.poll();
            }
        }
        return q.peek();
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Kth Largest Element in an Array
// Time complexity: O(nlogk), Space complexity: O(k)
class Solution {
public:
    int findKthLargest(vector<int>& nums, int k) {
        priority_queue<int, vector<int>, greater<int>> q;
        for (int x : nums) {
            q.push(x);
            if (q.size() > k) {
                q.pop();
            }
        }
        return q.top();
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Kth Largest Element in an Array
# Time complexity: O(nlogk), Space complexity: O(k)
from heapq import heappush, heappop, heappushpop
def findKthLargest(nums: list[int], k: int) -> int:
    q = []
    for x in nums:
        if len(q) < k:
            heappush(q, x)
        else:
            heappushpop(q, x)
    return q[0]
```

</TabItem>
</Tabs>

#### Quickselect

<Tabs
defaultValue="java"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// Kth Largest Element in an Array
// Time complexity: O(n), Space complexity: O(1)
public class Solution {
    public int findKthLargest(int[] nums, int k) {
        return quickSelect(nums, 0, nums.length - 1, nums.length - k);
    }

    private static int quickSelect(int[] nums, int low, int high, int k) {
        if (low == high) return nums[low];
        final int pos = partition(nums, low, high);

        if (pos == k) {
            return nums[pos];
        } else if (pos < k) {
            return quickSelect(nums, pos+1, high, k);
        } else {
            return quickSelect(nums, low, pos-1, k);
        }
    }

    private static int partition(int[] nums, int i, int j) {
        final int pivot = nums[i];
        while (i < j) {
            while (i < j && nums[j] >= pivot) --j;
            nums[i] = nums[j];
            while(i < j && nums[i] <= pivot) ++i;
            nums[j] = nums[i];
        }
        nums[i] = pivot;
        return i;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Kth Largest Element in an Array
// Time complexity: O(n), Space complexity: O(1)
class Solution {
public:
    int findKthLargest(vector<int>& nums, int k) {
        return quick_select(nums, 0, nums.size() - 1, nums.size() - k);
    }
private:
    int quick_select(vector<int>& nums, int low, int high, int k) {
        if (low == high) return nums[low];
        const int pos = partition(nums, low, high);

        if (pos == k) {
            return nums[pos];
        } else if (pos < k) {
            return quick_select(nums, pos+1, high, k);
        } else {
            return quick_select(nums, low, pos-1, k);
        }
    }
    
    int partition(vector<int>& nums, int i, int j) {
        const int pivot = nums[i];
        while (i < j) {
            while (i < j && nums[j] >= pivot) --j;
            nums[i] = nums[j];
            while(i < j && nums[i] <= pivot) ++i;
            nums[j] = nums[i];
        }
        nums[i] = pivot;
        return i;
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Kth Largest Element in an Array
# Time complexity: O(n), Space complexity: O(1)
class Solution:
    def findKthLargest(self, nums: list[int], k: int) -> int:
        return self.quickSelect(nums, 0, len(nums) - 1, len(nums) - k)

    def quickSelect(self, nums: list[int], low: int, high: int, k: int) -> int:
        if low == high:
            return nums[low]
        pos = self.partition(nums, low, high)

        if pos == k:
            return nums[pos]
        elif pos < k:
            return self.quickSelect(nums, pos+1, high, k)
        else:
            return self.quickSelect(nums, low, pos-1, k)

    def partition(self, nums: list[int], i: int, j: int) -> int:
        pivot = nums[i]
        while i < j:
            while i < j and nums[j] >= pivot:
                j -= 1
            nums[i] = nums[j]
            while i < j and nums[i] <= pivot:
                i += 1
            nums[j] = nums[i]
        nums[i] = pivot
        return i
```

</TabItem>
</Tabs>
