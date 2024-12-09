---
title: Jump Game II
---

### 描述

Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.

For example:
Given array `A = [2,3,1,1,4]`

The minimum number of jumps to reach the last index is 2. (Jump 1 step from index 0 to 1, then 3 steps to the last index.)

### 分析

贪心法。

### 代码 1

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
// Jump Game II
// 时间复杂度O(n)，空间复杂度O(1)
public class Solution {
    public int jump(int[] nums) {
        int step = 0; // 最小步数
        int left = 0;
        int right = 0;  // [left, right]是当前能覆盖的区间
        if (nums.length == 1) return 0;

        while (left <= right) { // 尝试从每一层跳最远
            ++step;
            final int old_right = right;
            for (int i = left; i <= old_right; ++i) {
                int new_right = i + nums[i];
                if (new_right >= nums.length - 1) return step;

                if (new_right > right) right = new_right;
            }
            left = old_right + 1;
        }
        return 0;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// LeetCode, Jump Game II
// 时间复杂度O(n)，空间复杂度O(1)
class Solution {
public:
    int jump(const vector<int>& nums) {
        int step = 0; // 最小步数
        int left = 0;
        int right = 0;  // [left, right]是当前能覆盖的区间
        if (nums.size() == 1) return 0;

        while (left <= right) { // 尝试从每一层跳最远
            ++step;
            const int old_right = right;
            for (int i = left; i <= old_right; ++i) {
                int new_right = i + nums[i];
                if (new_right >= nums.size() - 1) return step;

                if (new_right > right) right = new_right;
            }
            left = old_right + 1;
        }
        return 0;
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Jump Game II
# 时间复杂度O(n)，空间复杂度O(1)
class Solution:
    def jump(self, nums: list[int]) -> int:
        step = 0  # 最小步数
        left = 0
        right = 0  # [left, right]是当前能覆盖的区间
        if len(nums) == 1:
            return 0

        while left <= right:  # 尝试从每一层跳最远
            step += 1
            old_right = right
            for i in range(left, old_right + 1):
                new_right = i + nums[i]
                if new_right >= len(nums) - 1:
                    return step

                if new_right > right:
                    right = new_right
            left = old_right + 1
        return 0
```

</TabItem>
</Tabs>

### 代码 2

<Tabs
defaultValue="java"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// Jump Game II
// 时间复杂度O(n)，空间复杂度O(1)
public class Solution {
    public int jump(int[] nums) {
        int result = 0;
        // the maximum distance that has been reached
        int last = 0;
        // the maximum distance that can be reached by using "ret+1" steps
        int cur = 0;
        for (int i = 0; i < nums.length; ++i) {
            if (i > last) {
                last = cur;
                ++result;
            }
            cur = Math.max(cur, i + nums[i]);
        }

        return result;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Jump Game II
// 时间复杂度O(n)，空间复杂度O(1)
class Solution {
public:
    int jump(const vector<int>& nums) {
        int result = 0;
        // the maximum distance that has been reached
        int last = 0;
        // the maximum distance that can be reached by using "ret+1" steps
        int cur = 0;
        for (int i = 0; i < nums.size(); ++i) {
            if (i > last) {
                last = cur;
                ++result;
            }
            cur = max(cur, i + nums[i]);
        }

        return result;
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Jump Game II
# 时间复杂度O(n)，空间复杂度O(1)
class Solution:
    def jump(self, nums: list[int]) -> int:
        result = 0
        # the maximum distance that has been reached
        last = 0
        # the maximum distance that can be reached by using "ret+1" steps
        cur = 0
        for i in range(len(nums)):
            if i > last:
                last = cur
                result += 1
            cur = max(cur, i + nums[i])
        return result
```

</TabItem>
</Tabs>

### 相关题目

- [Jump Game](jump-game.md)
