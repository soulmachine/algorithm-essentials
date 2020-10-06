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

这是一个多阶段决策问题，求最长，是一个最优化问题，用 BFS, 贪心或 DP。

如果用 BFS，首先用数组中的所有元素作为根节点，形成 n 颗树，每棵树开始往下扩展，出现逆序则终止，最后计算每棵树的高度，取最大，就是最终结果。算法复杂度为`O(n!)`。

本题中，一个节点往下扩展的时候，没有一个确定的准则，让你走哪些边，本题不具有贪心选择性质，因此不能用贪心法。

我们来尝试用 DP 来解决这题。最重要的是要定义出状态。首先从状态扩展这方面看，对于数组中的一个元素，它往后走，凡是比它大的元素，都可以作为下一步，因此这里找不到突破口。

我们换一个角度，从结果来入手，我们要求的最长递增子序列，一个递增子序列，肯定是有首尾两个端点的，假设我们定义 f[i] 为以第`i`个元素为起点的最长递增子序列，那么 `f[i]`和`f[j]`之间没有必然联系，这个状态不好用。

假设定义`f[i]`为以第`i`个元素为终点的最长递增子序列，那么如果`i<j`且`nums[i]<nums[j]`，则`f[i]`一定是`f[j]`的前缀。这个状态能表示子问题之间的关系，可以接着深入下去。

现在正式开始定义，我们定义状态`f[i]`为第`i`个元素为终点的最长递增子序列的长度，那么状态转移方程是

`f[j] = max{f[i], 0 <= i < j && f[i] < f[j]} + 1`

有了状态和状态转移方程，代码就不难写了。

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

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
// 时间复杂度O(n^2)，空间复杂度O(n)
public class Solution {
    public int lengthOfLIS(int[] nums) {
        if (nums == null || nums.length == 0) return 0;
        // f[i]表示以i结尾的最长递增子序列的长度
        int[] f = new int[nums.length];
        Arrays.fill(f, 1);
        int global = 1;
        for (int j = 1; j < nums.length; ++j) {
            for (int i = 0; i < j; ++i) {
                if (nums[i] < nums[j]) {
                    f[j] = Math.max(f[j], f[i] + 1);
                }
            }
            global = Math.max(global, f[j]);
        }
        return global;
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
        if (nums.empty()) return 0;
        // f[i]表示以i结尾的最长递增子序列的长度
        vector<int> f(nums.size(), 1);
        int global = 1;
        for (int j = 1; j < nums.size(); ++j) {
            for (int i = 0; i < j; ++i) {
                if (nums[i] < nums[j]) {
                    f[j] = max(f[j], f[i] + 1);
                }
            }
            global = max(global, f[j]);
        }
        return global;
    }
};
```

</TabItem>
</Tabs>

### 解法 2 Insert Position

本题最后有一个进阶问题，能不能`O(n log n)` 解决？有。

维护一个单调递增序列，遍历数组，二分查找每一个数在单调序列中的位置，然后替换之。

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
</Tabs>
