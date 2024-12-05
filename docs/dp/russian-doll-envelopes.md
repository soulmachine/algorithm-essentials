---
title: Russian Doll Envelopes
---

### 问题描述

You are given a 2D array of integers `envelopes` where `envelopes[i] = [wi, hi]` represents the width and the height of an envelope.

One envelope can fit into another if and only if both the width and height of one envelope are greater than the other envelope's width and height.

Return the **maximum number of envelopes** you can Russian doll (i.e., put one inside the other).

**Note**: You cannot rotate an envelope.

**Example 1**:

> **Input**: envelopes = [[5,4],[6,4],[6,7],[2,3]]  
> **Output**: 3  
> **Explanation**: The maximum number of envelopes you can Russian doll is 3 ([2,3] => [5,4] => [6,7]).

**Example 2**:

> **Input**: envelopes = [[1,1],[1,1],[1,1]]  
> **Output**: 1

**Constraints**:

* $1 \leq envelopes.length \leq $10^5$
* envelopes[i].length == 2
* $1 \leq $w_i$, $h_i$ \leq 10^5$

### 分析

这道题目其实是最长递增子序列的一个变种，相当于在二维平面中寻找一个最长递增的子序列。先对宽度`w`进行升序排序，如果`w`相同，则按照高度`h`降序排序，之后把所有的`h`作为一个数组，在这个数组上计算 LIS 的长度就是答案。

为什么呢？

* 首先，对宽度`w`从小到大排序，确保了`w`这个维度可以嵌套，接下来只需要专注高度`h`这个维度能否嵌套。
* 其次，两个`w`相同的信封不能嵌套（因为题目说了长宽相同也无法嵌套），所以对于宽度`w`相同的信封，按照高度`h`进行降序排序，确保了LIS 中不存在多个`w`相同的信封。

### 代码

#### 动规

这个版本会超时。

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

<Tabs
defaultValue="cpp"
values={[
{ label: 'Python', value: 'python', },
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="python">

```python
TODO
```

</TabItem>
<TabItem value="java">

```java
// Russian Doll Envelopes
// Time Complexity: O(N^2)
// Space Complexity: O(N)
// This version will TLE
class Solution {
    public int maxEnvelopes(int[][] envelopes) {
        Arrays.sort(envelopes, new Comparator<int[]>() {
            public int compare(int[] arr1, int[] arr2) {
                if (arr1[0] == arr2[0]) {
                    return arr2[1] - arr1[1];
                } else {
                    return arr1[0] - arr2[0];
                }
           }
        });

        int[] heights = new int[envelopes.length];
        for (int i = 0; i < envelopes.length; ++i) heights[i] = envelopes[i][1];

        return lengthOfLIS(heights);
    }

    private static int lengthOfLIS(int[] nums) {
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
// Russian Doll Envelopes
// Time Complexity: O(N^2)
// Space Complexity: O(N)
// This version will TLE
class Solution {
public:
    int maxEnvelopes(vector<vector<int>>& envelopes) {
        std::sort(envelopes.begin(), envelopes.end(), compare);
        vector<int> heights(envelopes.size());
        for (int i = 0; i < envelopes.size(); i++) {
            heights[i] = envelopes[i][1];
        }
        return lengthOfLIS(heights);
    }

private:
    // sort by width in ascending order, while sort by height in descending order
    bool static compare(const vector<int>& envelope1, const vector<int>& envelope2) {
        if (envelope1[0] == envelope2[0]) {
            return envelope1[1] > envelope2[1];
        } else {
            return envelope1[0] < envelope2[0];
        }
    }

    int static lengthOfLIS(vector<int>& nums) {
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
</Tabs>

#### 二分查找

<Tabs
defaultValue="cpp"
values={[
{ label: 'Python', value: 'python', },
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="python">

```python
TODO
```

</TabItem>
<TabItem value="java">

```java
// Russian Doll Envelopes
// Time Complexity: O(NlogN)
// Space Complexity: O(N)
class Solution {
    public int maxEnvelopes(int[][] envelopes) {
        Arrays.sort(envelopes, new Comparator<int[]>() {
            public int compare(int[] arr1, int[] arr2) {
                if (arr1[0] == arr2[0]) {
                    return arr2[1] - arr1[1];
                } else {
                    return arr1[0] - arr2[0];
                }
           }
        });

        int[] heights = new int[envelopes.length];
        for (int i = 0; i < envelopes.length; ++i) heights[i] = envelopes[i][1];

        return lengthOfLIS(heights);
    }

    private static int lengthOfLIS(int[] nums) {
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
// Russian Doll Envelopes
// Time Complexity: O(NlogN)
// Space Complexity: O(N)
class Solution {
public:
    int maxEnvelopes(vector<vector<int>>& envelopes) {
        std::sort(envelopes.begin(), envelopes.end(), compare);
        vector<int> heights(envelopes.size());
        for (int i = 0; i < envelopes.size(); i++) {
            heights[i] = envelopes[i][1];
        }
        return lengthOfLIS(heights);
    }

private:
    // sort by width in ascending order, while sort by height in descending order
    bool static compare(const vector<int>& envelope1, const vector<int>& envelope2) {
        if (envelope1[0] == envelope2[0]) {
            return envelope1[1] > envelope2[1];
        } else {
            return envelope1[0] < envelope2[0];
        }
    }

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