---
title: 4Sum II
---

### 描述

Given four lists A, B, C, D of integer values, compute how many tuples `(i, j, k, l)` there are such that `A[i] + B[j] + C[k] + D[l]` is zero.

To make problem a bit easier, all A, B, C, D have same length of N where 0 ≤ N ≤ 500. All integers are in the range of $-2^{28}$ to $2^{28}$ - 1 and the result is guaranteed to be at most $2^{31}$ - 1.

**Example**:

> **Input**:  
> A = [ 1, 2]  
> B = [-2,-1]  
> C = [-1, 2]  
> D = [ 0, 2]
>
> **Output**:  
> 2
>
> **Explanation**:  
> The two tuples are:
>
> 1. (0, 0, 0, 1) -> A[0] + B[0] + C[0] + D[1] = 1 + (-2) + (-1) + 2 = 0
> 2. (1, 1, 0, 0) -> A[1] + B[1] + C[0] + D[0] = 2 + (-1) + (-1) + 0 = 0

### 分析

1. 4 层循环暴力搜索，时间复杂度 O($n^4$)，空间复杂度 O(1).
2. 用一个 HashMap 缓存数组 A+B，另一个 HashMap 缓存 C+D，key 为和，value 为和出现的次数，然后用 2 层循环，遍历两个 HashMap，统计和为 0 的次数。该方法时间复杂度 O($n^2$)，空间复杂度 O($n^2$)，用空间换取了时间。
3. 推广到 k 个数组，也可以用上述方法，用一个 HashMap 缓存前$\frac{k}{2}$个数组的和，另一个 HashMap 缓存后$\frac{k}{2}$个数组的和，然后遍历两个 HashMap，统计和为 0 的次数。时间复杂度 O($n^{\frac{k}{2}}$)，空间复杂度 O($n^{\frac{k}{2}}$)。

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
# 4Sum II
# HashMap缓存和出现的次数
# Time Complexity: O(n^2)，Space Complexity: O(n^2)
from collections import Counter
from itertools import product
class Solution:
    def fourSumCount(self, A: List[int], B: List[int], C: List[int], D: List[int]) -> int:
        AB = Counter(a+b for a, b in product(A, B))
        CD = Counter(c+d for c, d in product(C, D))
        count = 0
        for num in AB:
            if -num in CD:
                count += AB[num] * CD[-num]
        return count
```

</TabItem>
<TabItem value="java">

```java
// 4Sum II
// HashMap缓存和出现的次数
// Time Complexity: O(n^2)，Space Complexity: O(n^2)
class Solution {
    public int fourSumCount(int[] A, int[] B, int[] C, int[] D) {
        Map<Integer, Integer> ab = makeSum(A, B);
        Map<Integer, Integer> cd = makeSum(C, D);
        int count = 0;
        for (Map.Entry<Integer, Integer> entry : ab.entrySet()) {
            if (cd.containsKey(-entry.getKey())) {
                count += entry.getValue() * cd.get(-entry.getKey());
            }
        }
        return count;
    }
    public Map<Integer, Integer> makeSum(int[] nums1, int[] nums2) {
        Map<Integer, Integer> m = new HashMap<>();
        for (int x : nums1) {
            for (int y : nums2) {
                int sum = x+y;
                m.merge(sum, 1, Integer::sum);
            }
        }
        return m;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// 4Sum II
// HashMap缓存和出现的次数
// Time Complexity: O(n^2)，Space Complexity: O(n^2)
class Solution {
public:
    int fourSumCount(vector<int>& A, vector<int>& B, vector<int>& C, vector<int>& D) {
        unordered_map<int, int> ab = makeSum(A, B);
        unordered_map<int, int> cd = makeSum(C, D);
        int count = 0;
        for (std::pair<int, int> entry : ab) {
            if (cd.count(-entry.first)) {
                count += entry.second * cd[-entry.first];
            }
        }
        return count;
    }
    unordered_map<int, int> makeSum(const vector<int>& nums1, const vector<int>& nums2) {
        unordered_map<int, int> m;
        for (int x : nums1) {
            for (int y : nums2) {
                m[x+y]++;
            }
        }
        return m;
    }
};
```

</TabItem>
</Tabs>

### 相关题目

- [2Sum](two-sum.md)
- [2Sum II](../dual-pointers/2sum-ii.md)
- [3Sum](../dual-pointers/3sum.md)
- [3Sum Closest](../dual-pointers/3sum-closest.md)
- [4Sum](../dual-pointers/4sum.md)
