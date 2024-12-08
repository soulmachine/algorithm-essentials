---
title: Longest Increasing Subsequence
---

### 描述

Given an unsorted array of integers, find the length of longest increasing subsequence.

For example,

Given `[10, 9, 2, 5, 3, 7, 101, 18]`,

The longest increasing subsequence is `[2, 3, 7, 101]`, therefore the length is `4`. Note that there may be more than one LIS combination, it is only necessary for you to return the length.

Your algorithm should run in `O(n^2)` complexity.

**Follow up**: Could you improve it to O(n log n) time complexity?

### 解法 1 动规

这是一个多阶段决策问题，求最长，是一个最优化问题。先判断它是否满足动规的两个性质，对于题中的例子，

* `[10, 9, 2, 5, 3, 7, 101, 18]`的答案，必然包含子问题 `[10, 9, 2, 5, 3, 7]` 的答案，即本题具有最优子结构性质
* `[10, 9, 2, 5, 3, 7, 101, 18]` 和 `[10, 9, 2, 5, 3, 7]` 都依赖 `[10, 9, 2, 5, 3]`这个子问题，即本题具有重叠子问题性质

因此本题可以用动规来解决。

最重要的是要定义出状态转移方程。一个递增子序列，肯定是有首尾两个端点的，假设`f[i]`表示以第`i`个元素为起点的最长递增子序列，那么 `f[i]`和`f[j]`之间没有必然联系，这个函数定义不好用。

假设`f[j]`表示以第`j`个元素为终点的最长递增子序列，那么如果`i<j`且`nums[i]<nums[j]`，则`f[i]`一定是`f[j]`的前缀，这个函数定义能表示子问题之间的关系。

以`j`元素为终点的最长递增子序列，长度起码为1，因为最起码可以有一个`j`元素，单元素序列，就是本题的原子问题。

综上，可得状态转移方程为：

$$
f(j)=\begin{cases}
1 & j \geq 0\\
\max\left\{f(i)\right\}+1 & 0 \leq i < j \land nums[i] < nums[j]
\end{cases}
$$

有了状态转移方程，代码就不难写了。

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
// Longest Increasing Subsequence
// 时间复杂度O(n^2)，空间复杂度O(n)
public class Solution {
    public int lengthOfLIS(int[] nums) {
        if (nums == null || nums.length == 0) return 0;
        int[] dp = new int[nums.length];
        Arrays.fill(dp, 1); // base case
        int global = 1;
        for (int j = 1; j < nums.length; ++j) {
            for (int i = 0; i < j; ++i) {
                if (nums[i] < nums[j]) {
                    dp[j] = Math.max(dp[j], dp[i] + 1);
                }
            }
            global = Math.max(global, dp[j]);
        }
        return global;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Longest Increasing Subsequence
// 时间复杂度O(n^2)，空间复杂度O(n)
class Solution {
public:
    int lengthOfLIS(vector<int>& nums) {
        if (nums.empty()) return 0;
        vector<int> dp(nums.size(), 1);
        for (int j = 1; j < nums.size(); ++j) {
            for (int i = 0; i < j; ++i) {
                if (nums[i] < nums[j]) {
                    dp[j] = max(dp[j], dp[i] + 1);
                }
            }
        }
        return *std::max_element(dp.begin(), dp.end());
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Longest Increasing Subsequence
# 时间复杂度O(n^2)，空间复杂度O(n)
def lengthOfLIS(nums):
    if not nums:
        return 0
    dp = [1] * len(nums)  # base case
    global_max = 1
    for j in range(1, len(nums)):
        for i in range(j):
            if nums[i] < nums[j]:
                dp[j] = max(dp[j], dp[i] + 1)
        global_max = max(global_max, dp[j])
    return global_max
```

</TabItem>
</Tabs>

### 解法 2 Insert Position

本题最后有一个进阶问题，能不能`O(n log n)` 解决？

维护一个单调递增序列，遍历数组，二分查找每一个数在单调序列中的位置，然后替换之。

这个算法不需要掌握，面试中几乎用不到，掌握动规解法就够了。

<Tabs
defaultValue="java"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// Longest Increasing Subsequence
// 时间复杂度O(nlogn)，空间复杂度O(n)
public class Solution {
    public int lengthOfLIS(int[] nums) {
        ArrayList<Integer> lis = new ArrayList<>();
        for (int x : nums) {
            int insertPos = lowerBound(lis, 0, lis.size(), x);
            if (insertPos >= lis.size()) {
                lis.add(x);
            } else {
                lis.set(insertPos, x);
            }
        }
        return lis.size();
    }
    private static int lowerBound (ArrayList<Integer> A,
                                   int first, int last, int target) {
        while (first != last) {
            int mid = first + (last - first) / 2;
            if (target > A.get(mid)) first = ++mid;
            else                 last = mid;
        }

        return first;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Longest Increasing Subsequence
// 时间复杂度O(nlogn)，空间复杂度O(n)
class Solution {
public:
    int lengthOfLIS(vector<int>& nums) {
        vector<int> lis;
        for (auto x : nums) {
            int insertPos = lower_bound(lis, 0, lis.size(), x);
            if (insertPos >= lis.size()) {
                lis.push_back(x);
            } else {
                lis[insertPos] = x;
            }
        }
        return lis.size();
    }
    int lower_bound (const vector<int>& A, int first, int last, int target) {
        while (first != last) {
            int mid = first + (last - first) / 2;
            if (target > A[mid]) first = ++mid;
            else                 last = mid;
        }

        return first;
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Longest Increasing Subsequence
# 时间复杂度O(nlogn)，空间复杂度O(n)
class Solution:
    def lengthOfLIS(self, nums: list[int]) -> int:
        lis = []
        for x in nums:
            insert_pos = self.lower_bound(lis, 0, len(lis), x)
            if insert_pos >= len(lis):
                lis.append(x)
            else:
                lis[insert_pos] = x
        return len(lis)

    def lower_bound(self, A: list[int], first: int, last: int, target: int) -> int:
        while first != last:
            mid = first + (last - first) // 2
            if target > A[mid]:
                first = mid + 1
            else:
                last = mid
        return first
```

</TabItem>
</Tabs>
